# ASSET_REQUIREMENTS.md

Date: 2026-06-30

Source documents:
- `PROJECT_CONTEXT.md`
- `FEATURED_PROJECT_SELECTION.md`
- `PORTFOLIO_RISK_AUDIT.md`
- User-provided known project evidence in the 2026-06-26 repository continuity task.
- `docs/13_FEATURED_EVIDENCE_REVIEW.md`
- `docs/14_SCREENSHOT_IMPORT_PLAN.md`
- `docs/15_HYBRID_BENCHMARK_AND_ROUTING_PLAN.md`
- `docs/16_THE_LOOP_WORKFLOW_WALKTHROUGH.md`
- `docs/17_RESUME_PUBLICATION_PLAN.md`
- `docs/18_IMPORTED_ASSET_REVIEW.md`
- `docs/19_HYBRID_ROUTING_PROOF.md`
- `docs/20_HYBRID_BENCHMARK_RESULTS.md`
- `docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md`

Purpose:
- Track every asset required to make the portfolio credible.
- Prevent unverified links, fake visuals, unsupported metrics, and placeholder evidence.
- Give implementation agents a checklist before building visual sections.

## Status Values

- Known: link or artifact was provided, discovered in a verified source, or created as a repo spec, but is not final public-ready portfolio evidence.
- Verified: link or artifact was checked and confirmed usable.
- Missing: explicitly absent or not provided anywhere.
- Needed: must be created.
- Not applicable: not relevant for this project.

## Priority Values

- Required
- Recommended
- Optional

## Global Assets

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Resume PDF | Required | Known | Local files exist outside repo: `E:\Downloads\ATISHAY_Software_Intern.pdf` and `E:\Downloads\ATISHAY_Data_Analyst.pdf`. Not Verified for public use until copied into repo/public asset path. Checked 2026-06-26. |
| GitHub profile URL | Required | Verified | `https://github.com/Atishay9828/`; GitHub API confirms user `Atishay9828`. Verified 2026-06-26. |
| LinkedIn URL | Required | Known | `https://www.linkedin.com/in/atishay9828/`; provided but automated verification was blocked by LinkedIn HTTP 999. |
| Email address | Required | Known | `ajain8_be23@thapar.edu`; provided but not externally verified. |
| Profile photo or intentional identity mark | Recommended | Needed | Create or choose only if it improves trust and design. |
| Open Graph image | Recommended | Needed | Needed before deployment/public sharing. |
| Favicon or AJ monogram | Recommended | Needed | Needed for polish. |
| Portfolio GitHub repository | Required | Verified | `https://github.com/Atishay9828/portfolio`; GitHub CLI confirms public repo, default branch `master`, and README exists on GitHub. Verified 2026-06-26. |

## Mahoraga

| Asset | Priority | Status | Notes |
|---|---|---|---|
| GitHub repo | Required | Verified | `https://github.com/Atishay9828/meta_Mahoraga`; loads as public GitHub repo `Atishay9828/meta_Mahoraga`. Verified 2026-06-26. |
| Kaggle notebook | Recommended | Verified | `https://www.kaggle.com/code/atishay9828/meta-mahoraga/edit`; GET loads Kaggle notebook title `MEta_Mahoraga` and canonical notebook URL. Verified 2026-06-26. |
| HuggingFace demo | Recommended | Verified | `https://huggingface.co/spaces/MridulNegi2005/Project-Mahoraga`; API confirms public Space titled `Mahoraga — Adaptive Combat RL Environment`. Verified 2026-06-26. |
| Demo GIF or video | Required | Needed | 60-second behavior demo preferred; HuggingFace demo is Verified, but no local GIF/video asset is present. |
| Architecture diagram | Required | Known | `docs/diagrams/mahoraga-architecture.md` exists as a Mermaid/spec file; `docs/13_FEATURED_EVIDENCE_REVIEW.md` marks it Needs Revision before final frontend use. |
| Reward-system visualization | Required | Known | `docs/diagrams/mahoraga-reward-system.md` exists as a Mermaid/spec file; spec-level review marks it Ready, but rendered/mobile QA is still required before final polish. |
| Training timeline or metrics chart | Required | Known | Imported to `public/assets/projects/mahoraga/training_metrics.png` from the verified repo; visual review marks it Candidate only and metric claims remain blocked until methodology/evaluation limits are documented. |
| Failure mode or limitation note | Required | Known | Drafted in `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`; needs final case-study copy review. |
| Project screenshot | Recommended | Known | Visual review approves `dashboard_preview.png` for homepage/case-study use and `stitch_aero_screenshot.png` for case-study-only support. |
| Deployment link | Optional | Not applicable | HuggingFace demo is tracked separately. |

