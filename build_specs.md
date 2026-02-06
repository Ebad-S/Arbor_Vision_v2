<!-- multi phase build -->

```JSON
{
  "project": {
    "name": "arborvision-v2",
    "goal": "Build a fresh v2 Arborvision site (Mike Daws) as a lightweight, mobile-first, SEO-strong static site using Eleventy (11ty). Semantic HTML, CSS variables + small component classes, tiny JS modules, respects prefers-reduced-motion. No contact form. Prominent certificates. Strong DA Support page for Development Applications Tree Reports.",
    "non_goals": [
      "No React/Vite",
      "No GSAP/Framer/Lenis/scroll-jacking",
      "No heavy animation libraries",
      "No scraping v0"
    ]
  },
  "execution_mode": {
    "strategy": "phased_delivery",
    "rule": "Each phase must end with a working build and a short summary of what changed + how to run it."
  },
  "phase_plan": [
    {
      "phase": "P0 - Initialize & guardrails",
      "objective": "Create a clean Eleventy scaffold and enforce project constraints early.",
      "tasks": [
        "Initialize a new Node project (package.json) and install Eleventy as a dev dependency.",
        "Create scripts: dev (serve/watch) and build.",
        "Create .eleventy.js with input 'src' and output '_site'. Add passthrough copy for static assets (src/static -> _site).",
        "Create basic folder structure under src (pages, _includes/layouts, _includes/partials, assets/css, assets/js, assets/images, assets/icons, assets/video, _data).",
        "Add README.md with: install, dev, build, deploy notes, performance/SEO principles."
      ],
      "deliverables": [
        "Repo structure exists",
        "npm run dev starts a basic site",
        "npm run build outputs _site"
      ],
      "acceptance_criteria": [
        "Eleventy build succeeds with a minimal index page",
        "No framework or heavy libs installed"
      ]
    },
    {
      "phase": "P1 - Base layout + design tokens",
      "objective": "Implement reusable layout/partials + CSS foundation using variables and small components.",
      "tasks": [
        "Create base layout: src/_includes/layouts/base.njk with semantic HTML skeleton.",
        "Create head partial: src/_includes/partials/head.njk including charset, viewport, basic meta, canonical placeholder, OpenGraph/Twitter placeholders, favicon links.",
        "Create header partial: sticky navbar placeholder with mobile toggle button (no JS yet).",
        "Create footer partial: professional footer skeleton with quick links + contact placeholders.",
        "Create CSS foundation: src/assets/css/base.css (normalize-ish, typography, spacing, utility classes), layout.css, components.css. Use CSS variables in :root for colors/spacing/radius/shadows.",
        "Ensure base layout loads CSS in correct order. Use system fonts by default."
      ],
      "deliverables": [
        "Reusable base layout + header/footer",
        "CSS token system and basic styling"
      ],
      "acceptance_criteria": [
        "All pages can extend base layout",
        "Sticky header works in CSS (position: sticky) without breaking layout",
        "No inline styles except critical tiny exceptions (prefer none)"
      ]
    },
    {
      "phase": "P2 - Navigation + tiny JS modules",
      "objective": "Implement mobile nav + accessibility + prefers-reduced-motion compliance.",
      "tasks": [
        "Create JS entry: src/assets/js/main.js as ES module; import small modules.",
        "Create module nav.js: mobile menu toggle, focus management, close on ESC, aria-expanded updates, body scroll lock minimal (no dependencies).",
        "Add module reveal.js: IntersectionObserver adds '.is-visible' to elements with '[data-reveal]'. Must fail-safe: content visible without JS by default; only enhance if JS present.",
        "Add reduced-motion handling: if prefers-reduced-motion: reduce -> disable reveal transitions, disable any smooth scrolling.",
        "Add :focus-visible styles and ensure keyboard navigation works."
      ],
      "deliverables": [
        "Working sticky navbar with accessible mobile drawer",
        "Reveal-on-scroll enhancement (optional, subtle)"
      ],
      "acceptance_criteria": [
        "Keyboard navigation works: tab through nav, open/close drawer, ESC closes",
        "prefers-reduced-motion disables animations/transitions meaningfully",
        "No scroll-jacking, no heavy listeners"
      ]
    },
    {
      "phase": "P3 - Page scaffolding (site map)",
      "objective": "Create all primary pages with semantic structure and placeholders.",
      "tasks": [
        "Create pages (Nunjucks or Markdown with Nunjucks): home, services index, service detail template, DA Support, certifications, service areas, contact, privacy, 404.",
        "Implement a simple data file in src/_data/site.json for global site config (name, url placeholder, phone/email placeholders, service areas list placeholders).",
        "Implement navigation links in header/footer from site.json.",
        "On contact page: add click-to-call and click-to-email, no form. Include hours placeholder.",
        "On certifications page: add certificate grid component with placeholder images and labels."
      ],
      "deliverables": [
        "All pages exist and render",
        "Global data-driven nav/footer"
      ],
      "acceptance_criteria": [
        "No broken links across primary pages",
        "Titles and H1 exist on every page (exactly one H1 per page)"
      ]
    },
    {
      "phase": "P4 - Hero + trust strip + CTA system",
      "objective": "Build the conversion-critical components: hero, trust strip, CTAs.",
      "tasks": [
        "Create hero component: supports image and optional video background with fallback. Must be performant: poster image, no autoplay audio, safe on mobile.",
        "Add trust strip component near top of home + relevant pages: shows key certificates/badges as icons + short labels (placeholders).",
        "Add CTA strip component used across pages: primary 'Call Mike' + secondary 'Email Mike'.",
        "Add professional footer content sections: services, service areas, certificates, contact."
      ],
      "deliverables": [
        "Home page looks professional and mobile-first",
        "CTAs are consistent and prominent"
      ],
      "acceptance_criteria": [
        "Hero is not a performance trap (fallback works, no layout shift)",
        "CTA buttons are tap-friendly on mobile"
      ]
    },
    {
      "phase": "P5 - DA Support page (high quality content IA)",
      "objective": "Build the DA Support page as a standout SEO + conversion page.",
      "tasks": [
        "Implement DA Support page sections: what it is, who it's for, deliverables, process, what councils look for (general), FAQs (6-10).",
        "Use <details><summary> for FAQ accordion (accessible, lightweight).",
        "Add an inline CTA strip mid-page and bottom-page.",
        "Ensure language is helpful but not legal advice; avoid definitive promises; use placeholders for turnaround times/pricing."
      ],
      "deliverables": [
        "DA Support page with strong structure and FAQs"
      ],
      "acceptance_criteria": [
        "FAQ is accessible and indexable",
        "Page includes internal links to contact, certifications, services"
      ]
    },
    {
      "phase": "P6 - SEO plumbing (meta, robots, sitemap, schema)",
      "objective": "Add all technical SEO essentials and structured data safely.",
      "tasks": [
        "Implement per-page meta fields (title, description, canonical, og) via frontmatter and head partial.",
        "Create robots.txt in src/static/robots.txt (allow all, point to sitemap).",
        "Generate sitemap.xml using Eleventy plugin or custom template; include all primary pages.",
        "Add JSON-LD LocalBusiness site-wide: only include truthful fields from site.json placeholders (phone, email, areaServed).",
        "Add per-service JSON-LD Service schema on service detail pages.",
        "Add FAQPage schema on DA Support page (and optionally key service pages).",
        "Add favicon set placeholders and manifest if desired (optional)."
      ],
      "deliverables": [
        "robots.txt + sitemap.xml",
        "JSON-LD schemas"
      ],
      "acceptance_criteria": [
        "Each page has unique title + description",
        "Canonical URLs are consistent",
        "No fake reviews/ratings"
      ]
    },
    {
      "phase": "P7 - Performance & accessibility hardening",
      "objective": "Ensure the site is fast and robust on mobile, with clean semantics.",
      "tasks": [
        "Add image guidelines: use width/height, loading=lazy, decoding=async; create placeholder images if needed.",
        "Set up a basic image folder convention and update markup to use responsive images (srcset) placeholders.",
        "Check contrast and focus states; ensure nav and FAQ are keyboard-usable.",
        "Ensure JS is deferred/module and minimal; no unused CSS bloat.",
        "Add 404 page route and verify build output."
      ],
      "deliverables": [
        "Improved Lighthouse-friendly output",
        "A11y basics covered"
      ],
      "acceptance_criteria": [
        "No layout shift due to missing dimensions",
        "prefers-reduced-motion works across the site",
        "No console errors"
      ]
    },
    {
      "phase": "P8 - Content handoff checklist (for you to fill from v0)",
      "objective": "Create a clear content/admin checklist so Eddie can populate v2 without confusion.",
      "tasks": [
        "Add CONTENT_CHECKLIST.md with: required text, required images, certificates list, service areas list, DA Support specifics, operating hours, insurance statement, ABN (optional).",
        "Add ASSET_GUIDE.md explaining naming conventions and recommended formats (webp/avif).",
        "Add TODO markers in templates where client-provided data must be inserted."
      ],
      "deliverables": [
        "Documentation for content population",
        "Clear TODOs in code"
      ],
      "acceptance_criteria": [
        "Someone can populate the site without reading source code deeply",
        "All placeholders are discoverable"
      ]
    }
  ],
  "global_acceptance": {
    "must_have": [
      "Static output in _site",
      "Mobile-first layout",
      "Sticky navbar + CTAs",
      "Clear certificates display",
      "DA Support page improved with FAQs",
      "No contact form (email/phone only)",
      "SEO meta + robots + sitemap + schema",
      "prefers-reduced-motion respected",
      "Tiny JS modules only"
    ],
    "must_not_have": [
      "React/Vite app",
      "Scroll-jacking",
      "Heavy animation libs",
      "Invented credentials or fake reviews"
    ]
  },
  "how_to_run": {
    "commands": [
      "npm install",
      "npm run dev",
      "npm run build"
    ],
    "output": "_site"
  }
}

```