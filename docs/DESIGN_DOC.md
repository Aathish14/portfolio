# Design Document

## 1. Visual Theme & Philosophy
- **Core Theme:** "Reliable AI systems, rendered like a tactile instrument"
- **Aesthetic Inspiration:** High-precision engineering instruments, retro-futuristic laboratory displays, tactile dark glass surfaces, and editorial typography.
- **Tone:** Technical, robust, understated, premium, and focused on systems engineering integrity.

## 2. Color Palette
The color tokens emphasize high contrast, legibility, and tactile luminosity:
- **Deep Ink (Background Primary):** `#0a0a0f`
- **Surface Elevation (Cards & Panels):** `#12121a` / `rgba(255, 255, 255, 0.04)`
- **Warm Paper (Primary Foreground / Text):** `#f5f0e8`
- **Muted Steel (Secondary Text & Borders):** `#8e8d9c` / `rgba(245, 240, 232, 0.12)`
- **Cyan Signal (Accent & Interactive Glow):** `#00e5ff`
- **Amber Warning / Instrument Indicator:** `#ffab00`

## 3. Typography
- **Font Stack:** Modern system font stack with clean grotesque fallbacks:
  `system-ui, -apple-system, BlinkMacSystemFont, "Inter", "SF Pro Text", "Segoe UI", Roboto, sans-serif`
- **Monospace Stack (for technical tokens, metrics, dates):**
  `"JetBrains Mono", "SF Mono", "Fira Code", Menlo, Consolas, monospace`
- **Hierarchy:**
  - Hero Display Title: clamp(2.5rem, 6vw, 4.5rem), letter-spacing -0.03em
  - Section Headers: clamp(1.75rem, 3.5vw, 2.5rem), letter-spacing -0.02em
  - Body Text: 1rem (16px), line-height 1.6, comfortable reading contrast
  - Technical Captions / Meta: 0.8125rem (13px), uppercase tracking +0.08em

## 4. Layout Architecture
- **Layout Paradigm:** CSS Grid and Flexbox with mobile-first responsiveness.
- **Grid Composition:** 12-column adaptive grid with generous negative space and clear section rhythm.
- **Target Breakpoints:**
  - Mobile: 390px – 767px (single-column stack, accessible tap targets)
  - Tablet: 768px – 1023px
  - Desktop: 1024px – 1440px+ (asymmetric multi-column editorial balance)
- **Whitespace:** Generous spacing units (`--space-xs` through `--space-3xl`) preventing dense clutter.

## 5. 3D Elements & Procedural Graphics
- **Central Element:** Procedural glass icosahedron built with Three.js / React Three Fiber.
- **Implementation Strategy:** Procedural geometry (`<icosahedronGeometry args={[1.6, 0]} />`) and custom transmission/physical glass material shader properties without depending on heavy external 3D asset downloads.
- **Lighting & Refraction:** Dual directional key lights with soft ambient occlusion and chromatic dispersion.
- **Fallback:** An SVG/CSS tactile instrument radar grid is rendered if WebGL fails or context is lost.

## 6. Motion & Micro-interactions
- **Scroll Behavior:** Smooth inertia scrolling orchestrated via Lenis.
- **Transitions:** Restrained entrance animations and micro-interactions powered by Motion (`motion/react`).
- **Reduced Motion Support:** All transitions check `prefers-reduced-motion: reduce` to disable smooth scrolling and replace spring animations with immediate opacity transitions.

## 7. Placeholder Assets Inventory
- **Project Screenshots:** Placeholder SVG graphics with technical wireframe vectors for the 3 featured systems:
  - The Shifting Threat
  - Cloud Cost Forecasting & Spend Anomaly Detection
  - Enterprise LLM Trust Framework
- **Sticker / Diagram Textures:** Technical vector badges and architectural nodes.
- **3D Geometry:** Procedural icosahedron mesh (no reliance on external `.gltf` / Spline dependencies).

