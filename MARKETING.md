# B-TRONIKS — Marketing & Ads Setup Guide

Sab kuch step-by-step, free se shuru karke paid ads tak. Client (Jaydeep) ke
Gmail `btroniks11@gmail.com` se hi saare accounts banana best hai.

---

## 1. Google Search Console (FREE — sabse pehle karo)

Google pe site dikhne ke liye:

1. https://search.google.com/search-console → "Add property" → URL prefix → site ka URL daalo
2. Verify via HTML tag (ek meta tag milega — `index.html` ke `<head>` mein paste karke redeploy)
3. Sitemaps → `sitemap.xml` submit karo
4. 2–7 din mein Google indexing shuru kar dega

**Target keywords (site content mein already hain):**
- "IoT solutions company India"
- "Mechatronics solutions"
- "embedded product development India"
- "LoRa IoT development" / "ESP32 product development"
- "R&D electronics company"

## 2. Google Business Profile (FREE — local leads ke liye best)

1. https://business.google.com → "B-TRONIKS" naam se profile banao
2. Category: "Electronics engineering service" / "Engineering consultant"
3. Phone +91 8169102798, website link, service area (city/region) daalo
4. 3–4 photos daalo (workshop, projects, PCB/setup ki photos)
5. Clients se Google reviews maango — ye local ranking ka sabse bada factor hai

## 3. Google Analytics (FREE — kaun aa raha hai dekhne ke liye)

1. https://analytics.google.com → account banao → Web property
2. Measurement ID milega (`G-XXXXXXXXXX`)
3. `index.html` mein GA4 wala commented block hai — ID paste karo, comments hatao, redeploy

## 4. WhatsApp Business (FREE — leads yahin aayengi)

1. WhatsApp Business app install karo (normal WhatsApp se alag)
2. Business profile: naam B-TRONIKS, category, timings, website link, catalog mein services daalo
3. Greeting message + quick replies set karo
4. Website ke saare WhatsApp buttons isi number pe already point karte hain (8169102798)

## 5. Meta Ads (Facebook + Instagram) — PAID

### Setup (ek baar)

1. **Facebook Page banao**: facebook.com → Pages → Create — naam "B-TRONIKS", category "Engineering Service", website link, OG image profile/cover mein use kar sakte ho
2. **Instagram Business account** banao aur Page se link karo
3. **Meta Business Suite**: https://business.facebook.com → business account banao
4. **Meta Pixel**: Events Manager → Connect Data Sources → Web → Pixel banao
   - Pixel ID milega → `index.html` mein Meta Pixel wala commented block hai → `PIXEL_ID` (2 jagah) replace karo, comments hatao, redeploy
   - Pixel ke bina ads chalana = paisa waste (tracking/retargeting nahi hoga)

### Campaign structure (recommended for B2B services)

**Campaign 1 — WhatsApp Leads (main)**
- Objective: **Engagement → Messaging apps → WhatsApp**
- Budget: ₹200–300/day se shuru (месяc ~₹6-9k; client se confirm karo)
- Audience: 
  - Location: apna city + 50km (ya jo bhi service area hai)
  - Age 25–55
  - Interests: Manufacturing, Industrial Automation, IoT, Electronics Engineering, Small Business Owners
- Placement: Automatic
- Ad creative: OG image (og-image.jpg) ya project photos + video better

**Campaign 2 — Website Traffic (secondary, pixel data banane ke liye)**
- Objective: Traffic → website URL
- ₹100–150/day
- Baad mein is data se Retargeting audience banao (website visitors last 30 days)

### Ad copy (ready-to-use)

**Ad 1 (Hinglish, WhatsApp CTA):**
> **Idea hai? Hum product bana denge.** 💡→📦
> IoT devices, sensor systems, automation, custom electronics — design se lekar final product tak, sab ek hi jagah.
> Electronics + Mechanical + Software = B-TRONIKS
> 👉 WhatsApp karo, free consultation lo.

**Ad 2 (English, professional):**
> **From idea to intelligent product.**
> B-TRONIKS builds custom IoT & mechatronics solutions — sensors, wireless networks (LoRa/ESP32), automation and full R&D product development. Since 2018.
> Message us on WhatsApp to discuss your project.

**Ad 3 (problem-focused):**
> Machine ka data remote se monitor karna hai? Factory automation chahiye? Prototype banwana hai?
> B-TRONIKS — complete engineering solutions under one roof. Since 2018.
> 👉 Send us a message.

### Tips
- Pehle 2 hafte dono ads chala ke dekho, jo better perform kare uspe budget shift karo
- Video ads (10–20 sec, project working footage) images se 2–3x better perform karti hain
- Har lead ko WhatsApp pe 5 min ke andar reply karo — response time = conversion

## 6. LinkedIn (FREE — B2B ke liye sabse important)

B-TRONIKS B2B company hai — LinkedIn organic Meta ads se zyada quality leads de sakta hai:
1. Company page banao + Jaydeep ka personal profile strong karo
2. Week mein 2 posts: project photos, "how we solved X" mini case studies, IoT tips
3. Manufacturing/factory owners, product startups ko connect karo

## 7. Free listings (backlinks + leads dono)

- **IndiaMART** — seller account (free tier) — engineering services list karo
- **Justdial** — business listing
- **Sulekha** — services listing
- Ye backlinks Google SEO bhi improve karte hain

---

## Monthly rhythm (minimum effort, max result)

| Kab | Kya |
|---|---|
| Ek baar | Search Console + Business Profile + Analytics + Pixel setup |
| Daily | WhatsApp leads ka 5-min reply |
| Weekly | 2 LinkedIn/Facebook posts (project photos) |
| Monthly | Ads performance check — jo chale uspe budget badhao |
| Har project ke baad | Client se Google review maango |
