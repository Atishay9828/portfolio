# 20_HYBRID_BENCHMARK_RESULTS.md

Date: 2026-06-30

## Environment

- Local benchmark only on AJ's Windows machine.
- Platform recorded by Python: `Windows-11-10.0.26200-SP0`.
- Python: `3.12.13` from the Codex bundled runtime.
- Temporary benchmark dependencies: `onnxruntime 1.27.0`, `transformers 5.12.1`, `numpy 2.5.0`.
- ONNX provider: `CPUExecutionProvider`.
- Tokenizer source: `distilbert-base-uncased`. The Hybrid repo did not contain `models/tokenizer`, so the tokenizer was loaded by `transformers` with Hugging Face cache redirected to `C:\tmp\hybrid-hf-cache`.
- Temporary benchmark harness: `C:\tmp\hybrid_benchmark.py`.
- Temporary raw result file: `C:\tmp\hybrid_benchmark_results.json`.

## Model Path

- Model path used: `D:\Hybrid-GenAI-Transaction-Categorization\models\distilbert.onnx`.
- Model size: 267,956,781 bytes.
- The model remains outside the portfolio repo.
- The model was not copied into `C:\Users\adish\OneDrive\Documents\Portfolio`.
- The Hybrid repo keeps the model untracked and ignored by `.gitignore` rule `**/models/`.

## Benchmark Scope

Execution mode used: read-only ONNX classifier/routing benchmark.

This was option C from the benchmark plan, not the full FastAPI endpoint. The harness mirrored the repo's preprocessing, merchant lookup, confidence threshold, ONNX label mapping, and semantic fallback checks. It intentionally did not write to `data/merchant_map.json`, did not call Qwen fallback, and did not claim final LLM fallback latency.

Full endpoint and direct repo-function execution were not used because the current Python environment did not have the repo runtime ready. The direct repo import check failed before prediction with:

```text
ImportError: cannot import name 'AutoTokenizer' from 'transformers' (unknown location)
```

The backend also imports local Qwen fallback modules eagerly, so a full endpoint benchmark requires a clean backend environment with the LLM runtime validated separately.

## Methodology

- Inputs: four safe representative sample strings requested for this benchmark.
- Runs: 20 measured runs per sample.
- Warmup: 5 warmup runs per sample.
- Timer: Python `time.perf_counter()`.
- Latency unit: milliseconds.
- Measurement boundary: preprocessing, merchant lookup, local ONNX inference when required, threshold/rule routing decision, and response construction inside the read-only harness.
- Model/session load time was excluded.
- Fallback provider latency was excluded because Qwen fallback was not called.
- Merchant-memory writes were suppressed to keep the Hybrid repo unchanged.

## Sample Inputs

- `dominos order 750`
- `bharat petrol payment 500`
- `smart class monthly 899`
- `volvo bus booking 1200`

## Results

| Input text | Merchant extracted | Predicted category | Route taken | Confidence | Median local latency | Average | Min | Max | Runs / warmup | Limitation |
|---|---|---|---|---:|---:|---:|---:|---:|---|---|
| `dominos order 750` | dominos | Food & Dining | merchant_override | 0.990000 | 0.063 ms | 0.074 ms | 0.060 ms | 0.156 ms | 20 / 5 | Merchant override path; no ONNX inference or fallback call executed. |
| `bharat petrol payment 500` | Not extracted | Fuel | onnx | 0.974231 | 471.853 ms | 495.742 ms | 220.769 ms | 990.375 ms | 20 / 5 | Read-only ONNX route; merchant-map auto-learning writes suppressed. |
| `smart class monthly 899` | Not extracted | Travel | llm_fallback_required_not_measured | 0.658133 | 401.394 ms | 399.690 ms | 262.666 ms | 521.698 ms | 20 / 5 | Qwen fallback was not called; latency is local classifier/routing latency only. |
| `volvo bus booking 1200` | volvo | Travel | merchant_override | 0.990000 | 0.075 ms | 0.744 ms | 0.071 ms | 13.307 ms | 20 / 5 | Merchant override path; no ONNX inference or fallback call executed. |

## Limitations

- Local benchmark only; not a production SLA.
- The full FastAPI `/predict` endpoint was not benchmarked.
- The direct `backend.classify.classify_transaction` function was not used because repo import failed in the temporary environment.
- Qwen fallback was not called, so fallback latency is not measured.
- Cost is not measured or calculated.
- Fallback-rate is not measured.
- Accuracy is not measured.
- The tokenizer was not repo-local; it came from `distilbert-base-uncased` through the temporary Hugging Face cache.
- Merchant-memory persistence was intentionally disabled in the harness to avoid mutating the Hybrid repo during benchmarking.

## Blockers

- Create a clean Hybrid backend environment with pinned dependencies.
- Decide whether the benchmark should include Qwen fallback. If yes, validate `llama_cpp`, both local Qwen GGUF shards, memory requirements, and startup behavior first.
- Add or document a repo-local tokenizer asset if fully offline reproducibility is required.
- Add a repo-owned benchmark script in the Hybrid repo if this evidence should become repeatable outside Codex.

## What These Results Prove

- The located local ONNX model can be loaded and executed with `CPUExecutionProvider`.
- The requested sample set can be processed through a read-only local classifier/routing harness.
- Merchant override rows avoid ONNX inference and are much faster in this local harness.
- `bharat petrol payment 500` produced an ONNX Fuel result above the configured 0.90 threshold in this local run.
- `smart class monthly 899` produced a low-confidence ONNX hint and would route to fallback under the documented routing rules.

## What These Results Do Not Prove

- They do not prove production latency.
- They do not prove deployed API behavior.
- They do not prove Qwen fallback latency, quality, or cost.
- They do not prove fallback-rate, accuracy, or savings.
- They do not prove that merchant memory improves future production behavior.
- They do not prove that the frontend screenshots were generated from the backend model path.

## Portfolio-Safe Summary

Hybrid now has a measured local ONNX classifier/routing benchmark for four safe sample inputs using the located `distilbert.onnx` model. The safe public framing is: local classifier/routing latency was measured in a read-only harness, one row required unmeasured LLM fallback, and cost, fallback-rate, production SLA, and endpoint-level claims remain blocked.
