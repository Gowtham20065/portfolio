import React, { useState } from 'react';
import { Project } from '../../data/portfolioData';
import { ASTSimulator, RedisLuaVisualizer } from './InteractiveDemos';
import { Code2, PlayCircle, Terminal } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');

  return (
    <div className="rounded-lg bg-[#141612] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 overflow-hidden">
      {/* Top Header Strip */}
      <div className="px-6 py-4 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3 bg-[#0E0F0C]">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#B6F23A] tracking-wider">
            {project.sysId}
          </span>
          <span className="hidden sm:inline-block text-white/30 text-xs">|</span>
          <span className="text-xs font-mono text-[#9A9E95]">{project.category}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Tab Switcher */}
          <div className="flex items-center bg-[#1A1C16] p-0.5 rounded border border-white/[0.06] text-xs font-mono">
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
                activeTab === 'demo'
                  ? 'bg-[#B6F23A] text-[#0E0F0C] font-bold'
                  : 'text-[#9A9E95] hover:text-white'
              }`}
            >
              <PlayCircle className="w-3.5 h-3.5" />
              <span>INTERACTIVE</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'bg-[#B6F23A] text-[#0E0F0C] font-bold'
                  : 'text-[#9A9E95] hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>SOURCE SPEC</span>
            </button>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded text-[#9A9E95] hover:text-[#B6F23A] hover:bg-white/[0.05] transition-colors"
            title="View GitHub Repository"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm font-mono text-[#B6F23A] mb-4">
          {project.tagline}
        </p>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 text-xs leading-relaxed">
          <div className="p-3.5 rounded bg-white/[0.02] border border-white/[0.05]">
            <span className="font-mono text-[#71766D] text-[10px] uppercase tracking-wider block mb-1">
              THE ARCHITECTURAL CHALLENGE
            </span>
            <p className="text-[#9A9E95]">{project.problem}</p>
          </div>

          <div className="p-3.5 rounded bg-white/[0.02] border border-white/[0.05]">
            <span className="font-mono text-[#B6F23A] text-[10px] uppercase tracking-wider block mb-1">
              DETERMINISTIC SOLUTION
            </span>
            <p className="text-[#F4F4F0]">{project.solution}</p>
          </div>
        </div>

        {/* Interactive Simulator / Code Inspector Tab Area */}
        <div className="mb-6">
          {activeTab === 'demo' ? (
            <div>
              {project.interactiveType === 'ast-simulator' && <ASTSimulator />}
              {project.interactiveType === 'redis-lua' && <RedisLuaVisualizer />}
              {project.interactiveType === 'stego-matrix' && (
                <div className="p-4 rounded bg-[#0A0B09] border border-white/[0.08] font-mono text-xs">
                  <span className="text-[#B6F23A] font-semibold block mb-2">
                    BITWISE LSB AUDIO WAVEFORM TRANSFORMATION MATRIX
                  </span>
                  <div className="p-3 rounded bg-white/[0.02] border border-white/[0.04] space-y-1 text-[#9A9E95]">
                    <div>Original 16-bit PCM Audio Sample: <span className="text-white font-mono">110010101111000<span className="text-amber-400 font-bold">0</span></span></div>
                    <div>Encrypted Payload Bit (AES-256): <span className="text-[#B6F23A] font-mono font-bold">1</span></div>
                    <div>NumPy Masking Transformation: <span className="text-white font-mono">(samples & ~1) | bitstream</span></div>
                    <div>Injected LSB Result Buffer: <span className="text-white font-mono">110010101111000<span className="text-[#B6F23A] font-bold">1</span></span> (Zero Audio Distortion)</div>
                  </div>
                </div>
              )}
              {project.interactiveType === 'dag-solver' && (
                <div className="p-4 rounded bg-[#0A0B09] border border-white/[0.08] font-mono text-xs">
                  <span className="text-[#B6F23A] font-semibold block mb-2">
                    TOPOLOGICAL DAG DEPENDENCY RESOLUTION
                  </span>
                  <div className="p-3 rounded bg-white/[0.02] border border-white/[0.04] space-y-1 text-[#9A9E95]">
                    <div>Graph Nodes: <span className="text-white font-mono">[HeroBanner, PricingMatrix, CTACluster]</span></div>
                    <div>Dependency Edges: <span className="text-white font-mono">PricingMatrix → HeroBanner, CTACluster → PricingMatrix</span></div>
                    <div>Topological Order: <span className="text-[#B6F23A] font-mono">HeroBanner → PricingMatrix → CTACluster</span></div>
                    <div>Layout Resolution: <span className="text-white font-mono">O(V + E) Linear Pass · Zero DOM Reflows</span></div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded bg-[#0A0B09] border border-white/[0.08] overflow-hidden">
              <div className="px-4 py-2 bg-[#0E0F0C] border-b border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#71766D]">
                <span className="flex items-center gap-1.5 text-white">
                  <Terminal className="w-3.5 h-3.5 text-[#B6F23A]" />
                  {project.codeSnippet.filename}
                </span>
                <span className="uppercase text-[10px] text-[#B6F23A]">
                  {project.codeSnippet.language}
                </span>
              </div>
              <pre className="p-4 text-xs font-mono text-[#F4F4F0] overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
              <div className="px-4 py-2.5 bg-[#0E0F0C] border-t border-white/[0.04] text-[11px] text-[#9A9E95] font-mono">
                💡 {project.codeSnippet.explanation}
              </div>
            </div>
          )}
        </div>

        {/* Impact Metrics Row & Tech Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
          {/* Metrics */}
          <div className="flex flex-wrap items-center gap-4">
            {project.impactMetrics.map((m) => (
              <div key={m.label} className="font-mono text-xs">
                <span className="text-[#71766D] text-[10px] block uppercase">{m.label}</span>
                <span className="text-[#B6F23A] font-semibold">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap items-center gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#9A9E95]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
