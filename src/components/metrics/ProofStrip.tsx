import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Award, ShieldCheck, Cpu, Code2 } from 'lucide-react';

const ICONS = [Award, ShieldCheck, Cpu, Code2];

export const ProofStrip: React.FC = () => {
  return (
    <section className="relative z-10 py-12 border-b border-[#334155] bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PORTFOLIO_DATA.highlights.map((metric, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={metric.label}
                className="group relative p-6 rounded-lg bg-[#1E293B] border border-[#334155] hover:border-[#3B82F6]/60 transition-all duration-200 shadow-sm hover:shadow-blue-500/10"
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-2.5 py-0.5 rounded">
                    {metric.badge}
                  </span>
                  <Icon className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#3B82F6] transition-colors" />
                </div>

                {/* Big Metric Value */}
                <div className="flex items-baseline gap-1.5 mb-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#E5E7EB] tracking-tight">
                    {metric.value}
                  </span>
                  {metric.unit && (
                    <span className="font-mono text-xs text-[#3B82F6] font-semibold">
                      {metric.unit}
                    </span>
                  )}
                </div>

                {/* Metric Label & Context */}
                <h3 className="font-mono text-xs font-semibold text-[#E5E7EB] tracking-wide mb-1">
                  {metric.label}
                </h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  {metric.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
