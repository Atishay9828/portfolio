# Manual Review Fix Pass

Date: 2026-07-09

Starting commit: `f2239fdec417accf959d4cd26a82f070c95c61da`

## Scope

- Addressed the attached manual review tasks after the deep-screening checkpoint.
- Kept all public claims evidence-bound.
- Did not invent role ownership, production reliability, usage metrics, accuracy, fallback-rate, or hosted latency claims.

## Completed

- Fixed Signal Journey progress to follow active station index.
- Removed the duplicate hero Signal Path module and kept proof anchors in the hero right panel.
- Added compact icon action rows for featured and secondary project links.
- Linked featured project titles to internal case-study pages.
- Linked verified lab repos for RAG, Music Web Scraper, Global Super Store Database, and Fast and Curious Car Analysis.
- Added diagram assets for Mahoraga, Hybrid Categorizer, and The Loop.
- Expanded the toolkit section from a narrow stack note into evidence-derived categories.
- Updated tests and docs to reflect verified links, diagram assets, and unresolved proof limits.

## Evidence Used

- GitHub repo inventory for lab links.
- Local source checkouts for The Loop, Hybrid Categorizer, Mahoraga, ReceiptSplit, and Global Super Store evidence.
- Public SDE resume for language/tooling evidence only.
- Existing portfolio docs for contribution and visual-evidence boundaries.

Note: the referenced The Loop SE report was not found in the portfolio docs, attachments, or local `D:\The-Loop` checkout during this pass. The Loop updates therefore use repo/docs/source evidence rather than report-backed claims.

## Validation

- `npm.cmd test`: 35/35 tests passed.
- `npm.cmd run build`: passed with 0 Astro diagnostics and generated 4 pages.
- Static `dist/` smoke: homepage and all three project pages exist, include titles, and do not expose Windows drive paths.
- Generated HTML scan: no forbidden public backlog/private-data phrases found.

## Blocked

- Live dev-server/browser QA. Astro dev started and printed `http://127.0.0.1:4321/`, then exited inside the sandbox due parent-directory access errors. Escalated retry was rejected by the environment usage limit.
