# 09_AI_HANDOFF.md

Date: 2026-06-27

## Current Project State

The portfolio now has a conservative Astro static scaffold plus a first implementation hardening pass. The strategy is strong and should not be redesigned.

The repository now has a continuity system under `docs/00..17`, including current status, decisions, architecture, design/content summaries, asset tracker, backlog, progress log, AI handoff, project evidence registry, link registry, featured evidence review, screenshot/import plan, Hybrid benchmark plan, The Loop workflow walkthrough, and resume publication plan.

Limited Astro static scaffolding has been completed for the homepage and three featured case-study shells. Production-ready UI polish is still blocked.

First hardening pass status:
- Project/link/evidence data remains centralized and routes are data-driven.
- Known-but-not-public-ready personal CTAs are gated in the UI: LinkedIn, email, and resume are pending rather than active links.
- Desktop and mobile screenshot QA exists under `docs/reviews/screenshots/`.
- `npm audit` reports 17 vulnerabilities; available fixes require major dependency upgrades, so no automatic fix was applied.

Evidence import and case-study hardening status:
- Real candidate visuals were imported from verified external repos into `public/assets/projects/...`.
- Imported visuals are Known candidates, not final Verified polished assets.
- Case-study pages now render documented evidence sections for all three featured projects.
- Hybrid routing proof is intentionally a benchmark-pending table structure with no rows or latency/cost numbers.
- The Loop workflow is documented from the existing walkthrough; full screenshot coverage remains incomplete.

Imported asset visual/privacy review status:
- Review results live in `docs/18_IMPORTED_ASSET_REVIEW.md`.
- Homepage-approved asset: Mahoraga `dashboard_preview.png`.
- Case-study-only assets: Mahoraga `stitch_aero_screenshot.png`, The Loop `interest_selection.png`.
- Candidate only: Mahoraga `training_metrics.png`.
- Replaced with safe sample-data UI proof: Hybrid `predict.png`, Hybrid `memory.png`.
- Replace before polish: The Loop `landing_page.jpg`.
- Sample-label needed in final presentation if used: Hybrid `categories.png`, `history.png`.
- Hybrid replacement screenshots were captured from the verified Hybrid frontend using synthetic demo transactions. They are frontend UI proof, not backend benchmark/model-output evidence; the cloned repo did not include `models/distilbert.onnx`.

## Completed Work

- Strategy and positioning completed.
- Primary identity locked: AI Systems Engineer.
- Secondary identity locked: Product Engineer.
- Featured project selection locked: Mahoraga, Hybrid GenAI Transaction Categorizer, The Loop.
- Site blueprint completed.
- Design system completed at planning-token level.
- Asset requirements updated with Known/Verified/Missing/Needed/Not applicable statuses.
- Repository continuity docs created.
- Project evidence registry created.
- Link registry created.
- Known external evidence links verified on 2026-06-26.
- Global identity/contact links and additional project repo links recorded on 2026-06-26.
- Featured project evidence pack and Mermaid/spec diagram files created on 2026-06-26.
- Featured evidence review, screenshot/import plan, Hybrid benchmark methodology, The Loop workflow walkthrough, and resume publication plan created on 2026-06-26.
- GitHub remote and repository health verified on 2026-06-26.
- Astro, TypeScript, Tailwind, and MDX scaffold created on 2026-06-26.
- Static homepage implemented in the locked proof-first order.
- Static case-study shells created for Mahoraga, Hybrid GenAI Transaction Categorizer, and The Loop.
- Evidence-safe pending visual panels are used instead of fake screenshots, fake dashboards, fake metrics, or invented links.
- First implementation review and hardening pass completed on 2026-06-26.
- Personal CTAs hardened so only Verified GitHub is active; LinkedIn, email, and resume remain pending.
- Mobile wrapping/responsiveness hardened without redesigning the layout.
- Screenshot QA captured for the homepage and all three case-study routes at desktop and mobile widths.
- Dependency audit run with `npm audit`; results recorded as 14 moderate, 2 high, and 1 critical vulnerabilities.
- First evidence import and case-study hardening pass completed on 2026-06-26.
- Imported candidate visuals for Mahoraga, Hybrid Categorizer, and The Loop into `public/assets/projects/...`.
- Added documented case-study sections for what was built, architecture summary, key engineering decisions, evidence status, limitations, missing proof, and next evidence.
- Imported asset visual/privacy review completed on 2026-06-27 and recorded in `docs/18_IMPORTED_ASSET_REVIEW.md`.
- Hybrid sample-data visual proof completed on 2026-06-27: `predict.png` and `memory.png` were replaced with running-frontend captures using synthetic demo transactions, and project data/docs now label Hybrid transaction visuals as sample/demo data.
- Validation passed with `npm.cmd test` and `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build`.

