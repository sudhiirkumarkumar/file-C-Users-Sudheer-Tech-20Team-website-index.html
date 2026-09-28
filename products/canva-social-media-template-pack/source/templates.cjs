// Template definitions for the Canva Social Media Template Pack.
// Every design is built from plain text, solid shapes and simple SVG so that
// Canva's PDF import turns each element into an editable layer.

const THEMES = {
  terracotta: {
    name: 'Terracotta Sand',
    bg: '#F6EFE7', soft: '#EADBC8', ink: '#2B2320', muted: '#6B5E57',
    accent: '#C8553D', accent2: '#F2C14E', onAccent: '#FFFFFF', onAccent2: '#2B2320',
  },
  midnight: {
    name: 'Midnight Neon',
    bg: '#0F1226', soft: '#1E2346', ink: '#F5F3FF', muted: '#B8B5D6',
    accent: '#7C5CFF', accent2: '#2EE6A6', onAccent: '#FFFFFF', onAccent2: '#0F1226',
  },
  sage: {
    name: 'Sage Minimal',
    bg: '#EEF1EA', soft: '#DCE3D4', ink: '#1F2A24', muted: '#56645B',
    accent: '#5B7B61', accent2: '#D9A441', onAccent: '#FFFFFF', onAccent2: '#1F2A24',
  },
};

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;0,800;1,500;1,700&family=Poppins:wght@400;500;600;700;800&display=block';

const css = (t) => `
:root{--bg:${t.bg};--soft:${t.soft};--ink:${t.ink};--muted:${t.muted};--accent:${t.accent};--accent2:${t.accent2};--on:${t.onAccent};--on2:${t.onAccent2}}
*{margin:0;padding:0;box-sizing:border-box}
html,body{background:var(--bg)}
body{-webkit-print-color-adjust:exact;print-color-adjust:exact}
.page{width:1080px;height:1080px;position:relative;overflow:hidden;background:var(--bg);color:var(--ink);font-family:'Poppins',sans-serif;break-after:page}
.page.story{height:1920px}
.abs{position:absolute}
.serif{font-family:'Playfair Display',serif}
.eyebrow{font-weight:600;font-size:26px;letter-spacing:.22em;text-transform:uppercase;color:var(--accent)}
.h1{font-family:'Playfair Display',serif;font-weight:700;font-size:104px;line-height:1.02;letter-spacing:-.01em}
.h2{font-family:'Playfair Display',serif;font-weight:700;font-size:72px;line-height:1.08}
.h3{font-family:'Playfair Display',serif;font-weight:700;font-size:52px;line-height:1.12}
.body{font-size:34px;line-height:1.5;color:var(--muted)}
.small{font-size:24px;color:var(--muted)}
.btn{display:inline-block;background:var(--accent);color:var(--on);padding:24px 52px;border-radius:999px;font-weight:600;font-size:30px}
.pill{display:inline-block;padding:14px 32px;border-radius:999px;font-weight:600;font-size:26px}
.circle{border-radius:50%}
.foot{position:absolute;left:72px;right:72px;bottom:56px;display:flex;justify-content:space-between;align-items:center;font-size:24px;font-weight:500;color:var(--muted)}
.story .foot{bottom:300px}
.photo{background:var(--soft);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;color:var(--muted);font-weight:500;font-size:26px;border:4px dashed var(--muted);border-color:color-mix(in srgb,var(--muted) 45%,transparent)}
.dashed{border:4px dashed color-mix(in srgb,var(--muted) 55%,transparent);border-radius:36px;display:flex;align-items:center;justify-content:center;text-align:center;color:var(--muted);font-size:28px;font-weight:500}
`;

const star = (fill, s = 44) =>
  `<svg width="${s}" height="${s}" viewBox="0 0 24 24"><path fill="${fill}" d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/></svg>`;
