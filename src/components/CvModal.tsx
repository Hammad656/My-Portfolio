import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  Copy,
  Download,
  Check,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_LIST, CERTIFICATIONS_LIST, CV_PLAIN_TEXT } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyText: (text: string, label: string) => void;
}

export function CvModal({ isOpen, onClose, onCopyText }: CvModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(CV_PLAIN_TEXT);
    setCopied(true);
    onCopyText(CV_PLAIN_TEXT, "Complete plain-text CV copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([CV_PLAIN_TEXT], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Hammad_Saleem_CV.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col max-h-[92vh]"
        >
          {/* Action Bar (Not visible in print) */}
          <div className="no-print p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs sm:text-sm font-bold text-white font-mono">
                Official Curriculum Vitae • Hammad Saleem
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="cv-print-btn"
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Print or Save as PDF via browser dialog"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span>Print / Save PDF</span>
              </button>

              <button
                id="cv-copy-btn"
                onClick={handleCopyText}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Copy ATS plain text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                id="cv-download-txt-btn"
                onClick={handleDownloadTxt}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Download .txt version"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>.TXT</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors ml-1"
                aria-label="Close CV Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CV Content Sheet (Printable container) */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-900 text-slate-100 font-sans">
            <div id="cv-printable-container" className="max-w-3xl mx-auto space-y-6 text-slate-200">
              
              {/* Header */}
              <div className="text-center pb-4 border-b border-slate-700">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base font-semibold text-cyan-400 mt-0.5">
                  Software Engineer
                </p>
                <div className="mt-2 text-xs sm:text-sm text-slate-300 flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono">
                  <span>{PERSONAL_INFO.address}</span>
                  <span>|</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-cyan-300 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                  <span>|</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-300 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="mt-1 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-3 font-mono">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                    linkedin.com/in/hammad-saleem-a64276290
                  </a>
                  <span>•</span>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                    github.com/Hammad656
                  </a>
                </div>
              </div>

              {/* SUMMARY */}
              <div>
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-cyan-400 pb-1 border-b border-slate-800 mb-2">
                  Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              {/* EDUCATION */}
              <div>
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-cyan-400 pb-1 border-b border-slate-800 mb-3">
                  Education
                </h2>
                <div className="space-y-3 text-xs sm:text-sm">
                  {EDUCATION_LIST.map((edu, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <span className="font-bold text-white">{edu.institution}</span>
                        <div className="text-slate-300">
                          {edu.degree} {edu.score ? `• ${edu.score}` : ''}
                        </div>
                      </div>
                      <span className="font-mono text-xs text-slate-400 shrink-0">
                        {edu.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TECHNICAL SKILLS */}
              <div>
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-cyan-400 pb-1 border-b border-slate-800 mb-2">
                  Technical Skills
                </h2>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  <div>
                    <span className="font-semibold text-white">Frontend:</span> React.js, Next.js, Tailwind CSS, Responsive Web Design
                  </div>
                  <div>
                    <span className="font-semibold text-white">Backend:</span> Next.js API Routes, RESTful APIs, Authentication & Authorization, Javascript
                  </div>
                  <div>
                    <span className="font-semibold text-white">Databases:</span> MongoDB, MySQL
                  </div>
                  <div>
                    <span className="font-semibold text-white">Cloud & Dev Tools:</span> AWS (Cloud Fundamentals), Git, GitHub
                  </div>
                  <div>
                    <span className="font-semibold text-white">Machine Learning & AI:</span> Machine Learning Fundamentals, AI Model Training, AI Chatbot Integration
                  </div>
                  <div>
                    <span className="font-semibold text-white">Software Development:</span> Full-Stack Web Development, API Integration, CRUD Operations, Database Design, Problem Solving
                  </div>
                  <div>
                    <span className="font-semibold text-white">ERP Systems:</span> Good understanding of ERP systems and modules
                  </div>
                </div>
              </div>

              {/* PROJECT EXPERIENCE */}
              <div>
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-cyan-400 pb-1 border-b border-slate-800 mb-3">
                  Project Experience
                </h2>
                <div className="space-y-4">
                  {/* PakResidencyLaw */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <span className="font-bold text-white text-sm">
                          PakResidencyLaw — AI-Powered Legal Assistance Platform
                        </span>
                      </div>
                      <a
                        href="https://pakresidencylaw.space"
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-cyan-400 hover:underline"
                      >
                        pakresidencylaw.space
                      </a>
                    </div>
                    <p className="text-xs text-slate-400 italic mb-1.5 font-mono">
                      Next.js, MongoDB, REST APIs, AI Chatbot Integration
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-slate-300">
                      <li>Built PakResidencyLaw, an AI-powered legal assistance platform using Next.js, MongoDB, REST APIs, and AI chatbot integration.</li>
                      <li>Designed responsive user interfaces with React.js, Next.js, and Tailwind CSS, ensuring a seamless user experience.</li>
                      <li>Developed backend APIs, optimized database operations, and applied best practices in scalability, security, and performance.</li>
                      <li>Trained and integrated machine learning models to provide intelligent, automated legal assistance.</li>
                    </ul>
                  </div>

                  {/* LMS */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <span className="font-bold text-white text-sm">
                          Learning Management System (LMS)
                        </span>
                      </div>
                      <a
                        href="https://github.com/Hammad656/LMS-Project"
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-cyan-400 hover:underline"
                      >
                        github.com/Hammad656/LMS-Project
                      </a>
                    </div>
                    <p className="text-xs text-slate-400 italic mb-1.5 font-mono">
                      ASP.NET (MVC Architecture)
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-slate-300">
                      <li>Developed a Learning Management System using ASP.NET on MVC architecture.</li>
                      <li>Implemented secure authentication, CRUD operations, and efficient database management.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CERTIFICATIONS */}
              <div>
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-cyan-400 pb-1 border-b border-slate-800 mb-2">
                  Certifications
                </h2>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-slate-300">
                  <li><span className="font-semibold text-white">HackerRank</span> — MySQL Advanced Certificate</li>
                  <li><span className="font-semibold text-white">AWS Certificate</span> — Cloud</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Modal Footer */}
          <div className="no-print p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Standard ATS-compliant layout verified</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors"
            >
              Close CV
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
