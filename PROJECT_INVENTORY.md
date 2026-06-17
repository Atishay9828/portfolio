# PROJECT_INVENTORY.md

Date: 2026-06-17

Source context:
- `DESIGN.md`
- `docs/portfolio-website-master-plan.md`
- Portfolio research document summary already incorporated into the master plan

Evidence status:
- No project repositories, screenshots, demos, resumes, or named project files are currently present in this workspace.
- This inventory ranks portfolio-worthy project categories known from AJ's stated focus areas: C++, software engineering, AI/ML, system design, DSA, automation, AI agents, product development, and academic work.
- Project names below are working inventory labels, not final public titles.

## Scoring System

Each candidate is scored out of 100.

| Criterion | Weight | What It Measures |
|---|---:|---|
| Problem clarity | 15 | Whether the project solves a real, understandable problem instead of being a toy build. |
| Technical depth | 25 | Architecture, algorithms, systems work, AI/ML depth, performance, data handling, or non-trivial engineering. |
| Engineering value | 20 | Maintainability, testing, deployment, tradeoff decisions, reliability, and production-minded implementation. |
| Recruiter value | 20 | How quickly it signals competence to internship recruiters, founders, and engineers. |
| Evidence readiness | 10 | Availability of repo, screenshots, demo, metrics, writeup, or architecture diagram. |
| Portfolio fit | 10 | Fit with the Signal Lab story: systems thinking, AI/product work, C++, automation, and real constraints. |

Category thresholds:

| Category | Score Range | Meaning |
|---|---:|---|
| Featured | 80-100 | Full case study. Must have strong evidence and a demo or architecture artifact. |
| Secondary | 65-79 | Good project card or shorter case study. Needs some evidence cleanup. |
| Lab | 45-64 | Useful experiment, prototype, learning artifact, or technical note. |
| Exclude | 0-44 | Too generic, too shallow, unfinished without insight, or not aligned with the site story. |

Ranking rule:
- A project cannot become `Featured` until it has at least one real evidence artifact: repo, deployed demo, video demo, screenshot, benchmark, architecture diagram, or technical writeup.
- High-potential work with missing evidence is ranked by expected value but marked as evidence-blocked.

## Ranked Inventory

| Rank | Candidate | Category | Score | Evidence Confidence |
|---:|---|---|---:|---|
| 1 | AI Agent / LLM Application | Featured Candidate | 86 | Low |
| 2 | Automation System / Workflow Tool | Featured Candidate | 82 | Low |
| 3 | C++ Systems / DSA Engineering Project | Featured Candidate | 80 | Low |
| 4 | Full-Stack Product Build | Secondary | 76 | Low |
| 5 | ML Experiment / Model Pipeline | Secondary | 72 | Low |
| 6 | System Design Case Study / Architecture Simulation | Secondary | 70 | Low |
| 7 | DSA Visualizer / Algorithm Tool | Lab | 62 | Low |
| 8 | Academic Engineering Project | Lab | 58 | Low |
| 9 | Small Scripts / Utilities | Lab | 52 | Low |
| 10 | Basic Course Assignments | Exclude | 35 | Low |
| 11 | Tutorial Clones / UI-Only Builds | Exclude | 30 | Low |

## 1. AI Agent / LLM Application

Category: Featured Candidate

Score: 86 / 100

Problem:
- Build an AI-powered tool that performs a useful workflow: research synthesis, task automation, memory retrieval, document analysis, coding assistance, or structured decision support.
- This aligns strongly with AJ's interest in AI agents, LLM applications, memory systems, automation, and product development.

Technical depth:
- Strong if it includes retrieval, tool use, memory, planning, evaluation, structured outputs, prompt/version management, or failure handling.
- Weak if it is only a thin chat wrapper around an LLM API.

Engineering value:
- High if it has clear module boundaries: input ingestion, model orchestration, tool execution, memory/storage, evaluation, and UI/API.
- Stronger if it handles retries, bad model outputs, latency, cost, and observability.

Recruiter value:
- Very high. AI agent work is current, practical, and easy to connect to product value.
- It can show AJ's ability to build beyond CRUD and explain modern AI system tradeoffs.

Missing evidence:
- Exact project name.
- Repository link.
- Demo or walkthrough.
- Model/provider used.
- Architecture description.
- Evaluation examples.
- Screenshots of the workflow.

Required screenshots:
- Main workflow screen.
- Input/output example.
- Tool/memory/evaluation view if available.
- Error or fallback state if implemented.

Required architecture diagrams:
- Request flow: user input -> planner/model -> tools/retrieval -> response.
- Memory or retrieval pipeline if used.
- Deployment diagram if hosted.

