# 09_AI_HANDOFF.md

Date: 2026-07-06

## Current Project State

The portfolio now has a conservative Astro static scaffold, a first implementation hardening pass, a conservative design-system polish pass, fresh polished screenshot QA, a featured case-study copy polish pass, a role/contribution evidence framework, owner-reviewed featured contribution wording, a published primary SDE resume CTA, owner-approved LinkedIn/email CTAs, a final proof/visual launch-readiness audit, imported verified The Loop live-deployment visuals, and simplified compact public-link icon polish. The strategy is strong and should not be redesigned.

The repository now has a continuity system under `docs/00..25`, including current status, decisions, architecture, design/content summaries, asset tracker, backlog, progress log, AI handoff, project evidence registry, link registry, featured evidence review, screenshot/import plan, Hybrid benchmark plan, Hybrid routing proof, Hybrid benchmark results, The Loop workflow walkthrough, resume publication plan, polished screenshot QA review, role/contribution evidence framework, owner-reviewed contribution wording, launch-readiness audit, and The Loop visual evidence update.

Limited Astro static scaffolding has been completed for the homepage and three featured case-study shells. Production-ready UI polish is still blocked.

First hardening pass status:
- Project/link/evidence data remains centralized and routes are data-driven.
- Personal CTAs are active only where the destination is verified or owner-approved: GitHub, the repo-local SDE resume, LinkedIn, and email. The Data Analyst resume remains unpublished and unexposed.
- Public-link icons are visual polish only. The header keeps Resume as the only compact text CTA and uses icon-only GitHub/LinkedIn links. Hero and contact remain descriptive, and the footer is now only a quiet static-first build note with no repeated CTA cluster. Destinations and evidence status are unchanged.
- Desktop and mobile screenshot QA exists under `docs/reviews/screenshots/`.
- `npm audit` reports 17 vulnerabilities; available fixes require major dependency upgrades, so no automatic fix was applied.

Conservative design-system polish status:
- Global CSS now has tighter spacing rhythm, section bands, focus states, dark surface layering, compact timeline styling, and stronger responsive constraints.
- Hero copy is sharper and proof anchors link to the case-study shells.
- Featured project modules render status-aware evidence panels plus small candidate visual previews without upgrading Known assets to Verified proof.
- Hybrid benchmark presentation is visually framed as local classifier/routing evidence only, not production SLA, endpoint latency, fallback latency, cost, or fallback-rate proof.
- Timeline, secondary work, lab projects, and systems map remain visually smaller than the featured trio.
- Fresh polished screenshot QA was captured on 2026-07-01 with Microsoft Edge headless and GPU-safe flags. Review notes live in `docs/22_SCREENSHOT_QA_REVIEW.md`; updated PNGs live in `docs/reviews/screenshots/`.
- `docs/24_LAUNCH_READINESS_AUDIT.md` recorded the pre-Loop-visual readiness split at 72/100. `docs/25_THE_LOOP_VISUAL_EVIDENCE_UPDATE.md` is the current addendum: estimated score 82/100, conditionally ready for conservative soft launch, still blocked for polished/final launch by remaining proof gaps. Existing polished screenshot PNGs predate public CTA, contribution-section, and Loop visual updates.

Evidence import and case-study hardening status:
- Real candidate visuals were imported from verified external repos into `public/assets/projects/...`.
- Imported visuals are Known candidates, not final Verified polished assets.
- Case-study pages now render documented evidence sections for all three featured projects.
- Featured case-study copy has been sharpened around problem/build, architecture, proof status, limitations, and next proof without promoting any Known/Needed evidence state.
- Role/contribution details are now owner-reviewed for featured projects and rendered in public case-study data with role labels, contribution summaries, collaborative scope, and still-to-verify items.
- `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md` defines the safe owner-reviewed wording, unsafe wording to avoid, and remaining proof limits.
- Mahoraga is framed around adaptive-agent environment design, curriculum pressure, reward-loop proof, and reward-hacking limits rather than anime/game novelty.
- Hybrid is framed around merchant override, local ONNX classification, confidence/rule fallback, local-only benchmark scope, and unmeasured endpoint/Qwen/cost/fallback-rate/accuracy gaps.
- The Loop is framed around campus-event coordination workflows with persisted state, RSVP/join, friends/chat/carpool, and explicit reliability/ownership limits. Owner-provided live-deployment screenshots now cover events list, event detail, map view, landing/login, and redacted profile/friends states.
- Hybrid routing proof includes safe sample rows from documented examples, and `docs/20_HYBRID_BENCHMARK_RESULTS.md` now records a local read-only ONNX classifier/routing benchmark. Cost, fallback-rate, endpoint latency, Qwen fallback latency, and production SLA claims remain blocked.
- Hybrid History AI Insight behavior is source-backed in `docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md`: clicking one History transaction opens a side panel that calls `POST /transaction-insight` and summarizes that selected transaction plus recent same-category history. The current `history.png` shows only the list view, so an opened-panel screenshot remains Needed before AI insights are used as visual evidence.
- The Loop workflow is documented from the existing walkthrough. The earlier screenshot-access blocker is resolved for public-safe owner-provided deployment screenshots; raw profile/friends screenshots remain excluded from public use.

