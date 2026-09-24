#!/usr/bin/env python3
"""Render listing gallery images for the UGC Ad Creative Template Kit.

HTML/CSS -> PNG via headless Chromium, then JPG copies via Pillow if available.
Usage: python3 build/build_gallery.py   (run build_pdfs.py first for page previews)
"""
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BUILD = ROOT / "build"
FONTS = BUILD / "fonts"
PREV = BUILD / "previews"
OUT = ROOT / "gallery"
DM_COVER = ROOT.parent / "instagram-facebook-dm-script-pack" / "cover" / "product-cover-3d.png"
CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"


def font_css():
    rules = []
    for fam, weights in (("Poppins", (500, 600, 700, 800, 900)), ("Inter", (400, 500, 600)), ("Caveat", (700,))):
        for w in weights:
            rules.append(
                f"@font-face{{font-family:'{fam}';font-weight:{w};src:url('{(FONTS / f'{fam}-{w}.ttf').as_uri()}');}}"
            )
    return "\n".join(rules)


BASE_CSS = font_css() + """
:root{--ink:#161616;--muted:#5d5a55;--bg:#F7F3EE;--card:#fff;--accent:#FF5A3C;--peach:#FFE3D8;--mint:#D3F2E2;--sand:#EFE6DB;--line:#E4DDD3;}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:var(--w);height:var(--h);overflow:hidden}
body{background:var(--bg);color:var(--ink);font-family:'Inter','Noto Color Emoji',sans-serif;position:relative}
.p{font-family:'Poppins','Noto Color Emoji',sans-serif}
.hand{font-family:'Caveat',cursive}
.acc{color:var(--accent)}
.chip{display:inline-flex;align-items:center;gap:.4em;border-radius:999px;font-family:'Poppins';font-weight:700}
.brand{font-family:'Poppins';font-weight:800;letter-spacing:.2em;color:var(--muted)}
.blob{position:absolute;border-radius:50%;filter:blur(2px)}

/* ---------- phone ---------- */
.phone{position:absolute;width:360px;height:740px;border-radius:54px;background:#111;padding:12px;
  box-shadow:0 40px 80px rgba(40,25,10,.22),0 8px 20px rgba(40,25,10,.12);transform-origin:top left}
.screen{position:relative;width:100%;height:100%;border-radius:44px;overflow:hidden;background:linear-gradient(170deg,#F4D9C6,#E9C3A8 55%,#D9A988)}
.notch{position:absolute;top:12px;left:50%;transform:translateX(-50%);width:90px;height:24px;border-radius:14px;background:#111;z-index:9}
.prog{position:absolute;top:46px;left:18px;right:18px;height:5px;border-radius:4px;background:rgba(255,255,255,.45);z-index:5}
.prog i{display:block;height:100%;width:38%;background:#fff;border-radius:4px}
.icons{position:absolute;right:14px;bottom:170px;display:flex;flex-direction:column;gap:18px;z-index:5}
.icons b{width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.85)}
.meta{position:absolute;left:18px;bottom:40px;right:80px;z-index:5}
.meta .u{width:120px;height:14px;border-radius:7px;background:rgba(255,255,255,.9);margin-bottom:10px}
.meta .c{width:190px;height:10px;border-radius:5px;background:rgba(255,255,255,.7)}
.cap{position:absolute;left:24px;right:24px;z-index:6;text-align:center;font-family:'Poppins';font-weight:800;
  font-size:25px;line-height:1.2;color:#fff;text-shadow:0 0 1px #000,0 2px 0 #000,0 -2px 0 #000,2px 0 0 #000,-2px 0 0 #000,2px 2px 0 #000,-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000}
.cap em{font-style:normal;color:#FFD54A}
.topchip{position:absolute;top:70px;left:50%;transform:translateX(-50%);background:#fff;color:#111;padding:8px 16px;border-radius:12px;
  font:700 19px 'Poppins';white-space:nowrap;z-index:6;box-shadow:0 4px 12px rgba(0,0,0,.12)}
/* person */
.person{position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:300px;height:520px;z-index:2}
.person .hair{position:absolute;left:78px;top:40px;width:150px;height:170px;border-radius:75px 75px 60px 60px;background:#3B2A22}
.person .head{position:absolute;left:92px;top:70px;width:122px;height:150px;border-radius:60px;background:#C98B6B}
.person .neck{position:absolute;left:130px;top:200px;width:46px;height:50px;background:#B97B5C}
.person .body{position:absolute;left:10px;top:235px;width:286px;height:320px;border-radius:120px 120px 0 0;background:#34465A}
.person .eye{position:absolute;top:135px;width:12px;height:12px;border-radius:50%;background:#2a1a12}
.person .smile{position:absolute;left:132px;top:175px;width:42px;height:18px;border-bottom:5px solid #7a3e2c;border-radius:0 0 30px 30px}
/* product */
.bottle{position:absolute;z-index:4;width:92px;height:190px}
.bottle .capb{position:absolute;left:24px;top:0;width:44px;height:40px;border-radius:10px 10px 4px 4px;background:#1e1e1e}
.bottle .bod{position:absolute;left:0;top:34px;width:92px;height:156px;border-radius:22px;background:linear-gradient(90deg,#fff,#F3EEE8 60%,#E6DED3)}
.bottle .lab{position:absolute;left:10px;top:78px;width:72px;text-align:center;font:800 12px 'Poppins';letter-spacing:.14em;color:#161616}
.bottle .lab small{display:block;font:500 9px 'Inter';letter-spacing:.05em;color:#8a8278;margin-top:3px}
.bottle .dot{position:absolute;left:36px;top:118px;width:20px;height:20px;border-radius:50%;background:var(--accent)}
.hand-l{position:absolute;z-index:5;width:80px;height:62px;border-radius:30px;background:#C98B6B}
.bubble{position:absolute;z-index:7;background:#fff;border-radius:20px;padding:14px 16px;font:600 17px/1.3 'Inter';color:#161616;box-shadow:0 8px 22px rgba(0,0,0,.14)}
.bubble .who{display:flex;align-items:center;gap:8px;font:700 13px 'Poppins';color:#8a8278;margin-bottom:6px}
.bubble .who i{width:22px;height:22px;border-radius:50%;background:var(--peach);display:inline-block}
.stars{color:#FFB400;letter-spacing:2px;font-size:20px}
.pillcta{position:absolute;left:60px;right:60px;bottom:120px;z-index:7;background:var(--accent);color:#fff;text-align:center;
  font:800 22px 'Poppins';padding:14px;border-radius:999px}
"""


