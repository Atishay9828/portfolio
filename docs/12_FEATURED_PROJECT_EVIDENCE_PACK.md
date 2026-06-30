# 12_FEATURED_PROJECT_EVIDENCE_PACK.md

Date: 2026-06-26

Purpose:
- Package the current proof state for the three featured projects.
- Separate verified links, known repo-contained assets, created diagram specs, and still-missing portfolio evidence.
- Prevent frontend implementation from using claims, screenshots, metrics, or diagrams that have not been collected or reviewed.

Status vocabulary follows `ASSET_REQUIREMENTS.md`: Known, Verified, Missing, Needed, Not applicable.

## Evidence Pack Summary

| Project | Public-readiness | Diagram source confidence | Main remaining blocker |
|---|---|---|---|
| Mahoraga | Partial, static-scaffold ready with constraints | High for reward system; Medium for combined architecture/training UI | Local demo media, architecture diagram revision, role/contribution detail |
| Hybrid GenAI Transaction Categorizer | Partial, static-scaffold ready with constraints | High for routing concept; Medium for final visual diagrams | Deployment link, endpoint/fallback/cost benchmark evidence, portfolio-local screenshots |
| The Loop | Partial, static-scaffold ready with constraints | High for auth/realtime; Medium for system/deployment topology | Portfolio-local product screenshots, system diagram revision, role/contribution detail |

## Mahoraga

### Project Name

Mahoraga

### Portfolio Role

Flagship technical-depth project and primary proof of adaptive AI systems engineering.

### Current Verified Links

- GitHub repo: `https://github.com/Atishay9828/meta_Mahoraga`
- Kaggle notebook: `https://www.kaggle.com/code/atishay9828/meta-mahoraga/edit`
- HuggingFace demo: `https://huggingface.co/spaces/MridulNegi2005/Project-Mahoraga`

### Current Evidence Status

- Links: Verified.
- Architecture diagram spec: Known; `docs/diagrams/mahoraga-architecture.md` exists and needs visual review.
- Reward-system diagram spec: Known; `docs/diagrams/mahoraga-reward-system.md` exists and needs visual review.
- Diagram review: Known in `docs/13_FEATURED_EVIDENCE_REVIEW.md`; reward-system diagram is Ready, architecture diagram needs revision.
- Repo-contained visual artifacts: Known; repo contains `docs/training_metrics.png`, `docs/dashboard_preview.png`, and related dashboard assets, but they are not portfolio-local and have not been visually reviewed for final use.
- Local demo GIF/video: Needed.
- Role/contribution detail: Needed.

### Public-Readiness Status

Partial. Verified links, conservative copy, and the reward-system diagram can inform the first static homepage. The project is not ready for final featured polish until demo media, architecture diagram revision, rendered/mobile diagram QA, role/contribution details, and limitation framing are finalized.

### Required Evidence Assets

- Architecture diagram.
- Reward-system visualization.
- Training timeline or metrics chart.
- Demo GIF/video.
- Failure mode or limitation note.
- Role/contribution details.
- Project screenshot if the UI is used visually.

### Existing Evidence

- `env/mahoraga_env.py` orchestrates `reset()` and `step()`.
- `env/mechanics.py` contains resistance, damage, judgment, healing, and adaptation mechanics.
- `env/enemy.py` contains `CurriculumEnemy`.
- `env/rewards.py` contains reward components: survival, combat, adaptation, anti-cowardice, efficiency, terminal, and opportunity.
- `env/gym_wrapper.py` exposes a Gymnasium-compatible wrapper.
- `notebooks/mahoraga_training.py` documents Qwen 2.5 3B, LoRA, reward-weighted SFT, episode collection, and plotting.
- `app.py` provides a Gradio UI.
- `api.py` provides a FastAPI bridge and optional Qwen/LoRA auto-play path.
- Repo docs mention tests and training metrics, but portfolio should not publish those as final proof until reviewed.

