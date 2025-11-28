import type { Skill, Technology, Project, Experience, Education, Service, Testimonial, ContactInfo } from '@/types';

export const skills: Skill[] = [
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 85 },
  { name: 'PHP', percentage: 80 },
  { name: 'Javascript', percentage: 70 },
  { name: 'Flutter', percentage: 75 },
  { name: 'Wordpress', percentage: 70 },
];

export const technologies: Technology[] = [
  { name: 'HTML5', image: '/images/html5.png' },
  { name: 'CSS3', image: '/images/css3.png' },
  { name: 'JavaScript', image: '/images/javasccc.png' },
  { name: 'Vue.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Laravel', image: '/images/laravel.png' },
  { name: 'PHP', image: '/images/php.png' },
  { name: 'Git', image: '/images/git.png' },
];

import corsatcomImage from '@/assets/corsatcom.jpeg';
import centreImage from '@/assets/centre.jpeg';

export const projects: Project[] = [
  { 
    id: 1, 
    title: 'CORSATCOM', 
    image: corsatcomImage, 
    url: 'https://corsatcom.com',
    description: 'Site web professionnel pour une entreprise de télécommunications. Développement d\'une plateforme moderne et responsive avec gestion de contenu dynamique.',
    technologies: ['Vue.js', 'Laravel', 'PHP', 'JavaScript']
  },
  { 
    id: 2, 
    title: 'CREFFPME', 
    image: centreImage, 
    url: 'https://creffpme.org',
    description: 'Plateforme web pour le Centre de Référence et d\'Excellence en Financement des PME. Interface intuitive pour la gestion et le suivi des financements.',
    technologies: ['Vue.js', 'Laravel', 'PHP', 'JavaScript']
  },
];

export const experiences: Experience[] = [
  {
    year: '2024',
    title: 'Software Engineer',
    company: 'Soficom',
    description: "En tant que Software Engineer chez Soficom, je développe et maintiens des solutions logicielles innovantes. Je travaille sur la conception, le développement et l'optimisation d'applications web et mobiles, en collaborant étroitement avec les équipes pour livrer des produits de haute qualité qui répondent aux besoins des clients.",
  },
  {
    year: '2023',
    title: 'Développeur web et mobile',
    company: 'Orange digital center',
    description: "J'ai acquis des compétences qui sont en forte demande dans l'industrie tout en travaillant sur des projets concrets de A à Z, je suis en mesure d'appliquer ces compétences dans le domaine du développement web et mobile, que ce soit en travaillant pour une entreprise ou en freelance pour des clients.",
  },
  {
    year: '2022',
    title: 'Développeur web',
    company: 'Kongo code',
    description: "J'ai participé au développement de la plateforme Nsiku, en travaillant sur la conception, le développement et la mise en œuvre de certaines fonctionnalités clés. Ce projet a été une expérience enrichissante pour moi, car j'ai pu contribuer à la création d'un outil qui aidera les gens à mieux comprendre leurs droits et à accéder à des informations juridiques fiables.",
  },
];

export const education: Education[] = [
  {
    year: '2024',
    degree: 'Licence en Conception des Systèmes d\'Information',
    institution: 'HEC Kin (ex ISC Gombe)',
    description: "Obtention d'une licence en Conception des Systèmes d'Information, spécialisation approfondie dans l'analyse, la conception et le développement de systèmes informatiques. Formation complète en architecture logicielle, bases de données, gestion de projets informatiques et technologies émergentes.",
  },
  {
    year: '2022',
    degree: 'Diplôme de graduat',
    institution: 'ISC/Kinshasa',
    description: "Diplôme en informatique et gestion obtenu, démontrant des compétences en technologies de l'information et de la communication (TIC) ainsi que dans la gestion de projets et d'équipes. Acquis des compétences techniques dans la programmation, la conception de bases de données, la sécurité informatique.",
  },
  {
    year: '2019',
    degree: "Diplôme d'Etat",
    institution: 'CS Mont Thabor',
    description: "Diplôme obtenu en commercial et gestion, démontrant des compétences en comptabilité, finance, entrepreneuriat et gestion des ressources humaines. Acquis des compétences en planification stratégique, gestion de projet et communication d'entreprise.",
  },
];

export const services: Service[] = [
  {
    icon: 'fa-crop-alt',
    title: 'Développement de sites web',
    description: 'Je propose des services de développement de sites web personnalisés pour répondre aux besoins spécifiques de votre entreprise. Je travaille avec des technologies telles que HTML, CSS et JavaScript pour créer des sites web modernes, interactifs et conviviaux.',
  },
  {
    icon: 'fa-code-branch',
    title: "Développement d'applications mobiles",
    description: "Je suis en mesure de travailler sur des projets d'applications mobiles de toutes tailles et de toutes complexités, qu'il s'agisse d'une application simple pour une petite entreprise ou d'une application plus complexe pour une grande entreprise.",
  },
  {
    icon: 'fa-code',
    title: 'Conseil en stratégie numérique',
    description: 'Je propose des services de conseil en stratégie numérique pour aider les entreprises à planifier et à mettre en œuvre des stratégies de marketing numérique efficaces. Mon objectif est d\'aider les entreprises à maximiser leur présence en ligne et à atteindre leur public cible de manière efficace.',
  },
  {
    icon: 'fa-laptop-code',
    title: 'Optimisation de sites web',
    description: 'Je propose des services d\'optimisation de sites web pour améliorer la vitesse de chargement, le référencement et la convivialité de votre site web. Mon objectif est de vous aider à maximiser l\'impact de votre site web en améliorant son efficacité et en offrant une meilleure expérience utilisateur.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Nous avons travaillé avec ethberg pour optimiser notre site web existant et nous sommes ravis des résultats. Il a été très professionnel tout au long du processus et a travaillé dur pour s'assurer que notre site web était rapide, convivial et bien référencé. Il a également été très communicatif, nous tenant informés à chaque étape du processus. Nous sommes ravis de recommander ses services à tous ceux qui cherchent à optimiser leur site web.",
    author: 'Josué Ngoma',
    role: 'Etudiant',
  },
  {
    id: 2,
    text: "J'ai eu le plaisir d'apprendre à ethberg pendant son programme de développement web. Il est un apprenant compétent et passionné, qui est capable de comprendre des idées techniques complexes et de les appliquer de manière pratique. Il est également très persévérant et est toujours prêt à résoudre les problèmes.",
    author: 'Richard Mamona',
    role: 'Assistant',
  },
  {
    id: 3,
    text: "J'ai eu le grand plaisir de travailler avec ethberg pendant son programme de développement web et mobile. Sa passion pour le domaine ont été une source d'inspiration pour lui tout au long du programme. Grâce à mes conseils et à mon soutien, il a acquis des compétences solides en développement web et mobile et il est maintenant en mesure de travailler sur des projets de haute qualité.",
    author: 'Dan Omotete',
    role: 'Formateur à l\'orange digital',
  },
];

export const contactInfo: ContactInfo = {
  address: '18ème rue Limete, Kinshasa',
  phone: '+243 854 434 602',
  email: 'ethbergmuzola500@gmail.com',
  social: {
    twitter: '',
    facebook: '',
    youtube: '',
    linkedin: '',
  },
};