def bottle(x, y, scale=1.0, name="SOLENNE"):
    return (f'<div class="bottle" style="left:{x}px;top:{y}px;transform:scale({scale});transform-origin:top left">'
            f'<div class="capb"></div><div class="bod"></div><div class="lab">{name}<small>barrier cream</small></div><div class="dot"></div></div>')


def person():
    return ('<div class="person"><div class="hair"></div><div class="neck"></div><div class="body"></div><div class="head"></div>'
            '<div class="eye" style="left:126px"></div><div class="eye" style="left:170px"></div><div class="smile"></div></div>')


def chrome_ui(prog=38):
    return (f'<div class="notch"></div><div class="prog"><i style="width:{prog}%"></i></div>'
            '<div class="icons"><b></b><b></b><b></b><b></b></div><div class="meta"><div class="u"></div><div class="c"></div></div>')


def phone(scene, x, y, scale=1.0, rot=0):
    s = SCENES[scene]
    return (f'<div class="phone" style="left:{x}px;top:{y}px;transform:rotate({rot}deg) scale({scale})">'
            f'<div class="screen" style="{s[0]}">{s[1]}{chrome_ui(s[2])}</div></div>')


SCENES = {
    "hook": ("", person() + bottle(210, 380) + '<div class="hand-l" style="left:196px;top:520px"></div>'
             '<div class="topchip">honest review 🫶</div>'
             '<div class="cap" style="top:230px">I wish I found this <em>6 months</em> ago…</div>', 22),
    "review": ("background:linear-gradient(170deg,#E7EEF0,#CFDDE2 60%,#B8CBD2)",
               person() + bottle(24, 330, 1.05) + '<div class="hand-l" style="left:20px;top:470px"></div>'
               '<div class="bubble" style="left:22px;right:70px;top:84px"><div class="who"><i></i>customer review</div>'
               '<div class="stars">★★★★★</div>“My skin finally stopped feeling tight by lunch.”</div>'
               '<div class="cap" style="top:300px;left:120px;right:20px;text-align:right;font-size:22px">still using it<br>3 months later</div>', 64),
    "demo": ("background:linear-gradient(170deg,#F3EFE8,#E4DACB)",
             '<div style="position:absolute;left:0;right:0;top:330px;height:420px;background:#CDB9A0;border-radius:40% 40% 0 0/20% 20% 0 0"></div>'
             + bottle(128, 250, 1.1) +
             '<div class="hand-l" style="left:70px;top:420px;width:96px"></div><div class="hand-l" style="left:200px;top:430px;width:96px"></div>'
             '<div class="topchip" style="background:var(--ink);color:#fff">STEP 2 · apply one layer</div>'
             '<div class="bubble" style="left:30px;top:150px;padding:8px 14px;background:var(--mint);font:700 17px Poppins">✓ 2-minute routine</div>', 55),
    "comment": ("background:linear-gradient(170deg,#FBE9D7,#F2CDB0)",
                person() + bottle(196, 400, .95) + '<div class="hand-l" style="left:186px;top:530px"></div>'
                '<div class="bubble" style="left:18px;right:60px;top:74px;font-size:15px"><div class="who"><i></i>replying to @maya.k</div>'
                'does it actually work on dry skin?? 👀</div>'
                '<div class="cap" style="top:240px">okay let me<br>show you <em>honestly</em></div>', 30),
    "screen": ("background:#F6F6F4",
               '<div style="position:absolute;left:18px;right:18px;top:96px;height:420px;border-radius:18px;background:#fff;box-shadow:0 4px 16px rgba(0,0,0,.08);padding:18px">'
               '<div style="height:16px;width:60%;background:#161616;border-radius:8px;margin-bottom:18px"></div>'
               + ''.join(f'<div style="display:flex;gap:10px;align-items:center;margin-bottom:14px"><div style="width:26px;height:26px;border-radius:8px;background:{c}"></div><div style="flex:1;height:12px;border-radius:6px;background:#ECE8E2"></div><div style="width:50px;height:12px;border-radius:6px;background:{c}"></div></div>'
                         for c in ("#D3F2E2", "#FFE3D8", "#D3F2E2", "#E3E7FF", "#FFE3D8", "#D3F2E2"))
               + '<div style="margin-top:22px;height:48px;border-radius:12px;background:var(--accent)"></div></div>'
               '<div style="position:absolute;left:210px;top:420px;width:34px;height:34px;border-radius:50%;border:4px solid var(--accent);background:rgba(255,90,60,.2)"></div>'
               '<div style="position:absolute;right:22px;bottom:150px;width:120px;height:120px;border-radius:50%;overflow:hidden;border:5px solid #fff;background:#F4D9C6;box-shadow:0 6px 16px rgba(0,0,0,.2)">'
               '<div style="position:absolute;left:34px;top:20px;width:52px;height:62px;border-radius:26px;background:#C98B6B"></div><div style="position:absolute;left:10px;top:80px;width:100px;height:60px;border-radius:40px 40px 0 0;background:#34465A"></div></div>'
               '<div class="cap" style="top:548px;left:24px;right:150px;font-size:21px;text-align:left">invoice sent in<br><em>40 seconds</em> 🤯</div>', 70),
    "split": ("background:#fff",
              '<div style="position:absolute;left:0;top:0;width:50%;height:100%;background:linear-gradient(170deg,#D9D4CD,#BDB6AC)"></div>'
              '<div style="position:absolute;right:0;top:0;width:50%;height:100%;background:linear-gradient(170deg,#FCE9DA,#F2C9A9)"></div>'
              '<div style="position:absolute;left:50%;top:0;bottom:0;width:4px;background:#fff;z-index:3"></div>'
              '<div class="topchip" style="left:25%;top:80px">before 😩</div><div class="topchip" style="left:75%;top:80px">after ✨</div>'
              + bottle(216, 330, .95) +
              '<div style="position:absolute;left:30px;top:330px;width:120px;height:170px;border-radius:14px;background:repeating-linear-gradient(45deg,#A79F95 0 10px,#B3ABA1 10px 20px)"></div>'
              '<div class="cap" style="top:560px">same spot · <em>2 weeks</em> apart</div>', 48),
}


