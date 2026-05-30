---
name: Big Al Strength & Conditioning
description: A hand-painted gym sign as a website. Block color, black keylines, condensed type.
colors:
  signal-yellow: "#facc15"
  deep-signal-yellow: "#eab308"
  sky-blue: "#40bdf7"
  deep-sky: "#009be3"
  coral-orange: "#ff6748"
  brick-orange: "#bd2000"
  pool-teal: "#14b8a6"
  pale-teal: "#99f6e4"
  deep-teal: "#0f766e"
  ink-black: "#000000"
  chalk-white: "#ffffff"
typography:
  display:
    fontFamily: "Anton, Impact, Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 8vw, 5rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Anton, Impact, Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(1.875rem, 5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "0.005em"
  title:
    fontFamily: "Anton, Impact, Oswald, Arial Narrow, sans-serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.005em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Anton, Impact, Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(0.875rem, 2vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.01em"
rounded:
  none: "0px"
  button: "6px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.button}"
    padding: "8px 16px"
    width: "160px"
  button-primary-hover:
    backgroundColor: "{colors.deep-signal-yellow}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.button}"
  card-blue:
    backgroundColor: "{colors.sky-blue}"
    textColor: "{colors.chalk-white}"
    rounded: "{rounded.none}"
    padding: "24px"
  card-orange:
    backgroundColor: "{colors.coral-orange}"
    textColor: "{colors.chalk-white}"
    rounded: "{rounded.none}"
    padding: "24px"
  input-text:
    backgroundColor: "{colors.chalk-white}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  nav-bar:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.none}"
    height: "64px"
---

# Design System: Big Al Strength & Conditioning

## 1. Overview

**Creative North Star: "The Hand-Painted Gym Sign"**

This is a website that behaves like a hand-painted sign outside a neighborhood gym: saturated fields of paint blocked out and outlined in thick black, oversized condensed lettering shouting the offer, nothing precious or corporate about it. Every surface commits to one color and wears a black keyline. The energy is loud and warm at the same time, a coach who is genuinely glad you walked in, not a chain trying to upsell you.

The system is built on three moves: **block color** (each card, panel, and nav is drenched in a single brand hue), **black keylines** (a 1px ink border defines nearly every edge), and **condensed display type** (Anton, uppercase, set tight and big). Body copy stays plain and readable in Archivo so the shouting is reserved for the headings. Depth comes from the borders and color contrast, never from shadows or gradients.

It explicitly rejects the impersonal stock-photo sheen of a **corporate big-box gym**, the black-and-neon intimidation of the **hardcore bro / supplement aesthetic**, the passive pastels of a **clinical wellness/spa**, and the gradient-hero, rounded-everything sameness of a **generic SaaS landing page**. If a screen could belong to any startup, it has failed; it should look like it was painted for this gym and no other.

**Key Characteristics:**
- Block-color panels, one saturated hue per surface
- 1px ink-black keyline on nearly every edge
- Anton uppercase display type, tight 0.86 leading, set large
- Flat by default: no shadows, no gradients
- Plain, legible Archivo body so the headings carry the volume

## 2. Colors

A bright, athletic, fully-committed palette: saturated primaries blocked against ink black and chalk white. Color is structural here, not accent. Each panel picks one hue and owns it.

### Primary
- **Signal Yellow** (`#facc15`): The brand's signature. Carries the sticky nav, the mobile menu, and every primary call to action. When a visitor pictures this site, they picture this yellow.

### Secondary
- **Sky Blue** (`#40bdf7`): A full card-field color, used to drench whole service panels (e.g. "1-on-1 Personal Training") with white headings on top.
- **Coral Orange** (`#ff6748`): The companion card-field color and the background of the waitlist inquiry form. Paired with Sky Blue to differentiate side-by-side offerings.

### Tertiary
- **Pool Teal** (`#14b8a6`): A third block-color option for panels and accents, the cooler member of the trio.
- **Pale Teal** (`#99f6e4`) / **Deep Teal** (`#0f766e`): A matched pair used only for the success confirmation state (pale field, deep text), so success reads as calm and clearly "good".

