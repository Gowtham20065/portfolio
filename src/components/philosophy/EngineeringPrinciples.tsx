import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Compass } from 'lucide-react';

export const EngineeringPrinciples: React.FC = () => {
  return (
    <section id="theses" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#B6F23A] tracking-widest uppercase mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>[03_ENGINEERING_THESES]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Architectural Convictions.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#9A9E95] max-w-md">
            The mathematical and systems principles that govern how I architect production software.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.engineeringTheses.map((thesis) => (
            <div
              key={thesis.number}
              className="p-6 rounded-lg bg-[#141612] border border-white/[0.08] hover:border-[#B6F23A]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-3xl font-display font-extrabold text-[#B6F23A] block mb-4">
                  {thesis.number}
                </span>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {thesis.title}
                </h3>
                <p className="font-mono text-xs text-[#B6F23A] mb-4 pb-3 border-b border-white/[0.06]">
                  "{thesis.summary}"
                </p>
                <p className="text-xs text-[#9A9E95] leading-relaxed">
                  {thesis.elaboration}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.04] font-mono text-[10px] text-[#71766D]">
                PRINCIPLE // VERIFIED ARCHITECTURE
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