def page(w, h, body, extra_css=""):
    return (f"<!doctype html><html><head><meta charset='utf-8'><style>:root{{--w:{w}px;--h:{h}px}}{BASE_CSS}{extra_css}</style></head>"
            f"<body>{body}</body></html>")


def img(path):
    return Path(path).as_uri()


# ------------------------------------------------------------------ images
def g01_main():
    body = f"""
<div class="blob" style="left:1150px;top:180px;width:900px;height:900px;background:#FFE3D8"></div>
<div class="blob" style="left:1400px;top:1150px;width:600px;height:600px;background:#D3F2E2"></div>
<div style="position:absolute;left:130px;top:130px" class="brand" >AQVANI.SHOP · DIGITAL TEMPLATE KIT</div>
<div class="p" style="position:absolute;left:125px;top:220px;font-weight:900;font-size:150px;line-height:.98;letter-spacing:-3px">
<span class="acc">UGC</span> Ad<br>Creative<br>Template Kit</div>
<div style="position:absolute;left:132px;top:800px;width:760px;font-size:44px;line-height:1.35;color:var(--muted)">
Editable UGC-style video &amp; photo ad templates — with the scripts, hooks and shot lists to make them.</div>
<div class="hand acc" style="position:absolute;left:170px;top:1100px;font-size:78px;transform:rotate(-4deg)">no creator needed ↘</div>
{phone('hook', 1110, 360, 1.2, -7)}
{phone('review', 1530, 560, 1.08, 6)}
<div style="position:absolute;left:130px;right:130px;bottom:130px;display:flex;flex-wrap:wrap;gap:22px">
{''.join(f'<span class="chip" style="font-size:34px;padding:20px 30px;background:{bg};color:{c}">{t}</span>' for t,bg,c in (
 ("50 Video Templates","#161616","#fff"),("24 Photo Templates","#fff","#161616"),("100 Hooks","#fff","#161616"),
 ("50 CTAs","#fff","#161616"),("Editable in Canva","#FF5A3C","#fff")))}
</div>"""
    return 2000, 2000, page(2000, 2000, body)