Imported asset visual/privacy review status:
- Review results live in `docs/18_IMPORTED_ASSET_REVIEW.md`.
- Homepage-approved asset: Mahoraga `dashboard_preview.png`.
- Case-study-only assets: Mahoraga `stitch_aero_screenshot.png`, The Loop `interest_selection.png`.
- Candidate only: Mahoraga `training_metrics.png`.
- Replaced with safe sample-data UI proof: Hybrid `predict.png`, Hybrid `memory.png`.
- Replace before polish: The Loop `landing_page.jpg`.
- Sample-label needed in final presentation if used: Hybrid `categories.png`, `history.png`.
- Hybrid replacement screenshots were captured from the verified Hybrid frontend using synthetic demo transactions. They are frontend UI proof, not backend benchmark/model-output evidence. The earlier `C:\tmp` clone did not include `models/distilbert.onnx`, but a separate local Hybrid repo now has `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx` available for local benchmark verification.
- Hybrid routing proof lives in `docs/19_HYBRID_ROUTING_PROOF.md`; local measured classifier/routing results live in `docs/20_HYBRID_BENCHMARK_RESULTS.md`.
- Hybrid History AI Insight evidence status lives in `docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md`.

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
- Personal CTAs hardened so only Verified/owner-approved destinations are active: GitHub, the repo-local SDE resume, LinkedIn, and email.
- Mobile wrapping/responsiveness hardened without redesigning the layout.
- Screenshot QA captured for the homepage and all three case-study routes at desktop and mobile widths.
- Dependency audit run with `npm audit`; results recorded as 14 moderate, 2 high, and 1 critical vulnerabilities.
- First evidence import and case-study hardening pass completed on 2026-06-26.
- Imported candidate visuals for Mahoraga, Hybrid Categorizer, and The Loop into `public/assets/projects/...`.
- Added documented case-study sections for what was built, architecture summary, key engineering decisions, evidence status, limitations, missing proof, and next evidence.
- Imported asset visual/privacy review completed on 2026-06-27 and recorded in `docs/18_IMPORTED_ASSET_REVIEW.md`.
- Hybrid sample-data visual proof completed on 2026-06-27: `predict.png` and `memory.png` were replaced with running-frontend captures using synthetic demo transactions, and project data/docs now label Hybrid transaction visuals as sample/demo data.
- Hybrid routing proof without benchmark claims completed on 2026-06-28: added `docs/19_HYBRID_ROUTING_PROOF.md` and sample/unmeasured routing rows. Later on 2026-06-28, the local ONNX runtime asset was located at `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx`.
- Hybrid local benchmark completed on 2026-06-30: added `docs/20_HYBRID_BENCHMARK_RESULTS.md` and measured local classifier/routing rows to `src/data/projects.ts`; Qwen fallback was not called.
- Hybrid History AI Insight evidence review completed on 2026-06-30: source inspection confirmed the opened-transaction panel and `/transaction-insight` behavior, while the existing `history.png` remained list-view evidence only.
- Conservative static shell design-system polish completed on 2026-06-30 without activating pending CTAs or changing evidence states.
- Validation passed with `npm.cmd test` and `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build`.
- Fresh polished screenshot QA captured on 2026-07-01 for the homepage desktop/mobile and the three featured case-study desktop routes.
- Featured case-study copy polish completed on 2026-07-01 while preserving pending proof, local-only benchmark scope, blocked The Loop workflow screenshots, and missing role/contribution details.
- Role/contribution evidence framework completed on 2026-07-03 in `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md`.
- Owner-reviewed contribution wording added on 2026-07-03 for Mahoraga, Hybrid GenAI Transaction Categorizer, and The Loop without inventing exact file/module ownership.
- Primary SDE resume CTA published on 2026-07-03 from `E:\Downloads\ATISHAY_Software_Intern.pdf` to `public/resume/atishay-jain-sde-resume.pdf`; Data Analyst resume was not published.
- Owner-approved public LinkedIn CTA activated on 2026-07-03 at `https://www.linkedin.com/in/atishay9828/`.
- Owner-approved public email CTA activated on 2026-07-03 at `mailto:ajain8_be23@thapar.edu`.
- Launch-readiness audit completed on 2026-07-04 in `docs/24_LAUNCH_READINESS_AUDIT.md`; public CTAs are no longer launch blockers.
- The Loop visual evidence update completed on 2026-07-06 in `docs/25_THE_LOOP_VISUAL_EVIDENCE_UPDATE.md`; profile/friends captures were redacted before public import.
- Public link icon polish completed on 2026-07-07 using local inline SVGs for GitHub, LinkedIn, email, SDE resume, and a subtle Featured work arrow; approved destinations remained unchanged.
- Compact public link icon simplification completed on 2026-07-07 after owner feedback: header/footer social/contact labels were reduced to icon-only controls with accessible labels, while Resume remains text-visible.
- Final CTA hierarchy polish completed on 2026-07-08: footer CTA repetition was removed, header stayed compact, and contact remains the full CTA surface.
- Homepage Signal Corridor polish completed on 2026-07-08: CSS-only numbered markers now connect the main proof path without adding JS, fake visuals, or claim changes.
- Hero visual density polish completed on 2026-07-08: the right rail now includes an abstract Model/API/Memory/UI/Proof chain plus compact role stack, with no fake dashboard or metric content.
- Project page density polish completed on 2026-07-08: case-study pages now use a smaller `← Featured work` link and one compact Evidence boundary section instead of repeated disclaimer boxes.
- The Loop visual verification completed on 2026-07-08: existing public workflow screenshots were present in `public/assets/projects/the-loop/`, no new import was needed, and labels were tightened to owner-captured/prototype-evidence wording.
- Hybrid observed fallback wording added on 2026-07-08: public copy may mention approximate owner-observed CPU-only/offline fallback improvement from ~60-80s to ~5-13s, but this remains separate from the formal ONNX benchmark and does not unblock production, endpoint, cost, fallback-rate, or accuracy claims.

