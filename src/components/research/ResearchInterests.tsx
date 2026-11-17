import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Lightbulb, Sparkles } from 'lucide-react';

export const ResearchInterests: React.FC = () => {
  return (
    <section id="research" className="py-24 border-b border-[#334155] bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#06B6D4] tracking-wider uppercase mb-2">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>[04_RESEARCH_AND_INNOVATION]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E5E7EB] tracking-tight">
              Current Research & Emerging Concepts.
            </h2>
          </div>
          <p className="text-sm text-[#9CA3AF] max-w-md">
            Topics where I am actively experimenting, reading recent papers, and designing proof-of-concept prototypes beyond standard coursework.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.researchInterests.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-xl bg-[#1E293B] border border-[#334155] hover:border-[#06B6D4]/50 transition-all duration-200 flex flex-col justify-between shadow-md shadow-black/10 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[11px] text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-2.5 py-0.5 rounded font-semibold">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#9CA3AF]">
                    <Sparkles className="w-3 h-3 text-[#3B82F6]" />
                    <span>{item.status}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#E5E7EB] mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#334155]/60 flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                <span>INDEPENDENT EXPLORATION</span>
                <span className="text-[#06B6D4]">2026/2027</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
