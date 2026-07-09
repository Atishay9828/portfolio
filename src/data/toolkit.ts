export type ToolkitEntry = {
  name: string;
  category: string;
  sourceRepo: string;
  proofFile: string;
  proofType: "dependency" | "config" | "import" | "docs";
};

export const toolkit: ToolkitEntry[] = [
  {
    name: "Astro",
    category: "Static site",
    sourceRepo: "portfolio",
    proofFile: "package.json",
    proofType: "dependency",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    sourceRepo: "portfolio",
    proofFile: "package.json",
    proofType: "dependency",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    sourceRepo: "portfolio",
    proofFile: "package.json",
    proofType: "dependency",
  },
  {
    name: "FastAPI",
    category: "Backend",
    sourceRepo: "Hybrid-GenAI-Transaction-Categorization",
    proofFile: "requirements.txt",
    proofType: "dependency",
  },
  {
    name: "ONNX Runtime",
    category: "Local inference",
    sourceRepo: "Hybrid-GenAI-Transaction-Categorization",
    proofFile: "backend/classify.py",
    proofType: "import",
  },
  {
    name: "Qwen2.5 GGUF",
    category: "Offline fallback",
    sourceRepo: "Hybrid-GenAI-Transaction-Categorization",
    proofFile: "backend/llm.py",
    proofType: "docs",
  },
  {
    name: "Gymnasium",
    category: "RL environment",
    sourceRepo: "meta_Mahoraga",
    proofFile: "notebooks/mahoraga_training.py",
    proofType: "import",
  },
  {
    name: "React",
    category: "Product UI",
    sourceRepo: "TIET-LOOP",
    proofFile: "package.json",
    proofType: "dependency",
  },
  {
    name: "SQLAlchemy",
    category: "Persistence",
    sourceRepo: "TIET-LOOP",
    proofFile: "main.py",
    proofType: "import",
  },
  {
    name: "WebSockets",
    category: "Realtime",
    sourceRepo: "TIET-LOOP",
    proofFile: "main.py",
    proofType: "import",
  },
];
