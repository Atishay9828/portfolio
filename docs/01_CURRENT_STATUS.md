# 01_CURRENT_STATUS.md

Date: 2026-07-13

## Current Phase

Astro static portfolio release candidate is in final production validation. Evidence hardening, learning-story implementation, responsive/browser QA, production metadata, static route discovery, asset optimization, and browser-security configuration are implemented; Vercel preview and production verification remain the active release steps.

2026-07-13 production-release addendum:
- The unsupported Mahoraga training chart was removed from the rendered case study and public output because methodology/evaluation interpretation remains incomplete.
- The Loop map and event-detail evidence images were re-encoded as visually reviewed WebP assets at 224,682 and 117,952 bytes respectively, both below the 500KB single-raster budget.
- The twelve mascot frames were losslessly re-encoded as WebP and non-idle states are no longer marked eager.
- Superseded/unrendered public assets and placeholder `.gitkeep` files were removed from the deployable output; Git history remains the archive.
- Canonical/Open Graph support, a PNG social card, custom 404, robots, sitemap, and Vercel security headers were added for release validation.

The strategy, positioning, content architecture, risk audit, site blueprint, design system, asset requirements, continuity docs, evidence registry, featured evidence pack, diagram specs, evidence review, screenshot/import plan, Hybrid benchmark plan, Hybrid routing proof, Hybrid local benchmark results, The Loop workflow walkthrough, The Loop visual evidence update, resume publication plan, role/contribution evidence framework, owner-reviewed contribution wording, and conservative Astro scaffold exist.

2026-07-10 learning-story addendum:
- The homepage argument now centers on what AJ learned across complete systems: contracts, routed uncertainty, persisted workflows, adaptive constraints, and proof as part of engineering.
- About is an operating-principles section rather than a biography block.
- Each featured project has one distinct evidence-safe `What I learned` statement.
- The approved journey is Signal, About, Builds, Evolution, Toolkit, Systems, Contact; Secondary and Lab stay supporting material inside the Systems-to-Contact span.
- `src/data/journey.ts` is the single source of truth for journey order, labels, section ids, and Signal Core readouts.
- The Signal Core is sticky in a reserved desktop column at 1180px and above; it is hidden below that breakpoint so it cannot cover content.
- The document now has one `main`, a skip link, progressive-enhancement fallbacks, 44px navigation targets, and keyboard-accessible mascot resizing.
- Integrated browser checks passed at desktop, breakpoint, tablet, and mobile widths with no horizontal overflow or console errors.
- The verified homepage implementation was captured into Figma at `https://www.figma.com/design/bjHX9mvjM57LPTfJ3fJAEh?node-id=1-2`.

2026-07-11 identity and project-page polish addendum:
- Public identity text and metadata now use `Atishay Jain`; `AJ` remains only as the visual monogram on the logo, mascot, Signal Core, favicon, and social image.
- The mascot gutter now owns a higher stacking layer so its speech bubble renders above hero copy.
- Featured homepage modules now use one short system summary, three stack tags, one learning statement, proof actions, and compact evidence instead of repeating a three-bullet summary and boundary note.
- Featured case-study routes now lead with project signal and visual proof, then use editorial build, ownership, engineering-decision, and boundary sections without repeating the homepage module.

2026-07-09 deep-screening addendum:
- Public UI copy has been cleaned so recruiter-facing pages no longer show large missing-proof, text-only, candidate-visual, launch-selection, or internal backlog language.
- Pending proof and future evidence work now live in `docs/29_PENDING_FEATURES_AND_EVIDENCE.md` instead of public cards.
- About appears immediately after the hero; Contact remains near the bottom.
- Homepage Signal Journey order is Signal, About, Builds, Evolution, Toolkit, Systems, Contact.
- Hybrid public data now reflects local `/predict` and offline Qwen fallback examples while keeping deployment, dataset accuracy, fallback-rate, zero-compute-cost, and hosted-production latency claims out of public copy.
- The Loop now includes `public/assets/projects/the-loop/the-loop-system-diagram.svg` as a repo-backed topology asset, not scale, reliability, or ownership proof.
- Toolkit rendering is backed by `src/data/toolkit.ts` and documented in `docs/30_TECH_STACK_EVIDENCE.md`.

