## Refonte du portfolio en Astro avec la charte Gemula

- Site statique Astro, une section par composant dans `src/components/`
- Contenu centralisé dans `src/data/cv.ts`, repris du CV
- Charte Gemula en CSS à variables, polices Inter et Poppins locales, icônes SVG, aucune ressource externe
- Logo Gemula (bloc « Gemula » avec lien vers gemula.org), filtres de projets, menu mobile, lien « Aller au contenu », respect de « réduire les animations »
- SEO : sitemap, canonical, Open Graph, JSON-LD Person
- `vercel.json` (preset Astro, sortie `dist`, redirection de l'ancien CV), `engines` Node ≥ 22.23.4
- README réécrit

### À vérifier avant de fusionner
- [ ] `site` dans `astro.config.mjs` = adresse réelle
- [ ] Lien GitHub, redirections des anciens liens de CV
- [ ] Aperçu Vercel : ordinateur et mobile, téléchargement du CV
