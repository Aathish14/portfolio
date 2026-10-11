# HAOQI-inspired portfolio: frontend build guide

This folder is an original, runnable portfolio starter based on the public technical breakdown **“Inside HAOQI.DESIGN: Letting DOM and WebGL Share a Retro-Futurist Stage”** by Haoqi Wen, published on Codrops on August 15, 2026. It is not HAOQI.DESIGN's source code or a pixel-perfect clone.

For a close visual and interaction recreation, follow [REPRODUCTION-GUIDE.md](./REPRODUCTION-GUIDE.md).

For staged copy-ready prompts tailored to Aathish’s resume, see [BUILD-PROMPTS.md](./BUILD-PROMPTS.md).

## Is Figma really used?

**Yes.** The image provided with this project shows a “Technologies & Tools” tag list that includes Figma, Next.js, WebGL, 3D, scrolling, gallery, and UI design. Those tags alone are not proof of implementation details. The creator's technical breakdown independently confirms that Figma was used to draw colorful sticker artwork for the WebGL scene.

The stickers sit behind the 3D glass lettering so they can appear inside its refraction. The described asset path is:

1. Draw a small set of sticker illustrations in Figma.
2. Export them as transparent PNGs.
3. Pack the images into one canvas texture atlas.
4. Render the stickers as instances of one plane mesh, using per-instance UV rectangles and aspect ratios to select each atlas image.
5. Animate instance positions and lifetimes on the CPU; the WebGL framebuffer samples the stickers behind the glass.

This makes Figma an **asset-design tool**, not the frontend runtime. Next.js/React, CSS, and WebGL render the actual site. The write-up says the central 3D “hello” geometry was made in Spline and exported as GLTF; Three.js supplies its lighting and glass shader.

## What the public write-up confirms

| Role | Technology / technique |
| --- | --- |
| App and semantic content | Next.js + React |
| Layout and responsive project gallery | DOM + CSS Grid |
| Smooth scrolling | Lenis |
| Interface transitions | Motion |
| 3D rendering | Three.js through React Three Fiber (R3F) and Drei |
| Glass and image effects | Custom shaders, framebuffer (FBO), and post-processing |
| 3D lettering/model authoring | Spline, exported as GLTF |
| Sticker illustration | Figma, exported as PNG assets |
| Typography | TikTok Sans |

The important architectural choice is to use DOM for readable, accessible layout and WebGL for effects that are difficult to express in ordinary CSS. The creator also describes mirroring DOM project-card rectangles into WebGL, using a shared rectangle cache and rendering only nearby images.

### Scroll synchronization

Lenis and R3F must not run independent animation-frame loops if WebGL needs the current Lenis scroll value. The described solution disables Lenis's automatic RAF, advances Lenis from R3F's `addEffect`, and lets WebGL read a shared scroll snapshot during `useFrame`.

This starter already follows that core pattern:

- `components/smooth-scroll.jsx` disables Lenis auto-RAF and advances it through R3F's frame loop.
- `lib/scroll-bus.js` stores the latest scroll position and progress.
- `components/hero-scene.jsx` reads the shared snapshot while updating the WebGL scene.

The starter's bus is intentionally smaller than the production implementation described in the article. It does not include the full velocity, direction, viewport, DOM-rectangle, or pointer snapshots.

## What “exact frontend code” means here

The public article is a technical case study, not a downloadable application repository. It documents the stack and selected techniques, but does not provide the full production source tree or its lockfile. Therefore, nobody can reliably reproduce the exact deployed code or claim the starter's dependency versions match the original site.

The complete frontend code available in this workspace is the original starter in this folder:

| File | Purpose |
| --- | --- |
| `app/page.jsx` | Page structure, navigation, project cards, and Motion transitions |
| `app/globals.css` | Responsive layout, type, project artwork, and reduced-motion styles |
| `app/layout.jsx` | App shell and page metadata |
| `components/smooth-scroll.jsx` | Lenis provider driven by the R3F frame loop |
| `components/hero-scene.jsx` | R3F canvas, procedural glass-like shader orb, and post-processing |
| `lib/scroll-bus.js` | Shared Lenis scroll snapshot |
| `package.json` | Starter scripts and pinned dependencies |