## Missing Work

- Revise diagrams marked Not Ready in `docs/13_FEATURED_EVIDENCE_REVIEW.md`.
- Render and mobile-QA selected Mermaid diagrams.
- Collect remaining screenshots/demos after blockers clear.
- Replace remaining weak/mismatched imported assets and keep Hybrid category/history screenshots sample-labeled if used.
- Capture a safe sample-data Hybrid History screenshot with one transaction opened and the real AI Insight panel visible if AI insights should be used as portfolio screenshot evidence.
- Map exact Mahoraga file/module ownership only if supporting evidence is supplied, and keep The Loop module ownership collaborative unless teammate-confirmed evidence separates it.
- Finalize limitations/failure modes and tradeoff copy for featured projects.
- Revisit final case-study tradeoff/limitation copy after role/contribution details, diagram QA, and missing visual/benchmark evidence are supplied.
- Extend Hybrid benchmarking to the full FastAPI endpoint and Qwen fallback path if endpoint/fallback latency, cost, fallback-rate, or production claims are needed.
- Add concrete design token values for typography, breakpoints, focus rings, and z-index.
- Use the fresh polished screenshot QA in `docs/22_SCREENSHOT_QA_REVIEW.md` as the current visual QA baseline.
- Recapture current screenshot QA because the 2026-07-01 polished screenshots predate the public CTA and contribution-section updates.
- Plan and test major dependency upgrades needed to remediate current audit findings.

## Current Blockers

