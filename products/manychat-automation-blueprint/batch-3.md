# SECTION 5 — LEAD CAPTURE BLUEPRINTS

Lead capture doesn't have to feel like a boring form. Below are three ready-to-use approaches — pick the one that matches how much information you actually need.

---

## FLOW A — EMAIL CAPTURE (Simple)

**Use this when:** You just need an email address, nothing more.

```
DM
 ↓
FREE RESOURCE DELIVERED
 ↓
EMAIL REQUEST
 ↓
CONFIRMATION
 ↓
FOLLOW-UP
```

**Message 1 (deliver resource):**
> Here's your [FREE RESOURCE]: [PRODUCT LINK]

**Message 2 (email request):**
> Want me to also email you a copy so you don't lose it? Just drop your email below 👇

**Confirmation:**
> Got it, thanks [NAME]! Sent it to your inbox — check spam if you don't see it in a few minutes.

**Follow-Up (next day):**
> Hey [NAME], did the [FREE RESOURCE] land okay in your inbox?

> **Quick Tip:** Always frame the email ask as a *bonus* ("so you don't lose it," "so I can send extras") rather than a requirement. It feels like a favor, not a form field.

---

## FLOW B — NAME + EMAIL (Standard)

**Use this when:** You want to personalize follow-ups and need a real name plus email.

```
DM
 ↓
ASK NAME
 ↓
ASK EMAIL
 ↓
DELIVER RESOURCE
 ↓
THANK YOU
 ↓
CTA
```

**Ask Name:**
> Hey! Before I send this over — what's your first name so I know who I'm chatting with? 😊

**Ask Email:**
> Nice to meet you, [NAME]! What email should I send [FREE RESOURCE] to?

**Deliver Resource:**
> Perfect — sending it now! Check your inbox in the next couple of minutes: [PRODUCT LINK]

**Thank You:**
> Thanks for hanging in there, [NAME] — hope it's genuinely useful!

**CTA:**
> If you ever want to go deeper on this, just message me "MORE" anytime.

> **Beginner Mistake:** Asking for name AND email in the same message. Split them into two short questions — one ask per message gets a much higher completion rate than a combined form-style message.

---

## FLOW C — LEAD QUALIFICATION (Advanced)

**Use this when:** You're a service provider or coach and need to understand the lead before responding personally.

```
DM
 ↓
"WHAT ARE YOU LOOKING FOR?"
 ↓
SELECT OPTION
 ↓
BUSINESS TYPE
 ↓
BUDGET / NEED
 ↓
CONTACT INFORMATION
 ↓
SALES FOLLOW-UP
```

**Step 1 — What are you looking for?**
> Hey [NAME]! To point you in the right direction, what are you mainly looking for today?

**Buttons:** "Pricing Info" / "A Free Consultation" / "General Questions"

**Step 2 — Business type (if relevant):**
> Got it! And what best describes what you do — [Option A], [Option B], or [Option C]?

**Step 3 — Budget/need:**
> Thanks for sharing that. Do you have a rough budget range in mind for [SERVICE], or would you like me to share a few options?

**Step 4 — Contact information:**
> Perfect — last thing, what's the best email or phone number to reach you at?

**Step 5 — Sales follow-up:**
> Thanks, [NAME]! Based on what you've shared, I think we'd be a great fit. I'll follow up personally within 24 hours — talk soon!

> **Pro Tip:** Use ManyChat's tagging feature to tag leads by their answers (e.g., "Budget: High," "Service: Coaching"). Check the current ManyChat interface/options under Tags to set this up — it makes manual follow-up dramatically faster.

---

# SECTION 6 — FAQ AUTOMATION

Set these up as **keyword-triggered replies** so your bot instantly answers the most common questions people ask before buying.

