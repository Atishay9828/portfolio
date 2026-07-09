# 23_ROLE_CONTRIBUTION_EVIDENCE.md

Date: 2026-07-03

Purpose:
- Record owner-reviewed contribution wording for the three featured projects.
- Keep public case-study role copy specific without inventing module ownership, metrics, screenshots, teammate details, or production maturity.
- Preserve the unsafe wording and remaining evidence gaps that still block stronger claims.

Status vocabulary follows the repo evidence model: Known, Verified, Missing, Needed, Not applicable.

## Summary

Owner-reviewed contribution wording available for Mahoraga, Hybrid GenAI Transaction Categorizer, and The Loop.

AJ supplied project-by-project contribution context on 2026-07-03. This supports public role labels and contribution summaries, but does not create new proof for exact file/module ownership, production SLAs, endpoint/Qwen benchmarks, final screenshots, or teammate-specific implementation details beyond the provided role split.

Public copy may now include:
- Role label.
- Contribution summary.
- Contribution bullets.
- Collaborative scope where relevant.
- Still-to-verify evidence limits.

Unsafe Wording To Avoid:
- "I led the team."
- "I owned every module."
- "I built the entire project" except Hybrid, where solo/end-to-end ownership is owner-reviewed.
- "Production-grade game engine."
- "Robust adaptive RL performance."
- "Production SLA."
- Unsupported endpoint latency, Qwen fallback latency, cost, fallback-rate, and accuracy claims.
- Unsupported win-rate, user-scale, or reliability claims.
- Do not mention the late YouTube submission, failed/late hackathon submission, or failure to qualify publicly.

## Required Evidence Standard

Before stronger role claims appear in public case studies, each project still needs:
- File, module, feature, commit, PR, notebook, demo, or issue evidence if exact ownership is claimed.
- Methodology and source artifacts for benchmark, accuracy, cost, latency, fallback-rate, or performance claims.
- Reviewed screenshots/demos before visual proof is upgraded.
- Explicit exclusions for what should not be claimed.

## Mahoraga

### Current Project Summary

Mahoraga is the flagship adaptive AI systems project. The current case study frames it as an adaptive-agent environment with environment mechanics, curriculum pressure, reward components, Gymnasium interaction, FastAPI/Gradio surfaces, and optional Qwen/LoRA paths.

### Currently Documented Contribution Details

Status: Owner-reviewed contribution wording available.

Role label: Backend / RL Systems Engineer.

Public contribution summary:
AJ owned the adaptive backend/game-system logic, agent behavior, reward/training constraints, and LLM/backend integration under hackathon constraints.

Contribution bullets:
- Built around the adaptive loop: repeated player behavior should increase Mahoraga pressure and force tactics to change.
- Worked on agent handling, backend integration, LLM integration, and reward/training behavior.
- Reduced training/time complexity enough to keep the adaptive-system prototype workable under hackathon constraints.

Collaborative scope:
- Teammate Negi primarily handled frontend aesthetics, deployment, presentation, and related design decisions.
- Public copy should frame Mahoraga as an applied adaptive-system prototype, not a production-grade game engine or generalized RL result.

### Still To Verify

- Exact file/module ownership remains not documented.
- Training/evaluation artifacts still need review before robust-performance claims.
- Demo media and rendered architecture diagram review remain pending.

### Unsafe Wording To Avoid

- "I designed the full reward system."
- "I built the RL environment end to end."
- "I trained the model."
- "I led Mahoraga."
- "My reward design produced robust adaptive behavior."
- "I solved reward hacking."
- "Production-grade game engine."

### Launch Readiness Status

Partially ready for role/contribution copy. Public role label and contribution summary can be used with the still-to-verify caveats above. Exact file/module ownership, production maturity, robust RL performance, and broad evaluation claims remain blocked.

## Hybrid GenAI Transaction Categorizer

### Current Project Summary

