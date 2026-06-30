# 18_IMPORTED_ASSET_REVIEW.md

Date: 2026-06-28

Purpose:
- Record the visual and privacy review of imported portfolio project assets.
- Decide which assets can support the homepage, which are case-study-only, and which must be replaced or redacted before production polish.
- Prevent screenshots, metrics, or transaction/product visuals from implying unsupported claims.

Scope:
- Review covers only files currently imported under `public/assets/projects/`.
- This is a visual/privacy review, not a benchmark, role/contribution, deployment, or resume-publication verification pass.
- No asset was deleted. No fake assets, fake metrics, or invented role details were added.

## Summary

| Project | Asset | Final status | Recommended usage |
|---|---|---|---|
| Mahoraga | `public/assets/projects/mahoraga/dashboard_preview.png` | Approved for homepage | Homepage and case study |
| Mahoraga | `public/assets/projects/mahoraga/stitch_aero_screenshot.png` | Approved for case study only | Case study only |
| Mahoraga | `public/assets/projects/mahoraga/training_metrics.png` | Candidate only | Case study candidate after metric interpretation |
| Hybrid Categorizer | `public/assets/projects/hybrid-categorizer/predict.png` | Replaced with sample-data UI proof | Case-study candidate as frontend prediction-flow proof |
| Hybrid Categorizer | `public/assets/projects/hybrid-categorizer/categories.png` | Sample-label required in site copy/data | Case-study candidate only with sample/demo label |
| Hybrid Categorizer | `public/assets/projects/hybrid-categorizer/history.png` | Sample-label required in site copy/data | Case-study candidate only for History list/route tags; opened AI Insight panel not shown |
| Hybrid Categorizer | `public/assets/projects/hybrid-categorizer/memory.png` | Replaced with sample-data UI proof | Case-study candidate as frontend merchant-memory proof |
| The Loop | `public/assets/projects/the-loop/landing_page.jpg` | Replace before polish | Do not use for final polish |
| The Loop | `public/assets/projects/the-loop/interest_selection.png` | Approved for case study only | Case study workflow support; broader workflow capture is blocked by deployment/server access issue |

## Asset Reviews

### Mahoraga Dashboard Preview

File path:
- `public/assets/projects/mahoraga/dashboard_preview.png`

Project:
- Mahoraga

Visual quality:
- Strong. High-resolution dashboard-style asset with clear dark UI, project-relevant labels, and visible adaptive-combat state.

Readability:
- Homepage card size: Good enough; the overall UI, Mahoraga label, target/core panels, and adaptive interface read as technical system proof.
- Case-study page size: Good.

Privacy risk:
- Low. No personal data, tokens, API keys, file paths, private logs, or user identifiers visible.

Recommended usage:
- Approved for homepage.
- Also acceptable for case-study visual support.

Final status:
- Approved for homepage.

Notes:
- Still pair with limitation copy. The screenshot proves a UI/system artifact exists; it does not prove robust adaptive-agent performance.

### Mahoraga Environment UI Screenshot

File path:
- `public/assets/projects/mahoraga/stitch_aero_screenshot.png`

Project:
- Mahoraga

Visual quality:
- Moderate. It visibly matches the same Mahoraga/Aero-Tactical system and shows an adapted judgment-strike state, but the file is only 512 x 500.

Readability:
- Homepage card size: Weak; text and side navigation become cramped.
- Case-study page size: Acceptable if displayed as supporting evidence, not as the primary hero visual.

Privacy risk:
- Low. No personal or secret data visible.

Recommended usage:
- Approved for case study only.

Final status:
- Approved for case study only.

Notes:
- Use after the dashboard preview, not as the primary homepage image.

### Mahoraga Training Metrics

File path:
- `public/assets/projects/mahoraga/training_metrics.png`

Project:
- Mahoraga

Visual quality:
- Moderate. The chart is readable and project-relevant, but it is a metric artifact and can easily overclaim if shown without methodology.

Readability:
- Homepage card size: Not appropriate; chart labels and numbers would compress too much and imply performance claims.
- Case-study page size: Readable.

