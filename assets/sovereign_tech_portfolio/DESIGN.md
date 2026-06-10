---
name: Sovereign Tech Portfolio
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#bfcdff'
  on-tertiary: '#082b72'
  tertiary-container: '#97b0ff'
  on-tertiary-container: '#254188'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#27438a'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
  background-base: '#0B0B0B'
  surface-elevated: '#181818'
  text-muted: '#A0A0A0'
  border-subtle: rgba(255, 255, 255, 0.08)
  status-success: '#6FAF75'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  section-v: 120px
  section-v-mobile: 80px
  container-max: 1400px
  container-preferred: 1200px
  gutter: 32px
  stack-lg: 48px
  stack-md: 24px
  stack-sm: 12px
---

## Brand & Style

The design system is engineered to project **Modern Luxury Technology**. It moves away from the typical "developer" aesthetic of neon accents and frantic animations, favoring the disciplined restraint of premium brands like Porsche or Apple. The target audience—CEOs, hospitality executives, and business owners—must perceive the platform as a tool for high-stakes business transformation.

The visual style is **Minimalist / Corporate Modern**. It prioritizes precision and structure over decorative flair. Every element exists to signal authority, trust, and business-minded problem solving. The environment is dark, quiet, and expansive, allowing the "Gold" accents to function as beacons for high-value conversions.

**Design Principles:**
- **Timelessness over Trends:** Reject parallax, particle systems, or glassmorphism in favor of solid surfaces and perfect alignment.
- **Architectural Spacing:** Use generous whitespace to suggest that the service is premium and unhurried.
- **Outcome-Driven Visuals:** Focus on clean mockups and process visualizations that emphasize business results rather than code.

## Colors

The color palette is rooted in a deep, prestigious dark mode. The primary background (`#0B0B0B`) provides a "void" that eliminates distraction, while the secondary and elevated surfaces create subtle depth without relying on heavy shadows.

- **Primary (Gold):** Reserved exclusively for conversion points, primary buttons, and critical brand highlights. It represents value and excellence.
- **Neutral (Off-White):** Used for primary typography to ensure high legibility while avoiding the harshness of pure white against a dark background.
- **Borders:** Extremely subtle. Use `rgba(255, 255, 255, 0.08)` to define structure without breaking the visual flow of the dark surfaces.

## Typography

The typographic hierarchy utilizes **Hanken Grotesk** (serving as a precise alternative to General Sans/Satoshi) for headlines to convey a modern, sharp, and engineered feel. **Inter** is used for body text and labels to maintain a professional, utilitarian clarity.

- **Headlines:** Should always feel bold and confident. Use tight letter-spacing on larger sizes to create a "locked-in" professional look.
- **Body Text:** Aim for high readability. Use the `text-muted` color for secondary descriptions to maintain the hierarchy.
- **Labels:** Use uppercase with generous letter-spacing for section overlines (e.g., "01 DISCOVERY") to reinforce the structured process.

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** model. Content is centered within a 1200px to 1400px container to create a focused, editorial reading experience. 

- **Section Breathing Room:** Every major section must have a minimum of 120px vertical padding (80px on mobile). This whitespace is not "empty"—it is a signal of luxury and confidence.
- **Rhythm:** Use a consistent 8px/12px base unit for internal component spacing. 
- **Consistency:** Align elements strictly to the grid. Avoid staggered or "masonry" layouts that feel chaotic.
- **Mobile Reflow:** Maintain 24px side margins on mobile to ensure content does not touch the screen edges.

## Elevation & Depth

This design system uses **Tonal Layers** rather than heavy drop shadows to communicate hierarchy.

- **The Base:** The deepest layer is the `#0B0B0B` background.
- **Secondary Surfaces:** Used for cards or section grouping, the `#111111` surface provides a subtle lift.
- **Elevated Surfaces:** Navigation bars and active card states use `#181818`.
- **Outlines:** Use the `border-subtle` (`rgba(255,255,255,0.08)`) for all containers. 
- **Interaction:** Hover states should use a "Smooth Hover Lift"—a subtle Y-axis translation (e.g., -4px) and a very soft, low-opacity shadow to simulate a physical lift without breaking the minimalist aesthetic.

## Shapes

The shape language is **Soft (Level 1)**. Elements like buttons and cards use a 4px (0.25rem) corner radius. This choice strikes a balance between the aggressive "sharp" edges of brutalism and the overly "friendly" roundedness of consumer SaaS. It feels engineered and precise.

- **Cards:** 8px (0.5rem) radius.
- **Buttons:** 4px (0.25rem) radius for a substantial, block-like feel.
- **Inputs:** 4px (0.25rem) radius.

## Components

### Buttons
- **Primary:** Gold background (`#D4AF37`), black text. Substantial padding (16px top/bottom, 32px left/right). No border.
- **Secondary:** Transparent background, `border-subtle` outline, off-white text.
- **Interaction:** Transition speed 300ms. On hover, the primary button should slightly deepen in tone; secondary should gain a subtle white background at 5% opacity.

### Cards
- **Structure:** Solid `#111111` background with a 1px `border-subtle`. 
- **Spacing:** Minimum 40px internal padding. 
- **Content:** Typography-driven. Use "Label-Caps" for categories and "Headline-MD" for titles.

### Input Fields
- **Style:** Dark background (`#181818`), subtle border. 
- **Focus State:** Border color changes to Gold (`#D4AF37`) with a 0px spread focus ring.

### Lists & Process Steps
- **Visuals:** Use large, low-opacity numbers (e.g., 01, 02) in Gold or Muted Text to guide the client through the "Journey" sections.

### Navigation
- **Behavior:** Sticky header with a background blur (`backdrop-filter: blur(10px)`) and a bottom border of `border-subtle`. Keep navigation links minimal and professional.