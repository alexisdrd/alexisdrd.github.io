/* ══════════════════════════════════════════════════════════
   CONTENT
   ──────────────────────────────────────────────────────────
   This is the file you edit. Nothing else needs to change
   when you add, remove or reorder a project.

   About and Contact copy lives in index.html instead — it's
   plain prose, so it belongs in the markup where search
   engines can read it.
   ══════════════════════════════════════════════════════════ */


/* ── Projects ──────────────────────────────────────────────

   headline / headlineLabel
     The large text over the main image. Use the primary
     language, or a real, verifiable number. Do not invent a
     metric — a reviewer who catches one stops reading.

   screens
     Until you have screenshots, each screen is drawn from a
     `kind`. Available kinds:
       'ui' · 'code' · 'terminal' · 'graph' · 'chart' · 'mobile'

     Once you have a real image, put it in images/ and swap
     `kind` for `src`:
       { src:'images/passages-map.png', caption:'Live map' }

     Use 16:9 images, around 1600×900. Three to five per
     project — fewer is fine, the counter adjusts.
   ────────────────────────────────────────────────────────── */

export const PROJECTS = [
  {
    title: 'Passages',
    role: 'Real-time transit arrivals',
    context: 'Personal project · 2026',
    headline: 'Go',
    headlineLabel: 'primary',
    body: 'Predicts when your bus will actually show up, not when the schedule says it will. Polls the STM feed every fifteen seconds, stores the drift, and corrects the estimate against how late that route usually runs at that hour. About 400 people use it on a weekday.',
    stack: ['Go', 'Postgres', 'TimescaleDB', 'React Native', 'Fly.io'],
    specs: [
      ['Role', 'Solo'],
      ['Started', 'Jan 2026'],
      ['Status', 'Live, in the App Store']
    ],
    links: [
      ['Source', 'https://github.com/'],
      ['Live', '#']
    ],
    screens: [
      { kind: 'mobile',   caption: 'Nearby stops' },
      { kind: 'ui',       caption: 'Route detail' },
      { kind: 'chart',    caption: 'Delay distribution, route 80' },
      { kind: 'graph',    caption: 'Ingest pipeline' },
      { kind: 'terminal', caption: 'Backfill job' }
    ]
  },

  {
    title: 'Lumen',
    role: 'A small language and bytecode VM',
    context: 'Compilers course, extended · 2025',
    headline: 'Rust',
    headlineLabel: 'primary',
    body: 'Started as a tree-walking interpreter for the compilers course, then I got stubborn about it. Now it compiles to bytecode, does constant folding, and runs a mark-and-sweep collector. Roughly 30× faster than where it started, and I can explain every step of why.',
    stack: ['Rust', 'LLVM IR', 'Pest', 'Criterion'],
    specs: [
      ['Role', 'Solo'],
      ['Lines', '~9,000'],
      ['Status', 'Self-hosting parser']
    ],
    links: [
      ['Source', 'https://github.com/'],
      ['Write-up', '#']
    ],
    screens: [
      { kind: 'code',     caption: 'Bytecode emitter' },
      { kind: 'terminal', caption: 'REPL session' },
      { kind: 'graph',    caption: 'AST to bytecode' },
      { kind: 'chart',    caption: 'Benchmarks vs. tree-walk' }
    ]
  },

  {
    title: 'Atlas',
    role: 'Course schedule solver',
    context: 'Team of three · 2025',
    headline: 'Python',
    headlineLabel: 'primary',
    body: 'Registration week is a constraint problem pretending to be a spreadsheet. Atlas takes the courses you need, your hard blocks and your preferences, and returns every valid timetable ranked. Solves a typical semester in under two seconds.',
    stack: ['Python', 'OR-Tools', 'FastAPI', 'Svelte'],
    specs: [
      ['Role', 'Solver + API'],
      ['Team', '3 people'],
      ['Status', 'Used by ~1,200 students']
    ],
    links: [
      ['Source', 'https://github.com/'],
      ['Live', '#']
    ],
    screens: [
      { kind: 'ui',       caption: 'Timetable results' },
      { kind: 'chart',    caption: 'Solve time by course count' },
      { kind: 'code',     caption: 'Constraint model' },
      { kind: 'terminal', caption: 'Scraper run' }
    ]
  },

  {
    title: 'Marge',
    role: 'Collaborative reading and annotation',
    context: 'Hackathon, then kept going · 2024',
    headline: 'TypeScript',
    headlineLabel: 'primary',
    body: 'Built in 36 hours so my study group could stop screenshotting PDFs at each other. Highlights sync live across everyone reading the same paper, threads hang off the margin. The hard part was conflict resolution on overlapping selections — that took the next two months.',
    stack: ['TypeScript', 'Next.js', 'Postgres', 'Yjs', 'WebSockets'],
    specs: [
      ['Role', 'Full stack'],
      ['Team', '2 people'],
      ['Status', 'Open source']
    ],
    links: [
      ['Source', 'https://github.com/'],
      ['Demo', '#']
    ],
    screens: [
      { kind: 'ui',     caption: 'Reader with margin threads' },
      { kind: 'graph',  caption: 'CRDT merge model' },
      { kind: 'code',   caption: 'Selection resolver' },
      { kind: 'mobile', caption: 'Reading view' }
    ]
  }
];


/* ── Front-page contents ───────────────────────────────────

   `jump`   — index into PROJECTS above. Hovering the line
              previews that project's first screen.
   `anchor` — any element id on the page.

   Keep this to six or seven lines. The reference this is
   based on had twelve, but it was indexing a product launch.
   A portfolio with twelve entries reads as padding.
   ────────────────────────────────────────────────────────── */

export const CONTENTS = [
  { label: 'Passages', meta: 'Real-time transit · Go',    jump: 0 },
  { label: 'Lumen',    meta: 'Language and VM · Rust',    jump: 1 },
  { label: 'Atlas',    meta: 'Schedule solver · Python',  jump: 2 },
  { label: 'Marge',    meta: 'Collaborative reader · TS', jump: 3 },
  { label: 'About',    meta: 'Who I am, what I use',      anchor: '#about' },
  { label: 'Contact',  meta: 'Open to summer 2027',       anchor: '#contact' }
];
