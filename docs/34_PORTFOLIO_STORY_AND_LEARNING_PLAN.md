# Portfolio Story And Learning Plan

Date: 2026-07-10

Purpose:
- Turn the homepage from a catalogue of projects into a clear engineering-learning story.
- Preserve the current proof-first hierarchy, seven-state Signal Journey, and public evidence boundaries.
- Give future design, motion, copy, and implementation passes one content contract.

## Executive Direction

The portfolio should make one argument:

> AJ learned to build the whole decision path around AI: deterministic rules where possible, models where useful, fallbacks where uncertainty remains, persisted product state, and interfaces that make the system understandable to users.

The page should not try to prove that AJ is already a senior engineer or that every project is production-grade. It should prove a more credible and valuable progression:

1. foundations taught him to reason about data, algorithms, and contracts;
2. product work taught him that value lives in complete user workflows;
3. local AI work taught him to route uncertainty instead of defaulting to an LLM;
4. adaptive-system work taught him that environments, rewards, and evaluation boundaries shape behavior;
5. current work combines those lessons with clearer architecture, validation, and launch discipline.

This is the content spine. Visual design and motion should reveal it, not replace it.

## What AJ Learned

### 1. Start with the system boundary

The model is one component. Inputs, state, API contracts, user decisions, failure paths, and evidence limits need to be designed with it.

Public proof:
- Hybrid separates merchant memory, local inference, ambiguity routing, and fallback behavior.
- The Loop connects frontend actions to persisted coordination state.
- Mahoraga separates environment mechanics, curriculum pressure, reward signals, and training surfaces.

### 2. Route uncertainty deliberately

Use deterministic behavior when it is reliable, a local model when it earns the complexity, and an LLM fallback only for the ambiguous remainder.

Public proof:
- Hybrid merchant override -> local ONNX inference -> offline Qwen fallback.
- Local-only timing evidence remains explicitly scoped and is not presented as a production SLA.

### 3. Product workflows are part of the architecture

A working feature is not only a backend endpoint or screen. The useful unit is the path a person completes and the state the system preserves.

Public proof:
- The Loop connects discovery, event detail, RSVP/join, social coordination, maps, chat, and carpool flows.
- Owner-reviewed screenshots and the live deployment support a conservative product-system story.

### 4. Behavior comes from constraints, not model novelty

Adaptive behavior depends on environment rules, reward construction, pressure, and evaluation. A larger model does not remove the need to design those constraints.

Public proof:
- Mahoraga's environment, reward-loop, Gym, FastAPI/Gradio, and optional LLM paths.
- Public wording stays at prototype/environment-design level; it does not claim robust generalization.

### 5. Proof is part of engineering

Tests, diagrams, source, demos, measurements, limitations, and honest ownership are part of the build, not launch decoration.

Public proof:
- Verified repositories and public project links.
- Project-specific case studies and scoped evidence panels.
- Known and Verified artifacts remain visibly distinct without exposing internal backlog language.

## Exact Homepage Order

The current seven-state Signal Journey should remain intact. The hero already contains a fast proof surface, so adding the older standalone Proof Strip would duplicate content and dilute the opening.

1. **Signal / Hero**
   - Identity, current direction, direct CTAs, and three proof anchors.
   - Visitor question: "Who is AJ, and is there credible work here?"
   - Must prove: role fit and immediate access to the strongest work.

2. **About / Operating approach**
   - Reframe from biography to the engineering principles learned across the work.
   - Visitor question: "How does AJ think when building?"
   - Must prove: systems thinking without unsupported seniority claims.

3. **Featured Builds**
   - Mahoraga, Hybrid, and The Loop in the locked order.
   - Add one explicit, evidence-safe learning statement to each project.
   - Visitor question: "What did AJ actually build, and what changed in his thinking?"
   - Must prove: technical depth, AI-systems judgment, and product breadth.

4. **Evolution**
   - Foundations -> Product Engineering -> AI Systems -> Adaptive Systems -> Current Direction.
   - Visitor question: "Is this a coherent progression or a random project list?"
   - Must prove: increasing scope and better judgment over time.

