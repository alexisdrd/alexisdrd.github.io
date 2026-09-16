/* ══════════════════════════════════════════════════════════
   CONTENU — FRANÇAIS
   ──────────────────────────────────────────────────────────
   Mirror of js/content.js. Keep the same order, the same
   `kind` / `src` for each screen, and the same links — only
   the words change. When you add a project in content.js,
   add its French twin here.
   ══════════════════════════════════════════════════════════ */

export const PROJECTS_FR = [
  {
    title: 'Passages',
    role: 'Arrivées de transport en commun en temps réel',
    context: 'Projet personnel · 2026',
    headline: 'Go',
    headlineLabel: 'principal',
    body: 'Prédit quand votre autobus va vraiment passer, pas quand l’horaire le promet. Interroge le flux de la STM toutes les quinze secondes, enregistre l’écart et corrige l’estimation selon le retard habituel de cette ligne à cette heure. Environ 400 personnes l’utilisent en semaine.',
    stack: ['Go', 'Postgres', 'TimescaleDB', 'React Native', 'Fly.io'],
    specs: [
      ['Rôle', 'Solo'],
      ['Début', 'Janv. 2026'],
      ['Statut', 'En ligne, dans l’App Store']
    ],
    links: [
      ['Code', 'https://github.com/'],
      ['Site', '#']
    ],
    screens: [
      { kind: 'mobile',   caption: 'Arrêts à proximité' },
      { kind: 'ui',       caption: 'Détail d’une ligne' },
      { kind: 'chart',    caption: 'Distribution des retards, ligne 80' },
      { kind: 'graph',    caption: 'Pipeline d’ingestion' },
      { kind: 'terminal', caption: 'Tâche de rattrapage' }
    ]
  },

  {
    title: 'Lumen',
    role: 'Un petit langage et sa machine virtuelle',
    context: 'Cours de compilation, prolongé · 2025',
    headline: 'Rust',
    headlineLabel: 'principal',
    body: 'Au départ, un interpréteur par parcours d’arbre pour le cours de compilation — puis je me suis entêté. Il compile maintenant en bytecode, fait du pliage de constantes et roule un ramasse-miettes mark-and-sweep. Environ 30× plus rapide qu’au début, et je peux expliquer chaque étape.',
    stack: ['Rust', 'LLVM IR', 'Pest', 'Criterion'],
    specs: [
      ['Rôle', 'Solo'],
      ['Lignes', '~9 000'],
      ['Statut', 'Analyseur auto-hébergé']
    ],
    links: [
      ['Code', 'https://github.com/'],
      ['Article', '#']
    ],
    screens: [
      { kind: 'code',     caption: 'Émetteur de bytecode' },
      { kind: 'terminal', caption: 'Session REPL' },
      { kind: 'graph',    caption: 'De l’AST au bytecode' },
      { kind: 'chart',    caption: 'Bancs d’essai vs parcours d’arbre' }
    ]
  },

  {
    title: 'Atlas',
    role: 'Générateur d’horaires de cours',
    context: 'Équipe de trois · 2025',
    headline: 'Python',
    headlineLabel: 'principal',
    body: 'La semaine d’inscription, c’est un problème de contraintes déguisé en tableur. Atlas prend les cours qu’il vous faut, vos plages bloquées et vos préférences, et retourne tous les horaires valides, classés. Une session typique est résolue en moins de deux secondes.',
    stack: ['Python', 'OR-Tools', 'FastAPI', 'Svelte'],
    specs: [
      ['Rôle', 'Solveur + API'],
      ['Équipe', '3 personnes'],
      ['Statut', 'Utilisé par ~1 200 étudiants']
    ],
    links: [
      ['Code', 'https://github.com/'],
      ['Site', '#']
    ],
    screens: [
      { kind: 'ui',       caption: 'Horaires proposés' },
      { kind: 'chart',    caption: 'Temps de résolution selon le nombre de cours' },
      { kind: 'code',     caption: 'Modèle de contraintes' },
      { kind: 'terminal', caption: 'Exécution du moissonneur' }
    ]
  },

  {
    title: 'Marge',
    role: 'Lecture et annotation collaboratives',
    context: 'Hackathon, puis poursuivi · 2024',
    headline: 'TypeScript',
    headlineLabel: 'principal',
    body: 'Bâti en 36 heures pour que mon groupe d’étude arrête de s’envoyer des captures d’écran de PDF. Les surlignages se synchronisent en direct entre tous ceux qui lisent le même article, et les discussions s’accrochent à la marge. Le plus dur : résoudre les conflits entre sélections qui se chevauchent — ça a pris les deux mois suivants.',
    stack: ['TypeScript', 'Next.js', 'Postgres', 'Yjs', 'WebSockets'],
    specs: [
      ['Rôle', 'Full stack'],
      ['Équipe', '2 personnes'],
      ['Statut', 'Code source ouvert']
    ],
    links: [
      ['Code', 'https://github.com/'],
      ['Démo', '#']
    ],
    screens: [
      { kind: 'ui',     caption: 'Lecteur et discussions en marge' },
      { kind: 'graph',  caption: 'Modèle de fusion CRDT' },
      { kind: 'code',   caption: 'Résolution des sélections' },
      { kind: 'mobile', caption: 'Vue lecture' }
    ]
  }
];

export const CONTENTS_FR = [
  { label: 'Passages', meta: 'Transport en temps réel · Go', jump: 0 },
  { label: 'Lumen',    meta: 'Langage et VM · Rust',         jump: 1 },
  { label: 'Atlas',    meta: 'Générateur d’horaires · Python', jump: 2 },
  { label: 'Marge',    meta: 'Lecteur collaboratif · TS',    jump: 3 },
  { label: 'À propos', meta: 'Qui je suis, mes outils',      anchor: '#about' },
  { label: 'Contact',  meta: 'Disponible pour l’été 2027',   anchor: '#contact' }
];
