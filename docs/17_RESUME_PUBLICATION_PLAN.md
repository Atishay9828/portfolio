# 17_RESUME_PUBLICATION_PLAN.md

Date: 2026-07-14

Purpose:
- Prevent local resume PDFs from being published accidentally.
- Record the selected public resume asset and the remaining public CTA boundaries.

## Current Local Resume Candidates

| Candidate | Current location | Exists locally? | Publication status |
|---|---|---|---|
| SDE / software intern resume | `tools/generate_resume.py` | Yes | Rebuilt and published as the primary public resume on 2026-07-14 |
| Data analyst resume | `E:\Downloads\ATISHAY_Data_Analyst.pdf` | Not rechecked in this pass | Not published |

## Published Public Resume

Primary public resume:
- Source: `tools/generate_resume.py`
- Downloadable build artifact: `output/pdf/atishay-jain-sde-resume.pdf`
- Destination: `public/resume/atishay-jain-sde-resume.pdf`
- Public CTA href: `/resume/atishay-jain-sde-resume.pdf`
- Refresh date: 2026-07-14
- Content checks: one page, clickable portfolio/GitHub/LinkedIn links, CGPA `8.00`, and concise transferable engineering capabilities distilled from the evidence-derived website toolkit.

The PDF is generated reproducibly with ReportLab. The public copy and downloadable output are produced from the same source to prevent drift.

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
