# 13_FEATURED_EVIDENCE_REVIEW.md

Date: 2026-06-26

Purpose:
- Record the final featured evidence hardening pass before frontend scaffolding.
- Review each Mermaid/spec diagram for correctness, clarity, overclaiming, infrastructure claims, system boundaries, mobile readability, and frontend renderability.
- Decide what is ready for the first static homepage implementation versus what remains blocked for production-ready UI polish.

Important scope note:
- This is a documentation and spec review, not a rendered-image verification pass.
- Do not mark screenshots, diagrams, metrics, or resume files as Verified unless they exist inside this repository or were directly checked.

## Summary Decision

Astro static scaffolding can begin if it is limited to structure, routing, content placeholders backed by existing docs, and conservative evidence labels.

Production-ready UI polish remains blocked because portfolio-local screenshots, demo media, role/contribution details, resume publication, and full endpoint/fallback benchmark evidence are not complete.

## Diagram Review Summary

| Diagram | Visual Review Status | Content Confidence | Frontend Readiness | Required edits before implementation |
|---|---|---|---|---|
| `docs/diagrams/mahoraga-architecture.md` | Needs Revision | Medium | Not Ready | Split runtime/demo flow from training flow; clarify Gradio/API/CLI as alternate interfaces; shorten labels for mobile; avoid implying production deployment. |
| `docs/diagrams/mahoraga-reward-system.md` | Approved | High | Ready | Keep as case-study diagram; shorten labels if used as homepage thumbnail; pair with reward-hacking limitation. |
| `docs/diagrams/hybrid-categorizer-routing.md` | Needs Revision | High | Not Ready | Convert to a left-to-right routing flow; make the confidence threshold explicit; separate merchant override, ONNX, semantic rules, and LLM fallback; remove ambiguous `used` response field wording. |
| `docs/diagrams/hybrid-categorizer-memory.md` | Needs Revision | Medium | Not Ready | Separate backend merchant map from frontend analytics/history; show correction path more clearly; avoid calling memory self-learning without caveats. |
| `docs/diagrams/the-loop-system.md` | Needs Revision | Medium | Not Ready | Add explicit client/server/database boundary; reduce table list density; avoid production-ops implications; keep Render topology separate unless rechecked for launch copy. |
| `docs/diagrams/the-loop-realtime-flow.md` | Approved | High | Ready | Use in case study with a visible limitation about disconnects, JWT state, and no documented offline delivery queue. |
| `docs/diagrams/the-loop-auth-flow.md` | Approved | High | Ready | Use in case study; do not imply refresh-token rotation, enterprise session management, or hardened auth beyond documented behavior. |

## Mahoraga

### Portfolio Role

Flagship technical-depth project and primary proof of adaptive AI systems engineering.

### Current Verified Evidence

- GitHub repo: `https://github.com/Atishay9828/meta_Mahoraga`
- Kaggle notebook: `https://www.kaggle.com/code/atishay9828/meta-mahoraga/edit`
- HuggingFace demo: `https://huggingface.co/spaces/MridulNegi2005/Project-Mahoraga`

### Homepage-Ready Evidence

- Verified external links can be used as CTAs after public-copy review.
- Reward-system diagram is Ready as a compact technical proof artifact.
- Architecture diagram can inform copy, but should not be used as a homepage visual until revised.
- Limitation framing is available and should be shown in short form.

### Case-Study-Ready Evidence

- Code-backed environment, mechanics, reward, enemy, Gym wrapper, UI/API bridge, and training workflow references are documented in `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`.
- Reward-system diagram is ready for case-study use after final render check.
- Architecture diagram needs simplification before case-study visual use.

### Missing Evidence

- Portfolio-local demo GIF/video.
- Portfolio-local screenshots or selected visual assets.
- Reviewed training/evaluation artifact.
- Role/contribution details.
- Final tradeoff copy tied to documented constraints.

### Diagram Review

| Diagram | Visual Review Status | Content Confidence | Frontend Readiness | Required edits |
|---|---|---|---|---|
| Mahoraga architecture | Needs Revision | Medium | Not Ready | Split runtime/demo and training paths; clarify alternate interfaces; shorten labels; avoid production infrastructure implication. |
| Mahoraga reward system | Approved | High | Ready | Keep reward-hacking limitation adjacent to the diagram. |

### Screenshot / Import Requirements

- Import or recreate a demo clip showing adaptive behavior.
- Import reviewed screenshots or metrics only from documented repo artifacts.
- Destination: `public/assets/projects/mahoraga/`.
- Do not invent gameplay clips, training curves, or benchmark numbers.

### Role / Contribution Status

Needed.

Ownership is not explicitly documented in the current source docs. Do not invent it.

### Limitation Status

Hardened limitation available:
- Reward hacking remains possible despite anti-cowardice and opportunity penalties.
- Evaluation scope is not yet proven broad enough for robust adaptive-agent claims.
- Hackathon/demo constraints should be mentioned if the project is framed as an applied prototype.

### Ready For First Static Homepage Implementation?

Yes, with constraints.

Use verified links, conservative copy, and the reward-system diagram. Do not use the unrevised architecture diagram as a final visual, and do not claim robust performance without reviewed evaluation evidence.

