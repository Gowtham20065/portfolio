import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export const Milestones: React.FC = () => {
  return (
    <section id="academics" className="py-24 border-b border-white/[0.08] bg-[#0E0F0C]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#B6F23A] tracking-widest uppercase mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>[04_ACADEMIC_CHRONOLOGY]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Academic & Benchmark Milestones.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#9A9E95] max-w-md">
            Rigorous engineering training combined with nationally verified problem-solving performance.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 max-w-3xl">
          {PORTFOLIO_DATA.academicChronology.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-lg bg-[#141612] border border-white/[0.08] hover:border-white/[0.18] transition-all relative pl-8"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-3 top-7 w-2 h-2 rounded-full bg-[#B6F23A]"></div>

              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs text-[#B6F23A] font-semibold">
                  {item.period}
                </span>
                <span className="font-mono text-xs text-white px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                  {item.score}
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="font-mono text-xs text-[#71766D] mb-3">
                {item.institution}
              </p>
              <p className="text-xs text-[#9A9E95] leading-relaxed">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
