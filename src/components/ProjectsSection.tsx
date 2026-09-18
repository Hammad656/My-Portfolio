import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  Bot,
  Code2,
  CheckCircle2,
  ArrowUpRight,
  Maximize2
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'AI & ML' | 'Full-Stack'>('All');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Project Experience
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Real-world applications showcasing full-stack architecture, machine learning chatbot integration, secure authentication, and database optimization.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            {(['All', 'AI & ML', 'Full-Stack'] as const).map((filter) => (
              <button
                key={filter}
                id={`filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {filter === 'All' ? 'All Projects' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-slate-700/80 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Top Bar inside Card */}
                <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-800/40 to-transparent border-b border-slate-800/60 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <button
                    id={`view-details-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/50 shrink-0"
                    title="View Architectural Details"
                  >
                    <Maximize2 className="w-4 h-4 text-cyan-400" />
                  </button>
                </div>

                {/* Description & CV Highlights */}
                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Key CV Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics Badges */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                          <p className="text-xs font-bold text-white truncate font-mono">{m.value}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack pills */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="p-6 bg-slate-950/60 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  id={`card-learn-more-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Architecture Deep-Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      id={`project-live-${project.id}`}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-cyan-500/20 flex items-center gap-1.5 transition-all"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      id={`project-github-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