Hybrid GenAI Transaction Categorizer is the production-minded AI systems proof. The current case study frames it as layered transaction routing: merchant override, local ONNX inference, confidence/rule checks, optional LLM fallback, feedback, history, AI insights, and merchant memory.

### Currently Documented Contribution Details

Status: Owner-reviewed contribution wording available.

Role label: Solo Full-Stack AI Systems Builder.

Public contribution summary:
AJ built the full-stack offline-first AI categorization system end-to-end, including backend, frontend, local routing, merchant memory, history, AI insights, and benchmark evidence.

Contribution bullets:
- Built the UI/API path for categorizing transactions from known merchants and local or ambiguous vendors.
- Implemented merchant memory, local ONNX routing, fallback routing, history, and AI insights based on previous expenditure context.
- Chose an offline/local model strategy because the hackathon constraint required local execution without cloud help.

Collaborative scope:
- Solo project; public copy may say full-stack, solo, and end-to-end because AJ confirmed ownership.
- Benchmark copy must stay scoped to the local read-only classifier/routing evidence already documented.

### Still To Verify

- Hosted production/deployment latency is not claimed.
- Fallback-rate, dataset accuracy, and repeatable public benchmark harness evidence remain unverified.
- External API fallback cost can be described only as zero paid third-party inference cost for local Qwen runs, not zero compute cost.
- Deployment link and opened History AI Insight screenshot are not public proof yet.

### Unsafe Wording To Avoid

- "Production SLA."
- "Optimized cost."
- "Measured fallback-rate improvement."
- "Hosted production endpoint latency."
- "Production Qwen fallback latency."
- "Solved accuracy."
- "Deployed production system."
- Any public mention of the late YouTube submission or failure to qualify.

### Launch Readiness Status

Partially ready for role/contribution copy. Solo/end-to-end/full-stack wording is owner-reviewed and usable. Local endpoint/fallback examples may be used with CPU-only and non-production caveats; hosted deployment latency, fallback-rate, dataset accuracy, and zero-compute-cost claims remain blocked.

## The Loop

### Current Project Summary

The Loop is the main Product Engineer proof. The current case study frames it as a campus event coordination platform connecting authentication, profiles/interests, event discovery, RSVP/join behavior, friend flows, chat history, WebSocket chat, carpool coordination, maps, recommendations, and admin event workflows.

### Currently Documented Contribution Details

Status: Owner-reviewed collaborative contribution wording available.

Role label: Collaborative Full-Stack Contributor.

Public contribution summary:
AJ collaborated across product flow and implementation on a campus event-discovery and coordination platform; ownership is not cleanly separable by module.

Contribution bullets:
- Worked across the product flow for centralized campus and outside-campus event discovery.
- Contributed to implementation effort and coordination across RSVP/social coordination, carpool, maps, recommendations, and admin/event workflows.
- Kept the case study focused on the platform workflow instead of assigning unsupported solo ownership to individual modules.

Collaborative scope:
- Event discovery, RSVP/social coordination, friends, chat, carpool, maps, recommendations, and admin/event workflows should be described as collaborative platform areas.
- Do not claim solo ownership of auth, RSVP, chat, carpool, maps, recommendations, admin, or deployment.

### Still To Verify

- Exact module ownership remains collaborative/not separated.
- Public-safe owner-provided workflow screenshots now exist for key visual states; raw profile/friends captures remain excluded, and exact module ownership is still collaborative/not separated.
- Manual deployed workflow verification and rendered system diagram review remain pending.

### Unsafe Wording To Avoid

- "I built the whole platform."
- "I owned the backend and realtime chat."
- "I designed the database."
- "I implemented auth."
- "I deployed and operated the production app."
- "I solved realtime reliability."
- "I built the recommendation system."
- Any exact ownership claim for auth, RSVP, chat, carpool, maps, recommendations, admin, or deployment unless later evidence separates it.

### Launch Readiness Status

Partially ready for collaborative role/contribution copy. Public copy may describe AJ as a collaborative full-stack contributor across product flow and implementation, but exact module ownership remains collaborative/not separated.
