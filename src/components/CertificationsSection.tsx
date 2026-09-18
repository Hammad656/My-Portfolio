import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, ExternalLink, Cloud, Database, X, Sparkles } from 'lucide-react';
import { CERTIFICATIONS_LIST, Certification } from '../data/portfolioData';

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Certifications
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Industry-recognized credentials validating advanced database optimization and foundational cloud computing competencies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS_LIST.map((cert, idx) => {
            const isMySQL = cert.id.includes('mysql');

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-md ${
                        isMySQL
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-amber-500/10'
                          : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 shadow-cyan-500/10'
                      }`}>
                        {isMySQL ? (
                          <Database className="w-6 h-6" />
                        ) : (
                          <Cloud className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400">
                          {cert.issuer}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {cert.name}
                        </h3>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{cert.year}</span>
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                      Verified Competencies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    {cert.verifyText}
                  </span>

                  <button
                    id={`cert-details-btn-${cert.id}`}
                    onClick={() => setSelectedCert(cert)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <span>View Breakdown</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal for Certification Details */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono">{selectedCert.issuer}</span>
                    <h3 className="text-xl font-bold text-white">{selectedCert.name}</h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {selectedCert.description}
                </p>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                    Verified Curricular Topics
                  </h4>
                  <ul className="space-y-2">
                    {selectedCert.skillsCovered.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-end">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
