# MODULE 01 — BUSINESS STRATEGY SYSTEM
## Production Plan (internal)

**Product:** AI Business Operating System 2026 · **Brand:** AQVANI.SHOP
**Module objective:** Give a small-business owner one structured, AI-assisted path from "rough idea" to "clear one-page strategy and a 90-day plan" — using worksheets they fill in, prompts that turn those inputs into usable drafts, and checklists that confirm each decision is good enough to act on.

**Files created in this stage:** 5 customer-facing files + 3 production files (see B).
**Estimated content volume:** ~45,000 words across the four PDF sources, 23 worksheets, 40 prompts, 1 Excel workbook (6 sheets), 7 fictional example businesses.

---

## A. Module Architecture

Module 01 is built on an original Aqvani framework: **the Aqvani Strategy Stack** — five layers completed in order. Each layer produces inputs that the next layer depends on, so the customer never has to invent a USP before they know their customer, or set goals before they know their offer.

```
LAYER 1  FOUNDATION   What business am I really running?          → Business Profile + Business Model Map + Idea Score
LAYER 2  CUSTOMER     Who exactly am I serving, and what hurts?    → Niche, Persona, ICP, Ranked Pain Points, Fit Check
LAYER 3  MARKET       Who else serves them, and where is the gap?  → Competitor Profiles, Comparison Matrix, SWOT
LAYER 4  OFFER        What do I sell, why me, at what price?       → USP, Offer, Value Proposition, Positioning, Pricing
LAYER 5  DIRECTION    What will I do in the next 90 days?          → Goals, SMART Goals, Roadmap, Risks, Priorities, Growth Bets
                                         ↓
                        ONE-PAGE STRATEGY SUMMARY (W-STR-22)
                        → feeds Module 02 (Marketing), 03 (Sales), 08 (Claude Assistant), 09 (30-Day Plan)
```

**Working loop used for every tool (Aqvani 4-Step Loop):**

| Step | What happens | Who does it |
|---|---|---|
| INPUT | Fill in the worksheet with what you actually know | Owner |
| AI PROCESS | Paste the worksheet into the matching prompt | AI (Claude or similar) |
| OUTPUT | Review the draft against the "Done when" checklist; correct anything wrong | Owner |
| ACTION | Record the final decision on the worksheet and in the One-Page Strategy Summary | Owner |

**Tool-to-layer map (21 required tools + 2 system tools):**

| Layer | Tool # | Tool | Worksheet | Prompts |
|---|---|---|---|---|
| Setup | 0 | Business Profile (Strategy Starting Sheet) | W-STR-00 | P-STR-001 |
| 1 Foundation | 1.1 | Business Model Map (small-business adaptation of the business model canvas concept) | W-STR-01 | 002, 003 |
| 1 Foundation | 1.2 | Business Idea Validator | W-STR-02 | 004, 005 |
| 2 Customer | 2.1 | Niche Research Framework | W-STR-03 | 006, 007 |
| 2 Customer | 2.2 | Customer Persona Builder | W-STR-04 + Excel | 008, 009 |
| 2 Customer | 2.3 | Ideal Customer Profile | W-STR-05 + Excel | 010 |
| 2 Customer | 2.4 | Customer Pain Point Finder | W-STR-06 + Excel | 011, 012 |
| 2 Customer | 2.5 | Problem–Solution Fit | W-STR-07 | 013 |
| 3 Market | 3.1 | Competitor Analysis Framework | W-STR-08 | 014, 015 |
| 3 Market | 3.2 | Competitor Comparison Worksheet | W-STR-09 | 016, 017 |
| 3 Market | 3.3 | SWOT Framework | W-STR-10 | 018, 019 |
| 4 Offer | 4.1 | USP Builder | W-STR-11 | 020, 021 |
| 4 Offer | 4.2 | Offer Builder | W-STR-12 (+ Offer Builder PDF) | 022, 023, 037–039 |
| 4 Offer | 4.3 | Value Proposition Builder | W-STR-13 | 024 |
| 4 Offer | 4.4 | Product Positioning Framework | W-STR-14 | 025 |
| 4 Offer | 4.5 | Pricing Strategy Worksheet | W-STR-15 | 026, 027 |
| 5 Direction | 5.1 | Business Goal Planner | W-STR-16 | 028 |
| 5 Direction | 5.2 | SMART Goal Worksheet | W-STR-17 | 029 |
| 5 Direction | 5.3 | 90-Day Business Roadmap | W-STR-18 (+ Roadmap PDF) | 030, 031, 040 |
| 5 Direction | 5.4 | Business Risk Assessment | W-STR-19 | 032 |
| 5 Direction | 5.5 | Business Priority Matrix | W-STR-20 | 033 |
| 5 Direction | 5.6 | Growth Opportunity Finder | W-STR-21 | 034 |
| Close | 6 | Strategy Review + One-Page Strategy Summary | W-STR-22 | 035, 036 |

