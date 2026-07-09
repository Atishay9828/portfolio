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
  alt?: string;
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

export type ProjectContribution = {
  status: string;
  roleLabel: string;
  summary: string;
  bullets: string[];
  collaborativeScope: string[];
  stillToVerify: string[];
};

export type CaseStudy = {
  whatWasBuilt: string[];
  architectureSummary: string[];
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
  homepageHighlights?: string[];
  homepageBoundary?: string;
  homepageCover?: {
    src: string;
    alt: string;
  };
  problem: string;
  keyDecision: string;
  tradeoff: string;
  roleStatus: string;
  contribution?: ProjectContribution;
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
    subtitle: "Adaptive RL/game-system prototype with reward shaping, curriculum pressure, and LLM integration.",
    tier: "Featured",
    portfolioRole: "Flagship technical depth and adaptive AI systems proof.",
    statusLabel: "Prototype",
    homepageHighlights: [
      "Reward-loop and environment mechanics",
      "Gym-style stepping with FastAPI/Gradio surfaces",
      "Repo, Kaggle, and Hugging Face proof links",
    ],
    homepageBoundary: "Prototype evidence only.",
    homepageCover: {
      src: "/assets/projects/mahoraga/mahoraga-cover.svg",
      alt: "Mahoraga adaptive boss system cover",
    },
    problem: "Adaptive enemy behavior shaped through environment rules and reward signals.",
    keyDecision:
      "Separate state, mechanics, enemy curriculum, reward scoring, Gym stepping, and optional LLM paths.",
    tradeoff: "Prototype evidence only; no broad claims of robust adaptive intelligence.",
    roleStatus: "Owner-reviewed contribution wording available; exact file/module ownership is not public.",
    contribution: {
      status: "Owner-reviewed contribution wording available; file/module ownership is not public.",
      roleLabel: "Backend / RL Systems Engineer",
      summary:
        "AJ owned the adaptive backend/game-system logic, agent behavior, reward/training constraints, and LLM/backend integration under hackathon constraints.",
      bullets: [
        "Built around an adaptive loop where repeated player behavior increases pressure.",
        "Worked on agent handling, backend integration, LLM integration, and reward/training constraints.",
        "Reduced training/time complexity enough to keep the prototype workable under hackathon constraints.",
      ],
      collaborativeScope: [
        "Teammate Negi primarily handled frontend aesthetics, deployment, presentation, and related design decisions.",
        "Public copy frames Mahoraga as an applied adaptive-system prototype, not a production-grade game engine.",
      ],
      stillToVerify: [
        "Exact file/module ownership remains not documented.",
        "Training/evaluation artifacts require review before robust-performance claims.",
        "Demo media and rendered architecture review remain outside public claims.",
      ],
    },
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
      label: "Environment and reward loop",
      detail:
        "Repo-backed diagrams and reviewed captures explain the prototype loop without turning training charts into performance claims.",
      assets: [
        {
          src: "/assets/projects/mahoraga/mahoraga-system-diagram.svg",
          label: "System loop diagram",
          alt: "Mahoraga system diagram showing UI, API, environment, enemy, rewards, Gym wrapper, and LoRA training loop",
          status: "Known",
          note: "Generated from repo diagram docs and Mahoraga source inspection.",
          source: "docs/diagrams/mahoraga-architecture.md; D:/meta_Mahoraga/README.md",
        },
        {
          src: "/assets/projects/mahoraga/mahoraga-reward-loop-diagram.svg",
          label: "Reward-loop diagram",
          alt: "Mahoraga reward-loop diagram showing state, action, reward components, anti-cowardice, opportunity, and terminal signals",
          status: "Known",
          note: "Shows reward components and known exploit-pressure boundaries.",
          source: "docs/diagrams/mahoraga-reward-system.md; D:/meta_Mahoraga/docs/SYSTEM_REPORT.md",
        },
        {
          src: "/assets/projects/mahoraga/dashboard_preview.png",
          label: "Dashboard preview",
          status: "Known",
          note: "Real project artifact; not performance proof.",
          source: "Atishay9828/meta_Mahoraga:docs/dashboard_preview.png",
        },
        {
          src: "/assets/projects/mahoraga/stitch_aero_screenshot.png",
          label: "Environment UI screenshot",
          status: "Known",
          note: "Supporting environment evidence; too dense to carry the story alone.",
          source: "Atishay9828/meta_Mahoraga:docs/stitch_aero_screenshot.png",
        },
        {
          src: "/assets/projects/mahoraga/training_metrics.png",
          label: "Training chart context",
          status: "Known",
          note: "Chart artifact only; no metric interpretation without methodology context.",
          source: "Atishay9828/meta_Mahoraga:docs/training_metrics.png",
        },
      ],
    },
    missingProof: [
      "demo media",
      "reviewed training/evaluation interpretation",
      "exact file/module ownership evidence",
    ],
    caseStudy: {
      whatWasBuilt: [
        "Adaptive-agent environment with state, combat mechanics, and curriculum enemy pressure.",
        "Reward shaping around survival, combat, adaptation, anti-cowardice, efficiency, terminal, and opportunity signals.",
        "Gymnasium wrapper plus FastAPI/Gradio surfaces and optional Qwen/LoRA paths.",
      ],
      architectureSummary: [
        "Mechanics update state and expose the next decision point.",
        "Curriculum enemy changes pressure over time.",
        "Reward components score behavior and expose reward-hacking risks.",
        "Training code stays outside the environment through the Gym wrapper.",
      ],
      engineeringDecisions: [
        "Treat the boss-fight frame as a controlled adaptive environment.",
        "Keep state/mechanics, enemy curriculum, reward calculation, and Gym stepping reviewable.",
        "Add anti-cowardice and opportunity signals to discourage passive exploit behavior.",
      ],
      evidenceStatus: [
        "GitHub, Kaggle, and HuggingFace links are Verified.",
        "Reward components are documented in env/rewards.py.",
        "Generated system and reward diagrams are repo/docs-backed.",
      ],
      rewardProof: [
        "Reward components include survival, combat, adaptation, anti-cowardice, efficiency, terminal, and opportunity signals.",
        "Anti-cowardice and opportunity penalties show the loop was designed against passive healing or non-engagement behavior.",
        "The portfolio does not claim broad adaptive intelligence without stronger evaluation scope.",
      ],
      limitations: [
        "Reward hacking remains possible despite explicit penalties.",
        "Current evidence supports environment/reward design, not broad generalization or robustness claims.",
        "Hackathon/prototype constraints apply.",
      ],
      nextEvidenceNeeded: [
        "Adaptive-behavior demo GIF/video.",
        "Reviewed training/evaluation artifact selection.",
        "File/module ownership mapping if public attribution becomes necessary.",
      ],
    },
  },
  {
    slug: "hybrid-categorizer",
    title: "Hybrid GenAI Transaction Categorizer",
    subtitle:
      "Privacy-first transaction categorizer using merchant overrides, ONNX DistilBERT, and offline Qwen fallback.",
    tier: "Featured",
    portfolioRole: "Production-minded AI systems architecture proof.",
    statusLabel: "Local AI system",
    homepageHighlights: [
      "/predict validated locally on port 8001",
      "Merchant override: 0.01s; offline Qwen fallback: ~5-13s local CPU testing",
      "27 backend assertions passing",
    ],
    homepageBoundary: "Local/offline benchmark only.",
    homepageCover: {
      src: "/assets/projects/hybrid-categorizer/hybrid-cover.svg",
      alt: "Hybrid transaction routing and local AI fallback cover",
    },
    problem: "Categorize transactions without making the LLM the default path.",
    keyDecision:
      "Route in layers: merchant overrides, ONNX local inference, semantic checks, then offline Qwen fallback for ambiguity.",
    tradeoff:
      "Local/offline benchmark evidence only; this is not hosted production latency or dataset-level accuracy proof.",
    roleStatus: "Owner-reviewed contribution wording available; performance claims stay scoped to local evidence.",
    contribution: {
      status: "Owner-reviewed contribution wording available; performance limits unchanged.",
      roleLabel: "Solo Full-Stack AI Systems Builder",
      summary:
        "AJ built the full-stack offline-first AI categorization system end-to-end, including backend, frontend, local routing, merchant memory, history, AI insights, and benchmark evidence.",
      bullets: [
        "Built the UI/API path for categorizing transactions from known merchants and ambiguous vendors.",
        "Implemented merchant memory, local ONNX routing, fallback routing, history, and AI insights.",
        "Chose an offline/local model strategy because the hackathon constraint required local execution.",
      ],
      collaborativeScope: [
        "Solo project; public copy may say full-stack, solo, and end-to-end because AJ confirmed ownership.",
        "Benchmark copy stays scoped to local endpoint and CPU-only fallback evidence.",
      ],
      stillToVerify: [
        "Endpoint latency is local-only and not hosted production evidence.",
        "Qwen fallback latency needs a repeatable harness before stronger performance copy.",
        "Cost, fallback-rate, and accuracy claims require methodology and source artifacts.",
        "Deployment link and opened History AI Insight screenshot are not used as public proof yet.",
      ],
    },
    stack: ["FastAPI", "React", "Vite", "ONNX Runtime", "Qwen2.5 GGUF", "llama.cpp"],
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
      label: "Routing and memory flow",
      detail:
        "Generated routing diagrams and sample-data UI captures show the local/offline architecture without hosted-production claims.",
      assets: [
        {
          src: "/assets/projects/hybrid-categorizer/hybrid-routing-diagram.svg",
          label: "Routing diagram",
          alt: "Hybrid categorizer routing diagram showing merchant override, ONNX DistilBERT, confidence gate, semantic checks, and Qwen fallback",
          status: "Known",
          note: "Generated from Hybrid architecture docs and backend source inspection.",
          source: "docs/diagrams/hybrid-categorizer-routing.md; D:/Hybrid-GenAI-Transaction-Categorization/backend/classify.py",
        },
        {
          src: "/assets/projects/hybrid-categorizer/hybrid-memory-feedback-diagram.svg",
          label: "Memory feedback diagram",
          alt: "Hybrid categorizer memory feedback diagram showing prediction, correction, merchant map, history, and insight flow",
          status: "Known",
          note: "Shows correction and merchant-memory boundaries.",
          source: "docs/diagrams/hybrid-categorizer-memory.md; D:/Hybrid-GenAI-Transaction-Categorization/backend/feedback.py",
        },
        {
          src: "/assets/projects/hybrid-categorizer/predict.png",
          label: "Prediction flow screenshot",
          status: "Known",
          note: "Synthetic sample input UI proof; not model-quality proof.",
          source: "Hybrid frontend screenshot source from verified repo capture workflow.",
        },
        {
          src: "/assets/projects/hybrid-categorizer/memory.png",
          label: "Merchant memory screenshot",
          status: "Known",
          note: "Synthetic merchant-memory view; not usage metrics or model-quality proof.",
          source: "Hybrid frontend screenshot source from verified repo capture workflow.",
        },
        {
          src: "/assets/projects/hybrid-categorizer/categories.png",
          label: "Category detail screenshot",
          status: "Known",
          note: "Case-study support only. Visible merchants, dates, and amounts are sample/demo data.",
          source: "Atishay9828/Hybrid-GenAI-Transaction-Categorization:frontend/public/screenshots/categories.png",
        },
        {
          src: "/assets/projects/hybrid-categorizer/history.png",
          label: "History screenshot",
          status: "Known",
          note: "Shows transaction history and route tags; does not show the slide-in AI Insight panel.",
          source: "Atishay9828/Hybrid-GenAI-Transaction-Categorization:frontend/public/screenshots/history.png",
        },
      ],
    },
    missingProof: ["deployment link", "opened History AI Insight screenshot", "repeatable fallback harness"],
    caseStudy: {
      whatWasBuilt: [
        "Offline-first transaction categorizer with merchant overrides and ONNX DistilBERT inference.",
        "Qwen2.5 GGUF fallback for ambiguous or low-confidence inputs.",
        "Feedback, history, AI insights, and merchant-memory behavior.",
      ],
      architectureSummary: [
        "Known merchants can bypass inference.",
        "Confident local ONNX results return without an LLM call.",
        "Low-confidence or semantically ambiguous inputs route to offline Qwen fallback.",
        "Frontend history and memory keep ambiguity visible to the user.",
      ],
      engineeringDecisions: [
        "Prefer deterministic merchant overrides before model inference.",
        "Use ONNX classification as the local path without treating every prediction as trustworthy.",
        "Reserve merchant learning for explicit feedback so first-token mappings do not pollute memory.",
      ],
      evidenceStatus: [
        "GitHub repo and YouTube walkthrough are Verified.",
        "POST /predict was validated locally with merchant override and offline Qwen fallback examples.",
        "History AI Insight is source-code-backed through POST /transaction-insight.",
        "Backend tests cover 27 assertions in backend/tests/test_predict.py.",
      ],
      routingProof: {
        label: "Endpoint and fallback proof captured",
        note:
          "Local CPU-only endpoint and offline Qwen fallback evidence from port 8001. This is not a production SLA, hosted deployment claim, dataset accuracy claim, or zero-compute-cost claim.",
        columns: ["Input", "Category", "Used", "Confidence", "Time"],
        rows: [
          ["zomato order 500", "Food & Dining", "merchant_override", "0.99", "0.01s"],
          ["bittu coaching 500", "Education", "llm_fallback", "0.80", "12.54s"],
          ["random unclear transaction xyz 729", "Others", "llm_fallback", "1.00", "5.14s"],
          ["upi transfer to kavya trip snacks 730", "Food & Dining", "llm_fallback", "0.90", "11.70s"],
          ["uber ride 240", "Travel", "merchant_override", "0.99", "0.01s"],
          ["airtel bill 999", "Bills & Utilities", "merchant_override", "0.99", "0.01s"],
        ],
      },
      limitations: [
        "Confidence threshold tuning affects fallback frequency and correctness.",
        "Measured values are local CPU-only runs, not hosted production latency.",
        "Owner-observed local CPU-only/offline testing suggests ~60-80s to ~5-13s fallback improvement; not a formal benchmark or production SLA.",
        "The current History screenshot does not show the opened insight panel.",
      ],
      nextEvidenceNeeded: [
        "Replacement History screenshot with real /transaction-insight response.",
        "Repo-owned fallback benchmark script for repeatable Qwen evidence.",
        "Hosted deployment link only if intentionally deployed.",
        "Dataset-level accuracy evaluation before any accuracy claim.",
      ],
    },
  },
  {
    slug: "the-loop",
    title: "The Loop",
    subtitle: "Campus event platform for discovery, RSVP, friends, chat, maps, and carpool workflows.",
    tier: "Featured",
    portfolioRole: "Product engineering proof alongside the AI systems work.",
    statusLabel: "Product system",
    homepageHighlights: [
      "Event list/detail/map workflows",
      "Realtime chat and carpool coordination",
      "Repo/deployment screenshots and diagrams",
    ],
    homepageBoundary: "Collaborative project.",
    homepageCover: {
      src: "/assets/projects/the-loop/the-loop-cover.svg",
      alt: "The Loop campus event workflow cover",
    },
    problem: "Connect event discovery, interest context, RSVP, social coordination, chat, and carpool planning.",
    keyDecision:
      "Use persisted backend models, JWT auth, and WebSocket chat so coordination state is not UI-only.",
    tradeoff: "Collaborative project; exact module split is not public.",
    roleStatus: "Owner-reviewed collaborative contribution wording available; exact module ownership is not separated.",
    contribution: {
      status: "Owner-reviewed collaborative contribution wording available; exact module ownership remains collaborative/not separated.",
      roleLabel: "Collaborative Full-Stack Contributor",
      summary:
        "AJ collaborated across product flow and implementation on a campus event-discovery and coordination platform; ownership is not cleanly separable by module.",
      bullets: [
        "Worked across the product flow for centralized campus and outside-campus event discovery.",
        "Contributed across RSVP/social coordination, carpool, maps, recommendations, and admin/event workflows.",
        "Kept the case study focused on workflow evidence instead of unsupported solo module ownership.",
      ],
      collaborativeScope: [
        "Event discovery, RSVP/social coordination, friends, chat, carpool, maps, recommendations, and admin/event workflows are collaborative platform areas.",
        "Exact ownership for auth, RSVP, chat, carpool, maps, recommendations, admin, or deployment is not separated in public evidence.",
      ],
      stillToVerify: [
        "Exact module ownership remains collaborative/not separated.",
        "Event-list, event-detail, map-view, landing/auth, and redacted profile/friends visuals are owner-captured live-deployment screenshots.",
        "Raw profile/friends screenshots stay out of public use; only redacted copies may be shown.",
        "Manual deployed workflow verification remains outside public claims.",
      ],
    },
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
      status: "Verified",
      label: "Workflow and system diagrams",
      detail:
        "Public-safe live-deployment workflow screenshots and generated repo-backed diagrams cover the prototype workflow and system boundaries.",
      assets: [
        {
          src: "/assets/projects/the-loop/the-loop-events-list-live.png",
          label: "Live deployment workflow screenshot",
          alt: "The Loop events list showing dated campus events and category tags",
          status: "Verified",
          note: "Primary public visual showing the dated event timeline and category tags.",
          source: "Owner-provided clean live-deployment screenshot from https://the-loop-5m7u.onrender.com/events.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-event-detail-live.png",
          label: "Owner-captured deployment screenshot",
          alt: "The Loop event detail page showing event actions and location map",
          status: "Verified",
          note: "Supports event detail, location, and action-flow evidence.",
          source: "Owner-provided clean live-deployment screenshot from https://the-loop-5m7u.onrender.com/events.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-map-view-live.png",
          label: "Owner-captured deployment screenshot",
          alt: "The Loop map view showing event pins near Thapar Institute",
          status: "Verified",
          note: "Supports map-view event discovery evidence.",
          source: "Owner-provided clean live-deployment screenshot from https://the-loop-5m7u.onrender.com/events.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-landing-live.png",
          label: "Owner-captured deployment screenshot",
          alt: "The Loop landing/login screen",
          status: "Verified",
          note: "Optional support visual for the landing/login state.",
          source: "Owner-provided clean live-deployment screenshot from https://the-loop-5m7u.onrender.com/.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-profile-live-redacted.png",
          label: "Prototype workflow evidence",
          alt: "The Loop profile page with personal contact details redacted",
          status: "Verified",
          note: "Personal contact details are masked; supporting profile-flow evidence only.",
          source: "Owner-provided clean live-deployment screenshot from https://the-loop-5m7u.onrender.com/profile, redacted before import.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-friends-live-redacted.png",
          label: "Prototype workflow evidence",
          alt: "The Loop friends page with sent-request username redacted",
          status: "Verified",
          note: "Sent-request username is masked; supporting social-flow evidence only.",
          source: "Owner-provided clean live-deployment screenshot from https://the-loop-5m7u.onrender.com/profile, redacted before import.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-system-diagram.svg",
          label: "System diagram",
          alt: "The Loop system diagram showing React, FastAPI, database, auth, realtime, maps, and carpool layers",
          status: "Verified",
          note: "Repo-backed topology diagram for app boundaries.",
          source: "Generated from docs/diagrams/the-loop-system.md, the-loop-realtime-flow.md, and the-loop-auth-flow.md.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-recommendation-flow.svg",
          label: "Recommendation flow",
          alt: "The Loop recommendation flow diagram showing interests, event tags, cosine similarity, joins, and updated user interests",
          status: "Verified",
          note: "Shows interest/tag matching flow; not recommendation-system research proof.",
          source: "Generated from docs/diagrams/the-loop-system.md and D:/The-Loop/main.py event recommendation code.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-carpool-chat-flow.svg",
          label: "Carpool and chat flow",
          alt: "The Loop carpool and chat flow showing join, carpool request, friend request, chat history, and WebSocket delivery",
          status: "Verified",
          note: "Shows persisted coordination flow and active WebSocket path.",
          source: "Generated from docs/diagrams/the-loop-system.md, the-loop-realtime-flow.md, and D:/The-Loop/main.py.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-deployment-diagram.svg",
          label: "Deployment diagram",
          alt: "The Loop deployment diagram showing React Vite frontend, FastAPI Uvicorn backend, database, Google OAuth, Maps, and Render services",
          status: "Verified",
          note: "Render service topology only; not monitoring, backup, or SLA proof.",
          source: "Generated from docs/diagrams/the-loop-system.md and D:/The-Loop/render.yaml.",
        },
      ],
    },
    missingProof: ["demo/walkthrough media", "module ownership evidence", "manual workflow validation notes"],
    caseStudy: {
      whatWasBuilt: [
        "Central event feed with list/map views.",
        "RSVP/join flows and event detail pages.",
        "Friend requests, chat, and carpool coordination.",
        "Admin event workflows.",
        "Recommendation flow using interest/tag matching.",
      ],
      architectureSummary: [
        "React/Vite frontend.",
        "FastAPI/Uvicorn backend.",
        "SQLAlchemy data models.",
        "WebSockets for chat.",
        "Google Maps/OAuth integrations.",
        "SQLite/PostgreSQL depending environment.",
      ],
      engineeringDecisions: [
        "Frame the project around campus coordination outcomes.",
        "Persist event joins, friend requests, carpool groups, and chat history.",
        "Keep deployment, screenshot, and realtime limitations visible without production-ops claims.",
      ],
      evidenceStatus: [
        "Deployment and GitHub repo are Verified.",
        "Live screenshots cover events list, event detail, map view, landing/login, and redacted profile/friends states.",
        "System, recommendation, carpool/chat, and deployment diagrams are repo/docs-backed.",
        "Workflow screenshots support prototype evidence, not production reliability, active-user, or SLA claims.",
      ],
      workflow: [
        {
          label: "Discovery",
          detail: "Student logs in, creates profile/interest context, and reaches event discovery.",
        },
        {
          label: "Interest matching",
          detail: "Interests and event tags shape feed ordering through cosine similarity.",
        },
        {
          label: "RSVP / join",
          detail: "Joining an event writes a user-event relationship and updates interest weights.",
        },
        {
          label: "Friends, chat, and carpool",
          detail: "Friend requests, chat history, active WebSocket delivery, and carpool requests connect event intent to coordination.",
        },
        {
          label: "Admin / event management",
          detail: "Admin endpoints support event create, update, delete, and admin-owned event listing.",
        },
        {
          label: "Operational boundaries",
          detail: "Prototype/MVP evidence only; no reliability, SLA, or user-scale claims.",
        },
      ],
      limitations: [
        "WebSocket delivery depends on valid JWT state and active connections.",
        "Offline delivery and reconnect/session behavior are not proven as hardened production features.",
        "Matching is a product workflow, not recommendation-system research.",
        "Render/free-tier constraints may affect perceived reliability.",
      ],
      nextEvidenceNeeded: [
        "Safe admin screenshots only if admin/event management is visually featured.",
        "Manual deployed workflow verification before stronger reliability copy.",
        "Module ownership detail only if teammate-confirmed and still framed as collaborative.",
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
    statusLabel: "Repo verified, compact support",
    problem: "Automate resume tailoring while avoiding unsupported claims and private-data leakage.",
    keyDecision: "Frame as profile compression, prompt constraints, PDF/report workflow, and fallback planning.",
    tradeoff: "Supporting automation project; repo evidence is enough for a compact mention.",
    roleStatus: "Supporting project; repo verified.",
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
      label: "Supporting workflow artifact",
      detail: "Repo evidence supports a compact automation mention without output or ATS-result claims.",
    },
    missingProof: ["redacted sample output", "ATS report", "pipeline diagram", "role/contribution details"],
  },
  {
    slug: "webcam-alert",
    title: "Webcam Motion Alert System",
    subtitle: "OpenCV and alerting workflow for motion-triggered notifications.",
    tier: "Secondary",
    portfolioRole: "Practical automation and event-driven workflow proof.",
    statusLabel: "Repo verified, compact support",
    problem: "Detect motion and trigger useful alerts with cleanup instead of a passive camera script.",
    keyDecision: "Keep it as a compact automation project focused on motion detection and alerting behavior.",
    tradeoff: "Supporting automation project; repo evidence is enough for a compact mention.",
    roleStatus: "Supporting project; repo verified.",
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
      status: "Needed",
      label: "Supporting workflow artifact",
      detail: "Repo evidence supports a compact automation mention without screenshot or alert-delivery claims.",
    },
    missingProof: ["screenshots/demo", "workflow diagram", "role/contribution details"],
  },
];

