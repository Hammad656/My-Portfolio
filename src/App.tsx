/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailsModal } from './components/ProjectDetailsModal';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { CvModal } from './components/CvModal';
import { VercelDeployModal } from './components/VercelDeployModal';
import { AiAssistantDrawer } from './components/AiAssistantDrawer';
import { Footer } from './components/Footer';
import { ToastContainer, ToastMessage } from './components/Toast';
import { Project } from './data/portfolioData';
import { Sparkles, FileText, Globe } from 'lucide-react';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isVercelModalOpen, setIsVercelModalOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, message?: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, title, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleCopyText = (_text: string, label: string) => {
    addToast("Copied to Clipboard", label, "success");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Navigation */}
      <Navbar
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onOpenVercelModal={() => setIsVercelModalOpen(true)}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onOpenVercelModal={() => setIsVercelModalOpen(true)}
          onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
          onCopyText={handleCopyText}
        />

        <AboutSection
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onCopyText={handleCopyText}
        />

        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <SkillsSection
          onCopyText={handleCopyText}
        />

        <EducationSection />

        <CertificationsSection />

        <ContactSection
          onCopyText={handleCopyText}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onOpenVercelModal={() => setIsVercelModalOpen(true)}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
      />

      {/* Modals & Drawers */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        onCopyText={handleCopyText}
      />

      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <VercelDeployModal
        isOpen={isVercelModalOpen}
        onClose={() => setIsVercelModalOpen(false)}
        onCopyText={handleCopyText}
      />

      <AiAssistantDrawer
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
        onOpenCvModal={() => {
          setIsAiAssistantOpen(false);
          setIsCvModalOpen(true);
        }}
      />

      {/* Floating Action Utilities */}
      <div className="fixed bottom-6 left-6 z-30 flex items-center gap-2">
        {/* Floating AI Assistant Trigger */}
        <button
          id="floating-ai-assistant-btn"
          onClick={() => setIsAiAssistantOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-cyan-500/40 shadow-xl shadow-cyan-950/40 backdrop-blur-md transition-all duration-200 hover:scale-105"
          title="Ask AI Recruiter Assistant"
        >
          <div className="relative">
            <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
            Ask AI Assistant
          </span>
        </button>

        {/* Floating Quick CV */}
        <button
          id="floating-cv-btn"
          onClick={() => setIsCvModalOpen(true)}
          className="p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 shadow-xl backdrop-blur-md transition-transform hover:scale-105"
          title="View Digital CV"
        >
          <FileText className="w-4 h-4 text-cyan-400" />
        </button>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer
        toasts={toasts}
        onDismiss={dismissToast}
      />

    </div>
  );
}