## Hybrid GenAI Transaction Categorizer

### Portfolio Role

Production-minded AI systems proof: local classifier first, LLM fallback only when confidence or rules require it, with merchant memory for repeated ambiguity.

### Current Verified Evidence

- GitHub repo: `https://github.com/Atishay9828/Hybrid-GenAI-Transaction-Categorization`
- YouTube walkthrough: `https://youtu.be/fsTXVh9JpoE`

### Homepage-Ready Evidence

- Verified repo and walkthrough links.
- High-confidence routing concept, but the current diagram needs simplification before homepage use.
- Limitation framing is available.

### Case-Study-Ready Evidence

- Repo-backed architecture references for React/Vite frontend, FastAPI backend, ONNX classifier, LLM fallback, merchant extraction, and merchant memory.
- Benchmark and routing methodology is defined in `docs/15_HYBRID_BENCHMARK_AND_ROUTING_PLAN.md`.

### Missing Evidence

- Deployment link if hosted.
- Portfolio-local screenshots.
- Full endpoint/fallback/cost benchmark measurements.
- Routing decision table with real or clearly representative examples.
- Role/contribution details.
- Final tradeoff copy.

### Diagram Review

| Diagram | Visual Review Status | Content Confidence | Frontend Readiness | Required edits |
|---|---|---|---|---|
| Hybrid routing | Needs Revision | High | Not Ready | Make threshold explicit; separate routing branches; shorten labels; clarify response fields. |
| Hybrid merchant memory | Needs Revision | Medium | Not Ready | Separate backend map from frontend history/analytics; show correction path; avoid overclaiming self-learning. |

### Screenshot / Import Requirements

- Import reviewed UI screenshots from the external repo only after visual inspection.
- Candidate destination: `public/assets/projects/hybrid-categorizer/`.
- Use `docs/20_HYBRID_BENCHMARK_RESULTS.md` for local classifier/routing evidence; capture endpoint/fallback proof only after those measurements/examples are real.
- Do not invent deployment, latency, cost, accuracy, or savings numbers.

### Role / Contribution Status

Needed.

Ownership is not explicitly documented in the current source docs. Do not invent it.

### Limitation Status

Hardened limitation available:
- Confidence threshold tuning directly affects fallback rate and correctness.
- LLM fallback can add latency and cost.
- Merchant memory quality depends on feedback quality and can encode wrong mappings.

### Ready For First Static Homepage Implementation?

Yes, with constraints.

Use the verified repo/walkthrough and explain the hybrid routing idea. Present the local classifier/routing benchmark only with its limitations; do not present endpoint, fallback, cost, deployment, production, or self-learning claims until the required proof exists.

## The Loop

### Portfolio Role

Main Product Engineer proof: a full-stack student event coordination platform with discovery, RSVP/join flows, friends, chat, and carpool coordination.

### Current Verified Evidence

- GitHub repo: `https://github.com/Atishay9828/TIET-LOOP`
- Deployment: `https://the-loop-5m7u.onrender.com/`

### Homepage-Ready Evidence

- Verified repo and deployment links.
- Realtime and auth diagrams are ready for case-study use after render check.
- Product workflow structure is documented in `docs/16_THE_LOOP_WORKFLOW_WALKTHROUGH.md`.

### Case-Study-Ready Evidence

- Repo-backed references for auth, events, users/interests, carpool, friends, chat history, WebSocket chat, and SQLAlchemy models.
- Workflow walkthrough exists as a draft source artifact.

### Missing Evidence

- Portfolio-local product screenshots.
- Demo video or GIF.
- Role/contribution details.
- Validation/testing evidence if production-minded reliability claims are used.
- Final deployed frontend/backend behavior check before launch copy.

### Diagram Review

| Diagram | Visual Review Status | Content Confidence | Frontend Readiness | Required edits |
|---|---|---|---|---|
| The Loop system | Needs Revision | Medium | Not Ready | Add explicit boundaries; reduce table density; avoid production-ops implication; keep deployment topology separate. |
| The Loop realtime flow | Approved | High | Ready | Pair with disconnect/JWT/offline-delivery limitation. |
| The Loop auth flow | Approved | High | Ready | Pair with token/session limitation; do not imply advanced auth hardening. |

### Screenshot / Import Requirements

- Import or capture landing, interest selection, event discovery, RSVP/join, friend/chat, carpool, and admin screens if available.
- Candidate destination: `public/assets/projects/the-loop/`.
- Redact user names, emails, JWTs, event registrations, chat messages, and private carpool details.

### Role / Contribution Status

Needed.

Ownership is not explicitly documented in the current source docs. Do not invent it.

### Limitation Status

Hardened limitation available:
- WebSocket disconnects and active JWT state can affect realtime delivery.
- Session/auth edge cases are MVP-level and should not be presented as enterprise-grade security.
- Recommendations and matching are product features, not proven recommendation-system research.
- Render/free-tier deployment constraints may affect perceived reliability.

### Ready For First Static Homepage Implementation?

Yes, with constraints.

Use verified links, conservative product-flow copy, and the approved realtime/auth diagrams. Do not use the system diagram as a final visual until revised, and do not claim mature production operations.
