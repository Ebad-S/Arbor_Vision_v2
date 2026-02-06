# Content Checklist - Arbor Vision Consulting v2

Remaining items that still need attention before going live.

---

## Awaiting Client Confirmation

- [ ] **ABN** — needs to be confirmed and added to `site.json`
- [ ] **Insurance statement** — confirm exact coverage figure, update certificate entry in `site.json`
- [ ] **Open Graph image** — provide a default social share image (1200x630px recommended), add to `site.json` as `ogImage`
- [ ] **Services list** — confirm service names and descriptions match Mike's actual offerings
- [ ] **Confirm all qualifications** are current and listed accurately

## Images

- [ ] **Replace stock service images** — swap Creative Commons images with Mike's own photography when available
- [ ] **Certificate badge images** — replace inline SVG icons with real badge/logo images if available
- [ ] **Hero video** (optional) — short ambient loop for the homepage if desired

## Content Review

- [ ] **DA Support FAQ answers** — update turnaround times and pricing when available
- [ ] **Privacy Policy** — review content for legal accuracy

## Social Media

- [ ] **Update social media URLs** in `footer.njk` — currently pointing to platform homepages, need actual Arbor Vision Consulting profile URLs (Instagram, Facebook, X, LinkedIn)

## Pre-Launch

- [ ] **Google Business Profile** — set up and verify (see [SEO_Optimizations.md](SEO_Optimizations.md))
- [ ] **Google Search Console** — verify site and submit sitemap
- [ ] Run Lighthouse audit on production (target 90+ all categories)
- [ ] Test on real mobile device
- [ ] Verify all links work (no 404s)

---

## Remaining TODOs in Codebase

| File | TODO | Description |
|------|------|-------------|
| `src/_includes/partials/header.njk` | `<!-- TODO: Replace with actual logo image -->` | Replace favicon.svg with real logo |

---

## How to Run

```bash
npm install
npm run dev    # Dev server with live reload
npm run build  # Production build -> _site/
```
