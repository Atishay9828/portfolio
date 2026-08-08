# 10_PROJECT_EVIDENCE_REGISTRY.md

Date: 2026-07-13

Purpose:
- Track portfolio evidence by project.
- Separate Known evidence from Verified evidence.
- Prevent public claims from outrunning proof.

Production-release note (2026-07-13): Mahoraga `training_metrics.png` is no longer rendered or copied to the public build because methodology/evaluation interpretation remains Needed. The selected Loop event-detail and map evidence now use visually reviewed `.webp` production encodes; evidence meaning and source status are unchanged.

## Status Meanings

- Known: link or artifact was provided, discovered in a verified source, or created as a repo spec, but is not final public-ready portfolio evidence.
- Verified: link or artifact was checked and confirmed usable.
- Missing: explicitly absent or not provided anywhere.
- Needed: must be created.
- Not applicable: not relevant for this project.

## Global Public CTA Evidence

| Item | Status | Notes |
|---|---|---|
| GitHub profile | Verified | Public profile link remains active. |
| SDE resume | Verified | The owner-provided one-page PDF content was checked and published at the repo-local asset path with the finalist achievement promoted to a standalone `ACHIEVEMENT` heading; it includes the live portfolio, GitHub, LinkedIn, and email annotations; CTA href is `/resume/atishay-jain-sde-resume.pdf`. |
| Data Analyst resume | Not applicable | Not published in this pass and not exposed by public CTA. |
| LinkedIn | Verified | Owner-approved public CTA activated on 2026-07-03 at `https://www.linkedin.com/in/atishay9828/`; automated LinkedIn verification was previously blocked by HTTP 999. |
| Email | Verified | Owner-approved public CTA activated on 2026-07-03 at `mailto:ajain8_be23@thapar.edu`. |

## Launch Readiness

| Item | Status | Notes |
|---|---|---|
| Final proof/visual launch-readiness audit | Verified | `docs/24_LAUNCH_READINESS_AUDIT.md` records the pre-Loop-visual 72/100 score; `docs/25_THE_LOOP_VISUAL_EVIDENCE_UPDATE.md` estimates 82/100 after The Loop live visual import; `docs/33_MANUAL_REVIEW_FIX_PASS.md` records the 2026-07-09 manual review fix pass. Conservative soft launch is stronger after tests/build/static smoke; polished/final launch remains blocked by remaining proof gaps and live browser QA. |

## Featured Projects

### Mahoraga

Portfolio tier: Featured

Verified links:
- GitHub: `https://github.com/Atishay9828/meta_Mahoraga`
- Kaggle notebook: `https://www.kaggle.com/code/atishay9828/meta-mahoraga`
- HuggingFace demo: `https://huggingface.co/spaces/MridulNegi2005/Project-Mahoraga`

Evidence status:
- Links: Verified.
- Diagram specs and generated SVGs: Known.
- Diagram review: Known in `docs/13_FEATURED_EVIDENCE_REVIEW.md`; reward-system diagram is Ready, architecture diagram needs revision.
- Imported screenshot/metrics candidates: Known portfolio-local files under `public/assets/projects/mahoraga/`; visual/privacy review recorded in `docs/18_IMPORTED_ASSET_REVIEW.md`.
- Local demo media: Needed.
- Metrics: Known in external repo, not selected or reviewed for portfolio.
- Role/contribution framework: Known in `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md`; owner-reviewed role label and contribution summary are available, while exact file/module ownership remains not documented.

Required assets:
- Architecture diagram review.
- Reward-system visualization review.
- Training timeline or metrics chart.
- Demo GIF/video.
- Failure mode or limitation note.
- Exact file/module ownership detail.

Missing assets:
- Local demo media.
- Demo media, final training/evaluation interpretation, and exact file/module ownership detail.
- Final reviewed training/evaluation artifact.
- Exact file/module ownership detail.
- Final tradeoff note.

