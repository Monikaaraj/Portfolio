import React, { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { ProjectIllustration } from './ProjectIllustrations';
import { X, ExternalLink, Award, CheckCircle2, Clock, AlertCircle, Sparkles, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-md transition-opacity">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl z-10 flex flex-col transition-colors ${
        isDark
          ? 'bg-[#0f121e] border-slate-700/60 shadow-purple-950/40 text-slate-100'
          : 'bg-white border-slate-200 shadow-slate-300/80 text-slate-800'
      }`}>
        {/* Sticky Header with Title and Close Button */}
        <div className={`sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 backdrop-blur-md border-b ${
          isDark ? 'bg-[#0f121e]/95 border-slate-800' : 'bg-white/95 border-slate-200'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                isDark
                  ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                  : 'bg-purple-50 text-purple-700 border-purple-200'
              }`}>
                {project.category}
              </span>
              {project.achievementBadge && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  {project.achievementBadge}
                </span>
              )}
            </div>
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-colors ${
              isDark
                ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border-slate-700'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border-slate-200'
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6 flex-1">
          {/* Custom Visual Illustration */}
          <div className="w-full">
            <ProjectIllustration type={project.illustrationType} className="w-full h-52 sm:h-64 rounded-xl" />
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Project Overview & Objective
            </h3>
            <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {project.fullDescription}
            </p>
          </div>

          {/* Problem Statement if available */}
          {project.problemStatement && (
            <div className={`p-4 rounded-xl border ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <h4 className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-1">Problem Addressed</h4>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{project.problemStatement}</p>
            </div>
          )}

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Core Technical Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2.5 p-3 rounded-lg border text-sm ${
                    isDark
                      ? 'bg-slate-900/50 border-slate-800/80 text-slate-200'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Implemented vs Planned Split (Essential for Robot & AR Belt) */}
          {(project.implementedFeatures || project.plannedFeatures) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {project.implementedFeatures && (
                <div className={`p-4 rounded-xl border ${
                  isDark ? 'bg-emerald-950/20 border-emerald-500/30' : 'bg-emerald-50 border-emerald-200'
                }`}>
                  <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Implemented & Validated
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {project.implementedFeatures.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.plannedFeatures && (
                <div className={`p-4 rounded-xl border ${
                  isDark ? 'bg-indigo-950/20 border-indigo-500/30' : 'bg-indigo-50 border-indigo-200'
                }`}>
                  <h4 className="text-sm font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-indigo-500" /> Planned & Conceptual Roadmap
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {project.plannedFeatures.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Disclaimer / Note */}
          {project.disclaimer && (
            <div className={`flex items-start gap-3 p-3.5 rounded-xl border text-xs sm:text-sm leading-relaxed ${
              isDark
                ? 'bg-slate-900/70 border-amber-500/30 text-amber-200/90'
                : 'bg-amber-50 border-amber-300 text-amber-800'
            }`}>
              <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <span>{project.disclaimer}</span>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" /> Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-md text-xs font-mono border ${
                    isDark
                      ? 'bg-slate-800 text-slate-200 border-slate-700/80'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className={`p-5 sm:p-6 border-t flex flex-wrap items-center justify-between gap-4 ${
          isDark ? 'bg-[#0c0e18] border-slate-800/80' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Source code repository and live deployment endpoints:
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all border ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700'
                  : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm'
              }`}
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium text-sm transition-all shadow-md shadow-purple-600/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}

            <button
              onClick={onClose}
              className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-colors border ${
                isDark
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
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
