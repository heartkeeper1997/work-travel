import { initLoader } from './js/loader.js';
import { initLanguage } from './js/language.js';
import { initMusic } from './js/music.js';
import { initCountdown } from './js/countdown.js';
import { initScrollTop } from './js/scrollTop.js';

window.addEventListener('load', () => {
  initLoader();
  initScrollTop();
  initLanguage();
  initMusic();
  initCountdown();
});