Required demos:
- 60-90 second video showing one successful end-to-end task.
- One failure or edge-case handling example.
- Optional: before/after comparison showing time saved.

Decision:
- Keep as a top featured candidate only if it is more than a chat UI.
- If it lacks tool use, memory, evaluation, or workflow depth, downgrade to Lab.

## 2. Automation System / Workflow Tool

Category: Featured Candidate

Score: 82 / 100

Problem:
- Automate a repeated personal, academic, coding, productivity, data-processing, or content workflow.
- Good examples include research ingestion, resume/project inventory generation, file organization, coding workflow automation, or notification/reporting systems.

Technical depth:
- Strong if it handles real files/APIs, scheduling, state, retries, logs, configuration, and failure cases.
- Moderate if it is a one-off script.

Engineering value:
- High because automation projects expose practical engineering judgment: input validation, idempotency, error handling, and maintainability.
- Strong fit for a production-oriented portfolio if packaged as a usable CLI, web tool, or documented workflow.

Recruiter value:
- High. Recruiters and engineers understand automation value quickly when there is a clear before/after workflow.

Missing evidence:
- Exact workflow automated.
- Source code.
- Example input/output.
- Time saved or error reduction.
- Demo run.
- Logs or generated artifact.

Required screenshots:
- CLI execution or UI workflow.
- Before/after artifact.
- Configuration file or dashboard if present.

Required architecture diagrams:
- Trigger -> processor -> external services/files -> output.
- Error handling/retry path.
- Data/state storage if used.

Required demos:
- Short terminal or screen recording running the workflow.
- Show real input and final generated output.

Decision:
- Feature if it solves a real repeated workflow and is packaged cleanly.
- Keep as Lab if it is only a small script with limited reuse.

## 3. C++ Systems / DSA Engineering Project

Category: Featured Candidate

Score: 80 / 100

Problem:
- Demonstrate core engineering strength through C++, data structures, algorithms, performance, memory management, concurrency, networking, or systems fundamentals.
- This should not be a generic LeetCode dump. It needs a real tool, simulator, engine, or performance-focused artifact.

Technical depth:
- High if it includes custom data structures, performance benchmarks, memory/performance analysis, concurrency, parsing, networking, or algorithmic tradeoffs.
- Low if it is a collection of unrelated solved problems.

Engineering value:
- High if it includes tests, benchmarks, clean APIs, readable implementation, and documented complexity.
- Stronger if it exposes a CLI or visualization layer.

Recruiter value:
- High for software engineering internships because it proves CS fundamentals and primary-language strength.

Missing evidence:
- Exact project.
- Repo.
- Benchmark output.
- Tests.
- Explanation of algorithmic choices.
- Demo input/output.

Required screenshots:
- Terminal run.
- Benchmark table.
- Test output.
- Optional visualization if available.

Required architecture diagrams:
- Module diagram showing core data structures/classes.
- Algorithm flow diagram.
- Performance comparison chart if benchmarked.

Required demos:
- CLI demo on realistic input.
- Benchmark run comparing approaches.
- Edge-case demonstration.

Decision:
- Feature only if it is a cohesive engineered project.
- Exclude raw DSA problem lists from the portfolio homepage; they can live in GitHub or a notes page.

## 4. Full-Stack Product Build

Category: Secondary

Score: 76 / 100

Problem:
- Build a usable web app that solves a real user workflow with frontend, backend/API, persistence, auth, or deployment.

Technical depth:
- Moderate to high depending on backend complexity, data model, auth, deployment, and product quality.
- Weak if it is a CRUD app with no real workflow or system decisions.

Engineering value:
- Strong if it has clean architecture, validation, loading/error states, tests, deployment, and realistic data.

Recruiter value:
- High if polished and deployed.
- Lower if it looks like a template or tutorial clone.

Missing evidence:
- Product name.
- User problem.
- Deployment link.
- Repo.
- Screenshots.
- Data model/API design.

Required screenshots:
- Primary workflow.
- Empty/loading/error states.
- Mobile view.
- Admin or data view if relevant.

Required architecture diagrams:
- Client -> API -> database/services.
- Data model or entity relationship diagram.
- Deployment diagram.

Required demos:
- End-to-end user workflow.
- Data creation/update flow.
- Error handling or validation example.

Decision:
- Secondary by default.
- Promote to Featured if it has real users, deployment quality, or unusually strong architecture.

## 5. ML Experiment / Model Pipeline

Category: Secondary

Score: 72 / 100

Problem:
- Train, evaluate, or use an ML model for classification, prediction, ranking, vision, NLP, recommendation, or analytics.

