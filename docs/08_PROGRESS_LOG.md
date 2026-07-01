# 08_PROGRESS_LOG.md

Date: 2026-06-26

Purpose:
- Record completed milestones and repository progress.

## Progress Entries

### 2026-06-17

Completed:
- Created the initial planning/specification document set.
- Locked primary identity as AI Systems Engineer.
- Locked secondary identity as Product Engineer.
- Defined Signal Lab visual direction.
- Defined homepage content architecture.
- Created portfolio risk audit.
- Created site blueprint, design system, and asset requirements.

Commit:
- `4689ddb` - `Add portfolio site sections and interactions`

### 2026-06-26

Completed:
- Created root `README.md`.
- Created `docs/00_READ_FIRST.md`.
- Created `docs/01_CURRENT_STATUS.md`.
- Created `docs/02_DECISIONS_LOG.md`.
- Created `docs/03_ARCHITECTURE.md`.
- Created `docs/04_DESIGN_SYSTEM.md`.
- Created `docs/05_CONTENT_ARCHITECTURE.md`.
- Created `docs/06_ASSET_TRACKER.md`.
- Created `docs/07_BACKLOG.md`.
- Created `docs/08_PROGRESS_LOG.md`.
- Created `docs/09_AI_HANDOFF.md`.
- Created `docs/10_PROJECT_EVIDENCE_REGISTRY.md`.
- Created `docs/11_LINK_REGISTRY.md`.
- Updated `ASSET_REQUIREMENTS.md` to distinguish Known, Verified, Missing, Needed, and Not applicable.

Status:
- Repository continuity system established.
- Evidence registry established.
- Known links recorded but not verified.
- Remote status was unresolved at that time; later resolved in the Featured Evidence Hardening Pass.

### 2026-06-26 Link Verification

Completed:
- Verified Mahoraga GitHub repo: `https://github.com/Atishay9828/meta_Mahoraga`.
- Verified Mahoraga Kaggle notebook: `https://www.kaggle.com/code/atishay9828/meta-mahoraga/edit`.
- Verified Mahoraga HuggingFace demo: `https://huggingface.co/spaces/MridulNegi2005/Project-Mahoraga`.
- Verified Hybrid GenAI Transaction Categorizer YouTube walkthrough: `https://youtu.be/fsTXVh9JpoE`.
- Verified The Loop Render deployment: `https://the-loop-5m7u.onrender.com/`.
- Updated `ASSET_REQUIREMENTS.md`, `docs/06_ASSET_TRACKER.md`, `docs/10_PROJECT_EVIDENCE_REGISTRY.md`, `docs/11_LINK_REGISTRY.md`, `docs/01_CURRENT_STATUS.md`, and `docs/09_AI_HANDOFF.md`.

Verification notes:
- Kaggle `/edit` URL loads via GET and exposes canonical notebook metadata, but HEAD returned 404.
- HuggingFace Space is public and correct, but runtime was sleeping at verification time.
- YouTube short URL redirects to the canonical watch URL.

Status:
- Known project evidence links are now Verified.
- Frontend implementation remained blocked at that time by non-public-ready global assets, missing screenshots/demos, missing role details, missing deeper proof artifacts, and remaining TODO deployment/evidence items.

### 2026-06-26 Identity and Repo Evidence Update

Completed:
- Recorded local resume PDF candidates: `E:\Downloads\ATISHAY_Software_Intern.pdf` and `E:\Downloads\ATISHAY_Data_Analyst.pdf`.
- Verified GitHub profile: `https://github.com/Atishay9828/`.
- Recorded LinkedIn as Known: `https://www.linkedin.com/in/atishay9828/`; automated verification was blocked by LinkedIn HTTP 999.
- Recorded email as Known: `ajain8_be23@thapar.edu`.
- Verified Hybrid GenAI Transaction Categorizer repo: `https://github.com/Atishay9828/Hybrid-GenAI-Transaction-Categorization`.
- Verified The Loop repo: `https://github.com/Atishay9828/TIET-LOOP`.
- Verified AI Resume Tailoring Engine repo: `https://github.com/Atishay9828/AI_Resume_Builder_ATS_Friendly`.
- Verified Webcam Motion Alert System repo: `https://github.com/Atishay9828/Webcam-Alert-App`.
- Updated `ASSET_REQUIREMENTS.md`, `docs/06_ASSET_TRACKER.md`, `docs/10_PROJECT_EVIDENCE_REGISTRY.md`, `docs/11_LINK_REGISTRY.md`, `docs/01_CURRENT_STATUS.md`, and `docs/09_AI_HANDOFF.md`.

