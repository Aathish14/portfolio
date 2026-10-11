# HAOQI.DESIGN close-recreation guide

This guide is an implementation brief for building a close visual and interaction recreation from the public site and its creator-written Codrops case study. It is not the original source code, a pixel-exact specification, or a bundle of the original artwork. The public article explains architecture and selected effects, but does not publish the complete production repository, all shader code, design files, or dependency lockfile.

## 1. Define the target

Aim to reproduce the site's visual language and behavior, not to pretend this workspace contains the original implementation. Use the live site as the final visual reference at desktop and mobile widths; the article does not specify exact colors, spacing tokens, font sizes, or breakpoints.

The creator describes the direction as retro-futurist, shaped by translucent iMac G3 material, Apple's “hello” campaign, glass, colored light, and early digital interfaces. The defining elements are:

- A vertically scrolling portfolio with readable DOM typography and a fixed WebGL canvas.
- A large glass-like 3D “hello” centerpiece with colored refraction, dispersion, and a pointer-following rim highlight.
- Project cards laid out by responsive CSS Grid, with transparent DOM image targets mirrored into WebGL.
- Two images per project; hover reveals the second image through a growing square dot-matrix pattern rather than a plain crossfade.
- Project images that enter from an inverted/negative look and develop back to color; fast scroll adds a restrained horizontal curl.
- Colorful Figma-drawn stickers drifting behind the glass letters so they show through refraction.
- One visual grammar carried into page/menu transitions and brief character-scramble text reveals.
- A light/dark-aware glass tint, with motion and expensive passes reduced or shut off when appropriate.

The current live page's content structure is an introduction/role statement, a selected-work index, a short purpose/closing section, and a contact/social footer. The visible project list includes Reunimos, Inspire Mono, Wasm design utils, VectorSymbols, DarkSide, aDrive, Shore Icon, and Teambition. Replace the sample “Mori” content in this starter if content parity matters.

## 2. Use the existing starter as the shell

The starter already provides Next.js/React, Motion, Lenis, R3F/Drei, a procedural glass-like orb, post-processing, and a shared Lenis/R3F frame loop. Start it from this folder:

```sh
npm install
npm run dev
```

The main existing files are `app/page.jsx`, `app/globals.css`, `components/smooth-scroll.jsx`, `components/hero-scene.jsx`, and `lib/scroll-bus.js`.

For a closer recreation, replace the current decorative CSS project artwork and procedural orb in stages. Keep the page text, navigation, project titles, links, grid, and transparent image placeholders in semantic DOM; use WebGL only for the visual treatment. Do not try to rebuild all effects in one pass.

Suggested additions as the effect system grows:

```text
components/
  scene/CanvasRoot.jsx
  scene/GlassHello.jsx
  scene/StickerField.jsx
  scene/ProjectImageLayer.jsx
  scene/DOMTargetSampler.jsx
  scene/StarSixPass.jsx
  scene/PointerEnvironment.jsx
lib/
  scroll-bus.js
  pointer-bus.js
  project-data.js
shaders/
  glass.vert.glsl
  glass.frag.glsl
  project-image.frag.glsl
  star-six.frag.glsl
public/
  models/hello.glb
  stickers/*.png
  projects/*
```

These are a suggested organization, not files that currently exist.

## 3. Rebuild in the right order

### Milestone A — DOM content and layout

1. Replace the demo copy with the target information hierarchy: compact identity/role intro, short design-and-engineering statement, work index, purpose/closing line, contact and social links.
2. Use CSS Grid for the project layout. Keep every project title, year, category, destination link, and image alternative text in the DOM.
3. For each project, create a transparent image target with a React ref. It reserves the correct responsive size while the canvas renders its image. Keep a real `<img>` fallback available when WebGL is unavailable or reduced motion is requested.
4. Match the original site's overall composition by comparing the live page at the same viewport size. The article supplies the design direction, not pixel measurements.

**Done when:** the site remains navigable and readable with the WebGL canvas disabled, the grid reflows without layout jumps, and links work by keyboard.