Verification notes:
- GitHub repo loads as public repo `Atishay9828/meta_Mahoraga`.
- Kaggle `/edit` URL loads via GET as notebook title `MEta_Mahoraga` and canonicalizes to `/code/atishay9828/meta-mahoraga`; HEAD returned 404, so use GET/browser verification for this link.
- HuggingFace API confirms public Space titled `Mahoraga - Adaptive Combat RL Environment`; runtime was `SLEEPING`, so visitors may experience a cold start.
- Created diagram/spec files: `docs/diagrams/mahoraga-architecture.md` and `docs/diagrams/mahoraga-reward-system.md`.
- Limitation note drafted in `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`.
- Evidence hardening pass added `docs/13_FEATURED_EVIDENCE_REVIEW.md` and `docs/14_SCREENSHOT_IMPORT_PLAN.md`.
- Imported asset review added `docs/18_IMPORTED_ASSET_REVIEW.md`; `dashboard_preview.png` is homepage-approved, `stitch_aero_screenshot.png` is case-study-only, and `training_metrics.png` remains Candidate only.
- Role/contribution evidence framework updated in `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md`; owner-reviewed role wording exists, but exact file/module ownership is still not explicitly documented and must not be invented.

Can be shown publicly yet:
- Partially. Verified links, conservative copy, owner-reviewed contribution wording, and the reward-system diagram can support a first static homepage section, but full featured presentation remains blocked by architecture diagram revision, rendered/mobile diagram QA, demo media, selected screenshots/metrics, exact file/module ownership if needed, and final tradeoff copy.

### Hybrid GenAI Transaction Categorizer

Portfolio tier: Featured

Verified links:
- YouTube walkthrough: `https://youtu.be/fsTXVh9JpoE`
- GitHub repo: `https://github.com/Atishay9828/Hybrid-GenAI-Transaction-Categorization`

Evidence status:
- Walkthrough: Verified.
- Repo link: Verified.
- Deployment link: Missing.
- Diagram specs and generated SVGs: Known.
- Diagram review: Known in `docs/13_FEATURED_EVIDENCE_REVIEW.md`; both diagrams need revision before final frontend use.
- UI screenshots: Known portfolio-local files under `public/assets/projects/hybrid-categorizer/`; `predict.png` and `memory.png` were replaced on 2026-06-27 with running-frontend captures using synthetic demo data. `categories.png` and `history.png` remain case-study candidates that must be sample-labeled if used. The current `history.png` shows the History list view only, not the opened-transaction AI Insight panel.
- History AI Insight behavior: Known in `docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md`; clicking one History transaction opens `HistoryPanel`, which calls `POST /transaction-insight` using the selected transaction plus recent same-category history. Screenshot proof of that opened panel remains Needed.
- Benchmark/routing methodology: Known in `docs/15_HYBRID_BENCHMARK_AND_ROUTING_PLAN.md`.
- Safe sample routing proof: Known in `docs/19_HYBRID_ROUTING_PROOF.md`.
- Measured local classifier/routing table: Known in `docs/20_HYBRID_BENCHMARK_RESULTS.md` and `src/data/projects.ts`.
- Local endpoint/offline Qwen fallback examples: Known from owner-provided local testing on port 8001.
- Full hosted endpoint/fallback-rate/dataset-accuracy benchmark: Needed.
- Local ONNX runtime asset: Known at `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx`; not portfolio-local and not benchmark evidence by itself.
- Owner-observed fallback improvement: Known owner observation from local CPU-only/offline testing; approximate fallback latency improved from ~60-80s to ~5-13s. This is local endpoint/offline fallback evidence, not hosted production latency, zero-compute-cost proof, fallback-rate proof, dataset accuracy proof, or production SLA.
- Role/contribution framework: Known in `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md`; owner-reviewed solo/end-to-end contribution wording is available, while benchmark limitations remain unchanged.

Required assets:
- Repo link.
- Deployment link if hosted.
- Confidence-routing diagram review.
- Merchant memory visualization review.
- Latency comparison benchmark.
- Routing decision table.
- UI screenshots.
- Limitation/failure-mode note.
- Remaining endpoint/Qwen/cost/fallback-rate/accuracy proof.

Missing assets:
- Deployment link.
- Hosted deployment link and stronger production benchmark evidence.
- Category/history sample-labeling in final case-study presentation if those screenshots are used.
- Opened-transaction History AI Insight screenshot with safe sample data and a real generated `/transaction-insight` response.
- Remaining benchmark and deployment proof.
- Final tradeoff note.
- End-to-end backend/model-output capture only if final proof needs more than frontend UI state.