---

## B. File Inventory

### Customer-facing (final folder `01-Business-Strategy/`)

| # | Final file | Source in repo | Format target | Role |
|---|---|---|---|---|
| 1 | Business-Strategy-Workbook.pdf | `01-Business-Strategy/Business-Strategy-Workbook.md` | A4 portrait PDF | The teaching + doing core: every tool, worked examples, all 36 core prompts |
| 2 | Business-Strategy-Templates.pdf | `01-Business-Strategy/Business-Strategy-Templates.md` | A4 portrait, printable / fillable | Blank worksheets W-STR-00 → W-STR-22, one per page |
| 3 | Customer-Persona-Builder.xlsx | `01-Business-Strategy/Customer-Persona-Builder.xlsx` | Excel / Google Sheets | Persona, pain-point scoring, ICP scoring, interview log |
| 4 | Offer-Builder.pdf | `01-Business-Strategy/Offer-Builder.md` | A4 portrait PDF | Deep "Offer Lab": 7-step offer construction, scope, naming, tiers, one-pager, 3 complete example offers, prompts 037–039 |
| 5 | 90-Day-Business-Roadmap.pdf | `01-Business-Strategy/90-Day-Business-Roadmap.md` | A4 portrait (weekly pages) | 13-week planner, weekly sprint pages, monthly reviews, scorecard, filled example, prompt 040 |

### Production (internal, not shipped)

| File | Purpose |
|---|---|
| `_production/MODULE-01-PLAN.md` | This document (sections A–H) |
| `_production/CONTENT-INDEX.md` | Running content index for the whole product (consistency database) |
| `_production/scripts/build_persona_builder.py` | Reproducible build of the Excel file |
| `_production/MODULE-01-COMPLETION-REPORT.md` | QC review and completion checklist |

Markdown sources are the editable masters. PDF rendering with the Aqvani design system happens in **START FINAL PACKAGING**, so copy can still be corrected cheaply until then.

---

## C. Detailed Table of Contents — Business Strategy Workbook

```
Cover
Welcome
How to Use This Workbook
  · The Aqvani Strategy Stack
  · The 4-Step Loop (Input → AI Process → Output → Action)
  · How to use the prompts (placeholders, pasting worksheets, reviewing)
  · AI working rules (what not to paste, what to verify)
  · Meet the example businesses (fictional)
  · Time plan: the 3-sitting route and the 1-week route

SETUP — Tool 0  Business Profile (W-STR-00) · P-STR-001

LAYER 1 — FOUNDATION
  Tool 1.1  Business Model Map (W-STR-01) · P-STR-002, 003
  Tool 1.2  Business Idea Validator (W-STR-02) · P-STR-004, 005
  Layer 1 checkpoint

LAYER 2 — CUSTOMER
  Tool 2.1  Niche Research Framework (W-STR-03) · P-STR-006, 007
  Tool 2.2  Customer Persona Builder (W-STR-04) · P-STR-008, 009
  Tool 2.3  Ideal Customer Profile (W-STR-05) · P-STR-010
  Tool 2.4  Customer Pain Point Finder (W-STR-06) · P-STR-011, 012
  Tool 2.5  Problem–Solution Fit (W-STR-07) · P-STR-013
  Layer 2 checkpoint

LAYER 3 — MARKET
  Tool 3.1  Competitor Analysis Framework (W-STR-08) · P-STR-014, 015
  Tool 3.2  Competitor Comparison Worksheet (W-STR-09) · P-STR-016, 017
  Tool 3.3  SWOT Framework (W-STR-10) · P-STR-018, 019
  Layer 3 checkpoint

LAYER 4 — OFFER
  Tool 4.1  USP Builder (W-STR-11) · P-STR-020, 021
  Tool 4.2  Offer Builder (W-STR-12) · P-STR-022, 023
  Tool 4.3  Value Proposition Builder (W-STR-13) · P-STR-024
  Tool 4.4  Product Positioning Framework (W-STR-14) · P-STR-025
  Tool 4.5  Pricing Strategy Worksheet (W-STR-15) · P-STR-026, 027
  Layer 4 checkpoint

LAYER 5 — DIRECTION
  Tool 5.1  Business Goal Planner (W-STR-16) · P-STR-028
  Tool 5.2  SMART Goal Worksheet (W-STR-17) · P-STR-029
  Tool 5.3  90-Day Business Roadmap (W-STR-18) · P-STR-030, 031
  Tool 5.4  Business Risk Assessment (W-STR-19) · P-STR-032
  Tool 5.5  Business Priority Matrix (W-STR-20) · P-STR-033
  Tool 5.6  Growth Opportunity Finder (W-STR-21) · P-STR-034
  Layer 5 checkpoint

CLOSE — Tool 6  Strategy Review & One-Page Strategy Summary (W-STR-22) · P-STR-035, 036

Common Strategy Mistakes (module-wide)
Module 01 Quality-Control Checklist
Final Action Plan
Appendix A  Prompt Index (P-STR-001 → 040)
Appendix B  Worksheet Index (W-STR-00 → 22)
Notes
```

