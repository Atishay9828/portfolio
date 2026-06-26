# 04_DESIGN_SYSTEM.md

Date: 2026-06-26

Purpose:
- Mirror the implementation-facing design system for future agents.
- Point to the full source document without duplicating every detail.

Primary source:
- `DESIGN_SYSTEM.md`

Design constraint source:
- `DESIGN.md`

## Visual Direction

Theme: Signal Lab.

The UI should feel like a precise technical workspace: high contrast, obsidian surfaces, live signal accents, real architecture diagrams, and restrained motion.

## Core Tokens

| Token | Value | Use |
|---|---|---|
| `bg_base` | `#070809` | Body, hero, deep dark bands. |
| `bg_elevated` | `#111417` | Project modules, navigation, metadata panels. |
| `bg_soft` | `#191D21` | Secondary modules, lab entries, diagram surfaces. |
| `text_primary` | `#F2F5F7` | Main text. |
| `text_muted` | `#9AA4AF` | Metadata, captions, secondary copy. |
| `accent_live` | `#2EF2C5` | Signal path, active states. |
| `accent_proof` | `#E7F75A` | Verified evidence markers. |
| `accent_alert` | `#FF6A3D` | Tradeoffs, risks, limitations. |
| `accent_link` | `#7CC7FF` | Links. |

## Typography

- Display: Space Grotesk.
- Body: IBM Plex Sans.
- Mono: JetBrains Mono.

Rules:
- Do not use viewport-width font scaling.
- Do not overuse monospace for paragraphs.
- Keep headings short and direct.

## Layout

- Desktop: 12-column grid.
- Tablet: 8-column grid.
- Mobile: 4-column grid.
- Max content width: around 1180px.
- Radius max: 8px.
- No nested cards.
- Page sections are full-width bands with constrained inner content.

## Motion

- One signature scroll path.
- One optional pinned typography or mask moment.
- GSAP ScrollTrigger only after static content is implemented.
- Reduced motion is required.
- Motion must never hide evidence.

## Open Design-System Work

- Add exact type scale values.
- Add line-height values.
- Add breakpoint definitions.
- Add focus-ring token.
- Add z-index and elevation rules.
- Add diagram component dimensions once real diagrams are drafted.

