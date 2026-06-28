# 15_HYBRID_BENCHMARK_AND_ROUTING_PLAN.md

Date: 2026-06-28

Purpose:
- Define how to prove the Hybrid GenAI Transaction Categorizer routing behavior without inventing metrics.
- Separate acceptable qualitative proof from measured benchmark claims.

Related proof doc:
- `docs/19_HYBRID_ROUTING_PROOF.md` records current safe sample routing proof and local benchmark blockers.

## Hard Rule

Never invent latency, cost, accuracy, fallback-rate, or savings numbers.

If a number is not measured and recorded from a real run, do not publish it. Use qualitative wording only.

## Benchmark Methodology

1. Select a small fixed transaction set.
   - Include known merchants, unknown merchants, ambiguous descriptions, and edge cases.
   - Label whether examples are real, anonymized, or representative.
2. Run the local ONNX path.
   - Record predicted category.
   - Record confidence.
   - Record whether semantic rules passed.
   - Record latency only if measured with a repeatable timer.
3. Run the LLM fallback path.
   - Record predicted category.
   - Record explanation summary.
   - Record latency only if measured with a repeatable timer.
   - Record provider/model only if safe and accurate.
4. Run merchant memory correction/feedback examples.
   - Show before/after merchant mapping.
   - Record whether a correction updates `data/merchant_map.json`.
5. Produce a routing decision table.
   - Keep examples short and safe.
   - Redact transaction IDs, card data, user context, or private merchant data.

## ONNX vs LLM Fallback Comparison

| Dimension | ONNX path | LLM fallback path | Publication rule |
|---|---|---|---|
| Intended role | Fast default classifier | Ambiguity resolver | Safe to describe qualitatively. |
| Trigger | Confidence threshold and semantic checks | Low confidence or rule mismatch | Safe if tied to documented logic. |
| Latency | Must be measured | Must be measured | Do not publish numbers without measurement. |
| Cost | Local inference cost profile | Provider/model-dependent | Do not publish cost claims without calculation. |
| Explainability | Token attribution/response fields if available | Natural-language explanation | Publish only fields visible in the app/repo. |
| Failure risk | Overconfident wrong category | Slower or inconsistent output | Safe to discuss as limitation. |

## Routing Decision Table Structure

Use this structure when evidence is ready:

| Example | Merchant known? | ONNX category | Confidence | Rule status | Route taken | Final category | Notes |
|---|---|---|---:|---|---|---|---|
| Redacted transaction text | Yes/No | Category | Measured or recorded | Pass/Fail | Merchant override / ONNX / LLM fallback | Category | Explain why route was selected. |

Rules:
- Mark examples as `representative` if they are not taken from real data.
- Do not imply production transaction volume.
- Do not publish private financial data.
- Do not show API keys, raw logs, or user identifiers.

## Current Routing Proof Status

The portfolio now contains a sample routing proof table in `docs/19_HYBRID_ROUTING_PROOF.md` and `src/data/projects.ts`.

Current status:
- Sample routing rows exist for `dominos order 750`, `bharat petrol payment 500`, `smart class monthly 899`, and `volvo bus booking 1200`.
- Every row is marked `sample/unmeasured`.
- Category and route are marked `Unknown` when not clearly documented by repo docs/code/data.
- No measured latency, cost, fallback-rate, or benchmark result is published.
- Local backend/model verification remains blocked because `models/distilbert.onnx` was missing from the cloned verified repo.

## Acceptable Qualitative Proof

Qualitative proof is acceptable for the first static homepage if it is honest:

- "Uses a local ONNX classifier first, then falls back to an LLM for low-confidence or rule-mismatched cases."
- "Merchant memory reduces repeated ambiguity when mappings are corrected or learned."
- "The design trades lower fallback frequency for threshold-tuning risk."
- "A benchmark table is planned before publishing latency or cost claims."

Not acceptable without measurement:

- "X ms faster."
- "Y percent cheaper."
- "Production-grade accuracy."
- "Always chooses the correct route."
- "Self-learning financial classifier" without correction/validation caveats.

## Minimum Evidence Before Case Study Polish

- At least 8 to 12 safe examples in the routing table.
- At least 3 cases that route through ONNX.
- At least 3 cases that route through LLM fallback.
- At least 2 merchant-memory correction or reuse examples.
- Explicit threshold value from the repo configuration.
- Measurement methodology if latency or cost appears anywhere.
