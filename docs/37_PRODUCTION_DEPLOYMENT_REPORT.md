# Production Deployment Report

Date: 2026-08-09
Platform: Vercel
Production URL: `https://www.atishay.app`
Application release commit: `dea4998e4f90cebc3c2905e01f948226b008fd50`
Release branch: `release/portfolio-production`
## 2026-08-10 Full Resume-Flow Spacing Fix

- Tightened the TEDxTIET entry and shifted Projects, Skills, Education & Certifications, and Achievement upward together.
- Local/live PDF validation: 49,191 bytes, SHA-256 `73EE8216CA205EC7225333350DD94EF7C7F76060FC1807F7ABD516949BD118C9`, one page, 9 annotations, one TEDxTIET entry, one `ACHIEVEMENT` heading, two Mahoraga mentions, and zero certificate-number occurrences.
- Preview deployment `dpl_7e8Pt1Sf4xvJiitjduJaW5ENe6y2` was promoted; production deployment `dpl_3Zt6ncqJDo1u8NsTiddduEofZ7Bq` is Ready on exact commit `34b4131821145363e6245ea5fff64aa70625d77f`.
- Live PDF bytes match the local verified asset at `https://www.atishay.app/resume/atishay-jain-sde-resume.pdf`.

## 2026-08-10 TEDxTIET Spacing Refinement

- Rebalanced the TEDxTIET entry into a compact title, location/date metadata row, and balanced bullet spacing.
- Local PDF validation passed: 49,169 bytes, SHA-256 `EEA2CE0CCC22E6B3E7F6235810D24C12DA7BBCD56EEE2EE30F96C467D78D160`, one page, 9 annotations, one `ACHIEVEMENT` heading, and two Mahoraga mentions.
- Preview deployment `dpl_14fHMsqnKagU4kYtVgLChaKJhpwg` was verified and promoted; production deployment `dpl_G44WUuLiAoGFKogGTHxA4S1YY1jY` is Ready on the exact release commit.
- Live resume verification returned HTTP 200 with `application/pdf`, 49,169 bytes, matching SHA-256, one page, one TEDxTIET entry, one `ACHIEVEMENT` heading, two Mahoraga mentions, zero certificate-number occurrences, and 9 annotations.

## 2026-08-10 Resume Whitespace Revision

- Tightened the oversized gaps between experience entries and before Skills while preserving the one-page A4 resume, Mahoraga, certifications, achievement heading, and 9 annotations.
- Local PDF validation passed: 49,259 bytes, SHA-256 `DF3849F6B4A66B7890ED4E1B04A15111F030BBB33BEB3C5980953DD6A313D629`, one `ACHIEVEMENT` heading, two Mahoraga mentions, and zero certificate-number occurrences.
- Preview deployment `dpl_FDdxM1kWHBBX5tbCUoDdhnc9aA3u` was verified and promoted; production deployment `dpl_4iXYQ66maMbb3JKiSXMkzVhsKfQT` is Ready on the exact release commit.
- Live resume verification returned HTTP 200 with `application/pdf`, 49,259 bytes, matching SHA-256, one page, 9 annotations, two Mahoraga mentions, one `ACHIEVEMENT` heading, and zero certificate-number occurrences. Browser smoke passed at desktop and 390x844 with 3 resume CTAs, no horizontal overflow, and no console/page errors.

## 2026-08-09 Mahoraga and Resume-Density Revision

- Added Mahoraga as a fourth project, condensed the other project bullets, and reduced the Def-Space internship description while retaining the standalone achievement section.
- Local public PDF validation passed for one-page A4 layout and visual readability. Asset size is 54,549 bytes, with 9 link annotations and SHA-256 `9C4D23555B299186AEEFD74468386794E348B3BCA6DE86ADE2A9C7056EFEC71B`.
- Preview deployment `dpl_7EG9L5xLuTvowLBAapUNpL2gigSY` was verified and promoted; production deployment `dpl_7JR9sona2AdhR27Jai1hAjdr9fhB` is Ready on the exact release commit.
- Live resume verification returned HTTP 200 with `application/pdf`, one page, matching 54,549 bytes and SHA-256, 9 link annotations, two Mahoraga mentions, one `ACHIEVEMENT` heading, and zero certificate-number text occurrences. Browser smoke passed at desktop and 390x844 with 3 resume CTAs, no horizontal overflow, and no console/page errors.

