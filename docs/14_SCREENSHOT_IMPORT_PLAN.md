# 14_SCREENSHOT_IMPORT_PLAN.md

Date: 2026-06-27

Purpose:
- Define where external project assets should be imported.
- Prevent fake screenshots, unredacted private data, and untracked local-only assets from entering the public portfolio.

Review status:
- Imported asset visual/privacy review is recorded in `docs/18_IMPORTED_ASSET_REVIEW.md`.

## Destination Structure

Recommended repository paths:

- `public/assets/projects/mahoraga/`
- `public/assets/projects/hybrid-categorizer/`
- `public/assets/projects/the-loop/`
- `public/assets/projects/resume-engine/`
- `public/assets/projects/webcam-alert/`
- `public/resume/`

Do not mark assets Verified until the files exist in these paths or another documented repository path.

## External Assets To Import

| Project | External asset candidates | Destination path | Status |
|---|---|---|---|
| Mahoraga | Demo GIF/video of adaptive behavior | `public/assets/projects/mahoraga/` | Needed |
| Mahoraga | Reviewed dashboard/training metrics image from project repo | `public/assets/projects/mahoraga/` | Imported and reviewed; `dashboard_preview.png` approved homepage, `training_metrics.png` candidate only |
| Mahoraga | Reviewed UI or environment screenshot | `public/assets/projects/mahoraga/` | Imported and reviewed; `stitch_aero_screenshot.png` case-study only |
| Hybrid Categorizer | `predict.png`, `categories.png`, `history.png`, `memory.png` | `public/assets/projects/hybrid-categorizer/` | `predict.png` and `memory.png` replaced on 2026-06-27 with local running-frontend captures using synthetic demo data; `categories.png` and `history.png` remain imported case-study candidates requiring sample/demo labeling if used; current `history.png` shows list view only, not the opened AI Insight panel |
| Hybrid Categorizer | Routing decision table image or markdown table after examples are selected | `public/assets/projects/hybrid-categorizer/` or docs | Needed |
| The Loop | `landing_page.jpg`, `interest_selection.png` from external repo assets | `public/assets/projects/the-loop/` | Imported and reviewed; landing must be replaced, interest selection is case-study only |
| The Loop | Event discovery, RSVP/join, chat, carpool, and admin screenshots | `public/assets/projects/the-loop/` | Needed |
| AI Resume Tailoring Engine | Redacted sample output | `public/assets/projects/resume-engine/` | Missing |
| AI Resume Tailoring Engine | Redacted ATS report | `public/assets/projects/resume-engine/` | Missing |
| Webcam Motion Alert System | Streamlit app screenshot | `public/assets/projects/webcam-alert/` | Missing |
| Webcam Motion Alert System | Motion detection state screenshot | `public/assets/projects/webcam-alert/` | Missing |
| Webcam Motion Alert System | Redacted email alert screenshot | `public/assets/projects/webcam-alert/` | Missing |
| Resume | Final public resume PDF | `public/resume/` | Known locally, not imported |

## Manual Screenshots Needed

### Mahoraga

- One short demo clip or GIF showing adaptive behavior.
- One clean UI/demo screenshot if the homepage needs a visual thumbnail.
- One reviewed training/evaluation artifact if performance claims are shown.

### Hybrid Categorizer

- Prediction flow screenshot. Completed 2026-06-27 as a frontend UI capture using synthetic sample input; not backend benchmark/model-output evidence.
- Merchant memory screenshot. Completed 2026-06-27 as a frontend UI capture using synthetic merchants; not measured model-quality evidence.
- History list screenshot only if sample/demo labeling is shown in surrounding case-study copy.
- History AI Insight panel screenshot only after opening one safe sample transaction and capturing a real `/transaction-insight` response; do not invent insight text.
- Categories/settings screenshot if it clarifies the threshold/routing behavior.
- Benchmark/routing proof table after `docs/15_HYBRID_BENCHMARK_AND_ROUTING_PLAN.md` is executed.

### The Loop

- Landing page.
- Interest selection/profile setup.
- Event discovery.
- RSVP or join flow.
- Friend/chat flow.
- Carpool flow.
- Admin event creation/update flow only if documented and safe to show.

### Secondary Projects

- Resume engine: redacted sample generated resume and ATS/report evidence.
- Webcam alert: Streamlit UI, detection state, and redacted email alert.

## Assets Needing Redaction

- Resume PDFs and resume-engine outputs: remove phone number, address, private email if not intended for public use, and any non-public job/application detail.
- The Loop: redact user names, emails, tokens, chat messages, carpool details, event registrations, and admin-only data.
- Hybrid Categorizer: redact real transaction details, account identifiers, personal merchant context, or API keys.
- Webcam Alert: redact email addresses, inbox metadata, timestamps if sensitive, and any private background content in camera frames.
- Mahoraga: redact API keys, notebook secrets, local paths, and private experiment logs.

## Optional Assets

- Open Graph image after visual direction is stable.
- Favicon or AJ monogram.
- Profile photo or intentional identity mark.
- Short demo videos for secondary projects if the screenshots are weak.

## Blocked Assets

| Asset | Why blocked | Unblock condition |
|---|---|---|
| Public resume PDF | Local candidates are outside repo and not selected for publication. | Choose final version, redact if needed, copy to `public/resume/`, and record status. |
| Hybrid deployment screenshot | No deployment link is documented. | Provide and verify hosted deployment, or mark deployment not applicable. |
| Hybrid latency/cost chart | Local classifier/routing benchmark exists in `docs/20_HYBRID_BENCHMARK_RESULTS.md`, but cost, fallback-rate, endpoint latency, and Qwen fallback latency remain unmeasured. | Use the local benchmark only with its limitations visible; run full endpoint/fallback benchmark before stronger claims. |
| Hybrid backend/model-output screenshot | The replacement screenshots were captured from the frontend with controlled synthetic sample responses, not the backend model path. A local classifier/routing benchmark now exists, but no end-to-end backend screenshot was captured. | Run the local backend/model path with the located ONNX asset or use a verified hosted/demo environment, then capture end-to-end inference if final proof requires it. |
| Hybrid History AI Insight panel screenshot | Current `history.png` shows only the History list, category confidence, and route tags. The actual AI Insight UI appears after clicking a transaction and depends on `/transaction-insight`. | Run the backend insight route, seed safe sample/demo history, open one transaction, and capture the side panel with the real generated insight visible. |
| The Loop final deployment screenshots | Deployment exists, but public workflow behavior still needs manual screen capture/review. | Capture screenshots from the verified deployment or local app with safe demo data. |
| Resume-engine sample output | No redacted sample output is in repo. | Generate/select a safe public sample and redact private details. |
| Webcam alert email screenshot | No public-safe alert screenshot is in repo. | Capture/redact email alert evidence. |
