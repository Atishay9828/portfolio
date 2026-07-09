# 27_SCROLL_MOTION_CORRECTION.md

Date: 2026-07-08

## Purpose

Document the corrective motion pass that replaced the static-feeling homepage Signal Corridor with a scroll-responsive Signal Journey.

2026-07-09 supersession note:
- The left Signal Journey rail remains the single scroll-following system.
- The hero Signal Path was later changed back to a static top-of-page systems visual so it does not duplicate the rail.
- Use `docs/32_FINAL_DEEP_SCREENING_REPORT.md` for the current final-screening state.

## What Was Wrong

The prior Signal Corridor labeled the homepage sequence, but it was still mostly a static vertical line and repeated markers. It did not visibly follow scroll progress, update active stations, or make sections feel like a guided story.

That missed the reference-video intent: a premium scroll narrative where a visual system changes state as the page advances.

## What Changed

- Added journey metadata to homepage sections:
  - Signal
  - Proof
  - Builds
  - Evolution
  - Support
  - Lab
  - Systems
  - Contact
- Added a desktop signal rail with progress fill, moving orb, and active station labels.
- Added a lightweight scroll controller in `src/pages/index.astro`.
- Added subtle active-state motion for sections, proof cells, featured cards, timeline rows, support cards, lab cards, systems cards, and the contact panel.
- Kept the hero visual as a top-of-page systems chain in the final pass.
- Removed duplicate hero tracker behavior so scroll progress belongs to the left Signal Journey rail.

## How It Works

The controller:

- waits for `DOMContentLoaded` because Astro hoists the script into the generated page head;
- collects `[data-journey-section]` sections and `[data-journey-nav]` stations;
- calculates journey progress from the first journey section to the contact section;
- writes CSS variables:
  - `--journey-progress`
  - `--journey-progress-percent`
  - `--journey-depth`
- marks sections and stations with:
  - `is-active`
  - `is-before`
  - `is-after`
- uses `requestAnimationFrame` to throttle scroll updates;
- uses `IntersectionObserver` to mark sections that have entered view.

## Accessibility And Motion

- Normal browser scrolling remains untouched.
- There is no scroll hijacking, snap scrolling, GSAP, WebGL, Three.js, fake terminal, fake dashboard, or fake metric surface.
- `prefers-reduced-motion` removes continuous transitions while preserving active section state.
- The desktop rail is a navigable anchor list with meaningful station labels.
- Existing keyboard focus styling remains intact.

## Mobile Behavior

On narrow screens:

- the desktop rail is hidden;
- section markers remain visible;
- heavy section/card transforms are disabled;
- no fixed rail covers content;
- the no-server browser smoke check found no horizontal overflow at 390px.

## Evidence Safety

This pass changed presentation only.

It did not change:

- CTA destinations;
- Data Analyst resume exposure;
- project order;
- project claims;
- role/contribution wording;
- screenshots;
- metrics;
- evidence status.

## Validation

Completed in this pass:

- `npm.cmd test` passed with 24 tests.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages.
- `git diff --check` passed with line-ending warnings only.
- No-server Playwright/Edge smoke check passed:
  - desktop rail displayed;
  - active station advanced from Signal to Builds to Contact during scroll;
  - active section state matched the station;
  - mobile rail was hidden;
  - mobile had no horizontal overflow at 390px;
  - console errors were empty.

Known environment note:

- The build shell can print trailing esbuild cancellation/access noise after Astro reports completion. In this pass the build command still exited 0 and generated the expected static pages.

## Remaining Polish

- AJ should manually scroll the homepage in a real browser and judge whether the motion is strong enough compared with the reference video.
- If the motion still feels too mild, the next iteration should tune visual intensity, not add a heavy animation library.
- A deployed preview check is still needed before public launch.
