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
    title: 'AstroWrap',
    role: 'Analogues terrestres de la Lune et de Mars',
    context: 'NASA Space Apps Challenge · 2026',
    headline: '613 252',
    headlineLabel: 'cellules terrestres comparées',
    body: 'Peignez n’importe quelle zone sur un globe 3D de la Lune ou de Mars, et AstroWrap trouve les endroits sur Terre qui lui ressemblent le plus : des terrains d’essai pour les rovers, les atterrisseurs et les équipages. Un pipeline Python transforme les données planétaires de la NASA et de l’ESA en grille hexagonale H3, puis un serveur FastAPI et DuckDB compare chaque cellule de la Terre à la zone de référence, critère par critère, et explique chaque résultat avec des valeurs réelles. Réalisé en équipe de quatre pour le NASA Space Apps Challenge.',
    stack: ['Python', 'DuckDB', 'FastAPI', 'H3', 'JavaScript', 'MapLibre', 'globe.gl'],
    specs: [
      ['Rôle', 'Pipeline + application'],
      ['Équipe', '4 personnes'],
      ['Statut', 'En ligne : astrowrap.earth']
    ],
    links: [
      ['Site', 'https://astrowrap.earth'],
      ['Code', 'https://github.com/roseliz/NasaChallenges'],
      ['Vidéo', 'https://youtu.be/xlFHnAbUm48']
    ],
    screens: [
      { src: 'images/astrowrap-hero.jpg', title: 'AstroWrap', caption: 'Les endroits sur Terre qui ressemblent à votre zone sur Mars' },
      { src: 'images/astrowrap-scan.jpg', title: 'Le balayage', caption: 'Un satellite par critère balaie la Terre' },
      { src: 'images/astrowrap-twin.jpg', title: 'Le jumeau terrestre', caption: 'Votre zone sur Mars et son meilleur équivalent sur Terre' },
      { src: 'images/astrowrap-site.jpg', title: 'Fiche du site', caption: 'Pourquoi ce site : les valeurs réelles des deux mondes' },
      { src: 'images/astrowrap-terrain.jpg', title: 'Le terrain en 3D', caption: 'Le terrain de Mars et de la Terre côte à côte' },
      { src: 'images/astrowrap-diagram-pipeline.jpg', title: 'Le fonctionnement', caption: 'Données ouvertes, pipeline Python, grille H3, serveur de score, application web' },
      { src: 'images/astrowrap-diagram-data.jpg', title: 'Les données', caption: 'Les jeux de données de chaque critère, sur la Terre, Mars et la Lune' },
      { src: 'images/astrowrap-diagram-scoring.jpg', title: 'Le score', caption: 'Comment une cellule de la Terre est comparée à la zone' },
      { src: 'images/astrowrap-diagram-funnel.jpg', title: 'L’entonnoir', caption: 'De 613 252 cellules de la Terre à dix sites' }
    ]
  },

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
  }
];

export const CONTENTS_FR = [
  { label: 'AstroWrap', meta: 'Analogues terrestres · Python', jump: 0 },
  { label: 'Passages', meta: 'Transport en temps réel · Go', jump: 1 },
  { label: 'Lumen',    meta: 'Langage et VM · Rust',         jump: 2 },
  { label: 'Atlas',    meta: 'Générateur d’horaires · Python', jump: 3 },
  { label: 'À propos', meta: 'Qui je suis, mes outils',      anchor: '#about' },
  { label: 'Contact',  meta: 'Disponible pour l’été 2027',   anchor: '#contact' }
];