Technical depth:
- Strong if it includes data preprocessing, baseline comparison, evaluation metrics, error analysis, and reproducibility.
- Weak if it is just a notebook that runs a model without interpretation.

Engineering value:
- Medium to high if packaged as a repeatable pipeline with clear data flow and documented assumptions.
- Stronger if there is a small app/API around the model.

Recruiter value:
- Medium-high for AI/ML roles, but only if the evaluation is honest and understandable.

Missing evidence:
- Dataset.
- Model choice.
- Metrics.
- Notebook or source.
- Error analysis.
- Reproducibility instructions.

Required screenshots:
- Metrics table.
- Confusion matrix or evaluation chart.
- Example predictions.
- Data preprocessing overview.

Required architecture diagrams:
- Dataset -> preprocessing -> training/inference -> evaluation -> output.
- Model-serving flow if deployed.

Required demos:
- Notebook run or app inference demo.
- Show at least three example predictions, including one failure case.

Decision:
- Secondary if it has metrics and error analysis.
- Lab if it is exploratory without a clean story.

## 6. System Design Case Study / Architecture Simulation

Category: Secondary

Score: 70 / 100

Problem:
- Explain or simulate a scalable system: URL shortener, chat system, job queue, notification system, recommendation service, AI memory system, or distributed workflow.

Technical depth:
- High if backed by code, load tests, queue behavior, caching, database schema, failure modes, or tradeoff analysis.
- Medium if it is only a diagram and writeup.

Engineering value:
- Strong for demonstrating architectural thinking, especially if paired with a small working prototype.

Recruiter value:
- Medium-high. Useful for system design maturity, but less convincing than shipped software unless evidence-backed.

Missing evidence:
- Topic.
- Architecture diagram.
- Prototype or simulation.
- Scaling assumptions.
- Tradeoff notes.

Required screenshots:
- Architecture diagram.
- Load test or simulation output.
- API or queue behavior if implemented.

Required architecture diagrams:
- High-level system diagram.
- Data flow diagram.
- Failure/retry path.
- Scaling bottleneck diagram.

Required demos:
- Small prototype demo or simulation.
- Walkthrough explaining one design tradeoff.

Decision:
- Secondary if code-backed.
- Lab if it is a pure design note.

## 7. DSA Visualizer / Algorithm Tool

Category: Lab

Score: 62 / 100

Problem:
- Help users understand algorithms, data structures, graph traversal, dynamic programming, sorting, pathfinding, or complexity through interaction or visualization.

Technical depth:
- Medium. Can become high if it supports non-trivial algorithms, performance comparison, and clean visualization state management.

Engineering value:
- Medium. Strong if built with reusable algorithm modules and tested logic separated from UI.

Recruiter value:
- Medium. Good for fundamentals, but common as a portfolio genre.

Missing evidence:
- Exact algorithms.
- Demo.
- Repo.
- Visual design.
- Tests for algorithm correctness.

Required screenshots:
- Initial state.
- Running visualization.
- Completed result.
- Mobile layout if web-based.

Required architecture diagrams:
- UI state -> algorithm engine -> animation timeline.
- Algorithm module boundaries.

Required demos:
- Short recording of one algorithm running.
- Comparison between two algorithms if supported.

Decision:
- Lab by default.
- Promote to Secondary only if unusually polished or technically deep.

## 8. Academic Engineering Project

Category: Lab

Score: 58 / 100

Problem:
- Coursework or college project involving engineering concepts, hardware/software integration, embedded systems, simulation, database design, OS/networking, or applied programming.

Technical depth:
- Unknown until project specifics are provided.
- Can be strong if it includes constraints, implementation, testing, or measurable outcome.

Engineering value:
- Medium. Academic projects often need reframing around decisions and constraints to avoid looking like assignments.

Recruiter value:
- Medium. Useful if it shows hands-on implementation, teamwork, or engineering fundamentals.

Missing evidence:
- Project title.
- Course/context.
- Team size and AJ's role.
- Source code.
- Report/demo.
- Photos/screenshots.

Required screenshots:
- Working output.
- Report excerpt or result.
- Hardware/photo if applicable.

Required architecture diagrams:
- System block diagram.
- Data/control flow.
- Module diagram.

Required demos:
- Demo video or recorded run.
- Explanation of AJ's exact contribution.

Decision:
- Lab unless it has strong implementation evidence.
- Secondary if it is substantial, original, or technically deep.

## 9. Small Scripts / Utilities

Category: Lab

Score: 52 / 100

Problem:
- Small tools that solve narrow problems: file cleanup, data conversion, API helpers, scraping, formatting, study tools, or local workflow helpers.

