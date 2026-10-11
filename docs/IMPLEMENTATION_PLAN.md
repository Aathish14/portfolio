# Implementation Plan

## Overview
This roadmap organizes the development of the Aathish Rao A. B. portfolio into 7 distinct phases, targeting completion in approximately 4.5 hours from session start.

---

### Phase Breakdown & Time Estimates

| Phase | Description | Estimated Time | Key Deliverables |
|---|---|---|---|
| **Bootstrap** | Session initialization, environment audit, documentation | 15 min | PRD, Design Doc, Implementation Plan, Progress Tracker, Timestamp Log |
| **P1: Content** | Structure layout, semantic HTML, resume data integration | 45 min | `lib/project-data.js`, `app/page.jsx`, `app/layout.jsx` |
| **P2: Art Direction** | Design tokens, CSS Grid architecture, typography, colors | 45 min | `app/globals.css`, tactile glass styling, responsive grid |
| **P3: Assets** | Technical SVG diagrams, card assets, link metadata | 30 min | Vector schematics for 3 projects, favicon, manifest |
| **P4: Hero 3D** | Three.js / R3F procedural glass icosahedron, lighting | 45 min | `components/hero-scene.jsx`, shader tuning, WebGL fallback |
| **P5: Gallery** | Project showcase, interactive card inspection, filtering | 45 min | Project card components, modal/detail inspection view |
| **P6: Motion** | Lenis smooth scroll integration, Motion transitions | 30 min | `components/smooth-scroll.jsx`, reduced-motion safeguards |
| **P7: QA & Polish** | Linting, build verification, responsive & accessibility audits | 30 min | Successful production build, 1440×900 and 390×844 validation |
| **TOTAL** | Complete end-to-end execution | **~4.5 hours** | Production-ready personal portfolio |

---

### Phase Descriptions

#### Phase 1: Content (45 min)
- Populate `lib/project-data.js` verbatim with facts from the Fact Sheet (experience at White And Box, 3 projects, skills, education, credentials, verified social links).
- Assemble semantic Next.js structure in `app/page.jsx` with proper heading hierarchy (`h1`, `h2`, `h3`).
- Ensure no invented facts or phone numbers are introduced.

#### Phase 2: Art Direction (45 min)
- Implement CSS design tokens in `app/globals.css` matching the `#0a0a0f` deep ink, `#f5f0e8` warm paper, `#00e5ff` cyan, and `#ffab00` amber palette.
- Set up responsive 12-column layout with flexible CSS Grid.
- Configure typographic hierarchy with clean system font stacks.

#### Phase 3: Assets (30 min)
- Create bespoke SVG technical wireframes and schematic diagrams for the three core projects.
- Wire up external repository links with `target="_blank" rel="noopener noreferrer"`.
- Ensure all SVG graphics render crisply without external image CDN dependencies.

#### Phase 4: Hero 3D (45 min)
- Build `components/hero-scene.jsx` utilizing `@react-three/fiber` and `@react-three/drei`.
- Create a procedural glass icosahedron with physical transmission and subtle rotational inertia.
- Provide a responsive Canvas wrapper that gracefully unmounts or displays a 2D radar vector when WebGL is unavailable.

#### Phase 5: Gallery (45 min)
- Build the project grid showcase component displaying project architecture, tools, and GitHub repositories.
- Add hover interactions, technical specification tags, and clear repository navigation.

#### Phase 6: Motion (30 min)
- Set up Lenis smooth scrolling in `components/smooth-scroll.jsx`.
- Implement staggered reveal animations using `motion/react`.
- Enforce accessibility checks with `@media (prefers-reduced-motion: reduce)` to disable heavy animations for sensitive users.

#### Phase 7: QA (30 min)
- Execute `npm run build` and resolve all TypeScript/React/Turbopack warnings.
- Validate layout stability across 1440×900 desktop and 390×844 mobile viewports.
- Confirm all external links, email links, and credentials conform strictly to the immutable Fact Sheet.