---

## D. Prompt Inventory (40 prompts)

| ID | Prompt name | Tool | File |
|---|---|---|---|
| P-STR-001 | Business Profile Builder | 0 | Workbook |
| P-STR-002 | Business Model Map Drafter | 1.1 | Workbook |
| P-STR-003 | Business Model Stress Test | 1.1 | Workbook |
| P-STR-004 | Idea Validation Scorecard | 1.2 | Workbook |
| P-STR-005 | Low-Cost Validation Experiment Designer | 1.2 | Workbook |
| P-STR-006 | Niche Mapper | 2.1 | Workbook |
| P-STR-007 | Niche Scoring & Selection | 2.1 | Workbook |
| P-STR-008 | Customer Persona Builder | 2.2 | Workbook |
| P-STR-009 | Customer Interview Question Set | 2.2 | Workbook |
| P-STR-010 | Ideal Customer Profile Builder | 2.3 | Workbook |
| P-STR-011 | Pain Point Extractor (from real customer words) | 2.4 | Workbook |
| P-STR-012 | Pain Point Prioritizer | 2.4 | Workbook |
| P-STR-013 | Problem–Solution Fit Check | 2.5 | Workbook |
| P-STR-014 | Competitor Research Plan | 3.1 | Workbook |
| P-STR-015 | Competitor Profile Analyzer | 3.1 | Workbook |
| P-STR-016 | Competitor Comparison Matrix | 3.2 | Workbook |
| P-STR-017 | Market Gap Finder | 3.2 | Workbook |
| P-STR-018 | SWOT Builder | 3.3 | Workbook |
| P-STR-019 | SWOT Action Converter | 3.3 | Workbook |
| P-STR-020 | USP Builder | 4.1 | Workbook |
| P-STR-021 | USP Pressure Test | 4.1 | Workbook |
| P-STR-022 | Core Offer Builder | 4.2 | Workbook |
| P-STR-023 | Offer Tier Designer | 4.2 | Workbook |
| P-STR-024 | Value Proposition Builder | 4.3 | Workbook |
| P-STR-025 | Positioning Statement Builder | 4.4 | Workbook |
| P-STR-026 | Pricing Strategy Analyzer | 4.5 | Workbook |
| P-STR-027 | Price Presentation Drafter | 4.5 | Workbook |
| P-STR-028 | Business Goal Planner | 5.1 | Workbook |
| P-STR-029 | SMART Goal Converter | 5.2 | Workbook |
| P-STR-030 | 90-Day Roadmap Builder | 5.3 | Workbook |
| P-STR-031 | Weekly Sprint Planner | 5.3 | Workbook (+ Roadmap) |
| P-STR-032 | Business Risk Assessment | 5.4 | Workbook |
| P-STR-033 | Priority Matrix Sorter | 5.5 | Workbook |
| P-STR-034 | Growth Opportunity Finder | 5.6 | Workbook |
| P-STR-035 | Monthly Strategy Review | 6 | Workbook (+ Roadmap) |
| P-STR-036 | One-Page Strategy Summary Compiler | 6 | Workbook |
| P-STR-037 | Offer Naming Generator | Offer Lab | Offer Builder |
| P-STR-038 | Scope & Boundaries Writer | Offer Lab | Offer Builder |
| P-STR-039 | Offer One-Pager Drafter | Offer Lab | Offer Builder |
| P-STR-040 | Roadmap Reset (when you fall behind) | Roadmap | 90-Day Roadmap |

