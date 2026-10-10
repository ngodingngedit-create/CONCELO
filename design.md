# CONCELO — Style Reference
> playful ice cream festival

**Theme:** mixed

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

CONCELO uses a playful ice-cream-inspired visual language: vivid pink, deep red, yellow, and green create an energetic festival atmosphere, supported by cream/white neutrals. The brand speaks through a confident geometric sans-serif paired with the expressive CONCELO wordmark — the contrast between structural UI typography and the hand-drawn logo defines the personality. Color is identity, not decoration: pink carries the main energy, deep red provides contrast and brand depth, yellow creates playful highlights, and green supports discovery and experience. Components remain low-elevation and quietly rounded — borders and flat fills do the work, not heavy shadows. The layout stays generous and magazine-like, but the overall mood is youthful, colorful, social, nostalgic, and festive.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| CONCELO Pink | `#F9728B` | `--color-concelo-pink` | Primary brand color, main festival energy, hero surfaces, primary CTA and key highlights |
| CONCELO Deep | `#C2435C` | `--color-concelo-deep` | Brand contrast, headings, text, borders, active states and dark/premium contrast surfaces |
| CONCELO Yellow | `#FFDE59` | `--color-concelo-yellow` | Playful highlight, badges, announcements, secondary CTA and attention moments |
| CONCELO Green | `#96B63A` | `--color-concelo-green` | Secondary brand color for discovery, program, community, venue and experience sections |
| Cloud White | `#ffffff` | `--color-cloud-white` | Light supporting surface and content separation |
| Cream Linen | `#FFF9E8` | `--color-cream-linen` | Warm neutral supporting surface that complements the ice-cream/festival palette |
| Slate Mist | `#84849c` | `--color-slate-mist` | Muted secondary text, captions, helper text and low-emphasis borders |
| Onyx | `#000000` | `--color-onyx` | Small icon strokes, logo details and high-contrast utility elements; not a primary brand surface |

## Tokens — Typography

### Sharp Grotesk Web — Primary typeface for all UI text, headings, body, buttons, and nav — a geometric sans that is structural, even, and modern. The 60px display weight feels confident without being heavy; 400/500 for body keeps things light and airy. Sharp Grotesk's clean geometry contrasts with the handwritten script logo, and that tension is the type personality. · `--font-sharp-grotesk-web`
- **Substitute:** Space Grotesk or DM Sans
- **Weights:** 400, 500, 700
- **Sizes:** 14, 15, 16, 18, 20, 24, 60
- **Line height:** 1.0–1.63
- **Role:** Primary typeface for all UI text, headings, body, buttons, and nav — a geometric sans that is structural, even, and modern. The 60px display weight feels confident without being heavy; 400/500 for body keeps things light and airy. Sharp Grotesk's clean geometry contrasts with the handwritten script logo, and that tension is the type personality.

### CONCELO Wordmark (logo) — Wordmark only — a hand-drawn cursive script that reads 'CONCELO' with a casual, personal warmth. The script is intentionally casual against Sharp Grotesk's formality: the logo is a signature, the body is a label. · `--font-recess-script-logo`
- **Substitute:** Caveat or Pacifico
- **Weights:** 400
- **Sizes:** 32–40
- **Line height:** 1.0
- **Role:** Wordmark only — a hand-drawn cursive script that reads 'CONCELO' with a casual, personal warmth. The script is intentionally casual against Sharp Grotesk's formality: the logo is a signature, the body is a label.

### Adobe Blank — Adobe Blank — detected in extracted data but not described by AI · `--font-adobe-blank`
- **Weights:** 400
- **Sizes:** 14px, 24px
- **Line height:** 1.38, 1.63
- **Role:** Adobe Blank — detected in extracted data but not described by AI

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | — | — | 14px | 1.38 | — | `--text-caption` |
| body | — | — | 16px | 1.63 | — | `--text-body` |
| subheading | — | — | 18px | 1.4 | — | `--text-subheading` |
| heading-sm | — | — | 20px | 1.33 | — | `--text-heading-sm` |
| heading | — | — | 24px | 1.25 | — | `--text-heading` |
| display | — | — | 60px | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** spacious

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 84 | 84px | `--spacing-84` |
| 144 | 144px | `--spacing-144` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 8px |
| pills | 9999px |
| badges | 9999px |
| inputs | 4px |
| buttons | 4-8px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80-100px
- **Card padding:** 24-32px
- **Element gap:** 8-16px

## Components

### Primary CTA Button (Outlined)
**Role:** Main action — e.g. 'SHOP NOW', 'SHOP ALL PRODUCTS'