def g02_hero():
    steps = ["IDEA", "HOOK", "SCRIPT", "VISUAL", "CTA", "AD"]
    body = f"""
<div class="blob" style="left:1700px;top:-200px;width:1500px;height:1500px;background:#FFE3D8"></div>
<div class="brand" style="position:absolute;left:160px;top:150px;font-size:26px">AQVANI.SHOP · UGC AD CREATIVE TEMPLATE KIT</div>
<div class="p" style="position:absolute;left:155px;top:240px;width:1500px;font-weight:900;font-size:128px;line-height:1.02;letter-spacing:-2px">
Create scroll-stopping <span class="acc">UGC ads</span> — without hiring a creator.</div>
<div style="position:absolute;left:162px;top:720px;width:1300px;font-size:44px;line-height:1.4;color:var(--muted)">
The done-for-you UGC ad system: 50 video templates with second-by-second scripts, 24 photo layouts and editable Canva files.</div>
<div style="position:absolute;left:160px;top:1000px;display:flex;align-items:center;gap:18px">
{''.join(f'<div class="chip" style="font-size:34px;padding:18px 30px;background:{"#161616" if i==5 else "#fff"};color:{"#fff" if i==5 else "#161616"};box-shadow:0 4px 14px rgba(0,0,0,.06)">{s}</div>' + ('<span class="p" style="font-size:40px;color:#FF5A3C;font-weight:800">→</span>' if i<5 else '') for i,s in enumerate(steps))}
</div>
<div style="position:absolute;left:160px;bottom:170px;display:flex;gap:26px">
{''.join(f'<div><div class="p acc" style="font-size:92px;font-weight:900;line-height:1">{n}</div><div style="font-size:30px;font-weight:600;margin-top:8px">{t}</div></div><div style="width:2px;background:var(--line)"></div>' for n,t in (("50","video templates"),("24","photo templates"),("100","hooks"),("30","day content plan")))}
</div>
{phone('comment', 1650, 330, 1.15, -6)}
{phone('hook', 2110, 230, 1.2, 3)}
{phone('demo', 2560, 400, 1.12, 8)}
<div class="chip" style="position:absolute;right:120px;bottom:120px;font-size:32px;padding:18px 30px;background:#161616;color:#fff">⚡ Instant download</div>
"""
    return 3000, 1720, page(3000, 1720, body)


