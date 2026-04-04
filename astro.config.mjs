import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://daniprz-portfolio.vercel.app',
  integrations: [tailwind(), preact()],
  i18n: {
    defaultLocale: 'fr',
    locales: ['es', 'en', 'fr'],
    routing: {
      prefixDefaultLocale: false  
    }
  }
});
