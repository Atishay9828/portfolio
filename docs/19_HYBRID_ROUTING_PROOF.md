# 19_HYBRID_ROUTING_PROOF.md

Date: 2026-06-30

Purpose:
- Add safe routing proof for Hybrid GenAI Transaction Categorizer without inventing benchmark results.
- Separate architecture proof from measured performance proof.
- Record what was checked from the available Hybrid repo documentation and local checkout.

## What Can Be Proven Now

- The verified Hybrid repo documents a hybrid pipeline: merchant extraction, ONNX classification, LLM fallback, and merchant memory.
- `data/categories.json` documents `confidence_threshold` as `0.90`.
- `backend/classify.py` routes merchant-map matches before ONNX inference and routes low-confidence or semantic-rule-mismatched cases to LLM fallback.
- `data/merchant_map.json` includes known merchants such as `dominos` and `volvo`.
- The README and Merchant Memory docs include sample transaction texts and merchant extraction examples.
- The portfolio has safe sample-data frontend screenshots for prediction flow and merchant memory.

## What Cannot Be Proven Yet

- No production, endpoint, or Qwen fallback latency is published.
- No cost comparison is published.
- No fallback-rate, accuracy, or production-volume claim is published.
- No end-to-end local backend/model-output capture was completed in this milestone.
- Local classifier/routing latency is measured separately in `docs/20_HYBRID_BENCHMARK_RESULTS.md`.

## Local Runtime Asset Status

- `models/distilbert.onnx` is required for local ONNX inference verification.
- The earlier inspected `C:\tmp\Hybrid-GenAI-Transaction-Categorization` clone did not include `models/distilbert.onnx`.
- A separate local Hybrid repo contains the model at `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx`.
- File size: 267,956,781 bytes.
- Repository placement: inside the Hybrid repo, outside the portfolio repo.
- Git status in the Hybrid repo: not tracked; ignored by `.gitignore` rule `**/models/`.
- Commit policy: keep uncommitted. Do not copy `distilbert.onnx` into this portfolio repo.
- A clean full backend environment is still required before endpoint latency, Qwen fallback latency, fallback-rate, or model-output proof can be measured.

## Sample Routing Table

These rows are qualitative sample evidence from documented project examples. They are not measured benchmark results.

| Input text | Expected merchant extraction | Expected category if documented | Expected route if documented | Confidence status | Evidence status |
|---|---|---|---|---|---|
| `dominos order 750` | dominos | Food & Dining | Merchant override | sample/unmeasured | Merchant extraction and route are supported by repo docs/code; no measured runtime output captured. |
| `bharat petrol payment 500` | bharat petrol | Unknown | Unknown | sample/unmeasured | Merchant extraction is documented; category and route were not confirmed by a runtime/model result. |
| `smart class monthly 899` | smart class | Unknown | Unknown | sample/unmeasured | Merchant extraction is documented; category and route were not confirmed by a runtime/model result. |
| `volvo bus booking 1200` | volvo bus | Travel | Merchant override | sample/unmeasured | Merchant extraction is documented; merchant-map/code evidence supports Travel via `volvo`; no measured runtime output captured. |

## Benchmark Status

Benchmark status: partial.

The local read-only ONNX classifier/routing benchmark is recorded in `docs/20_HYBRID_BENCHMARK_RESULTS.md`. The current table in this document remains a safe qualitative proof table, not the measured performance table. Full FastAPI endpoint and Qwen fallback benchmarking remain pending.

## Evidence Limitations

- Merchant extraction examples are documentation-backed, not portfolio-measured outputs.
- Route expectations are listed only where repo code or data clearly supports them.
- Confidence remains `sample/unmeasured` for every row in this qualitative table; measured confidence values live in `docs/20_HYBRID_BENCHMARK_RESULTS.md`.
- `Unknown` is used wherever category or route was not clearly documented.
- The sample frontend screenshots prove UI states with sample data; they do not prove backend model quality.

## Next Steps To Produce Measured Latency/Cost Proof

1. Create a clean full backend environment for the Hybrid repo.
2. Run the FastAPI `/predict` endpoint locally with a fixed safe transaction set.
3. Execute Qwen fallback only after validating `llama_cpp`, local GGUF shards, and memory requirements.
4. Record category, confidence, route, semantic-rule status, and final category for each input.
5. Add endpoint/fallback timing only from a repeatable measurement method.
6. Add cost only from a documented provider/model and calculation method.
7. Keep private transaction data, account identifiers, API keys, and user context out of screenshots and tables.
