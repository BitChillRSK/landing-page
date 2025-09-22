# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a BitChill landing page built with Astro, a cryptocurrency DCA (Dollar Cost Averaging) service focused on Bitcoin on Rootstock. The site is mobile-first, dark-themed, and uses the BitChill branding colors.

## Development Commands

- `npm run dev` - Start development server (runs on port 4321)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run format` - Format code with Prettier

## Tech Stack

- **Framework**: Astro 4 (static site generation)
- **Styling**: TailwindCSS 3 + DaisyUI with custom "bitchill" theme
- **Typography**: Inter font family (loaded from Google Fonts)
- **Language**: TypeScript with ES2022 target

## Architecture

The project follows a simple Astro component-based architecture:

- `src/pages/index.astro` - Main landing page that imports all sections
- `src/layouts/BaseLayout.astro` - Base layout with header, footer, and meta tags
- `src/components/` - Individual page sections (Hero, HowItWorks, EarnInterest, etc.)
- `src/styles/globals.css` - Global styles with custom CSS variables and animations

## Design System

### Colors (defined in both Tailwind and CSS variables)
- Primary: `#E04B0B` (BitChill orange)
- Primary hover: `#C33C02`
- Background: `#000000` (black)
- Text: `#FFFFFF` (white)
- Grey/Accent: `#6D6D6D`
- Card background: `#6D6D6D26` (translucent grey)

### Key Style Classes
- `.card-surface` - Translucent card styling with border
- `.outlined` - White border with rounded corners
- `.float-anim` and `.glow-anim` - Hero section animations

## Content Structure

The landing page is structured as a single-page layout with sections:
1. Hero - Main value proposition with animated illustration
2. HowItWorks - Process explanation
3. EarnInterest - Interest earning features
4. WhyBitcoin - Bitcoin advocacy content
5. PegInfo - Information about 1:1 rBTC peg
6. Pricing - Pricing information
7. FAQ - Frequently asked questions
8. FinalCTA - Final call-to-action

## Configuration

- Site URL: `https://bitchill.app`
- Uses DaisyUI theme "bitchill" (configured in `tailwind.config.cjs`)
- TypeScript with strict mode enabled
- Astro configured for static output with CSS minification