## 8. Implemented Tokens (Phase 2)

### Final `:root` Variables
- **Surfaces:**
  - `--bg-primary: #0a0a0f`
  - `--bg-secondary: #12121a`
  - `--bg-card: #1a1a2e`
  - `--bg-elevated: #22223a`
- **Text:**
  - `--text-primary: #f5f0e8`
  - `--text-secondary: #a0998c`
  - `--text-tertiary: #6b6560`
- **Accents:**
  - `--accent-cyan: #00e5ff`
  - `--accent-amber: #ffab00`
  - `--accent-cyan-dim: rgba(0, 229, 255, 0.12)`
  - `--accent-amber-dim: rgba(255, 171, 0, 0.12)`
  - `--accent-cyan-glow: rgba(0, 229, 255, 0.25)`
- **Borders & Glass:**
  - `--border-subtle: rgba(245, 240, 232, 0.08)`
  - `--border-hover: rgba(245, 240, 232, 0.18)`
  - `--glass-bg: rgba(26, 26, 46, 0.55)`
  - `--glass-border: rgba(245, 240, 232, 0.10)`
- **Grid & Grain:**
  - `--grid-color: rgba(245, 240, 232, 0.035)`
  - `--grid-size: 32px`
  - `--grain-opacity: 0.035`
- **Typography:**
  - `--font-sans: "Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
  - `--font-mono: "JetBrains Mono", "Cascadia Code", "SF Mono", "Fira Code", Consolas, monospace`
- **Type Scale:**
  - `--fs-h1: clamp(2.5rem, 7vw, 4.75rem)`
  - `--fs-h2: clamp(1.75rem, 4vw, 2.5rem)`
  - `--fs-h3: clamp(1.1rem, 1.5vw, 1.25rem)`
  - `--fs-body: 1rem`
  - `--fs-small: 0.875rem`
  - `--fs-label: 0.72rem`
- **Spacing & Layout:**
  - `--space-section: clamp(4rem, 10vw, 8rem)`
  - `--space-gap: 1.5rem`
  - `--container-max: 1200px`
  - `--container-pad: clamp(1.25rem, 4vw, 2.5rem)`
  - `--header-h: 4rem`
- **Motion & Radii:**
  - `--ease: cubic-bezier(0.22, 1, 0.36, 1)`
  - `--dur: 0.3s`
  - `--radius-sm: 6px`
  - `--radius-md: 12px`
  - `--radius-pill: 999px`

### Responsive Breakpoints
- `768px`: Tablet column adaptation (`.project-grid` 2 cols, `.skills-grid` 2 cols)
- `1024px`: Desktop viewport (`.hero-canvas` left: 35% with linear gradient mask, `.project-grid > :first-child` spans full width, `.skills-grid` 3 cols)

### Class Name Inventory
- **Layout & Structure:** `.container`, `section`, `.section-heading`, `.section-heading.centered`, `.skip-link`
- **Header & Navigation:** `.site-header`, `.brand`, `.brand-mark`, `.site-nav`
- **Hero:** `.hero`, `.hero-canvas`, `.hero-content`, `.hero-tagline`, `.hero-intro`, `.hero-actions`, `.hero-meta`, `.btn`, `.btn-primary`
- **Typography & Labels:** `.label`, `.label-index`, `.text-primary`, `.link-inline`
- **Cards & Visuals:** `.card`, `.card-head`, `.card-index`, `.card-desc`, `.status`, `.category`, `.project-grid`, `.project-visual`, `.tags`, `.tag`
- **Experience:** `.exp-company`, `.exp-meta`
- **Skills:** `.skills-grid`, `.skill-group`
- **Education & Credentials:** `.edu-meta`, `.cred-grid`, `.credential-card`, `.credential-detail`, `.credential-date`
- **Contact & Footer:** `.contact`, `.contact-lead`, `.contact-links`, `.site-footer`
