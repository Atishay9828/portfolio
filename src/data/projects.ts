import type { EvidenceStatus, LinkRecord } from "./links";

export type ProjectTier = "Featured" | "Secondary" | "Lab" | "Timeline";

export type ProjectLink = Pick<LinkRecord, "label" | "href" | "status"> & {
  href: string;
};

export type VisualEvidence = {
  kind: "evidence-panel" | "diagram-spec";
  status: EvidenceStatus;
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tier: ProjectTier;
  portfolioRole: string;
  statusLabel: string;
  problem: string;
  keyDecision: string;
  tradeoff: string;
  roleStatus: string;
  stack: string[];
  links: ProjectLink[];
  visual: VisualEvidence;
  missingProof: string[];
};

export const featuredProjects: Project[] = [
  {
    slug: "mahoraga",
    title: "Mahoraga",
    subtitle: "Adaptive combat RL environment and reward-system experiment.",
    tier: "Featured",
    portfolioRole: "Flagship technical depth and primary adaptive AI systems proof.",
    statusLabel: "Hackathon/prototype evidence, partially public-ready",
    problem: "Show adaptive agent behavior through environment design, reward shaping, and behavior constraints rather than a generic model wrapper.",
    keyDecision: "Frame the system around environment mechanics, reward components, Gym-style interaction, and optional Qwen/LoRA paths.",
    tradeoff: "Reward hacking remains possible; evaluation scope is not broad enough to claim robust adaptive intelligence.",
    roleStatus: "Role / contribution details: Needed",
    stack: ["Python", "Gymnasium", "FastAPI", "Gradio", "Qwen 2.5", "LoRA"],
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/Atishay9828/meta_Mahoraga",
        status: "Verified",
      },
      {
        label: "Kaggle notebook",
        href: "https://www.kaggle.com/code/atishay9828/meta-mahoraga/edit",
        status: "Verified",
      },
      {
        label: "HuggingFace demo",
        href: "https://huggingface.co/spaces/MridulNegi2005/Project-Mahoraga",
        status: "Verified",
      },
    ],
    visual: {
      kind: "evidence-panel",
      status: "Known",
      label: "Pending visual asset",
      detail: "Reward-system diagram is approved at spec level, but rendered/mobile QA and portfolio-local media are still required.",
    },
    missingProof: [
      "portfolio-local demo GIF/video",
      "architecture diagram revision",
      "selected screenshot or training artifact",
      "role/contribution details",
    ],
  },
  {
    slug: "hybrid-categorizer",
    title: "Hybrid GenAI Transaction Categorizer",
    subtitle: "Local ONNX classifier with confidence routing, LLM fallback, and merchant memory.",
    tier: "Featured",
    portfolioRole: "Production-minded AI systems architecture proof.",
    statusLabel: "Verified walkthrough/repo, benchmark evidence pending",
    problem: "Categorize transactions without sending every request to an LLM, while preserving fallback behavior for low-confidence or ambiguous cases.",
    keyDecision: "Use a local classifier first, route uncertain cases through rules or LLM fallback, and retain merchant memory for repeated ambiguity.",
    tradeoff: "Threshold tuning affects fallback rate and correctness; LLM fallback can add latency and cost.",
    roleStatus: "Role / contribution details: Needed",
    stack: ["FastAPI", "React", "Vite", "ONNX", "LLM fallback", "Client-side memory"],
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/Atishay9828/Hybrid-GenAI-Transaction-Categorization",
        status: "Verified",
      },
      {
        label: "YouTube walkthrough",
        href: "https://youtu.be/fsTXVh9JpoE",
        status: "Verified",
      },
    ],
    visual: {
      kind: "evidence-panel",
      status: "Known",
      label: "Pending visual asset",
      detail: "Routing and memory diagram specs exist, but both need revision before final frontend use.",
    },
    missingProof: [
      "deployment link",
      "portfolio-local screenshots",
      "latency/cost benchmark",
      "routing decision table",
      "role/contribution details",
    ],
  },
  {
    slug: "the-loop",
    title: "The Loop",
    subtitle: "Full-stack student coordination platform with events, friends, chat, and carpool flows.",
    tier: "Featured",
    portfolioRole: "Main Product Engineer proof and AI-only balance.",
    statusLabel: "Verified deployment/repo, screenshots pending",
    problem: "Turn campus event discovery and coordination into a real user workflow with auth, matching, chat, RSVP/join, and carpool support.",
    keyDecision: "Use FastAPI, PostgreSQL models, JWT auth, and WebSocket chat to connect product workflows instead of shipping a frontend-only event board.",
    tradeoff: "Realtime delivery depends on valid JWT state and active connections; session and reconnect behavior need deeper hardening before reliability claims.",
    roleStatus: "Role / contribution details: Needed",
    stack: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "WebSockets", "Render"],
    links: [
      {
        label: "Live deployment",
        href: "https://the-loop-5m7u.onrender.com/",
        status: "Verified",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/Atishay9828/TIET-LOOP",
        status: "Verified",
      },
    ],
    visual: {
      kind: "evidence-panel",
      status: "Known",
      label: "Pending visual asset",
      detail: "Realtime/auth diagrams are approved at spec level, but screenshots and rendered/mobile QA are still required.",
    },
    missingProof: [
      "portfolio-local product screenshots",
      "system diagram revision",
      "demo/walkthrough media",
      "role/contribution details",
      "validation/testing evidence",
    ],
  },
];

