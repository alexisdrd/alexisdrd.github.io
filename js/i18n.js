/* ══════════════════════════════════════════════════════════
   LANGUAGE
   ──────────────────────────────────────────────────────────
   English copy stays where it always was: in index.html and
   js/content.js. It's read from the page on load, so you
   never have to write it twice.

   French copy for the page itself lives in FR below; French
   project copy lives in js/content.fr.js.

   Any element with data-i18n="key" gets its text swapped.
   data-i18n-html="key" swaps inner HTML (only our own strings).
   ══════════════════════════════════════════════════════════ */

import { PROJECTS, CONTENTS } from './content.js';
import { PROJECTS_FR, CONTENTS_FR } from './content.fr.js';

const STORAGE_KEY = 'lang';

// Labels built by JS, not present in the HTML.
const UI = {
  en: { when: 'When', screensFrom: 'Screens from', 'lang.label': 'Language' },
  fr: { when: 'Quand', screensFrom: 'Écrans de', 'lang.label': 'Langue' }
};

const FR = {
  'meta.title': 'Alexis Durand — Génie logiciel',
  'meta.description': 'Étudiant en génie logiciel à Montréal. Projets choisis en Go, Rust, Python et TypeScript.',

  'skip': 'Aller aux projets',
  'nav.work': 'Projets',
  'nav.about': 'À propos',
  'nav.contact': 'Contact',

  'hero.title': 'Étudiant en génie logiciel. Quatre projets bâtis pour comprendre comment ça marche.',
  'hero.sub': 'Montréal. À la recherche d’un stage pour l’été 2027 — backend, systèmes, ou tout ce qui cache un vrai problème difficile.',
  'foot.scroll': '<span></span>Défilez, ou choisissez une ligne',
  'foot.updated': 'Mis à jour en septembre 2026',

  'work.title': 'Projets',
  'work.sub': 'Chaque projet a ses propres écrans. Choisissez une vignette à gauche pour l’afficher.',

  'about.title': 'À propos',
  'about.p1': 'Je suis en troisième année de génie logiciel à Montréal, quelque part entre le cours de compilation qui a ruiné mon sommeil et le cours de bases de données qui l’a réparé.',
  'about.p2': 'La plupart de mes projets partent d’un petit irritant — un horaire qui prend une heure à faire à la main, un autobus que je rate sans arrêt — et deviennent une excuse pour apprendre quelque chose comme il faut. Je tiens aux parties que personne ne voit : la requête devenue 40× plus rapide, le message d’erreur qui dit enfin ce qui cloche.',
  'about.p3': 'À côté de ça, je suis auxiliaire d’enseignement pour le cours de structures de données de première année, ce qui m’a appris plus sur l’art d’expliquer que n’importe quel cours.',
  'skills.comfortable': 'À l’aise avec',
  'skills.learning': 'En apprentissage',
  'skills.learningList': '<li>Rust</li><li>Systèmes distribués</li><li>Kubernetes</li>',
  'skills.tools': 'Outils',
  'skills.toolsList': '<li>Postgres · Redis</li><li>Docker</li><li>React · Next.js</li><li>Git · pipelines CI</li><li>Linux</li>',

  'contact.profile': 'Profil',
  'contact.resume': 'CV',
  'contact.download': 'Télécharger le PDF',
  'contact.available': '<span>Disponible</span>Stages, été 2027',
  'contact.back': 'Retour au sommaire'
};

// Filled from the page on first load.
const EN = {};

export const LANGS = ['en', 'fr'];

export function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch { /* storage blocked — fall through */ }
  const nav = (navigator.language || 'en').toLowerCase();
  return nav.startsWith('fr') ? 'fr' : 'en';
}

export function saveLang(lang) {
  try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ }
}

export function content(lang) {
  return lang === 'fr'
    ? { projects: PROJECTS_FR, contents: CONTENTS_FR }
    : { projects: PROJECTS, contents: CONTENTS };
}

export function ui(lang) {
  return UI[lang] || UI.en;
}

const descMeta = () => document.querySelector('meta[name="description"]');

// Remember the English copy exactly as written in index.html.
export function captureEnglish() {
  EN['meta.title'] = document.title;
  EN['meta.description'] = descMeta()?.content || '';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    EN[el.dataset.i18n] = el.textContent;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    EN[el.dataset.i18nHtml] = el.innerHTML;
  });
}

export function applyStatic(lang) {
  const dict = lang === 'fr' ? FR : EN;
  const pick = key => dict[key] ?? EN[key];

  document.documentElement.lang = lang;
  document.title = pick('meta.title');
  descMeta()?.setAttribute('content', pick('meta.description'));

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = pick(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = pick(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', ui(lang)[el.dataset.i18nAria]);
  });
}
