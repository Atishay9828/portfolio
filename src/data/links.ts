export type EvidenceStatus = "Verified" | "Known" | "Needed" | "Missing" | "Not applicable";

export type LinkRecord = {
  label: string;
  href?: string;
  referenceHref?: string;
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
    status: "Verified",
    note: "Owner-approved public LinkedIn profile activated on 2026-07-03.",
  },
  email: {
    label: "Email",
    href: "mailto:ajain8_be23@thapar.edu",
    status: "Verified",
    note: "Owner-approved public contact email activated on 2026-07-03.",
  },
  resume: {
    label: "Full-Stack SDE Resume",
    href: "/resume/atishay-jain-sde-resume.pdf",
    status: "Verified",
    note: "Owner-provided one-page Full-Stack SDE resume, published on 2026-09-01 with verified portfolio, GitHub, LinkedIn, project, and Def-Space certificate links.",
  },
  portfolioRepo: {
    label: "Portfolio repository",
    href: "https://github.com/Atishay9828/portfolio",
    status: "Verified",
    note: "Public GitHub repository verified on 2026-06-26.",
  },
};
