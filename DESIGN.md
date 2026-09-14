---
version: alpha
name: Young & Aligned
description: |
  A faith-based clarity brand for young adults (18–25). Editorial, calm, and
  confident — pairing a deep electric blue ("ink") with a single vibrant
  orange ("brand") accent. Serif display type carries gravitas; mono labels
  carry precision. Sharp corners, generous space, restrained motion.
colors:
  ink: "#1800ad"
  ink-soft: "#4A47A3"
  ink-deep: "#0E007A"
  marble: "#F4F5FF"
  plaster: "#FFFFFF"
  brand: "#ff751f"
  brand-soft: "#FF9A5B"
  brand-deep: "#E56012"
  brand-pale: "#FFF0E6"
  jade: "#0E007A"
  jade-soft: "#1800ad"
  jade-deep: "#08004D"
  stone: "#E6E8F7"
  stone-deep: "#C8CBE5"
typography:
  h1:
    fontFamily: Playfair Display
    fontSize: 78px
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -0.04em
  h2:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.04em
  h3:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.04em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  label-caps:
    fontFamily: IBM Plex Mono
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.2em
  number-tag:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.1em
  caption:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.1em
spacing:
  base: 16px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  gutter: 24px
  margin: 32px
  section-y: 128px
  container-max: 1280px
rounded:
  none: 0px
  xs: 2px
  sm: 3px
  md: 4px
  full: 9999px
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.plaster}"
    rounded: "{rounded.full}"
    padding: 14px 28px
    typography: "{typography.body-sm}"
    borderColor: "{colors.brand}"
  button-primary-hover:
    backgroundColor: "{colors.brand-deep}"
    borderColor: "{colors.brand-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: 14px 24px
    typography: "{typography.body-sm}"
    borderColor: "{colors.stone-deep}"
  button-ghost-hover:
    borderColor: "{colors.brand}"
    textColor: "{colors.brand}"
  card:
    backgroundColor: "{colors.marble}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 36px
    borderColor: "{colors.stone-deep}"
  card-hover:
    backgroundColor: "{colors.plaster}"
    borderColor: "{colors.brand}"
  nav:
    backgroundColor: "rgba(255,255,255,0.8)"
    textColor: "{colors.ink-soft}"
    height: 64px
    typography: "{typography.body-md}"
  nav-link-hover:
    textColor: "{colors.ink}"
  eyebrow:
    typography: "{typography.label-caps}"
    textColor: "{colors.brand-deep}"
  link-underline:
    textColor: "{colors.ink-soft}"
  link-underline-hover:
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.plaster}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    borderColor: "{colors.stone-deep}"
    typography: "{typography.body-md}"
  input-focus:
    borderColor: "{colors.brand}"
---

# Young & Aligned — Design System

## Overview

Young & Aligned is a faith-based clarity experience for young adults (18–25).
The visual language is **editorial, calm, and confident** — closer to a
thoughtful magazine than a tech product.

**Brand personality:** serious without being stiff, warm without being loud,
spiritual without being saccharine. The design should feel like a mentor who
listens before speaking: generous whitespace, deliberate pacing, one accent
that earns attention because it is used sparingly.

**Emotional response:** the UI should evoke *stillness, direction, and
worth*. Young adults arrive feeling scattered; the page should slow them down,
hold their attention, and guide them toward a single decision — joining
Awaken.

**Design principles:**

1. **Restraint over abundance.** One accent color. One primary action per
   screen. White space is the default; decoration must earn its place.
2. **Editorial over promotional.** Serif headlines, mono labels, and sharp
   corners signal substance, not a sale.
3. **Motion as breath, not spectacle.** Animations are slow, soft, and
   optional (respect `prefers-reduced-motion`). They reveal; they never
   perform.
4. **Faithful, not churchy.** The tone is rooted in faith but speaks the
   language of personal development. Imagery is human and warm, not
   iconographically religious.

## Colors

The palette is built from two logo primaries — electric blue `#1800ad`
("ink") and vibrant orange `#ff751f` ("brand") — extended with a quiet set
of neutrals inspired by marble and plaster.

- **Ink (`#1800ad`):** the deep electric blue that anchors all text,
  headlines, and dark sections. It carries gravity and trust without going
  to corporate navy.
- **Ink-soft (`#4A47A3`):** a muted companion for body copy and secondary
  text — readable, never harsh.
- **Ink-deep (`#0E007A`):** used for the darkest full-bleed sections (e.g.
  the final CTA) where ink alone would feel too bright.
- **Brand (`#ff751f`):** the single vibrant orange. Reserved exclusively
  for the primary action, key highlights, and selection. Never used as a
  background fill on large areas.
