# Portfolio Muzola Ethberg - Vue.js

Portfolio professionnel développé avec Vue.js 3, Composition API, TypeScript et Tailwind CSS.

## 🚀 Technologies utilisées

- **Vue.js 3** avec Composition API
- **TypeScript** pour le typage statique
- **Tailwind CSS** pour le styling
- **Vite** comme build tool
- **Font Awesome** pour les icônes
- **Unicons** pour les icônes supplémentaires

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 📁 Structure du projet

```
src/
├── components/        # Composants Vue
│   ├── Header.vue      # Navigation principale
│   ├── Hero.vue        # Section d'accueil avec animation
│   ├── Technologies.vue # Technologies utilisées
│   ├── About.vue       # À propos
│   ├── Skills.vue      # Compétences avec barres de progression
│   ├── Projects.vue    # Projets en carousel
│   ├── Resume.vue      # Expériences et formations
│   ├── Services.vue    # Services proposés
│   ├── Testimonials.vue # Témoignages
│   ├── Contact.vue     # Formulaire de contact
│   └── Footer.vue      # Pied de page
├── data/             # Données du portfolio
│   └── portfolio.ts  # Toutes les données centralisées
├── types/            # Types TypeScript
│   └── index.ts      # Interfaces et types
├── App.vue           # Composant principal
├── main.ts           # Point d'entrée
└── style.css         # Styles globaux et Tailwind

public/
├── images/           # Images du portfolio
└── apk/              # Fichiers APK à télécharger
```

## 🎨 Personnalisation

### Modifier les données

Les données du portfolio peuvent être modifiées dans le fichier `src/data/portfolio.ts` :

- `skills` : Liste des compétences avec pourcentages
- `technologies` : Technologies affichées
- `projects` : Projets à afficher
- `experiences` : Expériences professionnelles
- `education` : Formations
- `services` : Services proposés
- `testimonials` : Témoignages
- `contactInfo` : Informations de contact

### Personnaliser les couleurs

Les couleurs peuvent être personnalisées dans `tailwind.config.js` :

```js
colors: {
  primary: '#6244C5',
  secondary: '#FFC448',
  light: '#FAFAFB',
  dark: '#12141D',
}
```

### Ajouter des images

Placez vos images dans le dossier `public/images/` et référencez-les avec `/images/nom-image.png`

## 🎯 Fonctionnalités

- ✅ Navigation responsive avec menu mobile
- ✅ Scroll smooth vers les sections
- ✅ Animations d'entrée
- ✅ Formulaire de contact
- ✅ Mode sombre (thème)
- ✅ Design responsive
- ✅ Barres de progression animées pour les compétences
- ✅ Carousel pour les projets
- ✅ Timeline pour les expériences et formations

## 📝 Notes

- Les images doivent être placées dans `public/images/`
- Le logo doit être dans `public/images/logoa.png`
- L'APK doit être dans `public/apk/alice.apk`

## 🌐 Déploiement

Pour déployer le projet :

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`

## 📝 Licence

Copyright © 2023 AliceBerg. Tous droits réservés.
