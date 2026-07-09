# Final Deep Screening Report

Date/time: 2026-07-09

Branch: `master`

Starting commit:
- `f2239fdec417accf959d4cd26a82f070c95c61da` (`content: complete final portfolio deep screening`)

Ending commit:
- To be reported after the final commit/push.

## Launch Readiness

Score: 94 / 100 for conservative launch after commit/push.

Not 100/100 because live browser screenshot QA could not be completed in this sandbox, dependency audit remediation still needs a separate major-version upgrade, and stronger proof still needs Hybrid AI Insight screenshot, repeatable fallback harness, optional Mahoraga demo media, and deeper reliability/performance evidence.

## Fixed In This Pass

- Public UI copy no longer exposes large missing-proof, text-only, candidate-visual, launch-selection, or internal backlog wording.
- About appears directly after the hero; Contact remains near the bottom as the full CTA surface.
- Signal Journey now uses one ordered rail: Signal, About, Proof, Builds, Evolution, Toolkit, Systems, Contact.
- Rail progress is derived from active station index, not raw page scroll.
- Hero right side is now proof anchors only; the duplicate Signal Path module was removed.
- Featured project titles and compact case-study actions route to internal project pages.
- External proof actions use icon-first compact buttons with target/rel on external links.
- Lab cards link only to verified repos from the 2026-07-09 GitHub inventory.
- Toolkit chips are evidence-derived and grouped by category, with source evidence recorded in `docs/30_TECH_STACK_EVIDENCE.md`.
- New SVG diagrams were added for Mahoraga, Hybrid, and The Loop.

## Evidence Updates

Hybrid:
- Public data includes local `/predict` and offline Qwen fallback examples from port 8001.
- Copy stays local/offline and does not claim hosted production latency, dataset accuracy, fallback-rate, zero compute cost, or deployment.
- Current `history.png` remains list-view evidence only and explicitly does not show the slide-in AI Insight panel.

The Loop:
- Public-safe live screenshots remain verified workflow evidence.
- Added system, recommendation, carpool/chat, and deployment diagrams.
- The Loop remains collaborative; exact module ownership is not separated in public evidence.

Toolkit:
- Added broad but sourced stack entries for languages, frontend, backend/API, AI/ML, data/database, deployment, and product systems.
- No proficiency percentages or guessed technologies were added.

## Validation

Passed:
- `npm.cmd test` passed with 35/35 tests.
- `npm.cmd run build` passed with 0 Astro errors/warnings and generated 4 pages.
- Static `dist/` smoke checks confirmed `/`, `/projects/mahoraga/`, `/projects/hybrid-categorizer/`, and `/projects/the-loop/` exist, include titles, and contain no generated Windows drive paths.
- Generated HTML scan found no forbidden public backlog/private-data strings.

Not completed:
- Live dev-server/browser QA. Astro dev printed ready on `http://127.0.0.1:4321/`, then exited under sandbox parent-directory access errors. Escalation was unavailable because the environment rejected it due the usage limit.

## Remaining Real Blockers

- Live browser screenshot QA for desktop/mobile.
- Hybrid opened History AI Insight screenshot with safe sample data and a real `/transaction-insight` response.
- Repeatable public fallback benchmark harness if stronger Hybrid latency wording is desired.
- Hosted deployment link for Hybrid only if intentionally deployed.
- Dataset-level accuracy evaluation before any accuracy claim.
- Mahoraga demo media before stronger adaptive-behavior proof.
- The Loop manual deployed workflow verification before reliability claims.
- Exact The Loop module ownership only if teammate-confirmed evidence separates it.
- Dependency audit remediation requires a separate tested Astro/Vitest major-version upgrade.

## Manual Review Focus

1. Homepage desktop: rail placement, active station feel, and hero proof-anchor balance.
2. Homepage mobile: header wrapping and CTA stack.
3. Featured project pages: compact action rows and SVG diagram readability.
4. Hybrid page: confirm local/offline fallback wording does not read as hosted production proof.
5. The Loop page: confirm collaborative language and diagram labels feel clear.
