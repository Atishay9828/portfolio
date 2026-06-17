# DESIGN_SYSTEM.md

Date: 2026-06-17

Source documents:
- `DESIGN.md`
- `POSITIONING.md`
- `SITE_BLUEPRINT.md`

Purpose:
- Define implementation-ready visual tokens and component systems.
- Explain why every token exists, where it is used, and what problem it solves.

Do not treat this as CSS code. It is the design specification that code should implement.

## Color System

## `bg_base` / `#070809`

Why it exists:
- Establishes the Signal Lab dark technical foundation.

Where it is used:
- Body background, hero, deep section bands.

Problem it solves:
- Creates a premium, high-contrast base without default black.

## `bg_elevated` / `#111417`

Why it exists:
- Separates important modules from the base without creating floating-card clutter.

Where it is used:
- Project modules, navigation surfaces, compact metadata panels.

Problem it solves:
- Adds hierarchy while respecting the no-nested-card rule.

## `bg_soft` / `#191D21`

Why it exists:
- Provides a softer technical surface for secondary modules.

Where it is used:
- Secondary work, lab entries, diagram backgrounds.

Problem it solves:
- Prevents the interface from becoming flat black while staying restrained.

## `text_primary` / `#F2F5F7`

Why it exists:
- Main readable text color.

Where it is used:
- Headings, body copy, key project facts.

Problem it solves:
- Maintains clarity on dark backgrounds.

## `text_muted` / `#9AA4AF`

Why it exists:
- Supports hierarchy for metadata and secondary explanations.

Where it is used:
- Labels, captions, supporting copy, timestamps, project metadata.

Problem it solves:
- Reduces visual noise without hiding useful context.

## `text_inverse` / `#080A0C`

Why it exists:
- Enables readable text on light proof/accent bands.

Where it is used:
- Acid proof badges, light contrast moments, selected states.

Problem it solves:
- Keeps accent surfaces accessible.

## `border_subtle` / `#273039`

Why it exists:
- Defines quiet structure.

Where it is used:
- Card borders, section separators, diagram grids.

Problem it solves:
- Makes dense technical layouts scannable without heavy boxes.

## `border_strong` / `#3B4651`

Why it exists:
- Indicates active, selected, or focused states.

Where it is used:
- Hover states, focus rings, selected tabs, active project modules.

Problem it solves:
- Gives interaction feedback without adding new colors everywhere.

## `accent_live` / `#2EF2C5`

Why it exists:
- Represents the live signal metaphor.

Where it is used:
- Signal path, active anchors, primary highlights, small status indicators.

Problem it solves:
- Creates a distinctive identity cue without generic AI gradients.

## `accent_proof` / `#E7F75A`

Why it exists:
- Marks verified evidence.

Where it is used:
- Proof badges, verified links, metrics labels, evidence markers.

Problem it solves:
- Separates proof from decoration.

## `accent_alert` / `#FF6A3D`

Why it exists:
- Marks tradeoffs, constraints, warnings, and limitations.

Where it is used:
- Limitation tags, risk notes, failure-mode callouts.

Problem it solves:
- Makes honest constraints visible and credible.

## `accent_link` / `#7CC7FF`

Why it exists:
- Provides a familiar link color in a dark technical interface.

Where it is used:
- Text links, external links, documentation links.

Problem it solves:
- Prevents links from being confused with decorative accent markers.

## `surface_light` / `#F5F7F8`

Why it exists:
- Supports one contrast band or typography moment.

Where it is used:
- Optional pinned typography/mix-blend section or diagram export surface.

Problem it solves:
- Adds contrast without changing the whole site theme.

## `grain` / `rgba(255,255,255,0.035)`

Why it exists:
- Adds subtle material texture.

Where it is used:
- Large dark backgrounds only.

Problem it solves:
- Avoids sterile flatness without using blobs or stock graphics.

## Typography System

## Display: Space Grotesk

Why it exists:
- Gives headings a technical but human visual identity.

Where it is used:
- Hero, section headings, project names.

Problem it solves:
- Avoids generic portfolio typography and keeps headings sharp.

## Body: IBM Plex Sans

Why it exists:
- Provides readable technical prose.

Where it is used:
- Body copy, project summaries, case-study text.

Problem it solves:
- Keeps dense technical content legible.

## Mono: JetBrains Mono

Why it exists:
- Creates a controlled system-label voice.

Where it is used:
- Metadata labels, tags, small proof markers, code-like values.

Problem it solves:
- Signals engineering context without making paragraphs hard to read.

## Type Scale

Display large:
- Used for hero identity only.
- Solves first-viewport clarity.

Display medium:
- Used for section headings.
- Solves page scanning.

Heading small:
- Used for project titles and capability groups.
- Solves hierarchy inside compact modules.

Body:
- Used for normal explanatory text.
- Solves readability.

