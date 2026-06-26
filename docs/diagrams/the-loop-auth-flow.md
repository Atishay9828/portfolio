# The Loop Auth Flow Diagram

Status: Known  
Portfolio readiness: Diagram file exists, but needs visual review before frontend implementation.

## Mermaid

```mermaid
flowchart TD
  Browser["React auth UI"] --> Choice{"Auth method"}

  Choice --> Email["Email/password login or signup"]
  Email --> UsersAPI["/users/signup or /users/login"]
  UsersAPI --> PasswordHash["argon2 password hash/verify"]
  PasswordHash --> JWT["create_access_token()"]

  Choice --> Google["Google OAuth login"]
  Google --> GoogleAPI["/auth/google"]
  GoogleAPI --> VerifyGoogle["Verify Google id token or userinfo"]
  VerifyGoogle --> FindOrCreate["Find or create user"]
  FindOrCreate --> JWT

  JWT --> ClientStore["Frontend stores token"]
  ClientStore --> ProtectedREST["Authorization Bearer token"]
  ProtectedREST --> Decode["get_current_user() decodes JWT"]
  Decode --> DBUser["Load user from database"]

  ClientStore --> ProtectedWS["WebSocket token query param"]
  ProtectedWS --> WSDecode["WebSocket route decodes JWT"]
  WSDecode --> WSAllow["Accept socket if token user matches client_id"]
```

## Source Evidence

- `main.py`: `OAuth2PasswordBearer`, `create_access_token()`, `get_current_user()`, `/users/signup`, `/users/login`, `/auth/google`, `/ws/chat/{client_id}`.
- `src/components/LandingPage.jsx`, `LoginPage.jsx`, and `SignupPage.jsx`: frontend calls to email/password and Google auth endpoints.
- `src/hooks/useChatSystem.js`: WebSocket token query param.

## Confidence / Assumptions

Confidence: High.

The auth components are directly visible in code. The final portfolio should not imply advanced session management, refresh-token rotation, or enterprise auth hardening unless implemented and documented.

## Limitation Note

JWT expiry, token storage, and WebSocket token passing are areas to frame as practical MVP auth rather than hardened production security.
