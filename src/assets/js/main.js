/**
 * main.js - ES module entry point
 * Imports tiny modules. No heavy dependencies.
 */
import { initNav } from './nav.js';
import { initReveal } from './reveal.js';
import { initCarousel } from './carousel.js';

// Initialize all modules
initNav();
initReveal();
initCarousel();
