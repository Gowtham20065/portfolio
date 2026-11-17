import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { HeroCanvas } from '../canvas/HeroCanvas';
import { useScramble } from '../../hooks/useScramble';
import { ArrowDownRight, Terminal, Copy, Check } from 'lucide-react';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const { displayText: headlineText, scramble } = useScramble(
    "ENGINEERING VERIFIABLE AGENTS & CONCURRENT SYSTEMS."
  );
  const [copied, setCopied] = useState(false);

  const handleCopyBrief = () => {
    const brief = `CANDIDATE: Boda Gowtham (Integrated M.Tech Software Engineering, VIT-AP, 2022–2027)
BENCHMARK: Young Turks 2026 National Rank: 99.85 Percentile (Top 0.15% nationwide)
ACADEMICS: CGPA 8.55 / 10.0 (Zero Active Arrears)
CORE COMPETENCIES: Agentic Systems (LangGraph, Python AST Sandboxing), High-Concurrency Backends (Node.js, TypeScript, Redis Lua, PostgreSQL, Docker).
FLAGSHIPS:
  1. Agentic DRHP Analysis Pipeline (Deterministic AST arithmetic verification, PyMuPDF, ChromaDB)
  2. RealEstateHub (Atomic Redis token bucket & distributed lock, Prisma, Docker)
  3. StegoCLI (POSIX stream utility, NumPy 2D LSB matrices, AES-256 CBC)
GITHUB: ${PORTFOLIO_DATA.identity.github}
EMAIL: ${PORTFOLIO_DATA.identity.email}`;

    navigator.clipboard.writeText(brief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Interactive AST Canvas */}
      <HeroCanvas />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Overline / System Status Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#B6F23A]/10 border border-[#B6F23A]/25 text-[#B6F23A] font-mono text-xs tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B6F23A] animate-ping"></span>
            <span>SYSTEM ARCHITECTURE & AGENTIC VERIFICATION</span>
          </div>

          {/* Main Title with Scramble Effect */}
          <h1
            onMouseEnter={scramble}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-6 cursor-default select-none"
          >
            {headlineText}
          </h1>

          {/* Value Proposition Prose */}
          <p className="text-base sm:text-lg text-[#9A9E95] leading-relaxed max-w-3xl mb-8 font-normal">
            I engineer backend infrastructure and autonomous pipelines that trade probabilistic uncertainty for mathematical determinism. From constructing zero-privilege Python AST sandboxes that eliminate LLM arithmetic drift to scripting atomic Redis Lua token buckets under concurrency surges, I design software where correctness is mathematically provable.
          </p>

          {/* Interactive Live Telemetry Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 mb-8 border-y border-white/[0.08] font-mono text-xs">
            <div className="space-y-1">
              <span className="text-[#71766D] uppercase block text-[10px]">Location</span>
              <span className="text-white font-medium">{PORTFOLIO_DATA.identity.location}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#71766D] uppercase block text-[10px]">Academic Standing</span>
              <span className="text-[#B6F23A] font-medium">CGPA {PORTFOLIO_DATA.identity.cgpa} · 0 Arrears</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#71766D] uppercase block text-[10px]">National Benchmark</span>
              <span className="text-white font-medium">Young Turks 99.85 %ile</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#71766D] uppercase block text-[10px]">Runtimes & Tools</span>
              <span className="text-white font-medium">Python · TS · Redis · Docker</span>
            </div>
          </div>

          {/* Action Button Group */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#systems"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-white text-[#0E0F0C] font-mono text-xs font-bold tracking-wider hover:bg-[#B6F23A] transition-colors"
            >
              <span>EXPLORE SYSTEMS</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopyBrief}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-white/[0.04] border border-white/[0.12] hover:border-[#B6F23A]/50 text-white font-mono text-xs tracking-wider transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#B6F23A]" />
                  <span className="text-[#B6F23A]">COPIED 15-SEC BRIEF!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#9A9E95]" />
                  <span>COPY 15-SEC RECRUITER BRIEF</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm text-[#9A9E95] hover:text-white font-mono text-xs tracking-wider hover:bg-white/[0.04] transition-colors"
            >
              <Terminal className="w-4 h-4 text-[#B6F23A]" />
              <span>OPEN CLI SHELL</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
