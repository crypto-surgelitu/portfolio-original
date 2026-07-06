# README.md

# Anthony Muhati Portfolio

A premium portfolio website showcasing professional web development and software engineering services for businesses.

---

# PURPOSE

This website is designed to:

* Showcase real client work
* Present services clearly
* Build trust with potential clients
* Generate project inquiries

---

# LIVE SERVICES

Anthony builds:

* Business websites
* Web applications
* Mobile applications
* ERP systems
* Custom software solutions

---

# DESIGN PHILOSOPHY

The project follows a:

> Design-first development approach

Every project begins with UI/UX design before implementation to ensure clarity and alignment.

---

# TARGET USERS

* Business owners
* SMEs
* Tourism companies
* Startups
* Organizations
* International clients

---

# TECH STACK

Frontend:

* Next.js 14 (App Router)
* TypeScript
* Tailwind CSS

UI:

* shadcn/ui
* Radix UI primitives

Animation:

* Framer Motion (subtle motion only)

Infrastructure:

* Vercel (hosting)
* Cloudflare (DNS)

Services:

* Brevo (transactional email)
* WhatsApp click-to-chat integration

---

# PROJECT STRUCTURE

/app

/components

/lib

/styles

/public

---

# KEY FEATURES

* Premium minimalist UI
* Responsive design
* Case study system
* Service-based architecture
* Inquiry-focused contact flow
* Design-first presentation system

---

# LIVE PROJECTS

## Hippo Transfers & Adventures

Real commercial project for a tourism business.

Live production website.

---

## BS1

Business system developed during attachment at SwahiliPotHub.

Demonstrates real-world system development experience.

---

# COMMUNICATION FLOW

Visitors:

1. View landing page or home
2. Explore services or work
3. Review case studies
4. Submit inquiry via form or WhatsApp

---

# INTEGRATION NOTES

## Email

Handled via Brevo transactional email API.

Used for contact form submissions.

---

## WhatsApp

Uses direct wa.me links.

No backend automation in initial version.

---

## Deployment

Hosted on Vercel.

DNS managed via Cloudflare.

---

# PERFORMANCE GOALS

* Fast page loads
* Minimal JavaScript overhead
* Mobile-first optimization
* Smooth but subtle animations

---

# ANIMATION GUIDELINES

Use Framer Motion only for:

* entry fades
* subtle transitions
* hover micro-interactions

Avoid heavy motion systems.

---

# DEVELOPMENT RULE

Do not over-engineer.

Prioritize:

* clarity
* usability
* conversion

over:

* complexity
* architecture perfection
* excessive abstraction

---

# ENVIRONMENT VARIABLES

This project requires environment variables to run.

## Local Development

1. Copy `.env.example` to `.env.local`:
   ```
   cp .env.example .env.local
   ```
2. Fill in all real values in `.env.local`
3. Restart the dev server:
   ```
   npm run dev
   ```

## Vercel Deployment

Add each variable from `.env.example` to Vercel:

1. Go to **Vercel Dashboard → Your Project → Settings → Environment Variables**
2. Add each variable with its real value
3. Redeploy for changes to take effect

### Variable Reference

| Variable | Scope | Required | Description |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public | Yes | Production URL |
| `NEXT_PUBLIC_SITE_NAME` | Public | Yes | Site/brand name |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public | Yes | Public contact email |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Public | Yes | WhatsApp number (digits only, no +) |
| `NEXT_PUBLIC_WHATSAPP_MESSAGE` | Public | No | WhatsApp pre-filled message |
| `NEXT_PUBLIC_LINKEDIN_URL` | Public | Yes | LinkedIn profile URL |
| `NEXT_PUBLIC_GITHUB_URL` | Public | Yes | GitHub profile URL |
| `NEXT_PUBLIC_DEFAULT_OG_IMAGE` | Public | Yes | Default Open Graph image path |
| `CONTACT_RECEIVER_EMAIL` | Server | No | Email receiving contact submissions |
| `BREVO_API_KEY` | Server | No | Brevo API key for transactional email |

- **Public** (`NEXT_PUBLIC_` prefix): Available in the browser.
- **Server** (no prefix): Server-side only, never exposed to the client.

---

# FINAL NOTE

This project is not just a portfolio.

It is a conversion system designed to turn visitors into paying clients through clarity, trust, and structured presentation.