- Global contact CTAs are now active for GitHub, SDE resume, LinkedIn, and email; the Data Analyst resume remains unpublished.
- Featured project evidence is improved but incomplete; diagram review, limitation notes, and owner-reviewed contribution wording are Known, while screenshots/demos, exact ownership details where needed, final rendered diagram QA, and deeper proof artifacts remain incomplete.
- Hybrid Categorizer deployment link, AI Resume sample output/ATS report, Webcam screenshots/demo, and lab project links remain Missing.
- Website scaffold exists, but it is a conservative static shell only.
- Static shell design is cleaner and more Signal Lab-aligned. It is conditionally ready for a conservative soft launch, but polished/final launch is still blocked.
- Current dependency audit has unresolved vulnerabilities because remediation requires major version changes.
- Imported screenshots are not all final polished proof; Hybrid has safe sample-data UI proof plus local classifier/routing benchmark evidence, and The Loop now has verified public-safe live-deployment visual states. Hybrid still needs endpoint/Qwen fallback/model-output evidence before stronger AI-system claims.
- Hybrid History AI Insight panel is not yet screenshot-verified; the current History asset shows transaction rows and route tags only.

## Known Risks

- AI Systems Engineer positioning can sound inflated without visible architecture proof.
- Mahoraga can be misread as a game/anime gimmick unless framed around adaptive agents and reward design.
- Hybrid Categorizer can look like a classifier demo without routing/latency/memory evidence.
- The Loop must remain featured to prevent AI-only tunnel vision.
- Fake screenshots, fake dashboards, fake metrics, or placeholder links would damage trust.
- Motion can hurt recruiter efficiency if added before static content is strong.
- Major dependency upgrades can break Astro integration behavior and should be handled as a separate tested milestone.

## Next Recommended Task

After the Loop visual evidence update, recapture current screenshots for the post-CTA/post-contribution/post-Loop-visual pages, capture the Hybrid History AI Insight panel with safe sample data if needed, revise/render/mobile-QA diagrams, extend Hybrid benchmarking to the full endpoint/Qwen fallback path if needed, optionally capture end-to-end Hybrid backend/model-output proof, and then do the final case-study proof/launch pass.

## Imported Candidate Assets

- Mahoraga: `public/assets/projects/mahoraga/dashboard_preview.png`, `stitch_aero_screenshot.png`, `training_metrics.png`.
- Hybrid Categorizer: `public/assets/projects/hybrid-categorizer/predict.png`, `categories.png`, `history.png`, `memory.png`.
- The Loop: `public/assets/projects/the-loop/the-loop-events-list-live.png`, `the-loop-events-list-alt-live.png`, `the-loop-event-detail-live.png`, `the-loop-map-view-live.png`, `the-loop-landing-live.png`, `the-loop-profile-live-redacted.png`, `the-loop-friends-live-redacted.png`; legacy `landing_page.jpg` and `interest_selection.png` remain in the repo but are no longer preferred public visuals.

Notes:
- The Loop `landing_page.jpg` is low resolution and superseded by `the-loop-landing-live.png`.
- Do not publish raw profile/friends Loop captures; use only redacted copies or cleaner future recaptures.
- Hybrid `predict.png` and `memory.png` are safe sample-data frontend UI captures; Hybrid `categories.png` and `history.png` need sample/demo labeling in final surrounding copy if used. The current `history.png` does not show the opened-transaction AI Insight panel.
- Mahoraga `training_metrics.png` must not be used for metric claims until reviewed and interpreted.

Review outcomes:
- `public/assets/projects/mahoraga/dashboard_preview.png`: approved for homepage/case-study visual use.
- `public/assets/projects/mahoraga/stitch_aero_screenshot.png`: case-study only.
- `public/assets/projects/mahoraga/training_metrics.png`: candidate only; no metric claims yet.
- `public/assets/projects/hybrid-categorizer/predict.png`: replaced 2026-06-27 with synthetic sample-data prediction-flow UI proof.
- `public/assets/projects/hybrid-categorizer/categories.png`: sample/demo labeling needed if used.
- `public/assets/projects/hybrid-categorizer/history.png`: sample/demo labeling needed if used; useful for route tags and list-view history but not AI Insight panel proof or benchmark proof.
- `public/assets/projects/hybrid-categorizer/memory.png`: replaced 2026-06-27 with synthetic sample-data merchant-memory UI proof.
- `public/assets/projects/the-loop/the-loop-events-list-live.png`: primary public visual.
- `public/assets/projects/the-loop/the-loop-event-detail-live.png`: supporting workflow visual.
- `public/assets/projects/the-loop/the-loop-map-view-live.png`: supporting map-discovery visual.
- `public/assets/projects/the-loop/the-loop-landing-live.png`: optional landing/login support.
- `public/assets/projects/the-loop/the-loop-profile-live-redacted.png`: supporting profile visual with contact details masked.
- `public/assets/projects/the-loop/the-loop-friends-live-redacted.png`: supporting friends visual with sent-request username masked.

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
- `docs/reviews/screenshots/homepage-desktop-polished.png`
- `docs/reviews/screenshots/homepage-mobile-polished.png`
- `docs/reviews/screenshots/mahoraga-desktop-polished.png`
- `docs/reviews/screenshots/hybrid-desktop-polished.png`
- `docs/reviews/screenshots/the-loop-desktop-polished.png`

