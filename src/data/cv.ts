// TOUT le contenu du site est ici, repris du CV. Rien d'autre à modifier pour mettre à jour le texte.

export const identite = {
  nom: 'KPOUMIE Amza',
  titre: 'Data Analyst',
  sousTitre: 'Data Science & Business Intelligence',
  resume:
    "Étudiant en Master 1 en Data Science et Intelligence Artificielle, avec une formation initiale en Mathématiques-Informatique et une pratique de l’analyse de données, du SQL, de Python et des outils de Business Intelligence. Capable de préparer et explorer des jeux de données, produire des analyses descriptives, construire des visualisations et développer des prototypes analytiques. Intérêt particulier pour l’analyse de données financières, le suivi de performance et l’aide à la décision.",
  lieu: 'Douala, Cameroun',
  email: 'kpoumieamza35@gmail.com',
  telephone: '+237 692 670 571',
  afficherTelephone: false, // passer à true pour afficher le numéro dans la section Contact
  linkedin: 'https://www.linkedin.com/in/kpoumie-amza-28138928a/',
  github: 'https://github.com/KpoumieAmza', // à confirmer
  cv: '/documents/cv-kpoumie-amza.pdf',
};

export const gemula = {
  role: 'Data Analyst · Business Intelligence',
  url: 'https://gemula.org',
  texte: 'Je fais partie de Gemula, où j’interviens comme Data Analyst et sur la Business Intelligence.',
};

export const experiences = [
  {
    poste: 'Missions freelance',
    description: 'Nettoyage et structuration de données.',
  },
];

export type Projet = {
  nom: string;
  type: string;
  domaine: 'bi' | 'ml' | 'prog';
  description: string[];
  technologies: string[];
  code?: string;
  demo?: string;
};

export const domaines = [
  { id: 'bi', label: 'BI & Analyse' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'prog', label: 'Programmation' },
] as const;

export const projets: Projet[] = [
  {
    nom: 'Analyse et visualisation de données hospitalières',
    type: 'Power BI / Excel',
    domaine: 'bi',
    description: [
      'Exploitation de fichiers portant sur le personnel, les équipements, les infrastructures et les stocks hospitaliers.',
      'Préparation des données et structuration des informations en vue de leur analyse et de leur restitution dans des tableaux de bord.',
    ],
    technologies: ['Power BI', 'Excel'],
  },
  {
    nom: 'Prédiction de la réussite des étudiants',
    type: 'Python / Machine Learning',
    domaine: 'ml',
    description: [
      'Préparation et exploration d’un jeu de données sur la réussite académique ; définition d’une cible de classification.',
      'Étude du déséquilibre des classes et prise en compte de cette limite dans l’évaluation du modèle.',
    ],
    technologies: ['Python', 'Machine Learning'],
  },
  {
    nom: 'Projets d’analyse et de programmation',
    type: 'Python / SQL / R',
    domaine: 'prog',
    description: [
      'Réalisation d’exercices et de projets de manipulation, d’analyse et de traitement de données dans le cadre de la formation et de l’autoformation.',
    ],
    technologies: ['Python', 'SQL', 'R'],
  },
];

export const competences = [
  { icone: 'chart', titre: 'Analyse & BI', texte: 'Analyse exploratoire, statistiques descriptives, visualisation, rapports et tableaux de bord. Power BI, Excel (intermédiaire).' },
  { icone: 'code', titre: 'Programmation', texte: 'Python (analyse de données), R. Manipulation et préparation de données.' },
  { icone: 'database', titre: 'Bases de données', texte: 'SQL : requêtes, filtrage, agrégations, analyse de données relationnelles.' },
  { icone: 'cpu', titre: 'Data Science / IA', texte: 'Prétraitement, exploration, modélisation supervisée et évaluation de modèles (projets académiques et personnels).' },
];

export const formations = [
  { diplome: 'Master 1 — Data Science et Intelligence Artificielle', etablissement: 'Polytechnique de Douala, Cameroun', periode: 'En cours' },
  { diplome: 'Licence en Mathématiques-Informatique', etablissement: 'Université de Douala', periode: '2023-2024' },
];

export const certifications = [
  { organisme: 'DataCamp', intitule: 'Intermediate SQL ; Data Analysis with Python ; Customer Analytics' },
  { organisme: 'Great Learning', intitule: 'Data Science in FMCG (2025)' },
  { organisme: 'Udemy', intitule: 'SQL & Big Data' },
  { organisme: 'Coursera', intitule: 'Analyse de données' },
];

export const langues = [
  { langue: 'Français', niveau: 'Courant' },
  { langue: 'Anglais', niveau: 'Intermédiaire' },
];

export const navigation = [
  { href: '#gemula', label: 'Gemula' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#projets', label: 'Projets' },
  { href: '#competences', label: 'Compétences' },
  { href: '#formation', label: 'Formation' },
  { href: '#contact', label: 'Contact' },
];