## Missing Work

- Choose final resume PDF and copy it into repo/public assets.
- Manually verify LinkedIn in browser.
- Confirm preferred public email.
- Revise diagrams marked Not Ready in `docs/13_FEATURED_EVIDENCE_REVIEW.md`.
- Render and mobile-QA selected Mermaid diagrams.
- Collect screenshots/demos.
- Replace remaining weak/mismatched imported assets and keep Hybrid category/history screenshots sample-labeled if used.
- Add role/contribution details for featured and secondary projects.
- Finalize limitations/failure modes and tradeoff copy for featured projects.
- Execute Hybrid benchmark/routing table with real or clearly representative examples.
- Add concrete design token values for typography, breakpoints, focus rings, and z-index.
- Plan and test major dependency upgrades needed to remediate current audit findings.

## Current Blockers

- Global contact assets are Known/Verified but not fully public-ready.
- Featured project evidence is improved but incomplete; diagram review and limitation notes are Known, while screenshots/demos, role details, final rendered diagram QA, and deeper proof artifacts remain incomplete.
- Hybrid Categorizer deployment link, AI Resume sample output/ATS report, Webcam screenshots/demo, and lab project links remain Missing.
- Website scaffold exists, but it is a conservative static shell only.
- Current dependency audit has unresolved vulnerabilities because remediation requires major version changes.
- Imported screenshots are not final polished proof; Hybrid has safe sample-data UI proof, but The Loop still needs replacement/workflow coverage and Hybrid still needs benchmark/model-output evidence before stronger AI-system claims.

## Known Risks

- AI Systems Engineer positioning can sound inflated without visible architecture proof.
- Mahoraga can be misread as a game/anime gimmick unless framed around adaptive agents and reward design.
- Hybrid Categorizer can look like a classifier demo without routing/latency/memory evidence.
- The Loop must remain featured to prevent AI-only tunnel vision.
- Fake screenshots, fake dashboards, fake metrics, or placeholder links would damage trust.
- Motion can hurt recruiter efficiency if added before static content is strong.
- Major dependency upgrades can break Astro integration behavior and should be handled as a separate tested milestone.

## Next Recommended Task

Replace remaining weak/mismatched imported assets, capture missing workflow/demo screenshots, add role/contribution details, execute Hybrid benchmark/routing evidence, optionally capture end-to-end Hybrid backend/model-output proof after model setup, copy the final resume PDF into repo/public assets only after AJ selects it, manually verify LinkedIn, and confirm the public email.

## Imported Candidate Assets

- Mahoraga: `public/assets/projects/mahoraga/dashboard_preview.png`, `stitch_aero_screenshot.png`, `training_metrics.png`.
- Hybrid Categorizer: `public/assets/projects/hybrid-categorizer/predict.png`, `categories.png`, `history.png`, `memory.png`.
- The Loop: `public/assets/projects/the-loop/landing_page.jpg`, `interest_selection.png`.

Notes:
- The Loop `landing_page.jpg` is low resolution and should be replaced before production polish.
- Hybrid `predict.png` and `memory.png` are safe sample-data frontend UI captures; Hybrid `categories.png` and `history.png` need sample/demo labeling in final surrounding copy if used.
- Mahoraga `training_metrics.png` must not be used for metric claims until reviewed and interpreted.

Review outcomes:
- `public/assets/projects/mahoraga/dashboard_preview.png`: approved for homepage/case-study visual use.
- `public/assets/projects/mahoraga/stitch_aero_screenshot.png`: case-study only.
- `public/assets/projects/mahoraga/training_metrics.png`: candidate only; no metric claims yet.
- `public/assets/projects/hybrid-categorizer/predict.png`: replaced 2026-06-27 with synthetic sample-data prediction-flow UI proof.
- `public/assets/projects/hybrid-categorizer/categories.png`: sample/demo labeling needed if used.
- `public/assets/projects/hybrid-categorizer/history.png`: sample/demo labeling needed if used; useful for route tags but not benchmark proof.
- `public/assets/projects/hybrid-categorizer/memory.png`: replaced 2026-06-27 with synthetic sample-data merchant-memory UI proof.
- `public/assets/projects/the-loop/landing_page.jpg`: replace before polish due low resolution.
- `public/assets/projects/the-loop/interest_selection.png`: case-study only.

## Screenshot QA

Captured files:
- `docs/reviews/screenshots/homepage-desktop.png`
- `docs/reviews/screenshots/mahoraga-desktop.png`
- `docs/reviews/screenshots/hybrid-categorizer-desktop.png`
- `docs/reviews/screenshots/the-loop-desktop.png`
- `docs/reviews/screenshots/homepage-mobile.png`
- `docs/reviews/screenshots/mahoraga-mobile.png`
- `docs/reviews/screenshots/hybrid-categorizer-mobile.png`
- `docs/reviews/screenshots/the-loop-mobile.png`

