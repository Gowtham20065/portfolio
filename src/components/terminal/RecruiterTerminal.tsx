import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Terminal, X, CornerDownLeft, Copy, Check } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const RecruiterTerminal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'sys.init --verbose',
      output: (
        <div className="text-[#9A9E95] space-y-1">
          <div>Initializing Boda Gowtham Systems Node v1.0.4... [OK]</div>
          <div>Loading Academic Kernel: VIT-AP M.Tech (CGPA: 8.55 / 10.0, 0 Arrears)... [OK]</div>
          <div>Loading Benchmark: Young Turks 2026 (99.85 %ile)... [OK]</div>
          <div className="text-[#B6F23A]">Type 'help' to view available system commands.</div>
        </div>
      ),
    },
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCopyBrief = () => {
    const brief = `CANDIDATE: Boda Gowtham (Integrated M.Tech Software Engineering, VIT-AP, 2022–2027)
BENCHMARK: Young Turks 2026: 99.85 Percentile (Top 0.15% nationwide)
ACADEMICS: CGPA 8.55 / 10.0 (Zero Active Arrears)
CORE: Agentic Systems (LangGraph, Python AST Sandboxing), Concurrency (Node.js, TypeScript, Redis Lua, PostgreSQL, Docker)
FLAGSHIPS:
  1. Agentic DRHP Verification (Deterministic AST arithmetic, PyMuPDF, ChromaDB)
  2. RealEstateHub (Atomic Redis token bucket & distributed lock, Prisma, Docker)
  3. StegoCLI (POSIX stream utility, NumPy 2D LSB matrices, AES-256 CBC)
GITHUB: ${PORTFOLIO_DATA.identity.github}
EMAIL: ${PORTFOLIO_DATA.identity.email}`;

    navigator.clipboard.writeText(brief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let res: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        res = (
          <div className="space-y-1 text-[#9A9E95]">
            <div>Available shell commands:</div>
            <div>  <span className="text-[#B6F23A]">cat about</span>        - Display engineer positioning & credentials</div>
            <div>  <span className="text-[#B6F23A]">cat metrics</span>      - View verified GPA, percentile rank, and benchmarks</div>
            <div>  <span className="text-[#B6F23A]">cat projects</span>     - Inspect flagship production systems</div>
            <div>  <span className="text-[#B6F23A]">download resume</span>  - Download official ATS resume (.PDF)</div>
            <div>  <span className="text-[#B6F23A]">copy brief</span>       - Copy 15-second recruiter summary to clipboard</div>
            <div>  <span className="text-[#B6F23A]">contact</span>          - View email, GitHub, and LinkedIn links</div>
            <div>  <span className="text-[#B6F23A]">clear</span>            - Clear terminal display</div>
            <div>  <span className="text-[#B6F23A]">exit</span>             - Close CLI shell</div>
          </div>
        );
        break;

      case 'cat about':
        res = (
          <div className="space-y-1 text-[#9A9E95]">
            <div><span className="text-white font-bold">NAME:</span> {PORTFOLIO_DATA.identity.name}</div>
            <div><span className="text-white font-bold">PROGRAM:</span> {PORTFOLIO_DATA.identity.degree}</div>
            <div><span className="text-white font-bold">INSTITUTION:</span> {PORTFOLIO_DATA.identity.university} ({PORTFOLIO_DATA.identity.duration})</div>
            <div><span className="text-white font-bold">REGISTRATION:</span> {PORTFOLIO_DATA.identity.regNo}</div>
            <div><span className="text-white font-bold">FOCUS:</span> Deterministic Agentic Systems & High-Concurrency Distributed Backends.</div>
          </div>
        );
        break;

      case 'cat metrics':
        res = (
          <div className="space-y-1 text-[#9A9E95]">
            <div>• <span className="text-[#B6F23A]">Young Turks 2026:</span> 99.85 Percentile (Top 0.15% nationwide in CS algorithmic problem solving)</div>
            <div>• <span className="text-[#B6F23A]">Cumulative GPA:</span> 8.55 / 10.0 (Zero active arrears, VIT-AP University)</div>
            <div>• <span className="text-[#B6F23A]">Test Integrity:</span> 100% Deterministic Pass rate across PyTest suites & AST sandboxes</div>
          </div>
        );
        break;

      case 'cat projects':
        res = (
          <div className="space-y-2 text-[#9A9E95]">
            {PORTFOLIO_DATA.flagshipProjects.map((p) => (
              <div key={p.id} className="border-l border-[#B6F23A]/40 pl-2">
                <div className="text-white font-bold">{p.title}</div>
                <div className="text-xs text-[#71766D]">{p.tagline}</div>
                <div className="text-[11px] text-[#B6F23A]">GitHub: {p.githubUrl}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'download resume':
        const link = document.createElement('a');
        link.href = PORTFOLIO_DATA.identity.resumePdf;
        link.download = 'Gowtham_Boda_Resume.pdf';
        link.click();
        res = <div className="text-[#B6F23A]">[OK] Downloading Gowtham_Boda_Resume.pdf...</div>;
        break;

      case 'copy brief':
        handleCopyBrief();
        res = <div className="text-[#B6F23A]">[OK] 15-second candidate brief copied to clipboard.</div>;
        break;

      case 'contact':
        res = (
          <div className="space-y-1 text-[#9A9E95]">
            <div>• Email: <a href={`mailto:${PORTFOLIO_DATA.identity.email}`} className="text-[#B6F23A] underline">{PORTFOLIO_DATA.identity.email}</a></div>
            <div>• GitHub: <a href={PORTFOLIO_DATA.identity.github} target="_blank" rel="noreferrer" className="text-[#B6F23A] underline">{PORTFOLIO_DATA.identity.github}</a></div>
            <div>• LinkedIn: <a href={PORTFOLIO_DATA.identity.linkedin} target="_blank" rel="noreferrer" className="text-[#B6F23A] underline">{PORTFOLIO_DATA.identity.linkedin}</a></div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        onClose();
        return;

      case '':
        return;

      default:
        res = (
          <div className="text-red-400">
            command not found: {trimmed}. Type <span className="text-[#B6F23A]">'help'</span> for available commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: res }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    executeCommand(input);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-3xl rounded-lg bg-[#0E0F0C] border border-[#B6F23A]/40 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[85vh]">
        {/* Title Bar */}
        <div className="px-4 py-3 bg-[#141612] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#B6F23A]" />
            <span className="font-mono text-xs font-bold text-white tracking-wider">
              gowtham@systems-shell:~$
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyBrief}
              className="px-2.5 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-[#9A9E95] hover:text-white flex items-center gap-1 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#B6F23A]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Brief'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-[#9A9E95] hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Pills */}
        <div className="px-4 py-2 bg-[#0A0B09] border-b border-white/[0.04] flex flex-wrap gap-1.5 font-mono text-[11px]">
          {['help', 'cat about', 'cat metrics', 'cat projects', 'download resume', 'copy brief', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] hover:border-[#B6F23A]/50 hover:text-[#B6F23A] text-[#71766D] transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Stream */}
        <div className="p-4 overflow-y-auto space-y-4 font-mono text-xs flex-1 bg-[#0A0B09]/90">
          {history.map((h, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2 text-white/50">
                <span className="text-[#B6F23A]">❯</span>
                <span className="text-white font-semibold">{h.command}</span>
              </div>
              <div className="pl-4">{h.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Box */}
        <form onSubmit={handleSubmit} className="p-3 bg-[#141612] border-t border-white/[0.08] flex items-center gap-2 font-mono text-xs">
          <span className="text-[#B6F23A] font-bold">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g. 'help', 'cat metrics', 'download resume')..."
            className="flex-1 bg-transparent text-white placeholder-[#5E625A] outline-none"
          />
          <button type="submit" className="text-[#71766D] hover:text-[#B6F23A] transition-colors">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
