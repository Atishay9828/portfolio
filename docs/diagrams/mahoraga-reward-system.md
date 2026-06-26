# Mahoraga Reward System Diagram

Status: Known  
Portfolio readiness: Diagram file exists, but needs visual review before frontend implementation.

## Mermaid

```mermaid
flowchart TD
  Step["env.step(action)"] --> Info["Step info: damage_taken, damage_dealt, correct_adaptation, adaptation_stack"]
  Step --> State["State: agent_hp, enemy_hp"]
  Step --> Action["Action id"]

  Info --> Survival["survival = -damage_taken / 100"]
  Info --> Combat["combat = damage_dealt / 80"]
  Info --> Adaptation["adaptation = 0.8 if correct adaptation"]
  Action --> AntiCowardice["anti_cowardice = -1.0 if heal above 70 percent HP"]
  State --> AntiCowardice
  Info --> Efficiency["efficiency = 1.0 if damage_dealt >= 200"]
  State --> Terminal["terminal = 10.0 win, -8.0 loss"]
  Info --> Opportunity["opportunity = -0.5 if stack >= 2 and no Judgment"]
  Action --> Opportunity

  Survival --> Sum["sum reward components"]
  Combat --> Sum
  Adaptation --> Sum
  AntiCowardice --> Sum
  Efficiency --> Sum
  Terminal --> Sum
  Opportunity --> Sum

  Sum --> InfoOut["info.reward_breakdown and scalar reward"]
```

## Source Evidence

- `env/rewards.py` defines `compute_rewards()` and the component functions.
- `env/mahoraga_env.py` writes the returned dict into `info["reward_breakdown"]`.
- `env/mechanics.py` defines action effects that feed damage, adaptation, healing, and Judgment behavior.

## Confidence / Assumptions

Confidence: High.

This diagram follows the current `env/rewards.py` implementation, which includes an `opportunity` penalty in addition to survival, combat, adaptation, anti-cowardice, efficiency, and terminal rewards. If older docs disagree, prefer the current code.

## Limitation Note

Reward balance is a validation risk. The existence of anti-cowardice and opportunity penalties shows known exploit pressure, but it does not prove the learned policy is robust across broader enemy behaviors.