Every prompt follows the Aqvani prompt card: **PURPOSE · WHEN TO USE · REQUIRED INPUT · COPY-AND-PASTE PROMPT (ROLE / CONTEXT / OBJECTIVE / INPUT / CONSTRAINTS / PROCESS / OUTPUT FORMAT / QUALITY CHECK) · EXPECTED OUTPUT · OPTIONAL CUSTOMIZATION.**

---

## E. Worksheet Inventory (23 worksheets)

| ID | Worksheet | Tool | Fields (summary) |
|---|---|---|---|
| W-STR-00 | Business Profile | 0 | Name, type, stage, location, offer, price range, customers, channels, team, hours/week, goal, constraints, brand voice |
| W-STR-01 | Business Model Map | 1.1 | 9 blocks: customer, problem, offer, channel, relationship, revenue, key activities, key resources & partners, costs |
| W-STR-02 | Idea Validator | 1.2 | 8 criteria × score 1–5 × evidence; total /40; verdict band; next test |
| W-STR-03 | Niche Research | 2.1 | Candidate niches × 6 criteria; chosen niche; reason |
| W-STR-04 | Customer Persona | 2.2 | Snapshot, situation, goals, frustrations, triggers, objections, channels, words they use, decision process |
| W-STR-05 | Ideal Customer Profile | 2.3 | Firmographic/situational fit, must-haves, red flags, scoring weights |
| W-STR-06 | Pain Point Finder | 2.4 | Pain, source/evidence, frequency, intensity, willingness to pay, ability to solve, score, rank |
| W-STR-07 | Problem–Solution Fit | 2.5 | Problem statement, current alternatives, your solution, 6 fit tests, verdict |
| W-STR-08 | Competitor Profile | 3.1 | Type, offer, price, audience, promise, channels, strengths, weaknesses, review themes |
| W-STR-09 | Competitor Comparison | 3.2 | You vs 3–5 competitors × 10 factors; gap summary |
| W-STR-10 | SWOT | 3.3 | S/W/O/T grid + action converter (SO/WO/ST/WT moves) |
| W-STR-11 | USP Builder | 4.1 | Differentiator inventory, proof, customer relevance, USP draft, pressure-test |
| W-STR-12 | Offer Builder | 4.2 | Outcome, deliverables, format, timeline, support, bonuses, terms, price, tiers |
| W-STR-13 | Value Bridge (value proposition) | 4.3 | Situation, pains, desired outcomes ↔ what you provide, pain relievers, outcome creators; headline, sub-headline, 3 proof points |
| W-STR-14 | Positioning | 4.4 | Category, audience, alternative, difference, reason to believe; statement |
| W-STR-15 | Pricing Strategy | 4.5 | Cost floor, market range, value ceiling, model, tiers, discount rules, test plan |
| W-STR-16 | Business Goal Planner | 5.1 | 12-month vision, 3 goals across 5 areas, why, measures |
| W-STR-17 | SMART Goal | 5.2 | Raw goal → S/M/A/R/T → final statement, leading indicators |
| W-STR-18 | 90-Day Roadmap | 5.3 | 3 phases × outcomes, 13 weeks × focus/milestone, review dates |
| W-STR-19 | Risk Register | 5.4 | Risk, category, likelihood, impact, score, owner, prevention, response |
| W-STR-20 | Priority Matrix | 5.5 | Task list × impact × effort × urgency → quadrant |
| W-STR-21 | Growth Opportunity Finder | 5.6 | 8 growth routes × fit / effort / risk / evidence; top 2 bets |
| W-STR-22 | One-Page Strategy Summary | 6 | Distilled outputs of all layers on one page |

**Offer Lab worksheets (Offer Builder file):** W-OFR-01 Offer Brief · W-OFR-02 Before→After + Promise Boundary · W-OFR-03 Delivery Path · W-OFR-04 Scope & Boundaries · W-OFR-05 Packaging, Extras & Terms · W-OFR-06 Offer Name · W-OFR-07 One-Pager Draft.

**Roadmap planning pages (90-Day Roadmap file):** Capacity Calculator · Roadmap Overview · 90-Day Scorecard · Weekly Sprint Page · Phase Reviews (wk 4/9/13) · Next-90-Days page.

---

## F. Excel Structure Inventory — `Customer-Persona-Builder.xlsx`