Verification notes:
- Short URL redirects to YouTube watch URL and oEmbed title is `Hybrid GenAI Transaction Categorization | Full Project Demo + Architecture Explained`.
- GitHub API confirms public repo `Atishay9828/Hybrid-GenAI-Transaction-Categorization`.
- Created diagram/spec files: `docs/diagrams/hybrid-categorizer-routing.md` and `docs/diagrams/hybrid-categorizer-memory.md`.
- Repo contains screenshot candidates under `frontend/public/screenshots/`; `categories.png` and `history.png` remain imported from that source.
- `predict.png` and `memory.png` were replaced from a local run of the verified Hybrid frontend at `C:\tmp\Hybrid-GenAI-Transaction-Categorization` using synthetic demo transactions. The backend model path was not used in that run because the `C:\tmp` clone did not include `models/distilbert.onnx`.
- `docs/19_HYBRID_ROUTING_PROOF.md` records documented sample routing rows for `dominos order 750`, `bharat petrol payment 500`, `smart class monthly 899`, and `volvo bus booking 1200`. The table is qualitative and unmeasured.
- A local Hybrid repo runtime asset was found at `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx` on 2026-06-28. File size: 267,956,781 bytes. It is inside the Hybrid repo, outside the portfolio repo, not Git-tracked, ignored by `.gitignore` via `**/models/`, and should remain uncommitted.
- `docs/20_HYBRID_BENCHMARK_RESULTS.md` records a 2026-06-30 local read-only ONNX classifier/routing benchmark with 20 measured runs and 5 warmups per sample. The 2026-07-09 public data also carries owner-provided local `/predict` examples for merchant override and offline Qwen fallback on port 8001; hosted production latency, zero-compute-cost, fallback-rate, dataset accuracy, and production SLA claims remain blocked.
- 2026-07-08 copy update allows only approximate owner-observed CPU-only/offline fallback wording: ~60-80s to ~5-13s. Keep it separate from the measured ONNX benchmark.
- `docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md` records that the existing History screenshot shows transaction history, category confidence, and route tags, but no AI Insight panel or in-image sample-data label. The AI Insight panel is code-backed but still needs a safe opened-transaction capture before it is used as screenshot evidence.
- `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md` records the Hybrid contribution questions, safe pending wording, and unsafe ownership/performance wording to avoid.
- Limitation note drafted in `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`.
- Evidence hardening pass added `docs/13_FEATURED_EVIDENCE_REVIEW.md`, `docs/14_SCREENSHOT_IMPORT_PLAN.md`, and `docs/15_HYBRID_BENCHMARK_AND_ROUTING_PLAN.md`.
- Imported asset review found the original `predict.png` was not prediction flow and the original `memory.png` was not merchant-memory proof; both were replaced on 2026-06-27. Remaining transaction-detail screenshots require sample/demo labeling before public use.

Can be shown publicly yet:
- Partially. Verified walkthrough, repo, conservative routing copy, sample-data UI screenshots, sample routing proof, local classifier/routing benchmark evidence, and source-backed History AI Insight behavior can support a first static section, but full featured presentation remains blocked by missing deployment status, endpoint/Qwen fallback/cost benchmark evidence, opened-transaction AI Insight screenshot proof, diagram revisions, verified role detail, final tradeoff copy, and any end-to-end model-output capture needed for final inference proof.

### The Loop

Portfolio tier: Featured

Verified links:
- Deployment: `https://the-loop-5m7u.onrender.com/`
- GitHub repo: `https://github.com/Atishay9828/TIET-LOOP`

Evidence status:
- Deployment: Verified.
- Repo link: Verified.
- Diagram specs and generated SVGs: Known.
- Diagram review: Known in `docs/13_FEATURED_EVIDENCE_REVIEW.md`; realtime/auth diagrams are Ready, and `public/assets/projects/the-loop/the-loop-system-diagram.svg`, `the-loop-recommendation-flow.svg`, `the-loop-carpool-chat-flow.svg`, and `the-loop-deployment-diagram.svg` now provide repo/docs-backed system, recommendation, coordination, and deployment diagrams.
- Imported product screenshots: Verified owner-provided live-deployment files under `public/assets/projects/the-loop/`; visual/privacy review recorded in `docs/18_IMPORTED_ASSET_REVIEW.md` and `docs/25_THE_LOOP_VISUAL_EVIDENCE_UPDATE.md`.
- Product workflow walkthrough: Known in `docs/16_THE_LOOP_WORKFLOW_WALKTHROUGH.md`; events-list, event-detail, map-view, landing/login, and redacted profile/friends screenshots now provide public-safe visual workflow evidence.
- Role/contribution framework: Known in `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md`; owner-reviewed collaborative contribution wording is available, while exact module ownership remains collaborative/not separated.

