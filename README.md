# AJ Portfolio Repository

This repository is the source of truth for AJ's portfolio project and now contains the conservative Astro static scaffold.

The portfolio positions AJ as:

- Primary identity: AI Systems Engineer
- Secondary identity: Product Engineer

The site is not implemented yet. This repo currently contains planning, architecture, design, content, risk, evidence, and handoff documentation that must guide the eventual implementation.

## Current Phase

Astro static scaffold complete; evidence hardening continues before production-ready UI polish.

The current implementation is a conservative static content shell backed by the evidence docs. Production-ready UI polish remains blocked until portfolio-local assets, role/contribution details, resume publication, and benchmark/workflow evidence are complete.

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
- Tests for featured ordering, verified links, resume gating, and route definitions.

Still blocked:
- Public resume CTA until a final PDF exists under `public/resume/`.
- Production visual polish until screenshots, demos, and diagram render/mobile QA are complete.
- Hybrid latency/cost claims until benchmark/routing evidence is executed.
- Ownership/role claims until contribution details are documented.

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
- `docs/00_READ_FIRST.md` through `docs/17_RESUME_PUBLICATION_PLAN.md`

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
