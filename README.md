<div align="center">

<img src="public/logo/logo-transparent.webp" alt="Urvara Shakti Logo" height="90" />

# 🌱 Urvara Shakti

**Healthy Soil. Healthy Plants. Healthy Planet.**

*Kyari Ki Kilkari — Premium Organic Soil Solutions from India*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: Private](https://img.shields.io/badge/License-Private-red)](.)

</div>

---

## 📖 Overview

**Urvara Shakti** is a production-ready marketing website for India's premium organic soil-health brand. It is a fast, static-first brand and product site with a single conversion goal — **WhatsApp enquiries** for buying, dealership, and bulk orders.

The site communicates scientific credibility and natural warmth, built to feel like a premium modern Indian sustainability brand.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🏠 **Homepage** | Hero banner, featured products, brand story, quality teaser, FAQ teaser, dealer CTA |
| 🌿 **Products** | Detailed pages for Bio Compost, Ready-to-Use Soil Mix, Plant Enhancer |
| 🔬 **Quality & Testing** | Soil health parameters, certifications, methodology |
| 📖 **About** | Brand story, vision, mission, values, leadership philosophy |
| 📸 **Gallery** | Photo grid for production, nurseries, and garden results |
| ❓ **FAQ** | Accordion-based frequently asked questions |
| 🤝 **Dealer Inquiry** | WhatsApp-driven dealership inquiry form |
| 📦 **Bulk Orders** | Bulk order inquiry form for farms and institutions |
| 📬 **Contact** | Contact form with address, phone, email |
| 📝 **Blog** | Soil health articles and planting guides |
| 📱 **Mobile-first** | Fully responsive with accordion mobile footer |
| ⚡ **Performance** | Static generation, WebP images, `next/image` optimization |
| 🔍 **SEO** | Metadata, OpenGraph, sitemap, robots.txt |
| ♿ **Accessibility** | Skip-to-content, ARIA labels, semantic HTML |

---

## 🛠 Tech Stack

```
Framework      Next.js 16 (App Router, Static Export)
Language       TypeScript 5.6
Styling        Tailwind CSS 3.4 + Custom Design Tokens
UI Icons       Lucide React
UI Primitives  Radix UI (Accordion, Dialog)
Animations     Framer Motion
Image Opt.     Sharp + next/image (WebP)
Fonts          Google Fonts (Playfair Display, Inter)
Deployment     Vercel (recommended)
```

---

## 🗂 Project Structure

```
urvara-shakti/
├── public/
│   ├── logo/                    # Logo files (WebP, PNG, favicon, OG image)
│   └── images/                  # Product & hero images
│       ├── hero/
│       ├── products/
│       ├── gallery/
│       └── quality/
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── page.tsx             # Homepage
│   │   ├── layout.tsx           # Root layout + metadata
│   │   ├── about/
│   │   ├── products/
│   │   │   ├── page.tsx         # Products listing
│   │   │   ├── bio-compost/
│   │   │   ├── ready-to-use-soil/
│   │   │   └── plant-enhancer/
│   │   ├── quality/
│   │   ├── blog/
│   │   ├── gallery/
│   │   ├── faq/
│   │   ├── dealer/
│   │   ├── bulk-orders/
│   │   ├── contact/
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky nav with mobile drawer
│   │   │   ├── MobileNav.tsx    # Slide-in mobile menu
│   │   │   └── Footer.tsx       # Accordion mobile footer
│   │   ├── sections/            # Reusable homepage sections
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── BrandStoryTeaser.tsx
│   │   │   ├── QualityTeaser.tsx
│   │   │   ├── FAQTeaser.tsx
│   │   │   ├── DealerCTA.tsx
│   │   │   └── WhySoilMatters.tsx
│   │   ├── hero/
│   │   └── ui/
│   │       ├── WhatsAppBuyButton.tsx  # Reusable WhatsApp CTA
│   │       └── LeafDivider.tsx
│   ├── data/                    # Centralised content data
│   │   ├── site.ts              # Brand config, contact, socials
│   │   ├── products.ts          # Product definitions
│   │   ├── navigation.ts        # Nav & footer links
│   │   ├── blog.ts              # Blog post data
│   │   └── faq.ts               # FAQ entries
│   ├── lib/
│   │   ├── whatsapp.ts          # WhatsApp URL builder & templates
│   │   ├── seo.ts               # SEO metadata helpers
│   │   └── utils.ts             # Utility functions
│   └── styles/
│       └── globals.css          # Global styles & Tailwind base
├── .env.example                 # Environment variable template
├── next.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd urvara-shakti
npm install
```

### 2. Configure Environment

Edit [`.env`](.env) with your real values (see [Environment Variables](#-environment-variables) below).

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 🔐 Environment Variables

All sensitive configuration lives in `.env`. Copy `.env.example` and fill in real values:

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public URL of the deployed site | `https://urvarashakti.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code (no `+`) | `919876543210` |
| `NEXT_PUBLIC_PHONE_NUMBER` | Display phone number | `+91 98765 43210` |
| `NEXT_PUBLIC_EMAIL` | Contact email address | `contact@urvarashakti.com` |
| `NEXT_PUBLIC_OFFICE_ADDRESS` | Full registered office address | `4th Floor, Keshri Nagar...` |

> **⚠️ Never commit `.env` to version control.** Add `.env` to your `.gitignore`.

---

## 🎨 Design System

The design uses a custom Tailwind token palette defined in [`tailwind.config.js`](tailwind.config.js):

| Token | Purpose |
|---|---|
| `primary` / `primary-dark` | Deep forest green — headings, nav, CTAs |
| `secondary` / `secondary-light` | Warm amber / turmeric — accents, highlights |
| `cream` / `cream-dark` | Off-white page background |
| `surface` | Card backgrounds |
| `soil` | Earthy brown — product tags |
| `brandText` / `brandText-muted` | Body copy colours |
| `brandBorder` | Subtle dividers and card borders |

---

## 📲 WhatsApp Integration

All purchase and inquiry flows route through WhatsApp — no payment gateway or backend required. The [`WhatsAppBuyButton`](src/components/ui/WhatsAppBuyButton.tsx) component supports four message templates:

| `type` prop | Use case |
|---|---|
| `product` | Product-specific purchase inquiry |
| `general` | Generic order inquiry |
| `dealer` | Dealership / stockist inquiry |
| `bulk` | Bulk / farm / institutional order |

Message templates are defined in [`src/lib/whatsapp.ts`](src/lib/whatsapp.ts).

---

## 📦 Available Scripts

```bash
npm run dev            # Start development server (hot reload)
npm run build          # Production build
npm run start          # Start production server
npm run lint           # ESLint check
npm run optimize-images  # Compress & convert images to WebP
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. Add all environment variables from `.env` in the Vercel dashboard
4. Deploy — Vercel auto-detects Next.js and handles builds

### Self-hosted

```bash
npm run build
npm run start   # Runs on port 3000
```

Use **Nginx** or **Caddy** as a reverse proxy with SSL.

---

## 🤝 Contributing

This is a private client project. Please do not fork or redistribute without permission.

---

<div align="center">

Made with 🌿 for **Urvara Shakti** — *Restoring Soil. Reviving Nature. Sustaining Life.*

</div>
