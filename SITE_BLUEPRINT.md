# SITE_BLUEPRINT.md

Date: 2026-06-17

Source documents:
- `DESIGN.md`
- `POSITIONING.md`
- `CONTENT_ARCHITECTURE.md`
- `PORTFOLIO_RISK_AUDIT.md`

Purpose:
- Define the complete homepage structure for implementation.
- Keep the page aligned with AI Systems Engineer as the primary identity and Product Engineer as the secondary identity.
- Specify layout, behavior, assets, motion, and accessibility section by section.

Do not treat this as final copy. It is an implementation blueprint.

## Page Structure

Homepage order:

1. `hero`
2. `proof-strip`
3. `featured-projects`
4. `signal-evolution`
5. `secondary-work`
6. `lab-projects`
7. `systems-map`
8. `about`
9. `contact`

Persistent navigation:

- Work
- Lab
- Notes
- Resume
- Contact
- GitHub
- LinkedIn

Primary CTA:
- Featured work.

Secondary CTA:
- Resume or GitHub.

## Section: hero

Purpose:
- Establish AJ's identity, strongest proof direction, and next actions in the first viewport.

Layout structure:
- Full-width dark section with constrained inner grid.
- Desktop: 12-column grid. Identity block spans 7 columns; proof anchor cluster spans 4 columns with 1-column breathing room.
- Mobile: single-column stack with identity, CTAs, proof anchors, then compact metadata.
- Signal path origin anchor starts in this section.

Content hierarchy:
- AJ name.
- Primary identity: AI Systems Engineer.
- Secondary identity: Product Engineer.
- One positioning statement as structured content, not final copy.
- Three proof anchors: Mahoraga, Hybrid Categorizer, The Loop.
- Primary CTA to Featured Projects.
- Secondary CTA to Resume or GitHub.
- Compact utility links.

Desktop behavior:
- Keep hero tall enough to feel intentional but leave a hint of the proof strip below the fold.
- CTAs remain visible without scroll.
- Proof anchors use compact technical rows, not large cards.

Mobile behavior:
- Prioritize name, role, one short positioning line, and CTAs.
- Proof anchors collapse into a vertical list.
- Avoid animation-dependent comprehension.

Required assets:
- Optional profile image or non-photo identity mark.
- Optional signal field background.
- Verified resume/GitHub links when available.

Animation behavior:
- Subtle signal marker initializes here.
- Optional low-cost signal field may animate opacity/position.
- No typing effect unless it displays real content.
- Reduced motion: static background and no marker movement.

Accessibility considerations:
- H1 must be AJ/name plus role context.
- CTAs must be keyboard reachable.
- Focus states must be visible against dark background.
- Animation must not be required to read the section.

## Section: proof-strip

Purpose:
- Convert identity into quick credibility signals.

Layout structure:
- Compact horizontal metadata band.
- Desktop: 4 to 6 dense metadata cells across the grid.
- Mobile: horizontally scrollable or wrapped two-column metadata chips, with no hidden required information.

Content hierarchy:
- Computer Engineering student.
- AI systems focus.
- Product engineering capability.
- C++/DSA foundation.
- Evidence categories: repos, demos, diagrams, metrics, deployment.

Desktop behavior:
- Sticks visually as a transition between hero and projects but should not use `position: sticky`.
- Uses mono labels and short values.

Mobile behavior:
- Wrap into readable rows.
- Avoid tiny text.

Required assets:
- Verified links only if present.

Animation behavior:
- Signal marker passes across the strip.
- Small accent line may fill as the section enters.
- Reduced motion: static accent line.

Accessibility considerations:
- Do not encode meaning by color alone.
- Maintain contrast for muted text.

## Section: featured-projects

Purpose:
- Present the strongest proof early.

Layout structure:
- Section heading plus three unequal project modules.
- Desktop: Mahoraga receives the largest treatment; Hybrid Categorizer and The Loop appear as strong secondary feature modules.
- Mobile: all feature modules stack with consistent scannable hierarchy.

Content hierarchy per project:
- Project name.
- Descriptive subtitle.
- Category/status.
- Problem.
- AJ's role.
- Stack summary.
- Key engineering decision.
- Evidence links.
- Case study CTA.
- One tradeoff or limitation.

Desktop behavior:
- Avoid identical cards.
- Use architecture thumbnail/screenshot region for each project.
- Use tags sparingly.

Mobile behavior:
- Media appears above summary only when it adds clarity.
- CTAs remain finger-friendly.
- Long stack lists collapse into concise rows.

Required assets:
- Mahoraga architecture diagram, reward visualization, demo, metrics/training artifact.
- Hybrid Categorizer routing diagram, memory diagram, UI screenshot, routing examples.
- The Loop product screenshots, database diagram, WebSocket flow, auth flow.
- Repo/deployment links when verified.

Animation behavior:
- Optional clip-path or mask reveal into featured work.
- Project media may have subtle hover interactions on desktop.
- No content hidden behind scroll animation.
- Reduced motion: static reveal.

Accessibility considerations:
- Project images require alt text describing the artifact.
- Links must be descriptive.
- Cards must not rely on hover only.

## Section: signal-evolution

Purpose:
- Show coherent progression from foundations to adaptive AI systems.

Layout structure:
- Compact timeline with stage markers.
- Desktop: horizontal or diagonal timeline tied to the signal path.
- Mobile: vertical timeline.

Content hierarchy:
- Stage label.
- Capability learned.
- Representative projects.
- Connection to next stage.