def g03_included():
    tiles = [("50", "Video Templates", "second-by-second scripts"), ("24", "Photo Templates", "feed, story & carousel"),
             ("100", "UGC Hooks", "14 angles"), ("50", "CTA Ideas", "by industry"),
             ("25", "Script Formulas", "+ when to use each"), ("60", "Shot List Ideas", "batch-film once"),
             ("30", "Day Content Calendar", "what to post daily"), ("24", "AI Script Prompts", "ChatGPT / Claude"),
             ("15", "Industry Examples", "beauty to SaaS"), ("13", "Canva Packs", "editable templates")]
    cells = "".join(
        f'<div style="background:#fff;border-radius:36px;padding:40px 48px;display:flex;gap:34px;align-items:center;box-shadow:0 6px 20px rgba(60,40,20,.06)">'
        f'<div class="p acc" style="font-size:124px;font-weight:900;min-width:240px;line-height:1">{n}</div>'
        f'<div><div class="p" style="font-size:50px;font-weight:800;line-height:1.1">{t}</div><div style="font-size:34px;color:var(--muted);margin-top:8px">{s}</div></div></div>'
        for n, t, s in tiles)
    body = f"""
<div class="brand" style="position:absolute;left:130px;top:120px;font-size:26px">WHAT'S INSIDE</div>
<div class="p" style="position:absolute;left:125px;top:180px;font-size:118px;font-weight:900;letter-spacing:-2px">Everything in the kit</div>
<div style="position:absolute;left:130px;top:340px;font-size:40px;color:var(--muted)">11 PDF guides + editable Canva templates · instant download</div>
<div style="position:absolute;left:130px;right:130px;top:470px;display:grid;grid-template-columns:1fr 1fr;gap:40px">{cells}</div>
<div style="position:absolute;left:130px;right:130px;bottom:110px;display:flex;justify-content:space-between;align-items:center">
<div style="font-size:34px;font-weight:600">+ Start Here guide · Canva Editing Guide · Industry Playbook</div>
<div class="chip" style="font-size:32px;padding:18px 30px;background:#FF5A3C;color:#fff">Instant download</div></div>"""
    return 2000, 2000, page(2000, 2000, body)


def g04_inside():
    pages = [("02_UGC_Video_Templates_p2", -8, 150, 560), ("03_UGC_Photo_Templates_p2", 5, 1080, 600),
             ("02_UGC_Video_Templates_p30", -1, 600, 470)]
    stack = "".join(
        f'<img src="{img(PREV / (n + ".png"))}" style="position:absolute;left:{x}px;top:{y}px;width:800px;border-radius:18px;'
        f'transform:rotate({r}deg);box-shadow:0 30px 70px rgba(40,25,10,.25);border:1px solid #e6e0d8">'
        for n, r, x, y in pages)
    body = f"""
<div class="brand" style="position:absolute;left:130px;top:120px;font-size:26px">LOOK INSIDE</div>
<div class="p" style="position:absolute;left:125px;top:180px;width:1750px;font-size:104px;font-weight:900;line-height:1.05;letter-spacing:-2px">
Not just layouts — <span class="acc">the whole ad</span>, second by second.</div>
{stack}
<div class="hand acc" style="position:absolute;left:1420px;top:470px;font-size:64px;transform:rotate(6deg)">what to say ↓</div>
<div class="hand acc" style="position:absolute;left:120px;top:1720px;font-size:64px;transform:rotate(-3deg)">what to film &amp; show ↑</div>
<div style="position:absolute;right:120px;bottom:120px;display:flex;flex-direction:column;gap:16px;align-items:flex-end">
{''.join(f'<span class="chip" style="font-size:32px;padding:16px 28px;background:#fff;box-shadow:0 4px 14px rgba(0,0,0,.08)">✓ {t}</span>' for t in ("Hook + on-screen text","Timeline & voiceover","B-roll + product placement","Caption, editing & example"))}
</div>"""
    return 2000, 2000, page(2000, 2000, body)


