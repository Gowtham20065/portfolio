import { useState } from 'react';
import { Navbar } from './components/nav/Navbar';
import { Hero } from './components/hero/Hero';
import { ProofStrip } from './components/metrics/ProofStrip';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { TechnicalArsenal } from './components/skills/TechnicalArsenal';
import { EngineeringPrinciples } from './components/philosophy/EngineeringPrinciples';
import { Milestones } from './components/timeline/Milestones';
import { Footer } from './components/footer/Footer';
import { RecruiterTerminal } from './components/terminal/RecruiterTerminal';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0A0B09] text-[#F4F4F0] selection:bg-[#B6F23A] selection:text-[#0E0F0C]">
      {/* Docked Monospace Navigation HUD */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero with Interactive AST Canvas */}
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />

        {/* 4-Column Proof & Telemetry Bento Strip */}
        <ProofStrip />

        {/* 4 Flagship Production Systems with Interactive AST/Lua Demos */}
        <ProjectsSection />

        {/* Depth-First Technical Arsenal */}
        <TechnicalArsenal />

        {/* Core Engineering Theses */}
        <EngineeringPrinciples />

        {/* Academic & Benchmark Milestones */}
        <Milestones />
      </main>

      {/* System Archival Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive Recruiter CLI Modal */}
      <RecruiterTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