## Hybrid GenAI Transaction Categorizer

| Asset | Priority | Status | Notes |
|---|---|---|---|
| YouTube walkthrough | Required | Verified | `https://youtu.be/fsTXVh9JpoE`; redirects to YouTube watch page and oEmbed title is `Hybrid GenAI Transaction Categorization | Full Project Demo + Architecture Explained`. Verified 2026-06-26. |
| Repo link | Required | Verified | `https://github.com/Atishay9828/Hybrid-GenAI-Transaction-Categorization`; GitHub API confirms public repo `Atishay9828/Hybrid-GenAI-Transaction-Categorization`. Verified 2026-06-26. |
| Deployment link | Recommended | Missing | TODO. |
| Confidence-routing diagram | Required | Known | `docs/diagrams/hybrid-categorizer-routing.md` exists as a Mermaid/spec file; `docs/13_FEATURED_EVIDENCE_REVIEW.md` marks it Needs Revision before final frontend use. |
| Merchant memory visualization | Required | Known | `docs/diagrams/hybrid-categorizer-memory.md` exists as a Mermaid/spec file; `docs/13_FEATURED_EVIDENCE_REVIEW.md` marks it Needs Revision before final frontend use. |
| Latency comparison benchmark | Required | Known/Needed | Local read-only ONNX classifier/routing benchmark exists in `docs/20_HYBRID_BENCHMARK_RESULTS.md`. Full FastAPI endpoint, Qwen fallback latency, cost, fallback-rate, and production SLA claims remain Needed/blocked. |
| Routing decision table | Required | Known | Safe sample routing proof exists in `docs/19_HYBRID_ROUTING_PROOF.md`; measured local classifier/routing rows now exist in `docs/20_HYBRID_BENCHMARK_RESULTS.md` and `src/data/projects.ts`. |
| UI screenshots | Required | Known/Needed | `predict.png` and `memory.png` were replaced on 2026-06-27 with local captures from the verified Hybrid frontend using synthetic demo transactions. `categories.png` and `history.png` remain case-study candidates only and must be labeled as sample/demo transaction data if used. The current `history.png` shows the list view only; it does not show the click-through `AI Insight` panel. A replacement/supplemental safe sample-data History screenshot with one transaction opened and a real `/transaction-insight` response is Needed. These screenshots are UI proof, not backend benchmark/model-output evidence. |
| Limitation/failure-mode note | Required | Known | Drafted in `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`; needs final case-study copy review. |

## The Loop

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Deployment link | Required | Verified | `https://the-loop-5m7u.onrender.com/`; loads Render deployment with page title `The Loop`. Verified 2026-06-26. |
| Repo link | Required | Verified | `https://github.com/Atishay9828/TIET-LOOP`; GitHub API confirms public repo `Atishay9828/TIET-LOOP`. Verified 2026-06-26. |
| Product screenshots | Required | Known | Visual review marks `landing_page.jpg` Replace before polish and approves `interest_selection.png` for case-study-only workflow support. Workflow screenshots are temporarily blocked by a deployment/server access issue; a teammate/friend with access will fix it later. |
| Database diagram | Required | Known | `docs/diagrams/the-loop-system.md` includes documented database tables and system boundaries; `docs/13_FEATURED_EVIDENCE_REVIEW.md` marks it Needs Revision before final frontend use. |
| WebSocket architecture diagram | Required | Known | `docs/diagrams/the-loop-realtime-flow.md` exists as a Mermaid/spec file; spec-level review marks it Ready, but rendered/mobile QA is still required before final polish. |
| Auth flow diagram | Required | Known | `docs/diagrams/the-loop-auth-flow.md` exists as a Mermaid/spec file; spec-level review marks it Ready, but rendered/mobile QA is still required before final polish. |
| User workflow walkthrough | Required | Known | `docs/16_THE_LOOP_WORKFLOW_WALKTHROUGH.md` exists; workflow screenshots remain blocked until the deployment/server access issue is fixed by the teammate/friend with access. |
| Demo video or GIF | Recommended | Needed | End-to-end product flow. |
| Limitation/failure-mode note | Required | Known | Drafted in `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`; needs final case-study copy review. |

