# Design System Specification: Sovereign Precision

## 1. Overview & Creative North Star
The visual identity of this design system is rooted in a concept we call **"Sovereign Precision."** 

Unlike generic government portals that rely on rigid, boxed-in templates, this system adopts a high-end editorial approach. It balances the authoritative weight of defense operations with the cutting-edge fluidity of a modern hackathon. We achieve this through "The Sovereign Grid"—a layout strategy that uses intentional asymmetry, expansive white space, and subtle technical motifs (like radar grids) to suggest a space that is both highly organized and technologically advanced.

This is not a "dashboard." It is a digital command center. We move away from "Standard UI" by treating the screen as a series of layered intelligence sheets, utilizing tonal depth rather than structural lines to guide the eye.

---

## 2. Colors & Surface Logic

This system utilizes a palette of olive drabs, deep naval blues, and refined neutrals to establish a hierarchy of trust and action.

### The Color Tokens (Material Design Implementation)
*   **Primary (Defense Blue):** `#006193` – Used for mission-critical CTAs and primary branding.
*   **Secondary (Tactical Olive):** `#546344` – Used for secondary actions and identity elements.
*   **Surface (Main Background):** `#f8faf9` – A sophisticated off-white that reduces eye strain.
*   **Surface Container Tiers:** 
    *   `surface-container-low`: `#f2f4f3`
    *   `surface-container`: `#eceeed`
    *   `surface-container-highest`: `#e1e3e2`
*   **Alert (Minimal Saffron):** `#FF9933` – Reserved strictly for warnings and urgent notifications.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. To separate a sidebar from a main content area, transition from `surface` to `surface-container-low`. To isolate a card, use `surface-container-lowest` on top of a `surface-container` background.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the Surface Container scale to create "nested" depth:
1.  **Level 0 (Canvas):** `surface`
2.  **Level 1 (Sectioning):** `surface-container-low`
3.  **Level 2 (Interaction Blocks):** `surface-container`
4.  **Level 3 (High-Focus Components):** `surface-container-highest`

### Signature Textures & Glassmorphism
For floating elements (modals, dropdowns, navigation overlays), use **Glassmorphism**. Apply a semi-transparent `surface` color with a `20px` backdrop-blur. This allows the subtle radar/grid motifs of the background to bleed through, maintaining a sense of environmental continuity.

---

## 3. Typography: The Public Sans Scale

We use **Public Sans** for its utilitarian, high-legibility, and neutral characteristics—perfect for an official defense context.

*   **Display (lg, md, sm):** 3.5rem down to 2.25rem. Use these for high-impact numbers (e.g., "48 HOURS REMAINING") or hero titles. Set with tight tracking (-0.02em) to feel "heavy" and authoritative.
*   **Headline (lg, md, sm):** 2rem down to 1.5rem. Use these for major section headers.
*   **Title (lg, md, sm):** 1.375rem down to 1rem. Use for card titles and sub-sections.
*   **Body (lg, md, sm):** 1rem down to 0.75rem. Default for all intelligence text.
*   **Label (md, sm):** 0.75rem down to 0.6875rem. Always uppercase with +0.05em letter spacing for a "technical readout" feel.

**Editorial Tip:** Create contrast by pairing a `display-lg` metric next to a `label-sm` descriptor. This "Big/Small" juxtaposition is the hallmark of premium editorial design.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through **Tonal Layering**, not shadows. If a card needs to stand out, do not add a shadow immediately; instead, place a `#ffffff` (`surface-container-lowest`) card on an `#eceeed` (`surface-container`) background.

### Ambient Shadows
When a component must "float" (e.g., a primary FAB or a notification toast), use a "Defense Shadow":
*   **Blur:** 24px - 40px
*   **Opacity:** 6%
*   **Color:** `#191c1c` (on-surface)
This creates a soft, natural lift that feels like ambient light in a physical room, rather than a digital "drop shadow."

### The "Ghost Border" Fallback
If a border is required for extreme accessibility cases, use a **Ghost Border**:
*   **Token:** `outline-variant` (`#c0c7d1`)
*   **Opacity:** 15%
*   **Weight:** 1px
This provides a "suggestion" of a boundary without cluttering the Sovereign Grid.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` (`#006193`) background, `on-primary` (`#ffffff`) text. Corner radius: `0.375rem` (md).
*   **Secondary:** Solid `secondary_container` (`#d5e6be`) with `on_secondary_container` (`#596748`) text.
*   **Tertiary:** Ghost style. No background, `primary` text. Use for low-emphasis actions like "Cancel" or "View Details."
*   **Interaction:** On hover, transition the background to `primary_container` (`#1b7ab5`).

### Tactical Chips
Used for status (e.g., "Active," "Encrypted"). Use a `secondary_fixed` background with a `label-sm` bold font. Chips should be rectangular with a small `0.125rem` (sm) radius to maintain a "rugged" look.

### Input Fields
Avoid the traditional "box." Use a `surface-container-high` background with a bottom-only 2px stroke in `outline` color. On focus, the stroke should animate to `primary`.

### Data Cards
**Strict Rule:** No dividers. Separate content inside cards using 24px vertical spacing. If sub-sections are needed within a card, use a subtle background shift to `surface-container-lowest`.

### Radar Grid Motif
Apply a subtle SVG background pattern of a 40px grid or concentric circles (radar) at 3% opacity over `surface-container-low` sections. This provides the "visual soul" required for a defense-themed portal.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Negative Space:** Allow headers to breathe. A 64px or 80px top margin for headlines is encouraged.
*   **Use Tonal Shifts:** Use the difference between `#f8faf9` and `#f2f4f3` to create structure.
*   **Technical Labels:** Use `label-sm` for metadata (timestamps, coordinates, user IDs).

### Don't:
*   **Don't use 100% black text:** Always use `on-surface` (`#191c1c`) for better readability.
*   **Don't use "Round" buttons:** Stick to the `md` (0.375rem) or `sm` (0.125rem) roundedness scale. Fully rounded buttons feel too consumer-focused/soft for a defense portal.
*   **Don't use high-contrast lines:** If you feel the urge to draw a line, try adding 16px of white space instead.

---
**Director's Final Note:** 
Precision is the difference between "good" and "official." Every pixel must have a tactical reason for existing. If a component doesn't serve the Sovereign Grid or the Tonal Hierarchy, remove it.