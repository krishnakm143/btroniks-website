# B-TRONIKS Website

Single-page company website for B-TRONIKS — Mechatronics & IoT solutions.
Pure HTML/CSS/JS, no build step, no framework. Works on any static host.

## Files

- `index.html` — the whole site (all sections)
- `styles.css` — theme & responsive styles
- `script.js` — navbar, mobile menu, scroll animations, contact form

## Preview locally

Just open `index.html` in a browser, or:

```bash
cd btroniks-website
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy for FREE (Netlify — 5 minutes)

1. Go to https://app.netlify.com/drop
2. Drag-and-drop this whole folder onto the page
3. Done — you get a live URL like `btroniks.netlify.app`

(Alternatives: Vercel, GitHub Pages, Cloudflare Pages — all free.)

## Connect a custom domain (~₹800–1200/year)

1. Buy `btroniks.in` (or `.com`) from GoDaddy / Hostinger / Namecheap
2. In Netlify: Site settings → Domain management → Add custom domain
3. Point the domain's DNS to Netlify (they show exact records to add)
4. HTTPS certificate is automatic and free

## Contact form setup (Formspree — free, 2 minutes)

The form currently falls back to opening the visitor's email app.
To receive form submissions directly to email:

1. Sign up free at https://formspree.io with `btroniks11@gmail.com`
2. Create a new form — you'll get a URL like `https://formspree.io/f/abcd1234`
3. In `index.html`, replace `YOUR_FORM_ID` in the form's `action` with your ID:
   ```html
   <form ... action="https://formspree.io/f/abcd1234" method="POST">
   ```
4. Redeploy (drag-drop the folder again)

Free tier: 50 submissions/month — plenty for a company site.

## Editing content

All text lives in `index.html` — search for the section comments
(`HERO`, `ABOUT`, `SERVICES`, `WHY US`, `CONTACT`) and edit the text directly.
Colors can be changed at the top of `styles.css` (`:root` variables).
