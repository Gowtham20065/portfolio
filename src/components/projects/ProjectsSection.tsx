import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Terminal } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="systems" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#B6F23A] tracking-widest uppercase mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>[01_PRODUCTION_SYSTEMS]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Verified Production Architectures.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#9A9E95] max-w-md">
            Four end-to-end codebases proving deterministic execution, low-latency concurrency, bit-level stream manipulation, and algorithmic layout rendering.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-10">
          {PORTFOLIO_DATA.flagshipProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
