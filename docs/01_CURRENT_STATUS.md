# 01_CURRENT_STATUS.md

Date: 2026-06-30

## Current Phase

Astro static scaffold created, first implementation hardening pass completed, and conservative design-system polish completed; evidence hardening continues before production launch.

The strategy, positioning, content architecture, risk audit, site blueprint, design system, asset requirements, continuity docs, evidence registry, featured evidence pack, diagram specs, evidence review, screenshot/import plan, Hybrid benchmark plan, Hybrid routing proof, Hybrid local benchmark results, The Loop workflow walkthrough, resume publication plan, and conservative Astro scaffold exist.

First implementation review status:
- Architecture remains clean enough for the next milestone: project/link/evidence data is centralized, route definitions are data-driven, and homepage/case-study rendering is separated into section/project components.
- Known-but-not-public-ready personal CTAs are no longer active links. GitHub remains active because it is Verified; LinkedIn, email, and resume are rendered as pending until verification/publication is complete.
- Responsive CSS was hardened for mobile wrapping and viewport clipping without changing the site structure or adding motion.
- Screenshot QA was captured under `docs/reviews/screenshots/` for desktop and mobile views.
- `npm audit` currently reports 17 vulnerabilities: 14 moderate, 2 high, and 1 critical. Direct dependencies are affected (`@astrojs/check`, `@astrojs/mdx`, `astro`, `vitest`), but available fixes require major version changes, so no automatic fix was applied.

First evidence import and case-study hardening status:
- Documented external repo assets were imported into `public/assets/projects/...` as Known candidates, not final Verified polished visuals.
- Featured case-study pages now render documented sections for what was built, architecture summary, decisions, evidence status, limitations/tradeoffs, missing proof, and next evidence needed.
- Mahoraga includes adaptive-agent and reward-system proof framing without robust-performance claims.
- Hybrid includes a local read-only ONNX classifier/routing benchmark table with measured local latency, while cost, fallback-rate, endpoint latency, and production SLA claims remain blocked.
- The Loop includes the documented discovery, interest, RSVP/join, friends/chat/carpool, admin, and edge-case workflow.
- Role/contribution copy remains `Role/contribution details pending verification.`

Conservative design-system polish status:
- Global spacing, section rhythm, dark surface layering, focus states, and responsive wrapping were tightened without adding GSAP, WebGL, scroll animations, purple/blue gradients, blobs, fake screenshots, fake metrics, or public pending CTAs.
- Hero identity copy was sharpened and proof anchors now link to the three case-study shells while preserving pending resume/contact states.
- Featured project modules now show status-aware evidence panels and small visual-candidate previews while keeping every asset labeled as Known rather than Verified proof.
- Case-study pages now frame Hybrid benchmark evidence as a local classifier/routing benchmark only, not a production SLA or endpoint/fallback benchmark.
- Timeline, secondary work, lab projects, and systems map remain visually smaller than featured work.
- Fresh screenshot capture was attempted against the rebuilt static output, but local Chrome/Edge headless capture failed with GPU-process errors. Existing earlier screenshots remain in `docs/reviews/screenshots/`; recapture remains Needed when the browser environment is stable.

Imported asset visual/privacy review status:
- Review results are recorded in `docs/18_IMPORTED_ASSET_REVIEW.md`.
- Mahoraga `dashboard_preview.png` is approved for homepage/case-study visual use.
- Mahoraga `stitch_aero_screenshot.png` and The Loop `interest_selection.png` are approved for case-study-only support.
- Mahoraga `training_metrics.png` remains Candidate only; no metric claims may be published without methodology/evaluation interpretation.
- Hybrid `predict.png` and Hybrid `memory.png` were replaced on 2026-06-27 with local captures from the verified Hybrid frontend using synthetic demo transactions.
- Hybrid `categories.png` and `history.png` remain case-study candidates only and must be explicitly labeled as sample/demo transaction data if used.
- Hybrid History AI Insight behavior is documented in `docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md`: click one transaction in History to open a side panel that calls `POST /transaction-insight` and summarizes that transaction plus recent same-category history. The current `history.png` does not show this opened panel, so AI Insight screenshot proof remains Needed.
- Hybrid safe routing proof was added on 2026-06-28 in `docs/19_HYBRID_ROUTING_PROOF.md`; local classifier/routing benchmark results were added on 2026-06-30 in `docs/20_HYBRID_BENCHMARK_RESULTS.md`.
- The Loop `landing_page.jpg` must still be replaced before polish.
- The Loop workflow screenshot capture is temporarily blocked by a deployment/server access issue; a teammate/friend with access will fix it later.
- Hybrid replacement screenshots are frontend UI proof only; the local benchmark used `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx` outside this repo. The model was not copied into this portfolio repo.

## Frontend Implementation Allowed?

Limited Astro static scaffolding: Completed for the homepage and three featured case-study shells.

Production-ready UI polish: No.

Reason:
- Static scaffolding can use conservative copy, verified links, source-of-truth docs, and placeholder-free content structure.
- Global contact assets are Known/Verified, but the public resume and LinkedIn/browser verification are not fully public-ready.
- Featured project evidence is documented enough for a first static shell, but portfolio-local screenshots/demos, role/contribution details, final rendered diagram QA, and deeper proof artifacts are not ready.

## Current Blockers

