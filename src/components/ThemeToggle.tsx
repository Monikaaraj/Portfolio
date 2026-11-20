import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  showLabel = false,
  size = 'md' 
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleToggle = () => {
    toggleTheme();
    // Tiny subtle burst of warm/cool confetti on toggle for delightful polish
    confetti({
      particleCount: 15,
      spread: 40,
      origin: { y: 0.1, x: 0.85 },
      colors: isDark ? ['#facc15', '#f59e0b', '#38bdf8'] : ['#8b5cf6', '#3b82f6', '#06b6d4'],
      scalar: 0.7
    });
  };

  if (size === 'sm') {
    return (
      <button
        onClick={handleToggle}
        className={`relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${
          isDark
            ? 'bg-slate-900/90 text-amber-300 hover:text-amber-200 border border-slate-700/80 shadow-md shadow-purple-950/30'
            : 'bg-white/95 text-slate-800 hover:text-amber-600 border border-slate-200 shadow-md shadow-slate-200/60'
        } ${className}`}
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <span className="sr-only">Toggle theme</span>
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-300" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-indigo-600" />
        )}
      </button>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <button
        onClick={handleToggle}
        className={`group relative flex items-center justify-between w-18 h-9 px-1 rounded-full cursor-pointer transition-all duration-500 select-none shadow-md ${
          isDark
            ? 'bg-gradient-to-r from-[#101426] via-[#1a1f38] to-[#12162a] border border-purple-500/40 hover:border-purple-400 shadow-purple-950/40'
            : 'bg-gradient-to-r from-sky-400 via-blue-400 to-amber-200 border border-sky-300 hover:border-amber-400 shadow-sky-500/20'
        }`}
        title={isDark ? 'Switch to Light Mode (Executive Clean)' : 'Switch to Dark Mode (Cyber Midnight)'}
        aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {/* Sky Background Elements */}
        {isDark ? (
          /* Dark Sky: Glowing Stars & Nebula */
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            {/* Star 1 */}
            <span className="absolute top-2 left-2.5 w-1 h-1 bg-purple-200 rounded-full animate-ping opacity-75" />
            <span className="absolute top-2 left-2.5 w-1 h-1 bg-white rounded-full" />
            {/* Star 2 */}
            <span className="absolute bottom-2 left-5 w-0.5 h-0.5 bg-cyan-200 rounded-full" />
            {/* Star 3 */}
            <span className="absolute top-3 left-7 w-1 h-1 bg-amber-200 rounded-full opacity-60" />
          </div>
        ) : (
          /* Light Sky: Fluffy Cloud Accents */
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <span className="absolute bottom-1 right-2.5 w-4 h-2 bg-white/70 rounded-full blur-[0.5px]" />
            <span className="absolute bottom-2 right-4 w-3 h-2 bg-white/80 rounded-full blur-[0.5px]" />
          </div>
        )}

        {/* Sliding Knob (Sun or Moon) */}
        <div
          className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 transform shadow-md ${
            isDark
              ? 'translate-x-9 bg-gradient-to-tr from-indigo-700 via-purple-600 to-indigo-500 border border-purple-300/40 shadow-purple-900/60'
              : 'translate-x-0 bg-gradient-to-tr from-amber-400 to-yellow-300 border border-yellow-200 shadow-amber-500/40'
          }`}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-amber-200 drop-shadow-[0_0_4px_rgba(253,224,71,0.5)] -rotate-12 transition-transform duration-300 group-hover:rotate-0" />
          ) : (
            <Sun className="w-4 h-4 text-amber-900 transition-transform duration-500 rotate-0 group-hover:rotate-90" />
          )}
        </div>

        {/* Opposite Inactive Icon inside slider */}
        <div className={`text-[10px] font-mono px-1.5 transition-opacity duration-300 ${isDark ? 'text-purple-300/70 -translate-x-1' : 'text-slate-800/80 translate-x-1'}`}>
          {isDark ? (
            <Sparkles className="w-3.5 h-3.5 text-purple-300/70" />
          ) : (
            <span className="text-[10px] font-bold text-amber-900/80">DAY</span>
          )}
        </div>
      </button>

      {showLabel && (
        <span className={`text-xs font-semibold select-none hidden xl:inline-block ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </div>
  );
};
