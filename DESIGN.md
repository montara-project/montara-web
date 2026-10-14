---
name: Montara Project
description: Build something different. A dark product-console system with one Signal Amber accent.
colors:
  terminal-black: 'hsl(220 20% 4%)'
  console-surface: 'hsl(220 20% 6%)'
  console-raised: 'hsl(220 14% 12%)'
  console-well: 'hsl(220 14% 11%)'
  hairline: 'hsl(220 14% 13%)'
  console-white: 'hsl(0 0% 96%)'
  readout: 'hsl(210 24% 96%)'
  readout-muted: 'hsl(218 12% 62%)'
  signal-amber: '#fca311'
  deep-console-navy: '#14213d'
typography:
  display:
    fontFamily: 'Outfit, ui-sans-serif, system-ui, sans-serif'
    fontSize: 'clamp(2.25rem, 6vw, 4.5rem)'
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: '-0.025em'
  headline:
    fontFamily: 'Outfit, ui-sans-serif, system-ui, sans-serif'
    fontSize: 'clamp(1.875rem, 4vw, 3rem)'
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: '-0.025em'
  title:
    fontFamily: 'Outfit, ui-sans-serif, system-ui, sans-serif'
    fontSize: '1.25rem'
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: 'Work Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.625
  body-small:
    fontFamily: 'Work Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: 'Work Sans, ui-sans-serif, system-ui, sans-serif'
    fontSize: '0.75rem'
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: '0.16em'
rounded:
  sm: '4px'
  md: '6px'
  lg: '8px'
  xl: '12px'
  2xl: '16px'
  3xl: '24px'
  full: '9999px'
spacing:
  gutter-mobile: '16px'
  gutter-desktop: '48px'
  card-gap: '20px'
  card-pad: '24px'
  card-pad-lg: '32px'
  title-to-content: '64px'
  section-y: '112px'
  section-y-mobile: '80px'
components:
  button-primary:
    backgroundColor: '{colors.console-white}'
    textColor: '{colors.console-surface}'
    typography: '{typography.body-small}'
    rounded: '{rounded.lg}'
    height: '44px'
    padding: '0 32px'
  button-primary-hover:
    backgroundColor: 'hsl(0 0% 96% / 0.9)'
  button-primary-compact:
    backgroundColor: '{colors.console-white}'
    textColor: '{colors.console-surface}'
    rounded: '{rounded.lg}'
    height: '32px'
    padding: '0 12px'
  button-subtle:
    backgroundColor: 'hsl(210 24% 96% / 0.04)'
    textColor: '{colors.readout}'
    rounded: '{rounded.lg}'
    height: '44px'
    padding: '0 32px'
  button-subtle-hover:
    backgroundColor: 'hsl(210 24% 96% / 0.08)'
  button-subtle-navy:
    backgroundColor: 'hsl(210 24% 96% / 0.05)'
    textColor: '{colors.readout}'
    rounded: '{rounded.lg}'
    height: '44px'
    padding: '0 32px'
  card:
    backgroundColor: '{colors.console-surface}'
    textColor: '{colors.readout}'
    rounded: '{rounded.2xl}'
    padding: '24px'
  chip-category:
    backgroundColor: 'hsl(0 0% 96% / 0.08)'
    textColor: '{colors.console-white}'
    typography: '{typography.label}'
    rounded: '{rounded.md}'
    padding: '4px 10px'
  chip-tech:
    backgroundColor: '{colors.console-well}'
    textColor: '{colors.readout-muted}'
    rounded: '{rounded.md}'
    padding: '4px 8px'
  nav-link:
    textColor: '{colors.readout-muted}'
    typography: '{typography.body-small}'
    rounded: '{rounded.md}'
    height: '40px'
    padding: '8px 16px'
  nav-link-active:
    textColor: '{colors.readout}'
  cta-panel:
    backgroundColor: '{colors.deep-console-navy}'
    textColor: '{colors.readout}'
    rounded: '{rounded.3xl}'
    padding: '96px 24px'
