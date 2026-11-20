import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 relative transition-colors ${
      isDark ? 'bg-[#05060a] border-slate-800/80' : 'bg-slate-100 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
          isDark ? 'border-slate-800/60' : 'border-slate-200'
        }`}>
          {/* Left: Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className={`text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
              CSE (Artificial Intelligence & Machine Learning) • JSSATE Bengaluru
            </span>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800'
                  : 'bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border-slate-200 shadow-sm'
              }`}
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-purple-500" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800'
                  : 'bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border-slate-200 shadow-sm'
              }`}
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-500" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800'
                  : 'bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border-slate-200 shadow-sm'
              }`}
              title={`Send Email to ${PERSONAL_INFO.email}`}
            >
              <Mail className="w-4 h-4 text-cyan-500" />
            </a>
          </div>

          {/* Right: Back to Top Button */}
          <button
            onClick={scrollToTop}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold transition-all hover:-translate-y-0.5 ${
              isDark
                ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800'
                : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-200 shadow-sm'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-cyan-500" />
          </button>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center">
          <div>
            Designed and built by <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>Monika C R</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with React, Tailwind CSS, TypeScript & Multi-Theme Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
