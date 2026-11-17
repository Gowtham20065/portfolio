import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Layers } from 'lucide-react';

export const TechnicalArsenal: React.FC = () => {
  return (
    <section id="arsenal" className="py-24 border-b border-white/[0.08] bg-[#0E0F0C]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#B6F23A] tracking-widest uppercase mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>[02_TECHNICAL_ARSENAL]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Depth-First Systems Taxonomy.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#9A9E95] max-w-md">
            Categorized strictly by architectural responsibility and execution layer, rather than random logo clusters.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.technicalArsenal.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-lg bg-[#141612] border border-white/[0.08] hover:border-[#B6F23A]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider pb-3 mb-4 border-b border-white/[0.06] flex items-center justify-between">
                  <span>{category.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B6F23A]"></span>
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-semibold text-[#F4F4F0]">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-[#B6F23A] bg-[#B6F23A]/10 px-1.5 py-0.2 rounded">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#9A9E95] leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] text-[10px] font-mono text-[#71766D]">
                VERIFIED IN TEST SUITES
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
