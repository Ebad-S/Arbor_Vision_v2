# Asset Guide for Arbor Vision Consultig (v2)

Guidelines for preparing and adding images, icons, and video to the site.

---

## File Locations

| Asset Type       | Directory               | Example                        |
| ---------------- | ----------------------- | ------------------------------ |
| Page images      | `src/assets/images/`    | `hero.webp`, `tree-removal.webp` |
| Icons & badges   | `src/assets/icons/`     | `cert-aqf5.svg`, `isa-badge.png` |
| Video            | `src/assets/video/`     | `hero.mp4`                     |
| Favicons         | `src/static/`           | `favicon.ico`, `icon.svg`      |
| Static files     | `src/static/`           | `robots.txt`                   |

## Naming Conventions

- Use **lowercase** and **hyphens** for file names: `tree-removal.webp` not `Tree Removal.webp`
- Use descriptive names that match the content: `hero-arborist-work.webp`
- Avoid spaces, underscores, or special characters
- Keep names short but meaningful

## Recommended Formats

### Images

| Format  | Use Case                          | Notes                              |
| ------- | --------------------------------- | ---------------------------------- |
| **WebP** | Primary format for all images    | Best size/quality ratio            |
| **AVIF** | Next-gen alternative to WebP     | Even smaller, but less compatible  |
| **JPEG** | Fallback for older browsers      | Use for hero poster images         |
| **PNG**  | Logos, icons with transparency   | Avoid for photos (too large)       |
| **SVG**  | Icons, badges, simple graphics   | Infinitely scalable, tiny files    |

### Video

| Format  | Use Case                          | Notes                              |
| ------- | --------------------------------- | ---------------------------------- |
| **MP4** | Hero background video             | H.264 codec, 720p max, no audio   |
| **WebM** | Modern alternative to MP4        | VP9 codec, smaller file size       |

## Size Guidelines

| Asset              | Recommended Dimensions | Max File Size |
| ------------------ | --------------------- | ------------- |
| Hero image         | 1600 × 900 px        | 200 KB        |
| Hero video         | 1280 × 720 px        | 3 MB          |
| Service card image | 800 × 500 px         | 80 KB         |
| Certificate badge  | 160 × 160 px         | 20 KB         |
| OG share image     | 1200 × 630 px        | 100 KB        |
| Favicon (ICO)      | 32 × 32 px           | 5 KB          |
| Apple touch icon   | 180 × 180 px         | 15 KB         |

## Image Optimisation Tips

1. **Always compress** images before adding to the project
   - Use [Squoosh](https://squoosh.app/) (free, browser-based)
   - Or [TinyPNG](https://tinypng.com/) for PNG/JPEG
2. **Use WebP** as the primary format  - it's ~30% smaller than JPEG
3. **Set width and height** attributes in HTML to prevent layout shift
4. **Use `loading="lazy"`** for below-the-fold images
5. **Use `decoding="async"`** for all images
6. **Provide alt text**  - describe what's in the image for screen readers

## Adding Images to Templates

In Nunjucks templates, reference images like this:

```html
<img
  src="/assets/images/hero.webp"
  alt="Mike Daws performing tree pruning on a large eucalyptus"
  width="1600"
  height="900"
  loading="lazy"
  decoding="async"
>
```

For responsive images with srcset:

```html
<img
  src="/assets/images/service-card.webp"
  srcset="/assets/images/service-card-400.webp 400w,
          /assets/images/service-card-800.webp 800w"
  sizes="(max-width: 640px) 100vw, 33vw"
  alt="Professional tree removal service"
  width="800"
  height="500"
  loading="lazy"
  decoding="async"
>
```