def g05_compare():
    rows = [("Ready-made layouts", True, True), ("What to say (full scripts)", False, True),
            ("What to film (shot lists)", False, True), ("Second-by-second timing", False, True),
            ("100 hooks + 50 CTAs", False, True), ("15 industry examples", False, True),
            ("30-day posting plan", False, True), ("AI prompts for custom scripts", False, True)]
    mark = lambda ok: (f'<span style="display:inline-flex;width:78px;height:78px;border-radius:50%;align-items:center;justify-content:center;'
                       f'font:800 44px Poppins;background:{"#D3F2E2" if ok else "#EDE8E1"};color:{"#1b7a4b" if ok else "#a39b90"}">{"✓" if ok else "✕"}</span>')
    trs = "".join(
        f'<div style="display:grid;grid-template-columns:1fr 330px 330px;align-items:center;padding:30px 50px;border-top:2px solid var(--line)">'
        f'<div style="font-size:42px;font-weight:600">{t}</div><div style="text-align:center">{mark(a)}</div>'
        f'<div style="text-align:center;background:#FFF3EE;margin:-30px 0;padding:30px 0">{mark(b)}</div></div>' for t, a, b in rows)
    body = f"""
<div class="brand" style="position:absolute;left:130px;top:120px;font-size:26px">WHY THIS KIT</div>
<div class="p" style="position:absolute;left:125px;top:180px;font-size:108px;font-weight:900;letter-spacing:-2px;line-height:1.05">Template pack vs<br><span class="acc">creative system</span></div>
<div style="position:absolute;left:130px;right:130px;top:560px;background:#fff;border-radius:40px;overflow:hidden;box-shadow:0 10px 30px rgba(60,40,20,.08)">
<div style="display:grid;grid-template-columns:1fr 330px 330px;padding:36px 50px;align-items:center">
<div></div><div class="p" style="text-align:center;font-size:34px;font-weight:700;color:var(--muted)">Typical<br>template pack</div>
<div class="p" style="text-align:center;font-size:36px;font-weight:800;background:#FF5A3C;color:#fff;border-radius:24px;padding:18px 0">This kit</div></div>
{trs}</div>
<div style="position:absolute;left:130px;bottom:110px;font-size:36px;color:var(--muted)">Most packs give you a layout. This kit gives you the whole ad.</div>"""
    return 2000, 2000, page(2000, 2000, body)


def g06_how():
    steps = [("1", "Pick a template", "Use the quick selector: new product, retargeting, launch or offer."),
             ("2", "Fill the script", "Replace the [brackets] — or let the AI prompts draft it."),
             ("3", "Film on your phone", "Follow the shot list. Faceless options included."),
             ("4", "Edit in Canva", "Drop clips into the template, swap colours & text."),
             ("5", "Export & post", "Organic or paid — sizes and safe zones already set.")]
    rows = "".join(
        f'<div style="display:flex;gap:40px;align-items:center;background:#fff;border-radius:36px;padding:34px 44px;box-shadow:0 6px 20px rgba(60,40,20,.06)">'
        f'<div class="p" style="flex:none;width:104px;height:104px;border-radius:50%;background:{"#FF5A3C" if i==4 else "#161616"};color:#fff;display:flex;align-items:center;justify-content:center;font-size:50px;font-weight:800">{n}</div>'
        f'<div><div class="p" style="font-size:48px;font-weight:800">{t}</div><div style="font-size:32px;color:var(--muted);margin-top:6px;line-height:1.35">{d}</div></div></div>'
        for i, (n, t, d) in enumerate(steps))
    body = f"""
<div class="brand" style="position:absolute;left:130px;top:120px;font-size:26px">HOW IT WORKS</div>
<div class="p" style="position:absolute;left:125px;top:180px;font-size:108px;font-weight:900;letter-spacing:-2px;line-height:1.05">From idea to ad<br>in <span class="acc">one sitting</span></div>
<div style="position:absolute;left:130px;top:520px;width:1150px;display:flex;flex-direction:column;gap:30px">{rows}</div>
{phone('screen', 1370, 640, 1.2, 4)}
<div class="hand acc" style="position:absolute;left:1400px;top:1620px;font-size:62px;transform:rotate(-4deg)">works for SaaS &amp;<br>digital products too</div>"""
    return 2000, 2000, page(2000, 2000, body)


