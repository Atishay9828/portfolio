# The Loop System Diagram

Status: Known  
Portfolio readiness: Diagram file exists, but needs visual review before frontend implementation.

## Mermaid

```mermaid
flowchart TD
  User["Student user"] --> React["React + Vite SPA"]
  React --> REST["FastAPI REST API: main.py"]
  React --> WSClient["WebSocket client: useChatSystem.js"]

  REST --> Auth["Auth: email/password, Google OAuth, JWT"]
  REST --> Events["Events API: list, join, admin create/update/delete"]
  REST --> Profiles["Users and interests API"]
  REST --> Carpool["Carpool groups and requests"]
  REST --> Friends["Friend requests and search"]
  REST --> ChatHistory["Chat history API"]

  WSClient --> WSRoute["/ws/chat/{client_id}"]
  WSRoute --> Manager["ConnectionManager active connections"]

  Auth --> DB["SQLAlchemy database"]
  Events --> DB
  Profiles --> DB
  Carpool --> DB
  Friends --> DB
  ChatHistory --> DB
  WSRoute --> DB

  DB --> Tables["Users, Events, UserInterests, UserEvents, CarpoolGroups, CarpoolRequests, FriendRequests, ChatMessages"]
```

## Source Evidence

- `README.md`: React SPA, FastAPI REST backend, event discovery, matching, friends, chat, carpool.
- `main.py`: SQLAlchemy models, REST routes, auth helpers, WebSocket route.
- `src/hooks/useChatSystem.js`: client-side friends/chat/WebSocket behavior.
- `render.yaml`: separate frontend and backend Render services.

## Confidence / Assumptions

Confidence: High for app boundaries and database model names. Medium for final deployment topology because public frontend/backend route behavior should be manually rechecked before launch copy.

## Limitation Note

Do not imply mature production operations. The repo documents app services and Render config, but not monitoring, observability, backups, or load testing.
