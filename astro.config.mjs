import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from 'astro-robots-txt';
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

export default defineConfig({
  
  site: process.env.DOMAIN_URL || 'https://new.cristianfonseca.dev',
  experimental: {
    integrations: true
  },
  integrations: [tailwind(), prefetch({
    throttle: 3
  }), robotsTxt(), react(), mdx()]
});