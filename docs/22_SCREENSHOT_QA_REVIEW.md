# 22_SCREENSHOT_QA_REVIEW.md

Date: 2026-07-06

Purpose:
- Record fresh screenshot QA for the polished Astro static shell.
- Replace the prior screenshot-recapture blocker with concrete updated PNG artifacts.
- Keep visual evidence scoped to layout QA only; these screenshots do not verify missing demos, role/contribution details, production metrics, or public CTAs.

Current-use caveat:
- These PNGs remain useful as layout QA evidence, but they predate the 2026-07-03 SDE resume, LinkedIn/email CTA activation, owner-reviewed contribution-section updates, and 2026-07-06 The Loop visual import. Use `docs/24_LAUNCH_READINESS_AUDIT.md`, `docs/25_THE_LOOP_VISUAL_EVIDENCE_UPDATE.md`, and current generated HTML/build output for current CTA and visual status.

2026-07-06 addendum:
- Owner-provided The Loop live-deployment screenshots were imported after this screenshot QA capture.
- Public-safe The Loop assets now include events list, alternate events list, event detail, map view, landing/login, redacted profile, and redacted friends screenshots under `public/assets/projects/the-loop/`.
- The profile contact area and friends sent-request username were masked before public import.
- Full-page portfolio screenshot QA still needs recapture because the current QA PNGs do not show the updated Loop visual grid.

2026-07-08 addendum:
- The Loop public workflow screenshots were verified as already present in `public/assets/projects/the-loop/`; no new import or crop was performed.
- Current full-page QA screenshots are still stale for the final-polish UI and must be recaptured after the Signal Corridor, hero visual, and project-page density updates.

## 2026-07-08 Final Polish Recapture

Automated capture succeeded against the local Astro dev server at `http://127.0.0.1:4321/`.

Browser used:
- Microsoft Edge headless from `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`.

Captured files:
- `docs/reviews/screenshots/homepage-desktop-final-polish.png` at 1440 x 1200.
- `docs/reviews/screenshots/homepage-mobile-final-polish.png` at 390 x 844.
- `docs/reviews/screenshots/mahoraga-desktop-final-polish.png` at 1440 x 1200.
- `docs/reviews/screenshots/hybrid-desktop-final-polish.png` at 1440 x 1200.
- `docs/reviews/screenshots/the-loop-desktop-final-polish.png` at 1440 x 1200.

QA notes:
- The first mobile capture exposed right-edge clipping in the header/hero CTA/text area.
- The final captured mobile version stacks the hero CTAs, uses a short-line hero headline, constrains the lead text, and avoids the observed clipping.
- Homepage desktop shows the Signal Corridor marker, denser hero signal visual, and quiet footer hierarchy.
- Project desktop captures show the smaller `← Featured work` link and reduced top-level disclaimer clutter.
- The Loop capture uses the owner-provided workflow visuals already present in project data.

Remaining visual QA notes:
- Edge headless logged registry usage-stat warnings during capture; screenshots were still written at the expected dimensions.
- These screenshots are viewport captures, not stitched full-page screenshots.

## 2026-07-09 Final Screening Capture

Automated capture succeeded for the deep-screening pass after rebuilding the Astro static output.

Captured files:
- `docs/reviews/screenshots/homepage-desktop-final-screening.png` at 1440 x 1200.
- `docs/reviews/screenshots/homepage-mobile-final-screening.png` at 390 x 844.
- `docs/reviews/screenshots/mahoraga-desktop-final-screening.png` at 1440 x 1200.
- `docs/reviews/screenshots/hybrid-desktop-final-screening.png` at 1440 x 1200.
- `docs/reviews/screenshots/the-loop-desktop-final-screening.png` at 1440 x 1200.

QA notes:
- Homepage desktop shows the sticky Signal Journey rail and static hero Signal Path as separate systems.
- Homepage mobile hides the desktop rail, wraps the header, stacks CTAs, and showed no obvious viewport clipping in the captured first screen.
- Mahoraga and Hybrid project pages render compact proof/action tiles and no large missing-proof public cards.
- The Loop project page renders verified deployment/repo proof links and owner-captured workflow visuals.
- After the The Loop capture, one awkward public phrase (`AI-only balance`) was changed in `src/data/projects.ts` to `Product engineering proof alongside the AI systems work.` Tests and build passed after that source fix, but the existing The Loop final-screening PNG still shows the pre-fix phrase.
- Edge headless emitted a task-manager fallback warning during some captures; screenshots were still written at nonzero sizes.