### Missing / Needed Evidence

- Local demo GIF/video showing adaptive behavior.
- Portfolio-local screenshots or selected visual assets.
- Visual review of Mermaid diagrams.
- Role/contribution details.
- Clear training/evaluation artifact selection.
- Concise tradeoff note.

### Architecture Diagram Candidate

- `docs/diagrams/mahoraga-architecture.md`
- `docs/diagrams/mahoraga-reward-system.md`

### Diagram Source Confidence

High for environment and reward components because the code files directly document them. Medium for training/UI integration because the repo has separate Gradio, FastAPI, frontend, and notebook paths and the final portfolio should choose which path to feature.

### Failure Mode / Limitation Note

Reward hacking remains a real risk. The code includes anti-cowardice and opportunity penalties, which suggests healing spam and passive adaptation were considered, but the portfolio should still state that reward balance and evaluation scope require careful validation before claiming robust adaptive behavior.

### Case Study Proof Checklist

- [x] Verified repo link.
- [x] Verified notebook/demo links.
- [x] Diagram spec for system architecture.
- [x] Diagram spec for reward system.
- [x] Limitation note drafted.
- [ ] Portfolio-local demo GIF/video.
- [ ] Portfolio-local screenshot or selected visual artifact.
- [ ] Training metrics reviewed and selected.
- [ ] AJ role/contribution scope.
- [ ] Tradeoff explanation.

### Homepage Proof Checklist

- [x] One verified repo/demo link is available.
- [x] Architecture thumbnail source exists as Mermaid.
- [x] Limitation note exists.
- [ ] Demo media is ready.
- [ ] Screenshot/visual asset is ready.
- [ ] Short role/contribution line is ready.
- [ ] Copy avoids leading with game/anime context.

### What Must Be Collected Before Frontend Implementation

- Final demo media or explicit decision to use HuggingFace as the only demo CTA.
- Selected screenshot/dashboard/training-metrics asset copied or referenced safely.
- Visual review of both diagram specs.
- Ownership and contribution scope.
- Final case-study limitation/tradeoff language.

## Hybrid GenAI Transaction Categorizer

### Project Name

Hybrid GenAI Transaction Categorizer

### Portfolio Role

Production-minded AI systems proof: local classifier first, LLM only when confidence or rules require fallback, with merchant memory to reduce repeated ambiguity.

### Current Verified Links

- GitHub repo: `https://github.com/Atishay9828/Hybrid-GenAI-Transaction-Categorization`
- YouTube walkthrough: `https://youtu.be/fsTXVh9JpoE`

### Current Evidence Status

- Repo and walkthrough: Verified.
- Routing diagram spec: Known; `docs/diagrams/hybrid-categorizer-routing.md` exists and needs visual review.
- Merchant memory diagram spec: Known; `docs/diagrams/hybrid-categorizer-memory.md` exists and needs visual review.
- Diagram review: Known in `docs/13_FEATURED_EVIDENCE_REVIEW.md`; both diagrams need revision before final frontend use.
- Repo-contained screenshots: Known; repo contains `frontend/public/screenshots/predict.png`, `categories.png`, `history.png`, and `memory.png`, but they are not portfolio-local and have not been visually reviewed.
- Deployment link: Missing.
- Latency/cost benchmark: Known/Needed; local classifier/routing benchmark exists in `docs/20_HYBRID_BENCHMARK_RESULTS.md`, but endpoint latency, Qwen fallback latency, cost, fallback-rate, and production claims remain Needed/blocked.
- Benchmark/routing methodology: Known in `docs/15_HYBRID_BENCHMARK_AND_ROUTING_PLAN.md`.
- Measured routing decision table: Needed.
- Role/contribution detail: Needed.

### Public-Readiness Status

Partial. This project has strong architecture evidence in the repo, a verified walkthrough, and local classifier/routing benchmark evidence, so it can support conservative static scaffolding. Full featured presentation remains blocked by missing endpoint/fallback/cost benchmark proof, deployment status, role details, diagram revisions, and portfolio-local screenshots.