5. **Toolkit**
   - Tools grouped from source-backed project evidence.
   - Visitor question: "Can AJ execute with the relevant stack?"
   - Must prove: implementation range, not tool collecting.

6. **Systems Map**
   - Capability categories tied directly to named projects.
   - Visitor question: "Which capabilities recur across the work?"
   - Must prove: patterns across projects after visitors have already seen the proof.

7. **Supporting Work**
   - AI Resume Tailoring Engine and Webcam Motion Alert System.
   - Visitor question: "What other practical systems has AJ explored?"
   - Must prove: automation breadth without competing with featured work.

8. **Lab Projects**
   - RAG, scraping, SQL/database, and EDA work.
   - Visitor question: "Are the foundations broader than the flagship projects?"
   - Must prove: breadth and experimentation in a compact footprint.

9. **Contact**
   - GitHub, SDE resume, LinkedIn, and email.
   - Visitor question: "What should I do next?"
   - Must prove: direct, verified conversion paths.

## Audience Reading Paths

### Recruiter: fit in 45-60 seconds

Path:
1. Hero role line and lead.
2. Proof Anchors for the three featured projects.
3. Featured project status, stack, highlights, and case-study links.
4. Evolution for trajectory.
5. Resume or contact CTA.

Required outcome:
- identify AJ as a Computer Engineering student targeting software, AI systems, and product engineering work;
- understand the three strongest projects;
- see honest project maturity and role scope;
- reach the resume/contact path without hunting.

### Founder/operator: product judgment in 2-3 minutes

Path:
1. Hero thesis.
2. About operating principles.
3. Hybrid and The Loop project lessons.
4. Supporting automation work.
5. Contact.

Required outcome:
- understand that AJ thinks about user workflows, fallback behavior, constraints, and practical execution;
- see that the work is not only model demos;
- know where prototypes stop and validated behavior begins.

### Engineer/reviewer: credibility in 5+ minutes

Path:
1. Featured project module.
2. Case-study route.
3. Architecture, engineering decisions, limitations, evidence status, and source links.
4. Evolution and Systems Map.
5. GitHub.

Required outcome:
- find architecture and tradeoffs quickly;
- distinguish Verified links/results from Known artifacts;
- understand ownership boundaries;
- see failure modes and next evidence without marketing inflation.

## Featured Project Story Contracts

### Mahoraga

Story role: adaptive-system and technical-depth proof.

Learning statement:
> Reward design is system design: environment rules, pressure, and failure modes shape behavior as much as the model.

Safe public proof:
- verified GitHub, Kaggle, and Hugging Face links;
- environment/reward-loop architecture;
- owner-reviewed Backend / RL Systems Engineer contribution wording;
- prototype boundary.

Do not imply:
- robust adaptive intelligence;
- generalized RL performance;
- production-grade game engine;
- exact file/module ownership not backed by evidence.

### Hybrid GenAI Transaction Categorizer

Story role: AI-systems judgment and solo end-to-end execution proof.

Learning statement:
> Uncertainty should be routed, not handed to the largest model by default.

Safe public proof:
- verified GitHub and YouTube links;
- owner-reviewed solo/full-stack contribution wording;
- merchant override, local ONNX, and offline fallback architecture;
- local CPU-only routing examples and 27 backend assertions.

Do not imply:
- hosted production latency or SLA;
- dataset-level accuracy;
- verified fallback-rate improvement;
- zero compute cost;
- deployed production system.

### The Loop

Story role: product engineering and collaborative full-stack proof.

Learning statement:
> A product becomes useful when discovery connects to persisted coordination workflows.

Safe public proof:
- verified deployment and repository;
- reviewed live-deployment screenshots;
- product workflow and system diagrams;
- owner-reviewed collaborative contribution wording.

Do not imply:
- solo ownership of auth, chat, carpool, maps, recommendations, admin, or deployment;
- production reliability, scale, active-user, or SLA claims;
- exact module ownership that has not been separated.

## Copy Principles

