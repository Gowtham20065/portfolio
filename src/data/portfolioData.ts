export interface Project {
  id: string;
  sysId: string;
  title: string;
  tagline: string;
  category: string;
  tags: string[];
  problem: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
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
  verified: boolean;
}

export const PORTFOLIO_DATA = {
  identity: {
    name: "Boda Gowtham",
    regNo: "22MIS7190",
    role: "Systems & Agentic AI Engineer",
    status: "ACTIVE SEEKER — GRADUATING 2027",
    location: "Hyderabad / Amaravati, India",
    university: "VIT-AP University",
    degree: "Integrated M.Tech in Software Engineering",
    duration: "2022 — 2027",
    cgpa: "8.55 / 10.0",
    arrears: "0 (Zero Active Arrears)",
    github: "https://github.com/gowtham20065",
    linkedin: "https://linkedin.com/in/gowtham-boda",
    email: "gowthamboda2004@gmail.com",
    resumePdf: "/Gowtham_Boda_Resume.pdf",
    shortBio:
      "Software Engineering scholar building deterministic verification sandboxes for LLM agents and high-concurrency distributed backends. Focused on trading probabilistic hallucinations for provable mathematical execution.",
  },

  telemetryMetrics: [
    {
      label: "National Benchmark",
      value: "99.85",
      unit: "%ile",
      subtext: "Young Turks 2026 National CS & Algorithmic Assessment",
      badge: "TOP 0.15% NATIONWIDE",
      verified: true,
    },
    {
      label: "Academic Standing",
      value: "8.55",
      unit: "/ 10.0",
      subtext: "Integrated M.Tech in Software Engineering (VIT-AP)",
      badge: "ZERO BACKLOGS · DISTINCTION",
      verified: true,
    },
    {
      label: "Execution Integrity",
      value: "100",
      unit: "% Pass",
      subtext: "Automated PyTest suites & AST zero-privilege sandboxes",
      badge: "DETERMINISTIC TEST SUITES",
      verified: true,
    },
    {
      label: "Production Repos",
      value: "4+",
      unit: "Flagships",
      subtext: "Open-source verified architectures on GitHub",
      badge: "TESTED ON REAL HARDWARE",
      verified: true,
    },
  ] as Metric[],

  flagshipProjects: [
    {
      id: "agentic-drhp",
      sysId: "SYS_01 // AGENTIC_ORACLE",
      title: "Agentic Financial & DRHP Document Verification Pipeline",
      tagline: "Cyclic LangGraph state machine with deterministic Python AST arithmetic sandboxing.",
      category: "Agentic Systems & Verification",
      tags: ["Python 3.11", "LangGraph", "Python AST", "PyMuPDF", "ChromaDB", "PyTest"],
      problem:
        "LLMs routinely suffer from arithmetic drift and hallucinated summaries when parsing complex financial tables, balance sheets, and Draft Red Herring Prospectus (DRHP) documents spanning hundreds of dense pages.",
      solution:
        "Engineered a cyclic LangGraph evaluation pipeline that marries PyMuPDF document-stream extraction with a zero-privilege Python AST sandbox. Vector search handles semantic document retrieval, while all calculations are intercepted by an ast.NodeVisitor that parses, validates, and executes mathematical expressions in isolation, rejecting unverified outputs.",
      impactMetrics: [
        { label: "Arithmetic Drift", value: "0% (Eliminated)" },
        { label: "Execution Sandbox", value: "Zero-Privilege AST" },
        { label: "Extraction Format", value: "Cyclic Stream Repair" },
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
        explanation: "Python AST NodeVisitor intercepts and verifies every mathematical expression emitted by the agent, enforcing strict bounds and zero-privilege evaluation.",
      },
      interactiveType: "ast-simulator",
      githubUrl: "https://github.com/gowtham20065/agentic-drhp-analysis",
    },
    {
      id: "realestate-hub",
      sysId: "SYS_02 // CONCURRENT_REDIS",
      title: "RealEstateHub — High-Concurrency Multi-Tenant Backend",
      tagline: "Atomic Redis Lua token buckets, distributed locks, and containerized PostgreSQL persistence.",
      category: "High-Concurrency Backend",
      tags: ["TypeScript", "Node.js", "Express", "Redis Lua", "Prisma", "PostgreSQL", "Docker Compose"],
      problem:
        "Rapid booking surges cause destructive race conditions on database row locks and overwhelm REST endpoints during promotional bursts without tenant-aware throttling.",
      solution:
        "Designed an enterprise multi-tenant property management engine utilizing atomic Redis Lua scripts to execute token-bucket rate limiting and distributed locks in a single network round-trip. Persists relational schemas with Prisma and PostgreSQL, orchestrated via multi-container Docker Compose.",
      impactMetrics: [
        { label: "Distributed Lock Latency", value: "< 5ms (In-Memory)" },
        { label: "Race Conditions", value: "0 Detected" },
        { label: "Infrastructure", value: "Docker Multi-Container" },
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
        explanation: "Atomic Lua script executed directly in Redis RAM, eliminating network-induced race conditions between checking limits and incrementing counters.",
      },
      interactiveType: "redis-lua",
      githubUrl: "https://github.com/gowtham20065/realestate-hub",
    },
    {
      id: "stegocli",
      sysId: "SYS_03 // CRYPTO_POSIX",
      title: "StegoCLI — Cryptographic POSIX Media Stream Utility",
      tagline: "Bit-level LSB injection across 2D NumPy matrices and signed int16 audio buffers with AES-256.",
      category: "Systems & Cryptography",
      tags: ["Python 3.11", "NumPy", "Cryptography", "AES-256 CBC", "PBKDF2", "POSIX I/O", "PyTest"],
      problem:
        "Hiding secure data within audio waveforms or bitmap structures often leads to audible clicking, visual shearing, or unauthenticated payloads that can be trivially detected by spectral analysis.",
      solution:
        "Engineered a Linux POSIX command-line utility reading standard I/O streams and raw binary files. Implemented bitwise Least Significant Bit (LSB) injection into 2D NumPy image matrices and signed int16 audio waveform buffers. Hardened payloads with AES-256 encryption in CBC mode with PBKDF2 (100,000 rounds) and HMAC verification.",
      impactMetrics: [
        { label: "Waveform Degradation", value: "0 Audible Shearing" },
        { label: "KDF Iterations", value: "100k Rounds PBKDF2" },
        { label: "CLI Standard", value: "POSIX Argument Spec" },
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
        explanation: "NumPy vectorized bitwise masking on signed 16-bit audio samples, preventing integer overflow while embedding cryptographic payloads.",
      },
      interactiveType: "stego-matrix",
      githubUrl: "https://github.com/gowtham20065/Image-Steganography",
    },
    {
      id: "fluxstep-pro",
      sysId: "SYS_04 // LAYOUT_SOLVER",
      title: "FluxStep Pro — Constraint-Based Layout Engine",
      tagline: "Topological DAG solver computing dynamic multi-surface component geometry.",
      category: "Frontend Architecture & Algorithms",
      tags: ["TypeScript", "React", "Directed Acyclic Graphs", "Tailwind CSS", "Constraint Solver"],
      problem:
        "Multi-surface dynamic marketing widgets break when container aspect ratios shift unpredictably or nested flexbox rules trigger repetitive browser reflow thrashing.",
      solution:
        "Created an algorithmic layout calculation engine that represents UI elements as a Directed Acyclic Graph (DAG), performing a topological sort to compute exact pixel dimensions and spatial hierarchy prior to DOM painting.",
      impactMetrics: [
        { label: "Layout Complexity", value: "O(V + E) Linear" },
        { label: "DOM Reflows", value: "Pre-computed 1-Pass" },
      ],
      codeSnippet: {
        filename: "src/engine/dagSolver.ts",
        language: "typescript",
        code: `export function resolveDAGLayout(nodes: LayoutNode[], edges: DependencyEdge[]): ResolvedBox[] {
  const inDegree = new Map<string, number>();
  // Initialize dependency graph and perform topological ordering
  // to compute exact layout constraints in a single deterministic pass...
  return computeBoundingBoxes(topologicalOrder);
}`,
        explanation: "Topological graph ordering computes geometric layout constraints before committing updates to the browser DOM.",
      },
      interactiveType: "dag-solver",
      githubUrl: "https://github.com/gowtham20065/Adaptive-Layout-Engine-for-Multi-Surface-Ads",
    },
  ] as Project[],

  technicalArsenal: [
    {
      category: "Systems & Concurrency",
      skills: [
        { name: "Redis Lua Scripting", level: "Advanced", desc: "Atomic token buckets & distributed lock primitives" },
        { name: "POSIX Streams & CLI", level: "Advanced", desc: "Linux pipes, stdin/stdout redirection, signal handling" },
        { name: "Docker & Containerization", level: "Proficient", desc: "Multi-service compose, isolated network bridges" },
        { name: "Vectorized Operations", level: "Proficient", desc: "NumPy 2D matrix transformations & signed buffers" },
      ],
    },
    {
      category: "Agentic AI & Verification",
      skills: [
        { name: "LangGraph State Machines", level: "Advanced", desc: "Cyclic self-correcting agent execution loops" },
        { name: "Python AST Sandboxing", level: "Advanced", desc: "ast.NodeVisitor zero-privilege arithmetic validation" },
        { name: "Vector Retrieval & RAG", level: "Proficient", desc: "ChromaDB embeddings & hybrid keyword search" },
        { name: "Automated Test Oracles", level: "Advanced", desc: "PyTest property-based tests & boundary validation" },
      ],
    },
    {
      category: "Backend & Data Engines",
      skills: [
        { name: "TypeScript & Node.js", level: "Advanced", desc: "Strictly typed asynchronous services & REST APIs" },
        { name: "PostgreSQL & Prisma", level: "Proficient", desc: "Relational schemas, foreign constraints & ACID transactions" },
        { name: "Python 3.11+", level: "Expert", desc: "Modern type hints, concurrency, generators, dataclasses" },
        { name: "Express.js Architecture", level: "Proficient", desc: "Layered controller-service-repository patterns" },
      ],
    },
    {
      category: "Core Foundations & Toolchain",
      skills: [
        { name: "Data Structures & Algos", level: "Expert", desc: "99.85th percentile national rank, graph algorithms" },
        { name: "Git & Version Control", level: "Proficient", desc: "Clean branch workflows, atomic commits, PR reviews" },
        { name: "Linux / UNIX Shell", level: "Proficient", desc: "Bash scripting, system diagnostics, permissions" },
        { name: "Tailwind CSS & React", level: "Proficient", desc: "High-performance reactive interfaces & design systems" },
      ],
    },
  ],

  engineeringTheses: [
    {
      number: "01",
      title: "Verifiability Over Probability",
      summary: "LLMs are engines of plausibility, not truth.",
      elaboration:
        "In production software, an agent must never emit unverified financial or scientific calculations. My architecture intercepts generative outputs with deterministic Python AST evaluation sandboxes where arithmetic is parsed, executed in isolation, and mathematically verified before response serialization.",
    },
    {
      number: "02",
      title: "Atomic Isolation Over Optimistic Locks",
      summary: "Network hops destroy high-concurrency database integrity.",
      elaboration:
        "Distributed race conditions must be neutralized in-memory before ever reaching PostgreSQL. By executing rate limits and token buckets via Redis Lua scripts, evaluation and allocation occur in a single atomic hop with zero lock contention.",
    },
    {
      number: "03",
      title: "UNIX Simplicity Over Dependency Bloat",
      summary: "Clean POSIX pipelines outlive transient frameworks.",
      elaboration:
        "Reliable software builds on POSIX primitives: standard I/O pipes, predictable exit codes, and minimal external dependencies. When code relies on mathematically grounded structures like NumPy matrices or AST visitors, it runs deterministically anywhere.",
    },
  ],

  academicChronology: [
    {
      period: "2022 — 2027 (Ongoing)",
      institution: "VIT-AP University, Amaravati",
      title: "Integrated M.Tech in Software Engineering",
      score: "CGPA: 8.55 / 10.0",
      details: "Zero active backlogs. Focus on Advanced Data Structures, Distributed Computing, Database Internals, and Compiler Principles.",
    },
    {
      period: "2026",
      institution: "Young Turks National Assessment",
      title: "National Engineering & CS Benchmark",
      score: "99.85 Percentile",
      details: "Scored in the top 0.15% nationwide among engineering students in core algorithmic reasoning and software engineering fundamentals.",
    },
    {
      period: "2022",
      institution: "Pre-University & High School",
      title: "Higher Secondary Certificate (PCM)",
      score: "Distinction",
      details: "Rigorous focus on advanced mathematics, discrete logic, and foundational programming.",
    },
  ],
};
