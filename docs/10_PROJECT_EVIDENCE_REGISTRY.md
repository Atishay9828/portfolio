# 10_PROJECT_EVIDENCE_REGISTRY.md

Date: 2026-06-30

Purpose:
- Track portfolio evidence by project.
- Separate Known evidence from Verified evidence.
- Prevent public claims from outrunning proof.

## Status Meanings

- Known: link or artifact was provided, discovered in a verified source, or created as a repo spec, but is not final public-ready portfolio evidence.
- Verified: link or artifact was checked and confirmed usable.
- Missing: explicitly absent or not provided anywhere.
- Needed: must be created.
- Not applicable: not relevant for this project.

## Featured Projects

### Mahoraga

Portfolio tier: Featured

Verified links:
- GitHub: `https://github.com/Atishay9828/meta_Mahoraga`
- Kaggle notebook: `https://www.kaggle.com/code/atishay9828/meta-mahoraga/edit`
- HuggingFace demo: `https://huggingface.co/spaces/MridulNegi2005/Project-Mahoraga`

Evidence status:
- Links: Verified.
- Diagram specs: Known.
- Diagram review: Known in `docs/13_FEATURED_EVIDENCE_REVIEW.md`; reward-system diagram is Ready, architecture diagram needs revision.
- Imported screenshot/metrics candidates: Known portfolio-local files under `public/assets/projects/mahoraga/`; visual/privacy review recorded in `docs/18_IMPORTED_ASSET_REVIEW.md`.
- Local demo media: Needed.
- Metrics: Known in external repo, not selected or reviewed for portfolio.

Required assets:
- Architecture diagram.
- Reward-system visualization.
- Training timeline or metrics chart.
- Demo GIF/video.
- Failure mode or limitation note.
- Role/contribution details.

Missing assets:
- Local demo media.
- Demo media, final training/evaluation interpretation, and role/contribution detail.
- Final reviewed training/evaluation artifact.
- Role/contribution detail.
- Final tradeoff note.

Verification notes:
- GitHub repo loads as public repo `Atishay9828/meta_Mahoraga`.
- Kaggle `/edit` URL loads via GET as notebook title `MEta_Mahoraga` and canonicalizes to `/code/atishay9828/meta-mahoraga`; HEAD returned 404, so use GET/browser verification for this link.
- HuggingFace API confirms public Space titled `Mahoraga - Adaptive Combat RL Environment`; runtime was `SLEEPING`, so visitors may experience a cold start.
- Created diagram/spec files: `docs/diagrams/mahoraga-architecture.md` and `docs/diagrams/mahoraga-reward-system.md`.
- Limitation note drafted in `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`.
- Evidence hardening pass added `docs/13_FEATURED_EVIDENCE_REVIEW.md` and `docs/14_SCREENSHOT_IMPORT_PLAN.md`.
- Imported asset review added `docs/18_IMPORTED_ASSET_REVIEW.md`; `dashboard_preview.png` is homepage-approved, `stitch_aero_screenshot.png` is case-study-only, and `training_metrics.png` remains Candidate only.

Can be shown publicly yet:
- Partially. Verified links, conservative copy, and the reward-system diagram can support a first static homepage section, but full featured presentation remains blocked by architecture diagram revision, rendered/mobile diagram QA, demo media, selected screenshots/metrics, role details, and final tradeoff copy.

### Hybrid GenAI Transaction Categorizer

Portfolio tier: Featured

Verified links:
- YouTube walkthrough: `https://youtu.be/fsTXVh9JpoE`
- GitHub repo: `https://github.com/Atishay9828/Hybrid-GenAI-Transaction-Categorization`

Evidence status:
- Walkthrough: Verified.
- Repo link: Verified.
- Deployment link: Missing.
- Diagram specs: Known.
- Diagram review: Known in `docs/13_FEATURED_EVIDENCE_REVIEW.md`; both diagrams need revision before final frontend use.
- UI screenshots: Known portfolio-local files under `public/assets/projects/hybrid-categorizer/`; `predict.png` and `memory.png` were replaced on 2026-06-27 with running-frontend captures using synthetic demo data. `categories.png` and `history.png` remain case-study candidates that must be sample-labeled if used. The current `history.png` shows the History list view only, not the opened-transaction AI Insight panel.
- History AI Insight behavior: Known in `docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md`; clicking one History transaction opens `HistoryPanel`, which calls `POST /transaction-insight` using the selected transaction plus recent same-category history. Screenshot proof of that opened panel remains Needed.
- Benchmark/routing methodology: Known in `docs/15_HYBRID_BENCHMARK_AND_ROUTING_PLAN.md`.
- Safe sample routing proof: Known in `docs/19_HYBRID_ROUTING_PROOF.md`.
- Measured local classifier/routing table: Known in `docs/20_HYBRID_BENCHMARK_RESULTS.md` and `src/data/projects.ts`.
- Full endpoint/Qwen fallback/cost benchmark: Needed.
- Local ONNX runtime asset: Known at `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx`; not portfolio-local and not benchmark evidence by itself.

Required assets:
- Repo link.
- Deployment link if hosted.
- Confidence-routing diagram.
- Merchant memory visualization.
- Latency comparison benchmark.
- Routing decision table.
- UI screenshots.
- Limitation/failure-mode note.
- Role/contribution details.

