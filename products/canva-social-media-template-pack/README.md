# Canva Social Media Template Pack

**90 editable Instagram & Facebook designs.** There are 20 post layouts and 10 story layouts, each in 3 ready-made color themes. Buyers open them in Canva (free or Pro), then edit the text, photos and colors.

## What the buyer gets

| File | What it is |
|---|---|
| `Start-Here-Guide.pdf` | 4-page guide covering how to import into Canva, the brand kit (hex colors, fonts, sizes), a template index and the license |
| `templates/<Theme>/Instagram-Facebook-Posts-1080x1080.pdf` | 20 square post templates |
| `templates/<Theme>/Instagram-Facebook-Stories-1080x1920.pdf` | 10 story templates |

Themes: **Terracotta Sand**, **Midnight Neon** and **Sage Minimal**.

**Posts (1080 × 1080):** Quote · Tip of the Day · Announcement · Sale · Testimonial · Carousel Cover · Carousel Slide · Carousel CTA · Product Launch · Webinar / Event · Giveaway · FAQ · This or That · Big Stat · Before & After · Checklist · Meet the Founder · Myth vs Fact · Photo Feature · Milestone

**Stories (1080 × 1920):** Poll · Countdown · New Post Alert · Ask Me Anything · Flash Sale · Testimonial · Weekly Schedule · Link in Bio · Tip Story · Photo Feature

## How the templates open in Canva

Canva imports a PDF as an editable design (**Upload** or **Create a design → Import file**). Each PDF page is exactly 1080 × 1080 or 1080 × 1920 points, so it opens at the correct social-media pixel size. The designs use only live text, solid shapes and simple vector icons, which means every element becomes its own editable layer. The fonts are Playfair Display and Poppins, and both are available free in Canva.

## Listing assets

- `cover/product-hero-listing.jpg` / `.png`: 3000 × 2000 main listing image
- `previews/preview-<Theme>.jpg`: a full contact sheet of all 30 designs for each theme (use as gallery images)

## Rebuilding

All files are generated from `source/`. `templates.cjs` holds the designs and themes, `build.cjs` renders the PDFs and thumbnails, and `extras.cjs` renders the guide, previews and hero.

```bash
cd source
NODE_PATH=$(npm root -g) node build.cjs   # needs Playwright + Chromium and curl
```

To add a theme, add an entry to `THEMES`. To add a design, add an entry to `POSTS` or `STORIES`. Every output updates automatically.
