/* ══════════════════════════════════════════════════════════
   FRONT-PAGE CONTENTS
   Builds the index list and wires the hover preview behind it.
   ══════════════════════════════════════════════════════════ */

import { paint } from './sketch.js';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

export function buildContents(PROJECTS, CONTENTS) {
  const list = document.getElementById('contents');
  const veil = document.getElementById('veil');
  if (!list || !veil) return;

  list.replaceChildren();

  CONTENTS.forEach((item, i) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'entry';
    a.href = item.anchor || `#project-${item.jump}`;

    const title = document.createElement('span');
    title.className = 'title';
    title.textContent = item.label;

    const meta = document.createElement('span');
    meta.className = 'meta';
    meta.textContent = item.meta;

    const num = document.createElement('span');
    num.className = 'num';
    num.textContent = ROMAN[i] ?? String(i + 1);

    a.append(title, meta, num);

    // Project lines fade their first screen up behind the type.
    // Non-project lines clear it, so the background always
    // matches whatever you're pointing at.
    if (typeof item.jump === 'number' && PROJECTS[item.jump]) {
      const screen = PROJECTS[item.jump].screens[0];
      const show = () => {
        paint(veil, screen, item.jump * 13 + 3);
        veil.classList.add('on');
      };
      a.addEventListener('mouseenter', show);
      a.addEventListener('focus', show);
    } else {
      const hide = () => veil.classList.remove('on');
      a.addEventListener('mouseenter', hide);
      a.addEventListener('focus', hide);
    }

    li.appendChild(a);
    list.appendChild(li);
  });

  if (!list.dataset.wired) {
    list.dataset.wired = '1';
    list.addEventListener('mouseleave', () => veil.classList.remove('on'));
  }
}
