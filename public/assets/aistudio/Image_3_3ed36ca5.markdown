---
name: Architectural Editorial
colors:
  surface: '#fdf9f1'
  surface-dim: '#dddad2'
  surface-bright: '#fdf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3eb'
  surface-container: '#f1ede5'
  surface-container-high: '#ece8e0'
  surface-container-highest: '#e6e2da'
  on-surface: '#1c1c17'
  on-surface-variant: '#44474d'
  inverse-surface: '#31302b'
  inverse-on-surface: '#f4f0e8'
  outline: '#74777e'
  outline-variant: '#c4c6cd'
  surface-tint: '#4e5f79'
  primary: '#001126'
  on-primary: '#ffffff'
  primary-container: '#14263d'
  on-primary-container: '#7c8da9'
  inverse-primary: '#b6c8e5'
  secondary: '#7a5826'
  on-secondary: '#ffffff'
  secondary-container: '#fecf92'
  on-secondary-container: '#795725'
  tertiary: '#12100b'
  on-tertiary: '#ffffff'
  tertiary-container: '#272520'
  on-tertiary-container: '#908c84'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#b6c8e5'
  on-primary-fixed: '#091c33'
  on-primary-fixed-variant: '#374860'
  secondary-fixed: '#ffddb3'
  secondary-fixed-dim: '#ecbf83'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#5f4110'
  tertiary-fixed: '#e8e2d9'
  tertiary-fixed-dim: '#cbc6bd'
  on-tertiary-fixed: '#1d1b16'
  on-tertiary-fixed-variant: '#494640'
  background: '#fdf9f1'
  on-background: '#1c1c17'
  surface-variant: '#e6e2da'
typography:
  display-xl:
    fontFamily: Bodoni Moda
    fontSize: 96px
    fontWeight: '400'
    lineHeight: 100px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Bodoni Moda
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 70px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 34px
    letterSpacing: 0em
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  chapter-numeral:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.04em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 30px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Manrope
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.18em
  label-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
spacing:
  gutter: 2rem
  margin: 4rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.5rem
  space-lg: 2.5rem
  space-xl: 4rem
---

## Brand & Style

This design system establishes an architectural, gallery-grade visual language tailored for premium property development, real estate curation, and structural storytelling. Moving away from standard SaaS grids and generic two-column real estate templates, it treats digital surfaces like archival broadsheets and architectural monographs. 

The aesthetic marries bold scale, classical restraint, and tactical negative space:
- **Atmosphere:** Grounded, stately, tranquil, and deeply tactile. It channels physical construction—honed stone, deep tinted glass, warm plaster, and brushed brass.
- **Visual Cadence:** Asymmetrical editorial chapters, staggered visual anchors, oversized architectural sequence numerals, and cinematic full-bleed visual planes that command contemplation.
- **Character:** Authoritative without sterile corporate coldness. The design communicates institutional permanence, craftsmanship, and trust ("Happiness in every nook & corner").

## Colors

The palette balances the structural gravitas of deep maritime navy with tactile mineral substrates and warm metallic accents:

- **Midnight Navy (`#14263D`):** The primary brand field. Used for header mastheads, formal dark editorial bands, high-contrast framing panels, and primary interactive typography.
- **Warm Ivory (`#F4F0E8`):** The overarching light canvas. Evokes natural lime-plaster walls and uncoated rag paper, eliminating digital glare while grounding all imagery.
- **Soft Chalk (`#FBF9F4`):** Elevated container surfaces, architectural inset cards, and light modal backgrounds that softly step forward from the Ivory canvas.
- **Muted Antique Gold (`#A9824C`):** The singular accent tone derived from the structural spire and insignia in the identity. Reserved for hairline rules, section metadata badges, active navigational pips, and deliberate architectural accents.
- **Ink (`#20252B`):** Deep charcoal tone for body typography on light canvases to preserve reading comfort over pure optical black.
- **Warm Stone (`#77736C`):** Subordinate editorial metadata, chapter captions, architectural dimensions, and secondary labels.
- **Quiet Line (`#D9D2C6`):** Precision 1px structural framing rules, dividers, and matrix outlines.

## Typography

The type system balances classical Italian display serifs with modernist geometric sans-serif precision:

- **Display & Headlines:** Set in Bodoni Moda (serving as the high-contrast architectural serif counter to Instrument Serif). It brings editorial drama, razor-sharp hairlines, and architectural stature. Display titles feature controlled negative letter tracking to read as cohesive sculptural units.
- **Body & Captions:** Set in Manrope (light weight `300` and regular `400`), introducing breathing room, effortless legibility, and architectural clarity.
- **Editorial Sub-rules & Chapters:** Chapter indexes and section categories utilize `label-caps`—strictly uppercase, wide tracked (`0.18em`), paired with oversized single-digit numerals (`chapter-numeral`) that sit beside architectural vignettes.

## Layout & Spacing

