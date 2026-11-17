import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { HeroCanvas } from '../canvas/HeroCanvas';
import { ArrowDownRight, Terminal, Copy, Check } from 'lucide-react';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [copied, setCopied] = useState(false);

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
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0F172A]">
      {/* Background Interactive AST & Systems Canvas */}
      <HeroCanvas />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E293B] border border-[#334155] text-[#06B6D4] font-mono text-xs tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse"></span>
            <span>SOFTWARE & SYSTEMS ENGINEER · VIT-AP UNIVERSITY</span>
          </div>

          {/* Clean, Stable, Crisp Headline (No Disturbing Scrambling) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#E5E7EB] leading-[1.12] mb-6">
            Building Verifiable AI Agents & Concurrent Distributed Systems.
          </h1>

          {/* Genuine First-Person Developer Introduction */}
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-3xl mb-9 font-normal">
            Hi, I'm <span className="text-[#E5E7EB] font-semibold">Boda Gowtham</span>. I am an Integrated M.Tech Software Engineering student at VIT-AP University. I enjoy building reliable backend architectures and autonomous agent pipelines that emphasize mathematical determinism—from zero-privilege Python AST evaluation sandboxes that eliminate LLM arithmetic drift to atomic Redis Lua token buckets handling concurrent surges.
          </p>

          {/* Key Quick Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 mb-9 border-y border-[#334155] font-mono text-xs bg-[#1E293B]/40 p-4 rounded-lg">
            <div className="space-y-1">
              <span className="text-[#64748B] uppercase block text-[10px] font-semibold">Location</span>
              <span className="text-[#E5E7EB] font-medium">{PORTFOLIO_DATA.identity.location}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#64748B] uppercase block text-[10px] font-semibold">Academic CGPA</span>
              <span className="text-[#06B6D4] font-semibold">8.55 / 10.0 (0 Backlogs)</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#64748B] uppercase block text-[10px] font-semibold">National Rank</span>
              <span className="text-[#3B82F6] font-semibold">Young Turks 99.85 %ile</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#64748B] uppercase block text-[10px] font-semibold">Core Stack</span>
              <span className="text-[#E5E7EB] font-medium">Python · TS · Redis · Docker</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#3B82F6] text-white font-mono text-xs font-semibold tracking-wider hover:bg-[#2563EB] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/25"
            >
              <span>VIEW MY PROJECTS</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 px-4 py-3 rounded bg-[#1E293B] border border-[#334155] hover:border-[#3B82F6] text-[#E5E7EB] font-mono text-xs tracking-wider transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#06B6D4]" />
                  <span className="text-[#06B6D4]">COPIED SUMMARY!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#9CA3AF]" />
                  <span>COPY CANDIDATE SUMMARY</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-4 py-3 rounded text-[#9CA3AF] hover:text-[#06B6D4] font-mono text-xs tracking-wider hover:bg-[#1E293B] transition-colors"
            >
              <Terminal className="w-4 h-4 text-[#3B82F6]" />
              <span>TERMINAL SHELL</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