Stages:
- Foundations.
- Automation & Practical Tooling.
- Systems & Data Engineering.
- Product Engineering.
- AI Systems.
- Advanced AI Systems.
- Adaptive Intelligence.

Desktop behavior:
- Later stages receive more visual emphasis.
- Early projects stay small.

Mobile behavior:
- Vertical timeline with collapsible details if needed.
- Avoid dense paragraphs.

Required assets:
- Stage icons or simple diagram markers.
- No screenshots required for early timeline-only projects.

Animation behavior:
- Signal line can progressively draw across stages.
- Reduced motion: fully visible static line.

Accessibility considerations:
- Timeline order must be semantic in HTML.
- Stage labels must be text, not only visuals.

## Section: secondary-work

Purpose:
- Add credible supporting work without competing with featured projects.

Layout structure:
- Two compact project modules.
- Desktop: two-column layout.
- Mobile: stacked cards.

Content hierarchy:
- AI Resume Tailoring Engine.
- Webcam Motion Alert System.
- For each: problem, workflow, key decision, evidence status, link.

Desktop behavior:
- Smaller visual footprint than featured projects.
- Emphasize workflow diagrams over decorative screenshots.

Mobile behavior:
- Keep summaries short and CTAs clear.

Required assets:
- Resume Engine pipeline diagram, ATS screenshot, sample output.
- Webcam Streamlit screenshot, motion detection screenshot, email alert screenshot.

Animation behavior:
- Minimal entrance motion.
- No hover-only critical content.

Accessibility considerations:
- Sensitive sample data must be redacted before publishing.
- Media alt text must explain workflow purpose.

## Section: lab-projects

Purpose:
- Preserve breadth and experimentation without diluting the main proof.

Layout structure:
- Compact grid or list of lab entries.
- Desktop: 2 or 3 columns.
- Mobile: single-column list.

Content hierarchy:
- Minimal RAG Implementation.
- Music Web Scraper.
- Global Super Store Database Project.
- Fast and Curious Car Analysis.
- Each includes category, purpose, status, and one evidence link if verified.

Desktop behavior:
- Small entries, not large project cards.
- Avoid large screenshots unless the asset proves something.

Mobile behavior:
- Dense but readable list.

Required assets:
- Repo/notebook links when verified.
- Small diagrams only where useful.

Animation behavior:
- Static-first.
- Optional subtle row highlight on hover/focus.

Accessibility considerations:
- Clear labels such as Lab, Experiment, Coursework, or Prototype.

## Section: systems-map

Purpose:
- Map capabilities to evidence after visitors have seen the work.

Layout structure:
- Capability matrix with project references.
- Desktop: 12-column matrix, capability groups on left, evidence projects on right.
- Mobile: accordion or stacked capability groups.

Content hierarchy:
- AI systems architecture.
- Product engineering.
- Automation.
- Data and ML foundations.
- Full-stack implementation.
- C++/DSA foundations.

Desktop behavior:
- Tags link back to relevant projects.
- Avoid raw tool-list wall.

Mobile behavior:
- Capability groups collapse only if the headings remain visible.

Required assets:
- None required beyond links and maybe simple diagram styling.

Animation behavior:
- Signal marker may pause or pulse on capability groups.
- Reduced motion: static accents.

Accessibility considerations:
- Capability/project associations must be text-readable.
- Do not rely on color-only mapping.

## Section: about

Purpose:
- Add human and educational context after credibility is established.

Layout structure:
- Two-column text and metadata layout.
- Desktop: personal context on left, current focus and education metadata on right.
- Mobile: single-column.

Content hierarchy:
- Computer Engineering student status.
- Practical engineering orientation.
- Current interests.
- Target opportunities.
- Resume link.

Desktop behavior:
- Keep concise. No long autobiography.

Mobile behavior:
- Keep paragraph count low.

Required assets:
- Optional profile image.
- Resume link.

Animation behavior:
- Minimal or none.

Accessibility considerations:
- Avoid tiny metadata.
- Resume link must be explicit.

## Section: contact

Purpose:
- Convert interest into action.

Layout structure:
- Final full-width band with contact actions.
- Desktop: contact text, primary contact links, utility links.
- Mobile: stacked action buttons.

Content hierarchy:
- Email.
- GitHub.
- LinkedIn.
- Resume.
- Short availability or collaboration context when verified.

Desktop behavior:
- Clear final action.
- No unnecessary contact form in v1.

Mobile behavior:
- Large tap targets.
- Links remain visible without animation.

Required assets:
- Verified email.
- Verified GitHub URL.
- Verified LinkedIn URL.
- Resume PDF.

Animation behavior:
- Signal path terminates here.
- Optional final marker settle.
- Reduced motion: static final marker.

Accessibility considerations:
- Contact links must be actual anchors.
- Email link should be readable as text.

## Page-Level Accessibility Rules

- Keyboard navigation must reach all links and controls.
- Visible focus states are required.
- Reduced motion must disable scroll-linked choreography.
- Diagrams require text alternatives or adjacent summaries.
- No key evidence may be hidden inside hover-only or animation-only states.
- Contrast must meet WCAG AA at minimum.

## Page-Level Motion Rules

- Motion supports the signal metaphor and proof flow.
- Only one signature path and one typography/mask moment should exist in v1.
- No scroll hijacking.
- No layout reflow-heavy scroll animations.
- GSAP ScrollTrigger should be lazy-loaded.
- Static content must remain credible without JavaScript.