Capture notes:
- Earlier Microsoft Edge headless succeeded with GPU/software-rasterizer disable flags.
- Chrome headless failed earlier with `GPU process isn't usable`; do not treat that as a site failure.
- The 2026-07-01 polished recapture used Microsoft Edge headless with `--disable-gpu`, `--disable-software-rasterizer`, `--disable-dev-shm-usage`, `--no-sandbox`, and `--disable-features=VizDisplayCompositor`.
- Astro preview worked in foreground, but background preview launch was unreliable in this shell; the successful capture served the built `dist/` directory with the bundled Python static server.
- Full-page capture required scrolling first so lazy images loaded, and sticky header positioning was disabled only during screenshot stitching to avoid duplicate headers.

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
- Hybrid routing proof: `docs/19_HYBRID_ROUTING_PROOF.md`; safe sample table only.
- Hybrid benchmark results: `docs/20_HYBRID_BENCHMARK_RESULTS.md`; local read-only ONNX classifier/routing benchmark only, no endpoint/Qwen fallback/cost proof.
- Hybrid History AI Insight evidence: `docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md`; click-through panel source-backed, screenshot proof Needed.
- Role/contribution evidence framework: `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md`; owner-reviewed contribution wording exists, while exact module ownership and stronger benchmark/performance claims remain limited by the still-to-verify items.

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

## Public Contact Links

- Primary SDE resume: `public/resume/atishay-jain-sde-resume.pdf`; copied from `E:\Downloads\ATISHAY_Software_Intern.pdf` on 2026-07-03. The Data Analyst resume was not published.
- LinkedIn: `https://www.linkedin.com/in/atishay9828/`; owner-approved and active on 2026-07-03. Automated verification was previously blocked by LinkedIn HTTP 999.
- Email: `mailto:ajain8_be23@thapar.edu`; owner-approved and active on 2026-07-03.

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
12. `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md`
13. `docs/24_LAUNCH_READINESS_AUDIT.md`

## Exact Next Prompt Recommendation

```text
Continue from the conservative Astro static scaffold, `docs/24_LAUNCH_READINESS_AUDIT.md`, and `docs/25_THE_LOOP_VISUAL_EVIDENCE_UPDATE.md`. The current score estimate is 82/100: conditionally ready for conservative soft launch, blocked for polished/final launch by remaining proof gaps. Do not add fake screenshots, fake metrics, fake demos, or unverified public claims. Owner-reviewed contribution wording exists for featured projects, but do not invent exact Mahoraga file/module ownership or exact The Loop module ownership. The primary SDE resume is already published at `public/resume/atishay-jain-sde-resume.pdf`; LinkedIn is active at `https://www.linkedin.com/in/atishay9828/`; email is active at `mailto:ajain8_be23@thapar.edu`; do not publish the Data Analyst resume unless AJ explicitly asks. Recapture current screenshots before claiming final visual QA, because existing polished screenshots predate the public CTA, contribution-section, and Loop visual updates. The Loop now has owner-provided deployment screenshots; use only the redacted profile/friends copies. If using Hybrid History AI insights visually, open one safe sample transaction and capture the real AI Insight panel from `/transaction-insight`; do not invent insight text. Extend Hybrid benchmarking to the full endpoint/Qwen fallback path before publishing endpoint latency, fallback latency, cost, fallback-rate, or production claims, and then harden the case-study pages.
```
