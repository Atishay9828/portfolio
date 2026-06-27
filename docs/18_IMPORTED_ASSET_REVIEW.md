# 18_IMPORTED_ASSET_REVIEW.md

Date: 2026-06-27

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
| Hybrid Categorizer | `public/assets/projects/hybrid-categorizer/predict.png` | Replace before polish | Do not use as prediction proof |
| Hybrid Categorizer | `public/assets/projects/hybrid-categorizer/categories.png` | Redact/sample-label needed | Case study candidate only after review |
| Hybrid Categorizer | `public/assets/projects/hybrid-categorizer/history.png` | Redact/sample-label needed | Case study candidate only after review |
| Hybrid Categorizer | `public/assets/projects/hybrid-categorizer/memory.png` | Replace before polish | Do not use as merchant-memory proof |
| The Loop | `public/assets/projects/the-loop/landing_page.jpg` | Replace before polish | Do not use for final polish |
| The Loop | `public/assets/projects/the-loop/interest_selection.png` | Approved for case study only | Case study workflow support |

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
- Good resolution and readable at full size, but the image content is a Categories Dashboard, not a prediction-flow screen.

Readability:
- Homepage card size: Poor fit; dense values and dashboard layout do not communicate routing/fallback quickly.
- Case-study page size: Readable.

Privacy risk:
- Medium. It shows sample-looking spending totals and category amounts. No account IDs or personal identifiers are visible, but values should be labeled as sample/demo data before polished use.

Recommended usage:
- Do not use as prediction proof.
- Replace with an actual prediction/routing screen before polish.

Final status:
- Replace before polish.

Notes:
- Filename/content mismatch creates risk of misleading future maintainers.

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
- Redact/sample-label needed.

Notes:
- Avoid homepage use. Do not publish as financial evidence or spend metrics.

### Hybrid Categorizer History

File path:
- `public/assets/projects/hybrid-categorizer/history.png`

Project:
- Hybrid GenAI Transaction Categorizer

Visual quality:
- Good resolution and readable. It shows prediction history, category confidence, and route tags such as LLM, ONNX, and Merchant.

Readability:
- Homepage card size: Weak; long list rows and transaction text become too small.
- Case-study page size: Good.

Privacy risk:
- Medium. It includes merchant/transaction descriptions, amounts, dates, and confidence values. It needs sample-data labeling or redaction before polished public use.

Recommended usage:
- Case study candidate only after redaction/sample-data labeling.

Final status:
- Redact/sample-label needed.

Notes:
- Useful for explaining routing behavior, but not enough to replace the pending benchmark/routing table.

### Hybrid Categorizer Memory

File path:
- `public/assets/projects/hybrid-categorizer/memory.png`

Project:
- Hybrid GenAI Transaction Categorizer

Visual quality:
- Good resolution and readable, but content is a transaction detail drawer rather than a merchant-memory screen.

Readability:
- Homepage card size: Not appropriate.
- Case-study page size: Readable.

Privacy risk:
- Medium. It shows merchant, category, engine, confidence, raw text, amount, and timestamp. It should be sample-labeled or redacted before public polish.

Recommended usage:
- Do not use as merchant-memory proof.
- Replace with a real merchant-memory screen before polish.

Final status:
- Replace before polish.

Notes:
- Filename/content mismatch creates evidence risk. It may still support a transaction-detail explanation if renamed/reframed later, but it should not be used as memory proof.

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
- Capture a fresh high-resolution landing/auth screenshot from the deployment or local app with safe demo data.

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
- Pair with event discovery, RSVP/join, chat, carpool, and admin screenshots before claiming full product workflow coverage.

## Homepage-Approved Assets

- `public/assets/projects/mahoraga/dashboard_preview.png`

## Case-Study-Only Assets

- `public/assets/projects/mahoraga/stitch_aero_screenshot.png`
- `public/assets/projects/the-loop/interest_selection.png`

## Replacement Needed

- `public/assets/projects/hybrid-categorizer/predict.png`
- `public/assets/projects/hybrid-categorizer/memory.png`
- `public/assets/projects/the-loop/landing_page.jpg`

## Redaction Or Sample-Labeling Needed

- `public/assets/projects/hybrid-categorizer/categories.png`
- `public/assets/projects/hybrid-categorizer/history.png`
- `public/assets/projects/hybrid-categorizer/memory.png`

## Candidate Only

- `public/assets/projects/mahoraga/training_metrics.png`

## Remaining Blockers

- Hybrid still needs a true prediction/routing screenshot and a true merchant-memory screenshot.
- Hybrid transaction screenshots need sample-data labeling or redaction before public polish.
- The Loop needs high-resolution landing/auth, event discovery, RSVP/join, friend/chat, carpool, and safe admin screenshots.
- Mahoraga still needs demo media, architecture diagram revision, and interpreted evaluation evidence before metric claims.
- Role/contribution details remain pending for all featured projects.
