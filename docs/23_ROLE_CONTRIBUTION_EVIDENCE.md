# 23_ROLE_CONTRIBUTION_EVIDENCE.md

Date: 2026-07-03

Purpose:
- Create a claim-safe framework for featured project role and contribution evidence.
- Prevent the portfolio from implying ownership, leadership, module responsibility, or teammate role splits before AJ confirms them.
- Prepare the exact questions needed to turn current pending states into public-ready contribution copy.

Status vocabulary follows the repo evidence model: Known, Verified, Missing, Needed, Not applicable.

## Summary

Role/contribution details remain Needed for all three featured projects.

Current repo evidence proves that the projects, links, code references, screenshots, benchmark docs, and workflow docs exist at different evidence levels. It does not prove which parts AJ personally built, which parts teammates built, which decisions AJ owned, or which files/modules should be attributed to AJ in public copy.

Safe current public wording:

```text
Contribution details pending final owner review.
Role split needs confirmation before public launch.
```

Unsafe current public wording:
- "I built the entire project."
- "I led the team."
- "I owned the backend/frontend/model pipeline."
- "My contribution was the routing system/reward loop/WebSocket system."
- "I solved the main performance issue."
- "I designed the architecture."

Those may become usable only after AJ supplies source-backed contribution evidence.

## Required Evidence Standard

Before detailed role claims appear in public case studies, each project needs:
- A plain-language description of what AJ personally built.
- A plain-language description of what teammates built.
- File, module, feature, commit, PR, notebook, demo, or issue evidence for AJ's contribution.
- A hard technical decision AJ can explain without exaggeration.
- A bug, performance, design, or product issue AJ actually solved.
- Explicit exclusions for what should not be claimed.

## Shared Questions AJ Must Answer

For each featured project:
1. What did you personally build?
2. What did teammates build?
3. Which files, modules, routes, notebooks, UI screens, diagrams, or features were yours?
4. What hard technical decision did you make?
5. What bug, performance issue, design issue, or product issue did you solve?
6. What evidence proves this contribution? Use commits, files, screenshots, demo timestamps, docs, PRs, or teammate confirmation if available.
7. What should not be claimed publicly?

## Mahoraga

### Current Project Summary

Mahoraga is the flagship adaptive AI systems project. The current case study frames it as an adaptive-agent environment with environment mechanics, curriculum pressure, reward components, Gymnasium interaction, FastAPI/Gradio surfaces, and optional Qwen/LoRA paths.

### Currently Documented Contribution Details

Status: Needed.

The repo currently documents project architecture and evidence, but not AJ's personal contribution scope. Verified public links exist for GitHub, Kaggle, and HuggingFace. Source-backed technical areas include environment mechanics, enemy curriculum behavior, reward components, Gym wrapper, training workflow references, and demo/API surfaces. None of that proves AJ personally owned those parts.

### Unclear Contribution Details

- Whether AJ built the environment mechanics.
- Whether AJ designed the reward components.
- Whether AJ implemented the enemy curriculum behavior.
- Whether AJ worked on Qwen/LoRA training or only documented/used it.
- Whether AJ built the FastAPI/Gradio demo paths.
- Whether teammates contributed code, design, training, demo, or presentation work.
- Which files/modules can be safely attributed to AJ.

### Questions AJ Must Answer

1. What did you personally build in Mahoraga?
2. What did teammates build?
3. Which files/modules were yours: `env/mahoraga_env.py`, `env/mechanics.py`, `env/enemy.py`, `env/rewards.py`, `env/gym_wrapper.py`, `api.py`, `app.py`, notebook code, frontend code, docs, or something else?
4. What hard technical decision did you make around the reward loop, environment mechanics, enemy behavior, training path, or demo interface?
5. What bug, reward-design issue, exploit behavior, performance issue, or evaluation issue did you solve?
6. What evidence proves your contribution? Name files, commits, notebook cells, demo timestamps, docs, or teammate confirmation.
7. What should not be claimed publicly about your role, results, training performance, or teammate work?

### Safe Public Wording Available Now

- `Contribution details pending final owner review.`
- `Role split needs confirmation before public launch.`
- `The current evidence supports project-level environment, reward, and demo architecture, but not personal ownership claims.`

### Unsafe Wording To Avoid

- "I designed the full reward system."
- "I built the RL environment end to end."
- "I trained the model."
- "I led Mahoraga."
- "My reward design produced robust adaptive behavior."
- "I solved reward hacking."

### Launch Readiness Status

Blocked for role/contribution claims. The project can remain visible with pending contribution wording, but public ownership, leadership, module-ownership, and performance claims are not launch-ready.

## Hybrid GenAI Transaction Categorizer

### Current Project Summary

Hybrid GenAI Transaction Categorizer is the production-minded AI systems proof. The current case study frames it as layered transaction routing: merchant override, local ONNX inference, confidence/rule checks, optional LLM fallback, feedback, history, and merchant memory.

### Currently Documented Contribution Details