const stars = (fill, n = 5, s) => `<div style="display:flex;gap:10px">${star(fill, s).repeat(n)}</div>`;
const camera = (c) =>
  `<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h3l2-2.5h6L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/><circle cx="12" cy="12.5" r="3.6"/></svg>`;
const check = (c, s = 40) =>
  `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;
const cross = (c, s = 40) =>
  `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`;
const arrow = (c, w = 120) =>
  `<svg width="${w}" height="40" viewBox="0 0 120 40" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h108M94 6l16 14-16 14"/></svg>`;
const downArrow = (c) =>
  `<svg width="90" height="220" viewBox="0 0 90 220" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><path d="M45 6v200M12 172l33 36 33-36"/></svg>`;
const photo = (t, style, label = 'Drop your photo here') =>
  `<div class="abs photo" style="${style}">${camera(t.muted)}<span>${label}</span></div>`;
const foot = (left = '@yourbrand', right = 'yourwebsite.com') =>
  `<div class="foot"><span>${left}</span><span>${right}</span></div>`;

// ---------- Instagram / Facebook square posts (1080 x 1080) ----------
const POSTS = [
  { name: 'Quote', html: (t) => `
    <div class="abs circle" style="width:460px;height:460px;right:-150px;top:-170px;background:var(--accent2)"></div>
    <div class="abs serif" style="left:64px;top:-40px;font-size:420px;line-height:1;color:var(--accent);font-weight:800">&ldquo;</div>
    <div class="abs serif" style="left:96px;right:120px;top:330px;font-size:70px;line-height:1.2;font-style:italic;font-weight:500">Small steps every day add up to big results.</div>
    <div class="abs" style="left:96px;top:700px;display:flex;align-items:center;gap:24px"><div style="width:80px;height:4px;background:var(--accent)"></div><span style="font-size:30px;font-weight:600">Your Name</span></div>
    ${foot()}` },

  { name: 'Tip of the Day', html: (t) => `
    <div class="abs serif" style="right:64px;top:600px;font-size:360px;line-height:1;font-weight:800;color:var(--soft)">07</div>
    <div class="abs" style="left:96px;top:120px"><span class="pill" style="background:var(--accent);color:var(--on)">Tip #07</span></div>
    <div class="abs h1" style="left:96px;right:96px;top:300px">Batch your content once a week</div>
    <div class="abs body" style="left:96px;right:96px;top:540px">Block two hours, plan every post, and schedule them all. You'll save time and stay consistent.</div>
    ${foot()}` },

  { name: 'Announcement', html: (t) => `
    <div class="abs" style="inset:0;background:var(--accent)"></div>
    <div class="abs circle" style="width:760px;height:760px;left:-260px;top:-300px;border:3px solid var(--on);opacity:.35"></div>
    <div class="abs circle" style="width:420px;height:420px;right:-120px;bottom:-140px;background:var(--accent2)"></div>
    <div class="abs eyebrow" style="left:96px;top:250px;color:var(--on)">Announcement</div>
    <div class="abs serif" style="left:90px;top:300px;font-size:200px;line-height:.95;font-weight:800;color:var(--on)">Big<br>News!</div>
    <div class="abs" style="left:96px;right:200px;top:720px;font-size:36px;line-height:1.45;color:var(--on)">Something new is coming to [Brand Name]. Turn on notifications so you don't miss it.</div>
    <div class="foot" style="color:var(--on)"><span>@yourbrand</span><span>Coming 10.10</span></div>` },

  { name: 'Sale', html: (t) => `
    <div class="abs circle" style="width:300px;height:300px;left:-90px;top:-90px;background:var(--accent2)"></div>
    <div class="abs circle" style="width:180px;height:180px;right:90px;bottom:170px;background:var(--soft)"></div>
    <div class="abs eyebrow" style="left:0;right:0;top:180px;text-align:center">Weekend Sale</div>
    <div class="abs" style="left:0;right:0;top:220px;text-align:center;font-weight:800;font-size:330px;line-height:1;color:var(--accent);letter-spacing:-.04em">50%</div>
    <div class="abs serif" style="left:0;right:0;top:560px;text-align:center;font-size:96px;font-weight:700">off everything</div>
    <div class="abs" style="left:0;right:0;top:720px;text-align:center"><span class="pill" style="border:3px solid var(--ink);font-size:30px;padding:18px 44px">Use code: SAVE50</span></div>
    ${foot('@yourbrand', 'Ends Sunday')}` },

  { name: 'Testimonial', html: (t) => `
    <div class="abs" style="left:72px;right:72px;top:96px;bottom:150px;background:var(--soft);border-radius:48px"></div>
    <div class="abs" style="left:150px;top:190px">${stars(t.accent2)}</div>
    <div class="abs serif" style="left:150px;right:150px;top:300px;font-size:58px;line-height:1.25;font-weight:500;font-style:italic">"Working with [Brand] completely changed how I run my business. I only wish I'd found them sooner!"</div>
    <div class="abs" style="left:150px;top:700px;display:flex;align-items:center;gap:28px">
      <div class="circle photo" style="width:110px;height:110px;position:relative;border-width:3px;font-size:0">${camera(t.muted)}</div>
      <div><div style="font-size:32px;font-weight:600">Customer Name</div><div class="small">Verified buyer</div></div></div>
    ${foot('@yourbrand', 'Client love')}` },

  { name: 'Carousel Cover', html: (t) => `
    <div class="abs" style="left:0;top:0;bottom:0;width:28px;background:var(--accent)"></div>
    <div class="abs eyebrow" style="left:110px;top:150px">Save this for later</div>
    <div class="abs h1" style="left:104px;right:96px;top:220px;font-size:120px">5 mistakes killing your engagement</div>
    <div class="abs" style="left:110px;top:760px;display:flex;align-items:center;gap:28px;font-size:34px;font-weight:600;color:var(--accent)">Swipe ${arrow(t.accent)}</div>
    ${foot('@yourbrand', '1 / 7')}` },

  { name: 'Carousel Slide', html: (t) => `
    <div class="abs serif" style="left:96px;top:110px;font-size:190px;line-height:1;font-weight:800;color:var(--accent)">01</div>
    <div class="abs h2" style="left:96px;right:96px;top:380px">Posting without a clear goal</div>
    <div class="abs body" style="left:96px;right:120px;top:640px">Every post should do one job: educate, entertain, inspire or sell. Decide the job before you design it.</div>
    <div class="abs" style="left:96px;top:880px;display:flex;gap:14px">
      <div style="width:56px;height:12px;border-radius:6px;background:var(--accent)"></div>
      <div style="width:12px;height:12px;border-radius:6px;background:var(--soft)"></div><div style="width:12px;height:12px;border-radius:6px;background:var(--soft)"></div><div style="width:12px;height:12px;border-radius:6px;background:var(--soft)"></div><div style="width:12px;height:12px;border-radius:6px;background:var(--soft)"></div></div>
    ${foot('@yourbrand', '2 / 7')}` },

  { name: 'Carousel CTA', html: (t) => `
    <div class="abs" style="inset:0;background:var(--accent)"></div>
    <div class="abs h1" style="left:96px;right:96px;top:150px;color:var(--on)">Found this helpful?</div>
    <div class="abs" style="left:96px;right:96px;top:470px;display:grid;grid-template-columns:1fr 1fr;gap:28px">
      ${['Like it', 'Save it', 'Share it', 'Follow for more'].map((l, i) => `<div style="background:var(--bg);color:var(--ink);border-radius:28px;padding:34px 36px;display:flex;align-items:center;gap:22px;font-size:32px;font-weight:600"><span class="circle" style="width:56px;height:56px;background:var(--accent2);color:var(--on2);display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700">${i + 1}</span>${l}</div>`).join('')}
    </div>
    <div class="foot" style="color:var(--on)"><span>@yourbrand</span><span>7 / 7</span></div>` },

  { name: 'Product Launch', html: (t) => `
    ${photo(t, 'left:56px;right:56px;top:56px;height:590px;border-radius:40px', 'Drop your product photo here')}
    <div class="abs" style="left:96px;top:600px"><span class="pill" style="background:var(--accent2);color:var(--on2)">New arrival</span></div>
    <div class="abs h2" style="left:96px;top:700px">Product Name</div>
    <div class="abs body" style="left:96px;top:800px">Short, benefit-led description here.</div>
    <div class="abs" style="right:96px;top:710px;text-align:right"><div style="font-size:64px;font-weight:700;color:var(--accent)">$49</div><div class="btn" style="margin-top:20px">Shop now</div></div>` },

  { name: 'Webinar / Event', html: (t) => `
    <div class="abs circle" style="width:360px;height:360px;right:-100px;top:-100px;background:var(--accent2)"></div>
    <div class="abs eyebrow" style="left:96px;top:130px">Free live workshop</div>
    <div class="abs h1" style="left:96px;right:220px;top:190px;font-size:96px">Grow your audience in 30 days</div>
    <div class="abs" style="left:96px;right:96px;top:560px;display:flex;gap:24px">
      ${[['Date', 'Oct 24'], ['Time', '6 PM EST'], ['Where', 'Zoom']].map(([k, v]) => `<div style="flex:1;background:var(--soft);border-radius:28px;padding:30px 32px"><div class="small" style="text-transform:uppercase;letter-spacing:.15em;font-weight:600">${k}</div><div style="font-size:40px;font-weight:700;margin-top:6px">${v}</div></div>`).join('')}
    </div>
    <div class="abs" style="left:96px;top:800px"><span class="btn">Save your seat &mdash; link in bio</span></div>` },

  { name: 'Giveaway', html: (t) => `
    <div class="abs" style="inset:0;background:var(--accent2)"></div>
    <div class="abs circle" style="width:90px;height:90px;left:930px;top:40px;background:var(--accent)"></div>
    <div class="abs circle" style="width:40px;height:40px;left:960px;top:330px;background:var(--bg)"></div>
    <div class="abs circle" style="width:60px;height:60px;left:120px;top:880px;background:var(--bg)"></div>
    <div class="abs eyebrow" style="left:96px;top:120px;color:var(--on2)">It's a</div>
    <div class="abs" style="left:90px;top:150px;font-weight:800;font-size:150px;line-height:1;color:var(--on2);letter-spacing:-.02em">GIVEAWAY</div>
    <div class="abs" style="left:96px;right:96px;top:380px;background:var(--bg);border-radius:40px;padding:48px 56px;color:var(--ink)">
      <div class="h3" style="margin-bottom:26px">How to enter</div>
      ${['Follow @yourbrand', 'Like this post', 'Tag 2 friends in the comments'].map((s, i) => `<div style="display:flex;align-items:center;gap:26px;font-size:34px;font-weight:500;margin-top:18px"><span class="circle" style="width:58px;height:58px;flex:none;background:var(--accent);color:var(--on);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:28px">${i + 1}</span>${s}</div>`).join('')}
    </div>
    <div class="foot" style="color:var(--on2)"><span>Winner announced Friday</span><span>Open worldwide</span></div>` },

  { name: 'FAQ', html: (t) => `
    <div class="abs serif" style="left:96px;top:120px;font-size:130px;font-weight:800;color:var(--accent);line-height:1">Q.</div>
    <div class="abs h2" style="left:96px;right:96px;top:270px;font-size:66px">How long does shipping take?</div>
    <div class="abs" style="left:96px;right:96px;top:500px;height:4px;background:var(--soft)"></div>
    <div class="abs serif" style="left:96px;top:560px;font-size:130px;font-weight:800;color:var(--accent2);line-height:1">A.</div>
    <div class="abs body" style="left:96px;right:96px;top:710px">Most orders arrive within 3-5 business days. You'll get a tracking link the moment it ships.</div>
    ${foot('@yourbrand', 'Your questions, answered')}` },

  { name: 'This or That', html: (t) => `
    <div class="abs" style="left:0;top:0;bottom:0;width:540px;background:var(--soft)"></div>
    <div class="abs" style="right:0;top:0;bottom:0;width:540px;background:var(--accent)"></div>
    <div class="abs" style="left:0;right:0;top:110px;text-align:center"><span class="pill" style="background:var(--bg);color:var(--ink);letter-spacing:.2em;text-transform:uppercase">This or that?</span></div>
    <div class="abs h2" style="left:0;width:540px;top:470px;text-align:center">Coffee</div>
    <div class="abs h2" style="right:0;width:540px;top:470px;text-align:center;color:var(--on)">Tea</div>
    <div class="abs circle" style="left:450px;top:450px;width:180px;height:180px;background:var(--bg);display:flex;align-items:center;justify-content:center;font-family:'Playfair Display';font-style:italic;font-size:58px;font-weight:700;color:var(--accent)">or</div>
    <div class="abs" style="left:0;right:0;bottom:90px;text-align:center"><span class="pill" style="background:var(--bg);color:var(--ink);font-size:28px">Tell us your pick in the comments</span></div>` },

  { name: 'Big Stat', html: (t) => `
    <div class="abs" style="left:96px;top:130px;width:120px;height:10px;background:var(--accent2)"></div>
    <div class="abs" style="left:84px;top:170px;font-weight:800;font-size:340px;line-height:1;color:var(--accent);letter-spacing:-.05em">87%</div>
    <div class="abs h2" style="left:96px;right:120px;top:540px;font-size:70px">of shoppers read reviews before they buy.</div>
    <div class="abs small" style="left:96px;top:820px">Source: [Add your source here]</div>
    ${foot()}` },

  { name: 'Before & After', html: (t) => `
    <div class="abs h2" style="left:0;right:0;top:80px;text-align:center;font-size:66px">The transformation</div>
    ${photo(t, 'left:64px;top:220px;width:462px;height:680px;border-radius:32px', 'Before photo')}
    ${photo(t, 'right:64px;top:220px;width:462px;height:680px;border-radius:32px', 'After photo')}
    <div class="abs" style="left:96px;top:250px"><span class="pill" style="background:var(--ink);color:var(--bg)">Before</span></div>
    <div class="abs" style="left:586px;top:250px"><span class="pill" style="background:var(--accent);color:var(--on)">After</span></div>
    ${foot('@yourbrand', 'Swipe for details')}` },

  { name: 'Checklist', html: (t) => `
    <div class="abs eyebrow" style="left:96px;top:110px">Weekly</div>
    <div class="abs h2" style="left:96px;right:96px;top:150px">Content checklist</div>
    <div class="abs" style="left:96px;right:96px;top:330px">
      ${['Plan 3 posts for the week', 'Write captions and hashtags', 'Design posts in Canva', 'Schedule everything', 'Reply to comments daily'].map((s, i) => `<div style="display:flex;align-items:center;gap:30px;padding:24px 0;border-bottom:3px solid var(--soft);font-size:36px;font-weight:500"><span style="width:60px;height:60px;flex:none;border-radius:16px;display:flex;align-items:center;justify-content:center;${i < 2 ? 'background:var(--accent)' : 'border:4px solid var(--muted)'}">${i < 2 ? check(t.onAccent) : ''}</span>${s}</div>`).join('')}
    </div>
    ${foot()}` },

  { name: 'Meet the Founder', html: (t) => `
    <div class="abs circle" style="width:470px;height:470px;left:-60px;top:250px;background:var(--accent2)"></div>
    <div class="abs circle photo" style="width:430px;height:430px;left:-40px;top:270px">${camera(t.muted)}<span>Your photo</span></div>
    <div class="abs eyebrow" style="left:470px;top:180px">Meet the founder</div>
    <div class="abs h2" style="left:470px;right:72px;top:230px">Hi, I'm [Name]</div>
    <div class="abs body" style="left:470px;right:72px;top:420px;font-size:30px">I started [Brand] in 2021 to help small businesses show up online with confidence.</div>
    <div class="abs" style="left:470px;right:60px;top:660px;display:flex;flex-wrap:wrap;gap:16px">
      ${['Coffee lover', 'Dog mom', 'Based in [City]'].map((c) => `<span class="pill" style="background:var(--soft);font-size:24px">${c}</span>`).join('')}
    </div>
    ${foot()}` },

  { name: 'Myth vs Fact', html: (t) => `
    <div class="abs" style="left:72px;right:72px;top:90px;height:420px;background:var(--soft);border-radius:40px;padding:56px 60px">
      <div style="display:flex;align-items:center;gap:20px"><span class="circle" style="width:64px;height:64px;background:var(--ink);display:flex;align-items:center;justify-content:center">${cross(t.bg, 34)}</span><span class="eyebrow" style="color:var(--ink)">Myth</span></div>
      <div class="h3" style="margin-top:34px;font-size:56px">You need thousands of followers to make sales.</div></div>
    <div class="abs" style="left:72px;right:72px;top:540px;height:420px;background:var(--accent);color:var(--on);border-radius:40px;padding:56px 60px">
      <div style="display:flex;align-items:center;gap:20px"><span class="circle" style="width:64px;height:64px;background:var(--bg);display:flex;align-items:center;justify-content:center">${check(t.accent, 36)}</span><span class="eyebrow" style="color:var(--on)">Fact</span></div>
      <div class="h3" style="margin-top:34px;font-size:56px">A small, engaged audience beats a big, silent one.</div></div>` },

  { name: 'Photo Feature', html: (t) => `
    ${photo(t, 'inset:0;border:none;border-radius:0', 'Drop a full-bleed photo here')}
    <div class="abs" style="inset:40px;border:3px solid var(--bg)"></div>
    <div class="abs" style="left:40px;right:40px;bottom:40px;background:var(--bg);padding:44px 56px;display:flex;justify-content:space-between;align-items:flex-end">
      <div><div class="eyebrow">Behind the scenes</div><div class="h3" style="margin-top:10px">A day in the studio</div></div>
      <div class="small">@yourbrand</div></div>` },

  { name: 'Milestone', html: (t) => `
    ${[[120, 140, 40, 'accent'], [880, 120, 70, 'accent2'], [940, 420, 30, 'accent'], [90, 760, 60, 'accent2'], [300, 90, 24, 'accent2'], [820, 820, 44, 'accent'], [160, 460, 20, 'accent']].map(([x, y, s, c]) => `<div class="abs circle" style="left:${x}px;top:${y}px;width:${s}px;height:${s}px;background:var(--${c})"></div>`).join('')}
    <div class="abs" style="left:0;right:0;top:220px;text-align:center;font-weight:800;font-size:300px;line-height:1;color:var(--accent);letter-spacing:-.04em">10K</div>
    <div class="abs serif" style="left:0;right:0;top:540px;text-align:center;font-size:84px;font-weight:700;font-style:italic">Thank you!</div>
    <div class="abs body" style="left:180px;right:180px;top:680px;text-align:center">We couldn't have done it without every single one of you.</div>
    ${foot()}` },
];

