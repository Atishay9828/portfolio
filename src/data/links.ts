export type EvidenceStatus = "Verified" | "Known" | "Needed" | "Missing" | "Not applicable";

export type LinkRecord = {
  label: string;
  href?: string;
  status: EvidenceStatus;
  note: string;
};

export const links: Record<string, LinkRecord> = {
  github: {
    label: "GitHub",
    href: "https://github.com/Atishay9828/",
    status: "Verified",
    note: "GitHub profile verified on 2026-06-26.",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/atishay9828/",
    status: "Known",
    note: "Provided, but automated verification was blocked by LinkedIn HTTP 999.",
  },
  email: {
    label: "Email",
    href: "mailto:ajain8_be23@thapar.edu",
    status: "Known",
    note: "Preferred public email still needs confirmation before launch.",
  },
  resume: {
    label: "Resume",
    status: "Known",
    note: "Local resume candidates exist outside the repo; no public resume exists under public/resume yet.",
  },
  portfolioRepo: {
    label: "Portfolio repository",
    href: "https://github.com/Atishay9828/portfolio",
    status: "Verified",
    note: "Public GitHub repository verified on 2026-06-26.",
  },
};