Status:
- Global identity/contact assets are no longer Missing, but resume is not repo-local and LinkedIn remains Known rather than Verified.
- Frontend implementation remained blocked at that time by non-public-ready global assets, missing screenshots/demos, missing role details, missing deeper proof artifacts, and remaining TODO deployment/evidence items.

### 2026-06-26 Featured Project Evidence Pack

Completed:
- Created `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`.
- Created Mahoraga diagram specs: `docs/diagrams/mahoraga-architecture.md` and `docs/diagrams/mahoraga-reward-system.md`.
- Created Hybrid Categorizer diagram specs: `docs/diagrams/hybrid-categorizer-routing.md` and `docs/diagrams/hybrid-categorizer-memory.md`.
- Created The Loop diagram specs: `docs/diagrams/the-loop-system.md`, `docs/diagrams/the-loop-realtime-flow.md`, and `docs/diagrams/the-loop-auth-flow.md`.
- Fixed stale Mahoraga wording so HuggingFace remains Verified while local demo media remains Needed.
- Added limitation notes for all three featured projects.
- Updated asset tracker, evidence registry, current status, backlog, and AI handoff.

Status:
- Diagram specs are Known, not Verified final frontend assets.
- Repo-contained screenshot/metric candidates are Known, not portfolio-local.
- Frontend implementation remained blocked at that time by visual review, portfolio-local screenshots/demos, role/contribution details, Hybrid benchmark/routing evidence, The Loop workflow walkthrough, and public-ready global assets.

### 2026-06-26 Featured Evidence Hardening Pass

Completed:
- Created `docs/13_FEATURED_EVIDENCE_REVIEW.md`.
- Created `docs/14_SCREENSHOT_IMPORT_PLAN.md`.
- Created `docs/15_HYBRID_BENCHMARK_AND_ROUTING_PLAN.md`.
- Created `docs/16_THE_LOOP_WORKFLOW_WALKTHROUGH.md`.
- Created `docs/17_RESUME_PUBLICATION_PLAN.md`.
- Reviewed every featured Mermaid/spec diagram for correctness, clarity, overclaiming, system boundaries, mobile readability, and frontend readiness.
- Verified GitHub CLI is installed and authenticated.
- Verified remote `origin` points to `https://github.com/Atishay9828/portfolio.git`.
- Verified GitHub repo `Atishay9828/portfolio` is Public, default branch is `master`, and README exists on GitHub.

Status:
- Limited Astro static scaffolding can begin as a conservative content shell.
- Production-ready UI polish remains blocked by portfolio-local screenshots/demos, role/contribution details, final rendered diagram QA, resume publication, and measured Hybrid benchmark/routing evidence.

### 2026-06-26 Astro Static Scaffold

Completed:
- Created Astro, TypeScript, Tailwind, and MDX project configuration.
- Added structured data files for links, evidence summary, featured projects, secondary projects, lab projects, timeline stages, capabilities, and routes.
- Implemented the static homepage in the locked order: Hero, Proof Strip, Featured Projects, Signal Evolution Timeline, Secondary Work, Lab Projects, Systems Map, About, Contact.
- Implemented basic static case-study shells for `/projects/mahoraga`, `/projects/hybrid-categorizer`, and `/projects/the-loop`.
- Added evidence-safe visual panels that clearly mark missing screenshots/demos/metrics/resume assets as pending instead of using fake placeholders.
- Added Vitest coverage for featured project ordering, verified-link CTAs, pending visual state, resume gating, and route definitions.
- Added `.gitignore` for generated Astro, dependency, and build output directories.

Validation:
- `npm.cmd test` passed.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages.

Status:
- Conservative static scaffold is complete.
- Production-ready UI polish, real visual assets, public resume CTA, role/contribution copy, and benchmark/metric claims remain blocked.

### 2026-06-26 First Implementation Review And Hardening Pass

