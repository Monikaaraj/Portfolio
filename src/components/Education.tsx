import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Education: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="education" className="py-24 relative overflow-hidden transition-colors border-t border-slate-200 dark:border-slate-800/60">
      <div className={`absolute top-1/2 right-10 w-96 h-96 blur-[120px] rounded-full pointer-events-none -z-10 ${
        isDark ? 'bg-blue-600/5' : 'bg-blue-200/30'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400">Qualifications</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-base">
            Consistent top-percentile academic standing from secondary education to specialized AI & ML engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical central/left line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 -translate-x-1/2 hidden sm:block opacity-40" />

          <div className="space-y-8">
            {EDUCATION_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Circle for timeline */}
                  <div className={`hidden sm:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-cyan-500 items-center justify-center z-10 shadow-lg shadow-cyan-500/30 ${
                    isDark ? 'bg-[#0b0f19]' : 'bg-white'
                  }`}>
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Timeline Card */}
                  <div className="w-full sm:w-1/2 sm:px-6">
                    <div className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 group shadow-md hover:-translate-y-1 ${
                      isDark
                        ? 'bg-[#0e1220] border-slate-800/90 hover:border-slate-700 shadow-black/20'
                        : 'bg-white border-slate-200 hover:border-cyan-300 shadow-slate-200/80 hover:shadow-xl'
                    }`}>
                      {/* Status & Period */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                          isDark
                            ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                            : 'bg-purple-50 text-purple-700 border-purple-200'
                        }`}>
                          <Calendar className="w-3 h-3" />
                          <span>{item.period}</span>
                        </span>
                        
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                          item.status === 'In Progress'
                            ? isDark
                              ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                              : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : isDark
                              ? 'bg-slate-800 text-slate-400 border-slate-700'
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}>
                          {item.status}
                        </span>
                      </div>

                      {/* Institution & Degree */}
                      <h3 className={`text-xl font-bold transition-colors mb-1 ${
                        isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-600'
                      }`}>
                        {item.institution}
                      </h3>
                      <div className={`text-sm font-medium mb-0.5 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                        {item.degree}
                      </div>
                      {item.field && (
                        <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-2 font-semibold">
                          {item.field}
                        </div>
                      )}

                      {item.boardOrAffiliation && (
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                          Affiliated with: <span className="text-slate-700 dark:text-slate-300 font-medium">{item.boardOrAffiliation}</span>
                        </div>
                      )}

                      {/* Score Highlight Box */}
                      <div className={`p-3 rounded-xl border flex items-center justify-between mb-4 ${
                        isDark
                          ? 'bg-slate-900/90 border-slate-800'
                          : 'bg-slate-50 border-slate-200 shadow-inner'
                      }`}>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-amber-500" />
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.scoreType}</span>
                        </div>
                        <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400 font-mono">
                          {item.score}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                        {item.highlights.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Location footnote */}
                      <div className={`mt-4 pt-3 border-t flex items-center gap-1.5 text-[11px] ${
                        isDark ? 'border-slate-800/80 text-slate-500' : 'border-slate-100 text-slate-500'
                      }`}>
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
