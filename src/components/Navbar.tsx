import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#08090d]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-md shadow-slate-200/50 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="group flex items-center gap-2.5 font-bold text-lg tracking-tight"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-purple-600/30">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                isDark ? 'bg-[#0b0f19]' : 'bg-white'
              }`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-extrabold text-sm font-mono">
                  M
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-base leading-tight transition-colors ${
                isDark ? 'text-white group-hover:text-purple-300' : 'text-slate-900 group-hover:text-purple-600'
              }`}>
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-cyan-500 dark:text-cyan-400 font-mono tracking-wider">
                CSE (AIML)
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-1 xl:gap-2 p-1.5 rounded-full border backdrop-blur-md transition-colors ${
            isDark
              ? 'bg-slate-900/70 border-slate-800/80'
              : 'bg-slate-100/80 border-slate-200 shadow-inner'
          }`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-sm shadow-purple-500/20'
                      : isDark
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons: Resume + Attractive Light/Dark Mode Toggle Beside It */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white transition-all shadow-md shadow-purple-600/25 hover:shadow-cyan-500/25 hover:scale-[1.02]"
              title="Preview / Download Resume"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Attractive Theme Mode Toggle Switch directly beside the button */}
            <div className="pl-1 border-l border-slate-300 dark:border-slate-800">
              <ThemeToggle showLabel={false} />
            </div>
          </div>

          {/* Mobile Menu & Theme Toggle Area */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Compact Mode Toggle on Mobile */}
            <ThemeToggle size="sm" />

            <button
              onClick={onOpenResumeModal}
              className="p-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs flex items-center shadow-sm"
              title="Resume info"
            >
              <FileDown className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl border focus:outline-none transition-colors ${
                isDark
                  ? 'bg-slate-900 text-slate-300 hover:text-white border-slate-800'
                  : 'bg-white text-slate-700 hover:text-slate-900 border-slate-200 shadow-sm'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className={`lg:hidden mt-3 p-4 rounded-2xl border shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200 ${
            isDark
              ? 'bg-[#0f1322] border-slate-800 text-slate-100'
              : 'bg-white/95 border-slate-200 text-slate-800'
          }`}>
            <div className="flex flex-col space-y-2">
              {/* Mobile theme toggle row */}
              <div className={`flex items-center justify-between pb-3 mb-1 border-b ${
                isDark ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Theme Mode
                </span>
                <ThemeToggle showLabel={true} />
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-left transition-colors ${
                      isActive
                        ? 'bg-purple-600/20 text-purple-600 dark:text-purple-300 border border-purple-500/30'
                        : isDark
                          ? 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-purple-400" />}
                  </button>
                );
              })}

              <div className={`pt-2 border-t flex flex-col gap-2 ${
                isDark ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    if (onOpenResumeModal) onOpenResumeModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm shadow-md"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Resume / CV</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