Technical depth:
- Low to medium.
- Can be meaningful if the utility is robust, reusable, and documented.

Engineering value:
- Medium if packaged with CLI args, config, error handling, and examples.
- Low if it is a throwaway script.

Recruiter value:
- Low to medium. Better as a Lab entry than a featured project.

Missing evidence:
- Script list.
- Use cases.
- Before/after examples.
- Repo.
- CLI examples.

Required screenshots:
- Terminal command.
- Generated output.
- Error handling example if relevant.

Required architecture diagrams:
- Usually not required.
- Add a simple input -> transform -> output diagram for larger utilities.

Required demos:
- 30-second terminal recording or GIF.
- Example input and output files.

Decision:
- Lab only.
- Bundle multiple utilities into one "Automation Lab" page if individually small.

## 10. Basic Course Assignments

Category: Exclude

Score: 35 / 100

Problem:
- Standard assignments with limited originality or no clear user/system value.

Technical depth:
- Usually narrow and externally specified.

Engineering value:
- Low unless extended beyond assignment requirements.

Recruiter value:
- Low. Recruiters see many similar assignments.

Missing evidence:
- Not worth gathering unless the assignment was expanded into a real project.

Required screenshots:
- None for portfolio.

Required architecture diagrams:
- None for portfolio.

Required demos:
- None for portfolio.

Decision:
- Exclude from homepage.
- Keep in GitHub only if code quality is good.
- Convert to Lab only if there is a clear insight, extension, benchmark, or writeup.

## 11. Tutorial Clones / UI-Only Builds

Category: Exclude

Score: 30 / 100

Problem:
- Rebuilt common apps or interfaces without a distinct technical challenge, real user need, or original engineering decision.

Technical depth:
- Low unless extended meaningfully with backend, scale, performance, accessibility, or original functionality.

Engineering value:
- Low if copied from tutorial structure.

Recruiter value:
- Low and sometimes negative if it signals shallow portfolio padding.

Missing evidence:
- Not worth prioritizing.

Required screenshots:
- None for portfolio unless transformed into a real product.

Required architecture diagrams:
- None.

Required demos:
- None.

Decision:
- Exclude.
- Salvage only if rebuilt into a real product with original requirements and architecture.

## Featured Shortlist

Use these as the first three case-study targets if real evidence exists or can be produced quickly:

| Priority | Candidate | Why |
|---:|---|---|
| 1 | AI Agent / LLM Application | Best alignment with current interests and market relevance. |
| 2 | Automation System / Workflow Tool | Strong practical engineering story with clear before/after value. |
| 3 | C++ Systems / DSA Engineering Project | Proves fundamentals and primary-language strength. |

Featured acceptance criteria:
- Repo or source code exists.
- Demo exists or can be recorded.
- Architecture diagram can be drawn honestly.
- AJ can explain at least one tradeoff.
- Project has a problem statement stronger than "I built this to learn X."

## Secondary Shortlist

Use these for project cards or shorter writeups:

| Priority | Candidate | Why |
|---:|---|---|
| 1 | Full-Stack Product Build | Shows product engineering if deployed and usable. |
| 2 | ML Experiment / Model Pipeline | Useful for AI/ML credibility if metrics and error analysis exist. |
| 3 | System Design Case Study / Architecture Simulation | Shows architectural thinking, especially if code-backed. |

## Lab Shortlist

Use these for `/lab` entries:

| Priority | Candidate | Why |
|---:|---|---|
| 1 | DSA Visualizer / Algorithm Tool | Good fundamentals artifact, but common enough to keep below featured. |
| 2 | Academic Engineering Project | Useful if reframed around constraints and AJ's contribution. |
| 3 | Small Scripts / Utilities | Good signal of practical automation habits when bundled cleanly. |

## Evidence Collection Checklist

For every project considered for `Featured` or `Secondary`, collect:

- Final project name.
- One-sentence problem.
- AJ's exact role.
- Tech stack.
- GitHub repo.
- Deployed link if available.
- Screenshots.
- Demo video or GIF.
- Architecture diagram.
- One hard technical decision.
- One tradeoff.
- One bug, constraint, or failure handled.
- Current status: shipped, prototype, experiment, archived.

## Current Gaps Blocking Final Ranking

- No named project list is present in the workspace.
- No repos or deployed links are present.
- No screenshots or demo videos are present.
- No resume is present.
- No academic project details are present.
- No ML notebooks or metrics are present.
- No automation scripts are present.
- No C++ project evidence is present.

Until those are supplied, this inventory is a ranked candidate map, not a final proof-backed portfolio selection.

