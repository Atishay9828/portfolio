# Implementation and QA Plan

Date: 2026-07-10

Status: architecture audit complete; focused foundation and production-hardening passes implemented in this worktree.

## Goal

Turn the homepage into a clear learning story without weakening the portfolio's proof-first contract. The seven-state Signal Journey remains the primary narrative controller:

1. Signal
2. About
3. Builds
4. Evolution
5. Toolkit
6. Systems
7. Contact

Secondary Work and Lab Projects remain supporting material inside the Systems-to-Contact span. They do not need their own top-level journey states unless the content strategy changes.

## Architectural Decision

Keep the site static-first and Astro-native. Use structured TypeScript data for facts and story configuration, Astro components for rendered sections, and one small page-local controller for progressive scroll state. Do not add React, GSAP, Three.js, or another runtime until a measured requirement cannot be met with the current approach.

The signature interaction must explain progression, not replace content. Every heading, project link, proof boundary, and contact path must remain readable and usable with JavaScript disabled and with reduced motion enabled.

## Current Audit

| Area | Current state | Decision |
|---|---|---|
| Page structure | `BaseLayout` owns the document shell; homepage sections are separate Astro components. The homepage previously nested a second `main`. | Keep one `main` landmark in `BaseLayout`; the homepage story wrapper is a `div`. |
| Story order | Seven approved journey states plus subordinate Secondary and Lab sections. | Preserve the seven states. Treat Secondary and Lab as supporting evidence under Systems. |
| State ownership | Navigation, scene labels, section metadata, and controller behavior were partly duplicated. | `src/data/journey.ts` owns the ordered journey contract. Runtime state is derived from section data indices. |
| Motion | Vanilla `requestAnimationFrame` plus `IntersectionObserver`; normal browser scrolling remains intact. | Keep this controller. Gate animation CSS behind successful initialization and preserve an observer fallback. |
| Signal Core | Fixed visual could occupy the same horizontal space as content at intermediate widths. | Hide it below 1180px. At desktop widths, reserve a dedicated responsive grid lane and keep the scene sticky so it cannot cover the story. |
| Accessibility | Focus styles and reduced motion existed. A skip link and valid landmark hierarchy were missing; mascot resizing was pointer-only. | Add skip navigation, one main landmark, 44px primary navigation targets, and keyboard resizing. |
| Responsive behavior | Mobile collapses content to one column and hides desktop journey controls. Tablet header padding could become flush to the viewport. | Preserve the mobile fallback and restore tablet header padding. |
| Tests | Strong data/evidence tests, but several journey checks asserted duplicated source strings rather than the source of truth. | Test the journey data contract, section mapping, progressive enhancement, and landmark structure. |
| CSS | One 60.7KB source file, including legacy/duplicate mascot rules. Generated CSS is about 54.7KB uncompressed. | Do not split during parallel design work. Schedule a dedicated dead-rule/token extraction pass after visual direction stabilizes. |
| Media | Public assets total about 6.5MB. Twelve mascot PNG frames total about 1.05MB and are currently eager-loaded. | Sprite/encode and interaction-load mascot states before final performance acceptance. Do not remove evidence assets merely to reduce repository size. |
| Dependencies | Static Astro stack; earlier audit notes record unresolved issues requiring major upgrades. | Handle the Astro/Vitest upgrade as a separate compatibility milestone, not inside visual-story work. |

## Component Architecture

### Document shell

`src/layouts/BaseLayout.astro`

- Owns metadata, header, one `main`, footer, and skip navigation.
- Must not own homepage journey state.
- Header links use shared `src/data/links.ts` destinations.

### Story contract

`src/data/journey.ts`

- Owns journey order, indices, section ids, navigation labels, section labels, and Signal Core readouts.
- Indices are stable, unique, and contiguous from zero.
- Content sections must expose matching `id`, `data-journey-index`, and `data-journey-label` values.
- Adding, removing, or reordering a journey state requires changing this file and the corresponding rendered section in one patch.

### Homepage composition

`src/pages/index.astro`

- Composes sections in reading order.
- Renders the journey navigation from `journeyStops`.
- Owns only the small DOM controller that translates viewport position into active state.
- Does not own project facts, toolkit facts, contact links, or long-form copy.

### Section components

`src/components/sections/*`

- Each section owns semantic headings and its rendered presentation.
- Sections consume structured data where facts repeat.
- Featured work remains dominant; Secondary Work and Lab Projects remain visually subordinate.
- Sections must not introduce unsupported metrics, ownership, or deployment claims.

