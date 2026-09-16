/* ══════════════════════════════════════════════════════════
   PLACEHOLDER ARTWORK
   ──────────────────────────────────────────────────────────
   Draws a low-contrast wireframe so the layout reads correctly
   before you have screenshots. Deliberately obviously fake —
   a pretty gradient would be worse, because you'd forget to
   replace it.

   Delete this file once every screen has a real `src`, and
   remove the import from projects.js and contents.js.
   ══════════════════════════════════════════════════════════ */

const NS = 'http://www.w3.org/2000/svg';

/* Tiny deterministic PRNG, so a given screen always draws the
   same way instead of reshuffling on every render. */
function seeded(n) {
  return () => (n = (n * 1664525 + 1013904223) % 4294967296) / 4294967296;
}

export function sketch(kind, seed = 7) {
  const r = seeded(seed);

  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 160 90');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');

  const add = (tag, attrs) => {
    const el = document.createElementNS(NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    svg.appendChild(el);
    return el;
  };
  const box  = (x, y, w, h, o) =>
    add('rect', { x, y, width: w, height: h, fill: `rgba(242,239,233,${o})` });
  const line = (x1, y1, x2, y2, o) =>
    add('line', { x1, y1, x2, y2, stroke: `rgba(242,239,233,${o})`, 'stroke-width': .5 });

  switch (kind) {

    case 'ui': {                       // sidebar, header, card grid
      box(0, 0, 34, 90, .045);
      for (let i = 0; i < 6; i++) box(5, 12 + i * 9, 16 + r() * 8, 2.2, .16);
      box(34, 0, 126, 11, .04);
      box(40, 4.5, 26, 2.4, .2);
      box(140, 4, 14, 4, .12);
      for (let i = 0; i < 6; i++) {
        const x = 40 + (i % 3) * 40;
        const y = 18 + Math.floor(i / 3) * 32;
        box(x, y, 34, 26, .05);
        box(x + 3, y + 3, 14 + r() * 12, 2, .17);
        for (let j = 0; j < 3; j++) box(x + 3, y + 9 + j * 4, 20 + r() * 10, 1.3, .09);
      }
      break;
    }

    case 'code': {                     // gutter and indented lines
      line(12, 0, 12, 90, .12);
      for (let i = 0; i < 17; i++) {
        const y = 4 + i * 5;
        const indent = [0, 0, 6, 6, 12, 6, 0][i % 7];
        box(4, y, 3, 1.6, .1);
        box(16 + indent, y, 10 + r() * 14, 1.8, .2);
        if (r() > .35) box(16 + indent + 12 + r() * 14, y, 14 + r() * 30, 1.8, .09);
      }
      break;
    }

    case 'terminal': {                 // title bar, prompts and output
      box(0, 0, 160, 7, .05);
      box(4, 2.4, 3, 2.2, .14);
      box(9, 2.4, 3, 2.2, .14);
      box(14, 2.4, 3, 2.2, .14);
      for (let i = 0; i < 14; i++) {
        const y = 13 + i * 5.4;
        if (i % 4 === 0) {             // prompt line
          box(6, y, 2.5, 1.8, .28);
          box(11, y, 26 + r() * 30, 1.8, .24);
        } else {                       // output
          box(11, y, 30 + r() * 80, 1.7, .1);
        }
      }
      break;
    }

    case 'graph': {                    // nodes and edges
      const nodes = [[26, 45], [62, 24], [62, 66], [100, 45], [134, 28], [134, 62]];
      const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5]];
      edges.forEach(([a, b]) =>
        line(nodes[a][0], nodes[a][1], nodes[b][0], nodes[b][1], .16));
      nodes.forEach(([x, y], i) => {
        add('rect', {
          x: x - 11, y: y - 6, width: 22, height: 12, fill: '#0C0D0F',
          stroke: `rgba(242,239,233,${i === 3 ? .4 : .22})`, 'stroke-width': .6
        });
        box(x - 7, y - 1.2, 9 + r() * 5, 2.2, .22);
      });
      break;
    }

    case 'chart': {                    // axes, gridlines, bars
      line(16, 76, 150, 76, .22);
      line(16, 10, 16, 76, .22);
      for (let i = 0; i < 4; i++) line(16, 20 + i * 14, 150, 20 + i * 14, .06);
      for (let i = 0; i < 14; i++) {
        const h = 8 + r() * 54;
        box(21 + i * 9.4, 76 - h, 6, h, i === 6 ? .34 : .15);
      }
      break;
    }

    default: {                         // 'mobile' — phone frame with rows
      add('rect', {
        x: 59, y: 5, width: 42, height: 80, rx: 5,
        fill: 'rgba(242,239,233,.045)',
        stroke: 'rgba(242,239,233,.2)', 'stroke-width': .6
      });
      box(73, 8.5, 14, 1.6, .2);       // status bar
      box(63, 15, 20, 2.4, .24);       // screen title
      for (let i = 0; i < 6; i++) {
        box(63, 22 + i * 10, 34, 7, .055);
        box(65, 24.2 + i * 10, 14 + r() * 10, 1.8, .2);
        box(65, 27.6 + i * 10, 20 + r() * 8, 1.4, .1);
      }
    }
  }

  return svg;
}

/* Fills an element with either a real screenshot or a sketch. */
export function paint(el, screen, seed) {
  el.replaceChildren();
  el.style.backgroundImage = '';

  if (screen.src) {
    el.style.backgroundImage = `url("${screen.src}")`;
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
  } else {
    el.appendChild(sketch(screen.kind, seed));
  }
}
