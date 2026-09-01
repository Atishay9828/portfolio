# 08_PROGRESS_LOG.md

Date: 2026-08-09

Purpose:
- Record completed milestones and repository progress.

## Progress Entries
### 2026-09-01 Full-Stack SDE Resume and Certificate Publication

Completed:
- Replaced the repo-local public resume with AJ's owner-selected Full-Stack SDE PDF, keeping the existing resume CTA path stable.
- Published the owner-provided BSERC Def-Space certificate at the precise path already linked by the generated resume.
- Updated the secondary AI Resume Tailoring Engine card only with README-backed, conservative facts: deterministic direct-skill coverage, verified-profile document content, local MiniLM ranking, deterministic fallback, and one-page PDF output.

Validation:
- Resume and certificate are each one page. The resume has nine annotations, with the certificate path present twice; local SHA-256 values are recorded in `docs/17_RESUME_PUBLICATION_PLAN.md`.
- Application build and deployment verification remain pending this change set's release.

### 2026-08-10 Full Resume-Flow Spacing Fix

Completed:
- Tightened the TEDxTIET block and moved Projects, Skills, Education & Certifications, and Achievement upward together to remove the remaining staggered whitespace.
- Preserved the one-page A4 layout, Mahoraga project, certificate-linked Def-Space heading, and clickable project titles.

Validation:
- Local/live PDF is 49,191 bytes with SHA-256 `73EE8216CA205EC7225333350DD94EF7C7F76060FC1807F7ABD516949BD118C9`, one page, 9 annotations, one TEDxTIET entry, one `ACHIEVEMENT` heading, two Mahoraga mentions, and zero certificate-number occurrences.
- Preview `dpl_7e8Pt1Sf4xvJiitjduJaW5ENe6y2` was promoted to production deployment `dpl_3Zt6ncqJDo1u8NsTiddduEofZ7Bq` on exact commit `34b4131821145363e6245ea5fff64aa70625d77f`; live bytes match local.

### 2026-08-10 TEDxTIET Spacing Refinement

Completed:
- Reworked the TEDxTIET entry into a compact heading, location/date metadata row, and two-line bullet with balanced spacing.
- Preserved the one-page A4 layout and all existing resume links.

Validation:
- Local PDF is 49,169 bytes with SHA-256 `EEA2CE0CCC22E6B3E7F6235810D24C12DA7BBCD56EEE2EE30F96C467D78D160`, one page, 9 annotations, one extracted `ACHIEVEMENT` heading, and two Mahoraga mentions.
- Preview `dpl_14fHMsqnKagU4kYtVgLChaKJhpwg` and production `dpl_G44WUuLiAoGFKogGTHxA4S1YY1jY` are Ready on exact commit `dea4998e4f90cebc3c2905e01f948226b008fd50`; live PDF matches local bytes and hash.

### 2026-08-10 Resume Whitespace Revision

Completed:
- Removed the oversized whitespace between the Def-Space and TEDxTIET entries and before Skills.
- Preserved the one-page A4 layout, Mahoraga project, achievement heading, certification wrap, and clickable project/internship links.

Validation:
- Local PDF is 49,259 bytes with SHA-256 `DF3849F6B4A66B7890ED4E1B04A15111F030BBB33BEB3C5980953DD6A313D629`, one page, 9 annotations, one extracted `ACHIEVEMENT` heading, two Mahoraga mentions, and zero certificate-number occurrences.
- Preview `dpl_FDdxM1kWHBBX5tbCUoDdhnc9aA3u` and production `dpl_4iXYQ66maMbb3JKiSXMkzVhsKfQT` are Ready on exact commit `75bb9b82d3cbf69975eba2869ee385b48c0f86cf`; live PDF hash matches local and browser smoke passed on desktop and 390x844.

### 2026-08-09 Mahoraga Resume Space Revision

Completed:
- Added Mahoraga as a fourth project with concise bullets covering its adaptive RL environment, reward shaping, and Gymnasium/FastAPI/Gradio/Qwen/LoRA integration.
- Condensed ReceiptSplit, TIET-LOOP, and Hybrid GenAI Transaction Categorizer bullets, and reduced the Def-Space internship to one focused bullet.
- Kept the standalone `ACHIEVEMENT` section and the certificate URL on the clickable Def-Space internship heading.

Validation:
- Local PDF is one-page A4, visually reviewed, 54,549 bytes, with 9 link annotations and SHA-256 `9C4D23555B299186AEEFD74468386794E348B3BCA6DE86ADE2A9C7056EFEC71B`.
- Preview `dpl_7EG9L5xLuTvowLBAapUNpL2gigSY` and production `dpl_7JR9sona2AdhR27Jai1hAjdr9fhB` are Ready on exact commit `41084e6801c63d9487ab5f55f9f317076b7accbc`.
- Live PDF matches the local bytes/hash; browser smoke passed on desktop and 390x844 with 3 resume CTAs, no overflow, and no console/page errors.

### 2026-08-09 Internship Name Certificate Link Revision

Completed:
- Removed the visible certificate-number text and its separate link from the Def-Space bullet.
- Made the `Def-Space Summer Intern - Bharat Space Education Research Centre (BSERC)` heading above the bullet carry the certificate URL.
- Kept the certification wrap fully visible and the achievement section on the same page.

Validation:
- The revised PDF has one page, one extracted achievement statement, zero certificate-number text occurrences, 8 link annotations, and a visual review showing the clean `development.` sentence.
- Local public asset SHA-256: `E6D16BFB1D76E055EFD9F941A5AF52E903C59B6E4C61BAFFFFBB7F584915F03C`.
- Promoted production deployment `dpl_G6U5mEEMPssxTHmfNqHd1mU1ugUR` from exact release commit `ad1fcb0ed566cf2c37f4ccd3f02b627beca37463`; deployment state is Ready.
- Live resume verification returned HTTP 200 and `application/pdf`, with 73,020 bytes, one page, zero certificate-number text occurrences, one internship-name certificate link annotation, one `ACHIEVEMENT` heading, one finalist statement, 8 annotations, and SHA-256 `E6D16BFB1D76E055EFD9F941A5AF52E903C59B6E4C61BAFFFFBB7F584915F03C`.
- Browser smoke passed on production at desktop and 390x844 mobile viewports with 3 resume CTAs, no horizontal overflow, and no console/page errors.

### 2026-08-09 Certificate Link and Certification Wrap Fix

Completed:
- Rebuilt the one-page resume bottom section so the wrapped `fundamentals.` certification line is fully visible.
- Attached the certificate URL to the visible `BSERC-DSI-2026-2601` number and added the accessible annotation label `Certificate No. BSERC-DSI-2026-2601`.