- **Brand-soft (`#FF9A5B`):** for warm accents on dark backgrounds where
  full brand would feel too hot.
- **Brand-deep (`#E56012`):** hover and emphasis state for the brand color.
- **Brand-pale (`#FFF0E6`):** a whisper of warmth for tints and soft
  highlights.
- **Marble (`#F4F5FF`):** a cool, near-white surface for cards and
  alternating sections — softer than pure white.
- **Plaster (`#FFFFFF`):** the page foundation; pure white for maximum
  clarity on the base layer.
- **Stone (`#E6E8F7`) / Stone-deep (`#C8CBE5`):** cool neutral borders and
  dividers. Used at low opacity for hairline separations.

### Usage rules

- **Ink** is the default text color. Body copy uses `ink-soft`.
- **Brand** marks the single most important action on a screen and the
  keywords a reader must not miss. It is never used for decorative panels.
- Dark sections invert the palette: `ink`/`ink-deep` backgrounds with
  `plaster` text and `brand-soft` highlights.
- All large color areas are cool (ink/marble/plaster). Brand is the only
  warm note and it stays small.

## Typography

Three typefaces, each with a clear job:

- **Playfair Display** (display, serif) — headlines and section titles. Set
  at weight 400 (regular) with tightest tracking (`-0.04em`) and a near-1.0
  line height. Optical sizing is enabled. This is the voice of the brand:
  literary, considered, unhurried.
- **Hanken Grotesk** (body, sans-serif) — all running text, buttons, and
  nav. Weights 400 / 500 / 600 / 700. Open, humanist, and quietly modern.
  Body copy defaults to 16px / 1.7 for long-form readability.
- **IBM Plex Mono** (mono) — eyebrows, number tags, captions, and
  metadata. Always uppercase with wide tracking (`0.1em`–`0.2em`). It
  signals precision and structure — the "framework" beneath the prose.

### Scale

The type scale is fluid. Headlines step down gracefully from `78px` on
large desktops to `34px` on the smallest phones via explicit breakpoints
(`xs: 360px`, `sm`, `md`, `lg`, `xl`). Body text stays between 14px and
20px. Mono labels stay small (10–15px) so they whisper rather than shout.

### Font features

Body text enables `ss01` and `ss02` stylistic sets on Hanken Grotesk for
refined alternate forms. Playfair Display uses optical sizing (`auto`).

## Layout

The layout follows a **Fixed-Max-Width Grid** for desktop and a **Fluid
Grid** for mobile.

- **Container:** `max-w-7xl` (1280px) centered, with `px-6` (24px) on
  mobile and `px-10` (40px) from `lg` up.
- **Grid:** a 12-column grid on `lg`+ with a 16px–64px gap. Most
  asymmetric sections use a 7/5 or 5/7 split.
- **Section rhythm:** generous vertical padding (`py-24` / `py-32`,
  ~96–128px) between sections. The page should breathe — never crowd.
- **Breakpoints:** `xs: 360px`, `sm: 640px`, `md: 768px`, `lg: 1024px`,
  `xl: 1280px`, `2xl: 1536px`. The `xs` breakpoint is custom and exists to
  serve the smallest real-world phones gracefully.
- **Prose width:** long-form text caps at `68ch` (`max-w-prose2`) for
  reading comfort.

### Spacing scale

A base-16 scale with a 4px half-step for micro-adjustments:

`xs 4px` · `sm 8px` · `md 16px` · `lg 32px` · `xl 64px` · `gutter 24px` ·
`margin 32px` · `section-y 128px`

## Elevation & Depth

Depth is achieved through **tonal layering**, not heavy shadows.

- Alternating sections switch between `plaster` and `marble` to create
  separation without borders.
- Cards sit on `marble` with a 1px `stone-deep` hairline border at low
  opacity (`/40`). On hover, the border warms to `brand` and the fill
  brightens to `plaster`.
- The only shadow usage is a soft `shadow-sm` on small floating elements
  (e.g. the founder card in the hero).
- A subtle `vignette` utility (`inset box-shadow` in ink at 5% opacity)
  adds depth to photographic containers.
- A faint **film grain** overlay (SVG fractal noise at 4% opacity) can be
  applied via the `.grain` utility to lend an editorial, printed feel.

Dark sections (e.g. the final CTA) use a near-invisible vertical grid
line texture at 4% opacity to add structure without noise.

## Shapes

The shape language is **architectural sharpness**.

- Cards, images, and containers use a **3px corner radius** (`rounded-sm`).
  This is intentional — it signals precision and restraint. Pill shapes
  are reserved for **buttons and interactive pills only** (`rounded-full`).
