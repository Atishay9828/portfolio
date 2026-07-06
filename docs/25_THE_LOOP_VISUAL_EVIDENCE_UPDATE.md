# 25_THE_LOOP_VISUAL_EVIDENCE_UPDATE.md

Date: 2026-07-06

Baseline commit: `b9271b06fdb04d858290519d6eacc764df76d9d4`

Deployment URL: `https://the-loop-5m7u.onrender.com/`

Purpose:
- Import owner-provided The Loop live-deployment screenshots.
- Promote public-safe Loop workflow visuals without inventing production, active-user, ownership, benchmark, or reliability claims.
- Record redaction decisions for profile/friends screenshots.
- Update the launch-readiness estimate after the Loop visual blocker improved.

## Screenshot Source

Source:
- Owner-provided clean live-deployment screenshots from The Loop deployment.

Reviewed screenshots:
- Events list / timeline.
- Alternate events list state.
- Event detail page with location map and event actions.
- Map view with event pins near Thapar Institute.
- Landing/login page.
- Profile page.
- Friends page.

## Screenshots Imported

| Public file | Public use | Status | Notes |
|---|---|---|---|
| `public/assets/projects/the-loop/the-loop-events-list-live.png` | Primary public visual | Verified | Events timeline with dated campus events and category tags. |
| `public/assets/projects/the-loop/the-loop-events-list-alt-live.png` | Supporting case-study visual | Verified | Alternate list/timeline state. |
| `public/assets/projects/the-loop/the-loop-event-detail-live.png` | Supporting case-study visual | Verified | Event detail page with location map and actions. |
| `public/assets/projects/the-loop/the-loop-map-view-live.png` | Supporting case-study visual | Verified | Map-based event discovery with pins near Thapar Institute. |
| `public/assets/projects/the-loop/the-loop-landing-live.png` | Optional support visual | Verified | Landing/login screen; supersedes the old low-resolution `landing_page.jpg`. |
| `public/assets/projects/the-loop/the-loop-profile-live-redacted.png` | Supporting case-study visual only | Verified, redacted | Personal contact details were masked before import. |
| `public/assets/projects/the-loop/the-loop-friends-live-redacted.png` | Supporting case-study visual only | Verified, redacted | Sent-request username was masked before import. |

## Public / Excluded Screenshots

Public:
- Events list/timeline is the primary visual.
- Event detail and map view are supporting workflow visuals.
- Landing/login is optional setup context.
- Redacted profile/friends screenshots can be used as supporting workflow evidence only.

Excluded:
- Raw profile screenshot was not published because it exposed personal contact/account details.
- Raw friends screenshot was not published because it exposed another username.
- No private-review raw screenshots were copied into `public/assets`.

Cropping/redaction:
- The public-ready screenshot batch was already cropped to the app viewport for the selected clean assets.
- Profile contact details were masked before saving the public copy.
- Friends sent-request username was masked before saving the public copy.

## Updated Visual Classification

| Visual | Classification | Launch decision |
|---|---|---|
| Events list/timeline | Launch-ready with label | Use as The Loop primary public visual. |
| Alternate events list | Acceptable with label | Supporting case-study visual. |
| Event detail | Launch-ready with label | Strong supporting visual for actions/location. |
| Map view | Launch-ready with label | Strong supporting visual for discovery/map workflow. |
| Landing/login | Acceptable with label | Optional support; not primary proof. |
| Redacted profile | Acceptable with label | Supporting profile-flow evidence only. |
| Redacted friends | Acceptable with label | Supporting social-flow evidence only. |
| Legacy `landing_page.jpg` | Superseded | Keep in repo history, do not use as preferred public visual. |
| Legacy `interest_selection.png` | Case-study-only legacy support | Not preferred now that live visuals exist. |

## Claim Boundary

Allowed:
- Owner-captured deployment screenshot.
- Live deployment workflow screenshot.
- Prototype workflow evidence.
- Visible UI states for events list, event detail/actions, map discovery, landing/login, profile, and friends.

Not allowed:
- Production-grade.
- Production-ready.
- Production SLA.
- Active-user proof.
- Scale/reliability proof.
- Exact solo module ownership.
- Real usage metrics.
- Unredacted profile/friends publication.

## Hybrid Fallback Note

Owner reported the Hybrid offline fallback can take around 10 seconds on laptop hardware.

Status:
- Anecdotal only.
- Not repeatably benchmarked.
- Not added to public copy.
- Optional future task: benchmark fallback latency with a repeatable harness before any public latency claim.

## Updated Launch-Readiness Score Estimate

Previous score:
- 72 / 100 in `docs/24_LAUNCH_READINESS_AUDIT.md`.

Updated estimate:
- 82 / 100.

Readiness call:
- Conditionally ready for a conservative soft launch.
- Still blocked for polished/final launch.

Why score improved:
- The Loop is no longer the weakest featured visual surface.
- The old low-resolution landing visual is superseded.
- Public-safe workflow visuals now exist for the core events discovery path.
- Profile/friends visuals can be shown only in redacted form.

Why polished/final launch is still blocked:
- Hybrid History AI Insight screenshot remains missing.
- Current portfolio screenshot QA still needs recapture after CTA, contribution, and Loop visual updates.
- Diagram render/mobile QA remains incomplete.
- Hybrid endpoint/Qwen fallback/cost/fallback-rate proof remains missing.
- Dependency audit remediation still requires a separate major-upgrade milestone.
- Exact Mahoraga file/module ownership and The Loop module ownership remain limited unless supporting evidence is supplied.

## Exact Next Tasks

1. Recapture current screenshot QA for `/`, `/projects/mahoraga/`, `/projects/hybrid-categorizer/`, and `/projects/the-loop/`.
2. Capture Hybrid History AI Insight only from a safe sample transaction and a real `/transaction-insight` response.
3. Revise and render selected diagrams, then run mobile/desktop diagram QA.
4. Add optional The Loop admin/chat/carpool screenshots only if those flows need public visual proof.
5. Run a final launch pass: tests, build, link scan, screenshot QA, privacy check, dependency-audit decision, and docs sync.
