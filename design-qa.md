# Desktop redesign visual QA

## Mobile repair pass - 2026-08-09

Status: PASSED - responsive implementation verified locally at 390 x 844 CSS pixels; desktop regression sampled at the browser's available 1280 x 720 viewport.

Production deployment of the mobile pass remains unverified until a release is requested.

Recording reviewed:

- `C:\Users\adish\AppData\Local\Packages\Microsoft.ScreenSketch_8wekyb3d8bbwe\TempState\Recordings\20260808-1910-43.1721381.mp4`

### Mobile requirement and defect matrix

| Finding / requirement | Verification | Result |
|---|---|---|
| Fixed `AJ MENU` control obscured content and opened an empty rail | Compact mobile control opens the real Signal Path drawer; drawer has readable labels and active contrast | Pass |
| Hero inherited desktop absolute overlays and showed a duplicate unstyled `AJ` dock | Mobile hero now reads in normal order: name, portrait, heading, and CTAs; duplicate dock is hidden | Pass |
| Projects exposed a raw horizontal scrollbar | Work track remains swipeable with snap spacing, hidden scrollbar, and a visible swipe hint | Pass |
| Mobile sections were too tall and controls collided with copy | Mobile-only spacing and control offsets keep toolkit, systems, and contact copy readable | Pass |
| First improvement counter flashed `00` | Count starts from the previous year and lands on `01` for the first card | Pass |
| Mobile page overflow | `document.documentElement.scrollWidth` matches the layout width; no horizontal page overflow | Pass |
| Browser runtime errors or warnings | Local mobile console returned an empty error/warning list | Pass |
| Desktop layout must remain unchanged | Desktop hero, rail, and About handoff sampled after the mobile patch; no mobile CSS leakage | Pass |
| Production mobile deployment | Not requested in this pass | Unverified |

### Mobile evidence

- `tmp/mobile-qa/mobile-hero-390.png`
- `tmp/mobile-qa/mobile-about-390.png`
- `tmp/mobile-qa/mobile-work-390.png`
- `tmp/mobile-qa/mobile-toolkit-390.png`
- `tmp/mobile-qa/mobile-contact-390.png`
- `tmp/mobile-qa/mobile-qa-sheet.png`

## Desktop pass (retained)

Status: PASSED — desktop scope

Scope: homepage desktop plus the mobile repair pass recorded above.

Reference sources:

- Live reference: `https://heynesh.com/`
- User recording: `C:\Users\adish\Videos\Screen Recordings\Recording 2026-07-31 154634.mp4`
- Initial feedback screenshots: `C:\Users\adish\.codex\attachments\85891529-8e50-4827-b685-ea221b45d9ac\image-1.png` through `image-16.png`
- Wide-desktop correction screenshots supplied on 2026-08-02.

Verified viewports: 2048 × 1152, 1440 × 900, and 1366 × 768 CSS pixels at device scale factor 1.

## Requirement matrix

| Requirement | Verified state | Result |
|---|---|---|
| Giant ATISHAY fills the wide hero down to the portrait's mid-chest region | 2048 hero name: x 21.5, width 2025.3, bottom 602.2 | Pass |
| Enlarged name remains separated from navigation | Gaps: 54.4 px at 2048, 89.6 px at 1440, 36.1 px at 1366 | Pass |
| Supporting hero typography and cards fill the viewport without collision | Headline, two stat cards, and trait card geometry scan | Pass |
| Hero proof numbers visibly count | `00/00` to `03/09` with highlighted counter state | Pass |
| About path and year cards remain progressive | Scroll-linked path plus threshold-gated cards | Pass |
| About year and sequence numbers visibly count and highlight | First card sampled from `'06 / 00` to `'22 / 01` with neon reached state | Pass |
| Evolution typing is clearly visible | 1, 8, then 14 visible words at 450, 1650, and 3500 ms | Pass |
| Method explanations never have text painted over them | Dedicated solid, viewport-pinned explanation dock on pointer hover and keyboard focus | Pass |
| Stage section does not leave an empty final grid cell | Five cards in one complete row at 2048; balanced 3 + 2 full-width rows below 1700 | Pass |
| Stage numbers count and highlight | `00` to `01–05` during the staged entrance | Pass |
| Final-name project imagery follows the pointer locally | First-letter and last-letter captures retain the neon base and move the radial image mask | Pass |
| No horizontal overflow or hero collisions | All three desktop sizes | Pass |
| Reduced motion remains complete and readable | Landing removed; 14 words, five cards, and `01–05` shown | Pass |

## Current evidence

- Browser state report: `C:\tmp\portfolio-pass3-final-audit\report.json`.
- Wide hero: `C:\tmp\portfolio-pass3-final-audit\2048-hero-final.png`.
- Typing sequence: `2048-evolution-450.png`, `2048-evolution-1650.png`, and `2048-evolution-3500.png` in the same evidence folder.
- Method explanation: `C:\tmp\portfolio-pass3-final-audit\2048-evolution-method-dock.png`.
- Local end-name reveal: `2048-contact-local-first.png` and `2048-contact-local-last.png`.
- Compact comparison sheet: `C:\tmp\portfolio-pass3-final-audit\pass3-final-sheet.jpg`.
- Runtime exceptions: zero.
- The only failed local resource is `/_vercel/insights/script.js`, which is the expected Vercel Analytics endpoint absent from local `astro preview`; it is not a page or hydration failure.
- Production build: exited 0, all five pages generated, Astro diagnostics zero errors and zero warnings with one generated Vercel Analytics unused-variable hint. The environment may print its known post-completion cancellation line after `Complete!`.
- Tests: 49/49 passed.

## Defect loop from the wide-desktop review

1. P1 — animated method text could paint over an inline tooltip because every animated word creates its own stacking context. Replaced the nested tooltip with one dedicated, solid explanation dock.
2. P1 — the previous end-name hover made every letter transparent at once. Preserved the neon base and moved a radial project-image mask with the pointer instead.
3. P1 — typing and number motion completed too quickly to register. Extended the word sequence and added visible count-up/highlight states to hero, About, and stage numbers.
4. P2 — the 2048 hero name stopped near the shoulders. Extended its vertical footprint to 588.9 px while fitting its right edge at 2046.8 px.
5. P2 — the five stage cards used a three-column grid and left a blank cell. Switched wide desktop to one complete five-card row and smaller desktops to balanced full rows.
6. P2 — the enlarged Builds stat card touched the central heading by roughly four pixels. Shifted it left; the final collision scan is clear.

## Earlier desktop evidence retained

- `C:\tmp\portfolio-goal-audit\report.json`
- `C:\tmp\portfolio-audit-a.jpg`
- `C:\tmp\portfolio-interactions-final.jpg`
- `C:\tmp\portfolio-transition-sheet.jpg`
- `C:\tmp\portfolio-tail-audit\report.json`
- `C:\tmp\portfolio-tail-sheet.jpg`
