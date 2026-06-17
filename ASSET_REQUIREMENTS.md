# ASSET_REQUIREMENTS.md

Date: 2026-06-17

Source documents:
- `PROJECT_CONTEXT.md`
- `FEATURED_PROJECT_SELECTION.md`
- `PORTFOLIO_RISK_AUDIT.md`

Purpose:
- Track every asset required to make the portfolio credible.
- Prevent unverified links, fake visuals, unsupported metrics, and placeholder evidence.
- Give implementation agents a checklist before building visual sections.

Status values:
- Missing
- Collected
- Verified
- Not applicable

Priority values:
- Required
- Recommended
- Optional

## Global Assets

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Resume PDF | Required | Missing | Needed for hero, nav, contact, and `/resume`. |
| GitHub URL | Required | Missing | Must be verified before public links are added. |
| LinkedIn URL | Required | Missing | Needed for recruiter conversion. |
| Email address | Required | Missing | Needed for contact section. |
| Profile photo or intentional identity mark | Recommended | Missing | Use only if it improves trust and design. |
| Open Graph image | Recommended | Missing | Needed before deployment/public sharing. |
| Favicon or AJ monogram | Recommended | Missing | Needed for polish. |

## Mahoraga

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Repo link | Required | Missing | Do not publish a repo CTA until verified. |
| Demo GIF or video | Required | Missing | 60-second behavior demo preferred. |
| Architecture diagram | Required | Missing | Show environment, reward, agent, API, UI. |
| Reward-system visualization | Required | Missing | Needed to frame adaptive behavior. |
| Training timeline or metrics chart | Required | Missing | Use only documented metrics. |
| Kaggle notebook link | Recommended | Missing | Mention only if real. |
| HuggingFace/Gradio demo link | Recommended | Missing | Mention only if real. |
| Failure mode or limitation note | Required | Missing | Prevents overclaiming. |
| Project screenshot | Recommended | Missing | Useful if UI is real and polished. |
| Deployment link | Optional | Missing | Required only if hosted. |

## Hybrid GenAI Transaction Categorizer

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Repo link | Required | Missing | Do not publish until verified. |
| Demo video or GIF | Required | Missing | Show end-to-end classification flow. |
| Confidence-routing diagram | Required | Missing | Core proof for AI systems architecture. |
| Merchant memory visualization | Required | Missing | Needed to show memory behavior. |
| Latency comparison benchmark | Required | Missing | ONNX path vs LLM fallback path if measurable. |
| Routing decision table | Required | Missing | Use real or representative transactions, clearly labeled. |
| UI screenshots | Required | Missing | Main workflow and analytics/history views. |
| Deployment link | Recommended | Missing | Useful if app is hosted. |
| Limitation/failure-mode note | Required | Missing | Include low-confidence and bad-output behavior. |

## The Loop

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Repo link | Required | Missing | Needed for product engineering proof. |
| Deployment link | Required | Missing | Required if claiming deployed product. |
| Product screenshots | Required | Missing | Include primary workflow and mobile view. |
| Database diagram | Required | Missing | Show users, events, interests, RSVPs, chat, recommendations. |
| WebSocket architecture diagram | Required | Missing | Show real-time communication flow. |
| Auth flow diagram | Required | Missing | OAuth/JWT boundary. |
| User workflow walkthrough | Required | Missing | Show event coordination path. |
| Demo video or GIF | Recommended | Missing | End-to-end product flow. |
| Limitation/failure-mode note | Required | Missing | Include disconnects, auth errors, or recommendation limits. |

## AI Resume Tailoring Engine

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Repo link | Required | Missing | Needed for credibility. |
| Pipeline diagram | Required | Missing | Profile compression -> prompt constraints -> generation -> PDF/ATS. |
| Sample generated resume | Required | Missing | Must redact private information. |
| ATS report screenshot | Required | Missing | Needed if ATS reporting is mentioned. |
| Anti-hallucination constraint example | Required | Missing | Prevents wrapper perception. |
| Fallback chain diagram | Recommended | Missing | Show model fallback behavior. |
| Demo video or GIF | Recommended | Missing | Useful for workflow proof. |
| Deployment link | Optional | Missing | Only if hosted. |

## Webcam Motion Alert System

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Repo link | Required | Missing | Needed before including CTA. |
| Streamlit screenshot | Required | Missing | Current risk audit flags screenshot gap. |
| Motion detection screenshot | Required | Missing | Show bounding boxes or detection state. |
| Email alert screenshot | Required | Missing | Redact private details. |
| Workflow diagram | Required | Missing | Camera -> frame differencing -> alert -> cleanup. |
| Demo GIF or video | Recommended | Missing | Stronger than screenshots for CV automation. |
| Deployment link | Optional | Missing | Likely not applicable unless hosted. |

## Minimal RAG Implementation

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Repo link | Recommended | Missing | Lab only. |
| Retrieval pipeline diagram | Recommended | Missing | Dataset -> chunking -> embeddings -> retrieval -> answer. |
| Example query output | Recommended | Missing | Include one success and one limitation if available. |
| Evaluation notes | Optional | Missing | Helpful if expanding beyond lab. |

## Music Web Scraper

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Repo link | Recommended | Missing | Lab only. |
| Input/output screenshot | Recommended | Missing | Show useful generated data. |
| Scraping flow diagram | Optional | Missing | Only needed if scope is non-trivial. |
| Demo terminal GIF | Optional | Missing | Useful if CLI is clean. |

## Global Super Store Database Project

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Repo or report link | Recommended | Missing | Lab only. |
| Schema diagram | Recommended | Missing | Show database fundamentals. |
| Query examples | Recommended | Missing | Include meaningful SQL output. |
| Dashboard/chart screenshot | Optional | Missing | Only if polished. |

## Fast and Curious Car Analysis

| Asset | Priority | Status | Notes |
|---|---|---|---|
| Notebook or repo link | Recommended | Missing | Lab only. |
| Analysis result screenshot | Recommended | Missing | Show final insight, not raw charts only. |
| Dataset/source note | Recommended | Missing | Needed for context. |
| Demo or walkthrough | Optional | Missing | Not required for lab. |

## Timeline-Only Foundation Projects

| Project | Asset | Priority | Status | Notes |
|---|---|---|---|---|
| Custom Linear Regression Model | Repo/notebook link | Optional | Missing | Timeline only. |
| Iris Classification | Repo/notebook link | Optional | Missing | Timeline only. |
| Netflix EDA | Repo/notebook link | Optional | Missing | Timeline only. |

## Completion Tracker

| Area | Required Assets | Verified | Completion |
|---|---:|---:|---:|
| Global identity/contact | 4 | 0 | 0% |
| Mahoraga | 6 | 0 | 0% |
| Hybrid Categorizer | 7 | 0 | 0% |
| The Loop | 7 | 0 | 0% |
| Secondary projects | 10 | 0 | 0% |
| Lab projects | 8 | 0 | 0% |

## Asset Rules

1. Required assets block final implementation polish.
2. Recommended assets improve credibility but should not block scaffolding.
3. Optional assets are useful only if real and easy to verify.
4. Do not include placeholder links.
5. Do not invent metrics.
6. Do not use fake screenshots or fake dashboards.
7. Every new or changed asset requirement must update `docs/06_ASSET_TRACKER.md`.