## Capture Result

Automated capture succeeded on 2026-07-01.

Build/serve status:
- `npm.cmd test` passed.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages.
- `npm.cmd run preview -- --host 127.0.0.1 --port 4321` worked in foreground.
- Background Astro preview launch was unreliable in this Windows shell, so the built `dist/` output was served with the bundled Python static server for capture.

Browser used:
- Microsoft Edge headless from `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`.

Flags used:
- `--disable-gpu`
- `--disable-software-rasterizer`
- `--disable-dev-shm-usage`
- `--no-sandbox`
- `--disable-features=VizDisplayCompositor`

Capture notes:
- Full-page screenshots were captured after scrolling the page to load lazy images.
- Sticky header positioning was disabled only during full-page capture to avoid Playwright stitching duplicates.
- A missing `favicon.ico` returned 404 during capture; this did not affect page rendering or screenshot QA.

## Screenshots

| Screenshot | Route | Viewport | Status |
|---|---:|---:|---|
| `docs/reviews/screenshots/homepage-desktop-polished.png` | `/` | 1440 x 1200 | Acceptable for QA evidence |
| `docs/reviews/screenshots/homepage-mobile-polished.png` | `/` | 390 x 844 | Acceptable for QA evidence |
| `docs/reviews/screenshots/mahoraga-desktop-polished.png` | `/projects/mahoraga/` | 1440 x 1200 | Acceptable for QA evidence |
| `docs/reviews/screenshots/hybrid-desktop-polished.png` | `/projects/hybrid-categorizer/` | 1440 x 1200 | Acceptable for QA evidence |
| `docs/reviews/screenshots/the-loop-desktop-polished.png` | `/projects/the-loop/` | 1440 x 1200 | Acceptable for QA evidence |

## Visual QA Notes

Homepage desktop:
- Signal Lab visual hierarchy, proof-first order, featured project modules, and compact supporting sections render without obvious overlap.
- Contact CTA state in these screenshots is stale; current generated pages render SDE resume, GitHub, LinkedIn, and email as active public contact paths.
- Candidate visuals remain labeled as Known/candidate rather than Verified proof.

Homepage mobile:
- Content stacks correctly at 390 px width with no obvious horizontal clipping.
- The page is long and dense, but the order remains readable. Current CTA state must be checked against generated HTML because these screenshots predate public contact activation.

Mahoraga desktop:
- Candidate visuals render after lazy-loading is accounted for.
- Training metrics remain labeled as candidate-only and do not become metric claims.
- Missing proof and role/contribution gaps remain visible.

Hybrid desktop:
- Prediction, category, History, and Merchant Memory assets render.
- Benchmark block remains scoped as local classifier/routing benchmark evidence only.
- History screenshot still does not prove the opened AI Insight panel.

The Loop desktop:
- Layout renders without obvious overlap.
- Existing QA PNG is stale for current Loop visuals: `landing_page.jpg` was later superseded by `the-loop-landing-live.png`, and owner-provided workflow screenshots were imported on 2026-07-06.
- Recapture this page before final visual QA so the events-list, event-detail, map-view, landing/login, and redacted profile/friends assets are checked in the actual portfolio layout.

## Remaining Issues

- Add a real favicon or intentionally document that it is out of scope.
- Recapture The Loop case-study QA after the 2026-07-06 visual import.
- Capture Hybrid History AI Insight panel with safe sample/demo data and a real `/transaction-insight` response before using it as AI Insight visual proof.
- Add role/contribution details before ownership claims are strengthened.
- Keep polished production launch blocked until final diagram QA, remaining demos/screenshots, The Loop workflow evidence, Hybrid AI Insight screenshot evidence, and deeper benchmark evidence are complete. Public contact CTA readiness is no longer the blocker.
