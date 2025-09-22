/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E04B0B",
        primary_hover: "#C33C02",
        text: "#FFFFFF",
        bg: "#000000",
        grey: "#6D6D6D",
        card: "#6D6D6D26",
      },
      borderRadius: {
        xl2: "20px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.3)"
      }
    },
  },
  daisyui: {
    themes: [
      {
        bitchill: {
          "primary": "#E04B0B",
          "secondary": "#C33C02",
          "accent": "#6D6D6D",
          "neutral": "#101010",
          "base-100": "#000000",
          "info": "#2aa1ff",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
    logs: false,
  },
  plugins: [daisyui],
}
