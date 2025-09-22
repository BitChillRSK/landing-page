import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://bitchillrsk.github.io",
  base: "/landing-page",
  output: "static",
  server: { port: 4321 },
  vite: {
    build: { cssMinify: true },
  },
});
