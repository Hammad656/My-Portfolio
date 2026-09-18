import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Send,
  ExternalLink,
  Github,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ArrowDown,
  Globe,
  Terminal as TerminalIcon,
  Check,
  Copy,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
  onOpenVercelModal: () => void;
  onOpenAiAssistant: () => void;
  onCopyText: (text: string, label: string) => void;
}

const ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "Next.js & React Architect",
  "AI Chatbot & ML Integrator",
  "Database & API Specialist"
];

export function Hero({ onOpenCvModal, onOpenVercelModal, onOpenAiAssistant, onCopyText }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const codeSnippet = `// Hammad Saleem - Software Engineer Profile
const developer = {
  name: "Hammad Saleem",
  degree: "BS Computer Science (CGPA: 3.03)",
  university: "University of Central Punjab",
  location: "Lahore, Pakistan",
  stack: ["React.js", "Next.js", "Tailwind CSS", "MongoDB", "MySQL", "AWS"],
  specialization: "Full-Stack Web Apps & AI Chatbot Integrations",
  flagshipProject: "https://pakresidencylaw.space",
  availableForHire: true
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    onCopyText(codeSnippet, "Developer profile code copied");
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-300 shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-semibold">Available for Opportunities</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">Lahore, Pakistan</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
            </motion.div>

            {/* Rotating Dynamic Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 flex items-center gap-2 min-h-[40px]"
            >
              <span className="text-xl sm:text-2xl font-semibold text-slate-400">I am a</span>
              <span className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono transition-all duration-300">
                {ROLES[roleIndex]}
              </span>
            </motion.div>

            {/* Bio Summary from CV */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Computer Science graduate from <strong className="text-white">University of Central Punjab</strong> (CGPA 3.03) with hands-on experience developing responsive full-stack applications in <span className="text-cyan-300 font-medium">React.js</span>, <span className="text-cyan-300 font-medium">Next.js</span>, <span className="text-cyan-300 font-medium">MongoDB</span>, and <span className="text-cyan-300 font-medium">MySQL</span>. Specialized in building scalable, user-focused web apps, secure authentication, and AI chatbot integrations.
            </motion.p>

            {/* Key Quick Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-6 flex flex-wrap gap-2 text-xs"
            >
              <div className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Next.js & React</span>
              </div>
              <div className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>AI Chatbot Integration</span>
              </div>
              <div className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>PakResidencyLaw Creator</span>
              </div>
              <div className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>MySQL Advanced & AWS Certified</span>
              </div>
            </motion.div>

            {/* Action Buttons: All strictly functional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {/* Primary: View Projects */}
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* View CV Modal */}
              <button
                id="hero-view-cv-btn"
                onClick={onOpenCvModal}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View & Print CV</span>
              </button>

              {/* Contact Me */}
              <a
                id="hero-contact-btn"
                href="#contact"
                className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-medium text-sm transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </a>

              {/* Vercel & Domain Guide */}
              <button
                id="hero-vercel-guide-btn"
                onClick={onOpenVercelModal}
                className="px-4 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:text-cyan-200 font-medium text-xs transition-colors flex items-center gap-2"
                title="View how this website is deployed to Vercel and connected to a custom domain"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Vercel Deploy & Domain Guide</span>
              </button>
            </motion.div>

            {/* Direct Connect Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400"
            >
              <div className="flex items-center gap-3">
                <a
                  id="hero-github-link"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  id="hero-linkedin-link"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  id="hero-live-flagship-link"
                  href="https://pakresidencylaw.space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 transition-colors py-1 px-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/50 hover:border-cyan-700"
                >
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Live Project: pakresidencylaw.space</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </a>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="hero-copy-email-btn"
                  onClick={() => onCopyText(PERSONAL_INFO.email, "Email copied")}
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors py-1 px-2 rounded hover:bg-slate-900"
                  title="Copy email to clipboard"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </button>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Code Card & Terminal */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-xl"
            >
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                    hammad-profile.ts
                  </span>
                </div>
                <button
                  id="hero-copy-snippet-btn"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition-colors"
                  title="Copy TypeScript snippet"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Snippet */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 bg-slate-950/40">
                <div className="text-slate-500">// Hammad Saleem's Verified CV Specification</div>
                <div>
                  <span className="text-purple-400">export const</span>{' '}
                  <span className="text-blue-400">softwareEngineer</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">name</span>: <span className="text-amber-300">"{PERSONAL_INFO.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">role</span>: <span className="text-amber-300">"Full Stack & AI Engineer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">education</span>: {'{'}
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">university</span>: <span className="text-amber-300">"University of Central Punjab"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">degree</span>: <span className="text-amber-300">"BS Computer Science (2022-2026)"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">cgpa</span>: <span className="text-emerald-400">3.03</span>
                </div>
                <div className="pl-4">{'}'},</div>
                <div className="pl-4">
                  <span className="text-cyan-300">flagshipProject</span>: {'{'}
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">name</span>: <span className="text-amber-300">"PakResidencyLaw"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">domain</span>: <span className="text-cyan-400">"pakresidencylaw.space"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">tech</span>: [<span className="text-amber-300">"Next.js"</span>, <span className="text-amber-300">"MongoDB"</span>, <span className="text-amber-300">"AI Chatbot"</span>]
                </div>
                <div className="pl-4">{'}'},</div>
                <div className="pl-4">
                  <span className="text-cyan-300">certifications</span>: [
                </div>
                <div className="pl-8">
                  <span className="text-amber-300">"HackerRank MySQL Advanced"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-amber-300">"AWS Cloud Fundamentals"</span>
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-cyan-300">status</span>: <span className="text-emerald-400">"Ready for Impact"</span>
                </div>
                <div>{'}'};</div>
              </div>

              {/* Terminal Footer Quick Links */}
              <div className="px-4 py-3 bg-slate-900 border-t border-slate-800/90 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-slate-400 font-mono text-[11px]">
                  $ git status: 0 errors • production ready
                </span>
                <button
                  id="hero-ai-chat-card-btn"
                  onClick={onOpenAiAssistant}
                  className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask AI Recruiter Assistant &rarr;</span>
                </button>
              </div>
            </motion.div>

            {/* Quick Metrics Bar below terminal */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center"
                >
                  <p className="text-sm font-bold text-white font-mono">{stat.value}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
