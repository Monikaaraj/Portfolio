import React, { useState } from 'react';
import type { Project } from '../data/portfolioData';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectIllustration } from './ProjectIllustrations';
import { ExternalLink, Eye, Award, Sparkles, ChevronRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onOpenPlaceholderGuide: (field: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject, onOpenPlaceholderGuide }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-ml' | 'blockchain' | 'robotics-iot' | 'assistive-tech'>('all');

  const filterButtons = [
    { label: 'All Projects (6)', value: 'all' },
    { label: 'AI & ML', value: 'ai-ml' },
    { label: 'Blockchain & Web3', value: 'blockchain' },
    { label: 'Robotics & IoT', value: 'robotics-iot' },
    { label: 'Assistive Tech', value: 'assistive-tech' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.categoryGroup === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden transition-colors">
      {/* Background ambient lighting */}
      <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] blur-[140px] rounded-full pointer-events-none -z-10 ${
        isDark ? 'bg-purple-900/10' : 'bg-purple-200/30'
      }`} />
      <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] blur-[140px] rounded-full pointer-events-none -z-10 ${
        isDark ? 'bg-cyan-900/10' : 'bg-cyan-200/30'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400">Engineering Projects</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base">
            From decentralized federated platforms and predictive financial analytics to assistive humanoid robotics and smart AR wearables.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setActiveFilter(btn.value as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === btn.value
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-600/25 scale-[1.02]'
                  : isDark
                    ? 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Project Grid - Showing ALL 6 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-md hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-[#0e1220] border-slate-800/90 hover:border-purple-500/40 shadow-black/30 hover:shadow-purple-950/20'
                  : 'bg-white border-slate-200 hover:border-purple-300 shadow-slate-200/80 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Visual Illustration */}
                <div className="relative">
                  <ProjectIllustration type={project.illustrationType} className="w-full h-48 sm:h-52" />

                  {/* Badges on Top of Illustration */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[85%]">
                    {project.achievementBadge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/90 text-amber-950 shadow-md backdrop-blur-md">
                        <Award className="w-3 h-3 text-amber-950" />
                        <span>{project.achievementBadge}</span>
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 text-slate-200 border border-white/10 backdrop-blur-sm">
                      {project.category.split('|')[0].trim()}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  {/* Category breadcrumb */}
                  <div className="text-[11px] font-medium text-cyan-600 dark:text-cyan-400 mb-1 tracking-wide">
                    {project.category}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className={`text-xl font-bold transition-colors tracking-tight ${
                    isDark ? 'text-white group-hover:text-purple-300' : 'text-slate-900 group-hover:text-purple-600'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-3">
                    {project.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Technology Tags (Top 4) */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono border ${
                          isDark
                            ? 'bg-slate-900 text-slate-300 border-slate-800'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer with Interactive Action Buttons */}
              <div className={`p-5 sm:p-6 pt-0 border-t mt-2 flex items-center justify-between gap-2 ${
                isDark ? 'border-slate-800/60' : 'border-slate-100'
              }`}>
                <button
                  onClick={() => onSelectProject(project)}
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all group/btn border ${
                    isDark
                      ? 'bg-purple-600/15 hover:bg-purple-600/25 text-purple-300 hover:text-white border-purple-500/30'
                      : 'bg-purple-50 hover:bg-purple-100 text-purple-700 hover:text-purple-900 border-purple-200'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5 text-purple-500" />
                  <span>View Details</span>
                  <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onOpenPlaceholderGuide(`GitHub Repo for ${project.title}`)}
                    className={`p-2 rounded-xl border transition-colors ${
                      isDark
                        ? 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border-slate-800'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border-slate-200'
                    }`}
                    title={`View GitHub Repo: [ADD MY GITHUB URL for ${project.title}]`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </button>

                  {project.demoUrl && (
                    <button
                      onClick={() => onOpenPlaceholderGuide(`Live Demo for ${project.title}`)}
                      className={`p-2 rounded-xl border transition-colors ${
                        isDark
                          ? 'bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border-slate-800'
                          : 'bg-slate-50 hover:bg-slate-100 text-cyan-600 hover:text-cyan-700 border-slate-200'
                      }`}
                      title={`Open Live Demo: [ADD DEMO URL for ${project.title}]`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Callout Banner */}
        <div className={`mt-14 p-6 rounded-2xl border text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isDark
            ? 'bg-gradient-to-r from-purple-950/30 via-slate-900/70 to-cyan-950/30 border-purple-500/20'
            : 'bg-gradient-to-r from-purple-50 via-white to-cyan-50 border-purple-200 shadow-sm'
        }`}>
          <div className="text-left">
            <h4 className={`text-sm font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <Sparkles className="w-4 h-4 text-cyan-500" />
              <span>Full Technical Blueprints & Source Implementations</span>
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Each project includes documented architectural modules, hardware pinouts, or data pipelines.
            </p>
          </div>
          <a
            href="#contact"
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap border transition-colors ${
              isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-cyan-300 border-slate-700'
                : 'bg-white hover:bg-slate-50 text-cyan-700 border-slate-300 shadow-sm'
            }`}
          >
            Request Code Walkthrough
          </a>
        </div>
      </div>
    </section>
  );
};