---

# Design System: Montara Project

## Overview

**Creative North Star: "The Shipping Console"**

Montara looks like the console of a team that ships: a near-black working surface, crisp hairline structure, white readouts, and one amber signal light that marks what matters right now. The mood is bold, modern, and fast. Confidence comes from heavy Outfit headlines, high-contrast white primary actions, and quick, small motion responses, not from ornament. The interface stays out of the way so the work (product screenshots, project cards, public repos) carries the proof.

Density is moderate: generous section spacing (80–112px) frames dense, scannable content blocks (cards, chips, numbered steps). Atmosphere is limited to quiet layers that read as instrument glass, not decoration: a near-invisible film grain, a faint grid that fades out under the hero, and soft amber and navy glows built from gradients rather than blur filters. The site is dark-only by design.

Confirmed anti-references: generic agency templates (stock photography, 3D people, gradients everywhere, fake testimonials), neon/crypto/cyberpunk glow and glitch, corporate enterprise blue, and any light theme.

**Key Characteristics:**

- Dark-only: Terminal Black page, Console Surface cards, hairline borders.
- One accent: Signal Amber, used as a signal, never as a fill for large areas.
- White is the primary action color; amber marks state and emphasis.
- Outfit semibold headlines with tight tracking over a Work Sans body.
- Fast, small, transform-only motion that respects reduced motion.

## Colors

A cool, navy-tinted monochrome lit by a single warm amber signal.

### Primary

- **Signal Amber**: the only accent. Active nav underline, focus rings (`--ring`), section tag rules, process step numbers, deliverable check marks, the hero headline's highlighter stroke, the availability dot, text selection, and hover color on links and card borders. It earns attention because it is rare.

### Secondary

- **Deep Console Navy**: the one colored surface, reserved for the closing CTA panel and as a cool counter-glow in the hero. It is a panel color, not a text or accent color.

### Neutral

- **Terminal Black**: page background and theme color (`#080a0c`). Everything sits on it.
- **Console Surface**: cards, the floating header (at 80% with backdrop blur), the mobile menu, and the legal table of contents.
- **Console Raised**: hover fill for list rows (legal TOC links).
- **Console Well**: recessed fills for tech chips and the legal "Questions?" box.
- **Hairline**: every border and divider, 1px.
- **Console White**: primary buttons and primary-colored labels.
- **Readout**: headings and body text on dark surfaces.
- **Readout Muted**: secondary copy, descriptions, inactive nav (7.07:1 on Terminal Black).

Quieter text tiers are alpha steps of Readout (`/70`, `/60`, `/55`, `/50`), used for footer copy and text on the navy panel. Do not go below `/50` for text.

### Named Rules

**The One Signal Rule.** Signal Amber is the only hue besides navy. Use it for state, emphasis, and small marks. Never as a section background, never as large body text, and never for more than one primary CTA style.

**The White Action Rule.** The primary action ("Start a project") is Console White on every surface, including the navy panel. Amber buttons are not part of the system.

## Typography

**Display Font:** Outfit (with ui-sans-serif, system-ui)
**Body Font:** Work Sans (with ui-sans-serif, system-ui)

**Character:** Outfit's geometric semibold gives headlines a confident, product-like voice; Work Sans keeps long descriptions and legal copy calm and highly legible.

### Hierarchy

- **Display**: the home hero H1 only. Steps from 36px on mobile to 72px at xl; text-balance.
- **Headline**: page H1s and section H2s, 30px to 48px.
- **Title**: card and step titles, 18–24px, Outfit semibold.
- **Body**: lead paragraphs and legal copy at 16–18px with relaxed leading (legal at 28px line height, about 65–75ch measure).
- **Body Small**: card descriptions, nav links, buttons (14px).
- **Label**: section tags, uppercase with 0.16em tracking; category chips use uppercase with wide tracking at 12px.