Required assets:
- Repo link.
- Product screenshots.
- Database diagram.
- WebSocket architecture diagram.
- Auth flow diagram.
- User workflow walkthrough.
- Limitation/failure-mode note.
- Collaborative module ownership detail if later separated by evidence.

Missing assets:
- Manual deployed workflow verification before stronger reliability or production-readiness copy.
- Rendered desktop/mobile review of the The Loop SVG diagram set.
- Admin/chat/carpool screenshots only if those flows will be visually featured.
- Demo/walkthrough.
- Collaborative module ownership detail if later separated by evidence.
- Final tradeoff note.

Verification notes:
- Render deployment loads with page title `The Loop`.
- GitHub API confirms public repo `Atishay9828/TIET-LOOP`.
- Created diagram/spec files: `docs/diagrams/the-loop-system.md`, `docs/diagrams/the-loop-realtime-flow.md`, and `docs/diagrams/the-loop-auth-flow.md`.
- Repo contains older screenshot candidates under `assets/`; these are superseded by the owner-provided live-deployment captures where available.
- Limitation note drafted in `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`.
- Evidence hardening pass added `docs/13_FEATURED_EVIDENCE_REVIEW.md`, `docs/14_SCREENSHOT_IMPORT_PLAN.md`, and `docs/16_THE_LOOP_WORKFLOW_WALKTHROUGH.md`.
- Imported asset review originally marked `landing_page.jpg` Replace before polish and `interest_selection.png` Approved for case study only. The 2026-07-06 update supersedes the weak landing asset with `the-loop-landing-live.png`.
- Public-safe workflow screenshots are now imported: `the-loop-events-list-live.png`, `the-loop-events-list-alt-live.png`, `the-loop-event-detail-live.png`, `the-loop-map-view-live.png`, `the-loop-landing-live.png`, `the-loop-profile-live-redacted.png`, and `the-loop-friends-live-redacted.png`.
- Raw profile/friends screenshots were not published because they exposed personal account or username details; only redacted copies are public assets.
- 2026-07-08 verification confirmed the public files remain present in `public/assets/projects/the-loop/`; no new import was needed.
- `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md` records The Loop contribution questions, safe pending wording, and unsafe ownership/deployment/reliability wording to avoid.

Can be shown publicly yet:
- Yes for a conservative visual-backed soft launch. Verified deployment, repo, owner-provided public-safe workflow screenshots, workflow walkthrough, owner-reviewed collaborative contribution wording, and conservative product-flow copy can support the public The Loop section. Polished/final presentation remains blocked by system diagram revision, rendered/mobile diagram QA, manual reliability verification, exact module ownership only if later separated by evidence, and final tradeoff copy.

## Secondary Projects

### AI Resume Tailoring Engine

Portfolio tier: Secondary

Verified links:
- GitHub repo: `https://github.com/Atishay9828/AI_Resume_Builder_ATS_Friendly`

Evidence status:
- Repo link: Verified.
- Sample output: Missing.
- ATS report: Missing.
- Diagrams/examples: Needed.

Required assets:
- Repo link.
- Sample output with private details redacted.
- ATS report.
- Pipeline diagram.
- Anti-hallucination constraint example.
- Fallback chain diagram.
- Role/contribution details.

Missing assets:
- Sample output.
- ATS report.

Verification notes:
- GitHub API confirms public repo `Atishay9828/AI_Resume_Builder_ATS_Friendly`.

Can be shown publicly yet:
- Partially. Repo can be referenced, but the project still needs redacted sample output, ATS evidence, role details, and pipeline proof.

### Webcam Motion Alert System

Portfolio tier: Secondary

Verified links:
- GitHub repo: `https://github.com/Atishay9828/Webcam-Alert-App`

Evidence status:
- Repo link: Verified.
- Screenshots/demo: Missing.
- Workflow diagram: Needed.