## AI Resume Tailoring Engine

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Repo link | Required | Verified | `https://github.com/Atishay9828/AI_Resume_Builder_ATS_Friendly`; GitHub API confirms public repo `Atishay9828/AI_Resume_Builder_ATS_Friendly`. Verified 2026-06-26. |
| Sample output | Required | Missing | TODO; must redact private information. |
| ATS report | Required | Missing | TODO. |
| Pipeline diagram | Required | Needed | Profile compression -> prompt constraints -> generation -> PDF/ATS. |
| Anti-hallucination constraint example | Required | Needed | Prevents wrapper perception. |
| Fallback chain diagram | Recommended | Needed | Show model fallback behavior. |
| Demo video or GIF | Recommended | Needed | Useful for workflow proof. |
| Deployment link | Optional | Missing | TODO only if hosted. |

## Webcam Motion Alert System

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Repo link | Required | Verified | `https://github.com/Atishay9828/Webcam-Alert-App`; GitHub API confirms public repo `Atishay9828/Webcam-Alert-App`. Verified 2026-06-26. |
| Screenshots/demo | Required | Missing | TODO. |
| Streamlit screenshot | Required | Needed | Current risk audit flags screenshot gap. |
| Motion detection screenshot | Required | Needed | Show bounding boxes or detection state. |
| Email alert screenshot | Required | Needed | Redact private details. |
| Workflow diagram | Required | Needed | Camera -> frame differencing -> alert -> cleanup. |
| Deployment link | Optional | Not applicable | Likely not applicable unless hosted. |

## Lab Projects

| Project | Asset | Priority | Status | Notes |
|---|---|---|---|---|
| Minimal RAG Implementation | Repo link | Recommended | Missing | Lab only. |
| Minimal RAG Implementation | Retrieval pipeline diagram | Recommended | Needed | Dataset -> chunking -> embeddings -> retrieval -> answer. |
| Music Web Scraper | Repo link | Recommended | Missing | Lab only. |
| Music Web Scraper | Input/output screenshot | Recommended | Needed | Show useful generated data. |
| Global Super Store Database Project | Repo or report link | Recommended | Missing | Lab only. |
| Global Super Store Database Project | Schema diagram | Recommended | Needed | Show database fundamentals. |
| Fast and Curious Car Analysis | Notebook or repo link | Recommended | Missing | Lab only. |
| Fast and Curious Car Analysis | Dataset/source note | Recommended | Needed | Needed for context. |

## Timeline-Only Foundation Projects

| Project | Asset | Priority | Status | Notes |
|---|---|---|---|---|
| Custom Linear Regression Model | Repo/notebook link | Optional | Missing | Timeline only. |
| Iris Classification | Repo/notebook link | Optional | Missing | Timeline only. |
| Netflix EDA | Repo/notebook link | Optional | Missing | Timeline only. |

## Completion Tracker

| Area | Required Items | Known | Verified | Missing/Needed | Completion |
|---|---:|---:|---:|---:|---:|
| Global identity/contact | 4 | 3 | 1 | 0 | 100% required Known/Verified; public-ready after repo-local resume and LinkedIn verification |
| Mahoraga | 6 | 5 | 1 required, 3 links total | 1 | One homepage asset approved; demo media, metric interpretation, and role detail still Needed |
| Hybrid Categorizer | 7 | 6 | 2 | 1 plus 1 missing deployment | Prediction-flow and merchant-memory screenshots replaced with safe demo-data UI proof; local classifier/routing benchmark added; History AI Insight panel screenshot remains Needed; deployment status, role details, Qwen fallback/cost measurement, endpoint benchmark, and any end-to-end model-output proof still Needed |
| The Loop | 7 | 5 | 2 | 2 | Interest selection approved case-study-only; landing/workflow screenshots, role detail, and demo media still Needed |
| Secondary projects | 10 | 0 | 2 | 8 | 20% required verified |
| Lab projects | 8 | 0 | 0 | 8 | 0% |

## Asset Rules

1. Known is not the same as Verified.
2. Required assets block final implementation polish until they are Known or Verified.
3. Public CTAs may use Known links only after a verification pass confirms they load and match the project.
4. Recommended assets improve credibility but should not block scaffolding.
5. Optional assets are useful only if real and easy to verify.
6. Do not include placeholder public links.
7. Do not invent metrics.
8. Do not use fake screenshots or fake dashboards.
9. Every new or changed asset requirement must update `docs/06_ASSET_TRACKER.md`, `docs/10_PROJECT_EVIDENCE_REGISTRY.md`, and `docs/11_LINK_REGISTRY.md`.
