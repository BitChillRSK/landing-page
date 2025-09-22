# BitChill Landing

**Mobile-first**, oscuro, y con tokens que replican el theme de la DApp (`#E04B0B`, texto blanco, fondo negro, cards translúcidas).

## Stack

- Astro 4
- TailwindCSS 3 + DaisyUI (tema `bitchill` ya configurado)
- Tipografía Inter (Google Fonts)
- Estructura de secciones: Hero, Cómo funciona, Intereses, Por qué Bitcoin, Peg 1:1 rBTC, Precios, FAQ, CTA final

## Desarrollo

```bash
pnpm i   # o npm/yarn
pnpm dev
pnpm build && pnpm preview
```

## Personaliza

- Colores en `tailwind.config.cjs`
- Estilos globales en `src/styles/globals.css`
- Copys en `src/components/*.astro`
- Fav/OG: `public/favicon.png` y `public/og.jpg`

## Accesibilidad y SEO

- Head con metas OG
- Contraste alto
- Navegación por anclas
