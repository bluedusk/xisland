# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for xisland — a macOS Dynamic Island monitor for AI coding agents (Claude Code, Codex, Gemini CLI, OpenCode). Hosted at https://xisland.app.

## Commands

- `pnpm dev` — start local dev server
- `pnpm build` — production build (outputs to `dist/`)
- `pnpm preview` — preview production build locally
- `pnpm ship` — build and deploy to Cloudflare Pages via Wrangler

No test suite or linter configured.

## Architecture

Astro 6 static site. No UI framework (React/Vue), no CSS framework (Tailwind). Pure `.astro` components with scoped `<style>` blocks.

- `src/pages/` — file-based routing (index, download, buy, blog/[slug])
- `src/components/` — Astro components (Hero, NotchMockup, Features, Modes, Nav, Footer, etc.)
- `src/layouts/` — BaseLayout (SEO/meta/fonts), BlogPost (article template with schema.org)
- `src/blog/` — Markdown blog posts, validated via Content Collections (`src/content.config.ts`)
- `src/styles/global.css` — CSS variables and base styles

## Design System (CSS Variables)

Dark theme with two font families: `--pixel` (Press Start 2P) for headings, `--mono` (JetBrains Mono) for body text. Key colors: `--green (#3ddc84)`, `--orange`, `--red`. Responsive breakpoint at 768px.

## Deployment

Cloudflare Pages. The `ship` script runs `astro build && npx wrangler pages deploy dist --project-name=xisland-web`. No CI/CD pipeline — deploy is manual via `pnpm ship`.

## Download Page

Maintains exactly 3 download versions (latest releases). When adding a new version, drop the oldest. All release download URLs use `.dmg` — never `.zip`.
