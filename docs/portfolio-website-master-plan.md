# AJ Portfolio Website Master Plan

Date: 2026-06-16

Source research: `E:\Downloads\Advanced Portfolio Design Research.pdf`

## Council Verdict

Product lens: The portfolio must prove competence quickly. Recruiters, founders, and technical peers should understand who AJ is, what he builds, and why the work is credible within 10 seconds.

Creative lens: Use one strong visual language, not a pile of effects. The recommended theme is Signal Lab: a dark technical interface with precise typography, live signal accents, scroll-linked motion, and real project evidence.

Engineering lens: Do not build a Bruno Simon-style 3D world for v1. It is memorable, but high-risk and inefficient for the current goal. Use static-first architecture with isolated interactive islands.

Performance lens: Motion should be progressive enhancement. The site must still work with JavaScript disabled enough to show identity, projects, resume, and contact.

Final recommendation: Build a premium, case-study-driven portfolio with one signature scroll path, one typography/mask moment, and real technical artifacts. Avoid generic AI design by locking design constraints in `DESIGN.md`.

## Core Positioning

One-line identity:

> AJ is a computer engineering student building practical software systems, AI/ML tools, automation, and product-grade applications.

Portfolio promise:

> Not a gallery of cards. A technical proof file showing architecture, decisions, tradeoffs, demos, and code.

What the site should make people believe:
- AJ can build real software, not only coursework.
- AJ thinks in systems, constraints, and maintainability.
- AJ can explain technical work clearly.
- AJ has taste and engineering discipline.

## Theme

Name: Signal Lab

Story metaphor:
- A signal enters a system.
- It passes through foundations, tools, projects, experiments, and proof.
- The user scrolls through AJ's engineering stack as if tracing a live system path.

Visual language:
- High contrast monochrome.
- Obsidian/dark surfaces.
- Small teal live-signal accents.
- Acid yellow for proof/verification.
- Coral for warnings, tradeoffs, or constraints.
- Technical grids and diagrams, but no fake dashboards.

Why this fits AJ:
- It connects C++, systems, AI agents, automation, and product building.
- It feels technical without being gamer-ish.
- It avoids the common AI portfolio palette and generic card layout.

## Target Audience

Primary:
- Internship recruiters.
- Startup founders.
- Engineers reviewing GitHub/projects.

Secondary:
- Hackathon collaborators.
- AI/ML builders.
- Technical peers.

User needs:
- Quickly verify skills.
- See actual work.
- Understand depth and judgment.
- Contact AJ or open resume/GitHub without friction.

## Information Architecture

Routes:
- `/` - Homepage narrative and featured proof.
- `/projects/[slug]` - Deep technical case studies.
- `/lab` - Smaller experiments, agents, automations, ML notebooks, demos.
- `/notes` - Optional short technical notes. Add only if AJ will maintain it.
- `/resume` - Resume page or direct PDF redirect.

Navigation:
- Work
- Lab
- Notes
- Resume
- Contact

Primary CTA:
- View Work

Secondary CTA:
- Resume

Persistent utility links:
- GitHub
- LinkedIn
- Email

## Homepage Flow

### 1. Hero: Identity and Signal

Goal: Make the visitor understand AJ immediately.

Content:
- Name: AJ
- Role line: "Computer Engineering student building software systems, AI tools, and production-minded apps."
- Proof line: "C++, AI/ML, system design, automation, DSA, full-stack products."
- CTA buttons: View Work, Resume, GitHub.

Visual:
- Dark full-viewport-ish hero with subtle WebGL or CSS signal field.
- A small signal marker begins its path here.
- No fake terminal typing effect unless it carries real content.

### 2. Proof Strip

Goal: Replace vague claims with evidence.

Content examples:
- "3rd-year Computer Engineering"
- "Primary language: C++"
- "Focus: AI agents, automation, system design"
- "Building: real products, not only assignments"