First implementation review status:
- Architecture remains clean enough for the next milestone: project/link/evidence data is centralized, route definitions are data-driven, and homepage/case-study rendering is separated into section/project components.
- Personal CTAs are now gated by verified/owner-approved destinations. GitHub remains active, the SDE resume is active from the repo-local PDF, LinkedIn is active at the owner-approved public profile, and email is active as the owner-approved `mailto:` contact.
- Responsive CSS was hardened for mobile wrapping and viewport clipping without changing the site structure or adding motion.
- Screenshot QA was captured under `docs/reviews/screenshots/` for desktop and mobile views.
- `npm audit` currently reports 17 vulnerabilities: 14 moderate, 2 high, and 1 critical. Direct dependencies are affected (`@astrojs/check`, `@astrojs/mdx`, `astro`, `vitest`), but available fixes require major version changes, so no automatic fix was applied.

First evidence import and case-study hardening status:
- Documented external repo assets were imported into `public/assets/projects/...` as Known candidates, not final Verified polished visuals.
- Featured case-study pages now render sharper evidence-bound sections for problem/build, architecture, decisions, proof status, limitations/tradeoffs, missing proof, and next proof needed.
- Mahoraga now frames the project around adaptive-agent environment design, curriculum pressure, and reward-loop constraints without robust-performance or win-rate claims.
- Hybrid now explains merchant override vs local ONNX vs fallback routing more clearly, while cost, fallback-rate, endpoint latency, Qwen fallback latency, accuracy, and production SLA claims remain blocked.
- The Loop now frames the product as a campus coordination workflow across discovery, RSVP/join, friends/chat/carpool, admin, and edge cases. Owner-provided live-deployment screenshots now support events-list, event-detail, map-view, landing/login, and redacted profile/friends visual states.
- Role/contribution copy now uses owner-reviewed public wording for the featured projects while keeping exact module ownership and unsupported benchmark/performance claims blocked.
- `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md` records owner-reviewed role labels, public contribution summaries, collaborative scope, still-to-verify items, and unsafe wording to avoid.

Conservative design-system polish status:
- Global spacing, section rhythm, dark surface layering, focus states, and responsive wrapping were tightened without adding GSAP, WebGL, scroll animations, purple/blue gradients, blobs, fake screenshots, fake metrics, or public pending CTAs.
- Hero identity copy was sharpened and proof anchors now link to the three case-study shells. The SDE resume CTA is active; LinkedIn and email are active in the contact/navigation surfaces without overcrowding the hero.
- Featured project modules now show status-aware evidence panels and small visual-candidate previews while keeping every asset labeled as Known rather than Verified proof.
- Case-study pages now frame Hybrid benchmark evidence as a local classifier/routing benchmark only, not a production SLA or endpoint/fallback benchmark.
- Timeline, secondary work, lab projects, and systems map remain visually smaller than featured work.
- Fresh polished screenshot QA was captured on 2026-07-01 under `docs/reviews/screenshots/` after serving the rebuilt static output and using Microsoft Edge headless with GPU-safe flags. Review notes live in `docs/22_SCREENSHOT_QA_REVIEW.md`. Those screenshots remain useful as layout QA, but they predate the 2026-07-03 CTA and contribution-section updates.
- Final proof/visual launch-readiness audit was added on 2026-07-04 in `docs/24_LAUNCH_READINESS_AUDIT.md`; The Loop visual evidence was updated on 2026-07-06 in `docs/25_THE_LOOP_VISUAL_EVIDENCE_UPDATE.md`. Current score estimate is 82/100: conditionally ready for conservative soft launch, still blocked for polished/final launch by remaining proof gaps rather than CTA readiness.