Required assets:
- Repo link.
- Streamlit screenshot.
- Motion detection screenshot.
- Email alert screenshot with private details redacted.
- Workflow diagram.
- Role/contribution details.

Missing assets:
- Screenshots/demo.

Verification notes:
- GitHub API confirms public repo `Atishay9828/Webcam-Alert-App`.

Can be shown publicly yet:
- Partially. Repo can be referenced, but screenshots/demo and workflow proof are still required; if those remain unavailable, demote to Lab.

## Lab Projects

### Minimal RAG Implementation

Portfolio tier: Lab

Verified links:
- GitHub repo: `https://github.com/Atishay9828/RAG`

Evidence status:
- Repo link: Verified.
- Retrieval diagram/example output: Needed.

Required assets:
- Repo link if public.
- Retrieval pipeline diagram.
- Example query output.

Missing assets:
- Example output.

Verification notes:
- GitHub repo was verified in the 2026-07-09 manual review pass.

Can be shown publicly yet:
- Yes, as a compact lab card linked to the verified repo. Still needs example output before stronger proof.

### Music Web Scraper

Portfolio tier: Lab

Verified links:
- GitHub repo: `https://github.com/Atishay9828/app10--web-scrape-music`

Evidence status:
- Repo link: Verified.
- Input/output artifact: Needed.

Required assets:
- Repo link if public.
- Input/output screenshot.
- Short purpose explanation.

Missing assets:
- Output artifact.

Verification notes:
- GitHub repo was verified in the 2026-07-09 manual review pass.

Can be shown publicly yet:
- Yes, as a compact lab card linked to the verified repo. Still needs output artifact before stronger proof.

### Global Super Store Database Project

Portfolio tier: Lab

Verified links:
- GitHub repo: `https://github.com/Atishay9828/Global-Super-Store-Database`

Evidence status:
- Repo link: Verified.
- Schema/query artifacts: Needed.

Required assets:
- Repo or report link.
- Schema diagram.
- Query examples.

Missing assets:
- Schema/query artifacts.

Verification notes:
- GitHub repo was verified in the 2026-07-09 manual review pass. Local SQL files were also inspected for toolkit SQL evidence.

Can be shown publicly yet:
- Yes, as a compact lab card linked to the verified repo. Still needs schema/query screenshots or diagrams before stronger proof.

### Fast and Curious Car Analysis

Portfolio tier: Lab

Verified links:
- GitHub repo: `https://github.com/Atishay9828/Fast-and-Curious_Car-Analysis`

Evidence status:
- Repo link: Verified.
- Dataset/source note: Needed.

Required assets:
- Notebook or repo link.
- Dataset/source note.
- Final insight screenshot.

Missing assets:
- Dataset/source note.

Verification notes:
- GitHub repo was verified in the 2026-07-09 manual review pass.

Can be shown publicly yet:
- Yes, as a compact lab card linked to the verified repo. Still needs dataset/source note and final insight screenshot before stronger proof.

## Timeline Projects

### Custom Linear Regression Model

Portfolio tier: Timeline

Known links:
- None.

Evidence status:
- Optional repo/notebook link: Missing.

Required assets:
- None for homepage; optional repo/notebook if easy to verify.

Missing assets:
- Optional repo/notebook link.

Verification notes:
- Timeline only. Do not promote.

Can be shown publicly yet:
- Yes, as a small timeline mention only, if phrased as foundation work.

### Iris Classification

Portfolio tier: Timeline

Known links:
- None.

Evidence status:
- Optional repo/notebook link: Missing.

Required assets:
- None for homepage; optional repo/notebook if easy to verify.

Missing assets:
- Optional repo/notebook link.

Verification notes:
- Timeline only. Do not promote.

Can be shown publicly yet:
- Yes, as a small timeline mention only, if phrased as foundation work.

### Netflix EDA

Portfolio tier: Timeline

Known links:
- None.

Evidence status:
- Optional repo/notebook link: Missing.

Required assets:
- None for homepage; optional repo/notebook if easy to verify.

Missing assets:
- Optional repo/notebook link.

Verification notes:
- Timeline only. Do not promote.

Can be shown publicly yet:
- Yes, as a small timeline mention only, if phrased as foundation work.
