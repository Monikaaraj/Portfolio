import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, FileDown, MapPin, Award, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenResumeModal
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [taglineIndex, setTaglineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  const taglines = PERSONAL_INFO.taglines;

  useEffect(() => {
    const handleType = () => {
      const fullText = taglines[taglineIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === '') {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, taglineIndex, taglines, typingSpeed]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] blur-[140px] rounded-full pointer-events-none -z-10 ${
        isDark ? 'bg-gradient-to-tr from-purple-600/15 via-blue-600/10 to-cyan-500/10' : 'bg-gradient-to-tr from-purple-200/40 via-blue-200/30 to-cyan-200/30'
      }`} />
      <div className={`absolute top-1/3 left-10 w-80 h-80 blur-[100px] rounded-full pointer-events-none -z-10 ${
        isDark ? 'bg-purple-900/15' : 'bg-purple-200/40'
      }`} />
      <div className={`absolute bottom-10 right-10 w-96 h-96 blur-[110px] rounded-full pointer-events-none -z-10 ${
        isDark ? 'bg-cyan-900/15' : 'bg-cyan-200/40'
      }`} />

      {/* Subtle Dot Grid */}
      <div className={`absolute inset-0 bg-[size:28px_28px] pointer-events-none -z-10 ${
        isDark
          ? 'bg-[radial-gradient(#2d374825_1px,transparent_1px)]'
          : 'bg-[radial-gradient(#cbd5e140_1px,transparent_1px)]'
      }`} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-start text-left">
          {/* Status & Location Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium backdrop-blur-md border ${
              isDark
                ? 'bg-slate-900/90 border-purple-500/30 text-purple-300'
                : 'bg-white border-purple-200 text-purple-700 shadow-sm'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to Software & AI Internships</span>
            </div>

            <div className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border ${
              isDark
                ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                : 'bg-white border-slate-200 text-slate-700 shadow-sm'
            }`}>
              <MapPin className="w-3.5 h-3.5 text-cyan-500" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            <div className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border ${
              isDark
                ? 'bg-slate-900/80 border-slate-800 text-slate-400'
                : 'bg-white border-slate-200 text-slate-600 shadow-sm'
            }`}>
              <span>JSSATE Bengaluru (VTU)</span>
            </div>
          </div>

          {/* Main Greeting Heading */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400">
              {PERSONAL_INFO.name}
            </span>
            .
          </h1>

          {/* Animated Typing Subtitle */}
          <div className="h-10 sm:h-12 flex items-center mb-6">
            <span className={`text-xl sm:text-2xl md:text-3xl font-bold ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}>
              {currentText}
            </span>
            <span className="w-0.5 h-7 bg-cyan-500 ml-1.5 animate-pulse inline-block" />
          </div>

          {/* Short Description */}
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-10 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Exploring AI, building intelligent systems, and creating technology that makes a difference. Computer Science Engineering undergraduate specializing in Artificial Intelligence & Machine Learning at JSSATE Bengaluru (VTU).
          </p>

          {/* Academic Credential Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 w-full max-w-2xl">
            <div className={`p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${
              isDark
                ? 'bg-slate-900/60 border-slate-800/80 hover:border-cyan-500/30'
                : 'bg-white/95 border-slate-200 shadow-sm hover:shadow-md'
            }`}>
              <div className="flex items-center gap-2 text-cyan-500 dark:text-cyan-400 text-xs font-semibold mb-1">
                <Award className="w-4 h-4" />
                <span>Academic Standing</span>
              </div>
              <div className={`text-2xl font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                9.6 CGPA
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">B.E. CSE (AI & ML)</div>
            </div>

            <div className={`p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${
              isDark
                ? 'bg-slate-900/60 border-slate-800/80 hover:border-purple-500/30'
                : 'bg-white/95 border-slate-200 shadow-sm hover:shadow-md'
            }`}>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Pre-University</span>
              </div>
              <div className={`text-2xl font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>
                96.65%
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Narayana PU College</div>
            </div>

            <div className={`p-4 rounded-2xl border backdrop-blur-sm col-span-2 sm:col-span-1 transition-all duration-300 hover:-translate-y-0.5 ${
              isDark
                ? 'bg-slate-900/60 border-slate-800/80 hover:border-emerald-500/30'
                : 'bg-white/95 border-slate-200 shadow-sm hover:shadow-md'
            }`}>
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-1">
                <Terminal className="w-4 h-4" />
                <span>Key Recognition</span>
              </div>
              <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                3rd Prize
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Smart Ag Voice AI</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/30 hover:shadow-cyan-500/30 hover:scale-[1.02]"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenResumeModal}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all border shadow-sm ${
                isDark
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border-slate-700/80'
                  : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-300'
              }`}
            >
              <FileDown className="w-4 h-4 text-cyan-500" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social Links & Placeholders */}
          <div className={`flex items-center gap-4 pt-6 border-t w-full max-w-xl ${
            isDark ? 'border-slate-800/80' : 'border-slate-200'
          }`}>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold font-mono">
              Connect:
            </span>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold transition-all hover:-translate-y-0.5 ${
                isDark
                  ? 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border-slate-800 hover:border-purple-500/50'
                  : 'bg-white hover:bg-slate-50 text-slate-800 hover:text-purple-600 border-slate-200 shadow-sm'
              }`}
              title="Visit Monika's GitHub"
            >
              <GithubIcon className="w-4 h-4 text-purple-500" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold transition-all hover:-translate-y-0.5 ${
                isDark
                  ? 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border-slate-800 hover:border-blue-500/50'
                  : 'bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-600 border-slate-200 shadow-sm'
              }`}
              title="Connect on LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-500" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