Visual:
- Dense horizontal metadata strip.
- Monospace labels.
- Acid proof accent for verified facts.

### 3. Systems Map

Goal: Show AJ's skill stack as connected systems.

Groups:
- Core engineering: C++, DSA, OS fundamentals, networking basics.
- Product engineering: React/TypeScript, APIs, databases, deployment.
- AI/ML: LLM apps, agents, embeddings, evaluation, automation.
- Architecture: system design, scalability, reliability, tradeoffs.

Visual:
- Asymmetric grid or node map.
- The signal path moves through invisible anchors.

### 4. Featured Work

Goal: Make projects the center of the site.

Recommended structure:
- 3 featured case studies.
- 4-6 smaller lab cards.
- Each featured project must have a real artifact: screenshot, demo video, architecture diagram, repo, or writeup.

Project card content:
- Problem.
- Role.
- Stack.
- Key engineering decision.
- Result/evidence.
- Links.

### 5. Signature Motion Moment

Goal: Show frontend craft without hurting usability.

Effect:
- Pinned text such as "BUILD -> TEST -> SHIP" or "SIGNAL -> SYSTEM -> PRODUCT" uses `mix-blend-mode: difference` while dark/light bands pass beneath.
- Keep this to one section.
- Respect reduced motion.

### 6. Lab / Experiments

Goal: Capture current interests without over-promising.

Content:
- AI agents.
- Automation scripts.
- ML experiments.
- System design diagrams.
- DSA visualizers or C++ tools.

Rule:
- Label unfinished work honestly as experiments.

### 7. About

Goal: Human context without filler.

Content:
- Short paragraph about AJ.
- Current focus.
- What kind of work AJ wants.
- Timeline of learning/building milestones.

Avoid:
- Long autobiography.
- Generic passion statements.

### 8. Contact

Goal: Make action obvious.

Content:
- Email.
- LinkedIn.
- GitHub.
- Resume.
- Short availability line.

Visual:
- Clean final band.
- No huge contact form for v1.

## Project Case Study Template

Each major project should follow this structure:

1. Overview: What it is and who it helps.
2. Problem: The real constraint or user pain.
3. Architecture: Diagram plus explanation.
4. Stack: Languages, frameworks, infrastructure.
5. Key decisions: Why this design over alternatives.
6. Tradeoffs: What was intentionally not built.
7. Hard parts: Bugs, performance, scaling, data, UX, deployment.
8. Result: Demo, metrics, screenshots, repo, or lessons.
9. Next iteration: One or two realistic improvements.

This format will make AJ look stronger than a portfolio that only says "built using React and Node."

## Required Artifacts

Prepare these before implementation:

- Resume PDF.
- Profile photo or intentional non-photo visual identity.
- GitHub and LinkedIn URLs.
- Email address for contact CTA.
- 3 featured projects with screenshots or diagrams.
- 4-6 lab/experiment entries.
- For each featured project: repo link, deployed link if available, one architecture diagram, one technical decision, one tradeoff.
- Open Graph image for sharing.
- Favicon or AJ monogram.

If screenshots are weak, use architecture diagrams. A clear diagram is more credible than a fake polished mockup.

## Recommended Tech Stack

Best fit for v1:

- Astro for static-first site architecture.
- TypeScript for content/data correctness.
- React islands only for interactive components.
- Tailwind CSS or plain CSS modules with design tokens.
- GSAP + ScrollTrigger for scroll-linked motion.
- Three.js only for isolated shader/canvas enhancement.
- MDX for case studies.
- Playwright for smoke and visual checks.
- Vercel or Netlify for deployment.

Why Astro over Next.js:
- A portfolio is mostly content and presentation.
- Astro ships less JavaScript by default.
- Interactive islands keep GSAP/Three isolated.
- Static output is simpler to deploy and maintain.

When to choose Next.js instead:
- If the portfolio will include authenticated dashboards.
- If AJ wants live AI demos with server routes inside the same app.
- If dynamic backend features are required soon.

