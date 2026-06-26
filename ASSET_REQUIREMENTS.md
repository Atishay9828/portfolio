# ASSET_REQUIREMENTS.md

Date: 2026-06-26

Source documents:
- `PROJECT_CONTEXT.md`
- `FEATURED_PROJECT_SELECTION.md`
- `PORTFOLIO_RISK_AUDIT.md`
- User-provided known project evidence in the 2026-06-26 repository continuity task.

Purpose:
- Track every asset required to make the portfolio credible.
- Prevent unverified links, fake visuals, unsupported metrics, and placeholder evidence.
- Give implementation agents a checklist before building visual sections.

## Status Values

- Known: link or artifact was provided in planning context but not checked in this repo session.
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

## Mahoraga

| Asset | Priority | Status | Notes |
|---|---|---|---|
| GitHub repo | Required | Verified | `https://github.com/Atishay9828/meta_Mahoraga`; loads as public GitHub repo `Atishay9828/meta_Mahoraga`. Verified 2026-06-26. |
| Kaggle notebook | Recommended | Verified | `https://www.kaggle.com/code/atishay9828/meta-mahoraga/edit`; GET loads Kaggle notebook title `MEta_Mahoraga` and canonical notebook URL. Verified 2026-06-26. |
| HuggingFace demo | Recommended | Verified | `https://huggingface.co/spaces/MridulNegi2005/Project-Mahoraga`; API confirms public Space titled `Mahoraga — Adaptive Combat RL Environment`. Verified 2026-06-26. |
| Demo GIF or video | Required | Needed | 60-second behavior demo preferred; HuggingFace link is Known but no local demo asset is present. |
| Architecture diagram | Required | Needed | Show environment, reward, agent, API, UI. |
| Reward-system visualization | Required | Needed | Needed to frame adaptive behavior. |
| Training timeline or metrics chart | Required | Needed | Use only documented metrics. |
| Failure mode or limitation note | Required | Needed | Prevents overclaiming. |
| Project screenshot | Recommended | Needed | Useful if UI is real and polished. |
| Deployment link | Optional | Not applicable | HuggingFace demo is tracked separately. |

## Hybrid GenAI Transaction Categorizer

| Asset | Priority | Status | Notes |
|---|---|---|---|
| YouTube walkthrough | Required | Verified | `https://youtu.be/fsTXVh9JpoE`; redirects to YouTube watch page and oEmbed title is `Hybrid GenAI Transaction Categorization | Full Project Demo + Architecture Explained`. Verified 2026-06-26. |
| Repo link | Required | Verified | `https://github.com/Atishay9828/Hybrid-GenAI-Transaction-Categorization`; GitHub API confirms public repo `Atishay9828/Hybrid-GenAI-Transaction-Categorization`. Verified 2026-06-26. |
| Deployment link | Recommended | Missing | TODO. |
| Confidence-routing diagram | Required | Needed | Core proof for AI systems architecture. |
| Merchant memory visualization | Required | Needed | Needed to show memory behavior. |
| Latency comparison benchmark | Required | Needed | ONNX path vs LLM fallback path if measurable. |
| Routing decision table | Required | Needed | Use real or representative transactions, clearly labeled. |
| UI screenshots | Required | Needed | Main workflow and analytics/history views. |
| Limitation/failure-mode note | Required | Needed | Include low-confidence and bad-output behavior. |

## The Loop

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Deployment link | Required | Verified | `https://the-loop-5m7u.onrender.com/`; loads Render deployment with page title `The Loop`. Verified 2026-06-26. |
| Repo link | Required | Verified | `https://github.com/Atishay9828/TIET-LOOP`; GitHub API confirms public repo `Atishay9828/TIET-LOOP`. Verified 2026-06-26. |
| Product screenshots | Required | Needed | Include primary workflow and mobile view. |
| Database diagram | Required | Needed | Show users, events, interests, RSVPs, chat, recommendations. |
| WebSocket architecture diagram | Required | Needed | Show real-time communication flow. |
| Auth flow diagram | Required | Needed | OAuth/JWT boundary. |
| User workflow walkthrough | Required | Needed | Show event coordination path. |
| Demo video or GIF | Recommended | Needed | End-to-end product flow. |
| Limitation/failure-mode note | Required | Needed | Include disconnects, auth errors, or recommendation limits. |

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
| Mahoraga | 6 | 0 | 1 required, 3 links total | 5 | 17% required verified; 3 links verified |
| Hybrid Categorizer | 7 | 0 | 2 | 5 | 29% required verified |
| The Loop | 7 | 0 | 2 | 5 | 29% required verified |
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