Caption/metadata:
- Used for labels, tags, and status.
- Solves dense information display.

Rule:
- Do not scale font size with viewport width. Use breakpoint-specific sizes.

## Spacing System

## `page_x_mobile` / `20px`

Why it exists:
- Gives mobile content enough edge breathing room.

Where it is used:
- All mobile page containers.

Problem it solves:
- Prevents cramped technical content.

## `page_x_tablet` / `32px`

Why it exists:
- Balances mid-size viewport density.

Where it is used:
- Tablet containers.

Problem it solves:
- Avoids stretched or cramped layouts.

## `page_x_desktop` / `48px`

Why it exists:
- Provides desktop breathing room without wasting width.

Where it is used:
- Desktop containers.

Problem it solves:
- Supports dense grids while keeping content premium.

## `section_y_mobile` / `64px`

Why it exists:
- Keeps mobile sections distinct.

Where it is used:
- Vertical section padding on mobile.

Problem it solves:
- Prevents section collisions.

## `section_y_desktop` / `112px`

Why it exists:
- Creates deliberate pacing on large screens.

Where it is used:
- Vertical section padding on desktop.

Problem it solves:
- Makes the long homepage feel intentional.

## `grid_gap` / `24px`

Why it exists:
- Standard grid rhythm.

Where it is used:
- Project grids, capability grids, layout columns.

Problem it solves:
- Keeps modules aligned without excessive whitespace.

## Grid System

Desktop:
- 12 columns, max content width around 1180px.

Tablet:
- 8 columns.

Mobile:
- 4 columns.

Why it exists:
- Supports asymmetric layouts and responsive collapse.

Where it is used:
- Every homepage section and future case-study pages.

Problem it solves:
- Prevents generic equal-card grids and keeps layout decisions consistent.

## Card System

Radii:
- `none`: 0px
- `sm`: 4px
- `md`: 8px maximum

Why it exists:
- Keeps UI precise and engineered.

Where it is used:
- Project modules, lab entries, metadata panels.

Problem it solves:
- Avoids soft SaaS card aesthetics and nested-card clutter.

Rules:
- No nested cards.
- Cards are for repeated items, project modules, and focused panels only.
- Page sections are full-width bands, not floating cards.

## Button System

Primary button:
- Icon plus short label.
- Uses strong contrast and live accent.
- Used for main work/resume actions.
- Solves immediate navigation to proof.

Secondary button:
- Outline or muted surface.
- Used for GitHub, resume, external proof.
- Solves utility access without overpowering primary CTA.

Icon button:
- Used for GitHub, LinkedIn, email, open external link, download.
- Solves compact navigation.

Interaction:
- Hover transform no more than 2px.
- Visible focus ring.
- No layout shift.

## Tag System

Evidence tag:
- Uses `accent_proof`.
- Marks verified repo/demo/metric/diagram.
- Solves trust signaling.

Capability tag:
- Uses muted surfaces and `accent_live` on active states.
- Maps skills to projects.
- Solves capability scanning.

Risk/tradeoff tag:
- Uses `accent_alert`.
- Marks limitations and constraints.
- Solves credibility through honesty.

Status tag:
- Uses neutral or proof color depending on verification.
- States deployed, prototype, lab, hackathon, coursework, archived.
- Solves ambiguity around "completed."

## Timeline System

Stage marker:
- Uses mono label and small signal node.
- Shows progression stage.

Active stage:
- Uses `accent_live`.
- Indicates current signal position.

Proof stage:
- Uses `accent_proof` only when assets are verified.

Why it exists:
- Turns many projects into progression instead of clutter.

Where it is used:
- Signal Evolution Timeline.

Problem it solves:
- Keeps weaker early projects contextualized.

## Diagram Styling System

Diagram background:
- `bg_soft` or transparent over `bg_base`.

Node style:
- Rectangular, 4px to 8px radius.
- Strong labels.
- No fake metrics.

Edge style:
- Thin lines using `border_strong`.
- Active path uses `accent_live`.
- Fallback/error path uses `accent_alert`.

Evidence marker:
- `accent_proof` only for verified artifacts.

Where it is used:
- Project architecture thumbnails, case-study diagrams, systems map.

Problem it solves:
- Makes architecture proof visually consistent and credible.

## Motion Principles

Principle 1: Motion must clarify structure.
- Used for signal path and timeline progression.
- Solves narrative continuity.

Principle 2: Motion must not gate content.
- Used across all sections.
- Solves recruiter speed and accessibility.

Principle 3: Use one signature motion system.
- Signal marker, optional pinned typography, optional mask transition.
- Solves memorability without overloading performance.

Principle 4: Reduced motion is first-class.
- Disable scroll-linked animation and reveal all content statically.
- Solves accessibility and low-power device issues.

Principle 5: Animate transforms and opacity only.
- Avoid layout properties during scroll.
- Solves performance and layout shift risk.

