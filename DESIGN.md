# AJ Portfolio DESIGN.md

## Purpose

This file is the visual and interaction source of truth for AJ's portfolio website. Future coding agents must treat it as a constraint file, not inspiration. The goal is a portfolio that feels engineered, personal, and premium without looking like a generic AI-generated SaaS landing page.

## Brand Thesis

AJ is a computer engineering student building practical software, AI/ML systems, automation, and production-minded tools. The site should communicate:

- Systems thinking over decoration.
- Evidence over claims.
- Technical depth without academic heaviness.
- Tasteful motion as proof of craft, not motion for its own sake.

## Visual Theme

Name: Signal Lab

Atmosphere:
- High-contrast technical workspace.
- Obsidian surfaces, precise grids, live signal accents.
- Calm, sharp, and product-oriented.
- Feels like a system monitor, lab console, and case-study archive merged into one usable site.

Primary metaphor:
- A signal traveling through a system.
- The scroll journey follows that signal from identity, to skills, to shipped projects, to contact.

## Negative Constraints

Never generate these unless explicitly overridden:

- No purple-to-blue gradient hero.
- No generic "modern portfolio" hero with floating cards.
- No Inter, Roboto, Arial, or default system font as the main visual identity.
- No oversized rounded cards with 16px+ radius.
- No nested cards.
- No fake dashboards, fake metrics, fake AI chat UI, or fake product screenshots.
- No stock-like corporate illustrations.
- No blob/orb/bokeh decorations.
- No uniform fade-in animation on every section.
- No landing-page copy that says what the website does.
- No vague claims like "passionate developer" without proof.
- No heavy 3D game world as the default experience.
- No scroll hijacking that blocks normal navigation.

## Design Tokens

```yaml
color:
  bg_base: "#070809"
  bg_elevated: "#111417"
  bg_soft: "#191D21"
  text_primary: "#F2F5F7"
  text_muted: "#9AA4AF"
  text_inverse: "#080A0C"
  border_subtle: "#273039"
  border_strong: "#3B4651"
  accent_live: "#2EF2C5"
  accent_proof: "#E7F75A"
  accent_alert: "#FF6A3D"
  accent_link: "#7CC7FF"
  surface_light: "#F5F7F8"
  grain: "rgba(255,255,255,0.035)"

radius:
  none: "0px"
  sm: "4px"
  md: "8px"

spacing:
  page_x_mobile: "20px"
  page_x_tablet: "32px"
  page_x_desktop: "48px"
  section_y_mobile: "64px"
  section_y_desktop: "112px"
  grid_gap: "24px"

typography:
  display: "Space Grotesk"
  body: "IBM Plex Sans"
  mono: "JetBrains Mono"
```

Color ratio:
- 80 percent monochrome.
- 10 percent teal live-signal accent.
- 5 percent acid proof accent.
- 5 percent coral alert/accent.

## Typography

Recommended free font stack:
- Display: Space Grotesk for hero, section titles, and project names.
- Body: IBM Plex Sans for readable content.
- Mono: JetBrains Mono for labels, code snippets, metadata, and system details.

Rules:
- Use deliberate type scale by breakpoint, not viewport-width font scaling.
- Keep letter spacing at 0 unless using very small uppercase metadata.
- Use monospace sparingly for signal labels, not entire paragraphs.
- Use short, direct headings. Avoid marketing filler.

## Layout

Grid:
- Desktop: 12-column grid, max content width around 1180px.
- Tablet: 8-column grid.
- Mobile: 4-column grid.

Section structure:
- Full-width bands with constrained inner content.
- Cards only for repeated project summaries, lab notes, and modal-like details.
- No page section should look like a floating card.
- Use asymmetric placement to avoid template rhythm.

Hierarchy:
- First viewport must show AJ, role, strongest proof, and primary actions.
- Project case studies must expose architecture, decisions, tradeoffs, and outcomes.
- Resume/contact must be reachable without scrolling.

## Component Style

Buttons:
- Icon plus short label for primary actions.
- 8px radius max.
- Tactile hover with transform <= 2px and eased color/border change.

Project cards:
- Unequal visual weight based on importance.
- Must include role, stack, problem, result/evidence, and link.
- Avoid identical generic cards.

Navigation:
- Compact top navigation on desktop.
- Mobile bottom or top drawer is acceptable, but contact/resume must remain easy.

Visual assets:
- Use real project screenshots, diagrams, demo videos, terminal captures, or generated technical textures.
- If an asset is unavailable, use an honest architecture diagram instead of a fake screenshot.

## Motion System

Motion must serve the story.

Signature effects:
- A small signal marker follows a responsive SVG path across major homepage sections.
- One pinned typography moment uses `mix-blend-mode: difference` across dark/light contrast bands.
- One text-mask or clip-path transition may reveal the featured work section.
- Optional WebGL shader background is allowed only as a progressive enhancement.

Implementation constraints:
- Use GSAP ScrollTrigger for scroll-linked choreography.
- Recalculate motion paths from DOM anchor positions using `getBoundingClientRect`.
- Debounce resize recalculation by around 200ms.
- Use `scrub: 1.2` to `scrub: 1.8` for premium inertia.
- Always provide `prefers-reduced-motion` fallback.
- Never animate large layout properties that trigger reflow during scroll.

## WebGL Constraints

Use WebGL only where it clearly improves identity:
- Hero signal field.
- Subtle fluid noise background.
- Project thumbnail distortion on hover.

Do not build a full gamified 3D world for v1. It is high effort, risky for performance, and less effective for recruiters who need fast proof.

Performance budget:
- Keep initial JS under 180KB gzip before optional WebGL island.
- Lazy-load Three.js/GSAP-heavy interactions.
- Target Lighthouse performance 90+ on desktop and 80+ on mobile.
- Site must remain readable if canvas fails.

## Content Voice

Tone:
- Direct, technical, specific.
- No inflated personal-brand language.
- Prefer "Built X to solve Y using Z. Tradeoff: A over B because C."

Good copy pattern:
- "I build software systems and AI products that survive real constraints."
- "Featured work: architecture, tradeoffs, shipped demos, and code."

Avoid:
- "I am passionate about technology."
- "Welcome to my portfolio."
- "Crafting beautiful digital experiences."

## Accessibility

Must support:
- Keyboard navigation.
- Visible focus states.
- Reduced motion.
- Sufficient color contrast.
- Text alternatives for diagrams and media.
- Contact and resume links available without animation.

## Agent Reuse Policy

When a repeatable workflow emerges during this project, save it as a custom Codex skill instead of re-creating the same instructions each time. Good candidates:

- Portfolio case-study writer.
- DESIGN.md auditor.
- Motion/performance QA checklist.
- Project evidence collector.

Do not create a custom skill for a one-off task.

