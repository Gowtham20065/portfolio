import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { FolderGit2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-b border-[#334155] bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#06B6D4] tracking-wider uppercase mb-2">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>[01_FEATURED_PROJECTS]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E5E7EB] tracking-tight">
              Featured Projects & Systems.
            </h2>
          </div>
          <p className="text-sm text-[#9CA3AF] max-w-md">
            Production codebases demonstrating deterministic AI evaluation, atomic Redis concurrency, bitwise multimedia steganography, and algorithmic layout calculation.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-10">
          {PORTFOLIO_DATA.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