Completed:
- Confirmed local `master` was aligned with `origin/master` before changes.
- Reviewed the Astro structure, data boundaries, evidence states, design-system constraints, accessibility, responsiveness, performance posture, and existing tests.
- Kept the existing proof-first architecture and avoided redesign, motion, WebGL, invented visuals, invented metrics, public resume links, and unverified public CTAs.
- Updated personal link data so LinkedIn and email remain Known references but are not active public CTAs until verified/public-ready.
- Kept GitHub active because it is Verified and kept resume disabled until a repo-local public resume exists.
- Hardened mobile wrapping and clipping behavior in the global CSS.
- Expanded Vitest coverage for featured project ordering, verified-link-only behavior, missing evidence states, required featured routes, and resume CTA gating.
- Captured desktop and mobile screenshot QA for `/`, `/projects/mahoraga`, `/projects/hybrid-categorizer`, and `/projects/the-loop` under `docs/reviews/screenshots/`.
- Ran `npm audit` and recorded 17 vulnerabilities: 14 moderate, 2 high, and 1 critical. Direct dependencies are affected; fixes require major dependency changes, so no non-breaking audit fix was applied.

Status:
- First implementation hardening pass is complete.
- Production-ready polish remains blocked by real assets, resume publication, LinkedIn/email verification, role/contribution detail, final diagram QA, and benchmark/workflow evidence.

### 2026-06-26 Evidence Import And Case-Study Hardening Pass

Completed:
- Confirmed local `master` was aligned with `origin/master` before changes.
- Verified documented candidate asset paths through the GitHub API before import.
- Imported Mahoraga candidate visuals into `public/assets/projects/mahoraga/`.
- Imported Hybrid Categorizer candidate screenshots into `public/assets/projects/hybrid-categorizer/`.
- Imported The Loop candidate screenshots into `public/assets/projects/the-loop/`.
- Kept all imported visuals as Known candidates that need final visual/privacy review.
- Hardened featured case-study pages with documented what-was-built, architecture, decisions, evidence status, limitations, missing proof, and next-evidence sections.
- Added Mahoraga reward-system proof framing, Hybrid benchmark-pending routing table structure, and The Loop workflow sections.
- Expanded tests to verify imported asset paths, disabled public CTAs, case-study content, limitations, missing proof, and pending benchmark state.

Status:
- First evidence import is complete, but production polish remains blocked.
- Resume publication remains Decision Needed; no resume was copied into the repo.
- Hybrid benchmark examples and all measured latency/cost claims remain pending.

### 2026-06-27 Imported Asset Visual And Privacy Review

Completed:
- Created `docs/18_IMPORTED_ASSET_REVIEW.md`.
- Reviewed all imported Mahoraga, Hybrid Categorizer, and The Loop assets for project match, readability, privacy risk, misleading content, and resolution.
- Approved Mahoraga `dashboard_preview.png` for homepage/case-study visual use.
- Approved Mahoraga `stitch_aero_screenshot.png` and The Loop `interest_selection.png` for case-study-only use.
- Marked Mahoraga `training_metrics.png` Candidate only; metric claims remain blocked until methodology/evaluation interpretation exists.
- Marked Hybrid `predict.png`, Hybrid `memory.png`, and The Loop `landing_page.jpg` Replace before polish.
- Marked Hybrid `categories.png`, `history.png`, and `memory.png` as needing redaction or explicit sample-data labeling.
- Updated asset/status docs and project data notes without activating resume, LinkedIn, or email CTAs.

Status:
- Imported asset review is complete.
- Production polish remains blocked by replacement screenshots, redaction/sample labeling, missing demos/workflow screenshots, role/contribution details, diagram QA, and Hybrid benchmark evidence.

### 2026-06-27 Hybrid Sample-Data Visual Proof

Completed:
- Confirmed local `master` was aligned with `origin/master` before changes.
- Cloned the verified Hybrid GenAI Transaction Categorizer repo into `C:\tmp\Hybrid-GenAI-Transaction-Categorization` because no local checkout was found in the portfolio workspace.
- Installed and ran the Hybrid frontend locally on `http://127.0.0.1:5174/`.
- Replaced `public/assets/projects/hybrid-categorizer/predict.png` with a running-frontend prediction-flow screenshot using synthetic input `demo cafe payment 750`.
- Replaced `public/assets/projects/hybrid-categorizer/memory.png` with a running-frontend Merchant Memory screenshot using synthetic merchants `Demo Cafe` and `Sample Transit`.
- Reviewed `categories.png` and `history.png`; kept them as case-study candidates only with explicit sample/demo transaction labeling required in site copy/data.
- Updated project data and evidence docs to state that Hybrid screenshots use safe demo/sample data and do not prove backend benchmark, latency, cost, fallback-rate, or model-output claims.