### Milestone B — Single-frame scroll and pointer state

Keep Lenis and R3F on one frame source. The starter already sets `autoRaf: false` and calls Lenis from R3F's `addEffect`; retain that. Let Lenis emit the scroll event, write the current scroll snapshot once, then let later `useFrame` consumers read it. Use `useSyncExternalStore` only for React DOM that truly needs scroll state; WebGL should read the snapshot directly without causing React renders.

Expand the current scroll snapshot as needed to include `scrollTop`, `limit`, `progress`, `velocity`, `direction`, and viewport height. Add one PointerBus that converts pointer coordinates to normalized UV once and carries an `inside` flag. On pointer leave, blur, or hidden tab, reset its target to center so shaders do not jump from stale coordinates.

**Frame order:** advance Lenis → update shared snapshots → sample DOM targets → update card/particle state → render the scene and post-processing. Do not add separate per-component `requestAnimationFrame` loops.

### Milestone C — Mirror the project grid into WebGL

For each transparent DOM target, keep one cached viewport rectangle. Convert screen coordinates (top-left origin) to normalized shader UV (bottom-left origin):

```js
const rect = element.getBoundingClientRect();
const uRect = {
  x: rect.left / viewportWidth,
  y: 1 - rect.bottom / viewportHeight,
  width: rect.width / viewportWidth,
  height: rect.height / viewportHeight,
};
```

In a fullscreen-quad fragment shader, map screen UV into that card's local coordinates:

```glsl
vec2 localUv = (screenUv - uRect.xy) / uRect.zw;
```

Mask samples outside `[0, 1]` to transparent. CSS remains the authority for card position and aspect ratio; the shader follows the measured rectangle. Use the same rectangle for both normal and hover images so they cannot drift apart.

Avoid a `getBoundingClientRect()` call per card on every frame. Keep one sampler and shared cache. On scroll, shift cached top/bottom by the Lenis scroll delta. Refresh targets near the viewport every frame; refresh distant targets in staggered batches (the article describes a 12-frame cadence). Refresh after resize/layout changes, hide invalid/offscreen meshes, and reset entrance progress when a card leaves the activation region.

### Milestone D — Recreate card behavior

1. Give each work item a base image and a hover image.
2. Track hover progress in a shared value/uniform, not React state updated every animation frame.
3. Divide screen space into fixed-pixel cells. From the center of the card, expand a circular progress boundary; inside it, grow a square in each cell and blend to the hover image. Include aspect-ratio correction and anti-aliasing with `fwidth`.
4. On entry, animate image color from negative/inverted to normal over about 0.8 seconds; reset it when fully out of view. When reduced motion is enabled, show the normal image immediately.
5. Derive a small curl from scroll velocity, not accumulated scroll distance. Clamp frame delta and smooth with a faster attack than release to avoid trackpad jitter.

**Done when:** the image remains aligned at every grid width, the hover reveal starts from the card center, and rapid scrolling bends images only subtly without leaving a persistent warp.

### Milestone E — Build the actual glass centerpiece

1. In Spline, create the “hello” geometry, export only a light GLTF/GLB model, and load it in R3F with Drei's `useGLTF`. Keep geometry separate from material so the custom shader can be tuned independently.
2. Render the background scene (including stickers) to a WebGL render target/FBO while excluding the glass mesh using a dedicated Three.js layer.
3. Render the normal scene, then shade the glass by sampling the FBO with refracted UV offsets. Offset red, green, and blue samples slightly differently for chromatic dispersion; combine with a Fresnel edge term, specular highlight, and art-directed tint.
4. Constrain the moving highlight to a fixed-radius ring around the glass. Map pointer position onto a plane in front of the model, compute an angle with `atan2`, and damp the shortest angular difference. This makes the highlight follow pointer direction without sliding onto the center of the glass.
5. Use a light-mode absorption/tint path and a separate art-directed dark-mode blend; do not expect one physically based tint equation to look good on both backgrounds.

The FBO must not include the glass itself or it will sample its own previous render. Test render order and layers with a plain opaque test material before debugging the refraction shader.

