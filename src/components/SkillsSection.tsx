import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Wrench,
  Search,
  CheckCircle2,
  Copy,
  Check,
  Layout,
  Server,
  Database,
  Bot,
  Cloud,
  Cpu,
  Sparkles
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsSectionProps {
  onCopyText: (text: string, label: string) => void;
}

export function SkillsSection({ onCopyText }: SkillsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedAll, setCopiedAll] = useState(false);

  // Icon mapping helper
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return Layout;
      case 'Server': return Server;
      case 'Database': return Database;
      case 'Bot': return Bot;
      case 'Cloud': return Cloud;
      case 'Cpu': return Cpu;
      default: return Wrench;
    }
  };

  const categories = useMemo(() => {
    return ['All', ...SKILL_CATEGORIES.map((c) => c.name)];
  }, []);

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => {
      // Filter by category tab
      if (selectedCategory !== 'All' && cat.name !== selectedCategory) {
        return null;
      }
      // Filter by search query
      const skills = cat.skills.filter((s) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          s.name.toLowerCase().includes(q) ||
          s.experience.toLowerCase().includes(q) ||
          (s.tag && s.tag.toLowerCase().includes(q))
        );
      });

      if (skills.length === 0) return null;

      return {
        ...cat,
        skills,
      };
    }).filter(Boolean);
  }, [selectedCategory, searchQuery]);

  const handleCopyTechStack = () => {
    const list = SKILL_CATEGORIES.map(
      (cat) => `${cat.name}:\n` + cat.skills.map((s) => `  - ${s.name} (${s.experience})`).join('\n')
    ).join('\n\n');

    navigator.clipboard.writeText(list);
    setCopiedAll(true);
    onCopyText(list, "Technical skills list copied to clipboard");
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            A comprehensive overview of programming languages, frameworks, cloud tools, databases, and machine learning concepts from Hammad's CV.
          </p>

          {/* Controls Bar: Search + Copy Button */}
          <div className="mt-8 w-full max-w-2xl flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="skill-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g., React, Next.js, MySQL, AWS, AI)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              id="copy-tech-stack-btn"
              onClick={handleCopyTechStack}
              className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition-colors"
            >
              {copiedAll ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied All Skills</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span>Copy Tech Stack</span>
                </>
              )}
            </button>
          </div>

          {/* Category Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`skill-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            if (!category) return null;
            const IconComponent = getCategoryIcon(category.iconName);

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-cyan-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3.5">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                            {skill.name}
                            {skill.tag && (
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                {skill.tag}
                              </span>
                            )}
                          </span>
                          <span className="text-slate-400 text-[11px] font-mono">
                            {skill.experience}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
