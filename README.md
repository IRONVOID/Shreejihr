# Shree Ji HR Consultancy — Official Website

A luxury, modern, high-converting one-page website built for **Shree Ji HR Consultancy** ("Right People • Right Growth").

## 🌟 Key Features
- **Brand Theme**: Deep Navy Blue (`#0B1F3F`), Gold/Amber accents (`#C9A227`), Off-White background.
- **Govt. Recognition**: MSME Udyam certified banner with 5 official trust badges.
- **12 Comprehensive Sections**:
  1. **Navbar** (Top notification strip, logo, nav links, hamburger drawer, direct CTAs)
  2. **Hero Section** (Tagline, pitch, CTAs, trust stats, executive imagery)
  3. **About Us** (Narrative, Mission & Vision luxury cards, core pillars)
  4. **Government Recognized** (MSME Udyam badges & certification)
  5. **Why Choose Us** (All 20 points in responsive grid with search/filter)
  6. **Industries We Serve** (7 sector cards with common roles)
  7. **Services We Provide** (Numbered 01–13 with icons and replacement guarantee badges)
  8. **Our Hiring Process** (6-step interactive vertical stepper timeline)
  9. **Positions We Hire For** (16 positions with category filter tabs and search)
  10. **Benefits for Companies** (7 strategic advantage cards including 2-month replacement)
  11. **Contact / Get in Touch** (Phones, Email, Meerut Address, Google Maps, Interactive Form with WhatsApp dispatch)
  12. **Footer** (Social media icons row, quick links, copyright)
- **Floating WhatsApp Widget**: Fixed circular button in bottom-right with pulse animation.
- **Single Config File**: Easily update phone numbers, social links, and email in `src/config/siteConfig.js`.

---

## 🛠️ Tech Stack
- **React 19 + Vite**
- **Tailwind CSS 3.4**
- **Lucide Icons & Custom SVG Social Media Icons**
- **Responsive**: Mobile-First (375px), Tablet (768px), Desktop (1440px)
- **Zero Build Errors**: Tested and verified production build with `npm run build`.

---

## 🚀 How to Run Locally

```bash
# 1. Navigate to project folder
cd C:\Users\irvn0\.gemini\antigravity\scratch\shree-ji-hr

# 2. Install dependencies (if not already installed)
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
http://localhost:5173
```

---

## 🌐 Deploy to Vercel / Netlify

```bash
# Build the production static bundle
npm run build
```
Upload the generated `dist/` directory or connect your GitHub repository directly to Vercel or Netlify.

---

## ⚙️ Updating Phone Numbers & Social Media Links
Open [`src/config/siteConfig.js`](file:///C:/Users/irvn0/.gemini/antigravity/scratch/shree-ji-hr/src/config/siteConfig.js) and update:
- `primaryPhone`: `"+91 9027407518"`
- `secondaryPhone`: `"+91 9690423313"`
- `email`: `"shreejihrconsultancy1@gmail.com"`
- `socialLinks.whatsapp`: `https://wa.me/919027407518?text=...`
- `socialLinks.instagram`: `https://instagram.com/YOUR_HANDLE`
- `socialLinks.facebook`: `https://facebook.com/YOUR_PAGE`
- `socialLinks.linkedin`: `https://linkedin.com/company/YOUR_PAGE`
- `socialLinks.twitter`: `https://x.com/YOUR_HANDLE`