## 2026-08-09 Final Internship Name Certificate Link Release

- The visible certificate-number text and separate link were removed; the certificate URL is attached to the Def-Space internship heading above the bullet.
- Production deployment: `dpl_G6U5mEEMPssxTHmfNqHd1mU1ugUR` — Ready, tied to exact commit `ad1fcb0ed566cf2c37f4ccd3f02b627beca37463`.
- Live resume verification: HTTP 200, `application/pdf`, 73,020 bytes, one-page A4, zero certificate-number text occurrences, 8 link annotations, and SHA-256 `E6D16BFB1D76E055EFD9F941A5AF52E903C59B6E4C61BAFFFFBB7F584915F03C`.
- Browser smoke passed on desktop and 390x844 mobile production viewports with 3 resume CTAs, no horizontal overflow, and no console/page errors.

## 2026-08-09 Internship Name Certificate Link Revision

- Rebuilt the public resume bottom section so the wrapped `fundamentals.` certification line remains fully visible above `ACHIEVEMENT`.
- The visible certificate-number text and separate link were removed; the certificate URL is attached to the Def-Space internship heading above the bullet.
- Local validation passed for one-page A4 structure, clean text extraction, 8 link annotations, and visual rendering. Local public asset SHA-256: `E6D16BFB1D76E055EFD9F941A5AF52E903C59B6E4C61BAFFFFBB7F584915F03C`.
- Vercel production deployment: `dpl_6a7ouGzzf5FLqX7GL3JpcX5EKSTT` — Ready, tied to exact commit `d8aeb2cb8b5fd950b81e32eaf9b52818d331e483`.
- Live resume verification: HTTP 200, `application/pdf`, 73,229 bytes, one-page A4, full certification wrap, 8 link annotations, and SHA-256 `764D9AAE3E932FC0D7872BBD71DB42C8F6482D2D37B6FBA4209D7B7F21CCC232`.
- Browser smoke passed on desktop and 390x844 mobile production viewports with 3 resume CTAs, no horizontal overflow, no console/page errors, and a successful live PDF request.

## 2026-08-09 Achievement Heading Resume Revision

- The primary SDE resume was revised to promote the Meta OpenEnv Hackathon 2026 finalist achievement into a standalone `ACHIEVEMENT` heading while remaining one-page A4.
- Local validation passed for visual rendering, clean text extraction, and 8 preserved link annotations. Local public asset SHA-256: `D33DA440E27344674722BB9A79D806A63AD7E67E386A2D224DC02655135253A8`.
- Vercel production deployment: `dpl_7LThRun79G4jQX6E3rEf54JdibjW` — Ready, tied to exact commit `3c1e520fd15b16aa8243eef94eedfd50e00d7519`.
- Live resume verification: HTTP 200, `application/pdf`, 73,183 bytes, one-page A4, 8 link annotations, and SHA-256 `D33DA440E27344674722BB9A79D806A63AD7E67E386A2D224DC02655135253A8`.
- Production aliases include `https://www.atishay.app`, `https://atishay.app`, and `https://atishay9828-portfolio.vercel.app/`.
- Browser smoke passed on production at desktop and 390x844 mobile viewports: title loaded, 3 resume CTAs were present, no horizontal overflow, no console/page errors, and the PDF request returned HTTP 200 with `application/pdf`.

## 2026-08-09 Approved Resume Release