Blocked / caveat:
- Full backend/model-output capture was not completed because the cloned verified repo did not include `models/distilbert.onnx`. The replacement screenshots are frontend UI proof with controlled synthetic `/predict` responses, not end-to-end inference proof.

Status:
- Hybrid `predict.png` and `memory.png` replacement is complete for safe sample-data UI proof.
- Hybrid production polish remains blocked by measured benchmark/routing evidence, diagram revisions, role/contribution details, deployment status, and optional end-to-end backend/model-output capture.

### 2026-06-28 Hybrid Routing Proof Without Benchmark Claims

Completed:
- Confirmed local `master` was aligned with `origin/master` before changes.
- Inspected the available verified Hybrid checkout under `C:\tmp\Hybrid-GenAI-Transaction-Categorization`.
- Confirmed documented sample transactions: `dominos order 750`, `bharat petrol payment 500`, `smart class monthly 899`, and `volvo bus booking 1200`.
- Confirmed `data/categories.json` documents `confidence_threshold` as `0.90`.
- Confirmed merchant-map/code support for merchant override behavior where clear, and marked unsupported category/route fields as `Unknown`.
- Confirmed no benchmark script/results were available from the local scan.
- Confirmed local backend/model benchmark execution was blocked in the inspected `C:\tmp` clone because `models/distilbert.onnx` was missing there.
- Created `docs/19_HYBRID_ROUTING_PROOF.md`.
- Added sample/unmeasured Hybrid routing rows to the case-study data.
- Updated project/docs status to keep latency, cost, fallback-rate, and model-output claims blocked.
- Recorded The Loop workflow screenshots as temporarily blocked by a deployment/server access issue; teammate/friend with access will fix later.

Status:
- Hybrid now has safe routing proof for architecture/case-study context.
- Hybrid benchmark status remains pending.
- The Loop remains featured because repo/deployment links are verified, but workflow screenshot polish remains blocked.

### 2026-06-28 Hybrid ONNX Runtime Asset Correction

Completed:
- Searched for `distilbert.onnx` before treating benchmark execution as blocked by a missing model.
- Found local ONNX files at `D:\distilbert.onnx` and `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx`.
- Recorded the Hybrid repo copy as the benchmark verification candidate: `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx`, 267,956,781 bytes.
- Confirmed the Hybrid repo copy is inside the Hybrid repo, outside the portfolio repo, not Git-tracked, and ignored by `.gitignore` via `**/models/`.
- Confirmed no `distilbert.onnx` copy exists inside the portfolio repo.

Status:
- The previous missing-model blocker is corrected.
- Hybrid benchmark/model-output evidence is still not Verified because the benchmark has not been executed.
- `distilbert.onnx` should remain uncommitted and must not be copied into the portfolio repo.

### 2026-06-30 Hybrid Local Benchmark Results

Completed:
- Confirmed local `master` was aligned with `origin/master` before changes.
- Inspected the Hybrid backend runtime: FastAPI entrypoint `backend/main.py`, `/predict` endpoint, prediction logic in `backend/classify.py`, preprocessing in `backend/preprocessing.py`, merchant-map persistence in `backend/feedback.py`, Qwen fallback in `backend/reasoner.py` and `backend/llm.py`, threshold in `data/categories.json`, and dependencies in `requirements.txt`.
- Confirmed the model path used for measurement: `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx`.
- Installed temporary benchmark dependencies under `C:\tmp\hybrid-bench-deps`; no portfolio or Hybrid repo dependency files were changed.
- Ran a read-only ONNX classifier/routing benchmark with 20 measured runs and 5 warmup runs per sample.
- Created `docs/20_HYBRID_BENCHMARK_RESULTS.md`.
- Updated Hybrid case-study data with measured local rows for `dominos order 750`, `bharat petrol payment 500`, `smart class monthly 899`, and `volvo bus booking 1200`.
- Kept Qwen fallback latency, cost, fallback-rate, endpoint latency, production SLA, and accuracy claims blocked.
- Confirmed the Hybrid repo remained clean after the benchmark and no `distilbert.onnx` file was copied into the portfolio repo.

Status:
- Hybrid now has local classifier/routing benchmark evidence.
- Full endpoint and Qwen fallback benchmarking remain blocked/pending.
- The measured values are local-only and must not be framed as production performance.

