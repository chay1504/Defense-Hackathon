---
name: Strategic Command
colors:
  surface: '#fbf8ff'
  surface-dim: '#dbd9e0'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2fa'
  surface-container: '#efedf4'
  surface-container-high: '#e9e7ee'
  surface-container-highest: '#e3e1e9'
  on-surface: '#1b1b20'
  on-surface-variant: '#454651'
  inverse-surface: '#2f3036'
  inverse-on-surface: '#f2f0f7'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4659a7'
  primary: '#00114a'
  on-primary: '#ffffff'
  primary-container: '#0a2472'
  on-primary-container: '#7c8fe1'
  inverse-primary: '#b8c4ff'
  secondary: '#005db7'
  on-secondary: '#ffffff'
  secondary-container: '#64a1ff'
  on-secondary-container: '#003670'
  tertiary: '#330900'
  on-tertiary: '#ffffff'
  tertiary-container: '#561600'
  on-tertiary-container: '#da7a59'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c4ff'
  on-primary-fixed: '#001453'
  on-primary-fixed-variant: '#2c418e'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#a9c7ff'
  on-secondary-fixed: '#001b3d'
  on-secondary-fixed-variant: '#00468c'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59d'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#793015'
  background: '#fbf8ff'
  on-background: '#1b1b20'
  surface-variant: '#e3e1e9'
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  h3:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system is built upon the principles of discipline, authority, and tactical precision. Designed specifically for a Defence Hackathon, the aesthetic balances the rigidity of institutional standards with the high-velocity energy of a competitive engineering environment. 

The style is **Corporate Modern** with a lean toward **Structural Minimalism**. It utilizes a "Command and Control" visual hierarchy where information density is high but clarity is never sacrificed. The UI should evoke a sense of mission-critical reliability, using a restricted palette and sharp geometric forms to communicate order and technical sophistication.

## Colors

The color palette is anchored by a deep navy blue, symbolizing tradition and authority. This is supported by a range of functional blues that transition from professional secondary tones to a high-visibility accent blue for interactive elements and key data points.

- **Primary (#0A2472):** Reserved for headers, primary actions, and brand-critical elements.
- **Secondary (#1565C0):** Used for supporting navigation and categorized information.
- **Accent (#2196F3):** Employed sparingly to draw focus to calls-to-action or active states.
- **Surface (#F4F7FB):** A clinical, light blue-grey used for card backgrounds to separate content modules from the crisp white page background.

## Typography

The typography system utilizes two distinct sans-serifs to establish a clear hierarchy. **Public Sans** is used for all headings to provide a neutral, institutional weight that feels official and stable. **Inter** is utilized for body copy and UI labels for its exceptional legibility at small sizes and high-density data views.

Headings should be set with tight letter spacing and bold weights to emphasize authority. Body text maintains a generous line height to ensure readability during long periods of technical assessment.

## Layout & Spacing

The design system employs a **Fixed Grid** philosophy. Content is contained within a 12-column system with a maximum width of 1280px. This ensures a controlled and disciplined reading experience across different hardware.

Spacing is based on a **4px baseline grid**. All margins and paddings must be multiples of 4 to maintain mathematical consistency. A rhythmic 24px gutter is standard between card elements, creating clear "corridors" of whitespace that contribute to a structured, organized interface.

## Elevation & Depth

This system avoids expressive shadows and soft blurs in favor of **Low-Contrast Outlines** and **Tonal Layers**. 

Depth is communicated through the use of the surface color (#F4F7FB) against the background white. Elements do not "float" in a virtual 3D space; instead, they are "inset" or "overlaid" with precision. Borders are 1px thick and use a slightly darker blue-grey (#D1D9E6) to define boundaries. Shadows, if used for dropdowns or modals, must be tight, high-opacity, and minimal (e.g., `0px 2px 4px rgba(0, 0, 0, 0.1)`), emphasizing a physical, technical document feel rather than an abstract digital layer.

## Shapes

The shape language is rigid and geometric. A standard **4px border radius** (Soft) is applied to buttons and small UI components to prevent the interface from appearing overly aggressive while maintaining a disciplined edge. Cards and larger containers should also adhere to this 4px rule. 

**Subtle Stripe Motif:** A diagonal tricolor stripe (White, Secondary Blue, Primary Blue) is applied to the top-right or top-left corner of primary banners and headers. This motif should be angled at 45 degrees and restricted to a height of 8px, serving as a "ribbon" that denotes officiality and merit.

## Components

- **Buttons:** Sharp 4px radius. Primary buttons use the deep navy (#0A2472) with white text. Ghost buttons use 1px borders in secondary blue. Active states shift to the accent blue (#2196F3).
- **Cards:** Background set to #F4F7FB with a 1px border of #D1D9E6. No shadows. Cards should have a "Header" section with a slightly darker top border to denote sections.
- **Input Fields:** Rectangular with 4px radius. 1px border becomes Primary Blue on focus. Labels use "Label-Caps" typography style for a technical, datasheet appearance.
- **Chips/Badges:** Square-edged or 2px radius. Used for "Status" or "Clearance Level." Use high-contrast background colors for immediate recognition.
- **Lists:** Data-heavy tables and lists should use alternating row stripes (Zebra striping) in #F4F7FB to maintain horizontal scanning accuracy.
- **Banners:** Top-level banners must include the diagonal tricolor stripe motif as a subtle background element or border accent to reinforce the hackathon's official identity.