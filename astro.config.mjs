import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  site: 'https://bristolemergencyplumber.co.uk',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/manage') &&
        !page.includes('/404') &&
        !page.includes('/privacy-policy') &&
        !page.includes('/terms') &&
        !page.includes('/cookie-policy') &&
        !page.includes('/accessibility'),
    }),
  ],
});
