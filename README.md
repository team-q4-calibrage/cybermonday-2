# Cyber Monday – Site 2 (Multi-product store)

Q4 calibration e-commerce site for the **Cyber Monday** event.
Site 2 of 2: a small **tech-accessories store** with several products.

| | |
|---|---|
| **Event** | Cyber Monday |
| **Type** | Multi-product store |
| **Owner** | Person 6 |
| **Stack** | React + Vite + React Router |
| **Hosting** | Netlify (auto-deploy from `main`) |
| **Deliver by** | 6:00 AM WAT, 30 Sept 2026 |
| **Live URL** | _TBD_ |

## Concept

- **Brand name:** Circuit
- **Product category:** everyday tech accessories: audio, charging, smartwatches, desk setup (8 products, 4 categories)
- **Main offer:** Cyber Monday, up to -45 %, free delivery from 40 000 FCFA, 1-year warranty, "Pack Setup Pro" as the hero bundle
- **Creative hook:** **Deal de l'heure**, a different product every hour with an extra -10 % and its own countdown
- **Target customer:** students and young professionals in Benin
- **Mood / palette:** minimal and bright, white `#ffffff`, ink `#0e1116`, electric blue `#2d4bff`
- **Font:** Manrope only, self-hosted
- **Language:** French
- **Images:** AI-generated, see [IMAGES.md](IMAGES.md) for the prompts and file names
- **Content:** products, prices and reviews live in `src/data/products.js`

## Pages

| Page | Purpose |
|---|---|
| **Home** | Blue offer hero with countdown, trust badges, Deal de l'heure, categories, best sellers, bundle, reviews |
| **Shop / Category** | Product grid with category filters and sorting (popular, price) |
| **Product** | Image, price, discount, stock urgency, quantity, "Add to cart", "Buy now", details, related products |
| **Cart** | Items, free-shipping progress bar, upsell, summary |
| **Checkout** | Short form, delivery instructions, payment choice (demo only), order summary |
| **Confirmation** | Order number, summary, "Confirm on WhatsApp" button |

The cart opens as a side drawer on every "Add to cart" and is saved in `localStorage`.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
```

## Deploy

Netlify → *Add new site* → *Import from GitHub* → `team-q4-calibrage/cybermonday-2`

- Build command: `npm run build`
- Publish directory: `dist`
- Site name: random, not guessable (e.g. `cm2-xxxx.netlify.app`)
- Client-side routing is handled by `public/_redirects`

## Before submitting

- Add the images from [IMAGES.md](IMAGES.md).
- Replace the placeholder WhatsApp number (`whatsapp` in `src/data/products.js`).
- Keep this repo **private**; share the live link only in the team group.