Validation:
- The revised PDF has one page, one extracted `ACHIEVEMENT` heading, one finalist statement, 8 link annotations, and a visually reviewed certification/achievement boundary.
- Local public asset SHA-256: `764D9AAE3E932FC0D7872BBD71DB42C8F6482D2D37B6FBA4209D7B7F21CCC232`.
- Promoted production deployment `dpl_6a7ouGzzf5FLqX7GL3JpcX5EKSTT` from exact release commit `d8aeb2cb8b5fd950b81e32eaf9b52818d331e483`; deployment state is Ready.
- Live resume verification returned HTTP 200 and `application/pdf`, with 73,229 bytes, one page, the full `fundamentals.` certification line, one `ACHIEVEMENT` heading, one finalist statement, 8 annotations, and SHA-256 `764D9AAE3E932FC0D7872BBD71DB42C8F6482D2D37B6FBA4209D7B7F21CCC232`.
- Browser smoke passed on production at desktop and 390x844 mobile viewports with 3 resume CTAs, no horizontal overflow, no console/page errors, and a successful live PDF request.

### 2026-08-09 Achievement Heading Resume Revision

Completed:
- Promoted the Meta OpenEnv Hackathon 2026 finalist achievement into a standalone `ACHIEVEMENT` heading in `public/resume/atishay-jain-sde-resume.pdf`.
- Removed the replaced inline achievement text from the PDF text layer so ATS extraction contains one clean heading and one achievement statement.

Validation:
- The revised PDF remains one-page A4, visually reviewed, preserves 8 existing link annotations, and extracts the `ACHIEVEMENT` heading plus finalist statement once each.
- Local public asset SHA-256: `D33DA440E27344674722BB9A79D806A63AD7E67E386A2D224DC02655135253A8`.
- Promoted production deployment `dpl_7LThRun79G4jQX6E3rEf54JdibjW` from exact release commit `3c1e520fd15b16aa8243eef94eedfd50e00d7519`; deployment state is Ready.
- Live `https://www.atishay.app/resume/atishay-jain-sde-resume.pdf` returned HTTP 200 and `application/pdf`, with one page, the `ACHIEVEMENT` heading and finalist statement once each, 8 annotations, and SHA-256 `D33DA440E27344674722BB9A79D806A63AD7E67E386A2D224DC02655135253A8`.
- Browser smoke passed on production at desktop and 390x844 mobile viewports with 3 resume CTAs, no horizontal overflow, no console/page errors, and a successful live PDF request.

### 2026-08-09 Public Resume Replacement and Production Release

Completed:
- Replaced the public `public/resume/atishay-jain-sde-resume.pdf` with the owner-provided one-page SDE resume without changing the existing CTA path.
- Synchronized the resume publication plan, asset tracker, evidence registry, link registry, and AI handoff with the new source and public asset.

Validation:
- PDF metadata, extracted text, link annotations, and rendered-page review passed; the public copy matches the supplied file byte-for-byte.
- `npm.cmd ci` passed; `npm.cmd test` passed with 49/49 tests; `npm.cmd run lint` and `npm.cmd run build` passed with 0 errors; `git diff --check` passed.
- The static build copied the resume to `dist/resume/atishay-jain-sde-resume.pdf` with the same SHA-256 as the source.
- Vercel preview `dpl_5wixxMYjFMc7fkFSzEhzP2iaCXg9` and production deployment `dpl_HRT5ZXgiNiXyGGjekCkyBvow8pd6` are Ready. The current production branch tip is `add3fd424ba765c6398e45509d37d49c4cdad30a`, with resume commit `6e1c3fb` in its history.
- Production HTTP and Chrome smoke checks passed for the homepage and resume at desktop and 390x844 mobile sizes. Anonymous preview checks were blocked by Vercel deployment protection.

### 2026-07-14 Mobile Navigation and Hierarchy Repair

Completed:
- Reorganized the mobile header into compact identity/resource and primary-section rows.
- Removed the duplicate mobile hero portrait and retained the proof-anchor profile portrait.
- Added a left-edge Signal Path drawer with all seven labeled stops, active-state sync, URL-hash updates, and keyboard/scrim close behavior.
- Reserved a narrow content gutter so the persistent path control does not cover section content.
- Differentiated the footer with an end-of-signal label, elevated surface, and return-to-signal action.
- Replaced browser-native section scrolling with a controlled 850-1600ms ease-in-out animation shared by Signal Path and the return action; it temporarily disables CSS smoothing to avoid device-dependent double animation. The slower curve follows owner-provided real-phone recording review.

Validation:
- `npm.cmd test` passed with 48/48 tests.
- `npm.cmd run build` passed with 0 errors and generated 5 pages; the known generated Vercel Analytics hint and trailing esbuild cancellation text remain non-failing.
- Chrome headless browser QA passed at 390x844 and 360x740 with no horizontal overflow, one visible portrait, all seven Signal Path labels, correct `#featured-projects` navigation, and content clear of the path handle.
- The only local browser console error was the expected 404 for `/_vercel/insights/script.js`, which is served by Vercel after deployment.
- Production deployment `dpl_HYYZD5ePW6a6ZbxYs6CmMzu9RBRu` is Ready. The live alias `https://atishay9828-portfolio.vercel.app/` returned HTTP 200 and contains the new mobile navigation and footer markup.
- Follow-up production deployment `dpl_7aPMk1PDhoZuv9PYoDRgw5AgxQZH` is Ready and aliased to the same public URL.
- Recording-reviewed slower-motion deployment `dpl_3x5pKQDaWFcoY8kCLjgmSLyMBN6q` is Ready and is the current production alias target.

### 2026-07-13 Personal Landing Identity Pass

Completed:
- Added the owner-selected black-shirt portrait as a compact builder-profile card above the hero proof anchors.
- Preserved the proof-first opening, Signal Journey, and mascot while adding a real human identity surface.
- Cropped the source to a 4:5 chest-up portrait, reviewed it for public privacy/readability, stripped source metadata, and optimized it to a 37,280-byte WebP.
- Kept the personal image separate from navigation and project evidence so it adds identity without becoming the page's primary proof.

### 2026-07-09 Manual Review Fix Pass

Completed:
- Finished the manual review repair pass on top of commit `f2239fd`.
- Kept the Signal Journey as one rail and made the marker position derive from the active station index instead of raw page scroll.
- Removed the duplicate hero Signal Path module and kept the hero right side focused on proof anchors.
- Made featured project titles route to internal case studies and replaced large proof tiles with compact icon actions.
- Linked verified lab repos for RAG, Music Web Scraper, Global Super Store Database, and Fast and Curious Car Analysis.
- Expanded the evidence-derived toolkit to languages, frontend, backend/API, AI/ML, data/database, deployment, and product-system categories.
- Added repo/docs-backed SVG diagrams for Mahoraga, Hybrid, and The Loop visual proof panels.
- Updated public copy so pending-proof language stays out of the rendered site and unresolved proof stays in docs.

Validation:
- `npm.cmd test` passed with 35 tests.
- `npm.cmd run build` passed with 0 Astro diagnostics and generated 4 pages.
- Static `dist/` smoke check confirmed `/`, `/projects/mahoraga/`, `/projects/hybrid-categorizer/`, and `/projects/the-loop/` exist with titles and no generated Windows drive paths.
- Generated HTML scan found no forbidden public backlog/private-data phrases.
- Dev server startup printed ready on `http://127.0.0.1:4321/`, then exited inside the sandbox because Vite could not read parent-directory dependency paths. Escalated rerun was unavailable due the environment usage limit, so live browser QA remains not completed in this pass.

