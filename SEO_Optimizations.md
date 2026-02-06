# SEO Optimizations - Arbor Vision Consulting

This document outlines the SEO configuration already in place and the remaining steps for optimal **local SEO** performance for an arboricultural consulting business in the Blue Mountains, NSW.

---

## Already Implemented

### On-Page SEO

- [x] **Unique `<title>` tags** on every page with brand name suffix
- [x] **Meta descriptions** on every page with targeted keywords
- [x] **Canonical URLs** on every page to prevent duplicate content
- [x] **Semantic HTML5** structure (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`)
- [x] **Heading hierarchy** — single `<h1>` per page, logical `<h2>`/`<h3>` nesting
- [x] **Image alt text** on all images with descriptive, keyword-relevant content
- [x] **Mobile-first responsive design** — passes Google's mobile-friendly test
- [x] **Fast loading** — static HTML, no heavy frameworks, minimal JS

### Structured Data (JSON-LD)

- [x] **LocalBusiness schema** — on every page (business name, address, phone, hours, geo coordinates)
- [x] **Service schema** — on individual service pages
- [x] **FAQPage schema** — on DA Support page (8 Q&As)

### Technical SEO

- [x] **sitemap.xml** — auto-generated, lists all public pages with last-modified dates
- [x] **robots.txt** — allows all crawlers, references sitemap URL
- [x] **HTTPS ready** — no mixed content, all internal links are relative
- [x] **Clean URL structure** — `/services/`, `/credentials/`, `/contact/` (no `.html` extensions)
- [x] **No JavaScript dependency** — content is in the HTML, not rendered client-side

---

## Remaining Steps for Local SEO

### 1. Google Business Profile (Critical)

This is the single most important step for local SEO.

- [ ] **Claim or create** the Google Business Profile at [business.google.com](https://business.google.com)
- [ ] Set the business category to **"Arborist"** or **"Tree Service"**
- [ ] Add secondary categories: **"Consulting Arborist"**, **"Environmental Consultant"**
- [ ] Enter the full business address: **18 St Albans Rd, Medlow Bath NSW 2780**
- [ ] Add phone number: **(+61) 404 260 489**
- [ ] Add website URL: **https://www.arborvision.consulting**
- [ ] Set business hours (Mon–Fri 8:30am–5pm, Sat–Sun Closed)
- [ ] Upload high-quality photos (office, Mike at work, tree assessments)
- [ ] Write a compelling business description with keywords
- [ ] **Encourage Google reviews** — link: [Google Review Link](https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID)

### 2. Local Citations & Directories

Register the business (with **consistent NAP** — Name, Address, Phone) on:

- [ ] **Yellow Pages Australia** — yellowpages.com.au
- [ ] **True Local** — truelocal.com.au
- [ ] **Oneflare** — oneflare.com.au (Mike has an existing profile under Aerialist Tree Services)
- [ ] **HiPages** — hipages.com.au
- [ ] **Yelp Australia** — yelp.com.au
- [ ] **Apple Maps** — mapsconnect.apple.com
- [ ] **Bing Places** — bingplaces.com
- [ ] **Blue Mountains City Council** business directory (if available)
- [ ] **Local Blue Mountains community boards** and business listings

**Important**: NAP must be identical everywhere:
```
Arbor Vision Consulting
18 St Albans Rd, Medlow Bath NSW 2780
(+61) 404 260 489
```

### 3. Google Search Console

- [ ] **Verify the site** at [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Submit the sitemap: `https://www.arborvision.consulting/sitemap.xml`
- [ ] Monitor indexing status and fix any crawl errors
- [ ] Check Core Web Vitals report
- [ ] Monitor search queries and click-through rates

### 4. Open Graph & Social Images

- [ ] Create a **default Open Graph image** (1200x630px) featuring the logo and tagline
- [ ] Add `ogImage` to `site.json` for site-wide default
- [ ] Test with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 5. Additional Schema Markup (Optional Enhancements)

Consider adding:

- [ ] **Review/AggregateRating schema** — once Google reviews are established
- [ ] **GeoCoordinates** — add lat/lng to LocalBusiness schema for map accuracy
  ```json
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-33.6689",
    "longitude": "150.2840"
  }
  ```
- [ ] **Service area** schema for broader reach:
  ```json
  "areaServed": [
    { "@type": "City", "name": "Katoomba" },
    { "@type": "City", "name": "Leura" },
    { "@type": "City", "name": "Springwood" },
    { "@type": "AdministrativeArea", "name": "Blue Mountains" },
    { "@type": "AdministrativeArea", "name": "Greater Western Sydney" }
  ]
  ```

### 6. Content Strategy (Ongoing)

For long-term SEO growth:

- [ ] **Add a blog/articles section** — write about tree care, seasonal tips, common questions
  - Target keywords: "arborist blue mountains", "tree report DA NSW", "tree risk assessment"
- [ ] **Location-specific landing pages** — e.g. "Arborist Katoomba", "Tree Assessment Leura"
- [ ] **Case studies** — before/after tree assessments with photos (great for backlinks)

### 7. Performance Monitoring

- [ ] Run Lighthouse audits monthly (target: 90+ across all categories)
- [ ] Monitor page speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Check mobile usability in Google Search Console
- [ ] Track keyword rankings with a tool like Ahrefs, SEMrush, or free Google Search Console data

---

## Keyword Targets

### Primary Keywords
- arborist blue mountains
- consulting arborist blue mountains
- tree assessment blue mountains
- arborist report DA NSW
- tree risk assessment sydney

### Secondary Keywords
- tree health assessment katoomba
- aerial tree inspection NSW
- arboricultural impact assessment
- tree advice neighbour dispute
- root mapping arborist
- AQF level 5 arborist

### Long-Tail Keywords
- "do I need an arborist report for my DA"
- "qualified arborist blue mountains"
- "tree report for development application NSW"
- "arborist medlow bath"
- "QTRA risk assessment sydney"

---

## Quick Wins Checklist

1. **Google Business Profile** — set up and verify (biggest single impact)
2. **Google Search Console** — submit sitemap, monitor indexing
3. **Open Graph image** — create and add for social sharing
4. **Local directories** — register on top 5 Australian directories
5. **Encourage reviews** — ask satisfied clients to leave Google reviews