Imported asset visual/privacy review status:
- Review results are recorded in `docs/18_IMPORTED_ASSET_REVIEW.md`.
- Mahoraga `dashboard_preview.png` is approved for homepage/case-study visual use.
- Mahoraga `stitch_aero_screenshot.png` and The Loop `interest_selection.png` are approved for case-study-only support.
- Mahoraga `training_metrics.png` remains Candidate only; no metric claims may be published without methodology/evaluation interpretation.
- Hybrid `predict.png` and Hybrid `memory.png` were replaced on 2026-06-27 with local captures from the verified Hybrid frontend using synthetic demo transactions.
- Hybrid `categories.png` and `history.png` remain case-study candidates only and must be explicitly labeled as sample/demo transaction data if used.
- Hybrid History AI Insight behavior is documented in `docs/21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md`: click one transaction in History to open a side panel that calls `POST /transaction-insight` and summarizes that transaction plus recent same-category history. The current `history.png` does not show this opened panel, so AI Insight screenshot proof remains Needed.
- Hybrid safe routing proof was added on 2026-06-28 in `docs/19_HYBRID_ROUTING_PROOF.md`; local classifier/routing benchmark results were added on 2026-06-30 in `docs/20_HYBRID_BENCHMARK_RESULTS.md`.
- The Loop weak `landing_page.jpg` is superseded by `the-loop-landing-live.png`.
- The Loop workflow screenshot blocker is resolved for public-safe events-list, event-detail, map-view, landing/login, and redacted profile/friends views. Raw profile/friends screenshots remain excluded from public use.
- Hybrid replacement screenshots are frontend UI proof only; the local benchmark used `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx` outside this repo. The model was not copied into this portfolio repo.

## Frontend Implementation Allowed?

Limited Astro static scaffolding: Completed for the homepage and three featured case-study shells.

Production-ready UI polish: No.

Reason:
- Static scaffolding can use conservative copy, verified links, source-of-truth docs, and placeholder-free content structure.
- Global contact CTAs are Verified or owner-approved and active: GitHub, SDE resume, LinkedIn, and email. Production polish remains blocked by project evidence and visual proof rather than public contact links.
- Featured project evidence is documented enough for a first static shell, but portfolio-local screenshots/demos, role/contribution details, final rendered diagram QA, and deeper proof artifacts are not ready.

## Current Blockers

