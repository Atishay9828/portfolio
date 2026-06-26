# The Loop Realtime Flow Diagram

Status: Known  
Portfolio readiness: Diagram file exists, but needs visual review before frontend implementation.

## Mermaid

```mermaid
sequenceDiagram
  participant UserA as User A browser
  participant HookA as useChatSystem.js
  participant API as FastAPI main.py
  participant Manager as ConnectionManager
  participant DB as Database
  participant UserB as User B browser

  UserA->>HookA: login state available
  HookA->>API: GET /friends and friend request endpoints
  HookA->>API: GET /chat/history/{friend_id}
  HookA->>API: WebSocket /ws/chat/{client_id}?token=JWT
  API->>API: decode JWT and verify user id
  API->>Manager: connect websocket
  Manager->>UserB: broadcast online status if friend connected

  UserA->>HookA: send message
  HookA->>API: websocket JSON {receiver_id, content}
  API->>DB: persist ChatMessage
  API->>Manager: send message to receiver
  Manager->>UserB: deliver message if connected
  API->>Manager: echo message to sender
  Manager->>UserA: confirm message

  UserA--xAPI: disconnect
  API->>Manager: remove websocket
  Manager->>UserB: broadcast offline status
```

## Source Evidence

- `main.py`: `/ws/chat/{client_id}`, JWT validation, `ConnectionManager`, `ChatMessage` persistence, status broadcast.
- `src/hooks/useChatSystem.js`: WebSocket creation, message send, message receive, status handling, friend data fetch.

## Confidence / Assumptions

Confidence: High.

This diagram follows the current WebSocket implementation. It does not claim automatic reconnection, delivery guarantees, or message queueing because those are not documented.

## Limitation Note

If the socket closes, the current documented flow depends on reconnect behavior in the browser session and active JWT state. Offline users do not receive realtime delivery through a queue in the documented code path.