| QUESTION | BOT RESPONSE | OPTIONAL CTA |
|---|---|---|
| **What does this product do?** | [PRODUCT NAME] helps you [Main Benefit] — no [Common Pain Point] required. | "See Full Details" |
| **How much does it cost?** | [PRODUCT NAME] is [PRICE]. It includes [What's Included]. | "View Pricing Page" |
| **How do I purchase?** | Easy! Just tap the link here and follow the checkout steps: [PRODUCT LINK] | "Buy Now" |
| **How do I receive the product?** | You'll get instant access via email right after checkout — usually within a few minutes. | "Got Another Question?" |
| **Do you offer support?** | Yes! Reach us anytime at [SUPPORT EMAIL] or right here in DM. | "Ask a Question" |
| **Is this suitable for beginners?** | Absolutely — [PRODUCT NAME] is built to be beginner-friendly, with step-by-step instructions throughout. | "Learn More" |
| **How quickly can I get started?** | You can start right away — most people are up and running within 10-15 minutes of purchase. | "Get Started" |
| **What payment methods are accepted?** | We accept all major cards and [Other Payment Method — e.g., PayPal]. Check the current ManyChat/checkout interface for the full list. | "View Checkout" |
| **Can I use this for my business?** | Yes, [PRODUCT NAME] works great for [Business Type Examples]. | "See How It Works" |
| **Do you offer customization?** | We offer [Customization Options — or "a done-for-you option"] for an additional [PRICE]. | "Ask About Customization" |
| **How can I contact you?** | You can message us here anytime, or email [SUPPORT EMAIL] — we usually reply within 24 hours. | "Send a Message" |

**Example flow for a single FAQ:**
```
QUESTION: "How much does it cost?"
      ↓
BOT RESPONSE: Price + what's included
      ↓
OPTIONAL CTA: "View Pricing Page" button
```

> **Quick Tip:** Set these up as **Default Reply Keywords** in ManyChat so they trigger from *any* DM, not just comments. Check the current ManyChat interface/options under Automation → Keywords to configure this.

---

# SECTION 7 — PRODUCT ENQUIRY AUTOMATION

Use this flow whenever someone messages asking about pricing, value, or details of a specific product.

```
USER: "How much is this?"
        ↓
BOT: PRICE / VALUE INFORMATION
        ↓
BUTTON: "View Product"
        ↓
BUTTON: "Ask a Question"
        ↓
BUTTON: "Talk to Someone"
```

**Complete Script:**

**User message:** "How much is this?"

**Bot response:**
> Hi [NAME]! [PRODUCT NAME] is [PRICE] and includes [What's Included]. It's designed to help you [Main Benefit].

**Buttons shown:**
- "View Product" → sends [PRODUCT LINK]
- "Ask a Question" → opens a free-text reply, routed to FAQ automation
- "Talk to Someone" → routes to Section 9 (Appointment/Consultation Flow)

**If "View Product" tapped:**
> Here's the full page with everything included: [PRODUCT LINK]
> Let me know if anything's unclear!

**If "Ask a Question" tapped:**
> Sure thing — what would you like to know?

**If "Talk to Someone" tapped:**
> Of course! You can book a quick chat here: [BOOKING LINK]

> **Pro Tip:** Always give price directly instead of saying "send me a DM for pricing." Hiding price information is one of the biggest trust-killers in automated sales conversations.

---

# SECTION 8 — SERVICE ENQUIRY AUTOMATION

Use this for service-based businesses (coaches, agencies, freelancers, consultants).

```
USER: "I need help with social media."
        ↓
WELCOME
        ↓
SERVICE OPTIONS
        ↓
SELECT SERVICE
        ↓
ASK REQUIREMENT
        ↓
LEAD DETAILS
        ↓
BOOK CALL / CONTACT
```

**Complete Script:**

**Welcome:**
> Hi [NAME]! Happy to help with that. Which of these best matches what you need?

**Service Options (buttons):**
- "[Service 1 — e.g., Social Media Management]"
- "[Service 2 — e.g., Content Strategy]"
- "[Service 3 — e.g., Ad Management]"

**After selecting a service:**
> Great choice! To point you in the right direction — what's your biggest challenge with [Selected Service] right now?

**Ask requirement:**
> Thanks for sharing that. Are you looking for a one-time project or ongoing support?

**Lead details:**
> Perfect — last thing, what's the best email or phone number to reach you at?

**Book call / contact:**
> All set, [NAME]! You can grab a time that works for you here: [BOOKING LINK]
> Or if you'd rather I reach out directly, I'll follow up within 24 hours.

> **Beginner Mistake:** Offering more than 3-4 service options as buttons. Too many choices overwhelm the lead and lower completion rates — group similar services together.

---

# SECTION 9 — APPOINTMENT / CONSULTATION FLOW

```
USER INTEREST
      ↓
SERVICE INFORMATION
      ↓
QUALIFICATION
      ↓
BOOKING CTA
      ↓
CONFIRMATION
      ↓
REMINDER
```

**Complete Script:**

**User interest (trigger):** User comments/DMs `CONSULT`, `BOOK`, or taps "Book a Call."

**Service information:**
> Hi [NAME]! Happy you're interested in a consultation with [BUSINESS NAME]. Here's what it covers: [Brief Description of What the Call Includes].

**Qualification:**
> Quick question so I can prep properly — what's the main thing you're hoping to get out of our chat?

**Booking CTA:**
> Perfect. Grab a time that works for you here: [BOOKING LINK]

**Confirmation:**
> You're all set, [NAME]! Your call for [SERVICE] is booked for [DATE]. Looking forward to it!

**Reminder (sent 24 hours before):**
> Hey [NAME], quick reminder — your consultation about [SERVICE] is coming up on [DATE]. See you then! Need to reschedule? Just reply here.

> **Quick Tip:** If your booking tool (Calendly, etc.) supports it, connect it to trigger the confirmation and reminder messages automatically. Check the current ManyChat interface/options for available integrations, as these change over time.