export const secondaryProjects: Project[] = [
  {
    slug: "resume-engine",
    title: "AI Resume Tailoring Engine",
    subtitle: "Constrained LLM workflow automation for resume generation.",
    tier: "Secondary",
    portfolioRole: "LLM workflow automation support signal.",
    statusLabel: "Repo verified, output evidence missing",
    problem: "Automate resume tailoring while avoiding unsupported claims and private-data leakage.",
    keyDecision: "Frame as profile compression, prompt constraints, PDF/report workflow, and fallback planning.",
    tradeoff: "Without redacted outputs and ATS evidence, this can look like a commodity wrapper.",
    roleStatus: "Role / contribution details: Needed",
    stack: ["LLM workflow", "PDF generation", "ATS reporting"],
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/Atishay9828/AI_Resume_Builder_ATS_Friendly",
        status: "Verified",
      },
    ],
    visual: {
      kind: "evidence-panel",
      status: "Needed",
      label: "Pending visual asset",
      detail: "Sample output, ATS report, pipeline diagram, and anti-hallucination examples are still missing.",
    },
    missingProof: ["redacted sample output", "ATS report", "pipeline diagram", "role/contribution details"],
  },
  {
    slug: "webcam-alert",
    title: "Webcam Motion Alert System",
    subtitle: "OpenCV and alerting workflow for motion-triggered notifications.",
    tier: "Secondary",
    portfolioRole: "Practical automation and event-driven workflow proof.",
    statusLabel: "Repo verified, screenshots missing",
    problem: "Detect motion and trigger useful alerts with cleanup instead of a passive camera script.",
    keyDecision: "Keep it as a compact automation project until screenshots and workflow proof exist.",
    tradeoff: "If screenshots/demo remain unavailable, this should move down to Lab.",
    roleStatus: "Role / contribution details: Needed",
    stack: ["OpenCV", "Streamlit", "SMTP", "Threading"],
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/Atishay9828/Webcam-Alert-App",
        status: "Verified",
      },
    ],
    visual: {
      kind: "evidence-panel",
      status: "Missing",
      label: "Pending visual asset",
      detail: "Streamlit, motion detection, and email alert screenshots are not available in the portfolio repo.",
    },
    missingProof: ["screenshots/demo", "workflow diagram", "role/contribution details"],
  },
];

export const labProjects = [
  {
    title: "Minimal RAG Implementation",
    category: "Lab",
    purpose: "Retrieval fundamentals and grounding workflow.",
    status: "Text-only until repo and example output are provided.",
  },
  {
    title: "Music Web Scraper",
    category: "Lab",
    purpose: "Practical scraping and data extraction.",
    status: "Text-only until repo or output artifact is provided.",
  },
  {
    title: "Global Super Store Database Project",
    category: "Lab",
    purpose: "SQL/database foundations and schema thinking.",
    status: "Text-only until report, schema, or query artifacts are provided.",
  },
  {
    title: "Fast and Curious Car Analysis",
    category: "Lab",
    purpose: "Data analysis and visualization foundations.",
    status: "Text-only until notebook/repo and dataset source are provided.",
  },
];

export const timelineStages = [
  {
    label: "Foundations",
    capability: "C++/DSA, ML basics, and analysis fundamentals.",
    projects: ["Custom Linear Regression Model", "Iris Classification", "Netflix EDA"],
  },
  {
    label: "Automation & Practical Tooling",
    capability: "Small tools that turn manual workflows into repeatable systems.",
    projects: ["Music Web Scraper", "Webcam Motion Alert System"],
  },
  {
    label: "Systems & Data Engineering",
    capability: "Data models, query structure, and backend-oriented thinking.",
    projects: ["Global Super Store Database Project"],
  },
  {
    label: "Product Engineering",
    capability: "User workflows, authentication, persistence, deployment, and realtime coordination.",
    projects: ["The Loop"],
  },
  {
    label: "AI Systems",
    capability: "Routing, fallback behavior, workflow automation, and memory.",
    projects: ["Hybrid GenAI Transaction Categorizer", "AI Resume Tailoring Engine"],
  },
  {
    label: "Adaptive Intelligence",
    capability: "Reward design, agent behavior, environment mechanics, and evaluation constraints.",
    projects: ["Mahoraga"],
  },
];

export const capabilities = [
  {
    label: "AI systems architecture",
    evidence: ["Mahoraga", "Hybrid Categorizer", "AI Resume Tailoring Engine"],
  },
  {
    label: "Product engineering",
    evidence: ["The Loop"],
  },
  {
    label: "Automation",
    evidence: ["Resume Engine", "Webcam Motion Alert", "Music Web Scraper"],
  },
  {
    label: "Data and ML foundations",
    evidence: ["Minimal RAG", "Global Super Store", "Fast and Curious", "Linear Regression"],
  },
  {
    label: "Full-stack implementation",
    evidence: ["The Loop", "Hybrid Categorizer"],
  },
  {
    label: "C++/DSA foundations",
    evidence: ["Coursework and foundations signal"],
  },
];

export const routes = ["/", "/projects/mahoraga", "/projects/hybrid-categorizer", "/projects/the-loop"];

export const getProjectBySlug = (slug: string) =>
  [...featuredProjects, ...secondaryProjects].find((project) => project.slug === slug);
