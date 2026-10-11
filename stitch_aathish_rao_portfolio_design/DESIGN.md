---
name: Tactile Instrument
colors:
  surface: '#0d1418'
  surface-dim: '#0d1418'
  surface-bright: '#333a3f'
  surface-container-lowest: '#080f13'
  surface-container-low: '#161d21'
  surface-container: '#1a2125'
  surface-container-high: '#242b2f'
  surface-container-highest: '#2f363a'
  on-surface: '#dce3e9'
  on-surface-variant: '#bdc9cb'
  inverse-surface: '#dce3e9'
  inverse-on-surface: '#2a3136'
  outline: '#879395'
  outline-variant: '#3e494b'
  surface-tint: '#73d5e5'
  primary: '#acf2ff'
  on-primary: '#00363d'
  primary-container: '#78d9e9'
  on-primary-container: '#005e69'
  inverse-primary: '#006874'
  secondary: '#ffb688'
  on-secondary: '#512400'
  secondary-container: '#703b13'
  on-secondary-container: '#f3a776'
  tertiary: '#dfe9e5'
  on-tertiary: '#293230'
  tertiary-container: '#c3cdc9'
  on-tertiary-container: '#4e5754'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#99f0ff'
  primary-fixed-dim: '#73d5e5'
  on-primary-fixed: '#001f24'
  on-primary-fixed-variant: '#004f58'
  secondary-fixed: '#ffdbc7'
  secondary-fixed-dim: '#ffb688'
  on-secondary-fixed: '#311300'
  on-secondary-fixed-variant: '#6d3910'
  tertiary-fixed: '#dbe5e0'
  tertiary-fixed-dim: '#bfc9c4'
  on-tertiary-fixed: '#141d1b'
  on-tertiary-fixed-variant: '#3f4946'
  background: '#0d1418'
  on-background: '#dce3e9'
  surface-variant: '#2f363a'
typography:
  display-hero:
    fontFamily: Epilogue
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Epilogue
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Epilogue
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Epilogue
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Epilogue
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Epilogue
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.04em
  label-mono-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses the discipline of mission-critical artificial intelligence through the metaphor of precision industrial laboratory instrumentation. It reframes complex compute, generative models, and agent architectures as dependable, calibrated apparatus rather than opaque digital magic.

### Design Movements & Philosophy
The aesthetic fuses **Modern Technical Editorial** with **Tactile Glass Instrument** design:
- **Calibrated Machining:** Layouts adopt strict orthogonal registers, micro-grid rulers, and explicit framing reminiscent of vintage oscilloscopes and aerospace monitoring modules.
- **Translucent Chassis:** Glassmorphic enclosures reveal subtle optical depths beneath them, treating UI cards as optical panels and acrylic housings.
- **Physical Feedback:** Micro-interactions mimic high-tolerance physical gear switches: crisp snap-states, muted tactile luminescence, and calibrated data updates.

### Emotional Target
The interface evokes absolute rigor, quiet technical mastery, scientific credibility, and architectural poise.

## Colors

The palette establishes an inverted laboratory contrast: an uncompromising deep ink canvas paired with warm paper typography, balanced by precise cold and warm telemetry hues.

### Palette Architecture
- **Base Canvas (`#10171B`):** Deep ink foundation absorbing ambient glare, providing high dynamic range for illuminated metrics.
- **Primary Technical Accent (`#78D9E9`):** Electric cyan used for active states, operational signals, live latency metrics, and primary interactive nodes.
- **Secondary Telemetry Accent (`#EAA06F`):** Restrained warm amber reserved for compute loads, state warnings, physical indicators, and milestone callouts.
- **Auxiliary Muted Sage-Gray (`#A3ADA9`):** Neutralized metallic hue for chassis borders, structural graticules, secondary metadata, and axis labels.
- **High-Contrast Surface/Text (`#EDF0E9`):** Warm unbleached paper tone, ensuring editorial readability without the clinical glare of pure `#FFFFFF`.

### Surface Hierarchy
- `surface-canvas`: `#10171B`
- `surface-panel`: `#151E24` (80% opacity with backdrop blur)
- `surface-elevated`: `#1C272E`
- `border-instrument`: `rgba(163, 173, 169, 0.18)`
- `border-active`: `rgba(120, 217, 233, 0.45)`

## Typography

The type system creates an intentional friction between humanist industrial structure (`Epilogue`) and machine readout precision (`JetBrains Mono`).

### Font Roles
- **Primary & Editorial Text (`Epilogue`):** Delivers clean editorial balance with geometric undertones, avoiding the generic neutrality of modern SaaS sans-serifs. Headings use tight negative tracking to resemble milled metal plates.
- **Technical Readouts & Calibration (`JetBrains Mono`):** Applied to telemetry markers, performance statistics, system status badges, code fragments, indexes, and navigational coordinates. Rendered with uppercase styling and open tracking at smaller point sizes.

