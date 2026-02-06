# Tech Stack - Arbor Vision Consulting v2

---

## Framework & Build

| Component        | Technology                                           |
|------------------|------------------------------------------------------|
| Static Generator | [Eleventy (11ty)](https://www.11ty.dev/) v3.1.2      |
| Template Engine  | [Nunjucks](https://mozilla.github.io/nunjucks/) (.njk) |
| Package Manager  | npm                                                  |
| Build Output     | Pure static HTML/CSS/JS → `_site/`                   |

**No frontend frameworks** (React, Vue, etc.) are used. The site is vanilla HTML, CSS, and minimal vanilla JavaScript.

---

## Typography

| Property         | Value                                                                 |
|------------------|-----------------------------------------------------------------------|
| Font Family      | System font stack: `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Heading Family   | Same as body (system fonts)                                           |
| Base Size        | `1rem` (16px)                                                         |

### Type Scale

| Token            | Size        | Usage                          |
|------------------|-------------|--------------------------------|
| `--text-xs`      | 0.75rem     | Fine print, footer copyright   |
| `--text-sm`      | 0.875rem    | Captions, labels, nav links    |
| `--text-base`    | 1rem        | Body text                      |
| `--text-lg`      | 1.125rem    | Lead text, hero descriptions   |
| `--text-xl`      | 1.25rem     | Card titles, h4                |
| `--text-2xl`     | 1.5rem      | Section titles, h3             |
| `--text-3xl`     | 1.875rem    | Page headings, h2              |
| `--text-4xl`     | 2.25rem     | h1                             |
| `--text-5xl`     | 3rem        | Hero title (clamp upper bound) |

### Font Weights

| Token               | Value | Usage               |
|----------------------|-------|----------------------|
| `--weight-normal`    | 400   | Body text            |
| `--weight-medium`    | 500   | Navigation links     |
| `--weight-semibold`  | 600   | Buttons, labels      |
| `--weight-bold`      | 700   | Headings             |

### Line Heights

| Token              | Value | Usage                  |
|--------------------|-------|------------------------|
| `--leading-tight`  | 1.2   | Headings               |
| `--leading-normal` | 1.6   | Body text              |
| `--leading-relaxed`| 1.75  | Long-form reading      |

---

## Colour Schema

### Primary Palette (Forest Green)

| Token                    | Hex       | Usage                                |
|--------------------------|-----------|--------------------------------------|
| `--color-primary`        | `#2d6a4f` | Buttons, links, accents              |
| `--color-primary-dark`   | `#1b4332` | Hover states, dark backgrounds       |
| `--color-primary-light`  | `#40916c` | Focus rings, lighter accents         |

### Accent Palette (Warm Sand)

| Token                    | Hex       | Usage                                |
|--------------------------|-----------|--------------------------------------|
| `--color-accent`         | `#d4a373` | Highlights, badges, accent elements  |
| `--color-accent-dark`    | `#b07d4f` | Accent hover states                  |

### Text Colours

| Token                    | Hex       | Usage                                |
|--------------------------|-----------|--------------------------------------|
| `--color-text`           | `#1a1a1a` | Primary body text                    |
| `--color-text-muted`     | `#555`    | Secondary/supporting text            |
| `--color-text-light`     | `#fff`    | Text on dark backgrounds             |

### Background Colours

| Token                    | Hex       | Usage                                |
|--------------------------|-----------|--------------------------------------|
| `--color-bg`             | `#fff`    | Page background                      |
| `--color-bg-alt`         | `#f5f1eb` | Alternating sections, cards          |
| `--color-bg-dark`        | `#1b4332` | Footer, dark sections                |

### Border Colours

| Token                     | Hex       | Usage                               |
|---------------------------|-----------|--------------------------------------|
| `--color-border`          | `#ddd`    | Form borders, dividers              |
| `--color-border-light`    | `#eee`    | Subtle separators, card edges       |

### Colour Semantics

The palette draws from the **Australian bush landscape** — deep forest greens for professionalism and trust, warm sand tones for approachability. The combination evokes the Blue Mountains environment where Arbor Vision Consulting operates.

---

## Spacing Scale

| Token          | Value   |
|----------------|---------|
| `--space-xs`   | 0.25rem |
| `--space-sm`   | 0.5rem  |
| `--space-md`   | 1rem    |
| `--space-lg`   | 1.5rem  |
| `--space-xl`   | 2rem    |
| `--space-2xl`  | 3rem    |
| `--space-3xl`  | 4rem    |
| `--space-4xl`  | 6rem    |

---

## Layout

| Token                 | Value   | Usage                      |
|-----------------------|---------|----------------------------|
| `--container-max`     | 72rem   | Maximum content width      |
| `--container-narrow`  | 48rem   | Narrow content (text pages)|
| `--container-padding` | 1.5rem  | Horizontal page padding    |
| `--header-height`     | 4rem    | Sticky header height       |

### Grid System

- **2-column grid** (`grid--2`): 1 col on mobile, 2 cols at 640px+
- **3-column grid** (`grid--3`): 1 col on mobile, 2 cols at 640px+, 3 cols at 960px+

---

## Borders & Shadows

| Token           | Value                             |
|-----------------|-----------------------------------|
| `--radius-sm`   | 0.25rem                           |
| `--radius-md`   | 0.5rem                            |
| `--radius-lg`   | 1rem                              |
| `--radius-full` | 9999px (pill/circle)              |
| `--shadow-sm`   | `0 1px 2px rgba(0,0,0,0.06)`     |
| `--shadow-md`   | `0 4px 6px rgba(0,0,0,0.08)`     |
| `--shadow-lg`   | `0 10px 25px rgba(0,0,0,0.1)`    |

---

## Transitions

| Token               | Value      |
|----------------------|------------|
| `--transition-fast`  | 150ms ease |
| `--transition-base`  | 250ms ease |
| `--transition-slow`  | 400ms ease |

All animations respect `prefers-reduced-motion: reduce`.

---

## JavaScript

Minimal vanilla ES modules — no frameworks, no bundlers.

| File           | Purpose                             | Size   |
|----------------|-------------------------------------|--------|
| `main.js`      | Entry point, loads other modules    | Tiny   |
| `nav.js`       | Mobile menu toggle                  | ~1 KB  |
| `carousel.js`  | Homepage services carousel          | ~2 KB  |
| `reveal.js`    | Scroll-reveal animations (IntersectionObserver) | ~1 KB |

All scripts use `type="module"` and load at the end of `<body>`.

---

## CSS Architecture

Three stylesheet files, no preprocessors:

| File             | Responsibility                              |
|------------------|---------------------------------------------|
| `base.css`       | Reset, CSS custom properties, typography, utilities |
| `layout.css`     | Header, footer, navigation, page structure  |
| `components.css` | Buttons, cards, hero, carousel, reviews, etc. |

Design tokens are defined as CSS custom properties in `:root` (in `base.css`) and referenced throughout.

---

## SEO & Structured Data

- **JSON-LD schemas**: LocalBusiness (all pages), Service (service detail pages), FAQPage (DA Support)
- **Meta tags**: Per-page `<title>`, `<meta description>`, canonical URLs, Open Graph, Twitter Card
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **robots.txt**: Static file at `/robots.txt`

---

## Accessibility

- Semantic HTML5 elements (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`)
- Skip-to-content link
- ARIA labels on interactive elements
- Keyboard navigable
- `prefers-reduced-motion` respected
- Sufficient colour contrast ratios
