#!/usr/bin/env python3
"""Build the buyer PDFs for the UGC Ad Creative Template Kit from source/*.md.

Markdown -> styled HTML -> PDF via headless Chromium.
Usage: python3 build/build_pdfs.py
"""
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "source"
OUT = ROOT / "pdf"

CHROME_CANDIDATES = [
    os.environ.get("CHROME_BIN", ""),
    "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
    shutil.which("chromium") or "",
    shutil.which("chromium-browser") or "",
    shutil.which("google-chrome") or "",
]

# output name -> (source files, cover subtitle)
DOCS = {
    "01_Start_Here": (["01_Start_Here.md"], "Start Here Guide"),
    "02_UGC_Video_Templates": (
        ["02_UGC_Video_Templates_Part1.md", "02_UGC_Video_Templates_Part2.md"],
        "50 UGC Video Ad Templates",
    ),
    "03_UGC_Photo_Templates": (["03_UGC_Photo_Templates.md"], "24 UGC Photo Ad Templates"),
    "04_100_UGC_Hooks": (["04_100_UGC_Hooks.md"], "Bonus 1 · 100 UGC Hook Swipe File"),
    "05_50_CTA_Ideas": (["05_50_CTA_Ideas.md"], "Bonus 2 · 50 CTA Ideas"),
    "06_UGC_Script_Formulas": (["06_UGC_Script_Formulas.md"], "Bonus 3 · 25 UGC Script Formulas"),
    "07_UGC_Shot_List": (["07_UGC_Shot_List.md"], "Bonus 4 · UGC Shot List"),
    "08_30_Day_Content_Calendar": (["08_30_Day_Content_Calendar.md"], "Bonus 5 · 30-Day Content Calendar"),
    "09_AI_UGC_Prompt_Pack": (["09_AI_UGC_Prompt_Pack.md"], "Bonus 6 · AI UGC Script Prompt Pack"),
    "10_Canva_Editing_Guide": (["10_Canva_Editing_Guide.md"], "Canva Editing Guide"),
    "11_Industry_Adaptation_Playbook": (["11_Industry_Adaptation_Playbook.md"], "Industry Adaptation Playbook"),
}

CSS = """
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;800&family=Inter:wght@400;600&display=swap');
:root { --ink:#161616; --muted:#5b5b5b; --bg:#F7F5F2; --accent:#FF5A3C; --soft:#FFE7DF; --line:#E6E1DA; --mint:#E3F6EC; }
@page { size: A4; margin: 16mm 14mm 16mm 14mm; }
* { box-sizing: border-box; }
html, body { background:#fff; }
body { font-family: 'Inter', 'Liberation Sans', 'DejaVu Sans', 'Noto Color Emoji', sans-serif;
       color: var(--ink); font-size: 10.2pt; line-height: 1.5; margin:0; }
h1, h2, h3, h4 { font-family: 'Poppins', 'Liberation Sans', 'DejaVu Sans', 'Noto Color Emoji', sans-serif; line-height:1.2; }
h1 { font-size: 22pt; font-weight:800; margin: 0 0 4mm; page-break-before: always; padding-top:2mm; }
h1:first-of-type { page-break-before: avoid; }
h1 + h2 { margin-top: 0; }
h2 { font-size: 14pt; font-weight:800; margin: 7mm 0 3mm; }
h3 { font-size: 13pt; font-weight:800; margin: 0 0 3mm; padding: 3mm 4mm; background: var(--soft);
     border-left: 5px solid var(--accent); border-radius: 6px; page-break-after: avoid; }
h3 { page-break-before: auto; }
h4 { font-size: 11pt; margin: 4mm 0 2mm; }
p { margin: 0 0 2.6mm; }
strong { font-weight: 700; }
a { color: var(--accent); }
hr { border: none; border-top: 1px dashed var(--line); margin: 6mm 0; }
blockquote { margin: 4mm 0; padding: 4mm 5mm; background: var(--bg); border-left: 4px solid var(--accent); border-radius: 6px; }
blockquote p:last-child { margin-bottom: 0; }
table { width: 100%; border-collapse: collapse; margin: 2mm 0 4mm; font-size: 9pt; page-break-inside: auto; }
tr { page-break-inside: avoid; }
th { background: var(--ink); color: #fff; text-align: left; font-weight: 600; padding: 2mm 2.4mm; }
td { border-bottom: 1px solid var(--line); padding: 1.8mm 2.4mm; vertical-align: top; }
td:first-child { min-width: 15mm; }
tbody tr:nth-child(even) td { background: #FBFAF8; }
thead:empty, th:empty { background: transparent; padding:0; }
table:has(th:empty) td:first-child { font-weight: 700; width: 28%; background: var(--bg); }
pre { background: #1d1d1f; color: #f2f2f2; padding: 4mm; border-radius: 8px; font-size: 8.4pt;
      line-height: 1.18; white-space: pre; word-break: break-word; page-break-inside: avoid;
      font-family: 'DejaVu Sans Mono', 'Liberation Mono', monospace; }
code { font-family: 'DejaVu Sans Mono', 'Liberation Mono', monospace; font-size: 8.8pt; background: var(--bg);
       padding: 0.3mm 1.2mm; border-radius: 3px; }
pre code { background: transparent; padding: 0; color: inherit; }
ul, ol { margin: 0 0 3mm 0; padding-left: 6mm; }
li { margin-bottom: 1mm; }
.cover { height: 263mm; display:flex; flex-direction:column; justify-content:space-between; padding: 14mm 12mm;
         background: var(--bg); border-radius: 10px; page-break-after: always; position:relative; overflow:hidden; }
.cover .brand { font-family:'Poppins','Liberation Sans',sans-serif; font-weight:800; letter-spacing: .18em; font-size: 9pt; color: var(--muted); }
.cover .kicker { display:inline-block; background: var(--accent); color:#fff; font-weight:700; padding: 2mm 4mm; border-radius: 30px; font-size: 10pt; }
.cover .title { font-family:'Poppins','Liberation Sans',sans-serif; font-weight:800; font-size: 40pt; line-height: 1.02; margin: 6mm 0 4mm; }
.cover .title span { color: var(--accent); }
.cover .sub { font-size: 13pt; color: var(--muted); max-width: 150mm; }
.cover .doc { font-family:'Poppins','Liberation Sans',sans-serif; font-size: 20pt; font-weight:800; margin-top: 10mm; max-width: 110mm; }
.cover .chips span { display:inline-block; border:1.5px solid var(--ink); border-radius: 30px; padding: 1.5mm 3.5mm; margin: 0 2mm 2mm 0; font-size: 9pt; font-weight:600; }
.cover .phones { position:absolute; right: 16mm; top: 132mm; display:flex; gap: 5mm; transform: rotate(-6deg); opacity: .96; }
.cover .phone { width: 38mm; height: 76mm; border-radius: 7mm; background:#fff; border: 2.5mm solid var(--ink); position:relative; padding: 5mm 3mm; }
.cover .phone:nth-child(2) { margin-top: 12mm; }
.cover .phone .bar { height: 2.4mm; border-radius: 2mm; background: var(--line); margin-bottom: 2mm; }
.cover .phone .bubble { background: var(--soft); border-radius: 3mm; font-size: 6.5pt; padding: 1.6mm 2mm; margin: 3mm 0; font-weight:600; }
.cover .phone .cap { position:absolute; bottom: 8mm; left: 3mm; right: 3mm; background: var(--ink); color:#fff; font-size: 6.5pt;
                     font-weight:700; text-align:center; border-radius: 2mm; padding: 1.2mm; }
.cover .phone .pill { position:absolute; bottom: 2.5mm; left: 8mm; right: 8mm; background: var(--accent); height: 3.4mm; border-radius: 3mm; }
.cover .foot { font-size: 8.5pt; color: var(--muted); }
"""

