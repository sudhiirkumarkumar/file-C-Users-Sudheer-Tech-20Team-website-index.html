# CONTENT INDEX — AI Business Operating System 2026 (internal)

Running consistency database for the whole product. Updated at the end of every module.
**Last updated:** Module 01 complete.

---

## 1. ID Conventions (product-wide)

| Asset type | Format | Module 01 range | Reserved for later |
|---|---|---|---|
| Prompt | `P-<SYS>-###` | P-STR-001 → 040 | P-MKT (02), P-SAL (03), P-SUP (04), P-OPS (05), P-WFL (06), P-RPT (07), P-CLD (08), P-IMP (09), P-BON (Bonus) |
| Worksheet | `W-<SYS>-##` | W-STR-00 → 22 · W-OFR-01 → 07 | W-MKT, W-SAL, W-SUP, W-OPS, W-RPT, W-IMP |
| Template (copy/document) | `T-<SYS>-##` | — (none in M01) | T-MKT, T-SAL, T-SUP |
| SOP | `SOP-###` | — | SOP-001 → 050+ (Module 05 / Bonus 03) |
| Workflow blueprint | `WF-##` | — | WF-01 → 30 (Module 06 / Bonus 08) |
| Excel workbook | `X-##` | X-01 | X-02 Content Calendar, X-03 Content Idea Generator, X-04 Lead Tracker, X-05 Business Dashboard, X-06 1000 Content Ideas |
| Example business | `EX-A … EX-G` | All seven registered | Reuse only; do not add new cast without updating this table |

**Rule:** before writing any new prompt, search this index. If a near-duplicate exists, reference it ("see P-STR-027") or improve it — do not create a second version.

---

## 2. Asset Register — Module 01

| Asset ID | Module | File | Topic | Prompt # | Template # | SOP # | Worksheet # | Status | Dependencies |
|---|---|---|---|---|---|---|---|---|---|
| M01-F01 | 01 | Business-Strategy-Workbook | Full strategy system (Setup → Close) | P-STR-001 → 036 | — | — | W-STR-00 → 22 | ✅ Draft complete | — |
| M01-F02 | 01 | Business-Strategy-Templates | Blank printable worksheets | (references) | — | — | W-STR-00 → 22 | ✅ Draft complete | M01-F01 field names |
| M01-F03 | 01 | Customer-Persona-Builder.xlsx | Persona, pain scoring, ICP scoring, interview log | (references 008–012) | — | — | W-STR-04, 05, 06 | ✅ Built + recalculated (0 errors) | M01-F01 scoring rules |
| M01-F04 | 01 | Offer-Builder | Offer Lab: 7 steps, 3 example offers | P-STR-037 → 039 | — | — | W-OFR-01 → 07 | ✅ Draft complete | W-STR-04, 06, 11, 12, 15 |
| M01-F05 | 01 | 90-Day-Business-Roadmap | 13-week planner, scorecard, reviews | P-STR-040 | — | — | Roadmap pages | ✅ Draft complete | W-STR-17, 18, 19, 20 |

### Prompt register (Module 01)

