# 10_PROJECT_EVIDENCE_REGISTRY.md

Date: 2026-06-26

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
- Repo-contained screenshot/metrics candidates: Known, not portfolio-local.
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
- Portfolio-local screenshot/media selection.
- Final reviewed training/evaluation artifact.
- Role/contribution detail.
- Final tradeoff note.

Verification notes:
- GitHub repo loads as public repo `Atishay9828/meta_Mahoraga`.
- Kaggle `/edit` URL loads via GET as notebook title `MEta_Mahoraga` and canonicalizes to `/code/atishay9828/meta-mahoraga`; HEAD returned 404, so use GET/browser verification for this link.
- HuggingFace API confirms public Space titled `Mahoraga - Adaptive Combat RL Environment`; runtime was `SLEEPING`, so visitors may experience a cold start.
- Created diagram/spec files: `docs/diagrams/mahoraga-architecture.md` and `docs/diagrams/mahoraga-reward-system.md`.
- Limitation note drafted in `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`.

Can be shown publicly yet:
- Partially. Verified links and Known diagram specs can be referenced during implementation planning, but the project is not ready for full featured presentation until diagrams are visually reviewed and demo media, selected screenshots/metrics, role details, and final tradeoff copy are ready.

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
- Repo-contained screenshots: Known, not portfolio-local.
- Benchmarks/routing table: Needed.

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
- Benchmarks.
- Portfolio-local screenshots.
- Routing decision table.
- Role/contribution detail.
- Final tradeoff note.

Verification notes:
- Short URL redirects to YouTube watch URL and oEmbed title is `Hybrid GenAI Transaction Categorization | Full Project Demo + Architecture Explained`.
- GitHub API confirms public repo `Atishay9828/Hybrid-GenAI-Transaction-Categorization`.
- Created diagram/spec files: `docs/diagrams/hybrid-categorizer-routing.md` and `docs/diagrams/hybrid-categorizer-memory.md`.
- Repo contains screenshot candidates under `frontend/public/screenshots/`; these are Known but not portfolio-local.
- Limitation note drafted in `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`.

Can be shown publicly yet:
- Partially. Verified walkthrough, repo, and Known diagram specs can be referenced during implementation planning, but full featured presentation remains blocked by missing deployment status, portfolio-local screenshots, benchmark/routing evidence, role detail, and final tradeoff copy.

### The Loop

Portfolio tier: Featured

Verified links:
- Deployment: `https://the-loop-5m7u.onrender.com/`
- GitHub repo: `https://github.com/Atishay9828/TIET-LOOP`

Evidence status:
- Deployment: Verified.
- Repo link: Verified.
- Diagram specs: Known.
- Repo-contained product screenshot candidates: Known, not portfolio-local.
- Product workflow walkthrough: Needed.

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
- Portfolio-local screenshots.
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

Can be shown publicly yet:
- Partially. Verified deployment, repo, and Known diagram specs can be referenced during implementation planning, but full featured presentation remains blocked by portfolio-local screenshots, workflow walkthrough, role details, and final tradeoff copy.

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
