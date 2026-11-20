import React from 'react';
import { X, Copy, CheckCircle2, Info, FileCode2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface PlaceholderModalProps {
  field: string | null;
  onClose: () => void;
}

export const PlaceholderModal: React.FC<PlaceholderModalProps> = ({ field, onClose }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [copied, setCopied] = React.useState(false);

  if (!field) return null;

  const getDetails = (f: string) => {
    switch (f.toLowerCase()) {
      case 'github':
        return {
          title: 'GitHub Profile Placeholder',
          placeholder: PERSONAL_INFO.github,
          fileLocation: 'src/data/portfolioData.ts',
          variable: 'github',
          instructions: 'Replace "[ADD MY GITHUB URL]" with your real GitHub profile link (e.g. "https://github.com/monikacr").'
        };
      case 'linkedin':
        return {
          title: 'LinkedIn Profile Placeholder',
          placeholder: PERSONAL_INFO.linkedin,
          fileLocation: 'src/data/portfolioData.ts',
          variable: 'linkedin',
          instructions: 'Replace "[ADD MY LINKEDIN URL]" with your real LinkedIn profile URL (e.g. "https://linkedin.com/in/monika-cr").'
        };
      case 'email':
        return {
          title: 'Email Placeholder',
          placeholder: PERSONAL_INFO.email,
          fileLocation: 'src/data/portfolioData.ts',
          variable: 'email',
          instructions: 'Replace "[ADD MY EMAIL]" with your active email address (e.g. "monikacr@example.com"). The contact form will automatically dispatch messages directly to it!'
        };
      case 'profile photograph':
        return {
          title: 'Profile Photograph Upload',
          placeholder: '[ADD MY PHOTO]',
          fileLocation: 'Click the "Upload Photo" button in the hero section or navbar!',
          variable: 'photoUrl',
          instructions: 'You can now directly click "Upload Photo" to select any image from your device and preview it instantly!'
        };
      case 'phone':
        return {
          title: 'Phone Number Placeholder',
          placeholder: PERSONAL_INFO.phone,
          fileLocation: 'src/data/portfolioData.ts',
          variable: 'phone',
          instructions: 'Replace "[ADD MY PHONE NUMBER]" with your contact number.'
        };
      default:
        return {
          title: `${f} Placeholder`,
          placeholder: `[ADD ${f.toUpperCase()}]`,
          fileLocation: 'src/data/portfolioData.ts',
          variable: 'Custom link',
          instructions: `Update this URL in src/data/portfolioData.ts when your public link is live.`
        };
    }
  };

  const info = getDetails(field);

  const handleCopy = () => {
    navigator.clipboard.writeText(info.placeholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose} />

      <div className={`relative w-full max-w-lg rounded-2xl border p-6 shadow-2xl z-10 transition-colors ${
        isDark ? 'bg-[#0f121e] border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        <div className={`flex items-center justify-between pb-4 border-b ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-cyan-500" />
            <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{info.title}</h3>
          </div>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${
              isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="py-5 space-y-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            As requested by Monika C R, personal links and accounts use strict, genuine placeholders rather than fabricated URLs.
          </p>

          <div className={`p-3 rounded-xl border flex items-center justify-between ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <span className="font-mono text-sm text-cyan-600 dark:text-cyan-300 font-semibold">{info.placeholder}</span>
            <button
              onClick={handleCopy}
              className={`p-1.5 rounded flex items-center gap-1 text-xs border ${
                isDark ? 'bg-slate-800 text-slate-300 hover:text-white border-slate-700' : 'bg-white text-slate-700 hover:text-slate-900 border-slate-300 shadow-sm'
              }`}
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className={`p-4 rounded-xl border space-y-2 ${
            isDark ? 'bg-purple-950/20 border-purple-500/30' : 'bg-purple-50 border-purple-200'
          }`}>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-700 dark:text-purple-300">
              <FileCode2 className="w-4 h-4" />
              <span>How to update in 1 minute:</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Open <code className={`px-1.5 py-0.5 rounded font-mono text-[11px] ${
                isDark ? 'bg-slate-900 text-purple-200' : 'bg-white text-purple-700 border border-purple-200'
              }`}>{info.fileLocation}</code>, locate the <code className="text-cyan-600 dark:text-cyan-300 font-mono text-[11px] font-semibold">{info.variable}</code> field, and insert your genuine URL.
            </p>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors border ${
              isDark ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
            }`}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
