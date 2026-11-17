import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Wrench } from 'lucide-react';

export const TechnicalArsenal: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-b border-[#334155] bg-[#0F172A]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#06B6D4] tracking-wider uppercase mb-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>[02_TECHNICAL_SKILLS]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E5E7EB] tracking-tight">
              Technical Proficiencies.
            </h2>
          </div>
          <p className="text-sm text-[#9CA3AF] max-w-md">
            Languages, frameworks, and system tools I work with daily across backend development, agentic workflows, and database systems.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.technicalSkills.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-xl bg-[#1E293B] border border-[#334155] hover:border-[#3B82F6]/50 transition-all duration-200 flex flex-col justify-between shadow-md shadow-black/10"
            >
              <div>
                <h3 className="font-mono text-sm font-bold text-[#E5E7EB] uppercase tracking-wider pb-3 mb-4 border-b border-[#334155] flex items-center justify-between">
                  <span>{category.category}</span>
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4]"></span>
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-semibold text-[#E5E7EB]">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-xs text-[#9CA3AF] leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#334155]/60 text-[10px] font-mono text-[#64748B]">
                APPLIED IN REAL CODEBASES
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
