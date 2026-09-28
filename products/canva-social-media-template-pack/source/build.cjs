// Builds the Canva-importable PDFs and preview images for every theme.
// Usage: NODE_PATH=$(npm root -g) node build.cjs
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const { THEMES, FONTS_URL, css, POSTS, STORIES } = require('./templates.cjs');

// Fetch Google Fonts with curl (which honours the system CA bundle) and inline
// them as base64 @font-face rules, so rendering never depends on the browser's
// own network stack.
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36';
const curl = (url, enc) => execFileSync('curl', ['-sSfL', '-A', UA, url], { encoding: enc, maxBuffer: 64 << 20 });
function inlineFonts() {
  const sheet = curl(FONTS_URL, 'utf8');
  return sheet.replace(/url\((https:[^)]+)\)/g, (_, u) => `url(data:font/woff2;base64,${curl(u).toString('base64')})`);
}

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'templates');
const PREVIEW = path.join(ROOT, 'previews');
const THUMBS = path.join(__dirname, '.thumbs'); // intermediate thumbnails for the listing images

const FORMATS = [
  { key: 'posts', list: POSTS, cls: '', w: 1080, h: 1080, file: 'Instagram-Facebook-Posts-1080x1080.pdf' },
  { key: 'stories', list: STORIES, cls: 'story', w: 1080, h: 1920, file: 'Instagram-Facebook-Stories-1080x1920.pdf' },
];

let FONT_CSS = '';
const doc = (theme, fmt) => `<!doctype html><html><head><meta charset="utf-8"><style>${FONT_CSS}${css(theme)}</style></head><body>${fmt.list
  .map((tpl) => `<section class="page ${fmt.cls}">${tpl.html(theme)}</section>`)
  .join('')}</body></html>`;

(async () => {
  FONT_CSS = inlineFonts();
  const browser = await chromium.launch();
  for (const dir of [OUT, PREVIEW, THUMBS]) fs.mkdirSync(dir, { recursive: true });

  for (const [key, theme] of Object.entries(THEMES)) {
    const themeDir = path.join(OUT, theme.name.replace(/\s+/g, '-'));
    fs.mkdirSync(themeDir, { recursive: true });
    for (const fmt of FORMATS) {
      const page = await browser.newPage({ viewport: { width: fmt.w, height: fmt.h } });
      await page.setContent(doc(theme, fmt), { waitUntil: 'load' });
      await page.evaluate(async () => {
        await Promise.all([...document.fonts].map((f) => f.load().catch(() => {})));
        await document.fonts.ready;
      });

      // 1 design pixel = 1 PDF point, so Canva imports each page at its true pixel size.
      await page.pdf({
        path: path.join(themeDir, fmt.file),
        width: `${fmt.w / 72}in`,
        height: `${fmt.h / 72}in`,
        scale: 96 / 72,
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
      });

      const sections = await page.$$('section.page');
      for (let i = 0; i < sections.length; i++) {
        await sections[i].screenshot({ path: path.join(THUMBS, `${key}-${fmt.key}-${String(i + 1).padStart(2, '0')}.jpg`), type: 'jpeg', quality: 88 });
      }
      await page.close();
      console.log(`built ${theme.name} ${fmt.key}`);
    }
  }
  await require('./extras.cjs')(browser, { ROOT, PREVIEW, THUMBS, FONT_CSS, FORMATS });
  await browser.close();
})();
