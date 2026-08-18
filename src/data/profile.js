// src/data/profile.js
//
// Toutes les informations "personnelles" du portfolio sont centralisées
// ici, dans un seul objet JavaScript. C'est une bonne pratique : si tu
// veux changer ton numéro de téléphone ou ajouter un projet, tu n'as
// besoin de modifier QUE ce fichier, jamais les composants eux-mêmes.

export const profile = {
  fullName: "Stéphane Ndienyim",
  tagline: "Étudiant en développement web",
  subtitle: "À la recherche d'un stage — février à avril",
  location: "Namur, Belgique",
  email: "voffondienyim@gmail.com",
  phone: "+32 465 38 49 50",
  linkedin: "https://www.linkedin.com/in/voffo-ndienyim-249a6a385/",
  github: "https://github.com/VOFFOStephane",

  // Chemin vers ta photo de profil. Dépose ton fichier dans le dossier
  // public/ à la racine du projet et nomme-le exactement "photo.jpg"
  // (ou change ce chemin si tu préfères un autre nom/format, ex: .png).
  photo: "./public/photo.jpg",

  // Phrase courte pour le Hero (accueil) — volontairement différente
  // du texte "bio" ci-dessous pour éviter de répéter le même texte
  // deux fois sur la page.
  heroTagline:
    "Je n'apprends pas juste à coder : j'apprends à comprendre le problème avant d'écrire la " +
    "moindre ligne. Aujourd'hui, je cherche un stage pour mettre ça en pratique dans une vraie équipe.",

  // Texte plus complet pour la section "À propos"
  bio:
    "Après deux ans à explorer le front-end, le back-end et le design d'interface, je cherche " +
    "maintenant un terrain concret pour progresser plus vite : un stage où on me confie de vrais " +
    "problèmes à résoudre. Je suis curieux, motivé à apprendre de nouvelles technologies même " +
    "si elles ne sont pas au programme, et je préfère comprendre en profondeur plutôt qu'empiler " +
    "les tutoriels.",

  formation: {
    school: "EAFC Namur Cadets",
    program: "BES Webdev — 2ème année",
    graduationYear: "2027",
  },

  stage: {
    period: "Février - Avril",
    domain: "Ouvert (front-end, back-end ou full-stack)",
    note: "Ouvert à apprendre de nouvelles technologies, même hors programme scolaire.",
  },
};

// Compétences groupées par catégorie pour l'affichage
export const skills = [
  {
    category: "Front-end",
    items: ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Back-end",
    items: ["Symfony", "PHP", "SQL"],
  },
  {
    category: "CMS & Design",
    items: ["WordPress", "Figma"],
  },
  {
    category: "Outils",
    items: ["Git", "GitHub"],
  },
];

// En attendant les "vrais" projets, on valorise les exercices et
// maquettes déjà réalisés en cours. Chaque entrée a un statut pour
// être honnête sur ce que c'est, et suit une structure "étude de cas"
// (Contexte → Problème → Solution → Résultat) pour les rendre plus
// concrets et convaincants, même s'il s'agit d'exercices scolaires.
export const projects = [
  {
    title: "Application Symfony — Authentification & gestion utilisateurs",
    status: "Exercice pédagogique",
    context:
      "Dans le cadre de mes cours de back-end à l'EAFC Namur Cadets, j'ai dû construire un " +
      "système d'authentification complet avec le framework Symfony.",
    problem:
      "Un site sans gestion des utilisateurs ne peut pas différencier un visiteur, un client " +
      "et un administrateur, ni protéger les pages sensibles.",
    solution:
      "J'ai mis en place l'inscription et la connexion, des formulaires avec validation côté " +
      "serveur, l'upload de fichiers, ainsi que deux espaces distincts (admin et client) gérés " +
      "par sessions.",
    results:
      "Un système fonctionnel qui sépare correctement les droits d'accès, avec des formulaires " +
      "qui rejettent les données invalides avant qu'elles n'atteignent la base de données.",
    tags: ["Symfony", "PHP", "Sécurité"],
  },
  {
    title: "Interface interactive avec Vue.js",
    status: "Exercice pédagogique",
    context:
      "Travaux pratiques de JavaScript orientés composants, pour apprendre à gérer des données " +
      "dynamiques sans recharger la page.",
    problem:
      "Une interface statique n'offre aucun retour immédiat à l'utilisateur, ce qui rend " +
      "l'expérience frustrante et l'application peu agréable à utiliser.",
    solution:
      "J'ai construit plusieurs composants Vue.js réactifs : mise à jour de listes en temps " +
      "réel, gestion d'un état local, et échange de données entre composants.",
    results:
      "Une meilleure compréhension de la réactivité en JavaScript moderne — une base que je " +
      "réutilise aujourd'hui pour apprendre React sur ce portfolio.",
    tags: ["Vue.js", "JavaScript"],
  },
  {
    title: "Bases de données & requêtes SQL",
    status: "Exercice pédagogique",
    context: "Exercices de modélisation et d'interrogation de bases de données relationnelles.",
    problem:
      "Sans structure de données bien pensée, une application devient lente et difficile à " +
      "faire évoluer.",
    solution:
      "J'ai conçu des schémas de bases de données relationnelles et écrit des requêtes SQL " +
      "(jointures, filtres, agrégations) pour répondre à des besoins concrets.",
    results:
      "Une bonne maîtrise des bases du modèle relationnel, essentielle pour n'importe quel " +
      "projet back-end.",
    tags: ["SQL", "Bases de données"],
  },
  {
    title: "Maquettes UI/UX sur Figma",
    status: "Projet design",
    context: "Deux projets de conception d'interface, du wireframe à la maquette finale.",
    problem:
      "Un design qui n'est pas pensé pour l'utilisateur final complique le développement et " +
      "frustre les visiteurs.",
    solution:
      "J'ai réalisé des wireframes puis des maquettes complètes sur Figma, en réfléchissant à " +
      "la hiérarchie visuelle et au parcours utilisateur avant de coder quoi que ce soit.",
    results:
      "Deux maquettes prêtes à être intégrées, et une meilleure compréhension du lien entre " +
      "design et développement.",
    tags: ["Figma", "UI/UX"],
  },
];