COVER = """
<section class="cover">
  <div>
    <div class="brand">AQVANI.SHOP · DIGITAL TEMPLATE KIT</div>
    <div style="margin-top:22mm"><span class="kicker">{kicker}</span></div>
    <div class="title"><span>UGC</span> Ad Creative<br>Template Kit</div>
    <div class="sub">Editable UGC-Style Video &amp; Photo Ad Templates for Paid Ads, Organic Social &amp; Product Promotion</div>
    <div class="doc">{doc}</div>
  </div>
  <div class="phones">
    <div class="phone"><div class="bar"></div><div class="bar" style="width:60%"></div>
      <div class="bubble">I wish I found this 6 months ago…</div><div class="cap">Link below 👇</div><div class="pill"></div></div>
    <div class="phone"><div class="bar"></div><div class="bubble">★★★★★ "Finally, one that works"</div>
      <div class="bubble" style="background:#E3F6EC">Step 2: apply ✓</div><div class="cap">Try it yourself</div><div class="pill"></div></div>
  </div>
  <div>
    <div class="chips"><span>50 Video Templates</span><span>24 Photo Templates</span><span>100 Hooks</span><span>50 CTAs</span><span>Canva Editable</span></div>
    <div class="foot">For personal and client use. Not for resale or redistribution. Results depend on your product, offer and execution.</div>
  </div>
</section>
"""


def find_chrome() -> str:
    for c in CHROME_CANDIDATES:
        if c and Path(c).exists():
            return c
    sys.exit("Chromium not found. Set CHROME_BIN.")


def md_to_html(text: str) -> str:
    return markdown.markdown(text, extensions=["tables", "fenced_code", "sane_lists"])


def build_one(chrome: str, name: str, files, subtitle: str, tmp: Path) -> Path:
    body = "\n\n".join((SRC / f).read_text(encoding="utf-8") for f in files)
    html_body = md_to_html(body)
    kicker = subtitle.split(" · ")[0] if " · " in subtitle else "Template Kit"
    doc_title = subtitle.split(" · ")[-1]
    html = (
        "<!doctype html><html lang='en'><head><meta charset='utf-8'>"
        f"<title>{name}</title><style>{CSS}</style></head><body>"
        + COVER.format(kicker=kicker, doc=doc_title)
        + html_body
        + "</body></html>"
    )
    html_path = tmp / f"{name}.html"
    html_path.write_text(html, encoding="utf-8")
    pdf_path = OUT / f"{name}.pdf"
    cmd = [
        chrome, "--headless=new", "--no-sandbox", "--disable-gpu",
        "--no-pdf-header-footer", "--virtual-time-budget=8000",
        f"--print-to-pdf={pdf_path}", html_path.as_uri(),
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=180)
    return pdf_path


def main():
    chrome = find_chrome()
    OUT.mkdir(exist_ok=True)
    with tempfile.TemporaryDirectory() as t:
        tmp = Path(t)
        for name, (files, subtitle) in DOCS.items():
            p = build_one(chrome, name, files, subtitle, tmp)
            print(f"built {p.relative_to(ROOT)} ({p.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
