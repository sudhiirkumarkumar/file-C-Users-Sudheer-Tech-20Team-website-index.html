# UGC Ad Creative Template Kit
**Editable UGC-Style Video & Photo Ad Templates for Paid Ads, Organic Social & Product Promotion**
Digital product for aqvani.shop

> Create scroll-stopping UGC-style ads without hiring a creator or designing every ad from scratch.

---

## Folder Structure

```
products/ugc-ad-creative-template-kit/
├── README.md                          ← this file (structure + QC report)
├── pdf/                               ← BUYER DELIVERABLES (zip this folder)
│   ├── 01_Start_Here.pdf
│   ├── 02_UGC_Video_Templates.pdf
│   ├── 03_UGC_Photo_Templates.pdf
│   ├── 04_100_UGC_Hooks.pdf
│   ├── 05_50_CTA_Ideas.pdf
│   ├── 06_UGC_Script_Formulas.pdf
│   ├── 07_UGC_Shot_List.pdf
│   ├── 08_30_Day_Content_Calendar.pdf
│   ├── 09_AI_UGC_Prompt_Pack.pdf
│   ├── 10_Canva_Editing_Guide.pdf
│   └── 11_Industry_Adaptation_Playbook.pdf
├── source/                            ← editable Markdown source for every PDF
├── seller/                            ← NOT for buyers
│   ├── 01_Product_Listing_Copy.md     (positioning, titles, descriptions, FAQ, tags, SEO, meta)
│   ├── 02_Pricing_Strategy.md
│   ├── 03_Thumbnails_and_Mockups.md
│   └── 04_Social_Media_Launch_Content.md
└── build/build_pdfs.py                ← regenerates pdf/ from source/
```

## Buyer Download Structure

```
📁 UGC Ad Creative Template Kit
├── 01_Start_Here.pdf                  (includes Template Links page)
├── 02_UGC_Video_Templates.pdf         (50 templates)
├── 03_UGC_Photo_Templates.pdf         (24 templates)
├── 04_100_UGC_Hooks.pdf               (Bonus 1)
├── 05_50_CTA_Ideas.pdf                (Bonus 2)
├── 06_UGC_Script_Formulas.pdf         (Bonus 3)
├── 07_UGC_Shot_List.pdf               (Bonus 4)
├── 08_30_Day_Content_Calendar.pdf     (Bonus 5)
├── 09_AI_UGC_Prompt_Pack.pdf          (Bonus 6)
├── 10_Canva_Editing_Guide.pdf
└── 11_Industry_Adaptation_Playbook.pdf
```

## Canva Template Structure (to build before publishing)

Specified in full in `source/10_Canva_Editing_Guide.md` §16. Summary: 13 shareable Canva "template links" (A–G video packs by category, H–J photo/story/carousel, K end cards & CTA pills, L UI elements library, M subtitle presets). Paste the links into the Template Links table in `01_Start_Here` and rebuild the PDFs.

## Rebuilding the PDFs

```bash
pip install markdown
python3 build/build_pdfs.py      # uses the pre-installed Chromium via Playwright
```

---

## Quality-Control Review

| Requirement | Status | Where |
|---|---|---|
| ≥ 50 video UGC templates | ✅ 50 (V01–V50), all 18 elements each | source/02 Part 1 + 2 |
| Category split 8/8/8/8/6/6/6 | ✅ | source/02 |
| Second-by-second timelines | ✅ every video template | source/02 |
| ≥ 20 photo UGC templates | ✅ 24 (P01–P24) | source/03 |
| 100 hooks in 14 angles | ✅ 100 | source/04 |
| ≥ 50 CTAs, multi-industry | ✅ 50 across 7 groups | source/05 |
| ≥ 25 script formulas + when to use | ✅ 25 + selector | source/06 |
| 50+ item shot list | ✅ 60 | source/07 |
| 30-day content calendar | ✅ 28 posting days + 2 review days | source/08 |
| ≥ 20 AI prompts | ✅ 24 | source/09 |
| Canva editing instructions | ✅ all 15 required topics + file structure + export | source/10 |
| Industry examples (15, each 3 hooks / script / photo / video / CTA) | ✅ | source/11 |
| Start Here guide (10 topics) | ✅ | source/01 |
| Product listing copy (titles, short/long desc, included, benefits, audience, FAQ, tags, SEO, meta) | ✅ 5 titles, 10 benefits, 13 FAQs, 20 tags, 20 keywords | seller/01 |
| Pricing strategy (entry, launch, regular, premium) | ✅ | seller/02 |
| 8 thumbnail/mockup directions | ✅ | seller/03 |
| Launch content 10 × 5 channels | ✅ 50 pieces | seller/04 |
| No unsupported income/performance guarantees | ✅ disclaimers in Start Here, listing, pricing; no fake scarcity; offer templates require real deadlines | all |
| Originality | ✅ all names, scripts and fictional brands are original; comparisons use generic alternatives; UI elements specified as generic (no platform UI copies) | all |