| Blocker | Status | Impact |
|---|---|---|
| GitHub remote | Verified | `origin` points to `https://github.com/Atishay9828/portfolio.git`; `origin/master` exists. |
| GitHub repository health | Verified | `gh repo view` confirms `Atishay9828/portfolio`, default branch `master`, visibility `PUBLIC`; README exists on GitHub. |
| Resume PDF | Known | Local PDFs exist outside repo; public `/resume` path remains blocked until final PDF is copied into repo/public assets. |
| GitHub profile URL | Verified | Global identity link available. |
| LinkedIn URL | Known | Recruiter contact path available but still needs manual browser verification before public CTA. |
| Email address | Known | Contact address available; confirm preferred public email before launch. |
| Known project links | Verified | Known project links were checked on 2026-06-26. |
| Additional project repo links | Verified | Hybrid Categorizer, The Loop, AI Resume Tailoring Engine, and Webcam Motion Alert repos were verified on 2026-06-26. |
| Featured project diagram review | Known | Spec-level review exists in `docs/13_FEATURED_EVIDENCE_REVIEW.md`; final rendered/mobile QA is still required before production polish. |
| Featured project screenshots/demos | Known/Needed/Missing | Hybrid prediction-flow and merchant-memory UI screenshots now exist as safe sample-data portfolio-local assets; The Loop workflow screenshots, Mahoraga demo media, and final screenshot/demo coverage are still required before final visual implementation. |
| Role/contribution details | Needed | Required for ownership clarity. |
| Hybrid benchmark/routing evidence | Known/Partial | Sample routing proof exists in `docs/19_HYBRID_ROUTING_PROOF.md`; local read-only ONNX classifier/routing benchmark results exist in `docs/20_HYBRID_BENCHMARK_RESULTS.md`. Full FastAPI endpoint latency, Qwen fallback latency, cost, fallback-rate, and production SLA claims remain Needed/blocked. |
| The Loop workflow walkthrough | Known/Blocked | Draft workflow source exists in `docs/16_THE_LOOP_WORKFLOW_WALKTHROUGH.md`; screenshot capture is temporarily blocked by a deployment/server access issue until the teammate/friend with access fixes it. |
| Astro static scaffold | Verified | Homepage and `/projects/mahoraga`, `/projects/hybrid-categorizer`, `/projects/the-loop` build successfully. Verified locally on 2026-06-26 with `npm.cmd test` and `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build`. |
| First implementation hardening pass | Verified | Evidence-gating, test coverage, responsive CSS hardening, screenshot QA, and dependency audit completed on 2026-06-26. |
| Dependency audit | Known | `npm audit` reports 17 vulnerabilities; safe non-breaking fixes are not clearly available because fixes require major dependency changes. |
| Screenshot QA | Verified | Desktop and mobile screenshots exist in `docs/reviews/screenshots/`; Edge headless was used because Chrome headless failed with a GPU-process error. |
| Imported project visuals | Known | Real candidate assets were copied from verified external repos into `public/assets/projects/...`; visual/privacy review is still required before production polish. |
| Imported asset review | Known | `docs/18_IMPORTED_ASSET_REVIEW.md` classifies imported assets by homepage approval, case-study-only use, replacement need, sample-labeling need, and Hybrid sample-data UI replacement status. |
| Hybrid sample-data visual proof | Known | `predict.png` and `memory.png` were replaced from a local run of the verified Hybrid frontend with synthetic demo transactions. Not benchmark/model-output evidence. |
| Hybrid History AI Insight screenshot | Needed | Source review confirms the click-through History panel and `/transaction-insight` flow, but the current `history.png` only shows the list view. Capture a safe sample-data opened-transaction panel with real generated insight before using it as visual evidence. |
| Hybrid routing proof | Known | `docs/19_HYBRID_ROUTING_PROOF.md` and the Hybrid case study include documented sample routing rows only; every row is `sample/unmeasured`. |
| Case-study hardening | Verified | The three featured case-study routes now render documented architecture, evidence, limitation, missing-proof, and next-evidence sections. |
| Conservative design-system polish | Verified | Static shell visual hierarchy, section rhythm, evidence panels, focus states, and responsive behavior were polished without changing evidence states or activating blocked CTAs. |
| Fresh screenshot recapture | Needed | Attempted on 2026-06-30 against rebuilt static output, but Chrome/Edge headless failed with GPU-process errors. Existing earlier screenshots remain available; updated recapture is still Needed. |

## Verified Evidence Links

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

Verification notes:
- Kaggle `/edit` URL loads via GET and canonicalizes to the notebook page; HEAD returned 404.
- HuggingFace Space was public but runtime stage was `SLEEPING`, so visitors may see a cold start.
- Featured-project evidence pack and diagram specs were added on 2026-06-26.
- Featured-project evidence review, screenshot/import plan, Hybrid benchmark plan, The Loop workflow walkthrough, and resume publication plan were added on 2026-06-26.
- Diagram review is Known documentation evidence, not final rendered/mobile asset verification.

## Next Milestone

Screenshot and evidence completion after conservative static polish.

Completion criteria:
- Copy final resume PDF into repo/public assets and manually verify LinkedIn before public resume/contact CTAs.
- Confirm preferred public email before enabling email CTA.
- Render and mobile-QA selected Mermaid diagrams before using them as final visuals.
- Add featured project role/contribution details, remaining portfolio-local screenshots, and demos.
- Replace weak/mismatched imported assets, especially The Loop `landing_page.jpg`.
- Keep Hybrid category/history transaction screenshots explicitly sample-labeled in site copy/data if used.
- Capture or replace Hybrid History AI Insight screenshot only with a safe sample-data transaction opened and a real generated `/transaction-insight` response.
- Extend Hybrid benchmarking to the full FastAPI endpoint and Qwen fallback before publishing endpoint, fallback latency, cost, fallback-rate, or production claims.
- Wait for the teammate/friend with access to fix The Loop deployment/server issue before attempting workflow screenshot capture.
- Plan dependency major-version upgrades separately from evidence/content hardening.
- Update `docs/06_ASSET_TRACKER.md`, `docs/10_PROJECT_EVIDENCE_REGISTRY.md`, and `docs/11_LINK_REGISTRY.md`.