Capture notes:
- Microsoft Edge headless succeeded with GPU/software-rasterizer disable flags.
- Chrome headless failed earlier with `GPU process isn't usable`; do not treat that as a site failure.

## Dependency Audit

`npm audit` result on 2026-06-26:
- Total vulnerabilities: 17.
- Severity: 14 moderate, 2 high, 1 critical.
- Direct dependencies affected: `@astrojs/check`, `@astrojs/mdx`, `astro`, and `vitest`.
- Safe non-breaking fixes: none clearly available. Reported fixes require major dependency changes, so `npm audit fix --force` was not run.

## Featured Project Evidence Pack

- Evidence pack: `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`
- Mahoraga diagrams: `docs/diagrams/mahoraga-architecture.md`, `docs/diagrams/mahoraga-reward-system.md`
- Hybrid diagrams: `docs/diagrams/hybrid-categorizer-routing.md`, `docs/diagrams/hybrid-categorizer-memory.md`
- The Loop diagrams: `docs/diagrams/the-loop-system.md`, `docs/diagrams/the-loop-realtime-flow.md`, `docs/diagrams/the-loop-auth-flow.md`

Status:
- Diagram/spec files are Known and need visual review.
- Diagram review results are in `docs/13_FEATURED_EVIDENCE_REVIEW.md`.
- Repo-contained screenshots/assets are Known and need portfolio-local selection or import.
- Limitation notes are drafted and need final case-study copy review.

## Verified Links

- Mahoraga GitHub repo: `https://github.com/Atishay9828/meta_Mahoraga`
- Mahoraga Kaggle notebook: `https://www.kaggle.com/code/atishay9828/meta-mahoraga/edit`
- Mahoraga HuggingFace demo: `https://huggingface.co/spaces/MridulNegi2005/Project-Mahoraga`
- Hybrid GenAI Transaction Categorizer YouTube walkthrough: `https://youtu.be/fsTXVh9JpoE`
- Hybrid GenAI Transaction Categorizer repo: `https://github.com/Atishay9828/Hybrid-GenAI-Transaction-Categorization`
- The Loop deployment: `https://the-loop-5m7u.onrender.com/`
- The Loop repo: `https://github.com/Atishay9828/TIET-LOOP`
- AI Resume Tailoring Engine repo: `https://github.com/Atishay9828/AI_Resume_Builder_ATS_Friendly`
- Webcam Motion Alert System repo: `https://github.com/Atishay9828/Webcam-Alert-App`
- GitHub profile: `https://github.com/Atishay9828/`
- Portfolio GitHub repository: `https://github.com/Atishay9828/portfolio`

## Known But Not Public-Ready Links

- Resume PDF candidates: `E:\Downloads\ATISHAY_Software_Intern.pdf` and `E:\Downloads\ATISHAY_Data_Analyst.pdf`; both exist locally but are outside the repo.
- Resume publication decision remains Needed; no resume was copied into `public/resume/`.
- LinkedIn: `https://www.linkedin.com/in/atishay9828/`; automated verification was blocked by LinkedIn HTTP 999.
- Email: `ajain8_be23@thapar.edu`; provided but not externally verified.

Verification caveats:
- Kaggle `/edit` URL loads via GET and canonicalizes to the notebook page; HEAD returned 404.
- HuggingFace Space was public and correct, but runtime was `SLEEPING` at verification time.

## Files Future AI Agents Must Read First

1. `docs/00_READ_FIRST.md`
2. `docs/01_CURRENT_STATUS.md`
3. `PROJECT_CONTEXT.md`
4. `POSITIONING.md`
5. `FEATURED_PROJECT_SELECTION.md`
6. `PORTFOLIO_RISK_AUDIT.md`
7. `SITE_BLUEPRINT.md`
8. `DESIGN_SYSTEM.md`
9. `docs/10_PROJECT_EVIDENCE_REGISTRY.md`
10. `docs/11_LINK_REGISTRY.md`
11. `docs/13_FEATURED_EVIDENCE_REVIEW.md`

## Exact Next Prompt Recommendation

```text
Continue from the conservative Astro static scaffold. Do not add fake screenshots, fake metrics, fake demos, or unverified public claims. Import portfolio-local screenshots only after visual review, add role/contribution details, execute the Hybrid benchmark/routing plan before publishing latency/cost claims, copy the selected public resume into `public/resume/`, manually verify LinkedIn, confirm the public email, and then harden the case-study pages.
```