### 2026-07-09 Deep Screening Public Cleanup

Completed:
- Removed recruiter-facing placeholder/backlog language from public source surfaces.
- Split About and Contact so About appears directly after the hero while Contact remains the full CTA surface near the bottom.
- Reordered the Signal Journey to Signal, About, Proof, Builds, Evolution, Toolkit, Systems, and Contact.
- Kept the hero Signal Path as a static systems visual instead of a duplicate scroll tracker.
- Made secondary cards compact and linked timeline project names only when a verified GitHub repo exists.
- Updated Hybrid public evidence with local `/predict` and offline Qwen fallback examples while keeping hosted-production latency, dataset accuracy, fallback-rate, and zero-compute-cost claims out of public copy.
- Added The Loop repo-backed system topology SVG and wired it into public case-study visuals.
- Added evidence-derived toolkit data and documentation.

Validation:
- `npm.cmd test` passed with 30 tests during the midpoint checkpoint.
- `$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run build` passed before the final manual-review closeout step.
- Public-source scans showed no forbidden placeholder/backlog terms or local Windows paths in `src`/`public`.

### 2026-07-08 Scroll-Responsive Signal Journey Correction

Completed:
- Replaced the static-feeling Signal Corridor with a scroll-responsive Signal Journey on the homepage.
- Added section journey metadata for Signal, Proof, Builds, Evolution, Support, Lab, Systems, and Contact.
- Added a lightweight vanilla controller using `requestAnimationFrame`, `IntersectionObserver`, CSS variables, and active `is-active`/`is-before`/`is-after` states.
- Added a desktop sticky signal rail with progress fill, moving orb, and active station labels.
- Added subtle section/card/timeline/capability activation without changing project claims, CTA destinations, screenshots, metrics, or evidence status.
- Kept mobile clean by hiding the desktop rail and disabling heavy transforms on narrow screens.
- Added reduced-motion behavior that removes continuous transition effects while preserving active section readability.

Validation:
- `npm.cmd test` passed with 24 tests.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages; this shell printed trailing esbuild cancellation/access noise after Astro completed, but the process exited 0.
- No-server Playwright/Edge smoke check passed: desktop rail displayed and advanced Signal -> Builds -> Contact during scroll; mobile rail was hidden; no horizontal overflow was detected at 390px; console errors were empty.
- `git diff --check` passed with line-ending warnings only.

### 2026-07-08 Final CTA Hierarchy Polish

Completed:
- Removed repeated public CTA links from the footer so contact actions live in the contact section, while the header stays focused on navigation plus compact Resume, GitHub, and LinkedIn access.
- Kept GitHub, SDE resume, LinkedIn, and email destinations unchanged in shared link data.
- Kept the Data Analyst resume unpublished and unexposed.
- Increased compact header icon hit areas slightly while preserving icon-only GitHub/LinkedIn accessible labels.

Validation:
- `npm.cmd test` passed with 23 tests.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages; this shell printed trailing esbuild cancellation/access noise after Astro completed, but the process exited 0.
- `git diff --check` passed with line-ending warnings only.

### 2026-07-08 Homepage Signal Corridor Polish

Completed:
- Added a CSS-only homepage signal corridor that links the major story beats: Signal, Proof Anchors, Featured Builds, Evolution, Systems Map, and Contact.
- Added compact numbered section markers without changing project claims, links, or evidence status.
- Kept the corridor static-first with no JavaScript, scroll hijacking, GSAP, WebGL, or new animation dependencies.
- Added reduced-motion handling so the node pulse is disabled for users who prefer reduced motion.

Validation:
- `npm.cmd test` passed with 23 tests.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages; this shell again printed trailing esbuild cancellation noise after Astro completed, but the process exited 0.
- `git diff --check` passed with line-ending warnings only.

### 2026-07-08 Hero Signal Visual Polish

Completed:
- Added a lightweight hero signal module that shows an abstract Model -> API -> Memory -> UI -> Proof chain.
- Added a compact role stack for AI systems, product workflows, local inference, and evidence-first work.
- Kept the existing proof-anchor links and did not add fake dashboards, fake terminals, fake metrics, fake screenshots, WebGL, GSAP, or JavaScript.

Validation:
- `npm.cmd test` passed with 23 tests.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages; this shell again printed trailing esbuild cancellation noise after Astro completed, but the process exited 0.
- `git diff --check` passed with line-ending warnings only.

### 2026-07-08 Project Page Density Polish

Completed:
- Replaced the case-study back link text with the smaller `← Featured work` link.
- Removed the repeated top publication-boundary aside from case-study pages.
- Consolidated limitations, still-to-verify items, and next proof into one compact `Evidence boundary` section.
- Kept Mahoraga prototype boundaries, Hybrid local-only benchmark limits, and The Loop collaborative ownership limits visible.

Validation:
- `npm.cmd test` passed with 23 tests.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages; this shell again printed trailing esbuild cancellation/access noise after Astro completed, but the process exited 0.
- `git diff --check` passed with line-ending warnings only.

### 2026-07-08 The Loop Visual Verification

Completed:
- Verified existing public The Loop workflow screenshots are already present under `public/assets/projects/the-loop/`.
- Confirmed events-list, event-detail, map-view, landing/login, and redacted profile/friends screenshots are already referenced from project data.
- Confirmed no additional screenshot import was needed from `C:\Users\adish\Pictures\Screenshots`; that directory was not available in this environment.
- Tightened existing The Loop public labels toward live-deployment, owner-captured, and prototype workflow evidence wording without changing claims.

Validation:
- `npm.cmd test` passed with 23 tests.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages; this shell again printed trailing esbuild cancellation/access noise after Astro completed, but the process exited 0.
- `git diff --check` passed with line-ending warnings only.

### 2026-07-08 Hybrid Observed Fallback Wording

Completed:
- Added safe public Hybrid wording for AJ's owner-observed CPU-only/offline fallback improvement from ~60-80s to ~5-13s.
- Kept the observed fallback note separate from the measured ONNX classifier/routing benchmark.
- Preserved blocks on formal endpoint latency, Qwen fallback latency benchmark, production SLA, cost, fallback-rate, and accuracy claims.

Validation:
- `npm.cmd test` passed with 24 tests.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages; this shell again printed trailing esbuild cancellation/access noise after Astro completed, but the process exited 0.
- `git diff --check` passed with line-ending warnings only.

### 2026-07-08 Favicon And OG Image Polish

Completed:
- Added a static AJ Signal Lab favicon at `public/favicon.svg`.
- Added a static portfolio Open Graph image at `public/og-image.svg`.
- Added base layout metadata for favicon, Open Graph, and Twitter summary image.
- Kept the assets abstract and claim-safe: no fake screenshots, fake metrics, generated people, or stock visuals.