Privacy risk:
- Low. No personal or secret data visible.

Recommended usage:
- Candidate only.
- Use only after the training/evaluation setup is explained and the numbers are interpreted honestly.

Final status:
- Candidate only.

Notes:
- Do not use for homepage or metric claims until methodology, dataset/simulation conditions, and evaluation limits are documented.

### Hybrid Categorizer `predict.png`

File path:
- `public/assets/projects/hybrid-categorizer/predict.png`

Project:
- Hybrid GenAI Transaction Categorizer

Visual quality:
- Replaced on 2026-06-27. The current image is a readable running-frontend Home screen with a transaction input, prediction card, category, confidence bar, ONNX route label, explanation, and token chips.

Readability:
- Homepage card size: Acceptable if cropped carefully, though the composition is mostly UI whitespace.
- Case-study page size: Good.

Privacy risk:
- Low. It uses synthetic sample input `demo cafe payment 750` and no real account identifiers, personal merchant context, API keys, or private transaction data.

Recommended usage:
- Case-study candidate as frontend prediction-flow proof.
- Surrounding site copy/data must state that visible transaction data is synthetic demo/sample data.
- Do not treat the confidence value or route as benchmark/model-output evidence.

Final status:
- Replaced with sample-data UI proof.

Notes:
- Captured from a local run of the verified Hybrid frontend in `C:\tmp\Hybrid-GenAI-Transaction-Categorization` with a controlled synthetic `/predict` response. The full backend model path was not exercised during that screenshot pass. A separate local Hybrid repo later provided `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx` for benchmark verification, and local classifier/routing results now live in `docs/20_HYBRID_BENCHMARK_RESULTS.md`; this screenshot is still not backend benchmark evidence.

### Hybrid Categorizer `categories.png`

File path:
- `public/assets/projects/hybrid-categorizer/categories.png`

Project:
- Hybrid GenAI Transaction Categorizer

Visual quality:
- Good resolution and readable. It shows a category detail drawer with transaction examples and merchant names.

Readability:
- Homepage card size: Not appropriate; too much transaction detail and not enough routing-system signal.
- Case-study page size: Readable.

Privacy risk:
- Medium. It includes merchant names, transaction descriptions, dates, and amounts. These may be demo data, but they should be explicitly sample-labeled or redacted before public polish.

Recommended usage:
- Case study candidate only after redaction/sample-data labeling.

Final status:
- Sample-label required in site copy/data.

Notes:
- Avoid homepage use. Do not publish as financial evidence or spend metrics.

### Hybrid Categorizer History

File path:
- `public/assets/projects/hybrid-categorizer/history.png`

Project:
- Hybrid GenAI Transaction Categorizer

Visual quality:
- Good resolution and readable. It shows prediction history, category confidence, and route tags such as LLM, ONNX, and Merchant.
- It does not show the opened transaction panel where `AI Insight` appears.

Readability:
- Homepage card size: Weak; long list rows and transaction text become too small.
- Case-study page size: Good.

Privacy risk:
- Medium. It includes merchant/transaction descriptions, amounts, dates, and confidence values. It needs sample-data labeling or redaction before polished public use.

Recommended usage:
- Case study candidate only after redaction/sample-data labeling.
- Use for transaction history, category confidence, and route tags only.
- Do not use as evidence for AI Insight output because the side panel is not visible.

Final status:
- Sample-label required in site copy/data.

Notes:
- Useful for explaining routing behavior, but not enough to replace the pending benchmark/routing table.
- Re-reviewed 2026-06-30 against Hybrid source. In the actual UI, clicking one transaction opens `HistoryPanel`, which calls `POST /transaction-insight` and displays an `AI Insight` box based on the selected transaction plus recent same-category history. A replacement/supplemental screenshot is Needed if the portfolio wants visual proof of that AI Insight panel.

### Hybrid Categorizer Memory

File path:
- `public/assets/projects/hybrid-categorizer/memory.png`

Project:
- Hybrid GenAI Transaction Categorizer

