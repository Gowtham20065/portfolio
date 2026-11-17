import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { FileDown, Terminal, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0B09]/90 backdrop-blur-md border-b border-white/[0.08] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Identity & Live Status Pill */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="font-mono text-sm font-semibold tracking-wider text-white hover:text-[#B6F23A] transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#B6F23A] animate-pulse"></span>
              <span>GOWTHAM.SYS</span>
            </a>
            <span className="hidden md:inline-block text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#9A9E95]">
              {PORTFOLIO_DATA.identity.regNo} · SE-MTECH
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider text-[#9A9E95]">
            <a href="#systems" className="hover:text-white transition-colors">
              <span className="text-[#B6F23A] mr-1">01</span>SYSTEMS
            </a>
            <a href="#arsenal" className="hover:text-white transition-colors">
              <span className="text-[#B6F23A] mr-1">02</span>ARSENAL
            </a>
            <a href="#theses" className="hover:text-white transition-colors">
              <span className="text-[#B6F23A] mr-1">03</span>PRINCIPLES
            </a>
            <a href="#academics" className="hover:text-white transition-colors">
              <span className="text-[#B6F23A] mr-1">04</span>ACADEMICS
            </a>
            <button
              onClick={onOpenTerminal}
              className="hover:text-[#B6F23A] transition-colors flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-[#B6F23A]" />
              <span className="text-[#B6F23A] mr-1">05</span>CLI_SHELL
            </button>
          </nav>

          {/* Direct Resume Download & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.identity.resumePdf}
              download="Gowtham_Boda_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#B6F23A] text-[#0E0F0C] text-xs font-mono font-bold tracking-wide hover:bg-[#a6e228] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_0_15px_rgba(182,242,58,0.2)]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>RESUME [PDF]</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded text-[#9A9E95] hover:text-white hover:bg-white/[0.05]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/[0.08] bg-[#0E0F0C]/95 backdrop-blur-xl p-4 rounded-md space-y-3 font-mono text-xs text-[#9A9E95]">
            <a
              href="#systems"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-white py-1"
            >
              <span className="text-[#B6F23A] mr-1">01</span>SYSTEMS SHOWCASE
            </a>
            <a
              href="#arsenal"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-white py-1"
            >
              <span className="text-[#B6F23A] mr-1">02</span>TECHNICAL ARSENAL
            </a>
            <a
              href="#theses"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-white py-1"
            >
              <span className="text-[#B6F23A] mr-1">03</span>ENGINEERING PRINCIPLES
            </a>
            <a
              href="#academics"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-white py-1"
            >
              <span className="text-[#B6F23A] mr-1">04</span>ACADEMIC TIMELINE
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center gap-2 text-[#B6F23A] py-1"
            >
              <Terminal className="w-4 h-4" />
              <span>LAUNCH RECRUITER CLI</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
