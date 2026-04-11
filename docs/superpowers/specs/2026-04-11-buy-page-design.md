# /buy Page — LemonSqueezy Payment Integration

## Overview

Add a `/buy` page to xisland.app with a single pricing card for a one-time $9.99 lifetime license. Payment handled via LemonSqueezy overlay checkout (no server needed — site stays static).

## Product Details

- **Name:** xisland
- **Price:** $9.99 USD, one-time
- **License:** Lifetime, 2 machines
- **Includes:** All future updates, all supported agents, all 7 terminals

## Page Structure

### `src/pages/buy.astro`

Single page with a centered pricing card. Uses BaseLayout, Nav, Footer like all other pages.

```
BaseLayout (title, description, jsonLd)
  Nav
  main.buy
    section.pricing
      .pricing-card
        h1  "xisland"
        .price
          span.amount  "$9.99"
          span.period  "one-time payment"
        ul.features (checkmark list)
          - Lifetime updates
          - 2 machine license
          - All AI coding agents
          - 7 terminals supported
        button.btn-buy  "Buy Now"  (triggers LS overlay)
        p.note  "One-time purchase. No subscription."
  Footer
```

### Styling

Matches existing site aesthetic:

- Dark background, green accent (#3ddc84)
- Pixel font (Press Start 2P) for headings
- JetBrains Mono for body/price
- Card with subtle border (var(--border)), slight elevation
- Green CTA button matching `.btn-dl` style from Hero
- Checkmarks in green for feature list
- Responsive — card fills width on mobile, max-width ~400px on desktop

### LemonSqueezy Integration

**Script:** Load `https://app.lemonsqueezy.com/js/lemon.js` via `<script>` tag with `defer`.

**Checkout trigger:** Button calls `window.LemonSqueezy.Url.Open(checkoutUrl)` on click, where `checkoutUrl` is the LemonSqueezy checkout URL.

**Placeholder:** Use `https://xisland.lemonsqueezy.com/buy/placeholder` as the checkout URL. Marked with a code comment for easy replacement.

No `.env` file needed — the checkout URL is a public link, not a secret.

### Navigation Update

**`src/components/Nav.astro`:** Add a "Buy" link to `/buy` in the nav, between "blog" and the GitHub icon.

### SEO

**Title:** `Buy xisland Pro — AI Coding Agent Monitor for macOS`

**Description:** `Get xisland Pro for $9.99. Lifetime license for 2 machines. Monitor Claude Code, Codex, Gemini CLI, and OpenCode from the macOS notch.`

**JSON-LD:** Product schema:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "xisland Pro",
  "description": "Lifetime license for xisland — monitor AI coding agents from the macOS notch.",
  "url": "https://xisland.app/buy",
  "offers": {
    "@type": "Offer",
    "price": "9.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

## What Does NOT Change

- Hero CTA stays "Download for Free" pointing to GitHub releases
- Footer stays as-is
- No other pages are modified
- Site remains fully static (no SSR)

## Files to Create/Modify

| File                       | Action                      |
| -------------------------- | --------------------------- |
| `src/pages/buy.astro`      | Create — pricing page       |
| `src/components/Nav.astro` | Modify — add "Buy" nav link |

## Verification

1. `pnpm build` — no errors
2. `pnpm dev` — visit `/buy`, verify card renders correctly
3. Click "Buy Now" — verify LemonSqueezy overlay attempts to open (will fail with placeholder URL, that's expected)
4. Check nav — "Buy" link appears and works
5. View page source — verify JSON-LD, meta tags, canonical URL
6. Test mobile viewport — card should be responsive
