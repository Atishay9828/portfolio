# Mahoraga Architecture Diagram

Status: Known  
Portfolio readiness: Diagram file exists, but needs visual review before frontend implementation.

## Mermaid

```mermaid
flowchart TD
  User["User or evaluator"] --> UI["Gradio UI: app.py"]
  User --> CLI["CLI/random episode runner: main.py"]
  User --> API["FastAPI bridge: api.py"]

  UI --> Env["MahoragaEnv: env/mahoraga_env.py"]
  CLI --> Env
  API --> Env

  API --> LLM["Optional Qwen 2.5 3B + LoRA auto-play"]
  LLM --> ActionParser["Action parser: integer 0-4"]
  ActionParser --> Env

  Env --> Enemy["CurriculumEnemy: env/enemy.py"]
  Env --> Mechanics["Resistance, damage, judgment, healing: env/mechanics.py"]
  Env --> State["State builder: env/state.py"]
  Env --> Rewards["Reward breakdown: env/rewards.py"]
  Env --> Gym["Gym wrapper: env/gym_wrapper.py"]

  State --> TrainingPrompt["Training prompt builder: notebooks/mahoraga_training.py"]
  TrainingPrompt --> TrainingModel["Qwen 2.5 3B, 4-bit load, LoRA"]
  TrainingModel --> Rollouts["Episode rollouts"]
  Rollouts --> WeightedData["Reward-weighted SFT dataset"]
  WeightedData --> Trainer["SFTTrainer"]
  Trainer --> LoRA["LoRA checkpoints"]
```

## Source Evidence

- `env/mahoraga_env.py`: `MahoragaEnv`, `reset()`, `step()`.
- `env/enemy.py`: `CurriculumEnemy`.
- `env/mechanics.py`: resistance, damage, judgment, heal, adaptation helpers.
- `env/rewards.py`: reward component aggregation.
- `env/gym_wrapper.py`: Gymnasium-compatible wrapper.
- `app.py`: Gradio UI path.
- `api.py`: FastAPI bridge and optional Qwen/LoRA auto-play.
- `notebooks/mahoraga_training.py`: Qwen 2.5 3B, LoRA, rollouts, reward-weighted SFT.

## Confidence / Assumptions

Confidence: Medium-High.

The environment, reward, mechanics, enemy, and training components are code-backed. The final portfolio should decide whether to present Gradio, FastAPI, or the React frontend path as the primary user-facing interface.

## Limitation Note

Do not imply production infrastructure. The documented system is an RL environment, demo UI, API bridge, and training workflow, not a deployed production service.
