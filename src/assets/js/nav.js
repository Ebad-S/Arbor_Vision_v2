/**
 * nav.js - Mobile navigation toggle with accessibility
 * - Toggles drawer open/closed
 * - Updates aria-expanded
 * - Manages focus trap within nav
 * - Closes on ESC
 * - Locks body scroll when open
 */
export function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  if (!toggle || !nav) return;

  function openNav() {
    nav.setAttribute('data-open', 'true');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';

    // Focus first link in nav
    const firstLink = nav.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeNav() {
    nav.setAttribute('data-open', 'false');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
    toggle.focus();
  }

  function isOpen() {
    return nav.getAttribute('data-open') === 'true';
  }

  // Toggle button click
  toggle.addEventListener('click', () => {
    if (isOpen()) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) {
      closeNav();
    }
  });

  // Close when clicking a nav link (mobile)
  nav.addEventListener('click', (e) => {
    if (e.target.matches('.site-nav__link, .site-nav__cta')) {
      closeNav();
    }
  });

  // Focus trap within nav when open
  nav.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !isOpen()) return;

    const focusable = nav.querySelectorAll('a, button');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  // Close nav if window resizes to desktop
  const mq = window.matchMedia('(min-width: 769px)');
  mq.addEventListener('change', (e) => {
    if (e.matches && isOpen()) {
      closeNav();
    }
  });
}