### Neutral
- **Ink Black** (`#000000`): The universal keyline. Borders, the monogram disc, body text, and dividers. The structural glue of the entire system.
- **Chalk White** (`#ffffff`): Heading text on color fields, input backgrounds, and breathing space.

### Supporting tints (hover & divider depth)
- **Deep Signal Yellow** (`#eab308`): The pressed/hover state of Signal Yellow CTAs.
- **Deep Sky** (`#009be3`) / **Brick Orange** (`#bd2000`): Darker siblings used as in-card divider (`<hr>`) lines, a tone down from the panel's own color.

### Named Rules
**The One Hue Per Panel Rule.** A panel, card, or nav commits to exactly one brand color across its whole field. Never blend two brand hues inside a single surface, and never gradient between them. Differentiation between adjacent panels comes from choosing *different* solid hues (blue beside orange), not from shading one.

**The Black-Text-On-Bright Rule.** Bright fields (Signal Yellow, Pale Teal) pair with Ink Black text; deeper fields (Sky Blue, Coral Orange, Pool Teal) pair with Chalk White heading text. White-on-light is forbidden, both because it is illegible and because it breaks the WCAG AAA contrast target.

## 3. Typography

**Display Font:** Anton (with Impact, Oswald, Arial Narrow fallback)
**Body Font:** Archivo (with ui-sans-serif, system-ui fallback)

**Character:** A single-weight condensed grotesque (Anton) doing all the shouting, against a clean workhorse sans (Archivo, weights 400 to 900) doing all the reading. The pairing is athletic and poster-like: Anton is the painted lettering on the sign, Archivo is the legible fine print.

### Hierarchy
- **Display** (Anton 400, `clamp(2.5rem, 8vw, 5rem)`, line-height 0.86, uppercase): Page-title H1s, centered. The biggest voice on any page (`.ba-h1`, 40px mobile to 80px desktop).
- **Headline** (Anton 400, `clamp(1.875rem, 5vw, 3.5rem)`, line-height 0.86, uppercase): In-page section titles like "Training Offerings" (`.ba-h1-section`, 30px to 56px).
- **Title** (Anton 400, `2rem`, line-height 0.95, uppercase): Card headings and the inquiry form title (`.ba-h2-card`, `.ba-form-title`).
- **Body** (Archivo 400, `1rem`, line-height 1.6): All running copy and list items. Cap measure at 65 to 75ch; long-form blocks already constrain to `max-w-2xl`/`max-w-md`.
- **Label** (Anton 400, `clamp(0.875rem, 2vw, 1.375rem)`, uppercase, letter-spacing 0.01em): The nav wordmark lockup (`.ba-wordmark-nav`).

### Named Rules
**The Anton-Shouts-Archivo-Speaks Rule.** Anton is for headings, the wordmark, and nothing longer than a short phrase. It is always uppercase with leading near 0.86. The moment text needs to be *read* in sentences, it is Archivo. Never set a paragraph in Anton, never set a hero heading in Archivo.

## 4. Elevation

Flat by default. This system uses **no shadows and no gradients**. Depth and separation are conveyed entirely by the 1px Ink Black keyline and by the contrast between adjacent solid color fields. A blue panel sitting beside an orange panel, each outlined in black, reads as two distinct objects without any drop shadow.

The only "lift" in the system is interaction-driven color: a CTA darkens from Signal Yellow to Deep Signal Yellow on hover. Nothing rises off the page on a z-axis.

### Named Rules
**The Flat Ink Rule.** If you reach for a `box-shadow`, a blur, or a gradient to separate two things, stop: add a black keyline or change one of the two color fields instead. Shadows are forbidden as a default decoration. The painted sign has no drop shadow.

## 5. Components

