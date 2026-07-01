# AJ Portfolio Repository

This repository is the source of truth for AJ's portfolio project and contains the conservative Astro static scaffold plus evidence-hardening work for the featured projects.

The portfolio positions AJ as:

- Primary identity: AI Systems Engineer
- Secondary identity: Product Engineer

The site is implemented as an evidence-safe static shell. This repo also contains the planning, architecture, design, content, risk, evidence, and handoff documentation that must guide future implementation.

## Current Phase

Astro static scaffold, first implementation hardening pass, first evidence import/case-study hardening pass, imported asset review, Hybrid sample-data visual replacement pass, Hybrid sample routing proof pass, Hybrid local benchmark pass, Hybrid History AI Insight evidence review, conservative design-system polish, and polished screenshot QA recapture are complete; evidence hardening continues before production launch.

The current implementation is a conservative static content shell backed by the evidence docs. It has been visually tightened, but production launch remains blocked until portfolio-local assets, role/contribution details, resume publication, full endpoint/fallback benchmark evidence, and workflow evidence are complete.

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
- Public CTA gating for Known-but-not-public-ready LinkedIn, email, and resume assets.
- Imported real candidate visuals under `public/assets/projects/...` from verified external repos.
- Hardened featured case-study pages with documented architecture, evidence status, limitations, missing proof, and next-evidence sections.
- Replaced Hybrid `predict.png` and `memory.png` with safe sample-data frontend UI captures.
- Added `docs/19_HYBRID_ROUTING_PROOF.md` and sample/unmeasured Hybrid routing rows without benchmark claims.
- Added `docs/20_HYBRID_BENCHMARK_RESULTS.md` with local read-only ONNX classifier/routing benchmark results.
- Added `docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md` documenting the click-through History AI Insight panel and the limits of the current list-view screenshot.
- Conservative Signal Lab-aligned design-system polish for the static shell without changing evidence states or activating blocked CTAs.
- Fresh polished screenshot QA under `docs/reviews/screenshots/` with review notes in `docs/22_SCREENSHOT_QA_REVIEW.md`.

Still blocked:
- Public resume CTA until a final PDF exists under `public/resume/`.
- LinkedIn and email CTAs until they are verified/confirmed public-ready.
- Production visual polish until imported candidate visuals, missing screenshots/demos, and diagram render/mobile QA are complete.
- Hybrid endpoint latency, Qwen fallback latency, cost, fallback-rate, and production claims until full endpoint/fallback benchmark evidence exists.
- Hybrid backend/model-output claims until the model/backend path is captured or benchmarked end to end.
- Hybrid History AI Insight visual proof until a safe sample transaction is opened and the real AI Insight panel is captured from `/transaction-insight`.
- The Loop workflow screenshot polish until the deployment/server access issue is fixed by the teammate/friend with access.
- Ownership/role claims until contribution details are documented.
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
- `docs/00_READ_FIRST.md` through `docs/22_SCREENSHOT_QA_REVIEW.md`

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
