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
    subtitle: "Adaptive-agent environment with explicit reward shaping, curriculum pressure, and evaluation limits.",
    tier: "Featured",
    portfolioRole: "Flagship technical depth and primary adaptive AI systems proof.",
    statusLabel: "Hackathon/prototype evidence, partially public-ready",
    problem: "Explore whether adaptive behavior can be shaped through environment rules, reward incentives, and anti-exploit constraints instead of presenting another model wrapper.",
    keyDecision: "Make the environment loop the proof surface: mechanics, curriculum enemy behavior, reward components, Gym-style stepping, and optional Qwen/LoRA paths stay separated.",
    tradeoff: "The design is technically interesting, but reward hacking and narrow evaluation still block claims of robust adaptive intelligence.",
    roleStatus: "Owner-reviewed contribution wording available; exact file/module ownership still not mapped.",
    contribution: {
      status: "Owner-reviewed contribution wording available; file/module ownership remains not documented.",
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
        "Public copy should frame Mahoraga as an applied adaptive-system prototype, not a production-grade game engine or generalized RL result.",
      ],
      stillToVerify: [
        "Exact file/module ownership remains not documented.",
        "Training/evaluation artifacts still need review before robust-performance claims.",
        "Demo media and final architecture diagram QA remain pending.",
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
      label: "Imported candidate visuals",
      detail: "Repo-contained dashboard, screenshot, and training-metrics candidates are portfolio-local and reviewed, but still need final launch selection, diagram QA, and evidence labeling before production polish.",
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
      "exact file/module ownership still not mapped",
    ],
    caseStudy: {
      whatWasBuilt:
        "An adaptive-agent prototype where the core artifact is the environment loop: state, combat mechanics, curriculum enemy behavior, reward shaping, Gymnasium interaction, FastAPI/Gradio surfaces, and optional Qwen/LoRA training paths documented in the evidence pack.",
      architectureSummary:
        "The system is strongest when read as an RL environment design: mechanics update state, the curriculum enemy changes pressure over time, reward components score behavior, and the Gym wrapper keeps training code outside the environment. The training and demo/API paths still need a cleaner final diagram before polished use.",
      engineeringDecisions: [
        "Treat the boss-fight frame as a controlled adaptive environment, not as the main selling point.",
        "Separate state/mechanics, enemy curriculum, reward calculation, and Gym-compatible stepping so each part of the loop can be reasoned about independently.",
        "Add anti-cowardice and opportunity signals to discourage passive exploit behavior, while still labeling reward hacking as an open risk.",
      ],
      evidenceStatus: [
        "GitHub, Kaggle, and HuggingFace links are Verified.",
        "Reward-system diagram is approved at spec level because the reward components are code-backed, but rendered/mobile QA is still required.",
        "Architecture diagram needs revision before final frontend visual use.",
        "Imported visual assets are Known candidates, not final Verified polished evidence.",
      ],
      rewardProof: [
        "Reward components documented in `env/rewards.py` include survival, combat, adaptation, anti-cowardice, efficiency, terminal, and opportunity signals.",
        "Anti-cowardice and opportunity penalties show that the loop was designed against passive healing or non-engagement behavior, not only toward damage output.",
        "The portfolio should not claim robust adaptive intelligence until evaluation scope and training artifacts are reviewed.",
      ],
      limitations: [
        "Reward hacking remains possible despite explicit penalties.",
        "Current evidence supports environment/reward design, not broad win-rate, generalization, or robustness claims.",
        "Hackathon/prototype constraints should stay visible; the case study should not imply production-ready AI behavior.",
      ],
      nextEvidenceNeeded: [
        "Final adaptive-behavior demo GIF/video that shows the loop responding to agent choices.",
        "Revised architecture diagram separating training, runtime/demo, and optional API/UI surfaces, followed by rendered/mobile diagram QA.",
        "Reviewed training/evaluation artifact selection.",
        "File/module ownership mapping if the final public case study needs per-file attribution.",
      ],
    },
  },
  {
    slug: "hybrid-categorizer",
    title: "Hybrid GenAI Transaction Categorizer",
    subtitle: "Hybrid transaction routing: merchant override first, local ONNX when useful, fallback only when confidence breaks down.",
    tier: "Featured",
    portfolioRole: "Production-minded AI systems architecture proof.",
    statusLabel: "Verified walkthrough/repo, local benchmark partial",
    problem: "Categorize transactions without making the LLM the default path, while still handling low-confidence and ambiguous inputs honestly.",
    keyDecision: "Route in layers: merchant overrides for known entities, ONNX classification for confident local inference, semantic checks for obvious rules, and LLM fallback only when the local path is not enough.",
    tradeoff: "The architecture is cost-conscious, but the current proof is local-only; endpoint behavior, fallback latency, cost, fallback-rate, and accuracy remain unmeasured.",
    roleStatus: "Owner-reviewed contribution wording available; benchmark limits remain visible.",
    contribution: {
      status: "Owner-reviewed contribution wording available; benchmark limitations unchanged.",
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
        "Benchmark copy must stay scoped to the local read-only classifier/routing evidence already documented.",
      ],
      stillToVerify: [
        "Endpoint latency remains blocked.",
        "Qwen fallback latency remains blocked.",
        "Cost, fallback-rate, and accuracy claims remain blocked.",
        "Deployment link and opened History AI Insight screenshot remain pending.",
      ],
    },
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
      label: "Sample-data UI proof",
      detail: "Prediction-flow and merchant-memory screenshots were replaced with captures from the running Hybrid frontend using synthetic demo transactions. Category/history screenshots remain sample-labeled case-study candidates; the current History screenshot shows the list view but not the AI Insight panel. Local classifier/routing benchmark is documented, while endpoint/fallback proof remains pending.",
      assets: [
        {
          src: "/assets/projects/hybrid-categorizer/predict.png",
          label: "Prediction flow screenshot",
          status: "Known",
          note: "Replaced 2026-06-27 with a real frontend prediction-flow capture using synthetic sample input `demo cafe payment 750`; this is UI proof, not backend benchmark evidence.",
          source: "Local capture from verified repo frontend at C:/tmp/Hybrid-GenAI-Transaction-Categorization with controlled sample /predict response.",
        },
        {
          src: "/assets/projects/hybrid-categorizer/categories.png",
          label: "Category detail screenshot candidate",
          status: "Known",
          note: "Reviewed 2026-06-27; case-study candidate only. Treat all visible merchants, dates, and amounts as sample/demo transaction data; do not present them as real spending evidence.",
          source: "Atishay9828/Hybrid-GenAI-Transaction-Categorization:frontend/public/screenshots/categories.png",
        },
        {
          src: "/assets/projects/hybrid-categorizer/history.png",
          label: "History screenshot candidate",
          status: "Known",
          note: "Re-reviewed 2026-06-30; useful for transaction history, category confidence, and route tags only. It does not show the slide-in AI Insight panel and must be labeled as sample/demo data if used.",
          source: "Atishay9828/Hybrid-GenAI-Transaction-Categorization:frontend/public/screenshots/history.png",
        },
        {
          src: "/assets/projects/hybrid-categorizer/memory.png",
          label: "Merchant memory screenshot",
          status: "Known",
          note: "Replaced 2026-06-27 with a merchant-memory capture using synthetic merchants `Demo Cafe` and `Sample Transit`; this proves the UI memory view, not measured model quality.",
          source: "Local capture from verified repo frontend at C:/tmp/Hybrid-GenAI-Transaction-Categorization with synthetic sample transactions.",
        },
      ],
    },
    missingProof: [
      "deployment link",
      "endpoint-level latency benchmark",
      "Qwen fallback latency/cost benchmark",
      "cost/fallback-rate/accuracy proof",
      "full backend/model-output capture if final proof requires end-to-end inference",
    ],
    caseStudy: {
      whatWasBuilt:
        "A transaction categorization system that combines merchant overrides, a local ONNX classifier, confidence and rule checks, optional LLM fallback, feedback, history, and merchant-memory behavior documented in the repo architecture and AI pipeline notes.",
      architectureSummary:
        "The routing flow is intentionally layered: known merchants can bypass inference, confident local ONNX results can return without an LLM call, low-confidence or semantically ambiguous inputs route toward fallback, and frontend history/memory keeps repeated ambiguity visible to the user. The routing and memory diagrams still need revision before final visual use.",
      engineeringDecisions: [
        "Prefer deterministic merchant overrides before model inference when the merchant is already known.",
        "Use ONNX classification as the local path, but avoid treating every local prediction as trustworthy.",
        "Keep fallback and merchant memory framed as practical routing tools, not as measured cost savings or autonomous learning proof.",
      ],
      evidenceStatus: [
        "GitHub repo and YouTube walkthrough are Verified.",
        "Prediction-flow and merchant-memory UI screenshots are portfolio-local Known assets captured with synthetic sample data.",
        "Category/history screenshots remain Known case-study candidates and must be presented as sample/demo transaction data if used.",
        "History AI Insight is source-code-backed through a slide-in `HistoryPanel` calling `POST /transaction-insight`, but the current `history.png` list screenshot does not show that panel.",
        "Routing and memory diagram specs are Known but need revision.",
        "Local ONNX classifier/routing benchmark is documented; production latency, endpoint latency, Qwen fallback latency, cost, fallback-rate, and accuracy claims remain blocked.",
      ],
      routingProof: {
        label: "Local benchmark measured",
        note: "Local benchmark only from 2026-06-30 using a read-only ONNX classifier/routing harness against `D:\\Hybrid-GenAI-Transaction-Categorization\\models\\distilbert.onnx`. This is not a production SLA, not an endpoint benchmark, and Qwen fallback was not called, so cost and fallback-rate claims remain blocked.",
        columns: [
          "Input text",
          "Merchant extracted",
          "Predicted category",
          "Route taken",
          "Confidence",
          "Median local latency",
          "Runs / warmup",
          "Limitation",
        ],
        rows: [
          [
            "dominos order 750",
            "dominos",
            "Food & Dining",
            "merchant_override",
            "0.990000",
            "0.063 ms",
            "20 / 5",
            "Merchant override path; no ONNX inference or fallback call executed.",
          ],
          [
            "bharat petrol payment 500",
            "Not extracted",
            "Fuel",
            "onnx",
            "0.974231",
            "471.853 ms",
            "20 / 5",
            "Read-only ONNX route; merchant-map auto-learning writes suppressed.",
          ],
          [
            "smart class monthly 899",
            "Not extracted",
            "Travel",
            "llm_fallback_required_not_measured",
            "0.658133",
            "401.394 ms",
            "20 / 5",
            "Qwen fallback was not called; latency is local classifier/routing latency only.",
          ],
          [
            "volvo bus booking 1200",
            "volvo",
            "Travel",
            "merchant_override",
            "0.990000",
            "0.075 ms",
            "20 / 5",
            "Merchant override path; no ONNX inference or fallback call executed.",
          ],
        ],
      },
      limitations: [
        "Confidence threshold tuning affects fallback frequency and correctness.",
        "LLM fallback can add latency and cost, but Qwen fallback was not called in the local benchmark.",
        "Measured numbers are local read-only harness results, not production SLA, endpoint latency, or Qwen fallback latency.",
        "The History AI Insight flow is source-backed, but the current screenshot does not show the opened insight panel.",
        "Merchant memory can encode wrong mappings if correction or extraction quality is weak.",
      ],
      nextEvidenceNeeded: [
        "Full FastAPI `/predict` endpoint benchmark after a clean backend environment is available.",
        "Measured Qwen fallback latency and cost only if captured with a repeatable method and documented calculation.",
        "Replacement History screenshot showing the real `AI Insight` panel with safe sample data and a real `/transaction-insight` response.",
        "Add a repo-owned Hybrid benchmark script if this benchmark should become repeatable outside Codex.",
        "End-to-end backend/model-output capture only if the final case study needs inference proof beyond frontend UI state.",
        "Endpoint/Qwen/cost/fallback-rate/accuracy proof before stronger performance wording.",
      ],
    },
  },
  {
    slug: "the-loop",
    title: "The Loop",
    subtitle: "Campus event coordination platform connecting discovery, RSVP, friends, chat, and carpool workflows.",
    tier: "Featured",
    portfolioRole: "Main Product Engineer proof and AI-only balance.",
    statusLabel: "Verified deployment/repo, live workflow visuals added",
    problem: "Make campus event participation less fragmented by connecting discovery, interest context, RSVP/join actions, social coordination, chat, and carpool planning in one product flow.",
    keyDecision: "Use persisted backend models, JWT auth, and WebSocket chat so the product has real coordination state rather than only a static event listing UI.",
    tradeoff: "The product flow is credible, but workflow screenshots, deployed behavior checks, exact module ownership, and realtime hardening evidence remain pending.",
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
        "Event-list, event-detail, map-view, landing/auth, and redacted profile/friends visuals are now owner-provided live-deployment screenshots.",
        "Raw profile/friends screenshots remain excluded from public use; only redacted copies may be shown.",
        "Manual deployed workflow verification and system diagram revision remain pending.",
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
        "Owner-provided live-deployment workflow screenshots are portfolio-local, privacy-reviewed, and public-safe after redacting profile/friends identifiers. The events list is the primary visual; event detail, map view, landing/login, and redacted profile/friends screens support prototype workflow evidence.",
      assets: [
        {
          src: "/assets/projects/the-loop/the-loop-events-list-live.png",
          label: "Live deployment workflow screenshot",
          alt: "The Loop events list showing dated campus events and category tags",
          status: "Verified",
          note:
            "Owner-captured deployment screenshot reviewed 2026-07-06. Primary public visual showing the dated event timeline and category tags; prototype workflow evidence, not production-readiness proof.",
          source: "Owner-provided clean live-deployment screenshot from https://the-loop-5m7u.onrender.com/events.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-event-detail-live.png",
          label: "Event detail deployment screenshot",
          alt: "The Loop event detail page showing event actions and location map",
          status: "Verified",
          note:
            "Owner-captured deployment screenshot reviewed 2026-07-06. Supports event detail, location, and action-flow evidence; does not prove reliability, usage, or production SLA.",
          source: "Owner-provided clean live-deployment screenshot from https://the-loop-5m7u.onrender.com/events.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-map-view-live.png",
          label: "Map view deployment screenshot",
          alt: "The Loop map view showing event pins near Thapar Institute",
          status: "Verified",
          note:
            "Owner-captured deployment screenshot reviewed 2026-07-06. Supports map-view event discovery evidence; map labels are public map-provider labels.",
          source: "Owner-provided clean live-deployment screenshot from https://the-loop-5m7u.onrender.com/events.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-landing-live.png",
          label: "Landing/login deployment screenshot",
          alt: "The Loop landing/login screen",
          status: "Verified",
          note:
            "Owner-captured deployment screenshot reviewed 2026-07-06. Optional support visual with placeholder login text only; not used as the primary workflow proof.",
          source: "Owner-provided clean live-deployment screenshot from https://the-loop-5m7u.onrender.com/.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-profile-live-redacted.png",
          label: "Redacted profile deployment screenshot",
          alt: "The Loop profile page with personal contact details redacted",
          status: "Verified",
          note:
            "Owner-captured deployment screenshot reviewed and redacted 2026-07-06. Personal contact details are masked; supporting profile-flow evidence only.",
          source: "Owner-provided clean live-deployment screenshot from https://the-loop-5m7u.onrender.com/profile, redacted before import.",
        },
        {
          src: "/assets/projects/the-loop/the-loop-friends-live-redacted.png",
          label: "Redacted friends deployment screenshot",
          alt: "The Loop friends page with sent-request username redacted",
          status: "Verified",
          note:
            "Owner-captured deployment screenshot reviewed and redacted 2026-07-06. The sent-request username is masked; supporting social-flow evidence only.",
          source: "Owner-provided clean live-deployment screenshot from https://the-loop-5m7u.onrender.com/profile, redacted before import.",
        },
      ],
    },
    missingProof: [
      "unredacted private profile/friends screenshots intentionally excluded from public use",
      "system diagram revision",
      "demo/walkthrough media",
      "exact module ownership still collaborative/not separated",
      "validation/testing evidence",
    ],
    caseStudy: {
      whatWasBuilt:
        "A full-stack student event coordination platform with authentication, profiles/interests, event discovery, RSVP/join behavior, friend flows, chat history, WebSocket chat, carpool coordination, and documented admin event endpoints.",
      architectureSummary:
        "The system combines a React frontend, FastAPI backend, SQLAlchemy models for users/events/interests/social/carpool/chat data, JWT auth, WebSocket delivery, and Render deployment configuration. That supports a real product workflow, but the system topology still needs diagram revision before final polish.",
      engineeringDecisions: [
        "Frame the project around campus coordination outcomes, not a generic social/event board.",
        "Persist event joins, friend requests, carpool groups, and chat history so the workflow has backend state.",
        "Keep deployment, screenshot, and realtime limitations visible instead of implying mature production operations.",
      ],
      evidenceStatus: [
        "Deployment and GitHub repo are Verified.",
        "Owner-provided live-deployment screenshots now verify the public-safe events list, event detail, map view, landing/login, and redacted profile/friends visual states.",
        "Raw profile/friends screenshots were reviewed but excluded from public assets because they expose personal account or username details.",
        "Realtime and auth diagrams are approved at spec level; system diagram needs revision.",
        "Live workflow screenshots support prototype workflow evidence, not production reliability, active-user, or SLA claims.",
      ],
      workflow: [
        {
          label: "Discovery",
          detail: "Student signs up or logs in, creates profile/interest context, and reaches event discovery from a personalized starting point.",
        },
        {
          label: "Interest matching",
          detail: "Interests shape the event feed and matching context; this is product-flow evidence, not proven recommendation-system research.",
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
          detail: "Admin event endpoints are documented, but they should be featured visually only after safe UI evidence exists.",
        },
        {
          label: "Edge cases / pending evidence",
          detail: "Disconnects, expired JWTs, multi-tab state, offline delivery, matching quality, and Render/free-tier behavior need deeper proof before reliability or scale claims.",
        },
      ],
      limitations: [
        "WebSocket delivery depends on valid JWT state and active connections.",
        "Offline delivery and reconnect/session behavior are not proven as hardened production features.",
        "Matching is a product workflow, not proven recommendation-system research.",
        "Workflow screenshots prove visible deployment UI states only; they do not prove hardened production behavior, scale, or active-user usage.",
        "Render/free-tier constraints may affect perceived reliability.",
      ],
      nextEvidenceNeeded: [
        "Unredacted profile/friends screenshots stay out of public assets; recapture or redact again only if stronger social-flow proof is needed.",
        "Safe admin screenshots only if admin/event management is visually featured.",
        "System diagram revision plus rendered/mobile QA.",
        "Manual deployed workflow verification before stronger reliability or production-readiness copy.",
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
