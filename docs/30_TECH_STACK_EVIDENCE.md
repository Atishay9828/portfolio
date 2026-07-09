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
- ReceiptSplit: backend/frontend config and architecture docs used for stack breadth only.
- Global Super Store Database Project: SQL schema files used for SQL evidence.
- Public SDE resume: used only for language evidence where repo-local project proof is not the right source.

## Included Technologies

| Technology | Category | Source repo | Evidence source | Proof type |
|---|---|---|---|---|
| Python | Languages | ReceiptSplit | `backend/pyproject.toml` | config |
| TypeScript | Languages | portfolio | `package.json` | dependency |
| JavaScript | Languages | TIET-LOOP | `src/main.jsx` | import |
| C++ | Languages | portfolio | `public/resume/atishay-jain-sde-resume.pdf` | docs |
| SQL | Languages | Global-Super-Store-Database | `table sql files/superstore_orders.sql` | docs |
| React | Frontend | TIET-LOOP | `package.json` | dependency |
| Next.js | Frontend | ReceiptSplit | `frontend/package.json` | dependency |
| Astro | Frontend | portfolio | `package.json` | dependency |
| Vite | Frontend | Hybrid-GenAI-Transaction-Categorization | `frontend/package.json` | dependency |
| Tailwind CSS | Frontend | TIET-LOOP | `tailwind.config.js` | config |
| shadcn/ui | Frontend | Hybrid-GenAI-Transaction-Categorization | `frontend/package.json` | dependency |
| FastAPI | Backend / APIs | Hybrid-GenAI-Transaction-Categorization | `requirements.txt` | dependency |
| Node.js | Backend / APIs | TIET-LOOP | `package.json` | dependency |
| REST APIs | Backend / APIs | TIET-LOOP | `main.py` | docs |
| WebSockets | Backend / APIs | TIET-LOOP | `main.py` | import |
| Uvicorn | Backend / APIs | TIET-LOOP | `render.yaml` | config |
| ONNX Runtime | AI / ML | Hybrid-GenAI-Transaction-Categorization | `backend/classify.py` | import |
| DistilBERT | AI / ML | Hybrid-GenAI-Transaction-Categorization | `backend/classify.py` | docs |
| Qwen2.5 GGUF | AI / ML | Hybrid-GenAI-Transaction-Categorization | `backend/reasoner.py` | docs |
| llama.cpp | AI / ML | Hybrid-GenAI-Transaction-Categorization | `backend/reasoner.py` | import |
| PyTorch | AI / ML | meta_Mahoraga | `requirements.txt` | dependency |
| Gymnasium | AI / ML | meta_Mahoraga | `notebooks/mahoraga_training.py` | import |
| LoRA | AI / ML | meta_Mahoraga | `docs/SYSTEM_REPORT.md` | docs |
| PostgreSQL | Data / Databases | ReceiptSplit | `docker-compose.dev.yml` | config |
| SQLite | Data / Databases | TIET-LOOP | `main.py` | config |
| Supabase | Data / Databases | ReceiptSplit | `backend/pyproject.toml` | dependency |
| SQLAlchemy | Data / Databases | TIET-LOOP | `main.py` | import |
| Docker | DevOps / Deployment | meta_Mahoraga | `Dockerfile` | config |
| GitHub Actions | DevOps / Deployment | Hybrid-GenAI-Transaction-Categorization | `.github/workflows/ci.yml` | config |
| GitHub | DevOps / Deployment | portfolio | `docs/11_LINK_REGISTRY.md` | docs |
| Render | DevOps / Deployment | TIET-LOOP | `render.yaml` | config |
| Auth/JWT | Product Systems | TIET-LOOP | `main.py` | docs |
| Realtime | Product Systems | ReceiptSplit | `docs/architecture/events.md` | docs |
| OCR pipelines | Product Systems | ReceiptSplit | `docs/architecture/ocr.md` | docs |
| UPI deep links | Product Systems | ReceiptSplit | `docs/architecture/settlement.md` | docs |
| Maps | Product Systems | TIET-LOOP | `src/components/MapView.jsx` | import |
| Recommendations | Product Systems | TIET-LOOP | `main.py` | docs |

## Excluded Uncertain Technologies

- Any tool not backed by dependency, config, import, or docs evidence.
- Proficiency percentages.
- Production infrastructure claims beyond verified deployment/config evidence.