Rectangular, 4–8px radius, padding 12px 24px. CONCELO Deep (#C2435C) 1–2px border, transparent or Periwinkle fill, CONCELO Deep text. All-caps, 14–16px Sharp Grotesk weight 500, letter-spacing slight tracking. No shadow, no gradient — flat and confident.

### Ghost Pill Button
**Role:** Sticky/floating secondary action — e.g. bottom-right 'SHOP NOW'

Full pill radius (9999px), Cloud White (#ffffff) fill, CONCELO Deep (#C2435C) text, 1px CONCELO Deep border. 14px Sharp Grotesk weight 500, padding 10px 20px. Designed to float unobtrusively over pastel sections.

### Top Marquee Banner
**Role:** Promotional strip — shipping, codes, announcements

Full-bleed horizontal strip, 32–40px height, CONCELO Deep (#C2435C) background, Cloud White text, 12–14px Sharp Grotesk. Repeating text with small dot separators. No padding, runs edge-to-edge above the nav.

### Header / Nav Bar
**Role:** Site-wide navigation

Transparent over hero, becomes solid on scroll. Script 'CONCELO' logo left (~32–40px), nav links right ('shop', 'subscribe & save', 'login') + cart icon. Links in CONCELO Deep, 14–16px Sharp Grotesk weight 400. No background fill over the hero gradient — it floats.

### Hero Section
**Role:** First-screen brand statement

Full-bleed sky gradient background (blue to white). Headline 60px Sharp Grotesk weight 700 in CONCELO Deep, left-aligned at ~10% from left. Subtext 16–18px, Slate Mist. Product visual right-aligned with organic blob/rounded-rectangle mask. No card chrome — the gradient IS the surface.

### Product Showcase Card
**Role:** Featured product row — e.g. 'calm for every occasion'

Center-aligned stack on a sunset gradient background. Products displayed in a horizontal row with no individual cards — just the product photography floating. Headline 60px above, subtext 16px, CTA button centered below. Background is a full-bleed linear gradient (cream → lavender → blush).

### Testimonial Card
**Role:** Social proof — quote cards in carousel

Cloud White (#ffffff) fill, 8px radius, 24–32px padding, 1px Slate Mist border. Large open-quote mark in CONCELO Deep at top-left. Quote text 16–18px Sharp Grotesk weight 400, centered. Attribution (handle) 14px Slate Mist. Sits on CONCELO Pink background with floating cloud shapes.

### Cloud Decoration
**Role:** Atmospheric graphic — floating cloud shapes

Soft white/cream blob shapes with irregular organic outlines, ~10% opacity shadow underneath. Scattered across Periwinkle sections at varying scales (60–160px). No border, no text — purely atmospheric depth.

### Footer
**Role:** Site footer

CONCELO Deep (#C2435C) full-bleed background, Cloud White text. Multi-column link grid, newsletter signup, social icons. 16px Sharp Grotesk weight 400, 64–80px section padding.

### Promo Card Border Style
**Role:** Outlined card with chromatic border

1–2px CONCELO Pink border on transparent or white fill, 8px radius. Used for highlighted sections or product groupings. No shadow, no fill — the border alone defines the container.

## Do's and Don'ts

### Do
- Use Sharp Grotesk for all UI text; pair with the script logo only as a wordmark — never as body type.
- Set display headlines at 60px weight 700 with line-height 1.0 for the tight, confident voice.
- Build sections on CONCELO Pink (#F9728B) or sunset gradients as full-bleed atmospheric layers, not contained boxes.
- Use CONCELO Deep (#C2435C) for all text and borders — it is the only structural color.
- Keep buttons flat: outlined rectangles with 1–2px CONCELO Deep border, no gradients, no shadows.
- Add organic cloud shapes at 10–20% opacity as floating atmospheric decoration on lavender sections.
- Maintain 80–100px vertical breathing room between major sections to preserve the spacious, magazine-like rhythm.

### Don't
- Don't use the script logo for headings or body text — it's a signature mark, not a typeface.
- Don't apply heavy shadows or elevation to cards — CONCELO uses borders and gradients, not depth.
- Don't introduce additional brand accent colors beyond CONCELO Pink (#F9728B), CONCELO Deep (#C2435C), CONCELO Yellow (#FFDE59), and CONCELO Green (#96B63A) — keep the brand palette controlled and intentional.
- Don't use pure black backgrounds for anything other than small icon strokes — CONCELO Deep (#C2435C) is the dark surface.
- Don't crowd products into grids with visible card chrome — let product photography float freely over gradient surfaces.
- Don't use letter-spacing or all-caps for body text — only display headings and buttons get tracked caps.
- Don't break the sky-to-sunset gradient language with hard solid-color section dividers.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Cloud White | `#ffffff` | Base page canvas |
| 1 | CONCELO Pink | `#F9728B` | Dominant atmospheric section background |
| 2 | Cream Linen | `#fffcef` | Warm-tinted alt surface for contrast sections |
| 3 | CONCELO Deep | `#C2435C` | Footer and dark contrast surfaces |

## Elevation

CONCELO deliberately avoids drop shadows. All visual depth comes from layered gradient backgrounds, soft cloud shapes at reduced opacity, and 1–2px chromatic borders. The flat, shadow-free treatment keeps the aesthetic feeling like a printed poster or magazine spread rather than a web app.

## Imagery

Product photography is hero — the cans and jars are the visual content, shot on pure backgrounds or in lifestyle scenes (floating in a pool floatie, surrounded by fruit). Treatment: bright, high-key, saturated product colors against soft atmospheric backgrounds. The photography style is commercial-clean with playful lifestyle context. No illustrations, no abstract graphics beyond the organic cloud shapes. Cloud/blob SVG decorations are soft white with subtle opacity, serving as atmospheric depth rather than content.

## Layout

Full-bleed page model — every section extends edge-to-edge with its own gradient or color. Hero is a split composition: left-aligned headline block (~40% width) + right-aligned product visual with organic blob mask. Following sections are centered stacks: headline → subtext → product row → CTA. Testimonials are a 3-column card grid with carousel dots, centered on the page. Navigation is a simple transparent bar that floats over the hero. The marquee banner is a thin full-bleed strip above the nav. Vertical rhythm is spacious (80–100px section gaps) with content always centered within a ~1200px max-width. The overall flow feels like scrolling through a dreamy magazine — each section is a new mood color.

## Agent Prompt Guide

**Quick Color Reference**
- text: #C2435C
- background: #F9728B (dominant atmospheric), #ffffff (canvas), #fffcef (warm alt)
- border: #C2435C (structural), #F9728B (atmospheric)
- accent: #FFDE59 (emphasis only), #96B63A (decorative warmth)
- primary action: CONCELO Pink (#F9728B), with CONCELO Yellow (#FFDE59) for secondary/playful actions

**3–5 Example Component Prompts**
Use CONCELO Pink (#F9728B) as the primary CTA color; use CONCELO Yellow (#FFDE59) as a playful secondary CTA. Keep buttons flat with no gradients or heavy shadows.

2. Build a testimonial card: 8px radius, #ffffff fill, 1px #84849c border, 24px padding. Open-quote glyph 32px #C2435C top-left. Quote text 16px Sharp Grotesk weight 400, #C2435C, centered. Attribution 14px #84849c.

3. Build the top marquee: full-bleed, 36px height, #C2435C background, #ffffff text, 12px Sharp Grotesk. Repeating text segments separated by dot characters, no padding.

4. Build a ghost pill button: 9999px radius, #ffffff fill, 1px #C2435C border, #C2435C text, 10px 20px padding, 14px Sharp Grotesk weight 500.

5. Build a footer: full-bleed #C2435C background, #ffffff text, 4-column link grid, 16px Sharp Grotesk weight 400, 80px vertical padding.

## Similar Brands

- **Omsom** — Same pastel-saturated gradient backgrounds and centered product showcase layouts with generous breathing room
- **CONCELO reference brands like Kin Euphorics** — Same dreamy atmospheric aesthetic with sky/cloud imagery and pastel periwinkle palettes
- **Magic Spoon** — Same playful brand personality using soft pastel sections, geometric sans-serif type, and floating product photography
- **Olipop** — Same full-bleed gradient sections with centered display headlines and flat outlined CTA buttons
- **Imperfect Foods** — Same approach of atmospheric color washes as section backgrounds rather than white cards on gray

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors — CONCELO Brand */
  --color-concelo-pink: #F9728B;
  --color-concelo-deep: #C2435C;
  --color-concelo-yellow: #FFDE59;
  --color-concelo-green: #96B63A;
  --color-cloud-white: #ffffff;
  --color-cream-linen: #FFF9E8;
  --color-slate-mist: #84849c;
  --color-onyx: #000000;

  /* Typography — Font Families */
  --font-sharp-grotesk-web: 'Sharp Grotesk Web', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-concelo-wordmark: 'CONCELO Wordmark', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-adobe-blank: 'Adobe Blank', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.38;
  --text-body: 16px;
  --leading-body: 1.63;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.33;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --text-display: 60px;
  --leading-display: 1;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-84: 84px;
  --spacing-144: 144px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80-100px;
  --card-padding: 24-32px;
  --element-gap: 8-16px;

  /* Named Radii */
  --radius-cards: 8px;
  --radius-pills: 9999px;
  --radius-badges: 9999px;
  --radius-inputs: 4px;
  --radius-buttons: 4-8px;

  /* Surfaces */
  --surface-cloud-white: #ffffff;
  --surface-concelo-pink: #F9728B;
  --surface-cream-linen: #FFF9E8;
  --surface-concelo-deep: #C2435C;
}
```

### Tailwind v4

```css
@theme {
  /* Colors — CONCELO Brand */
  --color-concelo-pink: #F9728B;
  --color-concelo-deep: #C2435C;
  --color-concelo-yellow: #FFDE59;
  --color-concelo-green: #96B63A;
  --color-cloud-white: #ffffff;
  --color-cream-linen: #FFF9E8;
  --color-slate-mist: #84849c;
  --color-onyx: #000000;

  /* Typography */
  --font-sharp-grotesk-web: 'Sharp Grotesk Web', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-concelo-wordmark: 'CONCELO Wordmark', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-adobe-blank: 'Adobe Blank', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.38;
  --text-body: 16px;
  --leading-body: 1.63;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.33;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --text-display: 60px;
  --leading-display: 1;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-84: 84px;
  --spacing-144: 144px;
}
```