| Prompt | Name | File | Worksheet input | Feeds |
|---|---|---|---|---|
| P-STR-001 | Business Profile Builder | Workbook | W-STR-00 | Every later prompt; System 08 knowledge |
| P-STR-002 | Business Model Map Drafter | Workbook | W-STR-01 | 003, 018 |
| P-STR-003 | Business Model Stress Test | Workbook | W-STR-01 | 032 |
| P-STR-004 | Idea Validation Scorecard | Workbook | W-STR-02 | 005 |
| P-STR-005 | Low-Cost Validation Experiment Designer | Workbook | W-STR-02 | — |
| P-STR-006 | Niche Mapper | Workbook | W-STR-00 | 007 |
| P-STR-007 | Niche Scoring & Selection | Workbook | W-STR-03 | 008 |
| P-STR-008 | Customer Persona Builder | Workbook | W-STR-04 + evidence | 010, 020, 024; System 02 |
| P-STR-009 | Customer Interview Question Set | Workbook | — | Excel Interview Log |
| P-STR-010 | Ideal Customer Profile Builder | Workbook | W-STR-05 | Excel ICP; System 03 lead scoring |
| P-STR-011 | Pain Point Extractor | Workbook | Customer language | 012 |
| P-STR-012 | Pain Point Prioritizer | Workbook | W-STR-06 | 013, 020; System 02 hooks |
| P-STR-013 | Problem–Solution Fit Check | Workbook | W-STR-07 | 022 |
| P-STR-014 | Competitor Research Plan | Workbook | — | 015 |
| P-STR-015 | Competitor Profile Analyzer | Workbook | W-STR-08 | 016, 017 |
| P-STR-016 | Competitor Comparison Matrix | Workbook | W-STR-09 | 017, 025 |
| P-STR-017 | Market Gap Finder | Workbook | W-STR-09 | 020 |
| P-STR-018 | SWOT Builder | Workbook | W-STR-10 | 019 |
| P-STR-019 | SWOT Action Converter | Workbook | W-STR-10 | 028, 030 |
| P-STR-020 | USP Builder | Workbook | W-STR-11 | 021, 024 |
| P-STR-021 | USP Pressure Test | Workbook | USP | — |
| P-STR-022 | Core Offer Builder | Workbook | W-STR-12 | Offer Lab |
| P-STR-023 | Offer Tier Designer | Workbook | Offer | Offer Lab Step 5 |
| P-STR-024 | Value Proposition Builder | Workbook | W-STR-13 | System 02 bios, ads |
| P-STR-025 | Positioning Statement Builder | Workbook | W-STR-14 | System 02 |
| P-STR-026 | Pricing Strategy Analyzer | Workbook | W-STR-15 | 027 |
| P-STR-027 | Price Presentation Drafter | Workbook | Price | System 03 objection handling (reference, don't duplicate) |
| P-STR-028 | Business Goal Planner | Workbook | W-STR-16 | 029 |
| P-STR-029 | SMART Goal Converter | Workbook | W-STR-17 | 030; System 07 KPIs |
| P-STR-030 | 90-Day Roadmap Builder | Workbook | W-STR-18 | Roadmap file; System 09 |
| P-STR-031 | Weekly Sprint Planner | Workbook | Roadmap week | Roadmap file |
| P-STR-032 | Business Risk Assessment | Workbook | W-STR-19 | System 05 Business Continuity SOP |
| P-STR-033 | Priority Matrix Sorter | Workbook | W-STR-20 | System 06 (candidate workflow WF-30) |
| P-STR-034 | Growth Opportunity Finder | Workbook | W-STR-21 | — |
| P-STR-035 | Monthly Strategy Review | Workbook | W-STR-22 + numbers | System 07 management summary (reference) |
| P-STR-036 | One-Page Strategy Summary Compiler | Workbook | All | System 08 Claude Project knowledge |
| P-STR-037 | Offer Naming Generator | Offer Builder | W-OFR-06 | — |
| P-STR-038 | Scope & Boundaries Writer | Offer Builder | W-OFR-03/04 | System 03 proposals; System 04 FAQ |
| P-STR-039 | Offer One-Pager Drafter | Offer Builder | W-OFR-01→06 | System 02/03 |
| P-STR-040 | Roadmap Reset | 90-Day Roadmap | Roadmap | — |

**Known overlap to manage later:** P-STR-027 (price objections) vs System 03 Objection Handler; P-STR-035 (monthly review) vs System 07 Monthly Management Report; P-STR-033 vs Workflow 30 "Daily Tasks → Priority List". In those modules, reference the Module 01 prompt or scope the new one differently (sales-conversation depth / data-analysis depth / daily vs monthly).

---

## 3. Verified Quantity Tracker (for product copy)

Only numbers in this table may be used in marketing copy.

| Claim | Module 01 count | Running total | Target | Verified |
|---|---|---|---|---|
| AI prompts (structured cards) | 40 | 40 | 500+ (Bonus 01, de-duplicated) | ✅ counted from files |
| Worksheets | 23 (+7 Offer Lab) | 30 | — | ✅ |
| Excel workbooks | 1 | 1 | 6 | ✅ recalculated, 0 errors |
| Worked examples (fictional) | 23 tool examples + 3 complete offers + 1 full roadmap | — | — | ✅ |
| SOP templates | 0 | 0 | 50+ | — |
| Workflow blueprints | 0 | 0 | 30 | — |
| Content ideas | 0 | 0 | 1,000 | — |

---

## 4. Example Business Registry

All fictional. Reuse consistently; keep facts below unchanged across modules.

| Code | Name | Type | Fixed facts established in Module 01 |
|---|---|---|---|
| EX-A | BrightNest Cleaning Co. | Local cleaning service, Pune west (Baner, Wakad, Hinjewadi, Aundh) | Owner + 1 supervisor + 5 cleaners; deep clean ₹3,499 (2BHK); ~60 jobs/month; ~₹2.2 lakh/month uneven revenue; brand voice warm/precise/reassuring; 40-point checklist; new offer **BrightNest Care Plan** (2 maintenance visits/month + quarterly deep clean, ₹4,299/month 2BHK illustrative, 3-month minimum); persona "Busy Apartment Couple"; 90-day goal 20 Care Plan customers |
| EX-B | Studio Meera | Freelancer — social media + Meta ads | Niche: dental & skin clinics; USP "Clinic marketing measured in enquiries, not likes"; offer **Clinic Enquiry Engine** (12 posts + 8 stories/month, 1 campaign, monthly report by the 5th) |
| EX-C | CoreShift Fitness Coaching | Online coaching, working professionals 30–45 | Persona "Desk-Bound Deepak"; offer **Workday Fit 12** (12-week group programme); goal: group revenue > 1:1 by month 9; cap 40 hrs/week |
| EX-D | Ledgerleaf Templates | Digital products (spreadsheet templates) | ~1,200 email subscribers; idea score 29/40 (Test); invoice & expense tracker ₹899 standard, ₹699 launch window; cost floor ₹740 |
| EX-E | FixRight Home Maintenance | Local home maintenance, Jaipur | 4 technicians; ~110 visits/month, capacity ~150; 2-hour time windows; SMART goal repeat bookings 12 → 30/month by 30 June |
| EX-F | Northbridge Ops Advisory | Consultant — operations for small manufacturers, Coimbatore / Tamil Nadu | Founder 18 years plant management; ICP 20–150 staff, within 150 km; offer **12-Week Floor Reset** (24 on-site half-days); weights 25/25/20/15/15 |
| EX-G | Mitti & Loom | E-commerce — handmade home décor | Two founders; own store + marketplaces; artisan clusters; growth bets: past-buyer list (18), Complete the Set bundles (17); tiers Single Story Piece / Complete the Set / Festive Gift Box |

---

## 5. Terminology Glossary (Aqvani-original frameworks)

Use these names consistently in every module.

| Term | Definition | Introduced |
|---|---|---|
| Aqvani Strategy Stack | 5 layers: Foundation → Customer → Market → Offer → Direction (+ Setup, Close) | M01 |
| 4-Step Loop | INPUT → AI PROCESS → OUTPUT → ACTION | M01 (use product-wide) |
| Business Profile | W-STR-00; the reusable "single source of truth" | M01 |
| Business Model Map | 9-block small-business model (customer-first, money-last) | M01 |
| Evidence levels | E0 opinion (max 2) · E1 indirect (max 4) · E2 direct (up to 5) | M01 |
| Niche Filter | Pain · Pay · Reach · Edge · Size · Energy (each 1–5, /30) | M01 |
| Pain Score | (F×0.2 + I×0.3 + Pay×0.3 + Solve×0.2) × 20; 75+ High, 55–74 Medium | M01 |
| ICP Fit % | Σ(rating 0–5 × weight) ÷ 5; 80/60/40 bands; red flags override | M01 — reuse in System 03 Lead Scoring |
| Fit Test | Direct · Better · Visible · Easy · Affordable · Proven | M01 |
| SWOT Action Converter | GROW (S+O) · DEFEND (S+T) · FIX (W+O) · PROTECT (W+T) | M01 |
| RDPS Filter | Relevant · Different · Provable · Sustainable | M01 |
| Offer Stack | Outcome · Deliverables · Format · Timeline · Support · Extras · Terms · Price | M01 |
| Promise Boundary | I control (promise) · I influence (describe) · I don't control (never promise) | M01 — reuse in marketing/sales copy rules |
| Value Bridge | Customer side (situation, pains, outcomes) ↔ your side (provide, relievers, creators) | M01 |
| Positioning statement | "[BRAND] helps [AUDIENCE] [OUTCOME] through [CATEGORY]. Unlike [ALTERNATIVE], we [DIFFERENCE] — proven by [REASON]." | M01 |
| Price Corridor | Cost floor ↔ market range ↔ value ceiling; Floor = cost ÷ (1 − margin) | M01 |
| Growth Routes | 8 routes; Growth score = Fit + Evidence + (6 − Effort) + (6 − Risk) | M01 |
| Priority quadrants | DO NOW · SCHEDULE · BATCH/DELEGATE · DROP | M01 |
| Roadmap phases | BUILD (wk 1–4) · LAUNCH (5–9) · IMPROVE (10–13); plan ≤ 70% of strategic hours | M01 |

---

## 6. Standing Compliance Rules (apply to every module)

- No invented statistics, testimonials, results, awards, certifications or integrations.
- Current facts (prices, platform rules, fees, laws, tax) → **[VERIFY CURRENT INFORMATION]**.
- Legal / tax / financial / health → general guidance + "consult a qualified professional".
- Examples always labelled fictional; never presented as customer results.
- No guaranteed outcomes; no fake urgency or scarcity.
- Every AI output reviewed by the owner before use.
