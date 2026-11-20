import React from 'react';
import { X, FileDown, Printer, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, PROJECTS_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className={`relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border shadow-2xl z-10 flex flex-col transition-colors ${
        isDark
          ? 'bg-[#0f121e] border-slate-700 text-slate-100'
          : 'bg-white border-slate-200 text-slate-800'
      }`}>
        {/* Sticky Controls Header */}
        <div className={`sticky top-0 z-20 flex items-center justify-between p-4 sm:p-5 backdrop-blur-md border-b ${
          isDark ? 'bg-[#0f121e]/95 border-slate-800' : 'bg-white/95 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <FileDown className="w-5 h-5 text-cyan-500" />
            <h3 className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Resume Profile — {PERSONAL_INFO.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg transition-colors ${
                isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Preview Sheet */}
        <div className={`p-6 sm:p-10 space-y-8 ${
          isDark ? 'bg-slate-950/70 text-slate-200' : 'bg-white text-slate-800'
        }`}>
          {/* Header */}
          <div className={`border-b pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 ${
            isDark ? 'border-slate-800' : 'border-slate-200'
          }`}>
            <div>
              <h1 className={`text-3xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 font-mono mt-1 font-semibold">{PERSONAL_INFO.title}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2 justify-center sm:justify-start">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {PERSONAL_INFO.location}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {PERSONAL_INFO.email}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {PERSONAL_INFO.phone}</span>
              </div>
            </div>

            <div className={`p-3 rounded-xl border text-center ${
              isDark ? 'bg-purple-950/30 border-purple-500/30' : 'bg-purple-50 border-purple-200 shadow-sm'
            }`}>
              <div className="text-xs text-purple-700 dark:text-purple-300 font-semibold">Engineering CGPA</div>
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 dark:from-purple-400 dark:to-cyan-400 font-mono">
                9.6 / 10
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">JSSATE Bengaluru (VTU)</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className={`text-xs font-bold uppercase tracking-wider mb-2 border-b pb-1 ${
              isDark ? 'text-purple-400 border-slate-800/80' : 'text-purple-700 border-slate-200'
            }`}>
              Professional Summary
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {PERSONAL_INFO.aboutIntro}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className={`text-xs font-bold uppercase tracking-wider mb-3 border-b pb-1 ${
              isDark ? 'text-cyan-400 border-slate-800/80' : 'text-cyan-700 border-slate-200'
            }`}>
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs sm:text-sm">
                  <div>
                    <div className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{edu.institution}</div>
                    <div className={isDark ? 'text-slate-300' : 'text-slate-700'}>{edu.degree} {edu.field && `(${edu.field})`}</div>
                    <div className="text-slate-400 text-xs">{edu.boardOrAffiliation}</div>
                  </div>
                  <div className="sm:text-right">
                    <span className="font-mono font-bold text-cyan-600 dark:text-cyan-300">{edu.score}</span>
                    <div className="text-xs text-slate-400">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Projects */}
          <div>
            <h2 className={`text-xs font-bold uppercase tracking-wider mb-3 border-b pb-1 ${
              isDark ? 'text-purple-400 border-slate-800/80' : 'text-purple-700 border-slate-200'
            }`}>
              Featured Projects (6)
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj, idx) => (
                <div key={idx} className={`p-3 rounded-xl border text-xs sm:text-sm ${
                  isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{proj.title} – {proj.subtitle}</span>
                    {proj.achievementBadge && (
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[10px] font-bold border border-amber-500/30">
                        {proj.achievementBadge}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mb-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{proj.shortDescription}</p>
                  <div className="flex flex-wrap gap-1 text-[10px] text-slate-500">
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">Tech:</span> {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h2 className={`text-xs font-bold uppercase tracking-wider mb-3 border-b pb-1 ${
              isDark ? 'text-cyan-400 border-slate-800/80' : 'text-cyan-700 border-slate-200'
            }`}>
              Technical Skillsets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className={`p-2.5 rounded-lg border ${
                  isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`font-semibold mb-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{cat.title}:</div>
                  <div className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                    {cat.skills.map(s => s.name).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className={`p-4 sm:p-5 border-t flex flex-wrap items-center justify-between gap-3 ${
          isDark ? 'bg-[#0a0d17] border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span>To link an existing static PDF, drop file into <code className="text-cyan-600 dark:text-cyan-300 font-mono">public/resume.pdf</code></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-xs shadow-md"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-xl border text-xs font-semibold ${
                isDark ? 'bg-slate-800 text-slate-300 hover:text-white border-slate-700' : 'bg-white text-slate-700 hover:text-slate-900 border-slate-300'
              }`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
