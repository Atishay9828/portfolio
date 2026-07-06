# AJ Portfolio Repository

This repository is the source of truth for AJ's portfolio project and contains the conservative Astro static scaffold plus evidence-hardening work for the featured projects.

The portfolio positions AJ as:

- Primary identity: AI Systems Engineer
- Secondary identity: Product Engineer

The site is implemented as an evidence-safe static shell. This repo also contains the planning, architecture, design, content, risk, evidence, and handoff documentation that must guide future implementation.

## Current Phase

Astro static scaffold, first implementation hardening pass, first evidence import/case-study hardening pass, imported asset review, Hybrid sample-data visual replacement pass, Hybrid sample routing proof pass, Hybrid local benchmark pass, Hybrid History AI Insight evidence review, conservative design-system polish, polished screenshot QA recapture, featured case-study copy polish, role/contribution evidence framework, owner-reviewed featured contribution wording, SDE resume CTA publication, owner-approved LinkedIn/email CTA activation, launch-readiness audit, and The Loop live visual evidence update are complete; evidence hardening continues before production launch.

The current implementation is a conservative static content shell backed by the evidence docs. It is conditionally ready for a conservative soft launch, now with verified public-safe The Loop workflow visuals. Polished/final launch remains blocked until current screenshot QA, diagram QA, Hybrid AI Insight visual proof, full endpoint/fallback benchmark evidence if performance copy is desired, exact ownership details where needed, and final launch QA are complete.

## Run Locally

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Run validation:

```bash
npm test
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

On Windows PowerShell with script execution restrictions, use `npm.cmd`:

```powershell
npm.cmd test
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build
```

## Routes

- `/`
- `/projects/mahoraga`
- `/projects/hybrid-categorizer`
- `/projects/the-loop`

## Implementation Status

Created:
- Astro, TypeScript, Tailwind, and MDX configuration.
- Data-driven homepage sections.
- Static featured project case-study shells.
- Evidence-safe pending visual panels for missing assets.
- Tests for featured ordering, verified links, missing evidence states, resume gating, and route definitions.
- Desktop and mobile screenshot QA under `docs/reviews/screenshots/`.
- Public CTAs for owner-approved GitHub, SDE resume, LinkedIn, and email destinations.
- Published primary SDE resume CTA at `/resume/atishay-jain-sde-resume.pdf`.
- Imported real candidate visuals under `public/assets/projects/...` from verified external repos.
- Hardened featured case-study pages with documented architecture, evidence status, limitations, missing proof, and next-evidence sections.
- Replaced Hybrid `predict.png` and `memory.png` with safe sample-data frontend UI captures.
- Added `docs/19_HYBRID_ROUTING_PROOF.md` and sample/unmeasured Hybrid routing rows without benchmark claims.
- Added `docs/20_HYBRID_BENCHMARK_RESULTS.md` with local read-only ONNX classifier/routing benchmark results.
- Added `docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md` documenting the click-through History AI Insight panel and the limits of the current list-view screenshot.
- Conservative Signal Lab-aligned design-system polish for the static shell without changing evidence states or activating blocked CTAs.
- Fresh polished screenshot QA under `docs/reviews/screenshots/` with review notes in `docs/22_SCREENSHOT_QA_REVIEW.md`.
- Featured case-study copy polish for Mahoraga, Hybrid, and The Loop while preserving evidence gaps, local-only benchmark scope, and pending role/contribution details.
- Role/contribution evidence framework in `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md` with owner-reviewed role labels, contribution summaries, collaborative scope, still-to-verify items, and unsafe wording to avoid.
- Public case-study contribution sections for Mahoraga, Hybrid GenAI Transaction Categorizer, and The Loop.
- Launch-readiness audit in `docs/24_LAUNCH_READINESS_AUDIT.md` with a 72/100 score: conditionally ready for conservative soft launch, blocked for polished/final launch by visual/proof gaps.
- The Loop live visual evidence update in `docs/25_THE_LOOP_VISUAL_EVIDENCE_UPDATE.md` with owner-provided public-safe deployment screenshots and an updated 82/100 launch-readiness estimate.

Still blocked:
- Production visual polish until remaining missing screenshots/demos, diagram render/mobile QA, and final screenshot QA are complete.
- Current screenshot QA recapture after public CTA, contribution-section, and The Loop visual updates.
- Hybrid endpoint latency, Qwen fallback latency, cost, fallback-rate, and production claims until full endpoint/fallback benchmark evidence exists.
- Hybrid backend/model-output claims until the model/backend path is captured or benchmarked end to end.
- Hybrid History AI Insight visual proof until a safe sample transaction is opened and the real AI Insight panel is captured from `/transaction-insight`.
- Optional The Loop admin/chat/carpool visuals only if those flows will be visually featured; raw profile/friends screenshots remain unpublished and only redacted copies are public assets.
- Exact Mahoraga file/module ownership and exact The Loop module ownership unless supporting evidence or teammate confirmation is documented.
- Audit remediation until Astro/Vitest major dependency upgrades are planned and tested.

## Read First

Future agents should start here:

1. `docs/00_READ_FIRST.md`
2. `docs/01_CURRENT_STATUS.md`
3. `docs/09_AI_HANDOFF.md`
4. `PROJECT_CONTEXT.md`
5. `POSITIONING.md`
6. `FEATURED_PROJECT_SELECTION.md`
7. `PORTFOLIO_RISK_AUDIT.md`
8. `docs/10_PROJECT_EVIDENCE_REGISTRY.md`
9. `docs/11_LINK_REGISTRY.md`

## Source Of Truth Documents

- `DESIGN.md`
- `PROJECT_CONTEXT.md`
- `FEATURED_PROJECT_SELECTION.md`
- `POSITIONING.md`
- `CONTENT_ARCHITECTURE.md`
- `PORTFOLIO_RISK_AUDIT.md`
- `SITE_BLUEPRINT.md`
- `DESIGN_SYSTEM.md`
- `ASSET_REQUIREMENTS.md`
- `docs/00_READ_FIRST.md` through `docs/25_THE_LOOP_VISUAL_EVIDENCE_UPDATE.md`

## Locked Decisions

- Astro remains the default implementation stack.
- Static content comes before motion.
- Evidence comes before claims.
- Mahoraga, Hybrid GenAI Transaction Categorizer, and The Loop remain the featured projects.
- No fake screenshots, fake dashboards, fake metrics, or placeholder public links.

## Repository Status

- Local Git repository exists.
- Remote: `https://github.com/Atishay9828/portfolio.git`
- GitHub repository: `https://github.com/Atishay9828/portfolio`
- Default branch: `master`
- Visibility: Public
- README exists and renders on GitHub.
