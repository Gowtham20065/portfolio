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
          ? 'bg-[#0F172A]/90 backdrop-blur-md border-b border-[#334155] py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Prominent Name & Title */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-lg sm:text-xl font-bold tracking-tight text-[#E5E7EB] hover:text-[#3B82F6] transition-colors flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]"></span>
              <span>Boda Gowtham</span>
            </a>
            <span className="hidden md:inline-block text-xs font-mono px-2.5 py-1 rounded bg-[#1E293B] border border-[#334155] text-[#9CA3AF]">
              Integrated M.Tech (SE) · VIT-AP
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono font-medium tracking-wide text-[#9CA3AF]">
            <a href="#projects" className="hover:text-[#3B82F6] transition-colors">
              <span className="text-[#06B6D4] mr-1">01</span>PROJECTS
            </a>
            <a href="#skills" className="hover:text-[#3B82F6] transition-colors">
              <span className="text-[#06B6D4] mr-1">02</span>SKILLS
            </a>
            <a href="#philosophy" className="hover:text-[#3B82F6] transition-colors">
              <span className="text-[#06B6D4] mr-1">03</span>APPROACH
            </a>
            <a href="#research" className="hover:text-[#3B82F6] transition-colors">
              <span className="text-[#06B6D4] mr-1">04</span>RESEARCH
            </a>
            <a href="#education" className="hover:text-[#3B82F6] transition-colors">
              <span className="text-[#06B6D4] mr-1">05</span>EDUCATION
            </a>
            <button
              onClick={onOpenTerminal}
              className="hover:text-[#06B6D4] transition-colors flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span className="text-[#06B6D4] mr-1">06</span>CLI_SHELL
            </button>
          </nav>

          {/* Direct Resume Download & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.identity.resumePdf}
              download="Gowtham_Boda_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#3B82F6] text-white text-xs font-mono font-semibold tracking-wide hover:bg-[#2563EB] transition-all transform hover:-translate-y-0.5 shadow-md shadow-blue-500/20"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>RESUME PDF</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#1E293B]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#334155] bg-[#1E293B]/95 backdrop-blur-xl p-4 rounded-lg space-y-3 font-mono text-xs text-[#9CA3AF] shadow-xl">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#E5E7EB] py-1"
            >
              <span className="text-[#06B6D4] mr-1">01</span>FEATURED PROJECTS
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#E5E7EB] py-1"
            >
              <span className="text-[#06B6D4] mr-1">02</span>TECHNICAL SKILLS
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#E5E7EB] py-1"
            >
              <span className="text-[#06B6D4] mr-1">03</span>ENGINEERING APPROACH
            </a>
            <a
              href="#research"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#E5E7EB] py-1"
            >
              <span className="text-[#06B6D4] mr-1">04</span>CURRENT RESEARCH
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#E5E7EB] py-1"
            >
              <span className="text-[#06B6D4] mr-1">05</span>EDUCATION & HONORS
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center gap-2 text-[#06B6D4] py-1"
            >
              <Terminal className="w-4 h-4 text-[#3B82F6]" />
              <span>OPEN TERMINAL SHELL</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