// ---------- Instagram / Facebook stories (1080 x 1920) ----------
// Top ~250px and bottom ~340px are kept clear of key content for app UI.
const STORIES = [
  { name: 'Poll', html: (t) => `
    <div class="abs circle" style="width:600px;height:600px;right:-220px;top:-160px;background:var(--accent2)"></div>
    <div class="abs eyebrow" style="left:96px;top:420px">Quick question</div>
    <div class="abs h1" style="left:96px;right:96px;top:480px;font-size:120px">Which launch should we do next?</div>
    <div class="abs dashed" style="left:120px;right:120px;top:1020px;height:300px">Place your poll sticker here</div>
    ${foot()}` },

  { name: 'Countdown', html: (t) => `
    <div class="abs" style="inset:0;background:var(--accent)"></div>
    <div class="abs eyebrow" style="left:0;right:0;top:420px;text-align:center;color:var(--on)">Launching in</div>
    <div class="abs" style="left:96px;right:96px;top:500px;display:flex;gap:28px">
      ${[['03', 'Days'], ['12', 'Hours'], ['45', 'Mins']].map(([n, l]) => `<div style="flex:1;background:var(--bg);color:var(--ink);border-radius:36px;padding:44px 0;text-align:center"><div style="font-weight:800;font-size:120px;line-height:1">${n}</div><div class="small" style="margin-top:10px;text-transform:uppercase;letter-spacing:.2em;font-weight:600">${l}</div></div>`).join('')}
    </div>
    <div class="abs serif" style="left:96px;right:96px;top:860px;text-align:center;font-size:76px;font-weight:700;color:var(--on)">The new collection</div>
    <div class="abs dashed" style="left:160px;right:160px;top:1120px;height:260px;color:var(--on);border-color:color-mix(in srgb,var(--on) 60%,transparent)">Place your countdown sticker here</div>
    <div class="foot" style="color:var(--on)"><span>@yourbrand</span><span>Set a reminder</span></div>` },

  { name: 'New Post Alert', html: (t) => `
    <div class="abs eyebrow" style="left:96px;top:300px">New on the feed</div>
    <div class="abs h1" style="left:96px;right:96px;top:350px">New post!</div>
    <div class="abs" style="left:150px;top:600px;width:780px;height:780px;background:var(--accent2);border-radius:44px;transform:rotate(-4deg)"></div>
    ${photo(t, 'left:150px;top:600px;width:780px;height:780px;border-radius:44px;transform:rotate(3deg);border-style:solid', 'Screenshot of your post')}
    <div class="abs" style="left:0;right:0;top:1440px;text-align:center"><span class="btn">Tap to read</span></div>` },

  { name: 'Ask Me Anything', html: (t) => `
    <div class="abs serif" style="right:80px;top:160px;font-size:500px;line-height:1;font-weight:800;color:var(--soft)">?</div>
    <div class="abs eyebrow" style="left:96px;top:520px">Your turn</div>
    <div class="abs h1" style="left:96px;right:96px;top:580px;font-size:140px">Ask me anything</div>
    <div class="abs body" style="left:96px;right:96px;top:910px">About [topic] &mdash; I'll answer every question in tomorrow's stories.</div>
    <div class="abs dashed" style="left:120px;right:120px;top:1120px;height:320px">Place your question sticker here</div>
    ${foot()}` },

  { name: 'Flash Sale', html: (t) => `
    <div class="abs" style="inset:0;background:var(--accent)"></div>
    <div class="abs circle" style="width:900px;height:900px;left:90px;top:660px;background:var(--accent2)"></div>
    <div class="abs" style="left:0;right:0;top:300px;text-align:center;font-weight:800;font-size:150px;line-height:1;color:var(--on);letter-spacing:-.01em">FLASH<br>SALE</div>
    <div class="abs" style="left:0;right:0;top:820px;text-align:center;font-weight:800;font-size:300px;line-height:1;color:var(--on2);letter-spacing:-.05em">40%</div>
    <div class="abs serif" style="left:0;right:0;top:1120px;text-align:center;font-size:90px;font-weight:700;color:var(--on2)">off today only</div>
    <div class="abs" style="left:0;right:0;top:1300px;text-align:center"><span class="pill" style="background:var(--bg);color:var(--ink);font-size:34px;padding:22px 52px">Code: FLASH40</span></div>
    <div class="foot" style="color:var(--on)"><span>@yourbrand</span><span>Ends at midnight</span></div>` },

  { name: 'Testimonial', html: (t) => `
    <div class="abs circle photo" style="left:390px;top:320px;width:300px;height:300px">${camera(t.muted)}</div>
    <div class="abs" style="left:0;right:0;top:680px;display:flex;justify-content:center">${stars(t.accent2, 5, 56)}</div>
    <div class="abs serif" style="left:110px;right:110px;top:800px;text-align:center;font-size:66px;line-height:1.25;font-style:italic;font-weight:500">"The best investment I've made in my business this year. Five stars!"</div>
    <div class="abs" style="left:0;right:0;top:1250px;text-align:center"><div style="font-size:36px;font-weight:600">Customer Name</div><div class="small" style="margin-top:6px">Founder, Company</div></div>
    ${foot('@yourbrand', 'Client love')}` },

  { name: 'Weekly Schedule', html: (t) => `
    <div class="abs eyebrow" style="left:96px;top:280px">Coming up</div>
    <div class="abs h1" style="left:96px;top:330px">This week</div>
    <div class="abs" style="left:96px;right:96px;top:540px">
      ${[['Mon', 'Tips & tricks'], ['Tue', 'Behind the scenes'], ['Wed', 'Live Q&A at 6pm'], ['Thu', 'Customer spotlight'], ['Fri', 'Weekend giveaway']].map(([d, s], i) => `<div style="display:flex;align-items:center;gap:36px;margin-bottom:28px;background:${i === 2 ? 'var(--accent)' : 'var(--soft)'};color:${i === 2 ? 'var(--on)' : 'var(--ink)'};border-radius:32px;padding:36px 40px"><span style="font-weight:700;font-size:40px;width:110px">${d}</span><span style="font-size:38px;font-weight:500">${s}</span></div>`).join('')}
    </div>
    ${foot()}` },

  { name: 'Link in Bio', html: (t) => `
    <div class="abs circle" style="width:700px;height:700px;left:-260px;bottom:-200px;background:var(--soft)"></div>
    <div class="abs eyebrow" style="left:96px;top:360px">Don't miss it</div>
    <div class="abs h1" style="left:96px;right:96px;top:420px;font-size:150px">Grab the free guide</div>
    <div class="abs body" style="left:96px;right:96px;top:800px">10 ready-to-post caption ideas for your next month of content.</div>
    <div class="abs" style="left:495px;top:980px">${downArrow(t.accent)}</div>
    <div class="abs dashed" style="left:200px;right:200px;top:1230px;height:180px">Place your link sticker here</div>
    ${foot()}` },

  { name: 'Tip Story', html: (t) => `
    <div class="abs" style="left:96px;top:300px"><span class="pill" style="background:var(--accent);color:var(--on);font-size:30px">Quick tip</span></div>
    <div class="abs h1" style="left:96px;right:96px;top:420px">3 ways to write better captions</div>
    <div class="abs" style="left:96px;right:96px;top:860px">
      ${['Hook them in the first line', 'Tell a short, real story', 'End with one clear call to action'].map((s, i) => `<div style="display:flex;gap:32px;align-items:flex-start;margin-bottom:56px"><span class="serif" style="font-size:90px;font-weight:800;line-height:.9;color:var(--accent2);width:90px;flex:none">${i + 1}</span><span style="font-size:44px;font-weight:500;line-height:1.35">${s}</span></div>`).join('')}
    </div>
    ${foot('@yourbrand', 'Save this')}` },

  { name: 'Photo Feature', html: (t) => `
    ${photo(t, 'left:0;right:0;top:0;height:1300px;border:none;border-radius:0', 'Drop your photo here')}
    <div class="abs circle" style="width:220px;height:220px;right:80px;top:1190px;background:var(--accent2);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:34px;line-height:1.1;color:var(--on2)">New<br>in!</div>
    <div class="abs eyebrow" style="left:96px;top:1360px">Featured</div>
    <div class="abs h2" style="left:96px;right:96px;top:1410px">The autumn edit</div>
    ${foot()}` },
];

module.exports = { THEMES, FONTS_URL, css, POSTS, STORIES };