| Sheet | Purpose | Key structure | Formulas / validation |
|---|---|---|---|
| 1. Start Here | Instructions, colour legend, steps | Text | — |
| 2. Persona Builder | Up to 3 personas side by side | Field rows × Persona 1/2/3 columns | Completion % per persona = `COUNTA` of answers ÷ field count; stage dropdown |
| 3. Pain Point Scoring | Rank pains objectively | Pain, Persona, Evidence source, Frequency, Intensity, Willingness to pay, Ability to solve (1–5), Score, Rank, Priority | Score = weighted `SUMPRODUCT` with editable weights; `RANK`; priority band via `IF`; 1–5 validation; colour scale |
| 4. ICP Scorecard | Score real prospects against the ICP | Criteria + weights (must total 100%); prospects × criteria scores | Weighted fit score %, fit band, weight-total check |
| 5. Interview Log | Capture real customer evidence | Date, name/code, persona, situation, trigger, pain quotes, current solution, budget signal, next step | Persona dropdown; date validation |
| 6. Lists | Dropdown sources | Persona names, sources, stages | Referenced by validation |

Example data uses fictional Business A (BrightNest Cleaning Co.) on the Persona, Pain Point and Interview sheets and Business F (Northbridge Ops Advisory) on the ICP Scorecard — matching the workbook's worked examples — in the first rows only, labelled "Example". The Start Here sheet tells users which cells to overwrite.

---

## G. Example Business Scenarios (product-wide fictional cast)

All businesses are **fictional**. Names, figures and situations are illustrative only and are not customer results. Any resemblance to real businesses is coincidental. This cast is reused in every module for consistency (registered in CONTENT-INDEX).

| Code | Business | Type | Owner situation | Used in Module 01 for |
|---|---|---|---|---|
| A | **BrightNest Cleaning Co.** — Pune | Local service (home & office cleaning) | Owner + 6 staff; competes on price with informal cleaners; wants recurring contracts | Business Profile, Business Model Map, Pain Points, Risk, Excel example, Roadmap filled example |
| B | **Studio Meera** — remote | Freelancer (social media + Meta ads for local brands) | Solo freelancer; inconsistent monthly income; too many small one-off jobs | Niche Research, USP, Priority Matrix |
| C | **CoreShift Fitness Coaching** — online | Online coaching (working professionals 30–45) | Coach with Instagram audience; sells 1:1 coaching, wants a group program | Persona, Value Proposition, Goal Planner |
| D | **Ledgerleaf Templates** — online | Digital-product store (Excel / Google Sheets templates for small businesses) | Side business; sales are irregular; many cheap competitors | Idea Validator, Competitor Comparison, Pricing |
| E | **FixRight Home Maintenance** — Jaipur | Local home maintenance (plumbing, electrical, carpentry) | 4 technicians; jobs come via phone and WhatsApp; no-shows hurt trust | Problem–Solution Fit, SMART Goals |
| F | **Northbridge Ops Advisory** — Coimbatore | Consultant (operations & process improvement for small manufacturers) | Ex-plant manager, now independent; long sales cycles | ICP, Positioning, Competitor Analysis, Offer Lab example |
| G | **Mitti & Loom** — ships across India | E-commerce (handmade home décor) | Two founders; sells via own store + marketplaces; margin pressure | SWOT, Offer Tiers, Growth Opportunity Finder |

Required example coverage for Module 01: local service (A, E) ✔ · freelancer (B) ✔ · consultant (F) ✔ · digital product (D) ✔ · e-commerce (G) ✔ · coaching (C) ✔.

---

## H. Production Sequence

| Step | Output | QC gate |
|---|---|---|
| 1 | Plan (this doc) + Content Index | Every tool has a worksheet ID and prompt ID; no duplicates |
| 2 | Workbook front matter (Welcome, How to Use, Stack, Loop, AI rules, cast) | Beginner can start in < 10 minutes |
| 3 | Workbook Layers 1–2 | Every tool: purpose, steps, worksheet, example, prompts, mistakes, done-check |
| 4 | Workbook Layers 3–5 + Close | Same; prompts don't overlap with Layers 1–2 |
| 5 | Workbook back matter (mistakes, QC, action plan, indexes) | Prompt index matches prompt bodies 1:1 |
| 6 | Blank templates W-STR-00 → 22 | Fields match the workbook exactly |
| 7 | Offer Builder (Offer Lab) | Extends — does not repeat — Tool 4.2 |
| 8 | 90-Day Roadmap | Extends Tool 5.3; realistic hours for a solo owner |
| 9 | Customer-Persona-Builder.xlsx | Recalculated with zero formula errors; formulas checked against hand calculation |
| 10 | Completion report | Module QC checklist + known gaps carried to FINAL QA |
