import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// À REMPLACER par l'adresse réelle du site (sans « / » final).
export default defineConfig({
  site: 'https://mon-site.vercel.app',
  integrations: [sitemap()],
});
