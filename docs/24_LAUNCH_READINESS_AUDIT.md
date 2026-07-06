# 24_LAUNCH_READINESS_AUDIT.md

Date: 2026-07-04

Audited repo commit: `7c37d32814036562b764e95c987265502001e1f0`

Purpose:
- Separate actual final-launch blockers from nice-to-have polish.
- Check the current conservative Astro shell without inventing screenshots, benchmarks, role details, or production claims.
- Record small safe cleanup from this pass.

## Launch-Readiness Score

Score: 72 / 100.

Readiness call: Conditionally ready for a conservative soft launch, blocked for polished/final launch.

Reason:
- Build output exists for all public routes.
- Public CTAs are active and no Data Analyst resume is exposed.
- Missing evidence states are visible in the generated pages.
- Visual assets are real portfolio-local files, but several are still candidate/limited-use assets rather than final polished proof.
- The Loop workflow screenshots, Hybrid AI Insight screenshot, final diagram render/mobile QA, and deeper Hybrid endpoint/Qwen proof remain launch-quality blockers.

2026-07-06 addendum:
- The Loop visual blocker improved after owner-provided live-deployment screenshots were imported and privacy-reviewed in `docs/25_THE_LOOP_VISUAL_EVIDENCE_UPDATE.md`.
- Updated score estimate: 82 / 100.
- Readiness call remains: conditionally ready for a conservative soft launch, still blocked for polished/final launch.
- The Loop no longer depends on the earlier deployment/server access blocker for public-safe events-list, event-detail, map-view, landing/login, and redacted profile/friends visuals.
- Remaining polished/final launch blockers are Hybrid AI Insight screenshot proof, final diagram render/mobile QA, current screenshot QA recapture, deeper Hybrid endpoint/Qwen proof if performance copy is desired, dependency audit remediation, and final launch QA.

## Audit Method

Checks completed:
- Confirmed `master` was clean and aligned with `origin/master` before changes.
- Confirmed `HEAD` and `origin/master` both pointed at `7c37d32814036562b764e95c987265502001e1f0`.
- Read current status, handoff, evidence, link, asset-review, screenshot QA, role/contribution, project data, page, style, and README sources.
- Built current static output and confirmed 4 pages were generated.
- Inspected generated HTML for `/`, `/projects/mahoraga/`, `/projects/hybrid-categorizer/`, and `/projects/the-loop/`.
- Checked generated local `href` and `src` targets; all local page, image, stylesheet, and resume paths resolved inside `dist/`.
- Visually reviewed existing polished screenshot QA PNGs for layout and spacing, with the caveat that those PNGs predate the latest public CTA and contribution-section updates.

Fresh screenshot capture:
- Not completed in this pass. A local static server process could be started, but the port did not respond reliably in the sandbox, and no Playwright/Puppeteer dependency is installed in this repo.
- Existing `docs/reviews/screenshots/*-polished.png` files remain layout QA evidence, not current CTA-state proof.

## Page-By-Page Status

| Page | Status | Launch notes |
|---|---|---|
| `/` | Conditionally ready | Hero is not overcrowded; GitHub and SDE resume are primary CTAs. Contact/footer expose GitHub, SDE resume, LinkedIn, and email. Missing-proof states remain visible. Mobile layout is long but readable based on existing screenshot QA. |
| `/projects/mahoraga/` | Conditionally ready | Verified project links and owner-reviewed contribution wording render. Candidate visuals load. Training metrics remain labeled as candidate-only, and robust adaptive-performance claims stay blocked. Needs architecture diagram revision, demo media, and final visual selection for polished launch. |
| `/projects/hybrid-categorizer/` | Conditionally ready | Verified repo/walkthrough links render. Local classifier/routing benchmark is clearly labeled as local-only and not production SLA. Predict/memory screenshots are safe sample-data UI proof. Category/history images remain case-study candidates only; AI Insight screenshot is still missing. |
| `/projects/the-loop/` | Blocked for polished launch | Verified deployment and repo links render, and collaborative contribution boundaries are visible. Current landing image is low-resolution and workflow screenshots remain blocked by the deployment/server access issue. This is the weakest featured visual surface. |

2026-07-06 update:
- `/projects/the-loop/` is no longer the weakest visual surface. It now has owner-provided live-deployment screenshots for events list, event detail/actions, map view, landing/login, and redacted profile/friends states.
- It is acceptable for conservative soft launch with labels, but still needs final screenshot QA recapture, diagram QA, and manual reliability verification before polished/final launch.

