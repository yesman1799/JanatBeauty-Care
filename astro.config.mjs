// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://janat.cz',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // Vše jako externí soubory -> přísná CSP bez 'unsafe-inline'
    inlineStylesheets: 'never',
  },
  vite: {
    build: { assetsInlineLimit: 0 },
  },
  devToolbar: { enabled: false },
});