def g07_bonuses():
    b = [("01", "100 UGC Hook Swipe File", "14 angles: curiosity, POV, review, founder…"),
         ("02", "50 CTA Ideas", "matched to industry and funnel stage"),
         ("03", "25 Script Formulas", "with exactly when to use each"),
         ("04", "60-Shot UGC Shot List", "batch-film a month of B-roll"),
         ("05", "30-Day Content Calendar", "attention → proof → trust → sale"),
         ("06", "24 AI Script Prompts", "turn any template into your script")]
    cards = "".join(
        f'<div style="background:#fff;border-radius:36px;padding:56px 50px;min-height:370px;box-shadow:0 6px 20px rgba(60,40,20,.06);position:relative">'
        f'<div class="chip" style="font-size:26px;padding:10px 22px;background:var(--peach);color:#c2391f">BONUS {n}</div>'
        f'<div class="p" style="font-size:60px;font-weight:800;line-height:1.1;margin-top:30px">{t}</div>'
        f'<div style="font-size:36px;color:var(--muted);margin-top:14px;line-height:1.35">{d}</div></div>' for n, t, d in b)
    body = f"""
<div class="brand" style="position:absolute;left:130px;top:120px;font-size:26px">INCLUDED FREE</div>
<div class="p" style="position:absolute;left:125px;top:180px;font-size:118px;font-weight:900;letter-spacing:-2px">6 bonuses <span class="acc">included</span></div>
<div style="position:absolute;left:130px;top:340px;font-size:40px;color:var(--muted)">Everything you need to keep making ads after the first one.</div>
<div style="position:absolute;left:130px;right:130px;top:480px;display:grid;grid-template-columns:1fr 1fr;gap:40px">{cards}</div>
<div style="position:absolute;left:130px;right:130px;bottom:110px;display:flex;justify-content:space-between;align-items:center"><div style="font-size:36px;font-weight:600">Included with every purchase — no upsells.</div><div class="chip" style="font-size:32px;padding:18px 30px;background:#FF5A3C;color:#fff">Instant download</div></div>"""
    return 2000, 2000, page(2000, 2000, body)


def g08_bundle():
    body = f"""
<div class="blob" style="left:300px;top:700px;width:1400px;height:1100px;background:#FFE3D8"></div>
<div class="brand" style="position:absolute;left:0;right:0;top:130px;text-align:center;font-size:26px">BETTER TOGETHER</div>
<div class="p" style="position:absolute;left:0;right:0;top:190px;text-align:center;font-size:118px;font-weight:900;letter-spacing:-2px;line-height:1.05">
Attract with ads.<br><span class="acc">Convert in the DMs.</span></div>
<div style="position:absolute;left:180px;top:720px;width:700px;height:900px;background:var(--bg);border-radius:40px;box-shadow:0 30px 70px rgba(40,25,10,.2);transform:rotate(-5deg);padding:70px 60px;overflow:hidden">
<div class="brand" style="font-size:20px">AQVANI.SHOP</div>
<div class="p" style="font-size:96px;font-weight:900;line-height:1;margin-top:60px"><span class="acc">UGC</span> Ad<br>Creative<br>Template Kit</div>
<div style="font-size:30px;color:var(--muted);margin-top:30px;width:560px">50 video + 24 photo templates · scripts · hooks</div>
{phone('hook', 300, 680, .7, -6)}</div>
<img src="{img(DM_COVER)}" style="position:absolute;left:1010px;top:660px;width:860px;transform:rotate(3deg);border-radius:40px;box-shadow:0 30px 70px rgba(40,25,10,.25)">
<div class="p" style="position:absolute;left:905px;top:1070px;width:130px;height:130px;border-radius:50%;background:#161616;color:#fff;font-size:84px;font-weight:800;display:flex;align-items:center;justify-content:center;z-index:3">+</div>
<div style="position:absolute;left:0;right:0;bottom:120px;text-align:center">
<span class="chip" style="font-size:40px;padding:24px 44px;background:#161616;color:#fff">UGC Ad Creative Template Kit + Instagram &amp; Facebook DM Script Pack</span></div>"""
    return 2000, 2000, page(2000, 2000, body)


IMAGES = {
    "01_main_thumbnail": g01_main, "02_listing_hero": g02_hero, "03_whats_included": g03_included,
    "04_look_inside": g04_inside, "05_comparison": g05_compare, "06_how_it_works": g06_how,
    "07_bonuses": g07_bonuses, "08_bundle_dm_script_pack": g08_bundle,
}


def main():
    OUT.mkdir(exist_ok=True)
    with tempfile.TemporaryDirectory() as t:
        for name, fn in IMAGES.items():
            w, h, html = fn()
            hp = Path(t) / f"{name}.html"
            hp.write_text(html, encoding="utf-8")
            png = OUT / f"{name}.png"
            subprocess.run([CHROME, "--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars",
                            "--allow-file-access-from-files", f"--window-size={w},{h}", "--virtual-time-budget=5000",
                            f"--screenshot={png}", hp.as_uri()], check=True,
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=120)
            try:
                from PIL import Image
                Image.open(png).convert("RGB").save(OUT / f"{name}.jpg", quality=90, optimize=True)
            except ImportError:
                pass
            print("built", png.name, f"{w}x{h}")


if __name__ == "__main__":
    main()