### 2026-06-30 Hybrid History AI Insight Evidence Review

Completed:
- Inspected the Hybrid History frontend source in `D:\Hybrid-GenAI-Transaction-Categorization\frontend\src\pages\History.jsx`, `HistoryCard.jsx`, `HistoryPanel.jsx`, and `HistoryStore.js`.
- Confirmed the AI Insight UI appears only after one History transaction is opened.
- Confirmed the opened panel calls `POST http://127.0.0.1:8000/transaction-insight`.
- Confirmed the insight request includes the selected transaction plus up to three recent same-category history entries.
- Re-reviewed `public/assets/projects/hybrid-categorizer/history.png` and confirmed it shows the History list, category confidence, and route tags, but not the opened AI Insight panel or an in-image sample/demo label.
- Created `docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md`.
- Updated asset/status/evidence docs and project data to keep the current screenshot as limited case-study evidence only.

Blocked / caveat:
- Replacement screenshot capture was not completed because the available Python runtime did not have the Hybrid backend dependencies installed and no repo-local virtual environment was present.
- A replacement or supplemental screenshot remains Needed if the portfolio uses History AI insights as visual evidence.

Status:
- History AI Insight behavior is source-backed.
- Current `history.png` is not AI Insight screenshot proof.
- Any future capture must use safe sample/demo data and a real generated `/transaction-insight` response.

### 2026-06-30 Conservative Static Shell Design-System Polish

Completed:
- Confirmed local `master` was aligned with `origin/master` before changes.
- Preserved the evidence boundaries: no GSAP, WebGL, scroll animations, invented screenshots, invented benchmark claims, invented role details, or activated resume/LinkedIn/email CTAs.
- Tightened global visual rhythm, section separation, dark surface layering, typography hierarchy, focus states, and responsive constraints.
- Sharpened the hero identity and made the three proof anchors direct case-study links.
- Improved featured project visual hierarchy with status-aware evidence panels and small visual-candidate previews while keeping Known/Pending states explicit.
- Improved case-study readability and highlighted the Hybrid benchmark as local classifier/routing evidence only, not production SLA or endpoint/fallback proof.
- Kept timeline, secondary work, lab projects, and systems map visually subordinate to featured work.

Validation:
- `npm.cmd test` passed.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages.

Screenshot QA:
- Fresh screenshot recapture was attempted against rebuilt static output.
- Astro dev server was blocked by sandboxed telemetry/AppData access and Vite parent-directory access errors.
- Static build serving worked, but Chrome and Edge headless screenshot capture failed with GPU-process errors before reliable updated PNG output.
- Existing earlier screenshots remain under `docs/reviews/screenshots/`; updated recapture remains Needed.

Status:
- Conservative static polish is complete.
- Production launch remains blocked by missing screenshots/demos, role/contribution details, resume publication, LinkedIn/email readiness, diagram QA, The Loop screenshot access, Hybrid AI Insight screenshot proof, and full Hybrid endpoint/Qwen fallback benchmark evidence.

### 2026-07-01 Polished Screenshot QA Recapture

Completed:
- Confirmed the working tree was clean before screenshot work.
- Confirmed `docs/22_MAHORAGA_README_DATA.md` was absent, so there was no untracked Mahoraga evidence file to inspect or commit.
- Re-ran validation with `npm.cmd test` and `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build`.
- Confirmed Astro preview works in foreground at `http://127.0.0.1:4321/`.
- Worked around unreliable background preview launch by serving the built `dist/` output with the bundled Python static server.
- Captured fresh polished screenshots with Microsoft Edge headless and GPU-safe flags.
- Created `docs/22_SCREENSHOT_QA_REVIEW.md`.
- Added the following files under `docs/reviews/screenshots/`:
  - `homepage-desktop-polished.png`
  - `homepage-mobile-polished.png`
  - `mahoraga-desktop-polished.png`
  - `hybrid-desktop-polished.png`
  - `the-loop-desktop-polished.png`

Validation:
- `npm.cmd test` passed.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages.

Status:
- Fresh polished screenshot QA is complete.
- Production launch remains blocked by resume publication, LinkedIn/email readiness, role/contribution details, final diagram QA, missing demos/workflow screenshots, The Loop replacement screenshots, Hybrid AI Insight screenshot proof, and full Hybrid endpoint/Qwen fallback benchmark evidence.
