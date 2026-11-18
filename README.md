# Portfolio · KPOUMIE Amza

Portfolio de **KPOUMIE Amza**, Data Analyst (Data Science & Business Intelligence), membre de [Gemula](https://gemula.org).

## Stack

- [Astro](https://astro.build) en site statique, très peu de JavaScript
- Charte graphique de Gemula en CSS simple avec variables (pas de Tailwind)
- Polices Inter et Poppins hébergées dans `public/fonts/`, icônes SVG intégrées : aucune ressource externe
- Images converties en WebP par `astro:assets`
- Sitemap (`@astrojs/sitemap`), balises canonical et Open Graph, JSON-LD de type Person

## Mettre à jour le contenu

Tout le texte est dans **`src/data/cv.ts`** : identité, Gemula, parcours, projets, compétences, formations, certifications, langues.

- Ajouter un projet : ajouter une entrée dans `projets` (champs facultatifs `code` et `demo` pour les liens).
- Afficher le téléphone : passer `afficherTelephone` à `true`.
- Changer le CV : remplacer `public/documents/cv-kpoumie-amza.pdf` en gardant le même nom.
- Adresse du site : modifier `site` dans `astro.config.mjs`.

## Développement local

Prérequis : Node.js 22.23.4 ou plus récent.

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # génère le site dans dist/
npm run preview  # prévisualise le site construit
```

## Structure

```
src/
  data/cv.ts          ← tout le contenu
  components/         ← une section par fichier
  layouts/Base.astro  ← <head>, SEO, JSON-LD
  pages/index.astro   ← assemblage des sections
  assets/             ← photo et logo Gemula
  styles/global.css   ← charte graphique
public/
  documents/          ← CV en PDF
  fonts/              ← Inter et Poppins
vercel.json           ← configuration Vercel et redirections
```

## Déploiement (Vercel)

Un push sur `main` met le site en ligne ; les autres branches reçoivent un lien d'aperçu. `vercel.json` impose le preset Astro, le dossier `dist/` et redirige l'ancien lien du CV.