Validation:
- `npm.cmd test` passed with 24 tests.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages; this shell again printed trailing esbuild cancellation noise after Astro completed, but the process exited 0.
- `git diff --check` passed with line-ending warnings only.

### 2026-07-08 Dependency Audit Safe Fix

Completed:
- Ran `npm.cmd audit`; sandboxed audit failed, then elevated audit completed.
- Initial current audit result: 12 vulnerabilities total, 9 moderate, 2 high, 1 critical.
- Ran non-force `npm.cmd audit fix`; it updated only transitive lockfile packages and reduced the audit result to 7 vulnerabilities total, 4 moderate, 2 high, 1 critical.
- Did not run `npm audit fix --force` because the remaining remediation requires a breaking Astro 7 upgrade.

Validation:
- `npm.cmd test` passed with 24 tests.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages; this shell again printed trailing esbuild cancellation noise after Astro completed, but the process exited 0.
- `git diff --check` passed with line-ending warnings only.

### 2026-07-08 Final Polish Screenshot Recapture

Completed:
- Started the Astro dev server on `http://127.0.0.1:4321/`.
- Captured final-polish screenshots for homepage desktop/mobile and Mahoraga, Hybrid, and The Loop desktop views under `docs/reviews/screenshots/`.
- Found and fixed mobile hero/header clipping before accepting the final mobile capture.
- Recorded capture dimensions and QA notes in `docs/22_SCREENSHOT_QA_REVIEW.md`.

Validation:
- `npm.cmd test` passed with 24 tests.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages; this shell again printed trailing esbuild cancellation noise after Astro completed, but the process exited 0.
- `git diff --check` passed with line-ending warnings only.

### 2026-06-17

Completed:
- Created the initial planning/specification document set.
- Locked primary identity as AI Systems Engineer.
- Locked secondary identity as Product Engineer.
- Defined Signal Lab visual direction.
- Defined homepage content architecture.
- Created portfolio risk audit.
- Created site blueprint, design system, and asset requirements.

Commit:
- `4689ddb` - `Add portfolio site sections and interactions`

### 2026-06-26

Completed:
- Created root `README.md`.
- Created `docs/00_READ_FIRST.md`.
- Created `docs/01_CURRENT_STATUS.md`.
- Created `docs/02_DECISIONS_LOG.md`.
- Created `docs/03_ARCHITECTURE.md`.
- Created `docs/04_DESIGN_SYSTEM.md`.
- Created `docs/05_CONTENT_ARCHITECTURE.md`.
- Created `docs/06_ASSET_TRACKER.md`.
- Created `docs/07_BACKLOG.md`.
- Created `docs/08_PROGRESS_LOG.md`.
- Created `docs/09_AI_HANDOFF.md`.
- Created `docs/10_PROJECT_EVIDENCE_REGISTRY.md`.
- Created `docs/11_LINK_REGISTRY.md`.
- Updated `ASSET_REQUIREMENTS.md` to distinguish Known, Verified, Missing, Needed, and Not applicable.

Status:
- Repository continuity system established.
- Evidence registry established.
- Known links recorded but not verified.
- Remote status was unresolved at that time; later resolved in the Featured Evidence Hardening Pass.

### 2026-06-26 Link Verification

Completed:
- Verified Mahoraga GitHub repo: `https://github.com/Atishay9828/meta_Mahoraga`.
- Verified Mahoraga Kaggle notebook: `https://www.kaggle.com/code/atishay9828/meta-mahoraga/edit`.
- Verified Mahoraga HuggingFace demo: `https://huggingface.co/spaces/MridulNegi2005/Project-Mahoraga`.
- Verified Hybrid GenAI Transaction Categorizer YouTube walkthrough: `https://youtu.be/fsTXVh9JpoE`.
- Verified The Loop Render deployment: `https://the-loop-5m7u.onrender.com/`.
- Updated `ASSET_REQUIREMENTS.md`, `docs/06_ASSET_TRACKER.md`, `docs/10_PROJECT_EVIDENCE_REGISTRY.md`, `docs/11_LINK_REGISTRY.md`, `docs/01_CURRENT_STATUS.md`, and `docs/09_AI_HANDOFF.md`.

Verification notes:
- Kaggle `/edit` URL loads via GET and exposes canonical notebook metadata, but HEAD returned 404.
- HuggingFace Space is public and correct, but runtime was sleeping at verification time.
- YouTube short URL redirects to the canonical watch URL.

Status:
- Known project evidence links are now Verified.
- Frontend implementation remained blocked at that time by non-public-ready global assets, missing screenshots/demos, missing role details, missing deeper proof artifacts, and remaining TODO deployment/evidence items.

### 2026-06-26 Identity and Repo Evidence Update

Completed:
- Recorded local resume PDF candidates: `E:\Downloads\ATISHAY_Software_Intern.pdf` and `E:\Downloads\ATISHAY_Data_Analyst.pdf`.
- Verified GitHub profile: `https://github.com/Atishay9828/`.
- Recorded LinkedIn as Known: `https://www.linkedin.com/in/atishay9828/`; automated verification was blocked by LinkedIn HTTP 999.
- Recorded email as Known: `ajain8_be23@thapar.edu`.
- Verified Hybrid GenAI Transaction Categorizer repo: `https://github.com/Atishay9828/Hybrid-GenAI-Transaction-Categorization`.
- Verified The Loop repo: `https://github.com/Atishay9828/TIET-LOOP`.
- Verified AI Resume Tailoring Engine repo: `https://github.com/Atishay9828/AI_Resume_Builder_ATS_Friendly`.
- Verified Webcam Motion Alert System repo: `https://github.com/Atishay9828/Webcam-Alert-App`.
- Updated `ASSET_REQUIREMENTS.md`, `docs/06_ASSET_TRACKER.md`, `docs/10_PROJECT_EVIDENCE_REGISTRY.md`, `docs/11_LINK_REGISTRY.md`, `docs/01_CURRENT_STATUS.md`, and `docs/09_AI_HANDOFF.md`.

Status:
- Global identity/contact assets are no longer Missing, but resume is not repo-local and LinkedIn remains Known rather than Verified.
- Frontend implementation remained blocked at that time by non-public-ready global assets, missing screenshots/demos, missing role details, missing deeper proof artifacts, and remaining TODO deployment/evidence items.

### 2026-06-26 Featured Project Evidence Pack

Completed:
- Created `docs/12_FEATURED_PROJECT_EVIDENCE_PACK.md`.
- Created Mahoraga diagram specs: `docs/diagrams/mahoraga-architecture.md` and `docs/diagrams/mahoraga-reward-system.md`.
- Created Hybrid Categorizer diagram specs: `docs/diagrams/hybrid-categorizer-routing.md` and `docs/diagrams/hybrid-categorizer-memory.md`.
- Created The Loop diagram specs: `docs/diagrams/the-loop-system.md`, `docs/diagrams/the-loop-realtime-flow.md`, and `docs/diagrams/the-loop-auth-flow.md`.
- Fixed stale Mahoraga wording so HuggingFace remains Verified while local demo media remains Needed.
- Added limitation notes for all three featured projects.
- Updated asset tracker, evidence registry, current status, backlog, and AI handoff.