export const labProjects = [
  {
    title: "Minimal RAG Implementation",
    category: "Lab",
    purpose: "Retrieval, chunking, embeddings, and grounded-answer workflow.",
    status: "Focused retrieval experiment.",
    repoHref: "https://github.com/Atishay9828/RAG",
    repoStatus: "Verified",
  },
  {
    title: "Music Web Scraper",
    category: "Lab",
    purpose: "Scraping pipeline for collecting and structuring music data.",
    status: "Practical data extraction build.",
    repoHref: "https://github.com/Atishay9828/app10--web-scrape-music",
    repoStatus: "Verified",
  },
  {
    title: "Global Super Store Database Project",
    category: "Lab",
    purpose: "SQL schema design, queries, and dashboard-ready business data.",
    status: "Database fundamentals proof.",
    repoHref: "https://github.com/Atishay9828/Global-Super-Store-Database",
    repoStatus: "Verified",
  },
  {
    title: "Fast and Curious Car Analysis",
    category: "Lab",
    purpose: "Exploratory car dataset analysis with visual insights.",
    status: "EDA and visualization exercise.",
    repoHref: "https://github.com/Atishay9828/Fast-and-Curious_Car-Analysis",
    repoStatus: "Verified",
  },
];

export const timelineProjectLinks = {
  "The Loop": {
    href: "/projects/the-loop/",
    external: false,
  },
  "Hybrid GenAI Transaction Categorizer": {
    href: "/projects/hybrid-categorizer/",
    external: false,
  },
  Mahoraga: {
    href: "/projects/mahoraga/",
    external: false,
  },
  ReceiptSplit: {
    href: "https://github.com/Atishay9828/ReceiptSplit",
    external: true,
  },
} satisfies Record<string, { href: string; external: boolean }>;