| Blocker | Status | Impact |
|---|---|---|
| GitHub remote | Verified | `origin` points to `https://github.com/Atishay9828/portfolio.git`; `origin/master` exists. |
| GitHub repository health | Verified | `gh repo view` confirms `Atishay9828/portfolio`, default branch `master`, visibility `PUBLIC`; README exists on GitHub. |
| Resume PDF | Verified | Primary SDE resume copied from `E:\Downloads\ATISHAY_Software_Intern.pdf` to `public/resume/atishay-jain-sde-resume.pdf` on 2026-07-03. Data Analyst resume was not published. |
| GitHub profile URL | Verified | Global identity link available. |
| LinkedIn URL | Verified | Owner-approved public CTA active at `https://www.linkedin.com/in/atishay9828/`; automated LinkedIn verification was previously blocked by HTTP 999. |
| Email address | Verified | Owner-approved public CTA active at `mailto:ajain8_be23@thapar.edu`. |
| Known project links | Verified | Known project links were checked on 2026-06-26. |
| Additional project repo links | Verified | Hybrid Categorizer, The Loop, AI Resume Tailoring Engine, and Webcam Motion Alert repos were verified on 2026-06-26. |
| Featured project diagram review | Known | Spec-level review exists in `docs/13_FEATURED_EVIDENCE_REVIEW.md`; final rendered/mobile QA is still required before production polish. |
| Featured project screenshots/demos | Known/Needed/Missing | Hybrid prediction-flow and merchant-memory UI screenshots now exist as safe sample-data portfolio-local assets; The Loop now has owner-provided public-safe live-deployment screenshots for events-list, event-detail, map-view, landing/login, and redacted profile/friends states. Mahoraga demo media and final screenshot/demo coverage are still required before final polished launch. |
| Role/contribution details | Known/Partial | AJ supplied owner-reviewed role/contribution wording for featured projects; exact Mahoraga file/module ownership and The Loop module ownership remain not mapped/separated. |
| Role/contribution evidence framework | Known | `docs/23_ROLE_CONTRIBUTION_EVIDENCE.md` defines safe owner-reviewed wording, collaborative scope, still-to-verify items, and unsafe wording to avoid. |
| Hybrid benchmark/routing evidence | Known/Partial | Sample routing proof exists in `docs/19_HYBRID_ROUTING_PROOF.md`; local read-only ONNX classifier/routing benchmark results exist in `docs/20_HYBRID_BENCHMARK_RESULTS.md`. Full FastAPI endpoint latency, Qwen fallback latency, cost, fallback-rate, and production SLA claims remain Needed/blocked. |
| The Loop workflow walkthrough | Known/Partial | Draft workflow source exists in `docs/16_THE_LOOP_WORKFLOW_WALKTHROUGH.md`; owner-provided live-deployment screenshots now cover the public-safe visual states, but manual reliability verification, admin proof, and stronger social/realtime proof remain incomplete. |
| Astro static scaffold | Verified | Homepage and `/projects/mahoraga`, `/projects/hybrid-categorizer`, `/projects/the-loop` build successfully. Verified locally on 2026-06-26 with `npm.cmd test` and `ASTRO_TELEMETRY_DISABLED=1 npm.cmd run build`. |
| First implementation hardening pass | Verified | Evidence-gating, test coverage, responsive CSS hardening, screenshot QA, and dependency audit completed on 2026-06-26. |
| Dependency audit | Known | `npm audit` reports 17 vulnerabilities; safe non-breaking fixes are not clearly available because fixes require major dependency changes. |
| Screenshot QA | Verified | Desktop and mobile screenshots exist in `docs/reviews/screenshots/`; Edge headless was used because Chrome headless failed with a GPU-process error. |
| Imported project visuals | Known | Real candidate assets were copied from verified external repos into `public/assets/projects/...`; visual/privacy review is still required before production polish. |
| Imported asset review | Known | `docs/18_IMPORTED_ASSET_REVIEW.md` classifies imported assets by homepage approval, case-study-only use, replacement need, sample-labeling need, and Hybrid sample-data UI replacement status. |
| Hybrid sample-data visual proof | Known | `predict.png` and `memory.png` were replaced from a local run of the verified Hybrid frontend with synthetic demo transactions. Not benchmark/model-output evidence. |
| Hybrid History AI Insight screenshot | Needed | Source review confirms the click-through History panel and `/transaction-insight` flow, but the current `history.png` only shows the list view. Capture a safe sample-data opened-transaction panel with real generated insight before using it as visual evidence. |
| Hybrid routing proof | Known | `docs/19_HYBRID_ROUTING_PROOF.md` preserves the original sample/unmeasured routing proof, while the Hybrid case study now uses measured local classifier/routing rows from `docs/20_HYBRID_BENCHMARK_RESULTS.md`. |
| Case-study hardening | Verified | The three featured case-study routes now render documented architecture, contribution, evidence, limitation, missing-proof, and next-evidence sections. |
| Featured case-study copy polish | Verified | Copy sharpened on 2026-07-01 while preserving Known/Needed states, local-only Hybrid benchmark framing, blocked The Loop screenshots, and pending role/contribution details. |
| Conservative design-system polish | Verified | Static shell visual hierarchy, section rhythm, evidence panels, focus states, and responsive behavior were polished without changing evidence states or activating blocked CTAs. |
| Fresh screenshot recapture | Verified | Captured on 2026-07-01 with Microsoft Edge headless and GPU-safe flags; review notes are in `docs/22_SCREENSHOT_QA_REVIEW.md`. |
| Launch-readiness audit | Verified | `docs/24_LAUNCH_READINESS_AUDIT.md` recorded a 72/100 score before The Loop visual update. `docs/25_THE_LOOP_VISUAL_EVIDENCE_UPDATE.md` estimates 82/100 after importing reviewed live-deployment Loop screenshots; polished/final launch remains blocked by Hybrid AI Insight screenshot, diagram QA, current screenshot recapture, deeper Hybrid endpoint/Qwen proof, dependency audit remediation, and remaining demo/ownership proof. |