Status:
- Diagram specs are Known, not Verified final frontend assets.
- Repo-contained screenshot/metric candidates are Known, not portfolio-local.
- Frontend implementation remained blocked at that time by visual review, portfolio-local screenshots/demos, role/contribution details, Hybrid benchmark/routing evidence, The Loop workflow walkthrough, and public-ready global assets.

### 2026-06-26 Featured Evidence Hardening Pass

Completed:
- Created `docs/13_FEATURED_EVIDENCE_REVIEW.md`.
- Created `docs/14_SCREENSHOT_IMPORT_PLAN.md`.
- Created `docs/15_HYBRID_BENCHMARK_AND_ROUTING_PLAN.md`.
- Created `docs/16_THE_LOOP_WORKFLOW_WALKTHROUGH.md`.
- Created `docs/17_RESUME_PUBLICATION_PLAN.md`.
- Reviewed every featured Mermaid/spec diagram for correctness, clarity, overclaiming, system boundaries, mobile readability, and frontend readiness.
- Verified GitHub CLI is installed and authenticated.
- Verified remote `origin` points to `https://github.com/Atishay9828/portfolio.git`.
- Verified GitHub repo `Atishay9828/portfolio` is Public, default branch is `master`, and README exists on GitHub.

Status:
- Limited Astro static scaffolding can begin as a conservative content shell.
- Production-ready UI polish remains blocked by portfolio-local screenshots/demos, role/contribution details, final rendered diagram QA, resume publication, and measured Hybrid benchmark/routing evidence.

### 2026-06-26 Astro Static Scaffold

Completed:
- Created Astro, TypeScript, Tailwind, and MDX project configuration.
- Added structured data files for links, evidence summary, featured projects, secondary projects, lab projects, timeline stages, capabilities, and routes.
- Implemented the static homepage in the locked order: Hero, Proof Strip, Featured Projects, Signal Evolution Timeline, Secondary Work, Lab Projects, Systems Map, About, Contact.
- Implemented basic static case-study shells for `/projects/mahoraga`, `/projects/hybrid-categorizer`, and `/projects/the-loop`.
- Added evidence-safe visual panels that clearly mark missing screenshots/demos/metrics/resume assets as pending instead of using fake placeholders.
- Added Vitest coverage for featured project ordering, verified-link CTAs, pending visual state, resume gating, and route definitions.
- Added `.gitignore` for generated Astro, dependency, and build output directories.

Validation:
- `npm.cmd test` passed.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages.

Status:
- Conservative static scaffold is complete.
- Production-ready UI polish, real visual assets, public resume CTA, role/contribution copy, and benchmark/metric claims remain blocked.

### 2026-06-26 First Implementation Review And Hardening Pass

Completed:
- Confirmed local `master` was aligned with `origin/master` before changes.
- Reviewed the Astro structure, data boundaries, evidence states, design-system constraints, accessibility, responsiveness, performance posture, and existing tests.
- Kept the existing proof-first architecture and avoided redesign, motion, WebGL, invented visuals, invented metrics, public resume links, and unverified public CTAs.
- Updated personal link data so LinkedIn and email remain Known references but are not active public CTAs until verified/public-ready.
- Kept GitHub active because it is Verified and kept resume disabled until a repo-local public resume exists.
- Hardened mobile wrapping and clipping behavior in the global CSS.
- Expanded Vitest coverage for featured project ordering, verified-link-only behavior, missing evidence states, required featured routes, and resume CTA gating.
- Captured desktop and mobile screenshot QA for `/`, `/projects/mahoraga`, `/projects/hybrid-categorizer`, and `/projects/the-loop` under `docs/reviews/screenshots/`.
- Ran `npm audit` and recorded 17 vulnerabilities: 14 moderate, 2 high, and 1 critical. Direct dependencies are affected; fixes require major dependency changes, so no non-breaking audit fix was applied.

Status:
- First implementation hardening pass is complete.
- Production-ready polish remains blocked by real assets, resume publication, LinkedIn/email verification, role/contribution detail, final diagram QA, and benchmark/workflow evidence.

### 2026-06-26 Evidence Import And Case-Study Hardening Pass

Completed:
- Confirmed local `master` was aligned with `origin/master` before changes.
- Verified documented candidate asset paths through the GitHub API before import.
- Imported Mahoraga candidate visuals into `public/assets/projects/mahoraga/`.
- Imported Hybrid Categorizer candidate screenshots into `public/assets/projects/hybrid-categorizer/`.
- Imported The Loop candidate screenshots into `public/assets/projects/the-loop/`.
- Kept all imported visuals as Known candidates that need final visual/privacy review.
- Hardened featured case-study pages with documented what-was-built, architecture, decisions, evidence status, limitations, missing proof, and next-evidence sections.
- Added Mahoraga reward-system proof framing, Hybrid benchmark-pending routing table structure, and The Loop workflow sections.
- Expanded tests to verify imported asset paths, disabled public CTAs, case-study content, limitations, missing proof, and pending benchmark state.

Status:
- First evidence import is complete, but production polish remains blocked.
- Resume publication remains Decision Needed; no resume was copied into the repo.
- Hybrid benchmark examples and all measured latency/cost claims remain pending.

### 2026-06-27 Imported Asset Visual And Privacy Review

Completed:
- Created `docs/18_IMPORTED_ASSET_REVIEW.md`.
- Reviewed all imported Mahoraga, Hybrid Categorizer, and The Loop assets for project match, readability, privacy risk, misleading content, and resolution.
- Approved Mahoraga `dashboard_preview.png` for homepage/case-study visual use.
- Approved Mahoraga `stitch_aero_screenshot.png` and The Loop `interest_selection.png` for case-study-only use.
- Marked Mahoraga `training_metrics.png` Candidate only; metric claims remain blocked until methodology/evaluation interpretation exists.
- Marked Hybrid `predict.png`, Hybrid `memory.png`, and The Loop `landing_page.jpg` Replace before polish.
- Marked Hybrid `categories.png`, `history.png`, and `memory.png` as needing redaction or explicit sample-data labeling.
- Updated asset/status docs and project data notes without activating resume, LinkedIn, or email CTAs.

Status:
- Imported asset review is complete.
- Production polish remains blocked by replacement screenshots, redaction/sample labeling, missing demos/workflow screenshots, role/contribution details, diagram QA, and Hybrid benchmark evidence.

### 2026-06-27 Hybrid Sample-Data Visual Proof

