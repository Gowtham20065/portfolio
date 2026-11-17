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
      command: 'sys.init --profile',
      output: (
        <div className="text-[#9CA3AF] space-y-1">
          <div>Loading Boda Gowtham Software Profile... [OK]</div>
          <div>Program: Integrated M.Tech in Software Engineering (VIT-AP)... [OK]</div>
          <div>Academics: CGPA 8.55 / 10.0 (Zero Active Backlogs)... [OK]</div>
          <div>Benchmark: Young Turks 2026 (99.85 %ile)... [OK]</div>
          <div className="text-[#06B6D4]">Type 'help' to view available commands.</div>
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

  const handleCopySummary = () => {
    const summary = `Candidate: Boda Gowtham
Role: Software & Systems Engineer
Education: Integrated M.Tech in Software Engineering, VIT-AP University (2022–2027)
Academic Standing: CGPA 8.55 / 10.0 (Zero Active Backlogs)
Benchmark: Young Turks 2026 National CS Assessment — 99.85 Percentile (Top 0.15% nationwide)
Core Focus: Deterministic Agentic Systems (LangGraph, Python AST Sandboxing), High-Concurrency Backends (Node.js, TypeScript, Redis Lua, PostgreSQL, Docker)
Featured Work:
  1. Agentic DRHP Verification (AST arithmetic validation sandbox, PyMuPDF, ChromaDB)
  2. RealEstateHub (Atomic Redis token bucket & distributed lock, Prisma, Docker)
  3. StegoCLI (POSIX stream utility, NumPy 2D LSB matrices, AES-256 CBC)
GitHub: ${PORTFOLIO_DATA.identity.github}
Email: ${PORTFOLIO_DATA.identity.email}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let res: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        res = (
          <div className="space-y-1 text-[#9CA3AF]">
            <div>Available shell commands:</div>
            <div>  <span className="text-[#06B6D4]">cat about</span>        - View developer background & education</div>
            <div>  <span className="text-[#06B6D4]">cat metrics</span>      - View verified GPA, percentile rank, and benchmarks</div>
            <div>  <span className="text-[#06B6D4]">cat projects</span>     - Inspect featured production systems</div>
            <div>  <span className="text-[#06B6D4]">download resume</span>  - Download official ATS resume (.PDF)</div>
            <div>  <span className="text-[#06B6D4]">copy brief</span>       - Copy candidate summary to clipboard</div>
            <div>  <span className="text-[#06B6D4]">contact</span>          - View email, GitHub, and LinkedIn links</div>
            <div>  <span className="text-[#06B6D4]">clear</span>            - Clear terminal display</div>
            <div>  <span className="text-[#06B6D4]">exit</span>             - Close CLI shell</div>
          </div>
        );
        break;

      case 'cat about':
        res = (
          <div className="space-y-1 text-[#9CA3AF]">
            <div><span className="text-[#E5E7EB] font-bold">NAME:</span> {PORTFOLIO_DATA.identity.name}</div>
            <div><span className="text-[#E5E7EB] font-bold">DEGREE:</span> {PORTFOLIO_DATA.identity.degree}</div>
            <div><span className="text-[#E5E7EB] font-bold">INSTITUTION:</span> {PORTFOLIO_DATA.identity.university} ({PORTFOLIO_DATA.identity.duration})</div>
            <div><span className="text-[#E5E7EB] font-bold">ACADEMIC STANDING:</span> CGPA {PORTFOLIO_DATA.identity.cgpa} · {PORTFOLIO_DATA.identity.arrears}</div>
            <div><span className="text-[#E5E7EB] font-bold">FOCUS:</span> Deterministic Agentic Systems & High-Concurrency Distributed Backends.</div>
          </div>
        );
        break;

      case 'cat metrics':
        res = (
          <div className="space-y-1 text-[#9CA3AF]">
            <div>• <span className="text-[#06B6D4]">Young Turks 2026:</span> 99.85 Percentile (Top 0.15% nationwide in CS algorithmic problem solving)</div>
            <div>• <span className="text-[#06B6D4]">Cumulative GPA:</span> 8.55 / 10.0 (Zero active arrears, VIT-AP University)</div>
            <div>• <span className="text-[#06B6D4]">Test Integrity:</span> 100% Deterministic Pass rate across PyTest suites & AST sandboxes</div>
          </div>
        );
        break;

      case 'cat projects':
        res = (
          <div className="space-y-2 text-[#9CA3AF]">
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id} className="border-l-2 border-[#3B82F6] pl-2.5">
                <div className="text-[#E5E7EB] font-bold">{p.title}</div>
                <div className="text-xs text-[#9CA3AF]">{p.tagline}</div>
                <div className="text-[11px] text-[#06B6D4]">GitHub: {p.githubUrl}</div>
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
        res = <div className="text-[#06B6D4]">[OK] Downloading Gowtham_Boda_Resume.pdf...</div>;
        break;

      case 'copy brief':
        handleCopySummary();
        res = <div className="text-[#06B6D4]">[OK] Candidate summary copied to clipboard.</div>;
        break;

      case 'contact':
        res = (
          <div className="space-y-1 text-[#9CA3AF]">
            <div>• Email: <a href={`mailto:${PORTFOLIO_DATA.identity.email}`} className="text-[#06B6D4] underline">{PORTFOLIO_DATA.identity.email}</a></div>
            <div>• GitHub: <a href={PORTFOLIO_DATA.identity.github} target="_blank" rel="noreferrer" className="text-[#06B6D4] underline">{PORTFOLIO_DATA.identity.github}</a></div>
            <div>• LinkedIn: <a href={PORTFOLIO_DATA.identity.linkedin} target="_blank" rel="noreferrer" className="text-[#06B6D4] underline">{PORTFOLIO_DATA.identity.linkedin}</a></div>
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
            command not found: {trimmed}. Type <span className="text-[#06B6D4]">'help'</span> for available commands.
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
      <div className="w-full max-w-3xl rounded-xl bg-[#0F172A] border border-[#334155] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Title Bar */}
        <div className="px-5 py-3.5 bg-[#1E293B] border-b border-[#334155] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Terminal className="w-4 h-4 text-[#3B82F6]" />
            <span className="font-mono text-xs font-bold text-[#E5E7EB] tracking-wider">
              gowtham@terminal:~$
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-2.5 py-1 rounded bg-[#0F172A] hover:bg-[#334155] text-xs font-mono text-[#9CA3AF] hover:text-white flex items-center gap-1 transition-colors border border-[#334155]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#06B6D4]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Summary'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-[#9CA3AF] hover:text-white hover:bg-[#0F172A] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Pills */}
        <div className="px-5 py-2.5 bg-[#0B1120] border-b border-[#334155] flex flex-wrap gap-1.5 font-mono text-[11px]">
          {['help', 'cat about', 'cat metrics', 'cat projects', 'download resume', 'copy brief', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-0.5 rounded bg-[#1E293B] border border-[#334155] hover:border-[#3B82F6] hover:text-[#06B6D4] text-[#9CA3AF] transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Stream */}
        <div className="p-5 overflow-y-auto space-y-4 font-mono text-xs flex-1 bg-[#0F172A]">
          {history.map((h, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2 text-[#64748B]">
                <span className="text-[#3B82F6] font-bold">❯</span>
                <span className="text-[#E5E7EB] font-semibold">{h.command}</span>
              </div>
              <div className="pl-4">{h.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Box */}
        <form onSubmit={handleSubmit} className="p-3.5 bg-[#1E293B] border-t border-[#334155] flex items-center gap-2.5 font-mono text-xs">
          <span className="text-[#3B82F6] font-bold">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g. 'cat about', 'cat projects', 'download resume')..."
            className="flex-1 bg-transparent text-[#E5E7EB] placeholder-[#64748B] outline-none"
          />
          <button type="submit" className="text-[#9CA3AF] hover:text-[#06B6D4] transition-colors">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
