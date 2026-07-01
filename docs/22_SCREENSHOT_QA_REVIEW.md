# 22_SCREENSHOT_QA_REVIEW.md

Date: 2026-07-01

Purpose:
- Record fresh screenshot QA for the polished Astro static shell.
- Replace the prior screenshot-recapture blocker with concrete updated PNG artifacts.
- Keep visual evidence scoped to layout QA only; these screenshots do not verify missing demos, role/contribution details, production metrics, or public CTAs.

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
- Resume, LinkedIn, and email/contact states remain pending where required.
- Candidate visuals remain labeled as Known/candidate rather than Verified proof.

Homepage mobile:
- Content stacks correctly at 390 px width with no obvious horizontal clipping.
- The page is long and dense, but the order remains readable and the disabled/pending CTA states remain visible.

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
- Existing evidence weakness remains visible: `landing_page.jpg` is low resolution and still needs replacement.
- Workflow screenshot capture remains blocked by the external deployment/server access issue.

## Remaining Issues

- Add a real favicon or intentionally document that it is out of scope.
- Replace The Loop `landing_page.jpg` before production polish.
- Capture The Loop workflow screenshots only after the deployment/server access issue is fixed.
- Capture Hybrid History AI Insight panel with safe sample/demo data and a real `/transaction-insight` response before using it as AI Insight visual proof.
- Add role/contribution details before ownership claims are strengthened.
- Keep production launch blocked until resume, LinkedIn/email readiness, final diagram QA, remaining demos/screenshots, and deeper benchmark evidence are complete.