Completed:
- Confirmed local `master` was aligned with `origin/master` before changes.
- Cloned the verified Hybrid GenAI Transaction Categorizer repo into `C:\tmp\Hybrid-GenAI-Transaction-Categorization` because no local checkout was found in the portfolio workspace.
- Installed and ran the Hybrid frontend locally on `http://127.0.0.1:5174/`.
- Replaced `public/assets/projects/hybrid-categorizer/predict.png` with a running-frontend prediction-flow screenshot using synthetic input `demo cafe payment 750`.
- Replaced `public/assets/projects/hybrid-categorizer/memory.png` with a running-frontend Merchant Memory screenshot using synthetic merchants `Demo Cafe` and `Sample Transit`.
- Reviewed `categories.png` and `history.png`; kept them as case-study candidates only with explicit sample/demo transaction labeling required in site copy/data.
- Updated project data and evidence docs to state that Hybrid screenshots use safe demo/sample data and do not prove backend benchmark, latency, cost, fallback-rate, or model-output claims.

Blocked / caveat:
- Full backend/model-output capture was not completed because the cloned verified repo did not include `models/distilbert.onnx`. The replacement screenshots are frontend UI proof with controlled synthetic `/predict` responses, not end-to-end inference proof.

Status:
- Hybrid `predict.png` and `memory.png` replacement is complete for safe sample-data UI proof.
- Hybrid production polish remains blocked by measured benchmark/routing evidence, diagram revisions, role/contribution details, deployment status, and optional end-to-end backend/model-output capture.

### 2026-06-28 Hybrid Routing Proof Without Benchmark Claims

Completed:
- Confirmed local `master` was aligned with `origin/master` before changes.
- Inspected the available verified Hybrid checkout under `C:\tmp\Hybrid-GenAI-Transaction-Categorization`.
- Confirmed documented sample transactions: `dominos order 750`, `bharat petrol payment 500`, `smart class monthly 899`, and `volvo bus booking 1200`.
- Confirmed `data/categories.json` documents `confidence_threshold` as `0.90`.
- Confirmed merchant-map/code support for merchant override behavior where clear, and marked unsupported category/route fields as `Unknown`.
- Confirmed no benchmark script/results were available from the local scan.
- Confirmed local backend/model benchmark execution was blocked in the inspected `C:\tmp` clone because `models/distilbert.onnx` was missing there.
- Created `docs/19_HYBRID_ROUTING_PROOF.md`.
- Added sample/unmeasured Hybrid routing rows to the case-study data.
- Updated project/docs status to keep latency, cost, fallback-rate, and model-output claims blocked.
- Recorded The Loop workflow screenshots as temporarily blocked by a deployment/server access issue; teammate/friend with access will fix later.

Status:
- Hybrid now has safe routing proof for architecture/case-study context.
- Hybrid benchmark status remains pending.
- The Loop remains featured because repo/deployment links are verified, but workflow screenshot polish remains blocked.

### 2026-06-28 Hybrid ONNX Runtime Asset Correction

Completed:
- Searched for `distilbert.onnx` before treating benchmark execution as blocked by a missing model.
- Found local ONNX files at `D:\distilbert.onnx` and `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx`.
- Recorded the Hybrid repo copy as the benchmark verification candidate: `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx`, 267,956,781 bytes.
- Confirmed the Hybrid repo copy is inside the Hybrid repo, outside the portfolio repo, not Git-tracked, and ignored by `.gitignore` via `**/models/`.
- Confirmed no `distilbert.onnx` copy exists inside the portfolio repo.

Status:
- The previous missing-model blocker is corrected.
- Hybrid benchmark/model-output evidence is still not Verified because the benchmark has not been executed.
- `distilbert.onnx` should remain uncommitted and must not be copied into the portfolio repo.

### 2026-06-30 Hybrid Local Benchmark Results

Completed:
- Confirmed local `master` was aligned with `origin/master` before changes.
- Inspected the Hybrid backend runtime: FastAPI entrypoint `backend/main.py`, `/predict` endpoint, prediction logic in `backend/classify.py`, preprocessing in `backend/preprocessing.py`, merchant-map persistence in `backend/feedback.py`, Qwen fallback in `backend/reasoner.py` and `backend/llm.py`, threshold in `data/categories.json`, and dependencies in `requirements.txt`.
- Confirmed the model path used for measurement: `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx`.
- Installed temporary benchmark dependencies under `C:\tmp\hybrid-bench-deps`; no portfolio or Hybrid repo dependency files were changed.
- Ran a read-only ONNX classifier/routing benchmark with 20 measured runs and 5 warmup runs per sample.
- Created `docs/20_HYBRID_BENCHMARK_RESULTS.md`.
- Updated Hybrid case-study data with measured local rows for `dominos order 750`, `bharat petrol payment 500`, `smart class monthly 899`, and `volvo bus booking 1200`.
- Kept Qwen fallback latency, cost, fallback-rate, endpoint latency, production SLA, and accuracy claims blocked.
- Confirmed the Hybrid repo remained clean after the benchmark and no `distilbert.onnx` file was copied into the portfolio repo.

Status:
- Hybrid now has local classifier/routing benchmark evidence.
- Full endpoint and Qwen fallback benchmarking remain blocked/pending.
- The measured values are local-only and must not be framed as production performance.

### 2026-06-30 Hybrid History AI Insight Evidence Review

Completed:
- Inspected the Hybrid History frontend source in `D:\Hybrid-GenAI-Transaction-Categorization\frontend\src\pages\History.jsx`, `HistoryCard.jsx`, `HistoryPanel.jsx`, and `HistoryStore.js`.
- Confirmed the AI Insight UI appears only after one History transaction is opened.
- Confirmed the opened panel calls `POST http://127.0.0.1:8000/transaction-insight`.
- Confirmed the insight request includes the selected transaction plus up to three recent same-category history entries.
- Re-reviewed `public/assets/projects/hybrid-categorizer/history.png` and confirmed it shows the History list, category confidence, and route tags, but not the opened AI Insight panel or an in-image sample/demo label.
- Created `docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md`.
- Updated asset/status/evidence docs and project data to keep the current screenshot as limited case-study evidence only.

Blocked / caveat:
- Replacement screenshot capture was not completed because the available Python runtime did not have the Hybrid backend dependencies installed and no repo-local virtual environment was present.
- A replacement or supplemental screenshot remains Needed if the portfolio uses History AI insights as visual evidence.

Status:
- History AI Insight behavior is source-backed.
- Current `history.png` is not AI Insight screenshot proof.
- Any future capture must use safe sample/demo data and a real generated `/transaction-insight` response.

### 2026-06-30 Conservative Static Shell Design-System Polish

Completed:
- Confirmed local `master` was aligned with `origin/master` before changes.
- Preserved the evidence boundaries: no GSAP, WebGL, scroll animations, invented screenshots, invented benchmark claims, invented role details, or activated resume/LinkedIn/email CTAs.
- Tightened global visual rhythm, section separation, dark surface layering, typography hierarchy, focus states, and responsive constraints.
- Sharpened the hero identity and made the three proof anchors direct case-study links.
- Improved featured project visual hierarchy with status-aware evidence panels and small visual-candidate previews while keeping Known/Pending states explicit.
- Improved case-study readability and highlighted the Hybrid benchmark as local classifier/routing evidence only, not production SLA or endpoint/fallback proof.
- Kept timeline, secondary work, lab projects, and systems map visually subordinate to featured work.