## Verified Evidence Links

- Mahoraga GitHub repo: `https://github.com/Atishay9828/meta_Mahoraga`
- Mahoraga Kaggle notebook: `https://www.kaggle.com/code/atishay9828/meta-mahoraga/edit`
- Mahoraga HuggingFace demo: `https://huggingface.co/spaces/MridulNegi2005/Project-Mahoraga`
- Hybrid GenAI Transaction Categorizer YouTube walkthrough: `https://youtu.be/fsTXVh9JpoE`
- Hybrid GenAI Transaction Categorizer repo: `https://github.com/Atishay9828/Hybrid-GenAI-Transaction-Categorization`
- The Loop deployment: `https://the-loop-5m7u.onrender.com/`
- The Loop repo: `https://github.com/Atishay9828/TIET-LOOP`
- AI Resume Tailoring Engine repo: `https://github.com/Atishay9828/AI_Resume_Builder_ATS_Friendly`
- Webcam Motion Alert System repo: `https://github.com/Atishay9828/Webcam-Alert-App`
- GitHub profile: `https://github.com/Atishay9828/`
- Portfolio GitHub repository: `https://github.com/Atishay9828/portfolio`
- LinkedIn profile: `https://www.linkedin.com/in/atishay9828/`
- Email CTA: `mailto:ajain8_be23@thapar.edu`

Verification notes:
- Kaggle `/edit` URL loads via GET and canonicalizes to the notebook page; HEAD returned 404.
- HuggingFace Space was public but runtime stage was `SLEEPING`, so visitors may see a cold start.
- Featured-project evidence pack and diagram specs were added on 2026-06-26.
- Featured-project evidence review, screenshot/import plan, Hybrid benchmark plan, The Loop workflow walkthrough, and resume publication plan were added on 2026-06-26.
- Diagram review is Known documentation evidence, not final rendered/mobile asset verification.

## Next Milestone

Evidence completion after final proof/visual launch-readiness audit.

Completion criteria:
- SDE resume, GitHub, LinkedIn, and email CTAs are active; keep the Data Analyst resume unpublished unless AJ explicitly selects it later.
- Use `docs/24_LAUNCH_READINESS_AUDIT.md` plus `docs/25_THE_LOOP_VISUAL_EVIDENCE_UPDATE.md` as the current blocker split: conservative soft launch is stronger after The Loop visual update, polished/final launch remains blocked.
- Recapture current screenshots after public CTA and contribution updates.
- Render and mobile-QA selected Mermaid diagrams before using them as final visuals.
- Map exact Mahoraga file/module ownership and The Loop module ownership only if supporting evidence or teammate confirmation is supplied.
- Add remaining portfolio-local screenshots and demos.
- Keep the new The Loop live-deployment screenshots as the preferred public visuals; the old low-resolution `landing_page.jpg` remains superseded.
- Keep Hybrid category/history transaction screenshots explicitly sample-labeled in site copy/data if used.
- Capture or replace Hybrid History AI Insight screenshot only with a safe sample-data transaction opened and a real generated `/transaction-insight` response.
- Extend Hybrid benchmarking to the full FastAPI endpoint and Qwen fallback before publishing endpoint, fallback latency, cost, fallback-rate, or production claims.
- Do not publish raw profile/friends Loop screenshots; use only the redacted public copies unless a cleaner recapture is supplied.
- Plan dependency major-version upgrades separately from evidence/content hardening.
- Update `docs/06_ASSET_TRACKER.md`, `docs/10_PROJECT_EVIDENCE_REGISTRY.md`, and `docs/11_LINK_REGISTRY.md`.
