import React from 'react';
import { ACTIVITIES_DATA } from '../data/portfolioData';
import { Users, Compass, Code, HeartHandshake, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Activities: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Leadership':
        return <Shield className="w-5 h-5 text-purple-500" />;
      case 'Hackathon & Innovation':
        return <Compass className="w-5 h-5 text-cyan-500" />;
      case 'Technical':
        return <Code className="w-5 h-5 text-blue-500" />;
      case 'Community':
        return <HeartHandshake className="w-5 h-5 text-pink-500" />;
      default:
        return <Users className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="activities" className="py-24 relative overflow-hidden transition-colors border-t border-slate-200 dark:border-slate-800/60 dark:bg-[#07090f]/60 bg-slate-50/60 backdrop-blur-[2px]">
      <div className={`absolute bottom-10 left-1/3 w-80 h-80 blur-[120px] rounded-full pointer-events-none -z-10 ${
        isDark ? 'bg-purple-600/5' : 'bg-purple-200/30'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Extracurricular & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400">Activities</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-base">
            Demonstrated initiatives across student leadership, competitive hackathons, collaborative technical building, and community volunteering.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITIES_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 group flex flex-col justify-between shadow-md hover:-translate-y-1 ${
                isDark
                  ? 'bg-gradient-to-b from-[#0f1322] to-[#0a0d18] border-slate-800/90 hover:border-slate-700 shadow-black/20'
                  : 'bg-white border-slate-200 hover:border-purple-300 shadow-slate-200/80 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl border group-hover:scale-105 transition-transform ${
                    isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                    isDark
                      ? 'bg-slate-900 text-slate-300 border-slate-800'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {item.category}
                  </span>
                </div>

                {/* Title & Role */}
                <h3 className={`text-lg font-bold transition-colors mb-1 ${
                  isDark ? 'text-white group-hover:text-purple-300' : 'text-slate-900 group-hover:text-purple-600'
                }`}>
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-3 font-semibold">
                  {item.role}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className={`pt-4 border-t ${isDark ? 'border-slate-800/70' : 'border-slate-100'}`}>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-2 py-0.5 rounded text-[10px] font-medium border ${
                        isDark
                          ? 'bg-slate-900/80 text-slate-400 border-slate-800'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