1. **Specific before broad.** Name the decision, artifact, or constraint before the capability.
2. **Learning before self-praise.** Prefer "I learned to route uncertainty" over "I am an expert in AI architecture."
3. **One idea per sentence.** Homepage copy should scan in one pass.
4. **Use active engineering verbs.** Built, routed, separated, persisted, constrained, validated, measured, reviewed.
5. **Keep maturity explicit.** Prototype, local AI system, collaborative product system, and lab remain distinct.
6. **Make constraints useful.** A limitation should explain the engineering boundary, not read as an apology.
7. **Do not narrate the evidence process.** Public pages show the result and its scope; internal backlog wording stays in docs.
8. **Avoid interchangeable AI copy.** Do not use "cutting-edge," "revolutionary," "seamless," "intelligent solution," or "leveraging AI."
9. **Keep project roles asymmetric.** Mahoraga proves adaptive depth, Hybrid proves routing/solo execution, and The Loop proves product workflow/collaboration.
10. **Let visual motion clarify progression.** Motion may reveal state changes or section transitions, but must not hide links, status, limitations, or text.

## Evidence-Safe Boundaries

### Publicly usable now

- Verified global GitHub, SDE resume, LinkedIn, and email destinations.
- Verified featured-project repositories and documented public demos/deployment.
- Owner-reviewed role/contribution summaries in `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md`.
- Conservative project descriptions, architecture decisions, and limitations.
- The Loop reviewed/redacted live-deployment captures.
- Hybrid local-only routing and backend assertion evidence with explicit scope.
- Mahoraga prototype/environment/reward design framing.

### Usable only with a visible boundary

- Known diagrams and screenshots that have not completed final rendered/mobile review.
- Local CPU measurements.
- Synthetic/sample transaction UI captures.
- Prototype behavior and hackathon-scoped engineering decisions.

### Not safe to add

- invented metrics, users, outcomes, screenshots, dashboards, or deployments;
- production-grade, SLA, reliability, scale, or accuracy language without methodology;
- exact ownership where collaborative work has not been separated;
- private or unredacted screenshots;
- raw local filesystem paths;
- internal blocker/backlog language in recruiter-facing UI.

## Implementation Priorities

### Pass 1: content spine

- Reframe About as learned operating principles.
- Add one "What I learned" line to each featured project.
- Rewrite Evolution as the progression of engineering judgment.
- Tighten Toolkit, Systems, supporting work, lab, and Contact section framing.
- Preserve order, links, project tiers, and evidence states.

### Pass 2: visual storytelling

- Give each Signal Journey state a distinct but lightweight visual grammar.
- Use featured-project transitions to connect problem -> decision -> evidence -> lesson.
- Keep reduced-motion and mobile fallbacks complete.
- Avoid generic floating objects or decorative 3D that does not encode the story.

### Pass 3: deeper proof

- Improve project media only from reviewed source artifacts.
- Complete diagram desktop/mobile review.
- Capture remaining safe demos/screenshots.
- Extend benchmark evidence only with reproducible methodology.

## Acceptance Checks

- A recruiter can name AJ's target roles and top three projects in under 60 seconds.
- Each featured project communicates one distinct lesson without unsupported claims.
- The page reads as progression, not a stack dump or project gallery.
- Every broad capability appears after concrete project proof.
- GitHub, resume, LinkedIn, email, case-study, repo, demo, and deployment links retain their current verified destinations.
- Known and Verified labels are not upgraded without new evidence.
- Mobile and reduced-motion users receive the same content and links.
- Tests and Astro build pass after copy/data changes.

## Source Of Truth

This plan is derived from:
- `docs/00_READ_FIRST.md`
- `docs/01_CURRENT_STATUS.md`
- `docs/05_CONTENT_ARCHITECTURE.md`
- `docs/10_PROJECT_EVIDENCE_REGISTRY.md`
- `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md`
- `docs/29_PENDING_FEATURES_AND_EVIDENCE.md`
- `src/data/projects.ts`
- the current homepage implementation

If evidence changes, update the evidence/status docs and structured project data before strengthening public claims.
