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
    <div className="rounded-xl bg-[#1E293B] border border-[#334155] hover:border-[#3B82F6]/50 transition-all duration-300 overflow-hidden shadow-lg shadow-black/20">
      {/* Top Header Strip */}
      <div className="px-6 py-4 border-b border-[#334155] flex flex-wrap items-center justify-between gap-3 bg-[#0F172A]/70">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold text-[#06B6D4] tracking-wider uppercase bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-2.5 py-0.5 rounded">
            {project.badge}
          </span>
          <span className="hidden sm:inline-block text-[#64748B] text-xs">·</span>
          <span className="text-xs font-mono text-[#9CA3AF]">{project.category}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Tab Switcher */}
          <div className="flex items-center bg-[#0F172A] p-1 rounded-lg border border-[#334155] text-xs font-mono">
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
                activeTab === 'demo'
                  ? 'bg-[#3B82F6] text-white font-semibold shadow-sm'
                  : 'text-[#9CA3AF] hover:text-[#E5E7EB]'
              }`}
            >
              <PlayCircle className="w-3.5 h-3.5" />
              <span>DEMO</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'bg-[#3B82F6] text-white font-semibold shadow-sm'
                  : 'text-[#9CA3AF] hover:text-[#E5E7EB]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>CODE</span>
            </button>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-[#9CA3AF] hover:text-[#3B82F6] hover:bg-[#0F172A] border border-transparent hover:border-[#334155] transition-colors"
            title="View on GitHub"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#E5E7EB] mb-2">
          {project.title}
        </h3>
        <p className="text-sm font-mono text-[#06B6D4] mb-5">
          {project.tagline}
        </p>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 text-xs leading-relaxed">
          <div className="p-4 rounded-lg bg-[#0F172A]/70 border border-[#334155]">
            <span className="font-mono text-[#64748B] text-[10px] uppercase font-bold tracking-wider block mb-1.5">
              THE PROBLEM I ADDRESSED
            </span>
            <p className="text-[#9CA3AF]">{project.problem}</p>
          </div>

          <div className="p-4 rounded-lg bg-[#0F172A]/70 border border-[#334155]">
            <span className="font-mono text-[#3B82F6] text-[10px] uppercase font-bold tracking-wider block mb-1.5">
              HOW I DESIGNED & BUILT IT
            </span>
            <p className="text-[#E5E7EB]">{project.solution}</p>
          </div>
        </div>

        {/* Interactive Simulator / Code Inspector Tab Area */}
        <div className="mb-6">
          {activeTab === 'demo' ? (
            <div>
              {project.interactiveType === 'ast-simulator' && <ASTSimulator />}
              {project.interactiveType === 'redis-lua' && <RedisLuaVisualizer />}
              {project.interactiveType === 'stego-matrix' && (
                <div className="p-4 rounded-lg bg-[#0F172A] border border-[#334155] font-mono text-xs">
                  <span className="text-[#06B6D4] font-semibold block mb-2">
                    BITWISE LSB AUDIO WAVEFORM TRANSFORMATION MATRIX
                  </span>
                  <div className="p-3 rounded bg-[#1E293B]/60 border border-[#334155] space-y-1.5 text-[#9CA3AF]">
                    <div>Original 16-bit PCM Audio Sample: <span className="text-[#E5E7EB] font-mono">110010101111000<span className="text-amber-400 font-bold">0</span></span></div>
                    <div>Encrypted Payload Bit (AES-256): <span className="text-[#06B6D4] font-mono font-bold">1</span></div>
                    <div>NumPy Masking Transformation: <span className="text-[#E5E7EB] font-mono">(samples & ~1) | bitstream</span></div>
                    <div>Injected LSB Result Buffer: <span className="text-[#E5E7EB] font-mono">110010101111000<span className="text-[#06B6D4] font-bold">1</span></span> (Zero Audio Distortion)</div>
                  </div>
                </div>
              )}
              {project.interactiveType === 'dag-solver' && (
                <div className="p-4 rounded-lg bg-[#0F172A] border border-[#334155] font-mono text-xs">
                  <span className="text-[#06B6D4] font-semibold block mb-2">
                    TOPOLOGICAL DAG DEPENDENCY RESOLUTION
                  </span>
                  <div className="p-3 rounded bg-[#1E293B]/60 border border-[#334155] space-y-1.5 text-[#9CA3AF]">
                    <div>Component Hierarchy: <span className="text-[#E5E7EB] font-mono">[HeroBanner, PricingMatrix, CTACluster]</span></div>
                    <div>Dependency Edges: <span className="text-[#E5E7EB] font-mono">PricingMatrix → HeroBanner, CTACluster → PricingMatrix</span></div>
                    <div>Topological Order: <span className="text-[#06B6D4] font-mono">HeroBanner → PricingMatrix → CTACluster</span></div>
                    <div>Layout Pass: <span className="text-[#E5E7EB] font-mono">O(V + E) Linear Pass · Zero DOM Reflows</span></div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-lg bg-[#0F172A] border border-[#334155] overflow-hidden">
              <div className="px-4 py-2.5 bg-[#0B1120] border-b border-[#334155] flex items-center justify-between font-mono text-[11px] text-[#9CA3AF]">
                <span className="flex items-center gap-1.5 text-[#E5E7EB]">
                  <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
                  {project.codeSnippet.filename}
                </span>
                <span className="uppercase text-[10px] text-[#06B6D4] font-semibold">
                  {project.codeSnippet.language}
                </span>
              </div>
              <pre className="p-4 text-xs font-mono text-[#E5E7EB] overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
              <div className="px-4 py-2.5 bg-[#0B1120] border-t border-[#334155] text-[11px] text-[#9CA3AF] font-mono">
                💡 {project.codeSnippet.explanation}
              </div>
            </div>
          )}
        </div>

        {/* Key Results & Tech Tags */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#334155]">
          <div className="flex flex-wrap items-center gap-5">
            {project.keyResults.map((m) => (
              <div key={m.label} className="font-mono text-xs">
                <span className="text-[#64748B] text-[10px] block uppercase font-medium">{m.label}</span>
                <span className="text-[#06B6D4] font-semibold">{m.value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded bg-[#0F172A] border border-[#334155] text-[11px] font-mono text-[#9CA3AF]"
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
