# Design System Document: Architectural Precision

## 1. Overview & Creative North Star
**Creative North Star: "The Sovereign Blueprint"**
This design system rejects the cluttered, "tactical" aesthetic often associated with defense. Instead, it embraces a high-end editorial philosophy that mirrors the precision of aerospace engineering and the clarity of advanced intelligence. We prioritize structured efficiency and a "layered-glass" depth model.

The goal is to create a digital environment that feels authoritative and efficient. We achieve this by moving from expansive editorial layouts to a more balanced, "Normal" spacing density that allows content to command attention through clear typographic hierarchy and tonal precision.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, institutional royal blue (#1A56DB), balanced by a tech-forward cyan (#0EA5E9) and a light, sophisticated tertiary accent (#8bb9f9).

### The "No-Line" Rule
To maintain a premium, modern feel, **1px solid borders are prohibited for sectioning.** Boundaries between major content blocks must be defined solely through background color shifts.
*   **Hero Section:** `surface`
*   **Secondary Content:** `surface-container-low`
*   **Feature Callouts:** `surface-container`

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use tonal layering to define importance:
1.  **Base Layer:** `surface` – The primary canvas.
2.  **The Nested Container:** When placing a card on a `surface-container-low` section, use `surface-container-lowest`. This creates a "natural lift" without a drop shadow.
3.  **The "Glass & Gradient" Rule:** Main CTAs and high-impact headers should utilize a subtle linear gradient from `primary` (#1A56DB) to a lighter tonal variant at a 135-degree angle. This adds "soul" and prevents the flatness common in lower-end systems.

---

## 3. Typography
We use a dual-typeface system to balance innovation with authority. **Manrope** is used for high-impact display and headlines, offering a geometric, modern tech feel. **Inter** is used for UI elements and body copy for maximum legibility.

*   **Display (Manrope):** Use `display-lg` (3.5rem) for hero statements with a tight `-2%` letter spacing. This creates a bold, editorial "masthead" look.
*   **Headlines (Manrope):** Use `headline-lg` (2rem) for section headers. Ensure there is standard vertical margin to allow the headline to be clearly distinguished.
*   **Body (Inter):** Use `body-lg` (1rem) for general content. Set line-height to `1.5` to ensure high readability for technical briefs.
*   **Labels (Inter):** Use `label-md` (0.75rem) in All Caps with `+5%` letter spacing for technical metadata or small eyebrow titles.

---

## 4. Elevation & Depth
Depth is not a shadow; it is a relationship between tones.

### Tonal Layering Principle
Avoid traditional structural lines. Instead, "stack" the surface tiers.
*   **Primary Card:** Use `surface_container_lowest` (#ffffff) sitting on `surface_container_low`. 
*   **Ambient Shadows:** If a floating element (like a modal) is required, use a shadow with a 40px blur and 4% opacity. The shadow color must be a tinted version of `on_surface` rather than pure black to mimic natural light diffraction.

### The "Ghost Border" Fallback
In rare cases where accessibility requires a border (e.g., input fields), use a **Ghost Border**: The `outline_variant` at 20% opacity. Never use 100% opaque borders for decorative purposes.

### Glassmorphism
For floating navigation bars or contextual overlays, use `surface_container_lowest` at 80% opacity with a `20px` backdrop-blur. This integrates the component into the environment.

---

## 5. Components

### Buttons
*   **Primary:** Solid fill using `primary` (#1A56DB), `on_primary` text, `1` (subtle) roundedness. No border.
*   **Secondary:** `surface_container_highest` fill with `primary` text. This provides a soft, sophisticated alternative to the "outline" button.
*   **Tertiary:** Text-only with an underline that appears on hover, utilizing the `tertiary` (#8bb9f9) color for a modern, high-tech highlight.

### Chips (Badges)
*   **Selection Chips:** Use `secondary_container` with `on_secondary_container` text. High contrast, technical vibe using the secondary blue (#0EA5E9).
*   **Shape:** Use `full` (9999px) roundedness to contrast against the subtler `1` (subtle roundedness) corners of cards and buttons.

### Inputs
*   **Style:** `surface_container_low` background with a bottom-only Ghost Border (2px). Labels should be in `label-md` style, positioned 8px above the field.
*   **State:** On focus, the bottom border transitions to `primary` (#1A56DB) with a subtle glow.

### Cards & Lists
*   **Rule:** Forbid the use of divider lines.
*   **Execution:** Use standard vertical spacing (based on spacing level 2) to separate list items. For cards, use background shifts (`surface_container_low` against a `surface` background) to define the container.

### Innovative Component: The "Data-Strip"
For a defense hackathon, we need to display technical data (prizes, dates, tracks). Use a full-width `surface_container_highest` bar with `label-sm` text elements, spaced using "Justified" alignment to mimic a technical instrument panel.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use consistent vertical padding (e.g., 64px-80px) between sections to maintain a professional, organized layout.
*   **Do** use `tertiary` (#8bb9f9) for accents that require a tech-forward, lighter visual weight.
*   **Do** use `secondary` (#0EA5E9) for interactive "tech" elements like links or filter icons to differentiate from "action" items.

### Don't:
*   **Don't** use amber, yellow, or red for anything other than critical system errors.
*   **Don't** use "Tactical" patterns like carbon fiber, stencils, or camouflage.
*   **Don't** use heavy drop shadows. If it looks like it's "floating" too much, pull it back into the surface tiers.
*   **Don't** use 1px dividers. If you feel the need to separate, use consistent empty space instead.