## Architecture

Proposed file structure:

```text
Portfolio/
  DESIGN.md
  package.json
  astro.config.mjs
  public/
    resume.pdf
    og-image.png
    favicon.svg
    media/
      projects/
  src/
    content/
      projects/
        project-slug.mdx
      lab/
        experiment-slug.mdx
    data/
      profile.ts
      navigation.ts
      skills.ts
      social.ts
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

Core boundaries:
- `content/` owns long-form project/lab writing.
- `data/` owns structured facts used across pages.
- `components/home/` owns homepage sections.
- `components/project/` owns case-study UI.
- `components/motion/` owns GSAP behavior.
- `components/canvas/` owns WebGL and must lazy-load.
- `styles/tokens.css` mirrors `DESIGN.md`.

## Motion Architecture

Homepage signal path:
- Place invisible anchor elements in major sections.
- On client mount, read anchor centers with `getBoundingClientRect`.
- Build responsive SVG cubic-bezier path.
- Attach signal marker to path with GSAP MotionPathPlugin.
- Rebuild path on resize with 200ms debounce.

Pinned typography:
- Use `position: sticky`.
- Use `mix-blend-mode: difference`.
- Keep stacking context explicit.
- Use `transform: translateZ(0)` if flicker appears.

Text mask reveal:
- Optional v1.5 feature.
- Use SVG mask or CSS clip-path.
- Scale mask based on ScrollTrigger progress.
- Do not block main content if unsupported.

Reduced motion:
- Disable path animation.
- Replace pinned sections with static headings.
- Keep all content visible.

## Design System Details

Colors:
- Base: `#070809`
- Elevated: `#111417`
- Soft surface: `#191D21`
- Text: `#F2F5F7`
- Muted text: `#9AA4AF`
- Teal live signal: `#2EF2C5`
- Acid proof: `#E7F75A`
- Coral tradeoff/warning: `#FF6A3D`
- Link blue: `#7CC7FF`, used sparingly

Typography:
- Display: Space Grotesk.
- Body: IBM Plex Sans.
- Code/metadata: JetBrains Mono.

Layout:
- 12-column desktop grid.
- 8-column tablet grid.
- 4-column mobile grid.
- Max width around 1180px.
- Border radius max 8px.
- No nested cards.

## Implementation Roadmap

## Build Sequence

Run these from `C:\Users\adish\OneDrive\Documents\Portfolio` when ready to implement.

### Scaffold

```powershell
npm create astro@latest .
```

Recommended prompts:
- Template: minimal.
- TypeScript: strict.
- Install dependencies: yes.
- Initialize git: no, because this folder already has `.git`.

### Add Integrations

```powershell
npx astro add react
npx astro add mdx
```

### Add Runtime Dependencies

```powershell
npm install gsap three lucide-astro
```

Use `gsap` for ScrollTrigger/MotionPathPlugin and `three` only for the optional shader/canvas island.

### Add Quality Tooling

```powershell
npm init playwright@latest
```

Recommended prompts:
- Language: TypeScript.
- Tests folder: `tests`.
- GitHub Actions: yes if this repo will go to GitHub soon.
- Install browsers: yes.

### Add Scripts