Numerals in stats and step numbers use `tabular-nums`. Headings `h1`–`h3` use `text-wrap: balance`; lead paragraphs use `text-pretty`.

### Named Rules

**The Heavy Headline Rule.** Headlines are Outfit at weight 600 with -0.025em tracking. Body copy is never Outfit, and headlines are never Work Sans.

## Layout

- **Container:** max 1280px, with 16px side gutters on mobile and 48px from md up. Inner reading blocks narrow further (about 768px for About, about 1024px for legal).
- **Section rhythm:** 80px vertical padding on mobile, 112px from md. 48–64px separates a section title from its content.
- **Section title:** home sections use a split layout, with tag and headline on the left and the description right-aligned with an optional action. Inner pages center the title block.
- **Grids:** cards sit in 1 → 2 → 3 (projects) or 1 → 2 (services) column grids with a 20px gap. The process strip goes 1 → 2 → 4 columns.
- **Legal pages:** a 240px sticky table of contents beside the article from lg, stacked above it on smaller screens.
- **Full-bleed exception:** only the hero breaks out of the container (100vw), and the body clips horizontal overflow.
- **Breakpoints:** Tailwind defaults (sm 640, md 768, lg 1024, xl 1280). The desktop nav appears at lg; below that, a 44px menu toggle opens a dropdown panel.

## Elevation & Depth

A hybrid: depth at rest comes from tonal layering (Terminal Black → Console Surface → Console Well) plus hairline borders. Shadows are dark ambient shadows reserved for things that float (header, menu, hero screenshot) or for hover responses on interactive cards.

### Shadow Vocabulary

- **Header float** (`0 2px 16px rgba(0,0,0,0.35)`): the fixed glass header.
- **Card lift** (`0 12px 40px rgba(0,0,0,0.45)`): hover only, on interactive cards, paired with an amber border tint and a 2px rise.
- **Menu float** (`0 12px 40px rgba(0,0,0,0.5)`): the mobile menu panel.
- **Showcase** (`0 24px 80px rgba(0,0,0,0.5)`): the hero product frame only.
- **Action lift** (`0 10px 28px rgba(0,0,0,0.4)`): the hero primary CTA only.

### Named Rules

**The Flat-At-Rest Rule.** Cards are flat at rest (border only). Shadows appear on hover or on genuinely floating layers. Never stack a resting shadow on a bordered card.

**The Gradient Glow Rule.** Ambient glows are radial or conic gradients, never `filter: blur()` layers. The single blurred conic halo behind the hero screenshot is the one exception.

## Shapes

Soft, engineered corners that grow with container size: 6px for chips and nav links, 8px for buttons, 12px for the header and small panels, 16px for cards, 24px for the CTA panel. Pills (9999px) are only for the availability badge and the tech-stack tags on the home page. Every container has a 1px Hairline border; the navy panel uses a 10% white border instead.

## Components

Engineered and minimal: thin lines, soft corners, no ornament, every element doing a job.

### Buttons

- **Shape:** gently rounded (8px), 1px transparent border reserved for variants.
- **Primary:** Console White fill with Console Surface text. 44px tall with 32px horizontal padding on hero, CTA, contact and 404; 32px tall with 12px padding in the header; 36px in the footer.
- **Subtle:** a 4% white wash with a Hairline border and Readout text. Hover raises the wash to 8% and lightens the border. On the navy panel, the Subtle Navy variant uses a 25% white border and a 5% wash.
- **Hover / Focus:** hover dims the primary fill to 90%. Focus shows a 3px Signal Amber ring at 50%, and press moves the button down 1px. All variants come from the shared `buttonVariants` (`components/ui/button-variants.ts`).
- **Icons:** trailing 16px arrows, which nudge 2px right on hover inside links.

### Chips

