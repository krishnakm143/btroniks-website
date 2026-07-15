# B-TRONIKS Company Website — Design Spec

**Date:** 2026-07-15
**Budget:** ₹5,000 (client quote) — so zero recurring cost stack: static site, free hosting (Netlify/Vercel), only domain cost.

## Business Context

B-TRONIKS — Mechatronics solutions company, founded 2018 by Jaydeep Panchal.
- Combines Electronics, Mechanical and Software to deliver client-specific solutions.
- Speciality: Data Communication and Networking Systems (DCNS) in IoT — sensor data retrieval from remote locations, transceivers (nRF24L01, GPS, RF, ESP8266, ESP32, Bluetooth, LoRa), network architecture (end devices, gateways, network/application/join servers), sensor/actuator integration, signal conditioning, power electronics, decision & control algorithms.
- Mission: partner with clients, deliver solutions per expectations, including R&D projects.
- Contact: Jaydeep Panchal, +91 8169102798, btroniks11@gmail.com

## Approach (chosen)

Single-page static website — hand-written HTML/CSS/JS, no framework, no build step.
- Free hosting on Netlify/Vercel/GitHub Pages; client only pays for domain (~₹800–1200/yr).
- Fast, zero maintenance, fits budget with margin.

Rejected: React/Vite (overkill for content site), WordPress (paid hosting eats the budget).

## Site Structure (single page, scroll sections)

1. **Navbar** — logo/wordmark, section links, mobile hamburger menu.
2. **Hero** — company name, tagline ("Complete Mechatronics Solutions — Electronics · Mechanical · Software"), short pitch, CTAs (Get in Touch / WhatsApp), subtle tech visual (circuit/IoT motif).
3. **About** — founded 2018, solution-based company, mission. Stats strip (e.g., Since 2018, 3 domains, End-to-end).
4. **Services / Speciality** — card grid:
   - IoT & DCNS solutions
   - Wireless & Networking (LoRa, ESP32/ESP8266, BLE, RF, GPS, nRF24L01)
   - Sensor & Actuator Integration
   - Data Architecture & Storage
   - Power Electronics & Control Algorithms
   - R&D / Custom Product Development
5. **Why B-TRONIKS** — 4 points: End-to-End Solutions, Expertise Across Domains, Innovation Driven, Trusted Partnership.
6. **Contact** — click-to-call phone, email link, WhatsApp button, contact form via Formspree (free tier, delivers to btroniks11@gmail.com; form action placeholder until client creates Formspree account — mailto fallback documented).
7. **Footer** — copyright, quick links.

## Design Direction

- Dark tech theme: deep navy/charcoal base, electric cyan/blue accent, clean modern sans-serif.
- Professional engineering feel — not flashy; subtle animations (scroll reveal, hover lift on cards).
- Fully responsive (mobile-first), accessible contrast, semantic HTML.
- SEO: title/meta description, Open Graph tags, favicon.

## Error Handling / Constraints

- No backend. Form failure → mailto/WhatsApp fallback visible right next to the form.
- All assets self-contained (inline SVG icons, system/google fonts with fallback) so it works on any static host.

## Testing / Verification

- Open in browser, verify responsive layout at mobile/tablet/desktop widths.
- Verify all links (tel:, mailto:, WhatsApp) and smooth-scroll nav.

## Deliverables

- `index.html`, `styles.css`, `script.js`, favicon/assets.
- `README.md` with 5-minute Netlify deploy steps + domain connection steps + Formspree setup.
