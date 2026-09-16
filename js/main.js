/* ══════════════════════════════════════════════════════════
   ENTRY POINT
   ══════════════════════════════════════════════════════════ */

import { buildContents } from './contents.js';
import { buildProjects } from './projects.js';
import { initialLang, saveLang, content, ui, captureEnglish, applyStatic } from './i18n.js';

const root = document.documentElement;
const switcher = document.querySelector('.lang');
const buttons = switcher ? [...switcher.querySelectorAll('button[data-lang]')] : [];
const bar = switcher?.querySelector('.lang-bar');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const FADE_MS = 280;

let lang = initialLang();
let busy = false;

function render(next) {
  applyStatic(next);
  const { projects, contents } = content(next);
  buildContents(projects, contents);
  buildProjects(projects, ui(next));
}

// Slide the underline to sit under the active language.
function moveBar() {
  const active = buttons.find(b => b.dataset.lang === lang);
  if (!active || !bar) return;
  bar.style.width = `${active.offsetWidth}px`;
  bar.style.transform = `translateX(${active.offsetLeft}px)`;
}

function markActive() {
  buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  moveBar();
}

// Keep each project on the screen the visitor had picked.
function selectedScreens() {
  return [...document.querySelectorAll('.project')].map(row => {
    const thumbs = [...row.querySelectorAll('.thumb')];
    return Math.max(0, thumbs.findIndex(t => t.getAttribute('aria-current') === 'true'));
  });
}
function restoreScreens(indexes) {
  document.querySelectorAll('.project').forEach((row, i) => {
    if (indexes[i]) row.querySelectorAll('.thumb')[indexes[i]]?.click();
  });
}

function switchTo(next) {
  if (next === lang || busy) return;
  lang = next;
  saveLang(lang);
  markActive();

  const swap = () => {
    const screens = selectedScreens();
    render(lang);
    restoreScreens(screens);
  };

  if (reduceMotion.matches) { swap(); return; }

  // Fade the words out, swap them while invisible, fade back in.
  // The page doesn't reload and the scroll position stays put.
  busy = true;
  root.classList.add('lang-out');
  setTimeout(() => {
    swap();
    requestAnimationFrame(() => {
      root.classList.remove('lang-out');
      busy = false;
    });
  }, FADE_MS);
}

// ── Start ──
captureEnglish();
render(lang);
markActive();

buttons.forEach(b => b.addEventListener('click', () => switchTo(b.dataset.lang)));
window.addEventListener('resize', moveBar);
document.fonts?.ready.then(moveBar);

// Trigger the single load-in on the next frame, once the DOM
// we just built has been laid out.
requestAnimationFrame(() => document.body.classList.add('ready'));
