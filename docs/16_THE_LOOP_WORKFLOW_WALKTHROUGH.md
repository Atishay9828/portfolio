# 16_THE_LOOP_WORKFLOW_WALKTHROUGH.md

Date: 2026-06-26

Purpose:
- Turn The Loop from a list of features into a clear student workflow.
- Define screenshot needs before case-study or homepage polish.

## Student Problem

Students need one place to discover campus events, signal interest, coordinate with friends, chat around plans, and organize carpools. The portfolio should frame The Loop as event coordination infrastructure for a student community, not as a generic social app.

## Discovery Flow

1. Student lands on The Loop.
2. Student signs up or logs in.
3. Student completes or updates interests/profile data.
4. App shows events and matching/recommendation context based on available profile/interests.
5. Student opens an event detail or card to decide whether to join.

Evidence needs:
- Landing screenshot.
- Interest/profile screenshot.
- Event discovery screenshot.
- Event detail screenshot if available.

## RSVP / Join Flow

1. Student views an event.
2. Student joins or RSVPs.
3. Backend records the user-event relation.
4. UI reflects participation state.
5. Event membership can support later coordination.

Evidence needs:
- Before/after RSVP state.
- User-event joined state if visible.
- Safe demo data with no private registrations.

## Friend / Chat / Carpool Flow

1. Student searches for or receives friend requests.
2. Student accepts or manages a friend connection.
3. Student opens chat with a friend.
4. Browser connects to `/ws/chat/{client_id}` with a JWT token.
5. Messages are persisted and delivered through active WebSocket connections.
6. Student creates or joins a carpool group/request when the event context requires travel coordination.

Evidence needs:
- Friend search/request screenshot.
- Chat screenshot with safe sample messages.
- Carpool group/request screenshot.
- Realtime diagram from `docs/diagrams/the-loop-realtime-flow.md`.

## Admin Flow

Documented admin endpoints exist for event creation/update/delete. Use this flow only if the UI/admin behavior is captured safely.

1. Admin or privileged user creates an event.
2. Admin updates event details.
3. Event appears in the discovery flow.
4. Admin deletes or manages stale event data if needed.

Evidence needs:
- Admin event creation screenshot if UI exists.
- Event update/delete screenshot only with safe demo data.
- If no public-safe admin UI exists, keep this as backend capability in the case study and do not feature it on the homepage.

## Edge Cases

- WebSocket disconnects can interrupt realtime delivery.
- Expired or invalid JWTs can block REST or WebSocket access.
- Multi-tab sessions can create state consistency issues.
- Offline users do not have a documented realtime delivery queue.
- Recommendation/matching quality depends on available interest data.
- Render/free-tier deployment constraints may cause cold starts or reliability limits.

## Screenshot Checklist

Required before production-ready UI polish:

- [ ] Landing page.
- [ ] Login/signup flow.
- [ ] Interest/profile setup.
- [ ] Event discovery.
- [ ] Event detail.
- [ ] RSVP/join before state.
- [ ] RSVP/join after state.
- [ ] Friend search/request.
- [ ] Chat with safe demo content.
- [ ] Carpool group/request.

Conditional:

- [ ] Admin event creation.
- [ ] Admin update/delete.
- [ ] Deployment/cold-start note if visible to users.

Redaction:
- Remove real student names, emails, chat content, carpool locations, JWTs, admin credentials, and private event registration details.

