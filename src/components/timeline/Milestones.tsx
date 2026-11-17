import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export const Milestones: React.FC = () => {
  return (
    <section id="education" className="py-24 border-b border-[#334155] bg-[#0F172A]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#06B6D4] tracking-wider uppercase mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>[04_EDUCATION_AND_HONORS]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E5E7EB] tracking-tight">
              Education & Benchmarks.
            </h2>
          </div>
          <p className="text-sm text-[#9CA3AF] max-w-md">
            Formal software engineering education combined with nationwide competitive problem-solving credentials.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 max-w-3xl">
          {PORTFOLIO_DATA.education.map((item) => (
            <div
              key={item.degree}
              className="p-6 rounded-xl bg-[#1E293B] border border-[#334155] hover:border-[#3B82F6]/50 transition-all duration-200 relative pl-8 shadow-md shadow-black/10"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-3 top-7 w-2.5 h-2.5 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]"></div>

              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs text-[#06B6D4] font-semibold">
                  {item.period}
                </span>
                <span className="font-mono text-xs text-[#E5E7EB] px-2.5 py-0.5 rounded bg-[#0F172A] border border-[#334155] font-medium">
                  {item.score}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#E5E7EB] mb-1">
                {item.degree}
              </h3>
              <p className="font-mono text-xs text-[#9CA3AF] mb-3">
                {item.institution}
              </p>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
