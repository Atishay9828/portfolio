# 02_DECISIONS_LOG.md

Date: 2026-06-26

Purpose:
- Record durable decisions so future agents do not re-litigate settled strategy.

## Decisions

| Date | Decision | Rationale | Source |
|---|---|---|---|
| 2026-06-17 | Primary identity remains AI Systems Engineer. | Best matches projects involving adaptive agents, routing, memory, LLM workflows, and architecture tradeoffs. | `POSITIONING.md` |
| 2026-06-17 | Secondary identity remains Product Engineer. | The Loop and full-stack workflows prove user-facing product capability. | `POSITIONING.md` |
| 2026-06-17 | Featured projects remain Mahoraga, Hybrid GenAI Transaction Categorizer, and The Loop. | They map to adaptive AI systems, hybrid AI architecture, and product engineering. | `FEATURED_PROJECT_SELECTION.md` |
| 2026-06-17 | Astro remains the default implementation stack. | Portfolio is static-first and content/proof heavy; Astro minimizes JS and supports MDX/content collections well. | `PROJECT_CONTEXT.md` |
| 2026-06-17 | Evidence before claims. | The primary identity is credible only if project proof is visible. | `PORTFOLIO_RISK_AUDIT.md` |
| 2026-06-17 | No fake screenshots, fake dashboards, fake metrics, or placeholder links. | Fake evidence would undermine trust faster than weak visuals. | `DESIGN.md`, `PORTFOLIO_RISK_AUDIT.md` |
| 2026-06-17 | Static content before motion. | Recruiters and engineers need fast proof; motion should enhance, not gate, content. | `DESIGN.md`, `SITE_BLUEPRINT.md` |
| 2026-06-26 | Known links are not Missing, but they are not Verified. | Planning context supplied some project links, but this repo session did not verify them. | `ASSET_REQUIREMENTS.md`, `docs/10_PROJECT_EVIDENCE_REGISTRY.md` |
| 2026-06-26 | Production frontend implementation remained blocked at that point. | Evidence, contact assets, and remote setup were incomplete before the final hardening pass. | `docs/01_CURRENT_STATUS.md` |
| 2026-06-26 | Limited Astro static scaffolding can begin. | GitHub remote is verified and featured evidence is documented enough for a conservative content shell, but production-ready UI polish remains blocked by missing portfolio-local assets, role/contribution details, final rendered diagram QA, resume publication, and measured benchmark evidence. | `docs/01_CURRENT_STATUS.md`, `docs/13_FEATURED_EVIDENCE_REVIEW.md` |
| 2026-07-10 | The homepage depicts learning through seven stable story states. | A single progression from identity to operating model, builds, lessons, toolkit, systems, and collaboration is more specific and maintainable than unrelated visual effects. | `docs/34_PORTFOLIO_STORY_AND_LEARNING_PLAN.md`, `src/data/journey.ts` |
| 2026-07-10 | The Signal Core uses a reserved sticky desktop lane and disappears below 1180px. | Reserved layout space keeps the visual legible without covering project proof; smaller widths retain the complete static story. | `docs/35_VISUAL_MOTION_DIRECTION.md`, `docs/36_IMPLEMENTATION_AND_QA_PLAN.md` |
| 2026-07-10 | CSS transitions and the existing vanilla controller remain the motion runtime. | The current seven-state behavior does not justify GSAP or WebGL cost; heavier motion waits for a concrete scrubbed-path requirement. | `docs/35_VISUAL_MOTION_DIRECTION.md` |
| 2026-07-14 | Mobile reuses the seven-stop Signal Path through a left-edge drawer instead of adding a second navigation model. | Labeled destinations remain reachable without permanently narrowing the content column, while desktop and mobile keep one journey source of truth. | `src/data/journey.ts`, `src/pages/index.astro` |

## Decision Maintenance Rule

Add a new row whenever a major project, architecture, content, design, evidence, tooling, or deployment decision changes.
