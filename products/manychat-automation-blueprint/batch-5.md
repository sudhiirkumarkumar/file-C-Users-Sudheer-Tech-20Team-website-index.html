# SECTION 14 — COMPLETE FLOW BLUEPRINTS

Five full end-to-end automations, combining everything from earlier sections into single deployable builds.

---

## BLUEPRINT 1 — Comment → Freebie → Lead Capture → Follow-Up

```
TRIGGER: Comment "FREE" on post
        ↓
CONDITION: Is this their first comment on this post?
        ↓
MESSAGE: "Hey [NAME]! Sending your [FREE RESOURCE] now 🎉"
        ↓
BUTTON: "Send It to Me"
        ↓
ACTION: Deliver resource link
        ↓
MESSAGE: "Want a couple bonus tips too?"
        ↓
LEAD CAPTURE: Ask for email
        ↓
FOLLOW-UP (24 hrs): "Did the resource help, [NAME]?"
        ↓
CTA: Introduce [PRODUCT NAME] as the next step
```

**Best for:** Growing an email list from organic content while delivering genuine value first.

---

## BLUEPRINT 2 — Comment → Product Information → FAQ → Sales CTA

```
TRIGGER: Comment "INFO" on product post
        ↓
CONDITION: New subscriber vs returning subscriber
        ↓
MESSAGE: "Hi [NAME]! Here's what [PRODUCT NAME] includes..."
        ↓
BUTTON: "Tell Me More" / "I Have a Question"
        ↓
ACTION: If "I Have a Question" → route to FAQ menu (Section 6)
        ↓
MESSAGE: FAQ answer delivered
        ↓
LEAD CAPTURE: "Want updates on new offers? What's your email?"
        ↓
FOLLOW-UP (2 days): "Any other questions about [PRODUCT NAME]?"
        ↓
CTA: "[PRODUCT LINK] — ready when you are!"
```

**Best for:** Product launches where buyers usually have a few questions before purchasing.

---

## BLUEPRINT 3 — Comment → Lead Qualification → Consultation

```
TRIGGER: Comment "CONSULT" on service post
        ↓
CONDITION: Business owner or individual?
        ↓
MESSAGE: "Hi [NAME]! What are you mainly hoping to get help with?"
        ↓
BUTTON: [Service options based on your offers]
        ↓
ACTION: Tag lead by selected service
        ↓
MESSAGE: "Got it — what's your timeline for getting started?"
        ↓
LEAD CAPTURE: Ask for email/phone
        ↓
FOLLOW-UP (24 hrs): "Still want to grab a time? Here's the link again."
        ↓
CTA: "[BOOKING LINK]"
```

**Best for:** Coaches, consultants, and agencies that need context before a sales call.

---

## BLUEPRINT 4 — Keyword → FAQ → Product Recommendation

```
TRIGGER: DM contains keyword "HELP" or "PRICE"
        ↓
CONDITION: Which keyword matched?
        ↓
MESSAGE: Relevant FAQ answer (Section 6)
        ↓
BUTTON: "That Answers It" / "I Have Another Question"
        ↓
ACTION: If satisfied → recommend related product
        ↓
MESSAGE: "Based on that, [PRODUCT NAME] might be a great fit — want a look?"
        ↓
LEAD CAPTURE: "What's your email so I can send full details?"
        ↓
FOLLOW-UP (2 days): "Any questions about [PRODUCT NAME]?"
        ↓
CTA: "[PRODUCT LINK]"
```

**Best for:** Businesses fielding lots of repetitive DM questions that could lead to a sale.

---

## BLUEPRINT 5 — Comment → Discount → Purchase → Follow-Up

```
TRIGGER: Comment "DISCOUNT" on promo post
        ↓
CONDITION: Is the promotion still active?
        ↓
MESSAGE: "Hey [NAME]! Here's your code: [DISCOUNT CODE]"
        ↓
BUTTON: "Shop Now"
        ↓
ACTION: Send checkout link
        ↓
MESSAGE: "Code expires [Expiry Date] — don't wait too long!"
        ↓
LEAD CAPTURE: "Want a reminder before it expires? What's your email?"
        ↓
FOLLOW-UP (24 hrs): "Still want to use [DISCOUNT CODE]? Happy to help with checkout."
        ↓
CTA: "[PRODUCT LINK]"
```

**Best for:** Time-limited sales, seasonal promotions, and flash discounts.

> **Pro Tip:** Reuse these five blueprints as templates for every new campaign — swap the keyword, product, and messages, and you have a fully built automation in under 15 minutes.

