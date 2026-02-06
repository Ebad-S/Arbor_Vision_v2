/**
 * carousel.js - Lightweight card carousel with popup detail view
 * - Horizontal scroll carousel for service cards
 * - Click card to open popup overlay with full details
 * - "More Details" links to the service page
 * - "Close" button collapses back to carousel
 * - Respects prefers-reduced-motion
 */
export function initCarousel() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel__track');
  const prevBtn = carousel.querySelector('.carousel__prev');
  const nextBtn = carousel.querySelector('.carousel__next');
  const cards = carousel.querySelectorAll('.carousel__card');
  const overlay = document.getElementById('service-popup');

  if (!track || !overlay) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Carousel scroll navigation ---
  const scrollAmount = 320;

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  // Update arrow visibility based on scroll position
  function updateArrows() {
    if (!prevBtn || !nextBtn) return;
    prevBtn.disabled = track.scrollLeft <= 0;
    nextBtn.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 5;
  }

  track.addEventListener('scroll', updateArrows, { passive: true });
  updateArrows();

  // Recalculate on resize
  window.addEventListener('resize', updateArrows, { passive: true });

  // --- Popup behavior ---
  const popupImage = overlay.querySelector('.popup__image');
  const popupTitle = overlay.querySelector('.popup__title');
  const popupText = overlay.querySelector('.popup__text');
  const popupLink = overlay.querySelector('.popup__link');
  const closeBtn = overlay.querySelector('.popup__close');

  let lastFocusedCard = null;

  function openCard(card) {
    lastFocusedCard = card;
    const title = card.dataset.title || '';
    const excerpt = card.dataset.excerpt || '';
    const image = card.dataset.image || '';
    const url = card.dataset.url || '';

    if (popupImage) {
      popupImage.src = image;
      popupImage.alt = title;
    }
    if (popupTitle) popupTitle.textContent = title;
    if (popupText) popupText.textContent = excerpt;
    if (popupLink) popupLink.href = url;

    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Focus the close button for a11y
    if (closeBtn) closeBtn.focus();
  }

  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      openCard(card);
    });

    // Keyboard support: Enter or Space opens popup
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCard(card);
      }
    });
  });

  function closePopup() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    // Return focus to the card that opened the popup
    if (lastFocusedCard) lastFocusedCard.focus();
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closePopup);
  }

  // Close on overlay background click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePopup();
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closePopup();
    }
  });
}