Validation:
- `npm.cmd test` passed.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages.

Screenshot QA:
- Fresh screenshot recapture was attempted against rebuilt static output.
- Astro dev server was blocked by sandboxed telemetry/AppData access and Vite parent-directory access errors.
- Static build serving worked, but Chrome and Edge headless screenshot capture failed with GPU-process errors before reliable updated PNG output.
- Existing earlier screenshots remain under `docs/reviews/screenshots/`; updated recapture remains Needed.

Status:
- Conservative static polish is complete.
- Production launch remains blocked by missing screenshots/demos, role/contribution details, resume publication, LinkedIn/email readiness, diagram QA, The Loop screenshot access, Hybrid AI Insight screenshot proof, and full Hybrid endpoint/Qwen fallback benchmark evidence.

### 2026-07-01 Polished Screenshot QA Recapture

Completed:
- Confirmed the working tree was clean before screenshot work.
- Confirmed `docs/22_MAHORAGA_README_DATA.md` was absent, so there was no untracked Mahoraga evidence file to inspect or commit.
- Re-ran validation with `npm.cmd test` and `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build`.
- Confirmed Astro preview works in foreground at `http://127.0.0.1:4321/`.
- Worked around unreliable background preview launch by serving the built `dist/` output with the bundled Python static server.
- Captured fresh polished screenshots with Microsoft Edge headless and GPU-safe flags.
- Created `docs/22_SCREENSHOT_QA_REVIEW.md`.
- Added the following files under `docs/reviews/screenshots/`:
  - `homepage-desktop-polished.png`
  - `homepage-mobile-polished.png`
  - `mahoraga-desktop-polished.png`
  - `hybrid-desktop-polished.png`
  - `the-loop-desktop-polished.png`

Validation:
- `npm.cmd test` passed.
- `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build` passed and generated 4 static pages.

Status:
- Fresh polished screenshot QA is complete.
- Production launch remains blocked by resume publication, LinkedIn/email readiness, role/contribution details, final diagram QA, missing demos/workflow screenshots, The Loop replacement screenshots, Hybrid AI Insight screenshot proof, and full Hybrid endpoint/Qwen fallback benchmark evidence.

### 2026-07-01 Featured Case-Study Copy Polish

Completed:
- Confirmed local `master` was clean and aligned with `origin/master` before changes.
- Polished Mahoraga case-study copy around adaptive-agent environment design, curriculum pressure, reward-loop proof, reward-hacking limits, and next evidence.
- Polished Hybrid case-study copy around merchant override, local ONNX classification, fallback routing, local benchmark scope, History AI Insight screenshot limits, and blocked endpoint/Qwen/cost/fallback-rate/accuracy claims.
- Polished The Loop case-study copy around campus-event coordination, persisted workflow state, RSVP/join, friends/chat/carpool flow, and deployment/screenshot limitations.
- Improved case-study page labels from generic status headings to evidence-bound proof, architecture, limitation, and next-proof labels.
- Preserved pending role/contribution details, Known visual asset status, local-only Hybrid benchmark framing, blocked The Loop workflow screenshots, and disabled resume/LinkedIn/email CTAs.

Status:
- Featured case-study copy is sharper, but no evidence status was promoted.
- Production launch remains blocked by public contact assets, role/contribution details, final diagram QA, remaining screenshots/demos, The Loop deployment/server screenshot access, Hybrid AI Insight screenshot proof, and full Hybrid endpoint/Qwen fallback benchmark evidence.

### 2026-07-03 Role Contribution Evidence Framework

Completed:
- Confirmed local `master` was clean and aligned with `origin/master` before changes.
- Created `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md` for Mahoraga, Hybrid GenAI Transaction Categorizer, and The Loop.
- Recorded current project summaries, documented contribution evidence, unclear contribution areas, AJ question sets, safe pending wording, unsafe wording to avoid, and launch readiness status.
- Updated featured project data so visible contribution copy says final owner review and role-split confirmation are still required.
- Added tests to keep featured project contribution claims pending and reject accidental `I built`, `my role`, `personally built`, `I led`, or `I owned` claims in featured project data.

Status:
- Role/contribution framework is complete.
- No personal contribution, teammate role split, ownership, leadership, module ownership, or solved-issue claim was added.
- Production launch remained blocked until AJ answered the project-by-project contribution questions with evidence; this was resolved for safe public wording in the following owner-reviewed contribution pass, while exact ownership and benchmark limits remain blocked where noted.

### 2026-07-03 Owner-Reviewed Contribution Wording

Completed:
- Converted AJ's role/contribution answers into safe public wording for Mahoraga, Hybrid GenAI Transaction Categorizer, and The Loop.
- Added structured contribution data to featured project records: role label, contribution summary, contribution bullets, collaborative scope, and still-to-verify items.
- Rendered contribution sections on case-study pages with `My contribution`, `Collaborative scope`, and `Still to verify`.
- Updated tests so Hybrid may use solo/end-to-end/full-stack wording, Mahoraga may describe AJ-owned adaptive backend/game-system, reward/training, and LLM/backend integration work, and The Loop remains collaborative without exact solo module ownership.
- Preserved guardrails against unsupported metrics, screenshots, production SLA, endpoint/Qwen/cost/fallback-rate/accuracy claims, and public mention of the late YouTube submission or failure to qualify.

Status:
- Featured contribution wording is now public-ready within the documented caveats.
- Mahoraga exact file/module ownership remains not mapped.
- The Loop exact module ownership remains collaborative/not separated.
- Hybrid endpoint latency, Qwen fallback latency, cost, fallback-rate, and accuracy remain blocked.

### 2026-07-03 SDE Resume CTA Publication

Completed:
- Confirmed local `master` was clean and aligned with `origin/master` before changes.
- Checked SDE resume metadata without editing the PDF: `E:\Downloads\ATISHAY_Software_Intern.pdf`, `.pdf`, 55,900 bytes, last modified `2026-07-01 21:40:57 +05:30`.
- Copied the selected SDE resume to `public/resume/atishay-jain-sde-resume.pdf`.
- Activated the public resume CTA at `/resume/atishay-jain-sde-resume.pdf` in shared link data, the hero, the contact section, and the header.
- Kept GitHub active and kept LinkedIn/email inactive because they remain Known rather than Verified public-ready.
- Did not publish the Data Analyst resume.

Status:
- Primary SDE resume CTA is public-ready.
- Remaining public CTA blockers are LinkedIn manual verification and preferred public email confirmation.

### 2026-07-03 Public Contact CTA Activation

Completed:
- Activated owner-approved LinkedIn CTA at `https://www.linkedin.com/in/atishay9828/`.
- Activated owner-approved email CTA at `mailto:ajain8_be23@thapar.edu`.
- Kept GitHub active and kept the SDE resume active at `/resume/atishay-jain-sde-resume.pdf`.
- Kept the Data Analyst resume unpublished and unexposed.
- Updated header/navigation, contact section, and footer link surfaces without adding LinkedIn/email to the hero CTA row.

