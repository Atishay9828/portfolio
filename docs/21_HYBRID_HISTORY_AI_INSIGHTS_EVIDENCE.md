# 21_HYBRID_HISTORY_AI_INSIGHTS_EVIDENCE.md

Date: 2026-06-30

Purpose:
- Record what the Hybrid frontend History section actually shows.
- Separate the visible `history.png` list screenshot from the slide-in AI Insight panel.
- Define the safe replacement screenshot requirement without inventing generated insight text.

## Source Files Inspected

Hybrid repo:
- `D:\Hybrid-GenAI-Transaction-Categorization\frontend\src\pages\History.jsx`
- `D:\Hybrid-GenAI-Transaction-Categorization\frontend\src\components\HistoryCard.jsx`
- `D:\Hybrid-GenAI-Transaction-Categorization\frontend\src\components\HistoryPanel.jsx`
- `D:\Hybrid-GenAI-Transaction-Categorization\frontend\src\state\HistoryStore.js`
- `D:\Hybrid-GenAI-Transaction-Categorization\backend\insight_route.py`
- `D:\Hybrid-GenAI-Transaction-Categorization\backend\llm.py`
- `D:\Hybrid-GenAI-Transaction-Categorization\backend\main.py`

Portfolio asset checked:
- `public/assets/projects/hybrid-categorizer/history.png`

## Where AI Insights Appear

AI insights do not appear directly in the main History list.

The History page renders stored predictions as `HistoryCard` rows. Clicking a row opens `HistoryPanel`, a right-side slide-in panel. The panel contains a section titled `AI Insight`.

In short: clicking one History transaction opens `HistoryPanel`.

The panel requests a generated insight from:

```text
POST http://127.0.0.1:8000/transaction-insight
```

The expected response shape is:

```json
{
  "insight": "..."
}
```

The frontend stores successful insight text in `sessionStorage` under a key derived from the transaction timestamp and category. The backend also keeps an in-memory `INSIGHT_CACHE`.

## What Data The Insight Summarizes

The frontend sends the selected history item:
- transaction text
- timestamp
- merchant
- category
- confidence
- engine

It also sends up to three same-category recent history items built from the current local History store. Each recent item includes:
- text
- timestamp
- merchant
- category
- confidence
- engine

The backend prompt extracts the current transaction amount from the transaction text and includes the recent history text/amount lines. The generated insight is therefore about the selected transaction plus nearby same-category history context, not about full-account spending.

## Safe/Sample Data Status

Current status: not fully proven safe as a final public screenshot.

The existing `history.png` asset is an imported screenshot from the Hybrid repo's `frontend/public/screenshots/history.png`. It visibly shows transaction-like strings, amounts, dates, confidence values, and route tags. It does not show account numbers, card numbers, emails, API keys, or user identifiers, but this pass did not prove that every visible transaction string was generated from a controlled sample-data session.

Publication rule:
- Treat the visible History rows as sample/demo transaction data if used.
- Do not present visible merchants, amounts, confidence values, or route tags as private spending, production usage, benchmark output, or model-quality proof.
- If the screenshot is kept, surrounding copy must say `sample/demo transaction data`.

## Redaction Or Labeling Needed

Required label if `history.png` is used:

```text
Sample transaction history. Not personal spending data, not production usage, and not benchmark output.
```

Redaction is not required for the current image because no direct private identifiers were observed, but replacement is preferable for final polish because the image lacks an in-image sample/demo label and does not show the AI Insight panel.

## Existing Screenshot Assessment

File:
- `public/assets/projects/hybrid-categorizer/history.png`

What it clearly shows:
- Transaction history list: yes.
- Category/prediction output: yes, via category pills and confidence percentages.
- Route/source tags: yes, including `LLM`, `ONNX`, and `Merchant`.
- AI-generated insight or explanation: no. The slide-in `AI Insight` panel is not visible.
- Safe/sample/demo data labeling: no visible in-image label.

Evidence status:
- Case-study candidate only for the History list and routing-source UI.
- Not evidence of the AI Insight panel.
- Not benchmark evidence.
- Not backend/model-output proof.

Important UI behavior:
- The screenshot is missing the state that matters for AI insights because no transaction row is opened.
- To show AI insights, open one transaction from the History list. The slide-in panel then generates an insight based on that selected transaction and recent previous transactions from the same category.

## Replacement Screenshot Requirement

The current History screenshot should be replaced or supplemented before using History AI insights as portfolio evidence.

Replacement capture requirements:
- Use only safe sample/demo transaction history.
- Open the History page.
- Click a safe sample history row.
- Capture the slide-in `HistoryPanel` with the `AI Insight` section visible.
- Use a real response from `POST /transaction-insight`; do not hand-write, mock, or edit generated insight text.
- Record the sample transaction strings used, endpoint status, capture date, and whether Qwen/local LLM actually generated the insight.
- Keep the screenshot labeled as sample/demo data in surrounding portfolio copy.

Do not invent an insight for the screenshot. If the local backend or Qwen insight route cannot run, keep the replacement screenshot Needed.

## Portfolio Use Decision

Use the existing `history.png` only as limited case-study support for the History list and route tags, with sample/demo labeling.

Do not use the existing `history.png` as the primary Hybrid visual, homepage visual, AI Insight proof, backend benchmark proof, or model-quality proof.

A future replacement screenshot that shows the real `AI Insight` panel with safe sample data can become a Known case-study candidate after direct visual/privacy review. It still would not prove production latency, fallback cost, fallback rate, accuracy, or benchmark performance.

## Remaining Blocker

AI Insight screenshot proof remains Needed.

This pass inspected the frontend/backend source and validated the current screenshot, but did not capture a replacement because the available Python runtime did not have the Hybrid backend dependencies installed and no repo-local virtual environment was present. Capturing a replacement should happen only when the backend can be run and the generated insight can be recorded without private transaction data.