**Done when:** the object has visible depth and colored refraction over both light and dark backgrounds, the rim highlight stays on its contour, and the image behind the object visibly distorts.

### Milestone F — Add Figma stickers to the refracted scene

Figma is for drawing the sticker assets, not for exporting the whole webpage as a flat image. Draw a small family of bright, transparent-background PNG illustrations with consistent stroke/shape language. Pack them into one `CanvasTexture` atlas and draw them with one `InstancedMesh` rather than one texture/material/mesh per sticker.

For each atlas cell, store a normalized `uvRect` and image aspect ratio. Canvas coordinates start top-left while WebGL UV starts bottom-left, so flip the V coordinate; inset the UV bounds by roughly half a pixel to avoid sampling transparent padding. In the instance vertex shader, map the plane's local UV into the atlas with:

```glsl
vec2 stickerUv = uvRect.xy + uv * uvRect.zw;
```

Keep a fixed particle budget. Update particle positions, rotation, scale, and lifetime on the CPU, and write transforms to `instanceMatrix`; write each particle's atlas rectangle to an instanced attribute. Place the stickers behind the glass model and inside the FBO-captured scene. Keep their fall path narrow enough to cross the lettering rather than filling the whole viewport.

**Done when:** stickers are visible without the glass, visibly refract through it when the glass is enabled, and use one atlas/material/instanced draw rather than many independent draw calls.

### Milestone G — Finish the retro-futurist language

- Add a custom Star 6 lens-flare pass: threshold bright highlights, sample streaks on vertical and ±30° axes, and composite six rays. Render its source at reduced resolution, update it less often than the main scene, and disable the pass while the glass is offscreen.
- Reuse a fixed dot grid for card hover and fullscreen/menu transitions. Keep separate masks where needed; consistency comes from the shared visual rule, not forcing every transition into one shader.
- Add brief character-scramble reveals using one shared ticker. Subscribe only for visible text while a transition is opening, then unsubscribe when complete.
- Keep CSS/DOM responsible for semantics, structure, responsive layout, and focus behavior. Canvas effects enhance rather than replace that content.

## 4. Asset checklist

Prepare these before polishing shaders:

- Spline `hello` model exported as GLTF/GLB, with simple geometry and centered origin.
- Figma sticker PNGs with transparency, predictable dimensions, and consistent visual style.
- Two optimized project images per card (base and hover), with known image dimensions and useful alt text in the DOM.
- TikTok Sans font files or a reliable font-loading setup.
- Desktop and mobile screenshots of the live reference for side-by-side QA.

Use original or licensed replacement photography and artwork. The public case study confirms the techniques but does not distribute the site's assets.

## 5. Quality and performance checks

- **Visual:** glass reads as translucent, colored light and dispersion are restrained, project grid and typography remain the focus, and the dot language is consistent.
- **Synchronization:** fast scroll never produces a one-frame gap between the DOM placeholders and WebGL images.
- **Interaction:** hover, pointer leave, blur, hidden-tab return, menu transition, and theme change all settle to valid states.
- **Responsive:** DOM layout reflows first; measured rectangles update after reflow; canvas never dictates card dimensions.
- **Accessibility:** semantic links and headings remain in DOM, keyboard navigation works, reduced-motion mode skips long reveals, and a static image fallback is available.
- **Performance:** cap pixel ratio, restrict fullscreen quads to nearby cards, reuse atlas/materials, pause star-flare work offscreen, clamp delta after tab suspension, and profile mobile hardware early.

## 6. Practical implementation order

Build and verify in this order: DOM page → Lenis/R3F shared frame → one mirrored project image → two-image hover shader → image entrance and scroll curl → Spline geometry → two-pass refraction → Figma atlas and particles → Star 6 pass → transitions/text scramble → mobile and reduced-motion tuning.

Do not start with all the effects at once. The creator reports that the finished site evolved over roughly three to five months of spare-time work. This brief helps reproduce its architecture and visual behaviors, but matching its final polish still requires iteration against the live reference.