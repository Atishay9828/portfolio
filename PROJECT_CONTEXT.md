# PROJECT_CONTEXT.md

Date: 2026-06-17

Purpose:
- Capture the portfolio project context inside the repository.
- Give future agents enough background to continue without chat history.
- Keep implementation decisions aligned with AJ's finalized positioning.

## Owner

AJ is a 3rd-year Computer Engineering student focused on software engineering, AI/ML, system design, DSA, automation, startups, product development, AI memory systems, and scalable architecture.

AJ primarily codes in C++ but the current portfolio evidence spans Python, FastAPI, React, Vite, TailwindCSS, PostgreSQL, SQLAlchemy, OpenCV, LLM workflows, retrieval, ONNX inference, reinforcement learning, and product engineering.

## Portfolio Goal

Build a premium, evidence-driven portfolio website that positions AJ as:

- Primary identity: AI Systems Engineer
- Secondary identity: Product Engineer

The site must prove those identities through architecture, tradeoffs, demos, code, constraints, and honest status labels. It must not rely on vague claims, generic AI aesthetics, or equal-weight project cards.

## Source Documents

Current repo source of truth:

- `DESIGN.md`
- `PROJECT_CONTEXT.md`
- `FEATURED_PROJECT_SELECTION.md`
- `POSITIONING.md`
- `SIGNAL_EVOLUTION_TIMELINE.md`
- `CONTENT_ARCHITECTURE.md`
- `PORTFOLIO_RISK_AUDIT.md`
- `SITE_BLUEPRINT.md`
- `DESIGN_SYSTEM.md`
- `ASSET_REQUIREMENTS.md`
- `docs/portfolio-website-master-plan.md`

## Strategic Constraints

- Do not redesign positioning unless a critical contradiction is discovered.
- Do not re-evaluate project selection without new evidence.
- Do not create new strategy, narrative, audit, or positioning documents.
- Move toward implementation-ready specs and then implementation.
- Keep every major decision and status update in `docs/`.

## Design Direction

Theme: Signal Lab

The portfolio should feel like a precise technical workspace: obsidian surfaces, structured grids, live signal accents, architecture diagrams, real screenshots, and restrained motion.

The site must avoid:

- Purple/blue generic AI gradients.
- Fake dashboards, fake metrics, fake terminal panels, or fake screenshots.
- Oversized rounded cards.
- Nested cards.
- Decorative blobs, orbs, bokeh, or stock-like visuals.
- Motion that hides proof or slows recruiter scanning.

## Recommended Implementation Stack

Default stack:

- Astro for static-first routing and low JavaScript output.
- TypeScript for data correctness.
- MDX for project and lab case studies.
- React islands only for interactive components.
- Tailwind CSS or CSS modules backed by explicit design tokens.
- GSAP ScrollTrigger for the signature signal path and one typography moment.
- Three.js only as an optional, lazy-loaded visual enhancement.
- Playwright for smoke and visual checks.
- Vercel or Netlify for deployment.

Astro remains the best default because this portfolio is mostly content, proof, and static presentation. Use Next.js only if live backend AI demos become a near-term requirement.

## Audience

Primary:

- Internship recruiters.
- Startup founders.
- Engineers reviewing AJ's work.

Secondary:

- Hackathon collaborators.
- AI/ML builders.
- Technical peers.

## Visitor Success Criteria

In under 60 seconds, a visitor should understand:

- AJ is a Computer Engineering student.
- AJ's strongest lane is AI systems engineering with product-building ability.
- The strongest projects are Mahoraga, Hybrid GenAI Transaction Categorizer, and The Loop.
- Resume, GitHub, LinkedIn, and email are easy to access.

In under 5 minutes, a technical visitor should find:

- Architecture diagrams.
- Demos or screenshots.
- Repo links.
- Tradeoffs.
- Limitations.
- Metrics where documented.

## Known Project Evidence

The planning documents describe these projects:

- Mahoraga
- Hybrid GenAI Transaction Categorizer
- The Loop
- AI Resume Tailoring Engine
- Webcam Motion Alert System
- Minimal RAG Implementation
- Music Web Scraper
- Global Super Store Database Project
- Fast and Curious Car Analysis
- Custom Linear Regression Model
- Iris Classification
- Netflix EDA

No verified project repositories, screenshots, demos, metrics, resume PDF, deployment links, GitHub URL, LinkedIn URL, or email asset files are currently present in this repo. They must be collected before final implementation claims are made.

## Implementation Philosophy

- Evidence before claims.
- Static content before motion.
- Diagrams before decorative visuals.
- Real links only.
- Honest status labels.
- Feature pages should explain architecture and decisions, not just stacks.
- Motion is progressive enhancement and must respect reduced motion.

