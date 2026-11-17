import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Award, ShieldCheck, Cpu, Code2 } from 'lucide-react';

const ICONS = [Award, ShieldCheck, Cpu, Code2];

export const ProofStrip: React.FC = () => {
  return (
    <section className="relative z-10 py-10 border-b border-white/[0.08] bg-[#0E0F0C]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.telemetryMetrics.map((metric, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={metric.label}
                className="group relative p-5 rounded-md bg-[#141612] border border-white/[0.07] hover:border-[#B6F23A]/40 transition-all duration-200"
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#B6F23A] bg-[#B6F23A]/10 px-2 py-0.5 rounded">
                    {metric.badge}
                  </span>
                  <Icon className="w-4 h-4 text-[#71766D] group-hover:text-[#B6F23A] transition-colors" />
                </div>

                {/* Big Metric Value */}
                <div className="flex items-baseline gap-1.5 mb-1.5">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                    {metric.value}
                  </span>
                  {metric.unit && (
                    <span className="font-mono text-xs text-[#B6F23A] font-semibold">
                      {metric.unit}
                    </span>
                  )}
                </div>

                {/* Metric Label & Context */}
                <h3 className="font-mono text-xs font-semibold text-[#F4F4F0] tracking-wide mb-1">
                  {metric.label}
                </h3>
                <p className="text-xs text-[#9A9E95] leading-relaxed">
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