### Required Evidence Assets

- Repo link.
- Deployment link if hosted.
- Confidence-routing diagram.
- Merchant memory visualization.
- Latency comparison benchmark.
- Routing decision table.
- UI screenshots.
- Limitation/failure-mode note.
- Role/contribution details.

### Existing Evidence

- `docs/ARCHITECTURE.md` documents React/Vite frontend, FastAPI backend, ONNX classifier, LLM fallback, merchant extraction, and response shape.
- `docs/AI_PIPELINE.md` documents merchant extraction, ONNX prediction, threshold-based LLM fallback, and hybrid output.
- `docs/MERCHANT_MEMORY.md` documents merchant memory structure and extraction examples.
- `backend/main.py` exposes `/predict` and `/feedback`.
- `backend/classify.py` implements merchant override, ONNX prediction, semantic fallback rules, LLM fallback, and learning status.
- `data/categories.json` documents a `confidence_threshold` of `0.90`.
- `frontend/src/state/MerchantMemory.js` and `HistoryStore.js` document client-side memory/history behavior.
- `frontend/public/screenshots/` contains UI screenshot candidates.

### Missing / Needed Evidence

- Deployment link if hosted.
- Endpoint/fallback latency or cost comparison. Do not reuse qualitative "fast" wording as a metric.
- Real or clearly representative routing decision table.
- Portfolio-local screenshot selection.
- Role/contribution details.
- Final tradeoff note.

### Architecture Diagram Candidate

- `docs/diagrams/hybrid-categorizer-routing.md`
- `docs/diagrams/hybrid-categorizer-memory.md`

### Diagram Source Confidence

High. The repo contains dedicated architecture, AI pipeline, merchant memory docs, backend route code, and frontend state files.

### Failure Mode / Limitation Note

The fallback path can increase latency and depends on confidence threshold tuning. Merchant memory can also learn incorrect mappings if feedback or high-confidence extraction is wrong, so the portfolio should frame it as a practical hybrid design with validation needs rather than a fully autonomous financial classifier.

### Case Study Proof Checklist

- [x] Verified repo link.
- [x] Verified walkthrough link.
- [x] Routing diagram spec.
- [x] Merchant memory diagram spec.
- [x] Limitation note drafted.
- [x] Repo-contained UI screenshot candidates found.
- [ ] Deployment link.
- [ ] Portfolio-local screenshots.
- [x] Local classifier/routing benchmark.
- [ ] Endpoint/fallback/cost benchmark.
- [ ] Routing decision table.
- [ ] Role/contribution scope.

### Homepage Proof Checklist

- [x] Verified repo and walkthrough links.
- [x] Architecture thumbnail source exists as Mermaid.
- [x] Limitation note exists.
- [ ] Screenshot/visual asset selected.
- [x] One local benchmark or routing example available.
- [ ] Short role/contribution line ready.

### What Must Be Collected Before Frontend Implementation

- Select and review screenshot assets from the repo or capture fresh screenshots.
- Produce a small routing decision table using documented examples.
- Measure endpoint latency, fallback latency, and cost if those claims will appear.
- Confirm deployment status.
- Add role/contribution details.

## The Loop

### Project Name

The Loop

### Portfolio Role

Main Product Engineer proof: a full-stack student event coordination platform with event discovery, interest-based matching, authentication, WebSocket chat, friend flows, and carpool coordination.

### Current Verified Links

- GitHub repo: `https://github.com/Atishay9828/TIET-LOOP`
- Deployment: `https://the-loop-5m7u.onrender.com/`

### Current Evidence Status

