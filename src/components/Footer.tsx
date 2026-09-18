import { ArrowUp, Github, Linkedin, Mail, Phone, Globe, FileText, Sparkles, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCvModal: () => void;
  onOpenVercelModal: () => void;
  onOpenAiAssistant: () => void;
}

export function Footer({ onOpenCvModal, onOpenVercelModal, onOpenAiAssistant }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-cyan-500/20">
                HS
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Software Engineer & Full-Stack Developer specializing in Next.js, React, Tailwind CSS, MongoDB, MySQL, and AI chatbot integrations.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 hover:text-blue-300 hover:border-slate-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:border-slate-700 transition-colors"
                title="Email Hammad"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:border-slate-700 transition-colors"
                title="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects & Experience</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">Education & Timeline</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Form</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Live Work */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-3">
              Featured Work
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://pakresidencylaw.space"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <span>PakResidencyLaw.space</span>
                  <Globe className="w-3 h-3 text-cyan-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Hammad656/LMS-Project"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <span>LMS Project (ASP.NET)</span>
                  <Github className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCvModal}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <span>View Printable CV</span>
                  <FileText className="w-3 h-3 text-cyan-400" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Vercel & Domain */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-3">
              Deployment & Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenVercelModal}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <Globe className="w-3 h-3 text-cyan-400" />
                  <span>Vercel Deploy Guide</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenVercelModal}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <span>Custom Domain DNS</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAiAssistant}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-left"
                >
                  <Sparkles className="w-3 h-3 text-violet-400" />
                  <span>Ask AI Assistant</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript & Tailwind CSS. Ready for Vercel deployment.
          </p>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
