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
     Each screen can have a short `title`, shown over the
     picture on hover (otherwise its caption is used).
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
    title: 'AstroWrap',
    role: 'Earth analogs for the Moon and Mars',
    context: 'NASA Space Apps Challenge · 2026',
    headline: '613,252',
    headlineLabel: 'Earth cells compared',
    body: 'Paint any area on a 3D globe of the Moon or Mars, and AstroWrap finds the places on Earth that look most like it: test grounds for rovers, landers and crews. A Python pipeline turns NASA and ESA planetary data into an H3 hexagon grid, and a FastAPI and DuckDB server compares every Earth cell to the reference area, criterion by criterion, then explains each match with real values. Built in a team of four for the NASA Space Apps Challenge.',
    stack: ['Python', 'DuckDB', 'FastAPI', 'H3', 'JavaScript', 'MapLibre', 'globe.gl'],
    specs: [
      ['Role', 'Pipeline + app'],
      ['Team', '4 people'],
      ['Status', 'Live at astrowrap.earth']
    ],
    links: [
      ['Live', 'https://astrowrap.earth'],
      ['Source', 'https://github.com/roseliz/NasaChallenges'],
      ['Video', 'https://youtu.be/xlFHnAbUm48']
    ],
    screens: [
      { src: 'images/astrowrap-hero.jpg', title: 'AstroWrap', caption: 'Places on Earth that look like your area on Mars' },
      { src: 'images/astrowrap-scan.jpg', title: 'The scan', caption: 'One satellite per criterion scans the Earth' },
      { src: 'images/astrowrap-twin.jpg', title: 'The Earth twin', caption: 'Your area on Mars and its closest match on Earth' },
      { src: 'images/astrowrap-site.jpg', title: 'Site card', caption: 'Why this site: real values on both worlds' },
      { src: 'images/astrowrap-terrain.jpg', title: 'Terrain in 3D', caption: 'Mars and Earth terrain side by side' },
      { src: 'images/astrowrap-diagram-pipeline.jpg', title: 'How it works', caption: 'Open data, Python pipeline, H3 grid, scoring server, web app' },
      { src: 'images/astrowrap-diagram-data.jpg', title: 'The data', caption: 'The datasets behind each criterion, on Earth, Mars and the Moon' },
      { src: 'images/astrowrap-diagram-scoring.jpg', title: 'The scoring', caption: 'How one Earth cell is compared with the area' },
      { src: 'images/astrowrap-diagram-funnel.jpg', title: 'The funnel', caption: 'From 613,252 Earth cells to ten sites' }
    ]
  },

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
  { label: 'AstroWrap', meta: 'Earth analogs for Mars · Python', jump: 0 },
  { label: 'Passages', meta: 'Real-time transit · Go',    jump: 1 },
  { label: 'Lumen',    meta: 'Language and VM · Rust',    jump: 2 },
  { label: 'Atlas',    meta: 'Schedule solver · Python',  jump: 3 },
  { label: 'About',    meta: 'Who I am, what I use',      anchor: '#about' },
  { label: 'Contact',  meta: 'Open to summer 2027',       anchor: '#contact' }
];
