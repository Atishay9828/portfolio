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
  assets?: VisualAsset[];
};

export type VisualAsset = {
  src: string;
  label: string;
  status: EvidenceStatus;
  note: string;
  source: string;
};

export type RoutingProof = {
  label: string;
  note: string;
  columns: string[];
  rows: string[][];
};

export type WorkflowStep = {
  label: string;
  detail: string;
};

export type CaseStudy = {
  whatWasBuilt: string;
  architectureSummary: string;
  engineeringDecisions: string[];
  evidenceStatus: string[];
  limitations: string[];
  nextEvidenceNeeded: string[];
  rewardProof?: string[];
  routingProof?: RoutingProof;
  workflow?: WorkflowStep[];
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
  caseStudy?: CaseStudy;
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
    roleStatus: "Role/contribution details pending verification.",
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
      label: "Imported candidate visuals",
      detail: "Repo-contained dashboard, screenshot, and training-metrics candidates are now portfolio-local, but still need final visual review before production polish.",
      assets: [
        {
          src: "/assets/projects/mahoraga/dashboard_preview.png",
          label: "Dashboard preview candidate",
          status: "Known",
          note: "Reviewed 2026-06-27; approved for homepage/case-study use as visual proof, but not as performance proof.",
          source: "Atishay9828/meta_Mahoraga:docs/dashboard_preview.png",
        },
        {
          src: "/assets/projects/mahoraga/stitch_aero_screenshot.png",
          label: "Environment UI screenshot candidate",
          status: "Known",
          note: "Reviewed 2026-06-27; approved for case-study-only support because the 512px asset is too dense for homepage use.",
          source: "Atishay9828/meta_Mahoraga:docs/stitch_aero_screenshot.png",
        },
        {
          src: "/assets/projects/mahoraga/training_metrics.png",
          label: "Training metrics candidate",
          status: "Known",
          note: "Reviewed 2026-06-27; candidate only. Metric claims remain blocked until methodology and evaluation limits are documented.",
          source: "Atishay9828/meta_Mahoraga:docs/training_metrics.png",
        },
      ],
    },
    missingProof: [
      "portfolio-local demo GIF/video",
      "architecture diagram revision",
      "selected screenshot or training artifact",
      "role/contribution details",
    ],
    caseStudy: {
      whatWasBuilt:
        "A combat-style adaptive RL environment with environment mechanics, reward components, Gymnasium wrapper, FastAPI/Gradio interfaces, and optional Qwen/LoRA training paths documented in the source evidence pack.",
      architectureSummary:
        "The documented architecture separates environment state and mechanics, enemy curriculum behavior, reward calculation, Gym-compatible stepping, and demo/API surfaces. Training and runtime/demo flows still need a simplified final diagram before polished use.",
      engineeringDecisions: [
        "Use environment and reward design as the core proof instead of presenting the project as a generic model wrapper.",
        "Expose a Gym-compatible interaction layer so training logic can sit outside the environment mechanics.",
        "Keep reward-hacking risk visible because anti-cowardice and opportunity penalties reduce, but do not eliminate, exploit behavior.",
      ],
      evidenceStatus: [
        "GitHub, Kaggle, and HuggingFace links are Verified.",
        "Reward-system diagram is approved at spec level, but rendered/mobile QA is still required.",
        "Architecture diagram needs revision before final frontend visual use.",
        "Imported visual assets are Known candidates, not final Verified polished evidence.",
      ],
      rewardProof: [
        "Reward components documented in `env/rewards.py` include survival, combat, adaptation, anti-cowardice, efficiency, terminal, and opportunity signals.",
        "Anti-cowardice and opportunity penalties are evidence that passive healing or non-engagement behavior was considered.",
        "The portfolio should not claim robust adaptive intelligence until evaluation scope and training artifacts are reviewed.",
      ],
      limitations: [
        "Reward hacking remains possible despite explicit penalties.",
        "Evaluation scope is not broad enough yet for robust adaptive-agent claims.",
        "Hackathon/prototype constraints should stay visible in final copy.",
      ],
      nextEvidenceNeeded: [
        "Final adaptive-behavior demo GIF/video.",
        "Revised architecture diagram and rendered/mobile diagram QA.",
        "Reviewed training/evaluation artifact selection.",
        "Verified role/contribution details.",
      ],
    },
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
    roleStatus: "Role/contribution details pending verification.",
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
      label: "Imported candidate screenshots",
      detail: "Prediction, category, history, and merchant-memory screenshots are now portfolio-local candidates; benchmark/routing proof remains pending.",
      assets: [
        {
          src: "/assets/projects/hybrid-categorizer/predict.png",
          label: "Categories dashboard candidate",
          status: "Known",
          note: "Reviewed 2026-06-27; replace before polish because the file is not a prediction-flow screenshot despite its filename.",
          source: "Atishay9828/Hybrid-GenAI-Transaction-Categorization:frontend/public/screenshots/predict.png",
        },
        {
          src: "/assets/projects/hybrid-categorizer/categories.png",
          label: "Category detail screenshot candidate",
          status: "Known",
          note: "Reviewed 2026-06-27; case-study candidate only after sample-data labeling or redaction of merchant/transaction details.",
          source: "Atishay9828/Hybrid-GenAI-Transaction-Categorization:frontend/public/screenshots/categories.png",
        },
        {
          src: "/assets/projects/hybrid-categorizer/history.png",
          label: "History screenshot candidate",
          status: "Known",
          note: "Reviewed 2026-06-27; useful for routing explanation, but merchant/transaction rows need sample-data labeling or redaction.",
          source: "Atishay9828/Hybrid-GenAI-Transaction-Categorization:frontend/public/screenshots/history.png",
        },
        {
          src: "/assets/projects/hybrid-categorizer/memory.png",
          label: "Transaction detail screenshot candidate",
          status: "Known",
          note: "Reviewed 2026-06-27; replace before polish as merchant-memory proof because the image shows transaction detail, not memory.",
          source: "Atishay9828/Hybrid-GenAI-Transaction-Categorization:frontend/public/screenshots/memory.png",
        },
      ],
    },
    missingProof: [
      "deployment link",
      "portfolio-local screenshots",
      "latency/cost benchmark",
      "routing decision table",
      "role/contribution details",
    ],
    caseStudy: {
      whatWasBuilt:
        "A transaction categorization app that combines a local ONNX classifier, confidence/rule checks, optional LLM fallback, feedback, and merchant-memory behavior documented in the repo architecture and AI pipeline notes.",
      architectureSummary:
        "The documented system uses a React/Vite frontend, FastAPI backend, ONNX prediction path, semantic fallback rules, LLM fallback, and client-side memory/history. The routing and memory diagrams still need revision before final visual use.",
      engineeringDecisions: [
        "Use local classification as the default path instead of sending every transaction to an LLM.",
        "Route ambiguous or low-confidence cases through rules or fallback rather than forcing overconfident local predictions.",
        "Keep merchant memory as a practical ambiguity-reduction mechanism with explicit correction-quality risk.",
      ],
      evidenceStatus: [
        "GitHub repo and YouTube walkthrough are Verified.",
        "Imported UI screenshots are Known candidates and need final visual/privacy review.",
        "Routing and memory diagram specs are Known but need revision.",
        "Latency, cost, fallback-rate, and benchmark claims remain blocked.",
      ],
      routingProof: {
        label: "Benchmark pending",
        note: "The routing table structure is ready, but no measured or selected transaction examples exist in the portfolio repo yet.",
        columns: [
          "Example",
          "Merchant known?",
          "ONNX category",
          "Confidence",
          "Rule status",
          "Route taken",
          "Final category",
          "Notes",
        ],
        rows: [],
      },
      limitations: [
        "Confidence threshold tuning affects fallback frequency and correctness.",
        "LLM fallback can add latency and cost, but no numbers are published until measured.",
        "Merchant memory can encode wrong mappings if correction or extraction quality is weak.",
      ],
      nextEvidenceNeeded: [
        "8 to 12 safe routing examples from the benchmark plan.",
        "Measured latency/cost only if captured with a repeatable method.",
        "Final screenshot selection and privacy review.",
        "Verified role/contribution details.",
      ],
    },
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
    roleStatus: "Role/contribution details pending verification.",
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
      label: "Imported candidate screenshots",
      detail: "Landing and interest-selection screenshots are now portfolio-local candidates; product-flow coverage is still incomplete.",
      assets: [
        {
          src: "/assets/projects/the-loop/landing_page.jpg",
          label: "Landing screenshot candidate",
          status: "Known",
          note: "Reviewed 2026-06-27; replace before polish because the 320px-wide file is too low-resolution for homepage or case-study use.",
          source: "Atishay9828/TIET-LOOP:assets/landing_page.jpg",
        },
        {
          src: "/assets/projects/the-loop/interest_selection.png",
          label: "Interest selection screenshot candidate",
          status: "Known",
          note: "Reviewed 2026-06-27; approved for case-study-only workflow support, not homepage proof.",
          source: "Atishay9828/TIET-LOOP:assets/interest_selection.png",
        },
      ],
    },
    missingProof: [
      "portfolio-local product screenshots",
      "system diagram revision",
      "demo/walkthrough media",
      "role/contribution details",
      "validation/testing evidence",
    ],
    caseStudy: {
      whatWasBuilt:
        "A full-stack student event coordination platform with authentication, profiles/interests, event discovery, RSVP/join behavior, friend flows, chat, carpool coordination, and documented admin event endpoints.",
      architectureSummary:
        "The documented system uses a React frontend, FastAPI backend, SQLAlchemy models for users/events/social/carpool/chat data, JWT auth, WebSocket chat, and Render deployment configuration. System topology still needs diagram revision before final polish.",
      engineeringDecisions: [
        "Frame the project around student coordination workflows rather than a generic social/event board.",
        "Use persisted backend models and JWT/WebSocket flows to support real coordination states.",
        "Keep deployment and realtime limitations visible instead of implying mature production operations.",
      ],
      evidenceStatus: [
        "Deployment and GitHub repo are Verified.",
        "Workflow walkthrough is Known from docs, but screenshots remain incomplete.",
        "Realtime and auth diagrams are approved at spec level; system diagram needs revision.",
        "Imported landing and interest screenshots are Known candidates, not final polished assets.",
      ],
      workflow: [
        {
          label: "Discovery",
          detail: "Student lands on The Loop, signs up or logs in, then reaches event discovery through profile and interest context.",
        },
        {
          label: "Interest matching",
          detail: "Profile/interests inform the event feed and matching context; screenshot evidence is still incomplete.",
        },
        {
          label: "RSVP / join",
          detail: "Student joins or RSVPs to an event and the backend records a user-event relation.",
        },
        {
          label: "Friends, chat, and carpool",
          detail: "Friend connections, chat history, active WebSocket delivery, and carpool groups/requests support coordination.",
        },
        {
          label: "Admin / event management",
          detail: "Admin event endpoints are documented; feature this only after safe UI evidence exists.",
        },
        {
          label: "Edge cases / pending evidence",
          detail: "Disconnects, expired JWTs, multi-tab state, offline delivery, matching quality, and Render/free-tier behavior need deeper proof before reliability claims.",
        },
      ],
      limitations: [
        "WebSocket delivery depends on valid JWT state and active connections.",
        "Offline delivery and reconnect/session behavior are not proven as hardened production features.",
        "Matching is a product workflow, not proven recommendation-system research.",
        "Render/free-tier constraints may affect perceived reliability.",
      ],
      nextEvidenceNeeded: [
        "Event discovery, RSVP/join, friend/chat, carpool, and safe admin screenshots.",
        "System diagram revision plus rendered/mobile QA.",
        "Manual deployed workflow verification before launch copy.",
        "Verified role/contribution details.",
      ],
    },
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