- The hero image and founder portrait use a 3px radius with a subtle
  vignette and slow-pan animation.
- Never mix a sharp container with a pill button inside the same card
  without intent — the contrast is the point.
- The `arabesque-divider` (a concentric diamond SVG in brand orange at
  low opacity) is the only ornamental shape. Use it sparingly as a
  decorative anchor on dark sections.

## Motion

Motion is **breath, not spectacle**. Everything is slow, soft, and
respects `prefers-reduced-motion` (which disables all reveal and pan
animations entirely).

- **Reveal on scroll:** elements fade up 28px over 1100ms with a
  `cubic-bezier(0.22,1,0.36,1)` easing. Staggered via `reveal-delay-1`
  through `reveal-delay-4` (120–420ms).
- **Slow pan:** hero images drift with an 18s `ease-in-out infinite
  alternate` transform — a barely-perceptible living quality.
- **Line grow:** the active framework card has a 2px brand bar that
  grows from the top over 1400ms.
- **Hover transitions:** all hover states (buttons, links, cards) use a
  400–500ms `cubic-bezier(0.45,0,0.2,1)` (`breath`) timing function.
- **Link underline:** text links animate a 1px brand underline from 0%
  to 100% width on hover over 500ms.

### Timing functions

- `breath: cubic-bezier(0.45, 0, 0.2, 1)` — standard UI transitions.
- `cubic-bezier(0.22, 1, 0.36, 1)` — reveal/entrance animations (more
  dramatic ease-out).

## Components

### Buttons

Two variants, both pill-shaped (`rounded-full`) with a 1px border:

- **Primary** (`btn-primary`): brand fill, plaster text. On hover: fills
  brand-deep and lifts 1px (`translateY(-1px)`). Used for the single most
  important action on a page — always "Join Awaken."
- **Ghost** (`btn-ghost`): transparent fill, ink text, stone-deep border.
  On hover: border and text warm to brand. Used for secondary actions
  (e.g. "See the framework").

**On dark sections**, the primary button inverts: plaster fill with ink
text, hovering to brand fill. This keeps it the clear hero action against
an ink background.

### Cards

- **Feature card:** `marble` fill, 3px radius, 1px stone-deep border at
  40% opacity, 28–36px padding. Hover warms the border to brand and
  brightens the fill to plaster. Centered content with a number tag,
  icon, tagline, and description.
- **Framework card:** part of a 3-up grid separated by 1px dividers
  rather than gaps. The active stage sits on `plaster`; inactive stages
  sit on `marble/60` with muted text. The active card has a 2px brand
  top-bar that animates in.

### Navigation

- Fixed top bar, 64px tall, with `backdrop-blur-md` and `plaster/80`
  fill over a hairline bottom border.
- Logo + wordmark on the left ("Young **&** Aligned" with the ampersand
  in brand-deep).
- Inline links center-right on `md`+; a hamburger toggles a mobile panel.
- The primary CTA button lives in the nav, always visible.

### Links

Inline text links use the `.link-underline` utility: a 1px brand
underline that grows from 0% to 100% width on hover over 500ms. Default
color is `ink-soft`, warming to `ink` on hover.

### Eyebrows & labels

- **Eyebrow:** mono, 15px, uppercase, `0.2em` tracking, brand-deep color.
  Often preceded by an 8px brand hairline. Opens a section.
- **Number tag:** mono, 12px, `0.1em` tracking, brand color, weight 500.
  Numbers feature cards (`01`, `02`, …).

## Do's and Don'ts

- **Do** use brand (`#ff751f`) only for the single most important action
  per screen and for the few keywords a reader must not miss.
- **Do** keep body copy in `ink-soft` for long-form readability; reserve
  full `ink` for headlines and emphasis.
- **Do** alternate section backgrounds between `plaster` and `marble` to
  create rhythm without borders.
- **Do** respect `prefers-reduced-motion` — all reveal and pan
  animations must be disabled when it is set.
- **Don't** use brand as a large background fill. It is an accent, not
  a surface.
- **Don't** round card corners beyond 3px. Pill shapes are for buttons
  and interactive pills only.
- **Don't** mix more than two font families in a single view. Playfair
  Display (display) + Hanken Grotesk (body) + IBM Plex Mono (labels) is
  the full vocabulary.
- **Don't** add shadows for depth. Use tonal layering and hairline
  borders instead.
- **Don't** speed up animations. The 900–1400ms timing is intentional —
  it sets the calm, considered pace of the brand.
- **Don't** introduce religious iconography. The faith dimension is
  carried by tone and copy, not by symbols.