The structural layout abandons cramped component clustering in favor of asymmetric editorial pacing:

- **Grid Discipline:** A 12-column asymmetric fluid grid structured around broad columns and deliberate white voids. Key content frequently occupies 5-to-7 column offsets, leaving opposing spans open for generous canvas margins.
- **Rhythm & Bleed:** Full-width photographic panels cycle alongside framed offset vignettes. Negative space is functional—allowing architectural scale to breathe unhindered.
- **Vertical Hierarchy:** Section intervals use massive vertical breaks (`space-xl` scaled dynamically up to `8rem` on desktop screens) to signal chapter transitions.
- **Adaptive Breakpoints:**
  - *Desktop (≥1200px):* Full 12-column layout with offset visual alignments, large margins (`4rem`), and side-by-side photographic juxtaposition.
  - *Tablet (768px - 1199px):* 8-column layout; gutter compresses to `1.5rem`, margins compress to `2rem`.
  - *Mobile (<768px):* 4-column single-column flow; outer margins drop to `1.25rem`. Display numerals scale down into header lockups without breaking editorial cadence.

## Elevation & Depth

This design system avoids synthetic drop shadows, plastic blurs, and heavy material elevations. Depth is established purely through physical, architectural principles:

- **Surface Layering:** Stacking Soft Chalk (`#FBF9F4`) planes over Warm Ivory (`#F4F0E8`), framed against full-width Midnight Navy (`#14263D`) structural bands.
- **Quiet Outlines:** Delicate 1px outlines in Quiet Line (`#D9D2C6`) define bounding boxes, architectural drawings, and floating stat callouts.
- **Photographic Insets:** Images sit cleanly flush or cast an imperceptible ambient presence using a zero-offset, ultra-diffused atmospheric shade (`box-shadow: 0 20px 48px rgba(20, 38, 61, 0.05)`).
- **Dark Mode / Dark Panels:** In Midnight Navy blocks, depth is rendered through razor-thin borders in Muted Antique Gold (`#A9824C` at 30% opacity) and tonal surface shifts to `#1A304D`.

## Shapes

The shape philosophy is strictly architectural and monolithic:

- **Edge Sharpness:** Radii are defined at `0` (Sharp, 0px). Every card, modal, photographic frame, input field, and button terminates in crisp, disciplined 90-degree corners.
- **Structural Integrity:** Elements reference stone masonry and structural steelwork. Radiused corners are forbidden to maintain an unapologetically editorial, high-end look.
- **Geometry:** Architectural accents utilize pure vertical and horizontal rules, delicate squares, and circular accent pips solely as active status dots or ornamental period marks.

## Components

### Buttons & Navigation
- **Primary Editorial Button:** Sharp rectangular perimeter, filled Midnight Navy (`#14263D`), text in Soft Chalk (`#FBF9F4`) set in uppercase tracking (`Manrope`, 12px, weight 500, letter spacing `0.15em`). Minimal padding: `14px 28px`. Hover shifts background to a deep tint with a subtle 1px inner gold border.
- **Ghost Architectural Button:** 1px hairline border in Midnight Navy or Quiet Line. No fill. Hover transitions background to Warm Ivory or Midnight Navy with inverse text.
- **Minimal Text Link:** Underlined with a 1px baseline rule spaced 4px below the text, rendered in Muted Antique Gold (`#A9824C`).

### Cards & Chapter Paneling
- **Editorial Factsheet Cards:** Set on Soft Chalk (`#FBF9F4`) with a 1px Quiet Line border. Header contains an oversized Bodoni numeral (`01`, `02`) in Midnight Navy or Antique Gold, followed by a light body text description and a delicate horizontal rule.
- **Gallery Inset Cards:** Photography occupies 100% of the upper frame with zero inner padding. Text metadata sits below in a dedicated padded panel (`space-md`), creating a gallery museum placard feel.

### Form Inputs & Fields
- **Input Fields:** Unenclosed bottom-border style or fully enclosed thin hairline boxes (`1px solid #D9D2C6`). Background is completely transparent or Soft Chalk. Placeholder text in Warm Stone (`#77736C`). Focused state transitions bottom border to Antique Gold (`#A9824C`) with zero ring or glow.

### Chips & Badges
- **Status Indicators:** Rectangular blocks without rounded caps. 1px gold or navy border, uppercase tracked typography (`label-caps`), padding `6px 12px`. A solid 4px square or circular pip indicates live availability or development phases.

### Header & Brand Masthead
- **Brand Mark Integration:** Official mark sits flush left or centered in the top bar. Midnight Navy emblem lockup with "ira PROMOTERS" typeset cleanly, anchored by the tagline "Happiness in every nook & corner" in secondary contexts.
- **Navigation Ribbon:** Minimalist top bar with 1px bottom border in Quiet Line or transparent overlay on hero visual planes. Clean typographic links spaced with wide intervals (`space-lg`).