Missing assets:
- Deployment link.
- Full endpoint/Qwen fallback/cost benchmarks.
- Category/history sample-labeling in final case-study presentation if those screenshots are used.
- Opened-transaction History AI Insight screenshot with safe sample data and a real generated `/transaction-insight` response.
- Role/contribution detail.
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
- `docs/20_HYBRID_BENCHMARK_RESULTS.md` records a 2026-06-30 local read-only ONNX classifier/routing benchmark with 20 measured runs and 5 warmups per sample. Qwen fallback was not called; endpoint latency, fallback latency, cost, fallback-rate, and production SLA claims remain blocked.
- `docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md` records that the existing History screenshot shows transaction history, category confidence, and route tags, but no AI Insight panel or in-image sample-data label. The AI Insight panel is code-backed but still needs a safe opened-transaction capture before it is used as screenshot evidence.
- Limitation note drafted in `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`.
- Evidence hardening pass added `docs/13_FEATURED_EVIDENCE_REVIEW.md`, `docs/14_SCREENSHOT_IMPORT_PLAN.md`, and `docs/15_HYBRID_BENCHMARK_AND_ROUTING_PLAN.md`.
- Imported asset review found the original `predict.png` was not prediction flow and the original `memory.png` was not merchant-memory proof; both were replaced on 2026-06-27. Remaining transaction-detail screenshots require sample/demo labeling before public use.

Can be shown publicly yet:
- Partially. Verified walkthrough, repo, conservative routing copy, sample-data UI screenshots, sample routing proof, local classifier/routing benchmark evidence, and source-backed History AI Insight behavior can support a first static section, but full featured presentation remains blocked by missing deployment status, endpoint/Qwen fallback/cost benchmark evidence, opened-transaction AI Insight screenshot proof, diagram revisions, role detail, final tradeoff copy, and any end-to-end model-output capture needed for final inference proof.

### The Loop

Portfolio tier: Featured

Verified links:
- Deployment: `https://the-loop-5m7u.onrender.com/`
- GitHub repo: `https://github.com/Atishay9828/TIET-LOOP`

Evidence status:
- Deployment: Verified.
- Repo link: Verified.
- Diagram specs: Known.
- Diagram review: Known in `docs/13_FEATURED_EVIDENCE_REVIEW.md`; realtime/auth diagrams are Ready, system diagram needs revision.
- Imported product screenshot candidates: Known portfolio-local files under `public/assets/projects/the-loop/`; visual/privacy review recorded in `docs/18_IMPORTED_ASSET_REVIEW.md`.
- Product workflow walkthrough: Known in `docs/16_THE_LOOP_WORKFLOW_WALKTHROUGH.md`; screenshots are temporarily blocked by a deployment/server access issue until the teammate/friend with access fixes it.

Required assets:
- Repo link.
- Product screenshots.
- Database diagram.
- WebSocket architecture diagram.
- Auth flow diagram.
- User workflow walkthrough.
- Limitation/failure-mode note.
- Role/contribution details.

Missing assets:
- Replace low-resolution landing image and capture missing workflow screenshots after the deployment/server access issue is fixed.
- User workflow walkthrough.
- Demo/walkthrough.
- Role/contribution detail.
- Final tradeoff note.

Verification notes:
- Render deployment loads with page title `The Loop`.
- GitHub API confirms public repo `Atishay9828/TIET-LOOP`.
- Created diagram/spec files: `docs/diagrams/the-loop-system.md`, `docs/diagrams/the-loop-realtime-flow.md`, and `docs/diagrams/the-loop-auth-flow.md`.
- Repo contains screenshot candidates under `assets/`; these are Known but not portfolio-local.
- Limitation note drafted in `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`.
- Evidence hardening pass added `docs/13_FEATURED_EVIDENCE_REVIEW.md`, `docs/14_SCREENSHOT_IMPORT_PLAN.md`, and `docs/16_THE_LOOP_WORKFLOW_WALKTHROUGH.md`.
- Imported asset review marks `landing_page.jpg` Replace before polish and `interest_selection.png` Approved for case study only.
- Workflow screenshots are blocked for this milestone because the deployed server has an access/server issue and the teammate/friend with access will fix it later.

Can be shown publicly yet:
- Partially. Verified deployment, repo, workflow walkthrough, and conservative product-flow copy can support a first static homepage section, but full featured presentation remains blocked by workflow screenshots, system diagram revision, rendered/mobile diagram QA, role details, and final tradeoff copy. Screenshot capture is intentionally paused until the deployment/server access issue is fixed.

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

Known links:
- None.

Evidence status:
- Repo link: Missing.
- Retrieval diagram/example output: Needed.

Required assets:
- Repo link if public.
- Retrieval pipeline diagram.
- Example query output.

Missing assets:
- Repo link.
- Example output.

Verification notes:
- No external evidence was provided.

Can be shown publicly yet:
- No, except as a text-only lab note after evidence is clarified.

### Music Web Scraper

Portfolio tier: Lab

Known links:
- None.

Evidence status:
- Repo link: Missing.
- Input/output artifact: Needed.

Required assets:
- Repo link if public.
- Input/output screenshot.
- Short purpose explanation.

Missing assets:
- Repo link.
- Output artifact.

Verification notes:
- No external evidence was provided.

Can be shown publicly yet:
- No.

### Global Super Store Database Project

Portfolio tier: Lab

Known links:
- None.

Evidence status:
- Repo/report link: Missing.
- Schema/query artifacts: Needed.

Required assets:
- Repo or report link.
- Schema diagram.
- Query examples.

Missing assets:
- Repo/report link.
- Schema/query artifacts.

Verification notes:
- No external evidence was provided.

Can be shown publicly yet:
- No.

### Fast and Curious Car Analysis

Portfolio tier: Lab

Known links:
- None.

Evidence status:
- Notebook/repo link: Missing.
- Dataset/source note: Needed.

Required assets:
- Notebook or repo link.
- Dataset/source note.
- Final insight screenshot.

Missing assets:
- Notebook/repo link.
- Dataset/source note.

Verification notes:
- No external evidence was provided.

Can be shown publicly yet:
- No.

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