### Journey visual

`src/components/ui/JourneyDepthScene.astro`

- Is decorative and `aria-hidden`.
- Reads state labels/counts from `journeyStops`.
- May change visual glyphs per state, but cannot become the only place where a story label appears.
- Runs only in its reserved wide-screen lane.

### Mascot

`src/components/ui/GymCoderMascot.astro`

- Is optional personality, not navigation or proof.
- Pointer and keyboard controls must remain equivalent.
- Personalization storage failures must not break interaction.
- Frame loading and encoding need a dedicated performance pass before launch.

## Runtime State Ownership

The controller has one authoritative runtime value: the active journey index.

1. Sections declare stable indices from the shared journey contract.
2. The controller sorts sections by those indices and builds index maps.
3. Viewport proximity selects one section index.
4. That index updates section classes, station classes, `aria-current`, Signal Core state, and discrete rail progress.
5. A separate continuous scroll ratio drives decorative depth only; it never chooses the active story state.

Required invariants:

- No state depends on incidental DOM order alone.
- Navigation and sections must agree on id and index before click travel is intercepted.
- Native scrolling is never hijacked.
- If initialization fails, content remains fully visible.
- If `IntersectionObserver` is unavailable, all sections become entered/readable.
- Reduced motion keeps state changes but disables continuous transitions.

## Responsive Contract

| Width | Journey rail | Signal Core | Content behavior |
|---|---|---|---|
| Below 861px | Hidden | Hidden | Single-column reading flow; no reveal transforms; full-width actions. |
| 861px to 1179px | Hidden | Hidden | Standard content layout without overlay controls. |
| 1180px and above | Sticky left rail | Sticky in reserved right lane | Three-column shell: rail, content, and a responsive 230-292px visual lane. |

Every breakpoint must pass: no horizontal overflow, no fixed element covering text/actions, readable headings, reachable CTAs, and visible keyboard focus.

## Performance Budgets

These are release gates, not aspirational numbers:

| Budget | Target |
|---|---|
| Homepage HTML | At most 65KB uncompressed. Current build is about 54KB. |
| Shared CSS | At most 60KB uncompressed and at most 16KB gzip. Current build is about 54.7KB uncompressed. |
| Homepage interaction JavaScript | At most 20KB gzip total; no general animation runtime without a measured exception. |
| Initial homepage media | At most 750KB transferred on mobile and 1MB on desktop. |
| Largest single raster requested on a route | At most 500KB after responsive encoding; larger evidence images require thumbnails or responsive sources. |
| Largest Contentful Paint | Under 2.5s on a mid-tier mobile profile. |
| Cumulative Layout Shift | Under 0.1. |
| Interaction to Next Paint | Under 200ms. |
| Scroll work | One passive listener and at most one queued animation frame. |

2026-07-13 budget result: the twelve mascot frames were losslessly re-encoded from 1,104,576 bytes of PNG to 754,534 bytes of WebP, and non-idle states are not marked eager. The Loop map and event-detail screenshots were visually reviewed after WebP encoding at 224,682 and 117,952 bytes, satisfying the 500KB single-raster budget. Final transfer behavior and Lighthouse results remain deployment gates.

## Accessibility Contract

- Exactly one `main` landmark per page.
- A keyboard-visible skip link targets `#main-content`.
- Heading order is semantic and does not depend on visual size.
- Navigation links use links; interactive mascot controls use buttons.
- Active journey navigation uses `aria-current="location"`.
- Icon-only public links have accessible labels.
- Primary navigation and journey station targets are at least 44px where displayed.
- Mascot movement works with arrow keys; resizing works with arrow keys and `Home` resets scale.
- Focus is never removed without an equivalent visible state.
- Decorative Signal Core content stays hidden from assistive technology because equivalent labels exist in navigation and sections.
- `prefers-reduced-motion` disables continuous transforms and animation while preserving content and current-state clarity.
- Color is never the only active-state indicator; position, text, borders, and `aria-current` carry the same information.

## Test Coverage Plan

### Unit and contract tests

Keep `tests/portfolio-data.test.ts` as the evidence and static contract suite. It must cover:

- journey order, contiguous indices, and labels;
- one rendered section for every journey stop;
- matching section id/index/label attributes;
- journey navigation generated from shared data;
- active-state progress derived from sorted station position;
- progressive-enhancement readiness gate and observer fallback;
- one main landmark and skip link;
- keyboard mascot movement and resizing;
- evidence, privacy, contribution, link, and route guardrails already present.

