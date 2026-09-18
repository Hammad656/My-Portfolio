import { motion } from 'motion/react';
import {
  Code,
  Bot,
  Database,
  Cloud,
  FileText,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenCvModal: () => void;
  onCopyText: (text: string, label: string) => void;
}

export function AboutSection({ onOpenCvModal, onCopyText }: AboutSectionProps) {
  const pillars = [
    {
      title: "Full-Stack Web Engineering",
      description: "Crafting end-to-end web applications with Next.js, React.js, and Node.js. Delivering responsive user experiences with Tailwind CSS and architecting performant REST APIs.",
      icon: Code,
      badge: "React & Next.js",
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400"
    },
    {
      title: "AI Chatbot & ML Training",
      description: "Experience in machine learning fundamentals, dataset preparation, and embedding trained models into web applications for real-time conversational assistance (as built in PakResidencyLaw).",
      icon: Bot,
      badge: "AI Model Training",
      color: "from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-400"
    },
    {
      title: "Database Design & Optimization",
      description: "Strong command of both document-oriented (MongoDB) and relational databases. HackerRank Advanced Certified in MySQL with deep expertise in joins, subqueries, and indexing.",
      icon: Database,
      badge: "MySQL & MongoDB",
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400"
    },
    {
      title: "Cloud Fundamentals & Security",
      description: "AWS Cloud certified fundamentals with best practices in authentication, role-based access control, secure session handling, and production deployments on platforms like Vercel.",
      icon: Cloud,
      badge: "AWS Certified",
      color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Hammad Saleem
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Software Engineer passionate about engineering scalable, user-focused digital products and bridging modern web development with AI intelligence.
          </p>
        </div>

        {/* Top Summary Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Bio */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Passionate Engineer & Problem Solver</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-base mb-4">
                {PERSONAL_INFO.summary}
              </p>
              <p className="text-slate-300 leading-relaxed text-base">
                Whether implementing complete enterprise portals in <strong>Next.js and React</strong>, training and integrating customized conversational AI chatbots for real users, or optimizing relational databases in <strong>MySQL</strong>, I prioritize clean architectural separation, security best practices, and intuitive user experiences.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  📍 Lahore, Pakistan
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  🎓 BS CS (2022–2026)
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  ⭐ CGPA 3.03
                </span>
              </div>

              <button
                id="about-view-cv-btn"
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View Complete Digital CV &rarr;</span>
              </button>
            </div>
          </div>

          {/* Quick Info Sidecard */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Facts</h3>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-xs block">Address</span>
                    <span className="text-slate-200 font-medium">{PERSONAL_INFO.address}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-xs block">Phone (Call / WhatsApp)</span>
                    <button
                      onClick={() => onCopyText(PERSONAL_INFO.phone, "Phone number copied")}
                      className="text-slate-200 hover:text-emerald-300 font-mono font-medium transition-colors text-left"
                    >
                      {PERSONAL_INFO.formattedPhone}
                    </button>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-xs block">Email Address</span>
                    <button
                      onClick={() => onCopyText(PERSONAL_INFO.email, "Email copied")}
                      className="text-slate-200 hover:text-blue-300 font-mono font-medium transition-colors text-left break-all"
                    >
                      {PERSONAL_INFO.email}
                    </button>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-xs block">Degree Institution</span>
                    <span className="text-slate-200 font-medium">University of Central Punjab</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href="#contact"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 border border-slate-700"
              >
                <span>Initiate Direct Conversation</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 mb-2">
                    {pillar.badge}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
