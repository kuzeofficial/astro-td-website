import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from 'astro-robots-txt';
import prefetch from "@astrojs/prefetch";

export default defineConfig({
  integrations: [tailwind(), prefetch(), robotsTxt()]
});