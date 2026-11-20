import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Code2, 
  BrainCircuit, 
  Layers, 
  Blocks, 
  Database, 
  Wrench, 
  Search, 
  Sparkles, 
  CheckCircle
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Skills: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Blocks': return <Blocks className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  // Filter skills based on search query and category
  const filteredCategories = SKILL_CATEGORIES.map(category => {
    const matchesCategory = selectedCategory === 'all' || category.title === selectedCategory;
    
    if (!matchesCategory) return null;

    if (!searchQuery.trim()) {
      return category;
    }

    const filteredSkills = category.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredSkills.length === 0 && !category.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return null;
    }

    return {
      ...category,
      skills: filteredSkills.length > 0 ? filteredSkills : category.skills
    };
  }).filter(Boolean) as typeof SKILL_CATEGORIES;

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden transition-colors border-t border-slate-200 dark:border-slate-800/60 dark:bg-[#07090f]/60 bg-slate-50/60 backdrop-blur-[2px]">
      {/* Background radial highlight */}
      <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[130px] rounded-full pointer-events-none -z-10 ${
        isDark ? 'bg-blue-600/10' : 'bg-blue-200/40'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400">Skillset</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-base">
            Organized competencies across machine learning, frameworks, decentralized tech, and computer science foundations.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-md shadow-purple-600/25'
                  : isDark
                    ? 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              All Skills ({totalSkillsCount})
            </button>
            {SKILL_CATEGORIES.map(cat => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.title
                    ? 'bg-purple-600/20 text-purple-600 dark:text-purple-300 border border-purple-500/40 shadow-sm font-semibold'
                    : isDark
                      ? 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800/80'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. FastAPI, OpenCV)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-xl border text-sm placeholder-slate-400 focus:outline-none transition-colors ${
                isDark
                  ? 'bg-slate-900/90 border-slate-800 text-slate-200 focus:border-cyan-500/50'
                  : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-500 shadow-sm'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 group flex flex-col justify-between ${
                isDark
                  ? 'bg-gradient-to-b from-[#0f1322] to-[#0a0d18] border-slate-800/90 hover:border-slate-700/80 shadow-xl shadow-black/20'
                  : 'bg-white border-slate-200/90 hover:border-purple-300 shadow-md shadow-slate-200/60'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl border transition-all group-hover:scale-105 ${
                    isDark
                      ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                      : 'bg-purple-50 border-purple-200 text-purple-600'
                  }`}>
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold transition-colors ${
                      isDark ? 'text-white group-hover:text-purple-300' : 'text-slate-900 group-hover:text-purple-600'
                    }`}>
                      {cat.title}
                    </h3>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      {cat.skills.length} skills listed
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Badges / Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        skill.highlight
                          ? isDark
                            ? 'bg-purple-950/40 text-purple-200 border border-purple-500/40 hover:border-purple-400'
                            : 'bg-purple-50 text-purple-700 border border-purple-200 hover:border-purple-300 font-semibold'
                          : isDark
                            ? 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700'
                            : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200/70'
                      }`}
                    >
                      <CheckCircle className={`w-3 h-3 ${
                        skill.highlight 
                          ? isDark ? 'text-purple-400' : 'text-purple-600'
                          : isDark ? 'text-slate-500' : 'text-slate-400'
                      }`} />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer accent indicator */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono">Practical Project Experience</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Result Message */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 max-w-md mx-auto shadow-sm">
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">No matching skills found for "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline font-semibold"
            >
              Reset filter and view all skills
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