- Resume publication commit: `6e1c3fb` (`chore(portfolio): publish updated SDE resume`), included in the deployed branch tip `add3fd424ba765c6398e45509d37d49c4cdad30a`.
- Preview deployment: `dpl_5wixxMYjFMc7fkFSzEhzP2iaCXg9` — Ready before promotion.
- Current production deployment: `dpl_HRT5ZXgiNiXyGGjekCkyBvow8pd6` — Ready.
- Production aliases: `https://www.atishay.app`, `https://atishay.app`, and `https://atishay9828-portfolio.vercel.app/`.
- Resume URL: `/resume/atishay-jain-sde-resume.pdf`.
- Live resume verification: HTTP 200, `application/pdf`, 52,382 bytes, SHA-256 `86CCE32A41D9676F699B30C9D525C77955AF86986958966DA15542EE4DE7C643`, matching the supplied PDF.
- Chrome smoke verification: desktop and 390x844 mobile checks passed with three resume CTAs, no horizontal overflow, no console/page errors, and reduced-motion content visible.
- Anonymous preview browser proof remains unavailable because Vercel deployment protection served its access page; public production checks passed.
- Release warning: the supplied PDF preserves a time-limited certificate URL; it was published unchanged per approval and may expire independently of the site.

## 2026-08-09 Resume-release validation addendum

- `npm.cmd ci`: passed.
- `npm.cmd test`: 49/49 passed.
- `npm.cmd run lint`: passed with 0 errors and 0 warnings; one existing generated-output TypeScript hint was reported.
- `npm.cmd run build`: passed with 0 errors and generated five pages plus robots and sitemap; the known trailing esbuild cancellation text did not change the zero exit status.
- `git diff --check`: passed before the release commit.
- `npm.cmd audit --omit=dev`: reported 2 moderate and 7 high dependency advisories in Astro/build-time dependency paths; no dependency upgrade was included in this resume release.

## Build and deployment

- Framework: Astro 4.16.19, static output
- Runtime: Node.js 22.x
- Locked install: `npm ci`
- Build: `astro check && astro build`
- Output: `dist`
- Preview deployment: `dpl_H8qKrH3eerrSqpwHFArk6rXzVYXh`
- Production deployment: `dpl_ERjUA8sG9yydSm6CHWiziBNgmN1d`
- Vercel logs confirmed the exact pushed commit before both builds.

## 2026-07-14 Mobile UX Production Addendum

- Deployment: `dpl_HYYZD5ePW6a6ZbxYs6CmMzu9RBRu`
- Production alias: `https://atishay9828-portfolio.vercel.app/`
- Vercel status: Ready
- Production HTTP verification: 200; rendered HTML contains the compact primary navigation, mobile Signal Path drawer, and differentiated footer.
- Scope: mobile header hierarchy, one-portrait hero presentation, left-edge section navigation, and footer differentiation. No project evidence claims or destinations changed.

## 2026-07-14 Controlled Scroll Follow-up

- Initial controlled-scroll deployment: `dpl_7aPMk1PDhoZuv9PYoDRgw5AgxQZH`
- Recording-reviewed slower-motion deployment: `dpl_3x5pKQDaWFcoY8kCLjgmSLyMBN6q`
- Production alias: `https://atishay9828-portfolio.vercel.app/`
- Vercel status: Ready
- Signal Path and the homepage return action now share a `requestAnimationFrame` ease-in-out scroll animation with an 850ms minimum and 1.6s maximum duration. CSS native smooth scrolling is suspended during the animation so device/browser timing cannot stack or diverge; the slower pacing follows owner-provided real-phone recording review.

## 2026-07-14 Resume Refresh

- Initial deployment: `dpl_4wtrSSp1BJFP4YmFL3JvgnPVmBJM`
- CGPA-format correction deployment: `dpl_2UJEgmP2geQ7DCAPXMb5wdnftJUQ`
- Production alias: `https://atishay9828-portfolio.vercel.app/`
- Vercel status: Ready
- Replaced the public resume with a visually reviewed, ATS-friendly one-page PDF generated from `tools/generate_resume.py`.
- Production download verification passed: one page, exact text `CGPA: 8.00` with no `/10`, concise transferable engineering skills, and clickable Portfolio, GitHub, and LinkedIn links.

## 2026-07-15 Transferable Skills Resume Follow-up

- Deployment: `dpl_7ShfzW5zpsFo311RrJZD6MAbVHaU`
- Production alias: `https://atishay9828-portfolio.vercel.app/`
- Replaced project-specific entries in the resume Skills section with reusable capabilities across frontend, APIs, data modeling, AI/ML, systems/DevOps, and core CS.
- Production PDF extraction confirmed the transferable skills are present and removed resume-only references such as Qwen2.5 GGUF, Uvicorn, Render, UPI deep links, and shadcn/ui.

