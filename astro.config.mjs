// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Organization site: https://tamie-umich.github.io (no base path needed).
  site: 'https://tamie-umich.github.io',
  trailingSlash: 'ignore',
});