Expected `package.json` scripts after setup:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "typecheck": "astro check",
    "test:e2e": "playwright test"
  }
}
```

Add `@astrojs/check` and TypeScript if Astro does not install them during setup:

```powershell
npm install -D @astrojs/check typescript
```

### Phase 0: Content Inventory

Output:
- Project list.
- Resume.
- Contact links.
- Media assets.
- Case-study bullets.

Done when:
- At least 3 featured projects have enough evidence to be credible.

### Phase 1: Foundation

Output:
- Astro project.
- TypeScript configured.
- Global styles and design tokens.
- Base layout, metadata, SEO, navigation.
- Initial real profile, navigation, skill, and social-link data wired from structured files.

Done when:
- Homepage renders fast with no heavy motion.
- Resume/contact/GitHub links work.

### Phase 2: Content System

Output:
- MDX project case studies.
- Project listing components.
- Lab entries.
- Case-study layout.

Done when:
- Projects can be added by creating MDX plus frontmatter.

### Phase 3: Visual Identity

Output:
- Hero signal field.
- Asymmetric project grid.
- Technical diagrams/media.
- Refined typography and responsive layout.

Done when:
- Site no longer resembles a generic AI portfolio even with motion disabled.

### Phase 4: Signature Interactions

Output:
- Scroll signal path.
- Pinned blend-mode typography.
- Optional text-mask reveal.
- Reduced-motion fallback.

Done when:
- Motion enhances the story and does not hide content.

### Phase 5: Quality Gate

Output:
- Lighthouse pass.
- Playwright smoke tests.
- Mobile screenshots.
- Accessibility checks.
- Deployment.

Done when:
- No broken links.
- Resume is reachable.
- Contact works.
- Core pages pass visual inspection on mobile and desktop.

## Testing Plan

Automated:
- `npm run typecheck`
- `npm run lint`
- `npm run build`
- Playwright smoke test for `/`, `/lab`, `/resume`, and one project page.
- Link checker for internal links.

Manual:
- Mobile viewport check.
- Reduced-motion check.
- Keyboard navigation.
- Lighthouse.
- Canvas disabled check.

Performance targets:
- Lighthouse Performance: 90+ desktop, 80+ mobile.
- Accessibility: 95+.
- No layout shift from late-loading media.
- WebGL lazy-loaded after critical content.

## Risks and Tradeoffs

Risk: Too much motion makes the portfolio harder to use.
Decision: One signature scroll path and one typography moment for v1.

Risk: WebGL can hurt mobile performance.
Decision: Lazy-load it and make it non-essential.

Risk: Weak project content makes a polished site feel hollow.
Decision: Build case studies around architecture, tradeoffs, and proof before adding visual polish.

Risk: Astro is less familiar than Next.js for some developers.
Decision: Use Astro because the site is static-first. Switch to Next.js only if backend AI demos become a near-term requirement.

Risk: Paid fonts can slow execution.
Decision: Use strong free fonts first. Upgrade later if the design needs it.

## Custom Skill Memory

Standing project preference:
- Do not recreate repeatable workflows from scratch.
- If a workflow becomes reusable, save it as a custom Codex skill.
- Candidate skills for this project: case-study writer, portfolio design auditor, animation QA checklist, asset inventory collector.

No custom skill is needed yet because this turn is a one-time planning pass.

## First 48-Hour Action Plan

1. Collect content:
   - Resume PDF.
   - GitHub, LinkedIn, email.
   - 3 strongest project candidates.
   - Screenshots, videos, diagrams, or repos for each.

2. Choose final project stack:
   - Default: Astro.
   - Override to Next.js only if live backend AI demos are required in v1.

3. Write project case-study drafts:
   - Use the template in this document.
   - Prioritize architecture and tradeoffs.

4. Scaffold the site:
   - Add Astro, TypeScript, styling, base routes.
   - Implement content without motion first.

5. Add identity:
   - Apply `DESIGN.md` tokens.
   - Build hero, proof strip, systems map, and featured work.

6. Add one signature motion path:
   - Implement after static content is strong.
   - Verify mobile and reduced-motion behavior.

## Definition of Done

The portfolio is ready to share when:

- A visitor understands AJ's identity in the first viewport.
- Resume, GitHub, LinkedIn, and email are one click away.
- At least 3 projects have credible evidence and tradeoff discussion.
- The site has one memorable interaction but remains usable without it.
- It avoids the common AI-generated visual defaults listed in `DESIGN.md`.
- It passes build, accessibility, mobile, and basic performance checks.