---

# SECTION 15 — MANYCHAT BUILD CHECKLIST

### BEFORE BUILDING
- [ ] Choose automation goal
- [ ] Choose trigger
- [ ] Prepare message copy
- [ ] Prepare freebie/link
- [ ] Prepare CTA
- [ ] Decide what lead information is required

### WHILE BUILDING
- [ ] Add trigger
- [ ] Add welcome message
- [ ] Add button
- [ ] Add condition (if needed)
- [ ] Add action (send message, tag, etc.)
- [ ] Add delay before follow-up
- [ ] Add follow-up message

### BEFORE PUBLISHING
- [ ] Test the trigger yourself (comment/DM from a second account)
- [ ] Test every button
- [ ] Test every link (make sure none are broken or placeholders)
- [ ] Test lead capture (does the info actually get saved?)
- [ ] Check spelling and placeholder replacement (`[NAME]` typos are common!)
- [ ] Test on mobile — most subscribers will see this on a phone
- [ ] Run through the complete conversation start to finish, one time, as if you were the customer

> **Beginner Mistake:** Publishing without testing the full path end-to-end. A single broken button early in the flow means nobody ever reaches your offer — always walk the entire conversation yourself first.

---

# SECTION 16 — TROUBLESHOOTING GUIDE

| PROBLEM | POSSIBLE REASON | SIMPLE FIX |
|---|---|---|
| **Trigger isn't firing** | Keyword doesn't match exactly, or automation isn't turned on | Double-check the keyword spelling/settings, and confirm the automation toggle is switched on. Check the current ManyChat interface/options. |
| **Comment isn't detected** | The automation is attached to the wrong post, or comment doesn't contain the exact keyword | Confirm the automation is linked to the correct post, and that your keyword matches "contains" rules |
| **DM isn't being delivered** | Recipient hasn't messaged your page in the required window (24-hour messaging policy), or automation is paused | Ask them to send any message first, or check current messaging window policies in ManyChat/Meta's rules |
| **Button doesn't work** | The button isn't linked to an action, or the flow it points to was deleted | Re-open the button settings and confirm it points to an active message or flow |
| **Link isn't opening** | Broken URL, missing "https://", or placeholder wasn't replaced | Copy the URL directly into a browser to test it before publishing |
| **Email isn't captured** | The input field isn't set to save into a custom field, or the question type is wrong | Check the current ManyChat interface/options to confirm the field is set to "email" type and mapped to a custom field |
| **Automation stops halfway** | A missing action, broken condition, or unpublished draft step | Walk through each step in the builder and confirm every box is connected — look for a step with no outgoing connection |
| **User doesn't receive follow-up** | Delay wasn't set correctly, or the user already completed/exited the flow | Confirm the delay setting and check whether a condition earlier in the flow accidentally excluded them |
| **Duplicate messages** | Two automations are triggering on the same keyword/post | Search your automations list for overlapping triggers and disable the duplicate |
| **Wrong keyword triggering wrong flow** | Similar keywords overlapping (e.g., "PRICE" also contains "PRICING") | Use more distinct keywords, or set the match type to "Exact Match" — check the current ManyChat interface/options |
| **Flow published incorrectly** | Draft changes weren't saved or published before testing | Always click "Publish" (not just "Save") after editing, and refresh before re-testing |

> **Quick Tip:** When something breaks, test the smallest possible piece first — one message, one button — instead of retesting the whole flow. It's faster to isolate the problem.

---

# SECTION 17 — AUTOMATION STRATEGY CHEAT SHEET

| TERM | ONE-LINE EXPLANATION |
|---|---|
| **Trigger** | The event that starts an automation (comment, DM, keyword, button tap). |
| **Action** | What the bot does next (send message, wait, tag, ask a question). |
| **Condition** | An if/then rule that sends different people down different paths. |
| **Delay** | A pause between messages so the conversation feels natural, not instant-spam. |
| **Button** | A clickable option that moves the subscriber to the next step. |
| **CTA** | The specific action you want the subscriber to take right now. |
| **Custom Field** | A saved piece of subscriber data (name, email, answer) you can reuse later. |
| **Tag** | A label attached to a subscriber so you can segment and target them later. |
| **Follow-Up** | An automatic message sent later if no action was taken. |
| **Conversion** | The end goal achieved — a sale, booking, or qualified lead. |

> Save or print this page — it's your one-page reference for every term used throughout this blueprint.