## Public CTA Status

| CTA | Status | Audit result |
|---|---|---|
| GitHub | Active | `https://github.com/Atishay9828/` remains the active global GitHub CTA. |
| SDE Resume | Active | `/resume/atishay-jain-sde-resume.pdf` exists in `public/resume/` and `dist/resume/`. |
| LinkedIn | Active | `https://www.linkedin.com/in/atishay9828/` remains owner-approved and active. Automated LinkedIn verification may still be blocked externally, so the evidence source is owner approval. |
| Email | Active | `mailto:ajain8_be23@thapar.edu` is active in contact/footer. |
| Data Analyst resume | Inactive | Not copied into the repo, not exposed in generated HTML, and not part of public CTAs. |

## Visual Asset Status

| Project | Asset | Status | Launch decision |
|---|---|---|---|
| Mahoraga | `dashboard_preview.png` | Launch-ready with label | Approved for homepage/case-study visual support. Does not prove robust adaptive performance. |
| Mahoraga | `stitch_aero_screenshot.png` | Acceptable with label | Case-study support only; too dense for homepage emphasis. |
| Mahoraga | `training_metrics.png` | Acceptable only with strong caveat | Candidate only. Do not publish metric/performance claims without methodology and evaluation interpretation. |
| Hybrid | `predict.png` | Acceptable with label | Safe sample-data frontend prediction-flow proof. Not backend benchmark/model-output evidence. |
| Hybrid | `memory.png` | Acceptable with label | Safe sample-data merchant-memory UI proof. Not measured usage or model-quality evidence. |
| Hybrid | `categories.png` | Acceptable with label | Case-study candidate only with sample/demo transaction label. Not real spending or metric proof. |
| Hybrid | `history.png` | Acceptable with label, blocked for AI Insight proof | Useful for history list and route tags only. Does not show opened AI Insight panel. |
| The Loop | `landing_page.jpg` | Needs replacement | Too low-resolution for polished homepage or case-study launch. |
| The Loop | `interest_selection.png` | Acceptable with label | Case-study-only support. Does not prove the full event coordination workflow. |
| The Loop | `the-loop-events-list-live.png` | Launch-ready with label | Primary public visual. Owner-captured deployment screenshot; proves visible event timeline UI state only. |
| The Loop | `the-loop-event-detail-live.png` | Launch-ready with label | Supporting case-study visual for event detail, map, and actions. Not reliability proof. |
| The Loop | `the-loop-map-view-live.png` | Launch-ready with label | Supporting case-study visual for map-based event discovery. |
| The Loop | `the-loop-landing-live.png` | Acceptable with label | Optional landing/login support; supersedes low-resolution `landing_page.jpg`. |
| The Loop | `the-loop-profile-live-redacted.png` | Acceptable with label | Supporting profile visual only; contact details masked. |
| The Loop | `the-loop-friends-live-redacted.png` | Acceptable with label | Supporting social-flow visual only; sent-request username masked. |
| Screenshot QA PNGs | `docs/reviews/screenshots/*-polished.png` | Acceptable as layout QA baseline | Useful for spacing/readability, but stale for current CTA and contribution state. |
| Diagrams | Mermaid/spec docs | Blocked for final visual use unless already approved and rendered | Several diagrams need revision; all selected diagrams need rendered/mobile QA before final public visual use. |

## Evidence Blocker Table