Visual quality:
- Replaced on 2026-06-27. The current image is a readable running-frontend Merchant Memory screen with grouped synthetic merchants, visit count, totals, averages, and expanded visit history.

Readability:
- Homepage card size: Possible if cropped, but better suited to case-study support.
- Case-study page size: Good.

Privacy risk:
- Low. It uses synthetic merchants `Demo Cafe` and `Sample Transit`, generated sample amounts, and no real account identifiers, API keys, or private transaction records.

Recommended usage:
- Case-study candidate as frontend merchant-memory proof.
- Surrounding site copy/data must state that visible transaction data is synthetic demo/sample data.
- Do not use totals, dates, or visit counts as real product usage metrics.

Final status:
- Replaced with sample-data UI proof.

Notes:
- Captured from the same local frontend session as `predict.png`. The full backend model path was not exercised during that screenshot pass; later ONNX discovery and local benchmark execution do not turn this screenshot into benchmark/model-output evidence.

### The Loop Landing Page

File path:
- `public/assets/projects/the-loop/landing_page.jpg`

Project:
- The Loop

Visual quality:
- Weak. It visibly matches The Loop landing/auth screen, but the file is only 320 x 164 and too compressed for serious portfolio use.

Readability:
- Homepage card size: Poor.
- Case-study page size: Poor.

Privacy risk:
- Low. No readable private user data, tokens, emails, or chat content visible.

Recommended usage:
- Replace before polish.

Final status:
- Replace before polish.

Notes:
- Capture a fresh high-resolution landing/auth screenshot only after the deployment/server access issue is fixed by the teammate/friend with access.

### The Loop Interest Selection

File path:
- `public/assets/projects/the-loop/interest_selection.png`

Project:
- The Loop

Visual quality:
- Strong. High-resolution, visually clean, and clearly part of the onboarding/interest workflow.

Readability:
- Homepage card size: Acceptable visually, but it does not show enough event coordination/product depth for homepage proof.
- Case-study page size: Good.

Privacy risk:
- Low. It contains the first name `AJ`, but no sensitive identifiers, emails, tokens, chat content, carpool details, or event registrations.

Recommended usage:
- Approved for case study only.

Final status:
- Approved for case study only.

Notes:
- Pair with event discovery, RSVP/join, chat, carpool, and admin screenshots before claiming full product workflow coverage. Those screenshots are temporarily blocked by a deployment/server access issue and should not be captured in this milestone.

## Homepage-Approved Assets

- `public/assets/projects/mahoraga/dashboard_preview.png`

## Case-Study-Only Assets

- `public/assets/projects/mahoraga/stitch_aero_screenshot.png`
- `public/assets/projects/the-loop/interest_selection.png`

## Replacement Needed

- `public/assets/projects/the-loop/landing_page.jpg`

## Redaction Or Sample-Labeling Needed

- `public/assets/projects/hybrid-categorizer/categories.png`
- `public/assets/projects/hybrid-categorizer/history.png`

## AI Insight Panel Screenshot Needed

- Current `history.png` shows only the History list view.
- The Hybrid frontend has an opened-transaction `AI Insight` panel in `HistoryPanel.jsx`, but it is not visible in the current imported screenshot.
- Capture a replacement or supplemental History screenshot only with safe sample/demo transaction history and a real backend `/transaction-insight` response.
- Do not invent the insight text and do not use private transaction data.

## Candidate Only

- `public/assets/projects/mahoraga/training_metrics.png`

## Remaining Blockers

- Hybrid still needs measured benchmark/routing evidence and any end-to-end backend/model-output capture required for final inference proof.
- Hybrid `categories.png` and `history.png` need sample-data labeling in final surrounding copy if used.
- Hybrid History AI Insight panel screenshot remains Needed before AI insights are used as visual portfolio evidence.
- The Loop needs high-resolution landing/auth, event discovery, RSVP/join, friend/chat, carpool, and safe admin screenshots after the deployment/server access issue is fixed by the teammate/friend with access.
- Mahoraga still needs demo media, architecture diagram revision, and interpreted evaluation evidence before metric claims.
- Role/contribution details remain pending for all featured projects.
