# 35_VISUAL_MOTION_DIRECTION.md

Date: 2026-07-10

## Hard Recommendation

Depict AJ's growth as one **learning signal that becomes a system**.

The Signal Core is not a dashboard, a mascot replacement, or generic sci-fi decoration. It is a persistent visual explanation of the portfolio sequence:

`curiosity -> operating model -> builds -> lessons -> toolkit -> systems -> collaboration`

The same visual seed should gain structure as the visitor moves down the page. This makes the motion specific to AJ: he learns by building, testing, finding constraints, and folding those lessons into the next system.

The visual must live in reserved layout space. It must never float above project proof, headings, links, or screenshots.

## Page Job

Audience: recruiters, engineering collaborators, and technical reviewers.

Single job: connect AJ's project evidence to a credible learning trajectory within one fast scan.

The page hierarchy remains:

1. identity and direction;
2. operating model;
3. strongest builds and lessons;
4. progression over time;
5. evidence-derived tools;
6. systems-level capability;
7. a clear next step.

## Signature Element: The Learning Signal

The Signal Core is the one expressive visual risk. Everything around it stays restrained.

- It uses one stable frame so the visitor understands that the object is evolving, not being replaced.
- Active-state changes use opacity and transforms only.
- State changes are discrete and tied to the same active section index that drives the Signal Journey rail.
- The scene is a compact instrument, not a fake product interface.
- Labels explain the learning stage; they do not invent metrics or proof.

## Seven Visual States

| State | Meaning | Visual behavior | Required language |
|---|---|---|---|
| 01 Signal | AJ's starting direction | A single AJ node emits a controlled orbit/pulse. | Identity / direction |
| 02 About | Operating model | Software, AI, and product planes converge around one center. | Operating model / constraints |
| 03 Builds | Lessons from shipped work | Three build blocks resolve into one stronger pattern. | Build / test / refine |
| 04 Evolution | Capability compounds | A rising path adds nodes from foundations to adaptive systems. | Foundations -> product -> AI -> adaptive |
| 05 Toolkit | Tools are selected by the work | Code, data, model, and API modules feed the center. | Evidence-derived toolkit |
| 06 Systems | Components become architecture | UI, API, data, and model nodes form a connected graph. | Systems / architecture |
| 07 Contact | Learning becomes collaboration | The graph simplifies into one clear outward port. | Inspect / collaborate |

The states should not claim that every project is production-ready. Evidence status stays in the project content.

## Composition Rules

- Desktop at 1180px and above: three columns — Signal Journey rail, content, Signal Core sidecar.
- The sidecar is sticky inside its own column. No `position: fixed` overlay.
- Main content keeps normal document flow and remains independently readable if the scene is removed.
- The scene width stays between roughly 230px and 292px.
- The hero proof anchors remain the dominant proof surface; the Signal Core is secondary context.
- Avoid nested cards, oversized glass panels, and empty cinematic padding.

## Typography

- Display: Space Grotesk for short thesis statements only.
- Body: IBM Plex Sans for readable project and learning copy.
- Utility: JetBrains Mono for state numbers, stage labels, and system annotations.
- Mono labels use short phrases, not paragraphs.
- Keep the existing type families; introducing another display font would weaken the established Signal Lab identity.

## Color

Keep the existing evidence-safe palette:

- `#2EF2C5` live signal and active state;
- `#E7F75A` build/proof emphasis;
- `#FF6A3D` constraints and evolution pressure;
- `#7CC7FF` context and system links;
- `#070809`, `#111417`, and `#191D21` for depth.

Color supports labels and shape changes; it is never the only state indicator. Reject the generic AI-purple/pink palette because it is not specific to AJ's engineering work and conflicts with the existing evidence system.

## Motion Rules

- One orchestrated state change per section, lasting 220-420ms.
- Animate `transform`, `opacity`, and existing CSS variables only.
- Normal browser scroll remains untouched.
- Signal Path clicks use native smooth scrolling and preserve keyboard anchors.
- No perpetual bouncing, floating cards, cursor followers, or decorative particle fields.
- Do not add GSAP yet. The current behavior is a discrete seven-state controller, so CSS transitions plus the existing `requestAnimationFrame` loop are simpler and cheaper. Add GSAP/ScrollTrigger only if a later approved direction requires a genuinely scrubbed SVG path or pinned timeline.

## Responsive And Reduced Motion

- At 1180px and above, show the full sticky sidecar in reserved space.
- Below 1180px, remove the sidecar and keep the readable section markers and normal page flow.
- On mobile, the rail and sidecar stay hidden; do not compress either into a tiny overlay.
- `prefers-reduced-motion` keeps active labels and state changes but removes continuous rotation, sweep, parallax, and long transitions.
- The static first frame must communicate the same stage without requiring motion.

## Rejected Directions

1. **Full 3D/WebGL world** — high cost, weak relationship to project evidence, poor mobile and reduced-motion behavior.
2. **Fixed floating Signal Core** — obscures section copy and cards at medium desktop widths.
3. **Fake terminal or metrics dashboard** — implies proof that the portfolio does not contain.
4. **Seven unrelated illustrations** — loses the idea that learning compounds across projects.
5. **Motion on every card** — dilutes hierarchy and makes the page feel generated rather than authored.
6. **AI-purple glassmorphism rebrand** — generic, less readable, and inconsistent with Signal Lab.
7. **Scroll hijacking or snap scrolling** — harms navigation and prevents visitors from scanning proof at their own pace.

## Implementation Decision In This Pass

Move the existing Signal Core from a fixed overlay into a third, sticky grid column on desktop. This is the highest-impact correction because it improves visibility and guarantees that the visual cannot cover evidence. Keep the seven-state data contract and existing lightweight controller intact.

## Remaining Visual QA

- Check the three-column composition at 1180px, 1280px, 1440px, and 1920px.
- Confirm the hero title and proof anchors remain balanced at the narrow desktop boundary.
- Confirm every state remains legible without color and with reduced motion.
- If the scene still feels generic after layout QA, refine the glyph language around the learning sequence above; do not add more ambient effects.

## Figma Implementation Reference

The validated homepage was captured after the integrated desktop/mobile pass:

- `https://www.figma.com/design/bjHX9mvjM57LPTfJ3fJAEh?node-id=1-2`

The Astro implementation remains the source of truth. Use the Figma capture for visual comparison and design discussion, not as a replacement for evidence data or production code.