## Layout & Spacing

The layout model simulates an optical engineering canvas, governed by a rigid 12-column grid anchored by modular subdivisions.

### Grid & Alignment Rules
- **Desktop (≥ 1280px):** 12-column fluid grid, `margin-lg` (4rem), `gutter-lg` (2rem). Content bounds cap at a maximum width of 1440px to ensure terminal scanability.
- **Tablet (768px – 1279px):** 8-column fluid grid, `margin` (2rem), `gutter` (1.5rem).
- **Mobile (≤ 767px):** 4-column fluid grid, `margin-sm` (1rem), `gutter-sm` (1rem).

### Rhythmic Discipline
Section dividers incorporate hairline visual ticks and sub-grid markers at 8px increments. Spacing is strictly proportional: inner component padding uses `space-sm` to `space-md`, while external grouping relies on `space-lg` and `space-xl`.

## Elevation & Depth

Visual hierarchy uses frosted instrument lenses, hairline registration borders, and optical backlighting instead of diffuse drop shadows.

### Elevation Levels
- **Base / Substrate (`Level 0`):** `#10171B` background with faint Cartesian dot grid or hairline crosshairs rendered at 6% opacity sage-gray.
- **Instrument Housing (`Level 1`):** `rgba(21, 30, 36, 0.72)` background, `backdrop-filter: blur(16px)`, enclosed with a continuous `1px` border of `rgba(163, 173, 169, 0.16)`.
- **Raised Panel / Inspection Card (`Level 2`):** `rgba(28, 39, 46, 0.88)` with `backdrop-filter: blur(24px)`. Border illumination increases on the top edge using a gradient highlight (`rgba(237, 240, 233, 0.12)` down to `transparent`).
- **Active Telemetry State (`Level 3`):** Focused modules produce a localized edge glow via `box-shadow: 0 0 20px -4px rgba(120, 217, 233, 0.18)`, resembling an activated cathode display or illuminated bevel.

## Shapes

The interface embraces a low-radius, machined structural profile (`roundedness: 1`).

### Geometry Rules
- **Panels & Modules:** Standard radius of `0.25rem` (4px). Large chassis components scale to `0.5rem` (8px). Rounded pill shapes are prohibited to avoid the appearance of consumer mobile software.
- **Notched & Mechanical Trims:** Key display cards feature 45-degree chamfered corner cutouts or inset registration lines (`[ + ]` marks) to evoke CNC precision panels and modular instrumentation.

## Components

### Buttons & Trigger Controls
- **Primary Trigger:** Electric cyan background (`#78D9E9`), ink typography (`#10171B`), `JetBrains Mono` semi-bold 13px. Sharp 4px corner radius. On hover: shifts background to `#94E4F1` with an inner border tick.
- **Secondary / Housing Trigger:** Transparent background, `1px` border of `rgba(163, 173, 169, 0.3)`. Typography in `#EDF0E9`. On hover: border transitions to `rgba(120, 217, 233, 0.6)` and background tint to `rgba(120, 217, 233, 0.05)`.
- **System Action Button:** Embedded monospaced prefix index (e.g., `[RUN_TEST]`, `[01_PROCEED]`).

### Chips & Status Indicators
- **Telemetry Chips:** Enclosed pill-free capsules (4px radius) with monospace labels (`label-mono-sm`). Includes an illuminated 6px status LED dot: steady cyan (`#78D9E9`) for active systems, pulsing amber (`#EAA06F`) for compute-bound tasks, and sage-gray (`#A3ADA9`) for idle nodes.

### Input Fields & Terminal Prompts
- **Text Entry:** Dark recessed background (`#0D1316`), crisp 1px border (`rgba(163, 173, 169, 0.2)`). Monospace placeholder in sage-gray. Focused state activates a solid `#78D9E9` bottom edge highlight and an active block cursor.

### Cards & Case Study Enclosures
- **Instrument Modules:** Translucent chassis panels with a top metadata bar displaying project codename, commit hash, or architecture classification in `JetBrains Mono` at 10px. Micro-borders (`1px`) frame the content with technical corner brackets (`+` crosshairs).

### Checkboxes & Toggle Switches
- **Toggle Switches:** Rectangular slide channels with a solid indicator block instead of rounded pills. Switches click into place with instantaneous easing.
- **Checkboxes:** 14px squared frames with a centered, high-contrast cyan core fill when active.

### Specialized AI & Portfolio Modules
- **Latency / Model Metric Rails:** Horizontal bars showing context length, inference throughput, and precision metrics, calibrated with monospace numeric counters.
- **Architecture Flow Nodes:** Directed graph connectors styled with thin 1px dashed cyan traces, avoiding organic curves in favor of 90-degree orthogonal circuit routing.