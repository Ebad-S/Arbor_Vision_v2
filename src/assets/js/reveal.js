/**
 * reveal.js - IntersectionObserver-based reveal on scroll
 * - Adds '.is-visible' to elements with [data-reveal]
 * - Content is visible by default (CSS handles hidden state only when .js class exists)
 * - Respects prefers-reduced-motion: does nothing if reduce is set
 */
export function initReveal() {
  // Bail if user prefers reduced motion
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches) return;

  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));

  // If motion preference changes mid-session, reveal all
  motionQuery.addEventListener('change', (e) => {
    if (e.matches) {
      elements.forEach((el) => el.classList.add('is-visible'));
      observer.disconnect();
    }
  });
}
