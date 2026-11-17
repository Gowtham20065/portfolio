export interface Project {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  problem: string;
  solution: string;
  keyResults: { label: string; value: string }[];
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
    explanation: string;
  };
  interactiveType: 'ast-simulator' | 'redis-lua' | 'stego-matrix' | 'dag-solver';
  githubUrl: string;
}

export interface Metric {
  label: string;
  value: string;
  unit?: string;
  subtext: string;
  badge: string;
}

export interface ResearchTopic {
  title: string;
  category: string;
  description: string;
  status: string;
}

export const PORTFOLIO_DATA = {
  identity: {
    name: "Boda Gowtham",
    role: "Software & Systems Engineer",
    status: "Graduating 2027 · Open to Software Engineering Roles",
    location: "Amaravathi, India",
    university: "VIT-AP University",
    degree: "Integrated M.Tech in Software Engineering",
    duration: "2022 — 2027",
    cgpa: "8.55 / 10.0",
    arrears: "Zero Active Backlogs",
    github: "https://github.com/gowtham20065",
    linkedin: "https://linkedin.com/in/gowtham-boda",
    email: "gowthamboda234@gmail.com",
    resumePdf: "./Gowtham_Boda_Resume.pdf",
    aboutMe:
      "I am an Integrated M.Tech Software Engineering student at VIT-AP University. I enjoy building reliable backend systems, high-concurrency architectures, and verifiable AI agent pipelines. Rather than relying on unverified outputs, I focus on mathematical determinism, clean POSIX foundations, and robust test suites.",
  },

  highlights: [
    {
      label: "National Benchmark",
      value: "99.85",
      unit: "%ile",
      subtext: "Young Turks 2026 National CS & Algorithmic Assessment",
      badge: "Top 0.15% Nationwide",
    },
    {
      label: "Academic Performance",
      value: "8.55",
      unit: "/ 10.0",
      subtext: "Integrated M.Tech in Software Engineering (VIT-AP)",
      badge: "Zero Backlogs · Distinction",
    },
    {
      label: "Code Integrity",
      value: "100",
      unit: "% Pass",
      subtext: "Automated test suites with PyTest & AST validation sandboxes",
      badge: "Deterministic Testing",
    },
    {
      label: "Open Source Projects",
      value: "4+",
      unit: "Featured",
      subtext: "Full-stack and backend systems open-sourced on GitHub",
      badge: "Verified Architectures",
    },
  ] as Metric[],

  projects: [
    {
      id: "agentic-drhp",
      badge: "AI Agent & Evaluation Pipeline",
      title: "Agentic Financial & Document Verification Pipeline",
      tagline: "Cyclic LangGraph agent with deterministic Python AST arithmetic sandboxing.",
      category: "Agentic Systems & Verification",
      tags: ["Python 3.11", "LangGraph", "Python AST", "PyMuPDF", "ChromaDB", "PyTest"],
      problem:
        "When parsing multi-page financial reports (like Draft Red Herring Prospectus documents) and complex balance sheets, standard LLM prompts often introduce subtle arithmetic errors and hallucinated table totals.",
      solution:
        "I built a cyclic LangGraph pipeline that extracts document streams with PyMuPDF, retrieves semantic chunks via ChromaDB, and intercepts every mathematical calculation with an isolated Python AST visitor. The sandbox validates and executes arithmetic deterministically, preventing unverified calculations from ever reaching the user.",
      keyResults: [
        { label: "Arithmetic Drift", value: "0% (Eliminated)" },
        { label: "Validation Sandbox", value: "Python AST Visitor" },
        { label: "Error Recovery", value: "Cyclic LangGraph Loop" },
      ],
      codeSnippet: {
        filename: "evaluator/ast_sandbox.py",
        language: "python",
        code: `import ast

class SafeArithmeticVisitor(ast.NodeVisitor):
    """Zero-privilege arithmetic evaluator preventing LLM execution drift."""
    ALLOWED_OPS = {ast.Add: lambda a, b: a + b,
                   ast.Sub: lambda a, b: a - b,
                   ast.Mult: lambda a, b: a * b,
                   ast.Div: lambda a, b: a / b if b != 0 else float('inf')}

    def visit_BinOp(self, node):
        left = self.visit(node.left)
        right = self.visit(node.right)
        op_type = type(node.op)
        if op_type not in self.ALLOWED_OPS:
            raise SecurityError(f"Forbidden operation: {op_type.__name__}")
        return self.ALLOWED_OPS[op_type](left, right)

    def visit_Constant(self, node):
        if not isinstance(node.value, (int, float)):
            raise TypeError("Only real numbers permitted in table validation")
        return node.value`,
        explanation: "My AST visitor intercepts expressions emitted by the agent, enforcing strict bounds and zero-privilege calculation.",
      },
      interactiveType: "ast-simulator",
      githubUrl: "https://github.com/gowtham20065/agentic-drhp-analysis",
    },
    {
      id: "realestate-hub",
      badge: "High-Concurrency Backend",
      title: "RealEstateHub — High-Concurrency Property Platform",
      tagline: "Atomic Redis Lua rate-limiting, distributed locks, and containerized PostgreSQL persistence.",
      category: "Backend Architecture",
      tags: ["TypeScript", "Node.js", "Express", "Redis Lua", "Prisma", "PostgreSQL", "Docker Compose"],
      problem:
        "Sudden booking spikes and traffic bursts can trigger race conditions on database row locks and degrade API availability without tenant-aware throttling.",
      solution:
        "I designed an enterprise property backend utilizing atomic Redis Lua scripts to execute token-bucket rate limiting and distributed locks in a single in-memory network round-trip. Relational data is modeled with Prisma and PostgreSQL, orchestrated via Docker Compose.",
      keyResults: [
        { label: "Lock Evaluation Latency", value: "< 5ms (In-Memory)" },
        { label: "Race Conditions", value: "0 Detected" },
        { label: "Infrastructure", value: "Docker Compose" },
      ],
      codeSnippet: {
        filename: "src/infrastructure/redis/token_bucket.lua",
        language: "lua",
        code: `-- Atomic Token Bucket Rate Limiter in Redis Lua
local key = KEYS[1]
local limit = tonumber(ARGV[1])
local current = tonumber(redis.call('get', key) or "0")

if current + 1 > limit then
    return 0 -- Rejected: Bucket capacity exceeded
else
    redis.call("INCRBY", key, 1)
    if current == 0 then
        redis.call("EXPIRE", key, tonumber(ARGV[2]))
    end
    return 1 -- Allowed: Atomic token allocated
end`,
        explanation: "Atomic Lua script executed directly in Redis RAM, eliminating race conditions between checking capacity and incrementing counters.",
      },
      interactiveType: "redis-lua",
      githubUrl: "https://github.com/gowtham20065/realestate-hub",
    },
    {
      id: "stegocli",
      badge: "Systems & Cryptography",
      title: "StegoCLI — Cryptographic Media Stream CLI",
      tagline: "Bit-level LSB injection across 2D NumPy matrices and signed int16 audio buffers with AES-256.",
      category: "Systems & Security",
      tags: ["Python 3.11", "NumPy", "Cryptography", "AES-256 CBC", "PBKDF2", "POSIX I/O", "PyTest"],
      problem:
        "Hiding encrypted data inside audio files or bitmaps can easily introduce audible audio distortion or obvious visual artifacts if bitwise sign overflows are unhandled.",
      solution:
        "I built a Linux command-line tool parsing standard POSIX I/O streams. It performs bitwise Least Significant Bit (LSB) injection across 2D NumPy matrices and signed int16 audio buffers, encrypting payloads with AES-256 in CBC mode and deriving keys with PBKDF2 (100,000 rounds).",
      keyResults: [
        { label: "Waveform Degradation", value: "0 Audible Distortion" },
        { label: "Key Derivation", value: "100k Rounds PBKDF2" },
        { label: "Interface", value: "Standard POSIX CLI" },
      ],
      codeSnippet: {
        filename: "stego/engine.py",
        language: "python",
        code: `import numpy as np

def encode_lsb_audio(audio_samples: np.ndarray, bitstream: np.ndarray) -> np.ndarray:
    """Injects bitstream into int16 audio buffer without signed overflow."""
    encoded = audio_samples.copy()
    n_bits = len(bitstream)
    
    # Mask out the least significant bit and bitwise-OR with encrypted payload bit
    encoded[:n_bits] = (encoded[:n_bits] & ~1) | bitstream
    return encoded`,
        explanation: "NumPy vectorized bitwise masking on signed 16-bit audio samples, preventing integer overflow while embedding payloads.",
      },
      interactiveType: "stego-matrix",
      githubUrl: "https://github.com/gowtham20065/Image-Steganography",
    },
    {
      id: "fluxstep-pro",
      badge: "Algorithms & Frontend",
      title: "FluxStep Pro — Constraint-Based Layout Engine",
      tagline: "Topological DAG solver computing dynamic multi-surface component geometry.",
      category: "Algorithms & UI Architecture",
      tags: ["TypeScript", "React", "DAG Layouts", "Tailwind CSS", "Constraint Solver"],
      problem:
        "Dynamic multi-surface widgets often experience layout shifts and browser reflow thrashing when container boundaries resize unexpectedly.",
      solution:
        "I built a layout computation engine that models UI element hierarchies as a Directed Acyclic Graph (DAG), performing a topological sort to compute exact pixel dimensions and spatial boundaries prior to DOM painting.",
      keyResults: [
        { label: "Computational Complexity", value: "O(V + E) Linear" },
        { label: "DOM Reflows", value: "Pre-computed 1-Pass" },
      ],
      codeSnippet: {
        filename: "src/engine/dagSolver.ts",
        language: "typescript",
        code: `export function resolveDAGLayout(nodes: LayoutNode[], edges: DependencyEdge[]): ResolvedBox[] {
  // Model UI components as a Directed Acyclic Graph (DAG)
  // Compute topological order to calculate bounding boxes in a single pass...
  return computeBoundingBoxes(topologicalOrder);
}`,
        explanation: "Topological graph ordering computes layout constraints cleanly before committing updates to the browser DOM.",
      },
      interactiveType: "dag-solver",
      githubUrl: "https://github.com/gowtham20065/Adaptive-Layout-Engine-for-Multi-Surface-Ads",
    },
  ] as Project[],

  technicalSkills: [
    {
      category: "Backend & Systems",
      skills: [
        { name: "TypeScript & Node.js", desc: "Asynchronous backend services, Express.js REST APIs" },
        { name: "Redis & Lua Scripting", desc: "Atomic token buckets, distributed locking primitives" },
        { name: "PostgreSQL & Prisma", desc: "Relational schemas, ACID transactions, migrations" },
        { name: "Docker & Containerization", desc: "Multi-service container setups with Docker Compose" },
      ],
    },
    {
      category: "AI & Verification",
      skills: [
        { name: "Python 3.11+", desc: "Modern type hints, OOP, dataclasses, generators" },
        { name: "LangGraph State Machines", desc: "Cyclic multi-step agent pipelines with error recovery" },
        { name: "Python AST Sandboxing", desc: "ast.NodeVisitor zero-privilege expression validation" },
        { name: "Vector Search & RAG", desc: "ChromaDB embedding stores & semantic chunk retrieval" },
      ],
    },
    {
      category: "Core Foundations",
      skills: [
        { name: "Data Structures & Algos", desc: "99.85th percentile national rank, graph algorithms" },
        { name: "Automated Testing", desc: "PyTest property tests, boundary validation, test oracles" },
        { name: "POSIX Streams & Linux", desc: "Standard I/O redirection, shell utilities, permissions" },
        { name: "Git & Version Control", desc: "Clean branch workflows, atomic commits, PR reviews" },
      ],
    },
    {
      category: "Frontend & Tooling",
      skills: [
        { name: "React 18 & TypeScript", desc: "Functional components, custom hooks, reactive state" },
        { name: "Tailwind CSS", desc: "Responsive layout design, modern utility-first CSS" },
        { name: "NumPy Vectorization", desc: "2D matrix operations, signed audio buffer manipulation" },
        { name: "Vite & Tooling", desc: "Fast build orchestration, bundle optimization" },
      ],
    },
  ],

  researchInterests: [
    {
      title: "Verifiable Autonomous Agents & AST Test Oracles",
      category: "AI Systems Verification",
      description:
        "Investigating formal verification methods, compiler-guided sandboxes, and AST-level execution constraints to establish mathematical bounds on non-deterministic LLM code and tabular outputs.",
      status: "Active Exploration",
    },
    {
      topic: "High-Throughput In-Memory Concurrency & Kernel Primatives",
      title: "In-Memory Concurrency & Distributed Transaction Isolation",
      category: "Distributed Systems",
      description:
        "Studying lock-free concurrent data structures, atomic in-memory script engines, and distributed consensus models to eliminate network-induced race conditions at high throughput.",
      status: "System Prototyping",
    },
    {
      title: "Cryptographic Payload Embedding & Codec Robustness",
      category: "Security & Applied Cryptography",
      description:
        "Analyzing resilient bitwise steganographic encoding algorithms across modern multimedia codecs, evaluating spectral entropy bounds and HMAC-authenticated payload integrity.",
      status: "Benchmarking",
    },
  ] as ResearchTopic[],

  engineeringPhilosophy: [
    {
      number: "01",
      title: "Verifiability Over Probability",
      summary: "AI outputs should be verified, not assumed.",
      elaboration:
        "LLMs are helpful generative assistants, but critical business calculations require deterministic verification. In my projects, I pair probabilistic models with isolated AST evaluation sandboxes so that arithmetic is mathematically proven before being presented.",
    },
    {
      number: "02",
      title: "Atomic In-Memory Isolation",
      summary: "Prevent race conditions before they hit the database.",
      elaboration:
        "Rather than relying on fragile optimistic locks across network round-trips, executing critical rate limits and lock acquisitions via Redis Lua scripts keeps operations atomic in RAM and protects PostgreSQL from lock contention.",
    },
    {
      number: "03",
      title: "Clean Foundations & Tested Code",
      summary: "Code should be simple, testable, and reliable.",
      elaboration:
        "I favor standard POSIX streams, mathematical structures, and comprehensive test suites over unnecessary framework complexity. When software is well-tested, it remains maintainable and predictable.",
    },
  ],

  education: [
    {
      period: "2022 — 2027 (Ongoing)",
      institution: "VIT-AP University, Amaravati",
      degree: "Integrated M.Tech in Software Engineering",
      score: "CGPA: 8.55 / 10.0",
      details: "Zero active backlogs. Coursework in Advanced Data Structures, Database Systems, Distributed Computing, and Compiler Principles.",
    },
    {
      period: "2026",
      institution: "Young Turks National Assessment",
      degree: "National Computer Science Benchmark",
      score: "99.85 Percentile",
      details: "Ranked in the top 0.15% nationwide among engineering students in core algorithmic reasoning and software engineering fundamentals.",
    },
  ],
};
