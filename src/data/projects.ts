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
    statusLabel: "Prototype evidence",
    problem: "Explore whether adaptive enemy behavior can be shaped through environment rules and reward signals.",
    keyDecision:
      "Keep the environment loop as the proof surface: mechanics, curriculum pressure, reward components, Gym-style stepping, and optional LLM paths stay separated.",
    tradeoff: "Prototype evidence only; no broad claims of robust adaptive intelligence.",
    roleStatus: "Owner-reviewed contribution wording available; exact file/module ownership is not public.",
    contribution: {
      status: "Owner-reviewed contribution wording available; file/module ownership is not public.",
      roleLabel: "Backend / RL Systems Engineer",
      summary:
        "AJ owned the adaptive backend/game-system logic, agent behavior, reward/training constraints, and LLM/backend integration under hackathon constraints.",
      bullets: [
        "Built around the adaptive loop: repeated player behavior should increase Mahoraga pressure and force tactics to change.",
        "Worked on agent handling, backend integration, LLM integration, and reward/training constraints.",
        "Reduced training/time complexity enough to keep the adaptive-system prototype workable under hackathon constraints.",
      ],
      collaborativeScope: [
        "Teammate Negi primarily handled frontend aesthetics, deployment, presentation, and related design decisions.",
        "Public copy frames Mahoraga as an applied adaptive-system prototype, not a production-grade game engine or generalized RL result.",
      ],
      stillToVerify: [
        "Exact file/module ownership remains not documented.",
        "Training/evaluation artifacts require review before robust-performance claims.",
        "Demo media and architecture diagram rendering remain outside public claims.",
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
      label: "Reviewed project visuals",
      detail:
        "Repo-sourced dashboard and environment captures support the prototype story; training charts are treated as context, not performance proof.",
      assets: [
        {
          src: "/assets/projects/mahoraga/dashboard_preview.png",
          label: "Dashboard preview",
          status: "Known",
          note: "Reviewed for homepage and case-study use as a real project artifact; not performance proof.",
          source: "Atishay9828/meta_Mahoraga:docs/dashboard_preview.png",
        },
        {
          src: "/assets/projects/mahoraga/stitch_aero_screenshot.png",
          label: "Environment UI screenshot",
          status: "Known",
          note: "Use as supporting environment evidence; the asset is too dense to carry the whole story alone.",
          source: "Atishay9828/meta_Mahoraga:docs/stitch_aero_screenshot.png",
        },
        {
          src: "/assets/projects/mahoraga/training_metrics.png",
          label: "Training chart context",
          status: "Known",
          note: "Chart artifact only. Metric interpretation requires methodology context before any performance claim.",
          source: "Atishay9828/meta_Mahoraga:docs/training_metrics.png",
        },
      ],
    },
    missingProof: [
      "demo media",
      "architecture diagram revision",
      "reviewed training/evaluation interpretation",
      "exact file/module ownership evidence",
    ],
    caseStudy: {
      whatWasBuilt:
        "An adaptive-agent prototype where the core artifact is the environment loop: state, combat mechanics, curriculum enemy behavior, reward shaping, Gymnasium interaction, FastAPI/Gradio surfaces, and optional Qwen/LoRA paths.",
      architectureSummary:
        "The system is strongest when read as RL environment design: mechanics update state, the curriculum enemy changes pressure over time, reward components score behavior, and the Gym wrapper keeps training code outside the environment.",
      engineeringDecisions: [
        "Treat the boss-fight frame as a controlled adaptive environment, not as the main selling point.",
        "Separate state/mechanics, enemy curriculum, reward calculation, and Gym-compatible stepping so each part can be reviewed independently.",
        "Add anti-cowardice and opportunity signals to discourage passive exploit behavior while keeping reward hacking visible as a risk.",
      ],
      evidenceStatus: [
        "GitHub, Kaggle, and HuggingFace links are Verified.",
        "Reward components documented in env/rewards.py support the reward-loop explanation.",
        "Reviewed dashboard and environment captures support prototype UI/state evidence.",
      ],
      rewardProof: [
        "Reward components documented in env/rewards.py include survival, combat, adaptation, anti-cowardice, efficiency, terminal, and opportunity signals.",
        "Anti-cowardice and opportunity penalties show the loop was designed against passive healing or non-engagement behavior.",
        "The portfolio does not claim broad adaptive intelligence without stronger evaluation scope.",
      ],
      limitations: [
        "Reward hacking remains possible despite explicit penalties.",
        "Current evidence supports environment/reward design, not broad win-rate, generalization, or robustness claims.",
        "Hackathon/prototype constraints apply.",
      ],
      nextEvidenceNeeded: [
        "Adaptive-behavior demo GIF/video showing the loop responding to agent choices.",
        "Revised architecture diagram with rendered desktop/mobile review.",
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
    statusLabel: "Repo, walkthrough, and local routing proof",
    problem:
      "Categorize transactions without making the LLM the default path, while still handling low-confidence and ambiguous inputs honestly.",
    keyDecision:
      "Route in layers: merchant overrides for known entities, ONNX classification for confident local inference, semantic checks for obvious rules, and offline Qwen fallback for ambiguity.",
    tradeoff:
      "Local/offline benchmark evidence only; this is not hosted production latency or dataset-level accuracy proof.",
    roleStatus: "Owner-reviewed contribution wording available; performance claims stay scoped to local evidence.",
    contribution: {
      status: "Owner-reviewed contribution wording available; performance limits unchanged.",
      roleLabel: "Solo Full-Stack AI Systems Builder",
      summary:
        "AJ built the full-stack offline-first AI categorization system end-to-end, including backend, frontend, local routing, merchant memory, history, AI insights, and benchmark evidence.",
      bullets: [
        "Built the UI/API path for categorizing transactions from known merchants and local or ambiguous vendors.",
        "Implemented merchant memory, local ONNX routing, fallback routing, history, and AI insights based on previous expenditure context.",
        "Chose an offline/local model strategy because the hackathon constraint required local execution without cloud help.",
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
      label: "Sample-data UI proof",
      detail:
        "Prediction, history, category, and merchant-memory screens use safe sample transaction data. Endpoint and fallback examples are local CPU-only evidence, not hosted production proof.",
      assets: [
        {
          src: "/assets/projects/hybrid-categorizer/predict.png",
          label: "Prediction flow screenshot",
          status: "Known",
          note: "Frontend prediction-flow capture using synthetic sample input; UI proof, not model-quality proof.",
          source: "Hybrid frontend screenshot source from verified repo capture workflow.",
        },
        {
          src: "/assets/projects/hybrid-categorizer/categories.png",
          label: "Category detail screenshot",
          status: "Known",
          note: "Case-study support only. Visible merchants, dates, and amounts are sample/demo transaction data.",
          source: "Atishay9828/Hybrid-GenAI-Transaction-Categorization:frontend/public/screenshots/categories.png",
        },
        {
          src: "/assets/projects/hybrid-categorizer/history.png",
          label: "History screenshot",
          status: "Known",
          note:
            "Useful for transaction history, category confidence, and route tags only. It does not show the slide-in AI Insight panel.",
          source: "Atishay9828/Hybrid-GenAI-Transaction-Categorization:frontend/public/screenshots/history.png",
        },
        {
          src: "/assets/projects/hybrid-categorizer/memory.png",
          label: "Merchant memory screenshot",
          status: "Known",
          note: "Merchant-memory view uses synthetic merchants and amounts; not usage metrics or model-quality proof.",
          source: "Hybrid frontend screenshot source from verified repo capture workflow.",
        },
      ],
    },
    missingProof: ["deployment link", "opened History AI Insight screenshot", "repeatable fallback harness"],
    caseStudy: {
      whatWasBuilt:
        "A transaction categorization system combining merchant overrides, ONNX DistilBERT inference, offline Qwen2.5-7B GGUF fallback, feedback, history, AI insights, and merchant-memory behavior. Owner-observed local CPU-only/offline testing reduced approximate fallback latency from ~60-80s to ~5-13s; this is not a formal benchmark or production SLA.",
      architectureSummary:
        "The routing flow is layered: known merchants can bypass inference, confident local ONNX results can return without an LLM call, low-confidence or semantically ambiguous inputs route to offline Qwen fallback, and frontend history/memory keeps ambiguity visible to the user.",
      engineeringDecisions: [
        "Prefer deterministic merchant overrides before model inference when the merchant is already known.",
        "Use ONNX classification as the local path, but avoid treating every local prediction as trustworthy.",
        "Reserve merchant learning for explicit feedback so prediction calls do not write noisy first-token mappings.",
      ],
      evidenceStatus: [
        "GitHub repo and YouTube walkthrough are Verified.",
        "POST /predict was validated locally on port 8001 with merchant override and offline Qwen fallback examples.",
        "History AI Insight is source-code-backed through a slide-in HistoryPanel calling POST /transaction-insight.",
        "ONNX dtype mismatch was fixed by casting tokenizer outputs to int64 before ONNX Runtime inference.",
        "Backend tests cover 27 assertions in backend/tests/test_predict.py.",
        "External API fallback cost is 0 INR / 0 USD for these local Qwen runs; this excludes local compute cost.",
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
        "The ~60-80s to ~5-13s fallback improvement is owner-observed local testing, not a formal benchmark.",
        "The History AI Insight flow is source-backed, but the current screenshot does not show the opened insight panel.",
        "Merchant memory can encode wrong mappings if correction or extraction quality is weak.",
      ],
      nextEvidenceNeeded: [
        "Replacement History screenshot showing the real AI Insight panel with safe sample data and a real /transaction-insight response.",
        "Repo-owned fallback benchmark script if this evidence should be repeatable outside Codex.",
        "Hosted deployment link only if the project is intentionally deployed.",
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
    statusLabel: "Verified repo, deployment, and workflow visuals",
    problem:
      "Make campus event participation less fragmented by connecting discovery, interest context, RSVP/join actions, social coordination, chat, and carpool planning in one product flow.",
    keyDecision:
      "Use persisted backend models, JWT auth, and WebSocket chat so the product has real coordination state rather than only a static event listing UI.",
    tradeoff: "Collaborative project; exact module split is not public.",
    roleStatus: "Owner-reviewed collaborative contribution wording available; exact module ownership is not separated.",
    contribution: {
      status: "Owner-reviewed collaborative contribution wording available; exact module ownership remains collaborative/not separated.",
      roleLabel: "Collaborative Full-Stack Contributor",
      summary:
        "AJ collaborated across product flow and implementation on a campus event-discovery and coordination platform; ownership is not cleanly separable by module.",
      bullets: [
        "Worked across the product flow for centralized campus and outside-campus event discovery.",
        "Contributed to implementation effort and coordination across RSVP/social coordination, carpool, maps, recommendations, and admin/event workflows.",
        "Kept the case study focused on the platform workflow instead of assigning unsupported solo ownership to individual modules.",
      ],
      collaborativeScope: [
        "Event discovery, RSVP/social coordination, friends, chat, carpool, maps, recommendations, and admin/event workflows should be described as collaborative platform areas.",
        "Do not claim solo ownership of auth, RSVP, chat, carpool, maps, recommendations, admin, or deployment.",
      ],
      stillToVerify: [
        "Exact module ownership remains collaborative/not separated.",
        "Event-list, event-detail, map-view, landing/auth, and redacted profile/friends visuals are owner-captured live-deployment screenshots.",
        "Raw profile/friends screenshots stay out of public use; only redacted copies may be shown.",
        "Manual deployed workflow verification and rendered diagram review remain outside public claims.",
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
      label: "Owner-captured deployment screenshots",
      detail:
        "Live-deployment workflow screenshots cover events list, event detail, map view, landing/login, and redacted profile/friends states. These support prototype workflow evidence.",
      assets: [
        {
          src: "/assets/projects/the-loop/the-loop-events-list-live.png",
          label: "Live deployment workflow screenshot",
          alt: "The Loop events list showing dated campus events and category tags",
          status: "Verified",
          note: "Primary public visual showing the dated event timeline and category tags; prototype workflow evidence.",
          source: "Owner-provided clean live-deployment screenshot from https://the-loop-5m7u.onrender.com/events.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-event-detail-live.png",
          label: "Owner-captured deployment screenshot",
          alt: "The Loop event detail page showing event actions and location map",
          status: "Verified",
          note: "Supports event detail, location, and action-flow evidence; not reliability or usage proof.",
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
          note: "Repo-backed topology diagram for app boundaries; not production scale or reliability proof.",
          source: "Generated from docs/diagrams/the-loop-system.md, the-loop-realtime-flow.md, and the-loop-auth-flow.md.",
        },
      ],
    },
    missingProof: ["demo/walkthrough media", "module ownership evidence", "manual workflow validation notes"],
    caseStudy: {
      whatWasBuilt:
        "A full-stack student event coordination platform with authentication, profiles/interests, event discovery, RSVP/join behavior, friend flows, chat history, WebSocket chat, carpool coordination, and documented admin event endpoints.",
      architectureSummary:
        "The system combines a React frontend, FastAPI backend, SQLAlchemy models for users/events/interests/social/carpool/chat data, JWT auth, WebSocket delivery, and Render deployment configuration.",
      engineeringDecisions: [
        "Frame the project around campus coordination outcomes, not a generic social/event board.",
        "Persist event joins, friend requests, carpool groups, and chat history so the workflow has backend state.",
        "Keep deployment, screenshot, and realtime limitations visible without implying mature production operations.",
      ],
      evidenceStatus: [
        "Deployment and GitHub repo are Verified.",
        "Live-deployment screenshots cover public-safe events list, event detail, map view, landing/login, and redacted profile/friends visual states.",
        "Realtime, auth, and system topology evidence now have documented diagram sources; the public SVG is a repo-backed topology diagram.",
        "Workflow screenshots support prototype evidence, not production reliability, active-user, or SLA claims.",
      ],
      workflow: [
        {
          label: "Discovery",
          detail: "Student signs up or logs in, creates profile/interest context, and reaches event discovery from a personalized starting point.",
        },
        {
          label: "Interest matching",
          detail: "Interests shape the event feed and matching context; this is product-flow evidence, not recommendation-system research.",
        },
        {
          label: "RSVP / join",
          detail: "Student joins or RSVPs to an event, and the backend records the user-event relationship rather than leaving the action as UI-only state.",
        },
        {
          label: "Friends, chat, and carpool",
          detail: "Friend connections, chat history, active WebSocket delivery, and carpool groups/requests connect event intent to coordination.",
        },
        {
          label: "Admin / event management",
          detail: "Admin event endpoints are documented; visual proof should use safe UI evidence only.",
        },
        {
          label: "Operational boundaries",
          detail: "Disconnects, expired JWTs, multi-tab state, offline delivery, matching quality, and Render/free-tier behavior need deeper proof before reliability or scale claims.",
        },
      ],
      limitations: [
        "WebSocket delivery depends on valid JWT state and active connections.",
        "Offline delivery and reconnect/session behavior are not proven as hardened production features.",
        "Matching is a product workflow, not recommendation-system research.",
        "Workflow screenshots prove visible deployment UI states only; they do not prove scale or active-user usage.",
        "Render/free-tier constraints may affect perceived reliability.",
      ],
      nextEvidenceNeeded: [
        "Safe admin screenshots only if admin/event management is visually featured.",
        "Rendered desktop/mobile review for the system diagram asset.",
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
    purpose: "Retrieval, chunking, and grounded-answer workflow.",
    status: "Focused retrieval experiment.",
  },
  {
    title: "Music Web Scraper",
    category: "Lab",
    purpose: "Scraping pipeline for collecting and structuring music data.",
    status: "Practical data extraction build.",
  },
  {
    title: "Global Super Store Database Project",
    category: "Lab",
    purpose: "SQL schema design, queries, and dashboard-ready business data.",
    status: "Database fundamentals proof.",
  },
  {
    title: "Fast and Curious Car Analysis",
    category: "Lab",
    purpose: "Exploratory car dataset analysis with visual insights.",
    status: "EDA and visualization exercise.",
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
    capability: "Campus event discovery, RSVP, friends, chat, maps, and carpool workflows.",
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
