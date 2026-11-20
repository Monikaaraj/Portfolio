import { useState } from 'react';
import type { Project } from './data/portfolioData';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Activities } from './components/Activities';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PlaceholderModal } from './components/PlaceholderModal';
import { ResumeModal } from './components/ResumeModal';

function PortfolioContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [placeholderField, setPlaceholderField] = useState<string | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen transition-colors duration-300 dark:bg-[#08090d] dark:text-slate-100 bg-[#f8fafc] text-slate-800 flex flex-col selection:bg-purple-600/30 selection:text-purple-600 dark:selection:text-purple-200 overflow-x-hidden">
      {/* Interactive Neural Constellation & Aurora Background Animation */}
      <BackgroundAnimation />

      {/* Sticky Glass Navbar with MODE TOGGLE BESIDE RESUME/ACTION BUTTON */}
      <Navbar 
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* Clean, bold Hero Section */}
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* About Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Showcase (All 6 Projects) */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenPlaceholderGuide={(field) => setPlaceholderField(field)}
        />

        {/* Achievements Section */}
        <Achievements />

        {/* Education Timeline */}
        <Education />

        {/* Leadership & Activities */}
        <Activities />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Placeholder Guidance Modal */}
      <PlaceholderModal
        field={placeholderField}
        onClose={() => setPlaceholderField(null)}
      />

      {/* Resume Overview & PDF Action Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;
