import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education Timeline
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Solid academic grounding in computer science principles, software engineering methodologies, and algorithmic problem solving.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {EDUCATION_LIST.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12 pl-12 sm:pl-0`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 transition-all shadow-xl">
                      {/* Period & Score Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                          <Calendar className="w-3 h-3" />
                          <span>{item.period}</span>
                        </span>

                        {item.score && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                            <Award className="w-3.5 h-3.5" />
                            <span>{item.score}</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.institution}
                      </h3>

                      <h4 className="text-sm font-semibold text-slate-300 mb-2">
                        {item.degree}
                      </h4>

                      <p className="text-xs text-slate-400 flex items-center gap-1 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.location}</span>
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.details}
                      </p>

                      {/* Coursework if available */}
                      {item.courses && item.courses.length > 0 && (
                        <div className="pt-3 border-t border-slate-800/80">
                          <p className="text-[11px] font-mono text-slate-400 mb-2 flex items-center gap-1">
                            <BookOpen className="w-3 h-3 text-cyan-400" />
                            <span>Core Engineering Coursework</span>
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.courses.map((course) => (
                              <span
                                key={course}
                                className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty spacer for the other side on desktop */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
