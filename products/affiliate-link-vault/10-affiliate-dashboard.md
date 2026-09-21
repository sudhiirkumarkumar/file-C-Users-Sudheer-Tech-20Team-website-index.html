# 10 — AFFILIATE DASHBOARD

A one-page summary view that pulls totals from the Master Vault and Performance Tracker so you can see the state of your affiliate business at a glance. Build this as a dedicated tab/page that references your other sheets — it should update automatically as you fill in the underlying data.

---

## Dashboard Fields & Formulas

| Metric | What It Shows | Formula (Sheets/Excel logic) |
|---|---|---|
| Total Affiliate Programs | Every program you've ever joined | `=COUNTA(ProgramDirectory[Program Name])` |
| Active Programs | Programs currently in use | `=COUNTIF(MasterVault[Status],"ACTIVE")` |
| Links Requiring Review | Links flagged for a check | `=COUNTIF(MasterVault[Status],"CHECK REQUIRED")` |
| Total Clicks | Sum of clicks for the selected period | `=SUM(PerformanceTracker[Clicks])` |
| Total Sales | Sum of sales for the selected period | `=SUM(PerformanceTracker[Sales])` |
| Conversion Rate | Overall performance | `=SUM(Sales)/SUM(Clicks)` |
| Gross Commission | Total commission before refunds | `=SUM(PerformanceTracker[Commission Earned])` |
| Refunds | Total refunded commission | `=SUM(PerformanceTracker[Refunds])` |
| Net Commission | Actual take-home commission | `=Gross Commission-Refunds` |
| Top Performing Program | Highest Net Commission by program | `=INDEX/MATCH` or sort Performance Tracker by Net Commission, grouped by Program |
| Top Performing Product | Highest Net Commission by product | Same approach, grouped by Product |
| Top Performing Channel | Highest Net Commission by channel | Same approach, grouped by Channel |

---

## Suggested Dashboard Layout

```
┌─────────────────────────────────────────────────────────┐
│  AFFILIATE LINK VAULT — DASHBOARD                        │
│  Period: [Month/Quarter/Year]                            │
├─────────────────────────────────────────────────────────┤
│  PROGRAM HEALTH                                           │
│  Total Programs: __     Active: __     Needs Review: __   │
├─────────────────────────────────────────────────────────┤
│  PERFORMANCE                                               │
│  Clicks: __     Sales: __     Conversion Rate: __%        │
├─────────────────────────────────────────────────────────┤
│  COMMISSION                                                │
│  Gross: $__     Refunds: $__     Net Commission: $__      │
├─────────────────────────────────────────────────────────┤
│  TOP PERFORMERS                                            │
│  Program: __     Product: __     Channel: __               │
└─────────────────────────────────────────────────────────┘
```

---

## How to Use the Dashboard

- **Review monthly**, right after completing the Link Audit Checklist (Section 09) and updating the Performance Tracker (Section 05).
- **Filter by date range** to compare month-over-month or quarter-over-quarter trends, rather than only looking at lifetime totals.
- **Use "Top Performing" fields to guide content planning** — double down on what's working by planning more content for your top program/product/channel in the Content Planner (Section 06).
- **Watch "Links Requiring Review" as a health indicator.** A high number here means your audit cadence has fallen behind — tighten the schedule in Section 09.

**Note:** All figures on this dashboard are only as accurate as the data you enter into the Master Vault and Performance Tracker. This system does not pull data automatically from any affiliate network — all numbers must be entered manually from your own affiliate dashboards.
