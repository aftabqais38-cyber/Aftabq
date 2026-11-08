---
name: Aspire Taunsa Academic System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#5b403d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#8f6f6c'
  outline-variant: '#e4beb9'
  surface-tint: '#b91c1c'
  primary: '#93000b'
  on-primary: '#ffffff'
  primary-container: '#b91c1c'
  on-primary-container: '#ffcdc7'
  inverse-primary: '#ffb4ab'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#6e3900'
  on-tertiary: '#ffffff'
  tertiary-container: '#904d00'
  on-tertiary-container: '#ffcfab'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000b'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.025em
  label-xs:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

### Personality & Emotional Response
The design system establishes a balance between collegiate prestige and high-clarity digital utility. It serves prospective students, enrolled scholars, faculty, and guardians seeking academic rigor, credibility, and forward momentum. The visual tone must elicit confidence, institutional dignity, and pride without feeling antiquated or unapproachable.

### Design Movement & Aesthetic
A hybrid of **Modern Collegiate Editorial** and **Refined Glassmorphism**:
- Structured, content-first layouts rooted in crisp grid disciplines.
- Editorial-grade typography with sharp structural hierarchy.
- Select translucent layers, fine 1px structural hairpins, and warm amber highlights that reinforce achievement, scholarships, and academic honors.
- High contrast and deliberate negative space convey institutional transparency and digital precision.

## Colors

### Palette Strategy
- **Aspire Crimson Red (`#B91C1C`)**: The institutional anchor. Used for primary calls to action, active navigation states, brand signifiers, and high-impact declarations.
- **Trust Midnight Navy (`#0F172A`)**: The bedrock tone. Powers primary typography, deep structural backdrops, elevated headers, and solid authority components.
- **Warm Amber Honor Accent (`#D97706`)**: Reserved for academic distinctions, scholarship badges, merit trackers, awards, and premium focal highlights. Avoid general interaction uses to preserve prestige value.
- **Crisp Snow White & Surfaces (`#FFFFFF`, `#F8FAFC`, `#F1F5F9`)**: Canvas and layered panel tiers that provide maximum legibility and airy negative space.
- **Institutional Neutrals (`#64748B`, `#334155`, `#E2E8F0`)**: Calibrated for secondary metadata, subtle borders, inactive states, and accessible iconography.

### Functional Roles
- Background Base: `#F8FAFC` (Canvas), `#FFFFFF` (Surface Elevated)
- Surface Inverted: `#0F172A` with `#F8FAFC` typography
- Interactive Focus Ring: `#B91C1C` with an outer 3px ring of `#FEE2E2`
- Critical/Alert: `#DC2626`
- Success/Enrollment Open: `#059669`

## Typography

### Structural Pairings
- **Display & Section Headers (`Outfit`)**: Clean, geometric proportions that yield immediate architectural presence. Tracking is slightly tightened at large scales to preserve visual tension.
- **Long-Form Text & Interactive Utility (`Plus Jakarta Sans`)**: Humanist geometry featuring tall x-heights and open apertures to ensure high readability across academic curricula, timetables, and mobile fee portals.

### Application Rules
- Apply uppercase tracking only to `label-md` and `label-xs` (such as programmatic categories, session dates, badge markers, and semester tags).
- Never center-align editorial headings that span more than two lines.
- Preserve 1.5x leading for all `body-md` paragraph contexts to ensure reading comfort during dense course reviews.

## Layout & Spacing

### Grid Architecture
- **Desktop (≥1280px)**: 12-column responsive fluid grid, max-width bounded at `1360px`, `margin` of `3rem`, and `gutter` of `1.5rem`.
- **Tablet (768px – 1279px)**: 8-column grid with `margin-tablet` of `2rem` and `gutter` of `1.5rem`.
- **Mobile (<768px)**: 4-column dynamic grid with `margin-mobile` of `1.25rem` and `gutter-mobile` of `1rem`.

### Spacing Discipline
Spacing conforms strictly to a 4px/8px incremental rhythm:
- Use `space-xs` and `space-sm` for inline micro-interactions, badge internals, and input field paddings.
- Use `space-md` for standard component internals and adjacent icon separations.
- Use `space-lg` to separate card panels and cohesive group entities.
- Use `space-xl` and `space-2xl` to define clear, breathing separation between major page narratives and academic faculties.

## Elevation & Depth