- Repo and deployment: Verified.
- System diagram spec: Known; `docs/diagrams/the-loop-system.md` exists and needs visual review.
- Realtime flow diagram spec: Known; `docs/diagrams/the-loop-realtime-flow.md` exists and needs visual review.
- Auth flow diagram spec: Known; `docs/diagrams/the-loop-auth-flow.md` exists and needs visual review.
- Diagram review: Known in `docs/13_FEATURED_EVIDENCE_REVIEW.md`; realtime and auth diagrams are Ready, system diagram needs revision.
- Repo-contained screenshots: Known; repo contains `assets/landing_page.jpg` and `assets/interest_selection.png`, but they are not portfolio-local and have not been visually reviewed.
- Product workflow walkthrough: Known in `docs/16_THE_LOOP_WORKFLOW_WALKTHROUGH.md`; screenshots still Needed.
- Role/contribution detail: Needed.

### Public-Readiness Status

Partial. The project has verified repo/deployment evidence, a documented workflow walkthrough, and clear full-stack components. The public case study still needs reviewed screenshots, system diagram revision, limitation/tradeoff copy, and contribution scope.

### Required Evidence Assets

- Repo link.
- Product screenshots.
- Database diagram.
- WebSocket architecture diagram.
- Auth flow diagram.
- User workflow walkthrough.
- Limitation/failure-mode note.
- Role/contribution details.

### Existing Evidence

- `README.md` documents the user flow from auth to profile/interests, event matching, RSVP/join, friends, chat, and carpool.
- `main.py` defines SQLAlchemy models for users, events, user interests, user-event joins, carpool groups/requests, friend requests, and chat messages.
- `main.py` exposes REST endpoints for events, auth, users, carpool, friends, admin events, and chat history.
- `main.py` includes WebSocket route `/ws/chat/{client_id}` with JWT validation and a connection manager.
- `src/hooks/useChatSystem.js` manages friend data, chat history, WebSocket lifecycle, and message send/receive behavior.
- `render.yaml` documents separate Render services for frontend and backend.
- `assets/` contains landing and interest-selection screenshot candidates.

### Missing / Needed Evidence

- Portfolio-local product screenshots.
- User workflow walkthrough.
- Visual review of diagram specs.
- Role/contribution details.
- Final limitation/tradeoff language.
- Any testing/QA evidence if production-minded language is used.

### Architecture Diagram Candidate

- `docs/diagrams/the-loop-system.md`
- `docs/diagrams/the-loop-realtime-flow.md`
- `docs/diagrams/the-loop-auth-flow.md`

### Diagram Source Confidence

High for backend models, REST routes, auth, and WebSocket flow because these are visible in code. Medium for deployed topology because `render.yaml` documents frontend/backend services, but the verified public URL and backend URL should still be checked manually before final launch copy.

### Failure Mode / Limitation Note

WebSocket chat depends on valid JWTs and active connections. Disconnects, expired tokens, and multi-tab state can affect realtime delivery, so the case study should explicitly discuss reconnect/session handling as a limitation or future hardening area.

### Case Study Proof Checklist

- [x] Verified repo link.
- [x] Verified deployment link.
- [x] System diagram spec.
- [x] WebSocket flow diagram spec.
- [x] Auth flow diagram spec.
- [x] Limitation note drafted.
- [x] Repo-contained screenshot candidates found.
- [ ] Portfolio-local screenshots.
- [ ] User workflow walkthrough.
- [ ] Role/contribution scope.
- [ ] Validation/testing evidence.

### Homepage Proof Checklist

- [x] Verified repo and deployment links.
- [x] Architecture thumbnail source exists as Mermaid.
- [x] Limitation note exists.
- [ ] Screenshot/visual asset selected.
- [ ] Short product workflow line ready.
- [ ] Short role/contribution line ready.

### What Must Be Collected Before Frontend Implementation

- Select or capture product screenshots.
- Write a concise user workflow walkthrough.
- Add ownership/contribution details.
- Confirm deployed frontend/backend behavior manually if linking public CTAs.
- Decide whether to mention Render free-tier constraints.