| Blocker | Severity | Blocks soft launch? | Blocks polished launch? | Required next step |
|---|---|---:|---:|---|
| The Loop workflow screenshots blocked by deployment/server access | High | No, if clearly labeled | Yes | Wait for access/server fix, then capture event discovery, RSVP/join, friends/chat, carpool, and safe admin screenshots. |
| The Loop `landing_page.jpg` low resolution | High | No, if de-emphasized | Yes | Replace with a high-resolution landing/auth screenshot after access is fixed. |
| Hybrid AI Insight opened-panel screenshot missing | High | No, if not used as visual proof | Yes if AI Insight is visually featured | Run backend/frontend with safe sample history, capture real `/transaction-insight` response, and review screenshot. |
| Hybrid endpoint/Qwen fallback/cost/fallback-rate proof missing | High | No, if local-only benchmark caveat remains visible | Yes for stronger AI-system/performance claims | Benchmark full FastAPI endpoint and Qwen fallback with repeatable methodology before publishing those claims. |
| Diagram revisions and rendered/mobile QA incomplete | Medium | No, because diagrams are not currently rendered as final visuals | Yes | Revise Not Ready diagrams and capture rendered desktop/mobile QA for selected diagrams. |
| Current screenshot QA stale for CTA/contribution state | Medium | No, because generated HTML confirms current CTA state | Yes for final visual QA | Recapture current homepage and case-study screenshots after this audit. |
| Dependency audit vulnerabilities | Medium | No for static proof audit | Yes for deployment hardening | Plan Astro/Vitest major upgrades separately and verify after upgrade. |
| Favicon/Open Graph image missing | Low | No | Nice-to-have for polish | Add favicon/AJ monogram and OG image after final visual direction stabilizes. |
| Exact Mahoraga file/module ownership and The Loop module ownership unmapped | Medium | No, because public copy stays caveated | Yes for stronger ownership claims | Add only if supporting evidence or teammate confirmation is supplied. |

2026-07-06 blocker changes:
- The Loop workflow screenshot blocker is resolved for public-safe event discovery/list, event detail/actions, map view, landing/login, and redacted profile/friends visuals.
- The Loop `landing_page.jpg` blocker is resolved by superseding the old file with `the-loop-landing-live.png`.
- Raw profile/friends screenshots remain blocked from public use; only redacted copies are public assets.
- Optional admin/chat/carpool visuals remain future proof work if those flows are featured.

## Launch-Blocking vs Nice-To-Have

Launch-blocking for polished/final launch:
- Replace or de-emphasize weak The Loop visuals.
- Capture The Loop workflow screenshots after the access issue is fixed.
- Capture Hybrid AI Insight opened-panel screenshot before using AI Insight as visual evidence.
- Keep Hybrid benchmark wording local-only until endpoint/Qwen/cost/fallback-rate proof exists.
- Revise/render/mobile-QA selected diagrams before treating them as final visuals.
- Recapture current visual QA after public CTA and contribution updates.

Not launch-blocking for conservative soft launch:
- Data Analyst resume, because it is intentionally unpublished.
- LinkedIn/email readiness, because owner-approved public CTAs are already active.
- Favicon/Open Graph image, though they matter for polish.
- Exact per-file ownership, as long as current caveats remain visible.
- Full endpoint/Qwen benchmark, as long as production/performance claims remain blocked.

Nice-to-have:
- Favicon/AJ monogram.
- Open Graph image.
- More compact mobile page length after proof artifacts are complete.
- More polished final diagram styling after content revisions.

## Small Safe Fixes Made In This Pass

- Updated featured-project section copy to say reviewed candidate visuals stay labeled until evidence is complete.
- Updated case-study shell copy to say visuals remain labeled until final launch selection and QA, instead of implying no review has happened.
- Updated project visual detail copy for Mahoraga and The Loop to reflect current reviewed/blocked status more accurately.
- Updated `ASSET_REQUIREMENTS.md` global contact rows so GitHub, SDE resume, LinkedIn, and email are no longer stale Known/pending assets.
- Added a caveat to `docs/22_SCREENSHOT_QA_REVIEW.md` that existing PNGs predate public CTA and contribution updates.

## Recommended Launch Path

1. Recapture current screenshots for `/`, `/projects/mahoraga/`, `/projects/hybrid-categorizer/`, and `/projects/the-loop/` after the Loop visual update so visual QA matches active CTAs, contribution sections, and the updated asset grid.
2. Capture Hybrid History AI Insight panel only from a real backend/frontend run with safe sample data and a real `/transaction-insight` response.
3. Revise the Not Ready diagrams, render selected diagrams, and run desktop/mobile diagram QA.
4. Add optional The Loop admin/chat/carpool visuals only if those flows will be visually featured.
5. Plan dependency major-version upgrade and audit remediation separately.
6. Run a final launch pass: test, build, link scan, screenshot QA, privacy check, audit check, and docs sync.

## Exact Next Tasks

1. Create a current screenshot QA run for the post-CTA/post-contribution/post-Loop-visual pages.
2. Capture Hybrid AI Insight screenshot only when the backend/frontend and safe sample data are available.
3. Revise and render selected diagrams.
4. Add optional The Loop admin/chat/carpool visuals only if needed for the final story.
5. Plan dependency major-version upgrade and audit remediation separately.
