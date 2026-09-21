# 05 — PERFORMANCE TRACKER

A simple, manual log to record how each affiliate link is actually performing, month by month. This is filled in **by you**, using numbers pulled from your affiliate dashboards, link shorteners, or analytics tools — this system does not track clicks automatically.

---

## Field Definitions

| Field | What to Enter |
|---|---|
| Month | The reporting month (e.g., "March 2026") |
| Affiliate Program | Which program this row belongs to |
| Product | The specific product promoted |
| Channel | Where the traffic came from (Blog, YouTube, Email, etc.) |
| Clicks | Total clicks on the affiliate link this month |
| Leads | Sign-ups, trials, or leads generated (if applicable) |
| Sales | Number of completed sales/conversions |
| Conversion Rate | Calculated — see formula below |
| Commission Earned | Gross commission before refunds |
| Refunds | Commission reversed due to refunds/chargebacks |
| Net Commission | Calculated — see formula below |
| Notes | Context: a promotion ran, a post went viral, a program paused, etc. |

---

## Formulas

### Conversion Rate
```
Conversion Rate = Sales ÷ Clicks
```
Example: 8 sales from 400 clicks = 8 ÷ 400 = **2%**

In Excel/Google Sheets, if Sales is in column F and Clicks is in column D:
```
=IF(D2=0,0,F2/D2)
```
Format the result cell as a percentage.

### Net Commission
```
Net Commission = Commission Earned − Refunds
```
Example: $140 earned − $15 refunded = **$125 net commission**

In Excel/Google Sheets, if Commission Earned is column I and Refunds is column J:
```
=I2-J2
```

---

## Performance Tracker Table

> **Demo Example — for formatting reference only.** All figures below are sample placeholder numbers to illustrate how the sheet works, not real results, projections, or guarantees. Delete before entering your own data.

| Month | Affiliate Program | Product | Channel | Clicks | Leads | Sales | Conversion Rate | Commission Earned | Refunds | Net Commission | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| January 2026 (Sample) | Demo SaaS Tool Partner Program | Demo SaaS Tool — Pro Plan | Blog | [enter] | [enter] | [enter] | =Sales/Clicks | [enter] | [enter] | =Earned-Refunds | Sample row for reference only |
| January 2026 (Sample) | Example Hosting Company Affiliates | Example Hosting — Starter Plan | YouTube | [enter] | [enter] | [enter] | =Sales/Clicks | [enter] | [enter] | =Earned-Refunds | Sample row for reference only |

Add one row per program/product/channel combination, per month. Filtering by Month later lets you build the totals used in the Affiliate Dashboard (Section 10).

---

## Tracking Tips

- **Pull numbers from the source.** Use each affiliate dashboard's own reporting, not estimates.
- **Be consistent about timing.** Log the same day each month (e.g., the 1st) so your comparisons are apples-to-apples.
- **Track Leads even without a sale.** A high-lead, low-sale program may need a better offer or a different audience — that's only visible if leads are recorded.
- **Don't skip Refunds.** Gross commission without refunds subtracted overstates your real earnings.
