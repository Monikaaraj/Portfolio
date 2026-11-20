import React from 'react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { Trophy, Award, Star, Compass, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';

export const Achievements: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#a855f7', '#38bdf8', '#fbbf24', '#34d399']
    });
  };

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'award':
        return <Trophy className="w-6 h-6 text-amber-500" />;
      case 'academic':
        return <Star className="w-6 h-6 text-purple-500" />;
      case 'hackathon':
        return <Compass className="w-6 h-6 text-cyan-500" />;
      default:
        return <Award className="w-6 h-6 text-emerald-500" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden transition-colors border-t border-slate-200 dark:border-slate-800/60 dark:bg-[#07090f]/60 bg-slate-50/60 backdrop-blur-[2px]">
      <div className={`absolute top-1/2 left-10 w-80 h-80 blur-[120px] rounded-full pointer-events-none -z-10 ${
        isDark ? 'bg-amber-500/5' : 'bg-amber-200/30'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-purple-500 to-cyan-500 dark:from-amber-300 dark:via-purple-300 dark:to-cyan-300">Achievements</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-base">
            Verified competitive awards, high academic standing, and national hackathon participation.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={idx === 0 ? triggerConfetti : undefined}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 group flex flex-col justify-between shadow-md hover:-translate-y-1 ${
                isDark
                  ? 'bg-gradient-to-b from-[#0f1322] to-[#0a0d18] border-slate-800/90 hover:border-amber-500/30 shadow-black/20 hover:shadow-amber-950/20'
                  : 'bg-white border-slate-200 hover:border-amber-300 shadow-slate-200/80 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className={`p-3 rounded-xl border group-hover:scale-105 transition-transform ${
                    isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    {getAchievementIcon(item.type)}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    isDark
                      ? 'bg-slate-900/90 text-amber-300 border-amber-500/30'
                      : 'bg-amber-50 text-amber-800 border-amber-200 font-bold'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title & Event */}
                <h3 className={`text-xl font-bold transition-colors mb-1 ${
                  isDark ? 'text-white group-hover:text-amber-200' : 'text-slate-900 group-hover:text-amber-700'
                }`}>
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-1 font-semibold">
                  {item.event}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-4">
                  {item.organization}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Info */}
              <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs ${
                isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-100 text-slate-500'
              }`}>
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Milestone</span>
                </span>
                <span className="font-mono text-slate-500 dark:text-slate-400">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
