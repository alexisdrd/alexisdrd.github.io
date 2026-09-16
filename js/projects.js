/* ══════════════════════════════════════════════════════════
   PROJECT ROWS
   One row per project: number, thumbnail strip, main frame,
   text column. Clicking a thumbnail swaps the main frame.
   ══════════════════════════════════════════════════════════ */

import { paint } from './sketch.js';

const pad = n => String(n).padStart(2, '0');

// `labels` carries the few words the row builds itself
// ("When", "Screens from") in the current language.
export function buildProjects(PROJECTS, labels) {
  const wrap = document.getElementById('projects');
  if (!wrap) return;

  wrap.replaceChildren(...PROJECTS.map((project, pi) => buildRow(project, pi, labels)));
}

function buildRow(p, pi, labels) {
  const section = document.createElement('section');
  section.className = 'project';
  section.id = `project-${pi}`;

  section.innerHTML = `
    <div class="project-grid">
      <div class="pnum">${pad(pi + 1)}</div>

      <div class="strip" role="tablist" aria-label="${labels.screensFrom} ${p.title}"></div>

      <div class="stage">
        <div class="frame">
          <span class="corner tl"></span><span class="corner tr"></span>
          <span class="corner bl"></span><span class="corner br"></span>
          <div class="plate">
            <div class="figure"><b>${p.headline}</b><span>${p.headlineLabel}</span></div>
            <div class="slug"><span class="br">${p.title}</span><em>${p.role}</em></div>
          </div>
          <div class="stage-rule"></div>
        </div>
        <div class="caption">
          <span class="cap-text"></span>
          <span class="cap-count"></span>
        </div>
      </div>

      <div class="pinfo">
        <h3>${p.title}</h3>
        <div class="role">${p.role}</div>
        <div class="body">${p.body}</div>
        <div class="stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
        <dl>
          ${p.specs.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}
          <div><dt>${labels.when}</dt><dd>${p.context}</dd></div>
        </dl>
        <div class="plinks">
          ${p.links.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
        </div>
      </div>
    </div>`;

  const strip  = section.querySelector('.strip');
  const frame  = section.querySelector('.frame');
  const capTxt = section.querySelector('.cap-text');
  const capNum = section.querySelector('.cap-count');

  // All screens are stacked in the frame and cross-faded, rather
  // than swapping one element's source. Avoids a flash of empty
  // frame while a large screenshot decodes.
  const layers = [];
  const thumbs = [];

  p.screens.forEach((screen, si) => {
    const seed = pi * 97 + si * 31 + 11;

    const layer = document.createElement('div');
    layer.className = 'still';
    paint(layer, screen, seed);
    frame.prepend(layer);
    layers.push(layer);

    const thumb = document.createElement('button');
    thumb.className = 'thumb still';
    thumb.type = 'button';
    thumb.setAttribute('role', 'tab');
    thumb.setAttribute('aria-label', screen.caption);
    paint(thumb, screen, seed);
    thumb.addEventListener('click', () => select(si));
    strip.appendChild(thumb);
    thumbs.push(thumb);
  });

  function select(si) {
    layers.forEach((l, i) => l.classList.toggle('live', i === si));
    thumbs.forEach((t, i) => t.setAttribute('aria-current', String(i === si)));
    capTxt.textContent = p.screens[si].caption;
    capNum.textContent = `${pad(si + 1)} / ${pad(p.screens.length)}`;
  }

  // Arrow keys move through the strip, like a real tab list.
  strip.addEventListener('keydown', e => {
    const forward = e.key === 'ArrowDown' || e.key === 'ArrowRight';
    const back    = e.key === 'ArrowUp'   || e.key === 'ArrowLeft';
    if (!forward && !back) return;

    e.preventDefault();
    const current = thumbs.findIndex(t => t.getAttribute('aria-current') === 'true');
    const next = (current + (forward ? 1 : -1) + thumbs.length) % thumbs.length;
    thumbs[next].focus();
    select(next);
  });

  select(0);
  return section;
}