The current hero is a procedural shader orb, not the original Spline model. The starter does not include the original Figma stickers, GLTF, project photography, or production glass/FBO shaders. Those assets and implementation details are not published as a complete source bundle.

## Build a similar one quickly

### 1. Run the starter

From this folder:

```sh
npm install
npm run dev
```

Open `http://localhost:3000`. Replace the sample projects and `hello@example.com` in `app/page.jsx` before publishing.

### 2. Design the page in Figma

Use Figma to establish the visual system—not to export the whole page as one image. Create frames for desktop and mobile, define type sizes and colors, and design the project-card artwork and sticker illustrations. Keep text, navigation, and project details as real HTML in the app so they remain responsive, selectable, accessible, and linkable.

For sticker assets, draw on transparent backgrounds, keep a consistent visual style, leave a little transparent padding, and export PNGs at an adequate resolution. Start with a handful of stickers rather than a large particle library.

### 3. Build the DOM layer first

Make the header, hero copy, project grid, about section, and contact links work with ordinary HTML and CSS. Keep CSS Grid in charge of responsive card placement. Add transparent image placeholders with React refs where a WebGL effect needs to line up with a card. Do not make the canvas the only way to read or navigate the portfolio.

### 4. Add the WebGL scene

Use the existing `components/hero-scene.jsx` as the starting point. It already creates an R3F canvas, shader material, Drei helpers, and a post-processing chain. For a Spline model, export a lightweight GLTF/GLB, place it under `public/models/`, and load it with Drei's `useGLTF`:

```jsx
import { useGLTF } from "@react-three/drei";

function HelloModel() {
  const { scene } = useGLTF("/models/hello.glb");
  return <primitive object={scene} />;
}
```

Use the model for geometry; implement the refraction, dispersion, fresnel rim, tint, and lighting in Three.js materials/shaders. A convincing glass effect needs a scene texture to refract, so the original approach renders the background into an FBO before drawing the glass. Keep the glass out of the FBO pass to avoid sampling itself.

### 5. Turn Figma stickers into WebGL instances

Load the exported PNGs, draw them into separate cells on a single canvas, and create one `CanvasTexture`. Keep each cell's UV rectangle and aspect ratio. Create one plane geometry/material and an `InstancedMesh`; update each instance transform and its UV-rectangle attributes instead of creating one mesh and texture per sticker. Flip the atlas V coordinate when translating from canvas top-left coordinates to WebGL UV coordinates, and leave a small gutter between atlas cells to avoid texture bleeding.

Keep the sticker layer behind the glass model and inside the FBO's sampled scene. This is the part that makes colored sticker artwork appear refracted through the glass rather than pasted over it.

### 6. Keep DOM cards and WebGL aligned

Measure each placeholder with `getBoundingClientRect()` and convert its viewport rectangle into normalized canvas coordinates. For a viewport of width `W` and height `H`, the basic conversion is:

```js
const rect = element.getBoundingClientRect();
const normalizedRect = {
  x: rect.left / W,
  y: 1 - rect.bottom / H,
  width: rect.width / W,
  height: rect.height / H,
};
```

Cache rectangles centrally; do not make every card independently read layout on every frame. Update the cache after resize and scroll, account for the scroll delta, and skip WebGL images that are outside or far from the viewport. Use the DOM rectangle as a shader uniform so the canvas image stays aligned when CSS Grid changes columns or card sizes.

### 7. Finish motion and performance

Use Motion for DOM entrances and navigation transitions, and keep WebGL effects in the shared R3F loop. Honor `prefers-reduced-motion`, cap device pixel ratio, provide a static fallback, and disable expensive effects when they are offscreen. Test the project grid at mobile widths before adding more shader passes.

## Starter dependencies

The starter pins versions in `package.json` for reproducible installation. They are choices for this new starter—not verified versions from HAOQI.DESIGN, whose lockfile is not public. The starter uses Next.js, React, Lenis, Motion, Three.js, R3F, Drei, and `@react-three/postprocessing`.

## A realistic scope note

A quick first pass can establish the responsive portfolio, smooth scroll, one 3D centerpiece, and simple project reveals. The original site's full treatment—custom refraction, dispersion, a DOM-mirrored WebGL gallery, sticker atlas, and custom post-processing—is substantially more work. In the creator's account, the site evolved over roughly three to five months of spare-time work.