Status: Needed.

The repo currently documents verified GitHub/YouTube links, sample-data UI proof, local read-only ONNX classifier/routing benchmark results, and source-backed History AI Insight behavior. It does not document AJ's personal role, teammate role split, or feature ownership.

### Unclear Contribution Details

- Whether AJ built the FastAPI `/predict` backend path.
- Whether AJ implemented ONNX inference, merchant extraction, semantic fallback, or LLM fallback.
- Whether AJ built merchant memory or frontend history behavior.
- Whether AJ built the React/Vite UI screens.
- Whether AJ created the walkthrough video or benchmark methodology.
- Which teammate, if any, built model training, frontend, backend, docs, or demo pieces.
- Which files/modules can be safely attributed to AJ.

### Questions AJ Must Answer

1. What did you personally build in Hybrid?
2. What did teammates build?
3. Which files/modules/features were yours: `backend/main.py`, `backend/classify.py`, preprocessing, merchant memory, feedback route, History AI Insight, React screens, benchmark docs, demo video, or something else?
4. What hard technical decision did you make around merchant override, confidence threshold, ONNX routing, semantic rules, fallback behavior, or memory?
5. What bug, performance issue, fallback-design issue, model/runtime issue, or UX issue did you solve?
6. What evidence proves your contribution? Name commits, files, demo timestamps, benchmark artifacts, docs, or teammate confirmation.
7. What should not be claimed publicly about your role, deployment, accuracy, cost, fallback rate, Qwen fallback, or production behavior?

### Safe Public Wording Available Now

- `Contribution details pending final owner review.`
- `Role split needs confirmation before public launch.`
- `The current evidence supports project-level hybrid routing, local benchmark scope, and UI behavior, but not personal feature ownership claims.`

### Unsafe Wording To Avoid

- "I built the ONNX classifier."
- "I designed the full routing architecture."
- "I owned the backend."
- "I built the merchant memory system."
- "I optimized latency/cost."
- "I solved accuracy."
- "I deployed the system."

### Launch Readiness Status

Blocked for role/contribution claims. The project can stay visible with pending contribution wording and local-only benchmark framing, but personal ownership, endpoint performance, cost, fallback-rate, accuracy, deployment, and Qwen fallback claims are not launch-ready.

## The Loop

### Current Project Summary

The Loop is the main Product Engineer proof. The current case study frames it as a campus event coordination platform connecting authentication, profiles/interests, event discovery, RSVP/join behavior, friend flows, chat history, WebSocket chat, carpool coordination, and admin event endpoints.

### Currently Documented Contribution Details

Status: Needed.

The repo currently documents verified deployment/repo links, product workflow structure, backend models/routes, JWT/WebSocket architecture, and imported candidate screenshots. It does not document AJ's personal contribution scope or teammate role split.

### Unclear Contribution Details

- Whether AJ built the FastAPI backend.
- Whether AJ designed SQLAlchemy models.
- Whether AJ implemented auth/JWT behavior.
- Whether AJ implemented WebSocket chat or `useChatSystem.js`.
- Whether AJ worked on frontend screens, interests, RSVP/join, carpool, admin features, or deployment.
- Whether teammates built parts of frontend, backend, design, product workflow, or deployment.
- Which files/modules can be safely attributed to AJ.

### Questions AJ Must Answer

1. What did you personally build in The Loop?
2. What did teammates build?
3. Which files/modules/features were yours: `main.py`, SQLAlchemy models, auth routes, event routes, carpool routes, friend routes, WebSocket chat, `src/hooks/useChatSystem.js`, frontend screens, Render config, or something else?
4. What hard technical decision did you make around product workflow, persistence, auth, realtime chat, carpool coordination, or deployment?
5. What bug, performance issue, realtime issue, session issue, database issue, or product-design issue did you solve?
6. What evidence proves your contribution? Name commits, files, screenshots, deployment logs, demo steps, docs, or teammate confirmation.
7. What should not be claimed publicly about your role, active deployment behavior, production reliability, user scale, recommendation quality, or teammate work?

### Safe Public Wording Available Now

- `Contribution details pending final owner review.`
- `Role split needs confirmation before public launch.`
- `The current evidence supports project-level full-stack workflow architecture, but not personal feature ownership claims.`

### Unsafe Wording To Avoid

- "I built the whole platform."
- "I owned the backend and realtime chat."
- "I designed the database."
- "I implemented auth."
- "I deployed and operated the production app."
- "I solved realtime reliability."
- "I built the recommendation system."

### Launch Readiness Status

Blocked for role/contribution claims. The project can remain visible with pending contribution wording and verified links, but personal ownership, deployment-operation, reliability, scale, recommendation-quality, and full-stack ownership claims are not launch-ready.

## Public Copy Rule Until AJ Answers

Keep every featured project in this state:

```text
Contribution details pending final owner review.
Role split needs confirmation before public launch.
```

Do not replace this with detailed role bullets until AJ supplies project-by-project evidence.
