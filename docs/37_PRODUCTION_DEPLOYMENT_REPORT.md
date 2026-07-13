# Production Deployment Report

Date: 2026-07-13
Platform: Vercel
Production URL: `https://atishay-jain-portfolio.vercel.app`
Application release commit: `a53f44f942060b92ceb7a44945d3331e3001adb0`
Release branch: `release/portfolio-production`

## Build and deployment

- Framework: Astro 4.16.19, static output
- Runtime: Node.js 22.x
- Locked install: `npm ci`
- Build: `astro check && astro build`
- Output: `dist`
- Preview deployment: `dpl_H8qKrH3eerrSqpwHFArk6rXzVYXh`
- Production deployment: `dpl_ERjUA8sG9yydSm6CHWiziBNgmN1d`
- Vercel logs confirmed the exact pushed commit before both builds.

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
