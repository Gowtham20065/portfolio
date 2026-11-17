import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Mail, FileDown, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  return (
    <footer className="py-16 bg-[#070806] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recruiter Quick Action Bento Box */}
        <div className="p-8 rounded-lg bg-[#141612] border border-white/[0.08] mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#B6F23A] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#B6F23A] animate-pulse"></span>
              <span>AVAILABLE FOR HIGH-IMPACT SOFTWARE & SYSTEMS ROLES (2027)</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Let's Build Deterministic, High-Scale Software Together.
            </h3>
            <p className="text-xs font-mono text-[#9A9E95] max-w-xl">
              Open to technical conversations with engineering leaders, recruiters, and founders building distributed backends and autonomous agents.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={`mailto:${PORTFOLIO_DATA.identity.email}`}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-[#B6F23A] text-[#0E0F0C] font-mono text-xs font-bold tracking-wider hover:bg-[#a5e026] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>DISPATCH EMAIL</span>
            </a>
            <a
              href={PORTFOLIO_DATA.identity.resumePdf}
              download="Gowtham_Boda_Resume.pdf"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-white/[0.05] border border-white/[0.1] text-white font-mono text-xs tracking-wider hover:border-[#B6F23A] transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>GET RESUME [.PDF]</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation & System Meta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/[0.06] text-xs font-mono text-[#71766D]">
          {/* Identity */}
          <div className="space-y-2">
            <span className="text-white font-bold block tracking-wider">
              BODA GOWTHAM // {PORTFOLIO_DATA.identity.regNo}
            </span>
            <p className="text-[11px] text-[#9A9E95]">
              {PORTFOLIO_DATA.identity.degree} · {PORTFOLIO_DATA.identity.university}
            </p>
            <p className="text-[10px] text-[#5E625A]">
              CGPA {PORTFOLIO_DATA.identity.cgpa} · Zero Active Arrears · Young Turks 99.85 %ile
            </p>
          </div>

          {/* Direct Social Links */}
          <div className="space-y-2">
            <span className="text-white font-bold block tracking-wider">NETWORK COORDINATES</span>
            <div className="flex items-center gap-4 text-[#9A9E95]">
              <a
                href={PORTFOLIO_DATA.identity.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B6F23A] transition-colors flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.identity.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#B6F23A] transition-colors flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <button
                onClick={onOpenTerminal}
                className="hover:text-[#B6F23A] transition-colors flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Shell</span>
              </button>
            </div>
          </div>

          {/* System Telemetry & Integrity */}
          <div className="space-y-1 md:text-right text-[11px]">
            <div className="text-white">DETERMINISTIC SYSTEMS & AGENTS</div>
            <div>VERIFIED ON LINUX x86_64 // UTC 2026</div>
            <div className="text-[10px] text-[#5E625A]">
              SHA-256: 7f8a9e...4b2d · All systems nominal
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