### Atmospheric Strategy
Depth within the system communicates institutional hierarchy and functional interactivity through three distinct techniques:

1. **Academic Frosted Glassmorphism**:
   - Background: `rgba(255, 255, 255, 0.82)`
   - Backdrop Filter: `blur(12px) saturate(180%)`
   - Border: `1px solid rgba(226, 232, 240, 0.75)`
   - Applied to sticky topbars, floating admission banners, and transient quick-action docks.

2. **Ambient Multi-Layer Shadows (Light Mode)**:
   - **Level 1 (Subtle Cards & Lists)**: `0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 6px -1px rgba(15, 23, 42, 0.03)`
   - **Level 2 (Interactive Hover & Featured Programs)**: `0 10px 15px -3px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.03)`
   - **Level 3 (Modals, Portals & Drawers)**: `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`

3. **Navy Canvas Elevation (Inverted Contexts)**:
   - For nocturnal dashboards or executive footers, elevation relies on subtle surface changes (`#1E293B` sitting on top of `#0F172A`) along with 1px border lines in `rgba(255, 255, 255, 0.08)`. Never use deep drop shadows on dark backgrounds.

## Shapes

### Form Geometry
The shape system implements balanced, contemporary corners (`roundedness: 2` = 0.5rem base) to maintain an authoritative yet approachable feel.

- **Micro elements (Checkboxes, Tag chips, Table indicators)**: `0.25rem` (4px).
- **Interactive inputs and default buttons**: `0.5rem` (8px).
- **Containers, Faculty cards, Admission modules**: `1rem` (16px).
- **Hero callouts, modal shells, honor boards**: `1.5rem` (24px).
- **Badges, counter pills, and status tags**: Full pill (`9999px`) to visually separate them from structural surfaces.

## Components

### Buttons
- **Primary Institutional Action**: Solid crimson (`#B91C1C`) fill, white text, semi-bold `label-lg`, `0.5rem` border radius, padding `0.75rem 1.5rem`. Hover shifts to `#991B1B` with subtle scale transition (`transform: translateY(-1px)`).
- **Secondary / Trust Action**: Solid dark navy (`#0F172A`) fill with crisp white text. Used for administrative links and documentation.
- **Tertiary / Academic Outline**: Transparent background, `1.5px` border in `#E2E8F0`, navy text (`#0F172A`). Hover transitions to surface `#F8FAFC` with border `#CBD5E1`.
- **Prestige Action**: Deep navy fill with an amber edge highlight (`border: 1px solid #D97706`), accented by gold icons for merit lists and scholarship entries.

### Academic Badges & Chips
- **Merit / Honor Badge**: Pill-shaped (`rounded-full`), warm amber tint background (`#FEF3C7`), sharp amber boundary (`#F59E0B`), text `#92400E`, tracking `0.05em`, uppercase font (`label-xs`).
- **Departmental Chips**: Filter chips use neutral surface `#F1F5F9`, `#334155` text, without borders. When active: solid `#0F172A` with crisp white text.

### Cards & Institutional Panels
- **Program & Faculty Cards**: Background `#FFFFFF`, border `1px solid #E2E8F0`, radius `1rem`, padding `1.5rem`. Subtle top border accent (`3px solid #B91C1C` or `#D97706`) signals priority program tracks.
- **Glass Dossier Card**: Translucent white backdrop with blur, containing official signatures, merit declarations, and fee structure summaries.

### Input Fields & Search
- Surface `#FFFFFF`, border `1px solid #CBD5E1`, text `#0F172A`, placeholder `#94A3B8`.
- Height is fixed at `48px` to guarantee accessible touch targets.
- Focus State: Border color `#B91C1C` with a `3px` outer ring in `rgba(185, 28, 28, 0.15)`. Labels sit outside inputs in `label-md` bold navy.

### Checkboxes & Radios
- Size: `20px x 20px`. Border `1.5px solid #94A3B8`. 
- Active state fills with Crimson (`#B91C1C`) featuring a crisp white geometric checkmark. Focus states mirror the button focus ring.

### Domain-Specific Components
- **Notice Board Feed Item**: Structured row containing an interactive date badge (Navy block, white day, red month), followed by title and category chip.
- **Credential Stat Block**: Clean modular unit with an `Outfit` metric headline (`headline-xl`), a warm amber accent divider, and a supporting `body-sm` description.