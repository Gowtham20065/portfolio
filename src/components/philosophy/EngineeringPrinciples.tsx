import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Compass } from 'lucide-react';

export const EngineeringPrinciples: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 border-b border-[#334155] bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#06B6D4] tracking-wider uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>[03_ENGINEERING_APPROACH]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E5E7EB] tracking-tight">
              My Engineering Approach.
            </h2>
          </div>
          <p className="text-sm text-[#9CA3AF] max-w-md">
            The fundamental software engineering values that guide how I structure architectures, prevent bugs, and write reliable code.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.engineeringPhilosophy.map((thesis) => (
            <div
              key={thesis.number}
              className="p-7 rounded-xl bg-[#1E293B] border border-[#334155] hover:border-[#3B82F6]/50 transition-all duration-200 flex flex-col justify-between shadow-md shadow-black/10"
            >
              <div>
                <span className="font-mono text-3xl font-extrabold text-[#3B82F6] block mb-4">
                  {thesis.number}
                </span>
                <h3 className="text-lg font-bold text-[#E5E7EB] mb-2">
                  {thesis.title}
                </h3>
                <p className="font-mono text-xs text-[#06B6D4] mb-4 pb-3 border-b border-[#334155]">
                  "{thesis.summary}"
                </p>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  {thesis.elaboration}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#334155]/60 font-mono text-[10px] text-[#64748B]">
                CORE PRINCIPLE // CODE INTEGRITY
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