Status:
- Public contact CTAs are now active for GitHub, SDE resume, LinkedIn, and email.
- Remaining launch blockers are project evidence, visual assets, workflow screenshots, Hybrid endpoint/Qwen fallback proof, dependency audit remediation, and final launch QA.

### 2026-07-04 Launch Readiness Audit

Completed:
- Created `docs/24_LAUNCH_READINESS_AUDIT.md`.
- Audited generated pages for `/`, `/projects/mahoraga/`, `/projects/hybrid-categorizer/`, and `/projects/the-loop/`.
- Confirmed generated local page, image, stylesheet, and resume paths resolve inside `dist/`.
- Classified launch readiness as 72/100: conditionally ready for conservative soft launch, blocked for polished/final launch.
- Clarified that public CTAs are no longer launch blockers; visual/proof blockers remain.
- Updated stale global contact status in `ASSET_REQUIREMENTS.md`.
- Added a caveat that `docs/reviews/screenshots/*-polished.png` predate the latest CTA and contribution-section updates.

Status:
- The Loop visuals/workflow screenshots, Hybrid AI Insight screenshot, diagram QA, current screenshot recapture, deeper Hybrid endpoint/Qwen proof, and dependency audit remediation remain the key final-launch blockers.

### 2026-07-06 The Loop Visual Evidence Update

Completed:
- Imported owner-provided live-deployment screenshots from `https://the-loop-5m7u.onrender.com/` into `public/assets/projects/the-loop/`.
- Chose `the-loop-events-list-live.png` as the primary public visual.
- Added supporting public visuals for event detail, map view, landing/login, and redacted profile/friends views.
- Redacted the profile contact area and friends sent-request username before publishing those screenshots under `public/assets`.
- Updated The Loop project data, labels, alt text, evidence status, and tests without adding production-readiness, active-user, SLA, or exact module-ownership claims.
- Kept the Data Analyst resume unpublished and left approved GitHub, SDE resume, LinkedIn, and email CTAs unchanged.

Status:
- The Loop visual blocker is materially improved and no longer depends on the earlier deployment/server access issue for public-safe workflow visuals.
- Raw profile/friends captures remain excluded from public use.
- Hybrid fallback timing remains anecdotal only: owner reported roughly 10 seconds on laptop hardware, but it is not repeatably benchmarked and is not used as public performance copy.
- Polished/final launch still needs Hybrid AI Insight visual proof, diagram QA, current screenshot QA, deeper Hybrid endpoint/Qwen proof if performance claims are desired, dependency audit remediation, and final launch QA.

### 2026-07-07 Public Link Icon Polish

Completed:
- Added local inline SVG icons for GitHub, LinkedIn, email, SDE resume, and the subtle Featured work arrow without adding a new icon dependency.
- Updated the header, hero CTA row, contact section, and footer so approved public CTAs are easier to scan while keeping text labels visible.
- Kept all public CTA destinations unchanged: GitHub, SDE resume, LinkedIn, and email still resolve from the approved shared link data.
- Kept the Data Analyst resume unpublished and unexposed.

Status:
- This was visual/discoverability polish only; no evidence states, claims, or link destinations changed.

### 2026-07-07 Public Link Icon Simplification

Completed:
- Simplified compact public CTA areas after owner feedback that the header/footer labels felt repetitive.
- Kept text labels in the main navigation and contact section, while making GitHub/LinkedIn icon-only in the header and GitHub/LinkedIn/email icon-only in the footer.
- Kept Resume as the only visible text CTA in compact header/footer surfaces.
- Preserved all approved public CTA destinations and kept the Data Analyst resume unpublished.

Status:
- Presentation cleanup only; no link destinations, evidence states, claims, or public assets changed.

### 2026-07-10 Learning Story And Signal Architecture Pass

Completed:
- Ran independent content/story, visual-motion, and implementation/QA streams in separate Git worktrees.
- Added `docs/34_PORTFOLIO_STORY_AND_LEARNING_PLAN.md`, `docs/35_VISUAL_MOTION_DIRECTION.md`, and `docs/36_IMPLEMENTATION_AND_QA_PLAN.md`.
- Reframed About around learned engineering principles and added one distinct evidence-safe lesson to each featured project.
- Centralized the seven journey states in `src/data/journey.ts` and rendered navigation/readouts from that contract.
- Moved the Signal Core into a reserved sticky desktop lane so it cannot cover proof content.
- Added progressive-enhancement fallbacks, one main landmark, skip navigation, larger navigation targets, and keyboard mascot resizing.
- Captured the verified homepage into Figma at `https://www.figma.com/design/bjHX9mvjM57LPTfJ3fJAEh?node-id=1-2`.

Validation:
- `npm.cmd test`: 43/43 passed.
- `npm.cmd run build`: Astro check reported 0 errors, warnings, or hints; four pages generated.
- `git diff --check`: clean apart from existing line-ending notices.
- Browser checks passed at 1440px, 1200px, 900px, and 390px with no horizontal overflow or console errors.
- Signal Path click travel activated Systems state 06 and updated `aria-current`.

Status:
- The learning-story foundation and first visual implementation are complete.
- Remaining work is performance/media hardening, deeper project proof, final screenshot evidence, dependency upgrades, and deployment/launch QA.

### 2026-07-11 Identity And Featured-Project Polish

Completed:
- Changed public identity copy and page metadata to `Atishay Jain` while preserving `AJ` as the visual monogram.
- Raised the mascot control layer above homepage content so the speech bubble no longer sits behind the hero heading.
- Removed repeated homepage highlight bullets and boundary copy from featured modules; retained evidence-safe details in structured project data and case-study pages.
- Rebuilt the three featured case-study routes around project signal, reviewed visual proof, system/build detail, ownership, engineering decisions, and explicit limitations.
- Tightened the mobile header into a predictable two-row navigation grid.

Validation:
- `npm.cmd test`: 45/45 passed.
- `npm.cmd run build`: Astro check reported 0 errors, warnings, or hints; four pages generated.
- `git diff --check`: clean apart from existing line-ending notices.
- Desktop homepage, featured-project, and Mahoraga case-study browser checks showed no horizontal overflow; mobile Mahoraga check also showed no horizontal overflow.
- Reviewed project assets keep their existing Known/Verified statuses; no new asset or performance claims were introduced.

## 2026-07-14 Resume Readability And Site Refresh

Completed:
- Rebuilt the public SDE resume as a reproducible, ATS-friendly one-page PDF with larger text and clearer section rhythm.
- Added the live portfolio link, updated CGPA to 8.00, and distilled the evidence-derived website toolkit into reusable engineering capabilities for the resume.
- Replaced dense repeated project bullets with concise evidence-safe summaries and removed unsupported Mahoraga performance numbers.
- Published the same generated PDF to both `output/pdf/` and the site resume path under `public/resume/`.