### Build checks

- `npm.cmd test`
- `npm.cmd run build`
- `git diff --check`
- Static output contains exactly four expected routes.
- Generated HTML contains no Windows drive paths, private asset names, or forbidden public backlog phrases.

### Browser smoke matrix

Desktop wide, desktop mid, tablet, and mobile must verify:

1. Signal is active on initial load.
2. Clicking Builds lands at Featured Projects and sets `aria-current` correctly.
3. Scrolling into Systems activates state 06.
4. Secondary and Lab content remain readable while Systems stays the active span.
5. Contact becomes the final state near page end.
6. The sticky Signal Core never intersects content at desktop widths and is absent below 1180px.
7. Mobile has no horizontal overflow and no hidden journey content.
8. Keyboard tab order reaches skip link, header links, journey stops, project links, mascot controls, and contact links.
9. Reduced-motion emulation leaves all content readable.
10. Console errors and hydration errors are empty.

Automated Playwright coverage should be added after parallel layout work stabilizes. Until then, browser smoke evidence must record viewport, route, interaction, and exact blocker if capture cannot run.

## Rollout Sequence

### Phase 1 — Foundation (implemented in this worktree)

- Centralize the seven-stop journey contract.
- Render navigation and scene readouts from that contract.
- Make controller state index-driven instead of DOM-position-driven.
- Gate motion styles behind successful initialization.
- Add IntersectionObserver fallback.
- Repair nested landmarks and add skip navigation.
- Reserve a collision-free Signal Core lane.
- Restore tablet header padding and 44px navigation targets.
- Add keyboard mascot resizing and storage failure tolerance.
- Add regression tests.

### Phase 2 — Learning-story content integration

- Map approved learning themes to the seven existing beats.
- Rewrite section transitions only from verified project/process evidence.
- Keep Secondary and Lab inside the Systems span unless user testing proves another state is necessary.
- Add no new claim until its source is recorded in project/evidence data.

### Phase 3 — Visual system consolidation

- Reconcile parallel design outputs into existing tokens and components.
- Remove dead/duplicate mascot and legacy corridor CSS.
- Split tokens, layout, component, and motion CSS only after selectors stabilize.
- Ensure every visual state has a purpose and a reduced-motion equivalent.

### Phase 4 — Media performance

- Replace the twelve eager mascot PNG requests with an optimized interaction-loaded format.
- Create responsive derivatives for large case-study screenshots.
- Keep original evidence assets in the repository when required, but serve appropriately sized public variants.
- Measure transfer size, LCP, CLS, and INP on production output.

### Phase 5 — Browser and release QA

- Add Playwright journey/navigation/accessibility smoke coverage.
- Run the responsive and reduced-motion matrix.
- Run an automated accessibility scan plus manual keyboard review.
- Recapture safe current screenshots after integration.
- Complete dependency-upgrade planning separately.

## Definition of Done

The learning-story implementation is done only when all of the following are true:

- The approved seven-state journey is represented by one shared data contract.
- Every state has a matching rendered section and navigation destination.
- Secondary and Lab content remains subordinate and readable within the Systems span.
- One runtime active index controls rail, sections, scene, and accessibility state.
- The page is complete and readable with JavaScript disabled and reduced motion enabled.
- No page contains nested `main` landmarks; skip navigation works.
- Desktop, tablet, and mobile have no fixed-content collisions or horizontal overflow.
- Keyboard navigation and mascot controls are usable without a pointer.
- Existing evidence, privacy, link, contribution, and public-copy tests remain green.
- Tests, Astro diagnostics/build, and `git diff --check` pass.
- Browser smoke passes first, middle, final, click-travel, mobile, and reduced-motion flows without console errors.
- Homepage and route media meet the budgets above, or a documented measured exception is approved.
- No fake screenshots, metrics, terminal output, ownership claims, or deployment claims were introduced.
- Documentation describes the current implementation rather than an obsolete pre-scaffold phase.

## Integration Notes

- `src/data/journey.ts` is the merge anchor for other agents changing the learning-story labels or order.
- Other agents should not reintroduce hardcoded journey links/counts in `index.astro` or `JourneyDepthScene.astro`.
- Changes to section ids or journey indices must update the shared journey contract and tests together.
- Keep the sticky Signal Core in its reserved desktop lane. Do not solve overlap by increasing z-index.
- Preserve the user-owned project, mascot, cover-removal, and public-copy changes already present in the branch.