### Buttons
- **Shape:** Gently rounded (6px radius / `rounded-md`), the one place softness is allowed. Fixed comfortable width (160px / `w-40`) for the primary CTA.
- **Primary:** Signal Yellow (`#facc15`) field, Ink Black text and a 1px black border, padding 8px 16px (`py-2 px-4`). Label is always action-first, e.g. "Join the Waitlist".
- **Hover / Focus:** Field darkens to Deep Signal Yellow (`#eab308`). A visible focus ring is required for keyboard users (AAA). Punchy and playful: keep the state change snappy and obvious.
- **Disabled:** 50% opacity with `not-allowed` cursor; label swaps to a progress verb ("Joining...").

### Cards / Panels
- **Corner Style:** Sharp, no radius (0px). The black keyline is the edge.
- **Background:** One brand color per card (Sky Blue, Coral Orange, or Pool Teal). Headings sit in Chalk White (`.ba-h2-card`).
- **Shadow Strategy:** None. See Elevation, the Flat Ink Rule.
- **Border:** 1px Ink Black on all sides (the global default border color).
- **Internal Padding:** 24px to 32px (`p-6` to `p-8`).
- **Divider:** In-card `<hr>` uses the panel color's darker sibling (Deep Sky inside blue, Brick Orange inside orange), inset horizontally.

### Inputs / Fields
- **Style:** Chalk White field, 1px Ink Black border, no radius (square corners), padding 4px 8px (`px-2 py-1`). Set on color-drenched form panels (Coral Orange), so the white inputs punch out clearly.
- **Focus:** `outline-none` is currently set; this must be paired with a visible custom focus indicator to meet the AAA keyboard requirement.
- **Error:** Border switches to red (`border-red-500`); message in light red below the field.

### Navigation
- **Style:** Sticky top bar, full-width Signal Yellow field, 1px black bottom keyline, 64px tall. Left lockup is the BA monogram (black disc, Chalk White Anton "BA") beside the uppercase Anton wordmark.
- **Links:** Horizontal on desktop. On mobile, a hamburger (Lucide Menu/X) toggles a stacked menu where each link is a full-width Signal Yellow row divided by black keylines.

### Signature Component: The BA Monogram
A solid Ink Black circle with "BA" set in Chalk White Anton, centered. Inline SVG (36px in nav). It is the painted logo of the gym sign; reuse it as the brand mark, never restyle it with gradients or a different typeface.

## 6. Do's and Don'ts

### Do:
- **Do** commit each panel to one solid brand hue with a 1px Ink Black keyline (the One Hue Per Panel Rule).
- **Do** set all headings, the wordmark, and short labels in Anton uppercase with ~0.86 leading; set all running copy in Archivo.
- **Do** pair bright fields with black text and deep fields with white headings, and verify every pairing against WCAG AAA (7:1 body, 4.5:1 large).
- **Do** convey depth with black borders and adjacent color contrast, keeping every surface flat.
- **Do** add a visible focus ring to every interactive element; `outline-none` alone fails the AAA keyboard requirement.
- **Do** keep one obvious next step per screen, the Signal Yellow "Join the Waitlist" CTA.

### Don't:
- **Don't** look like a **corporate big-box gym**: no impersonal stock-photo hero, no templated salesy layout.
- **Don't** drift into the **hardcore bro / supplement aesthetic**: no black-and-neon, no shirtless-flex intimidation.
- **Don't** soften into a **clinical wellness/spa**: no pastel washes, no calm-minimal low-energy tone.
- **Don't** default to a **generic SaaS landing page**: no gradient hero, no identical icon-heading-text feature-card grid, no rounded-everything.
- **Don't** use shadows, blurs, or gradients to separate elements (the Flat Ink Rule). Add a black keyline or change a color field instead.
- **Don't** gradient-fill or `background-clip: text` the headings; Anton in one solid color only.
- **Don't** blend two brand hues inside a single surface, and never set body paragraphs in Anton.
- **Don't** put white text on a bright field (white-on-yellow, white-on-pale-teal); it is illegible and fails AAA.
