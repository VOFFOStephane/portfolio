# Portfolio — Stéphane Voffo Ndienyim

Portfolio personnel construit avec **React**, pour ma recherche de stage en développement web.

## 🧱 Stack technique

- **React 19** pour l'interface
- **esbuild** comme "bundler" (l'outil qui transforme mon code en un fichier que le
  navigateur comprend) — un choix léger et rapide, dans le même esprit que Vite
- **CSS pur** (variables CSS, flexbox, grid) — pas de framework CSS pour l'instant

> 💡 Si un jour je veux utiliser Tailwind CSS (que je connais déjà), je peux l'ajouter avec :
> `npm install -D tailwindcss postcss autoprefixer` puis suivre la doc officielle
> (https://tailwindcss.com/docs/installation).

## 🚀 Démarrer en local

```bash
# installer les dépendances (une seule fois)
npm install

# lancer le serveur de développement (avec rechargement automatique)
npm run dev
# → ouvrir http://localhost:5173

# générer la version finale de production dans dist/
npm run build
```

## 📁 Structure du projet

```
src/
  main.jsx           → point d'entrée, monte <App /> dans la page
  App.jsx             → assemble toutes les sections
  data/profile.js     → TOUTES mes infos (nom, contact, compétences, projets) — à modifier ici
  components/         → un composant par section (Navbar, Hero, About, Skills, Projects, Contact, Footer)
  styles/index.css    → tous les styles du site
```

Pour changer une info (téléphone, ajouter une compétence, un projet...), il suffit de modifier
`src/data/profile.js` — aucun composant à toucher.

## 🌍 Déploiement sur GitHub Pages

Ce repo contient un workflow GitHub Actions (`.github/workflows/deploy.yml`) qui build et
déploie automatiquement le site à chaque `push` sur `main`.

Étapes pour l'activer (à faire une seule fois) :

1. Pousser ce projet sur GitHub (dans un repo nommé par ex. `portfolio`)
2. Aller dans **Settings → Pages** du repo
3. Dans "Build and deployment", choisir **Source : GitHub Actions**
4. Faire un `push` sur `main` → le site se déploie automatiquement
5. L'URL du site apparaîtra dans l'onglet **Actions** puis dans **Settings → Pages**

## ✍️ À faire ensuite

- [ ] Remplacer les exercices/maquettes par de vrais projets au fur et à mesure
- [ ] Ajouter le CV en PDF dans `public/` et un bouton "Télécharger mon CV"
- [ ] Ajouter une photo de profil si souhaité
