import { useState } from 'react';
import { Navbar } from './components/nav/Navbar';
import { Hero } from './components/hero/Hero';
import { ProofStrip } from './components/metrics/ProofStrip';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { TechnicalArsenal } from './components/skills/TechnicalArsenal';
import { EngineeringPrinciples } from './components/philosophy/EngineeringPrinciples';
import { ResearchInterests } from './components/research/ResearchInterests';
import { Milestones } from './components/timeline/Milestones';
import { Footer } from './components/footer/Footer';
import { RecruiterTerminal } from './components/terminal/RecruiterTerminal';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0F172A] text-[#E5E7EB] selection:bg-[#3B82F6] selection:text-white">
      {/* Docked Navigation HUD */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />

        {/* 4-Column Proof & Telemetry Strip */}
        <ProofStrip />

        {/* 4 Flagship Production Systems with Interactive AST/Lua Demos */}
        <ProjectsSection />

        {/* Depth-First Technical Skills */}
        <TechnicalArsenal />

        {/* Core Engineering Approach */}
        <EngineeringPrinciples />

        {/* Current Research & Innovative Exploration */}
        <ResearchInterests />

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