## Validation

- `npm ci`: passed
- `npm test`: 47/47 passed
- `npm run lint`: 0 errors, 0 warnings, 0 hints
- `npm run build`: five HTML pages plus robots and sitemap generated
- Local production browser QA: passed at mobile, tablet, laptop, desktop, and large-desktop widths
- Preview QA: all four public pages, 43 first-party URLs, resume, robots, sitemap, social image, and custom 404 passed
- Production QA: all preview checks repeated successfully; browser console and page errors were empty
- Production Lighthouse home: mobile 98/100/100/100 and desktop 99/100/100/100 for performance/accessibility/best-practices/SEO
- External links: all resolved; LinkedIn returned its expected HTTP 999 automation response and remains an owner-approved public URL

## Security review

- Gitleaks 8.30.1: current tree and 41-commit history passed with no leaks
- Environment variables: only public site-URL build variables are referenced; no private runtime secrets are required
- Static output review: no environment files, source maps, planning Markdown, local filesystem paths, localhost links, or credentials were published
- Browser/content review: no user-controlled HTML injection, forms, external scripts, mixed content, or unsafe blank-target links were found
- Response headers verified in production: CSP, HSTS, `X-Content-Type-Options`, framing protection, `Referrer-Policy`, and `Permissions-Policy`
- `npm audit --omit=dev`: two moderate and two high advisories; high findings are not reachable in this static deployment because they require Astro SSR/server islands or a network-exposed Windows development server
- Applicable unresolved critical/high production findings: none

## Rollback

Vercel retains immutable deployments. Rollback is available by restoring the previous known-good production deployment from the project deployment history. No rollback was required; the current production deployment is healthy.

## Remaining manual work

No action is required to share the Vercel URL. A custom domain and search-console registration are optional future tasks.

## 2026-08-09 Mobile Repair Release

- Release branch: `release/portfolio-production`
- Release commit: `add3fd424ba765c6398e45509d37d49c4cdad30a`
- Preview deployment: `dpl_5wixxMYjFMc7fkFSzEhzP2iaCXg9`
- Production deployment: `dpl_HRT5ZXgiNiXyGGjekCkyBvow8pd6`
- Production aliases: `https://www.atishay.app`, `https://atishay.app`, and `https://atishay9828-portfolio.vercel.app`
- Vercel state: `READY` / `PROMOTED`; Git source reports the exact release SHA above.
- Scope: mobile-only layout repair for the Signal Path drawer, hero reading order, swipeable Builds track, mobile section spacing, and the first About counter state. Desktop CSS remains outside the `max-width: 1099px` mobile rules.

### Release validation

- `npm.cmd ci`: passed; `npm audit --omit=dev` remains non-zero with the repository's known Astro/Vite dependency advisories. The available forced remediation is a breaking Astro 7 upgrade and was not applied in this release.
- `npm.cmd test -- --run`: 49/49 passed.
- `npm.cmd run lint`: 0 errors, 0 warnings, 1 generated Vercel Analytics hint.
- `npm.cmd run build`: exited 0; five pages generated. Astro still prints its known post-completion cancellation line after `Complete!`.
- `git diff --check`: passed.
- Production HTTP checks: homepage, Mahoraga route, robots, and sitemap returned 200; robots was `text/plain` and sitemap was `application/xml`.
- Real-browser mobile check at `390 × 844`: no horizontal page overflow, mobile drawer opens with active contrast, Builds track remains swipeable with the scrollbar hidden, and the first About count starts at `01`.
- Real-browser desktop regression at `1280 × 720`: mobile menu is hidden, desktop rail remains visible, and page width matches the viewport.
- Production console: no page errors. One non-blocking Google One Tap/FedCM warning was emitted by `accounts.google.com/gsi/client`; the portfolio source does not include a Google One Tap script.

Rollback remains available through Vercel's immutable deployment history; the immediately previous production deployment was not modified or deleted.
