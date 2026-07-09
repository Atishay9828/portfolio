# Final Deep Screening Report

Date/time: 2026-07-09

Branch: `master`

Starting commit:
- `eb99fc7` (`docs: recapture final polish screenshots`)

Ending commit:
- To be reported after the final commit/push. This report is part of the closeout payload, so the immutable commit hash is recorded in the final response.

## Launch Readiness

Score: 92 / 100.

Readiness call:
- Conservative launch-ready after final validation and push.
- Not 100/100 because optional stronger proof remains: Hybrid AI Insight screenshot, repeatable fallback harness, dependency major-version upgrade, optional admin/chat/carpool visuals, and deeper reliability/performance evidence.

## Known Owner Issues Fixed

- Public UI no longer shows large missing-proof, text-only, candidate-visual, launch-selection, or internal backlog copy.
- Pending and future evidence work moved into `docs/29_PENDING_FEATURES_AND_EVIDENCE.md`.
- About now appears directly after the hero; Contact remains near the bottom.
- Signal Journey is a single ordered rail: Signal, About, Proof, Builds, Evolution, Toolkit, Systems, Contact.
- Hero Signal Path is a static systems visual, not a second scroll tracker.
- Header/link hover states now use the shared accent system.
- Project proof/action links are compact icon-first tiles.
- Secondary cards are compact support entries instead of full featured-project fact stacks.
- Timeline project names link only when a verified GitHub repo exists.

## Extra Issues Found And Fixed

- Replaced a mojibake back-link with ASCII `<- Featured work`.
- Removed the awkward public Loop role phrase `AI-only balance`.
- Removed stale The Loop `system diagram revision` wording after generating the SVG.
- Removed public-source phrases such as `internal follow-up`, `internal docs`, and `diagram QA`.
- Added external `target`/`rel` behavior to the hero GitHub link.

## Evidence Updates

Hybrid:
- Public data now includes local `/predict` and offline Qwen fallback examples from port 8001.
- The public page keeps the scope local/offline and does not claim hosted production latency, dataset accuracy, fallback-rate, zero compute cost, or deployment.
- Stale endpoint/Qwen/cost/backend-output missing-proof wording was removed from public data.

The Loop:
- Added `public/assets/projects/the-loop/the-loop-system-diagram.svg`.
- The diagram is repo-backed topology evidence only; it is not reliability, scale, active-user, production-SLA, monitoring, backup, or exact ownership proof.
- Public copy continues to frame The Loop as collaborative.

Toolkit:
- Added `src/data/toolkit.ts` and `src/components/sections/Toolkit.astro`.
- Documented source evidence in `docs/30_TECH_STACK_EVIDENCE.md`.
- No proficiency percentages or guessed technologies were added.

## Validation

Passed:
- `npm.cmd test` passed with 30/30 tests.
- Single-worker fallback also passed: `npm.cmd test -- --pool=threads --maxWorkers=1 --minWorkers=1`.
- `$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build` passed with 0 Astro errors/warnings and generated 4 pages.
- Public-source scans found no forbidden placeholder/backlog terms in `src`.
- Local path scan found no Windows/local paths in public `src` or `public` href/src surfaces.

Environment caveat:
- Standard Vitest worker spawning intermittently failed with `spawn UNKNOWN` during Windows resource pressure. Single-worker Vitest passed and confirmed this was not an assertion failure.
- The final build exited 0 after generating pages, while printing the known trailing esbuild cancellation line.

## Screenshot QA

Captured:
- `docs/reviews/screenshots/homepage-desktop-final-screening.png`
- `docs/reviews/screenshots/homepage-mobile-final-screening.png`
- `docs/reviews/screenshots/mahoraga-desktop-final-screening.png`
- `docs/reviews/screenshots/hybrid-desktop-final-screening.png`
- `docs/reviews/screenshots/the-loop-desktop-final-screening.png`

Manual visual check summary:
- Homepage desktop: balanced hero, visible Signal Journey rail, static hero Signal Path.
- Homepage mobile: rail hidden, header wraps, CTAs stack, no obvious first-viewport clipping.
- Mahoraga: concise prototype framing and compact proof links.
- Hybrid: local/offline proof framing is clear and not presented as production proof.
- The Loop: workflow visual proof and compact links render; one phrase was fixed in source after the screenshot capture.

Screenshot caveat:
- `the-loop-desktop-final-screening.png` still shows the pre-fix phrase `AI-only balance`; the source was fixed afterward to `Product engineering proof alongside the AI systems work.` Tests and build passed after the source fix.

## Remaining Real Blockers

- Hybrid opened History AI Insight screenshot with safe sample data and a real `/transaction-insight` response.
- Repeatable public fallback benchmark harness if stronger Hybrid latency wording is desired.
- Hosted deployment link for Hybrid only if intentionally deployed.
- Dataset-level accuracy evaluation before any accuracy claim.
- Mahoraga demo media and architecture diagram review before stronger visual proof.
- The Loop manual deployed workflow verification before reliability claims.
- Exact The Loop module ownership only if teammate-confirmed evidence separates it.
- Dependency audit remediation requires a separate tested Astro/Vitest major-version upgrade.

## AJ Manual Check First

1. Homepage desktop: rail placement, active station feel, and hero balance.
2. Homepage mobile: header wrapping and CTA stack.
3. The Loop page: confirm the updated source phrase reads better than the screenshot caveat.
4. Hybrid page: confirm the local/offline fallback wording is strong enough without sounding like hosted production proof.
5. Project pages: scan compact proof/action tiles and visual proof sections.
