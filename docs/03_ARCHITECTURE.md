# 03_ARCHITECTURE.md

Date: 2026-06-26

Purpose:
- Capture the planned repository and website architecture.
- Give implementation agents a stable target without starting the website build yet.

## Current Repository Architecture

```text
Portfolio/
  README.md
  DESIGN.md
  PROJECT_CONTEXT.md
  FEATURED_PROJECT_SELECTION.md
  POSITIONING.md
  CONTENT_ARCHITECTURE.md
  PORTFOLIO_RISK_AUDIT.md
  SITE_BLUEPRINT.md
  DESIGN_SYSTEM.md
  ASSET_REQUIREMENTS.md
  PROJECT_INVENTORY.md
  SIGNAL_EVOLUTION_TIMELINE.md
  docs/
    00_READ_FIRST.md
    01_CURRENT_STATUS.md
    02_DECISIONS_LOG.md
    03_ARCHITECTURE.md
    04_DESIGN_SYSTEM.md
    05_CONTENT_ARCHITECTURE.md
    06_ASSET_TRACKER.md
    07_BACKLOG.md
    08_PROGRESS_LOG.md
    09_AI_HANDOFF.md
    10_PROJECT_EVIDENCE_REGISTRY.md
    11_LINK_REGISTRY.md
    12_FEATURED_PROJECT_EVIDENCE_PACK.md
    13_FEATURED_EVIDENCE_REVIEW.md
    14_SCREENSHOT_IMPORT_PLAN.md
    15_HYBRID_BENCHMARK_AND_ROUTING_PLAN.md
    16_THE_LOOP_WORKFLOW_WALKTHROUGH.md
    17_RESUME_PUBLICATION_PLAN.md
    portfolio-website-master-plan.md
```

## Planned Website Architecture

Default implementation stack:

- Astro
- TypeScript
- MDX
- React islands only where interactivity is necessary
- CSS modules or Tailwind backed by explicit design tokens
- GSAP ScrollTrigger for the signature path after static content works
- Three.js only as lazy-loaded progressive enhancement
- Playwright for smoke and visual checks

Planned implementation structure:

```text
src/
  content/
    projects/
    lab/
  data/
    profile.ts
    navigation.ts
    social.ts
    projects.ts
  layouts/
    BaseLayout.astro
    CaseStudyLayout.astro
  pages/
    index.astro
    lab.astro
    notes.astro
    resume.astro
    projects/
      [slug].astro
  components/
    common/
    home/
    project/
    motion/
    canvas/
  styles/
    globals.css
    tokens.css
    typography.css
```

## Architectural Boundaries

- `content/` owns long-form project and lab writing.
- `data/` owns structured facts, links, status labels, and navigation.
- `components/home/` owns homepage sections from `SITE_BLUEPRINT.md`.
- `components/project/` owns reusable case-study UI.
- `components/motion/` owns GSAP behavior and must have reduced-motion fallbacks.
- `components/canvas/` owns optional WebGL and must be lazy-loaded.
- `styles/tokens.css` must mirror `DESIGN.md` and `DESIGN_SYSTEM.md`.

## Non-Functional Requirements

- Static-first rendering.
- No required content hidden behind JavaScript.
- Reduced-motion fallback.
- Keyboard navigation.
- Visible focus states.
- Real assets only.
- No public placeholder links.
- Performance target: Lighthouse 90+ desktop, 80+ mobile after implementation.

## Current Architecture Status

The website is not scaffolded yet. Limited Astro static scaffolding can begin as a conservative content shell. Production-ready UI polish remains blocked until the evidence gaps in `docs/01_CURRENT_STATUS.md` and `docs/13_FEATURED_EVIDENCE_REVIEW.md` are resolved.