- **Category chip:** 8% Console White wash, uppercase 12px semibold with wide tracking, 6px corners. Sits top-left on project cards.
- **Tech chip:** Console Well fill, Readout Muted 12px text, 6px corners. Wraps in a row at the card foot.
- **Tech tag (home):** a pill with a Hairline border on Console Surface, 14px text. Hover turns the text Console White.

### Cards / Containers

- **Corner Style:** 16px.
- **Background:** Console Surface.
- **Border:** 1px Hairline; on hover the border tints to Signal Amber at 50%.
- **Shadow Strategy:** flat at rest, Card lift on hover with a 2px rise (see Elevation).
- **Internal Padding:** 24px, or 32px on the home services cards and the services detail sections.
- **Service card icon:** a 48px tile with a 5% white wash and a 1.75 stroke icon. On hover it fills Signal Amber with black glyph.

### Navigation

- **Header:** fixed 16px from the top, 48px tall, Console Surface at 80% with backdrop blur, 12–16px corners. Logo plus wordmark on the left, the compact primary button on the right.
- **Links:** 14px medium, Readout Muted. Hover and active turn them Readout. The active page gets a 2px Signal Amber underline bar and `aria-current`.
- **Mobile:** a 44px toggle opens a dropdown panel below the header with 18px links (44px rows) and a full-width primary button. It closes on navigation, Escape, or an outside tap.

### Section Tag

A 24px Signal Amber rule followed by an uppercase Label in Console White. It sits above section headlines.

### Numbered Steps

The process strip and legal sections use two-digit numbers (`01`–`04`). Process numbers are 36px Outfit in Signal Amber over a 2px Hairline top rule with a 40px amber segment. Legal numbers are small muted prefixes on H2s and TOC rows.

### Product Frame (signature)

The hero screenshot sits in a 16px-radius Console Surface frame with 8px padding and an inner black well, lifted by the Showcase shadow over a blurred amber and navy conic halo at 20% opacity. As the page scrolls, it tilts from 10° to flat via a scroll-linked animation. A floating Console Surface badge (glass, 12px radius) overlaps the top-right corner.

### Motion

- **Easing:** transitions are 200ms on color, border, and transform.
- **Hover:** interactive cards rise 2px; arrows nudge 2px.
- **Reveal:** sections fade up 1.5rem on entry using scroll-driven `animation-timeline: view()`, as progressive enhancement only.
- **Ambient:** the availability dot pings, and the CTA grid drifts on a 15s loop.
- **Reduced motion:** every looping or scroll-linked animation sits behind `prefers-reduced-motion: no-preference`.

## Do's and Don'ts

### Do:

- **Do** keep the page on Terminal Black and build depth with Console Surface, Console Well, and 1px Hairline borders.
- **Do** use Console White for every primary action, and the shared `buttonVariants` for every button-styled link.
- **Do** reserve Signal Amber for state, focus, and small emphasis marks (underlines, rules, numbers, checks).
- **Do** set headlines in Outfit 600 with -0.025em tracking and body in Work Sans with relaxed leading.
- **Do** keep motion small (2px rises, 200ms) and put any looping or scroll-linked animation behind `prefers-reduced-motion: no-preference`.
- **Do** keep text at or above Readout `/50` opacity, and secondary text at Readout Muted, which holds AA contrast.
- **Do** show real product screenshots and real repos as the visual proof.

### Don't:

- **Don't** add a light theme or light sections.
- **Don't** use stock photography, 3D characters, decorative illustration, or agency-template gradient washes.
- **Don't** use neon glows, saturated multi-color gradients, or glitch effects.
- **Don't** introduce corporate enterprise blue or any second accent hue.
- **Don't** make amber a large fill or a second primary button style.
- **Don't** use `filter: blur()` for ambient glows, gradient-clipped text, or resting shadows on bordered cards.
- **Don't** use emoji as icons; use Lucide line icons at a 1.75–2 stroke.
