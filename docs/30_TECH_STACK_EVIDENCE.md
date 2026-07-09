# Tech Stack Evidence

Date: 2026-07-09

Purpose:
- Record the source evidence behind technologies shown in the portfolio toolkit section.
- Prevent guessed tools, fake proficiency labels, and percentage-style skill claims.

## Repos Inspected

- Portfolio: `package.json`, Astro config, source imports.
- Mahoraga: repo docs/notebook references already tracked in the evidence registry.
- Hybrid GenAI Transaction Categorizer: backend and frontend dependency/import evidence from prior Hybrid evidence passes.
- The Loop: frontend/backend dependency/import evidence from prior Loop evidence passes.

## Included Technologies

| Technology | Category | Source repo | Evidence source | Proof type |
|---|---|---|---|---|
| Astro | Static site | portfolio | `package.json` | dependency |
| TypeScript | Frontend | portfolio | `package.json` | dependency |
| Tailwind CSS | Styling | portfolio | `package.json` | dependency |
| FastAPI | Backend | Hybrid-GenAI-Transaction-Categorization | `requirements.txt` | dependency |
| ONNX Runtime | Local inference | Hybrid-GenAI-Transaction-Categorization | `backend/classify.py` | import |
| Qwen2.5 GGUF | Offline fallback | Hybrid-GenAI-Transaction-Categorization | `backend/llm.py` | docs |
| Gymnasium | RL environment | meta_Mahoraga | `notebooks/mahoraga_training.py` | import |
| React | Product UI | TIET-LOOP | `package.json` | dependency |
| SQLAlchemy | Persistence | TIET-LOOP | `main.py` | import |
| WebSockets | Realtime | TIET-LOOP | `main.py` | import |

## Excluded Uncertain Technologies

- Any tool not backed by dependency, config, import, or docs evidence.
- Proficiency percentages.
- Production infrastructure claims beyond verified deployment/config evidence.
