// Buyer-facing extras: per-theme preview sheets, the Start Here guide PDF and
// the listing hero image. Called from build.cjs once the thumbnails exist.
const fs = require('fs');
const path = require('path');
const { THEMES, POSTS, STORIES } = require('./templates.cjs');

const img = (THUMBS, name) => `data:image/jpeg;base64,${fs.readFileSync(path.join(THUMBS, name)).toString('base64')}`;
const n2 = (i) => String(i).padStart(2, '0');
const T = THEMES.terracotta;
const TOTAL = (POSTS.length + STORIES.length) * Object.keys(THEMES).length;

const base = (FONT_CSS) => `${FONT_CSS}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Poppins',sans-serif;color:${T.ink};background:${T.bg};-webkit-print-color-adjust:exact;print-color-adjust:exact}
.serif{font-family:'Playfair Display',serif}
.eyebrow{font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:${T.accent}}
.shot{display:block;border-radius:10px;box-shadow:0 10px 30px rgba(43,35,32,.18)}`;

async function render(browser, html, opts) {
  const page = await browser.newPage({ viewport: { width: opts.w, height: opts.h } });
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  if (opts.pdf) await page.pdf({ path: opts.pdf, width: `${opts.w}px`, height: `${opts.h}px`, printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  for (const [file, type] of opts.shots || []) await page.screenshot({ path: file, type, ...(type === 'jpeg' ? { quality: 90 } : {}) });
  await page.close();
}

function previewSheet(key, theme, ctx) {
  const card = (fmt, i, w) => `<figure style="width:${w}px"><img class="shot" style="width:${w}px" src="${img(ctx.THUMBS, `${key}-${fmt}-${n2(i + 1)}.jpg`)}"><figcaption style="font-size:18px;margin-top:10px;color:${T.muted}">${fmt === 'posts' ? 'Post' : 'Story'} ${n2(i + 1)} &middot; ${(fmt === 'posts' ? POSTS : STORIES)[i].name}</figcaption></figure>`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${base(ctx.FONT_CSS)}
    body{padding:90px 100px;background:#FFFFFF}
    .grid{display:flex;flex-wrap:wrap;gap:40px 36px}</style></head><body>
    <div class="eyebrow" style="font-size:24px">Canva Social Media Template Pack</div>
    <h1 class="serif" style="font-size:84px;margin:10px 0 16px">${theme.name}</h1>
    <div style="display:flex;gap:14px;margin-bottom:60px">${['bg', 'soft', 'accent', 'accent2', 'ink'].map((c) => `<div style="display:flex;align-items:center;gap:10px;font-size:20px;color:${T.muted}"><span style="width:40px;height:40px;border-radius:50%;background:${theme[c]};border:2px solid rgba(0,0,0,.08)"></span>${theme[c]}</div>`).join('')}</div>
    <h2 class="serif" style="font-size:44px;margin-bottom:30px">20 Posts &middot; 1080 &times; 1080</h2>
    <div class="grid">${POSTS.map((_, i) => card('posts', i, 332)).join('')}</div>
    <h2 class="serif" style="font-size:44px;margin:80px 0 30px">10 Stories &middot; 1080 &times; 1920</h2>
    <div class="grid">${STORIES.map((_, i) => card('stories', i, 332)).join('')}</div>
  </body></html>`;
}

function guide(ctx) {
  const P = (inner, bg = T.bg) => `<section style="width:816px;height:1056px;position:relative;overflow:hidden;background:${bg};padding:72px 76px;break-after:page">${inner}</section>`;
  const thumb = (name, w, style = '') => `<img class="shot" style="width:${w}px;${style}" src="${img(ctx.THUMBS, name)}">`;
  const h = (t) => `<h2 class="serif" style="font-size:40px;margin:0 0 18px">${t}</h2>`;
  const p = (t) => `<p style="font-size:14.5px;line-height:1.65;color:${T.muted};margin-bottom:12px">${t}</p>`;
  const step = (n, title, text) => `<div style="display:flex;gap:18px;margin-bottom:20px"><span style="flex:none;width:38px;height:38px;border-radius:50%;background:${T.accent};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700">${n}</span><div><div style="font-weight:600;font-size:16px;margin-bottom:3px">${title}</div><div style="font-size:14px;line-height:1.6;color:${T.muted}">${text}</div></div></div>`;
  const themeKeys = Object.keys(THEMES);

  const cover = P(`
    <div style="position:absolute;width:520px;height:520px;border-radius:50%;background:${T.accent2};right:-200px;bottom:-240px"></div>
    <div class="eyebrow" style="font-size:13px;margin-top:40px">Start here &middot; Guide &amp; license</div>
    <h1 class="serif" style="font-size:66px;line-height:1.02;margin:14px 0 18px;max-width:560px">Canva Social Media Template Pack</h1>
    <p style="font-size:17px;line-height:1.6;color:${T.muted};max-width:520px">${TOTAL} editable Instagram &amp; Facebook designs &mdash; ${POSTS.length} post layouts and ${STORIES.length} story layouts in ${themeKeys.length} ready-made color themes.</p>
    <div style="position:absolute;left:76px;right:76px;top:470px;display:flex;gap:22px;align-items:flex-end">
      ${thumb('terracotta-posts-04.jpg', 205)}${thumb('midnight-stories-05.jpg', 170)}${thumb('sage-posts-05.jpg', 205)}
    </div>
    <div style="position:absolute;left:76px;right:76px;bottom:64px;display:flex;justify-content:space-between;font-size:13px;color:${T.muted}"><span>Edit in Canva with a free or Pro account</span><span>Instagram &middot; Facebook</span></div>`);

  const howTo = P(`
    <div class="eyebrow" style="font-size:12px;margin-bottom:10px">Step by step</div>
    ${h('How to edit your templates in Canva')}
    ${p('Each theme folder contains two PDF files. Canva turns every page of an imported PDF into an editable design, so every headline, shape and color stays fully editable.')}
    <div style="margin-top:26px">
      ${step(1, 'Open Canva', 'Log in at canva.com (a free account works). From the home page, choose <b>Upload</b> or <b>Create a design &rarr; Import file</b>.')}
      ${step(2, 'Import a PDF', 'Pick the PDF for the theme and format you want, e.g. <i>Terracotta-Sand/Instagram-Facebook-Posts-1080x1080.pdf</i>. Canva opens it as a new multi-page design.')}
      ${step(3, 'Edit the text', 'Double-click any text to replace it with your own words. Fonts are Playfair Display and Poppins &mdash; both free inside Canva.')}
      ${step(4, 'Add your photos', 'Click a "Drop your photo here" box, delete it, and drag in your image, or drop a Canva frame (Elements &rarr; Frames) in its place so photos crop neatly.')}
      ${step(5, 'Change colors in one click', 'Select any shape, click the color swatch, and choose a new color. Use <b>Change all</b> to recolor that color across the whole design.')}
      ${step(6, 'Download &amp; post', 'Click <b>Share &rarr; Download</b>, choose PNG (or JPG), and pick the pages you need. Upload straight to Instagram or Facebook.')}
    </div>
    <div style="margin-top:24px;background:${T.soft};border-radius:16px;padding:20px 24px;font-size:13.5px;line-height:1.6">
      <b>Tip:</b> Story templates keep the top and bottom of the screen clear so Instagram&rsquo;s profile bar and reply box never cover your message. Dashed boxes mark where to place interactive stickers (poll, countdown, questions, link).
    </div>`);

  const kit = P(`
    <div class="eyebrow" style="font-size:12px;margin-bottom:10px">Brand kit</div>
    ${h('Colors, fonts &amp; sizes')}
    ${themeKeys.map((k) => { const t = THEMES[k]; return `<div style="margin:22px 0 8px;font-weight:600;font-size:17px">${t.name}</div><div style="display:flex;gap:10px">${[['Background', 'bg'], ['Soft', 'soft'], ['Text', 'ink'], ['Accent', 'accent'], ['Highlight', 'accent2']].map(([l, c]) => `<div style="flex:1"><div style="height:56px;border-radius:12px;background:${t[c]};border:1px solid rgba(0,0,0,.08)"></div><div style="font-size:11.5px;margin-top:6px;color:${T.muted}">${l}<br><b style="color:${T.ink}">${t[c]}</b></div></div>`).join('')}</div>`; }).join('')}
    <div style="display:flex;gap:24px;margin-top:34px">
      <div style="flex:1;background:${T.soft};border-radius:16px;padding:22px 24px"><div class="serif" style="font-size:34px;font-weight:700">Playfair Display</div><div style="font-size:13px;color:${T.muted};margin-top:4px">Headlines &middot; Bold / Italic</div></div>
      <div style="flex:1;background:${T.soft};border-radius:16px;padding:22px 24px"><div style="font-size:30px;font-weight:600">Poppins</div><div style="font-size:13px;color:${T.muted};margin-top:8px">Body, labels &amp; buttons</div></div>
    </div>
    <table style="width:100%;margin-top:30px;border-collapse:collapse;font-size:13.5px">
      ${[['Format', 'Size (px)', 'Use for'], ['Square post', '1080 × 1080', 'Instagram &amp; Facebook feed, carousels'], ['Story', '1080 × 1920', 'Instagram &amp; Facebook Stories, Reels covers']].map((r, i) => `<tr>${r.map((c) => `<td style="padding:10px 0;border-bottom:1px solid ${T.soft};${i === 0 ? `font-weight:600;color:${T.accent};text-transform:uppercase;letter-spacing:.12em;font-size:11px` : ''}">${c}</td>`).join('')}</tr>`).join('')}
    </table>`);

  const contents = P(`
    <div class="eyebrow" style="font-size:12px;margin-bottom:10px">What's inside</div>
    ${h('Template index')}
    <div style="display:flex;gap:40px;font-size:13.5px;line-height:1.95">
      <div style="flex:1"><div style="font-weight:600;margin-bottom:6px">Posts &middot; 1080 &times; 1080</div>${POSTS.map((t, i) => `<div><span style="color:${T.accent};font-weight:600;display:inline-block;width:30px">${n2(i + 1)}</span>${t.name}</div>`).join('')}</div>
      <div style="flex:1"><div style="font-weight:600;margin-bottom:6px">Stories &middot; 1080 &times; 1920</div>${STORIES.map((t, i) => `<div><span style="color:${T.accent};font-weight:600;display:inline-block;width:30px">${n2(i + 1)}</span>${t.name}</div>`).join('')}
        <div style="margin-top:22px;font-weight:600;margin-bottom:6px">Color themes</div>${themeKeys.map((k) => `<div style="display:flex;align-items:center;gap:10px"><span style="width:14px;height:14px;border-radius:50%;background:${THEMES[k].accent}"></span>${THEMES[k].name}</div>`).join('')}</div>
    </div>
    <div style="margin-top:26px">${h('License')}
      ${p('<b style="color:' + T.ink + '">You may:</b> use these templates for your own business or personal brand, and for client work where you deliver the finished, customized graphics.')}
      ${p('<b style="color:' + T.ink + '">You may not:</b> resell, share or redistribute the template files (edited or unedited) as templates, or include them in another template pack or product.')}
      ${p('Thank you for your purchase &mdash; we can&rsquo;t wait to see what you create!')}</div>`);

  return `<!doctype html><html><head><meta charset="utf-8"><style>${base(ctx.FONT_CSS)}</style></head><body>${cover}${howTo}${kit}${contents}</body></html>`;
}

function hero(ctx) {
  const cols = [
    ['terracotta-stories-02', 'midnight-posts-05', 'sage-posts-14', 'terracotta-posts-11'],
    ['sage-posts-01', 'midnight-stories-07', 'terracotta-posts-16', 'sage-stories-05'],
    ['midnight-posts-04', 'terracotta-posts-18', 'sage-stories-09', 'midnight-posts-20'],
    ['terracotta-stories-06', 'sage-posts-10', 'midnight-posts-06', 'terracotta-posts-03'],
  ];
  return `<!doctype html><html><head><meta charset="utf-8"><style>${base(ctx.FONT_CSS)}
    body{width:3000px;height:2000px;overflow:hidden;position:relative}
    .mosaic{position:absolute;left:1380px;top:-520px;display:flex;gap:44px;transform:rotate(-10deg);transform-origin:top left}
    .col{display:flex;flex-direction:column;gap:44px;width:440px}
    .col img{width:440px;border-radius:22px;box-shadow:0 30px 70px rgba(43,35,32,.28)}
    .tick{display:flex;align-items:center;gap:26px;font-size:46px;font-weight:500;margin-bottom:30px}
    .tick span{width:62px;height:62px;border-radius:50%;background:${T.accent};display:flex;align-items:center;justify-content:center;flex:none}</style></head><body>
    <div style="position:absolute;width:900px;height:900px;border-radius:50%;background:${T.accent2};left:-380px;bottom:-420px"></div>
    <div class="mosaic">${cols.map((c, i) => `<div class="col" style="margin-top:${[0, 260, 90, 330][i]}px">${c.map((n) => `<img src="${img(ctx.THUMBS, n + '.jpg')}">`).join('')}</div>`).join('')}</div>
    <div style="position:absolute;left:150px;top:230px;width:1180px">
      <div class="eyebrow" style="font-size:40px">Canva Template Pack</div>
      <h1 class="serif" style="font-size:176px;line-height:1;margin:30px 0 50px;letter-spacing:-.01em">Social Media Template Pack</h1>
      ${[`${TOTAL} editable designs`, `${POSTS.length} post + ${STORIES.length} story layouts`, `${Object.keys(THEMES).length} ready-made color themes`, 'Edit free in Canva'].map((t) => `<div class="tick"><span><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>${t}</div>`).join('')}
      <div style="display:inline-block;margin-top:40px;background:${T.ink};color:${T.bg};border-radius:999px;padding:30px 60px;font-size:40px;font-weight:600">Instagram &middot; Facebook</div>
    </div></body></html>`;
}

module.exports = async function extras(browser, ctx) {
  for (const [key, theme] of Object.entries(THEMES)) {
    const file = path.join(ctx.PREVIEW, `preview-${theme.name.replace(/\s+/g, '-')}.jpg`);
    const page = await browser.newPage({ viewport: { width: 2004, height: 1000 } });
    await page.setContent(previewSheet(key, theme, ctx), { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: file, type: 'jpeg', quality: 85, fullPage: true });
    await page.close();
  }
  await render(browser, guide(ctx), { w: 816, h: 1056, pdf: path.join(ctx.ROOT, 'Start-Here-Guide.pdf') });
  const cover = path.join(ctx.ROOT, 'cover');
  fs.mkdirSync(cover, { recursive: true });
  await render(browser, hero(ctx), { w: 3000, h: 2000, shots: [[path.join(cover, 'product-hero-listing.jpg'), 'jpeg'], [path.join(cover, 'product-hero-listing.png'), 'png']] });
  console.log('built previews, guide and hero');
};
module.exports.guide = guide;
