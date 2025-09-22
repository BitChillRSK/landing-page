import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bitchill.app',
  output: 'static',
  server: { port: 4321 },
  vite: {
    build: { cssMinify: true },
  },
});
