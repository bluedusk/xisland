# xisland.app

Landing page for [xisland](https://xisland.app) — dynamic island for your coding agent.

## Feedback

Got a feature request, bug report, or suggestion? [Open an issue](https://github.com/bluedusk/xisland/issues).

## Stack

- [Astro](https://astro.build) — static site generator
- [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- Cloudflare Pages

## Commands

| Command | Action |
|:--|:--|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Dev server at `localhost:4321` |
| `pnpm build` | Build to `./dist/` |
| `pnpm preview` | Preview build locally |
| `pnpm ship` | Build + deploy to Cloudflare Pages |

## Deploy

```sh
pnpm ship
```

Deploys to Cloudflare Pages via wrangler. Requires `wrangler login` first.
