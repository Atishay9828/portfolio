# 17_RESUME_PUBLICATION_PLAN.md

Date: 2026-08-09

Purpose:
- Prevent local resume PDFs from being published accidentally.
- Record the selected public resume asset and the remaining public CTA boundaries.
## 2026-08-10 Full Resume-Flow Spacing Fix

- Tightened the TEDxTIET block and moved Projects, Skills, Education & Certifications, and Achievement upward together while preserving the one-page layout and all existing links.
- Local/live validation passed: 49,191 bytes, 9 annotations, one TEDxTIET entry, one `ACHIEVEMENT` heading, two Mahoraga mentions, zero certificate-number occurrences, and matching SHA-256 `73EE8216CA205EC7225333350DD94EF7C7F76060FC1807F7ABD516949BD118C9`. Production deployment `dpl_3Zt6ncqJDo1u8NsTiddduEofZ7Bq` is Ready.

## 2026-08-10 TEDxTIET Spacing Refinement

- The TEDxTIET entry now uses a compact title and location/date metadata row to remove the awkward internal spacing.
- Local and live validation passed: 49,169 bytes, 9 annotations, one `ACHIEVEMENT` heading, two Mahoraga mentions, and matching SHA-256 `EEA2CE0CCC22E6B3E7F6235810D24C12DA7BBCD56EEE2EE30F96C467D78D160`. Production deployment `dpl_G44WUuLiAoGFKogGTHxA4S1YY1jY` is Ready.

## 2026-08-10 Resume Whitespace Revision

- Tightened the two oversized vertical gaps while preserving the one-page A4 layout and all existing resume links.
- Local and live validation passed: 49,259 bytes, 9 annotations, one `ACHIEVEMENT` heading, two Mahoraga mentions, and matching SHA-256 `DF3849F6B4A66B7890ED4E1B04A15111F030BBB33BEB3C5980953DD6A313D629`. Production deployment `dpl_4iXYQ66maMbb3JKiSXMkzVhsKfQT` is Ready.

## 2026-08-09 Mahoraga Resume Revision

- The selected public SDE resume now includes Mahoraga as a fourth project.
- Existing project bullets and the Def-Space internship description were shortened to preserve a readable one-page A4 layout; the finalist achievement remains under `ACHIEVEMENT`.
- Local and live validation passed: 54,549 bytes, 9 link annotations, visual review complete, matching SHA-256 `9C4D23555B299186AEEFD74468386794E348B3BCA6DE86ADE2A9C7056EFEC71B`. Production deployment `dpl_7JR9sona2AdhR27Jai1hAjdr9fhB` is Ready.

## Current Local Resume Candidates

| Candidate | Current location | Exists locally? | Publication status |
|---|---|---|---|
| SDE / software intern resume | `E:\Downloads\Atishay_Jain_SDEResume.pdf` | Yes | Owner-provided replacement approved and published as the primary public resume on 2026-08-09 |
| Data analyst resume | `E:\Downloads\ATISHAY_Data_Analyst.pdf` | Not rechecked in this pass | Not published |

## Published Public Resume

Primary public resume:
- Source: `E:\Downloads\Atishay_Jain_SDEResume.pdf`
- Destination: `public/resume/atishay-jain-sde-resume.pdf`
- Public CTA href: `/resume/atishay-jain-sde-resume.pdf`
- Refresh date: 2026-08-09
- Content checks: one-page A4 PDF, readable visual rendering, clean text extraction, public portfolio/GitHub/LinkedIn/email annotations, and current SDE/full-stack/applied-AI content supplied by AJ. The Meta OpenEnv Hackathon 2026 finalist achievement is presented under a standalone `ACHIEVEMENT` heading, and the Def-Space internship heading carries the certificate link without displaying a separate certificate-number link.

The owner-provided PDF content is preserved at the public asset path, with the approved finalist achievement promoted from an inline line to a standalone `ACHIEVEMENT` heading while retaining the one-page layout.

## Not Published

The Data Analyst resume was not copied into the repository and is not exposed by any public CTA.

Do not add it later unless AJ explicitly selects it for a separate public use case and the same evidence/CTA guardrails are updated.

## Privacy Checklist Status

AJ explicitly approved the SDE resume as the primary public resume CTA for this pass.

Current public contact state:
- Portfolio: `https://www.atishay.app`
- GitHub: `https://github.com/Atishay9828/`
- LinkedIn: `https://www.linkedin.com/in/atishay9828/`
- Email: `ajain8_be23@thapar.edu`
- No fake certifications, links, metrics, or project claims were added. Unsupported Mahoraga performance numbers from the older PDF were not carried forward.

## Status Rule

The SDE resume is Verified as a repo-local public asset because it exists at `public/resume/atishay-jain-sde-resume.pdf` and was intentionally selected for publication.

Other resume candidates remain non-public unless explicitly selected later.