export const timelineStages = [
  {
    label: "Foundations",
    capability: "C++/DSA, ML basics, SQL foundations, and analysis fundamentals.",
    projects: ["C++/DSA", "ML basics", "SQL foundations"],
  },
  {
    label: "Product Engineering",
    capability: "Campus event discovery, RSVP, friends, chat, maps, and carpool workflows.",
    projects: ["The Loop"],
  },
  {
    label: "AI Systems",
    capability: "Routing, fallback behavior, local inference, and memory-aware workflow design.",
    projects: ["Hybrid GenAI Transaction Categorizer"],
  },
  {
    label: "Adaptive Systems",
    capability: "Reward design, agent behavior, environment mechanics, and evaluation constraints.",
    projects: ["Mahoraga"],
  },
  {
    label: "Current Direction",
    capability: "Receipt splitting, AI workflow systems, and production-minded automation.",
    projects: ["ReceiptSplit", "AI workflow systems"],
  },
];

export const capabilities = [
  {
    label: "AI systems architecture",
    evidence: ["Mahoraga", "Hybrid Categorizer", "AI Resume Tailoring Engine"],
  },
  {
    label: "Product engineering",
    evidence: ["The Loop", "ReceiptSplit"],
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
    evidence: ["The Loop", "Hybrid Categorizer", "ReceiptSplit"],
  },
  {
    label: "C++/DSA foundations",
    evidence: ["Coursework and resume signal"],
  },
];

export const routes = ["/", "/projects/mahoraga/", "/projects/hybrid-categorizer/", "/projects/the-loop/"];

export const getProjectBySlug = (slug: string) =>
  [...featuredProjects, ...secondaryProjects].find((project) => project.slug === slug);
