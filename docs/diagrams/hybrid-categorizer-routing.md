# Hybrid Categorizer Routing Diagram

Status: Known  
Portfolio readiness: Diagram file exists, but needs visual review before frontend implementation.

## Mermaid

```mermaid
flowchart TD
  Input["Transaction text"] --> Preprocess["Preprocess and normalize text"]
  Preprocess --> MerchantLookup["Merchant map lookup and extraction"]

  MerchantLookup -->|Known merchant| MerchantOverride["Return merchant_override category"]
  MerchantLookup -->|Unknown merchant| Tokenize["Tokenizer"]
  Tokenize --> ONNX["ONNX DistilBERT classifier"]
  ONNX --> Confidence["Confidence and category"]
  Confidence --> SemanticRules["Semantic rule checks"]

  SemanticRules -->|confidence >= threshold and rules pass| ONNXResult["Return ONNX prediction"]
  SemanticRules -->|low confidence or rule mismatch| LLM["Qwen2.5 LLM fallback"]
  LLM --> LLMResult["Return LLM category, confidence, explanation"]

  MerchantOverride --> Response["Structured response: merchant, category, confidence, explanation, token_attributions, used"]
  ONNXResult --> Response
  LLMResult --> Response

  Response --> Feedback["Optional /feedback correction"]
  Feedback --> MerchantMap["data/merchant_map.json"]
  MerchantMap --> MerchantLookup
```

## Source Evidence

- `docs/AI_PIPELINE.md`: merchant extraction, ONNX prediction, threshold fallback, hybrid output.
- `docs/ARCHITECTURE.md`: frontend/backend layers and response shape.
- `backend/main.py`: `/predict` and `/feedback`.
- `backend/classify.py`: `detect_merchant()`, ONNX prediction, confidence checks, semantic fallback rules, and LLM fallback.
- `data/categories.json`: `confidence_threshold`.
- `backend/feedback.py`: merchant map load/save/update.

## Confidence / Assumptions

Confidence: High.

The diagram uses documented repo components and route names. It does not include deployment infrastructure because no deployment link is currently verified for this project.

## Limitation Note

Fallback improves ambiguous cases but can add latency and depends on confidence threshold tuning. Incorrect feedback or overconfident extraction can pollute merchant memory.
