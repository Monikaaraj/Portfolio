import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2, Copy, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';

interface ContactProps {
  onOpenPlaceholderGuide?: (field: string) => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) errs.message = 'Please write a message';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate sending, trigger mailto fallback, and celebrate
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']
      });

      // Construct mailto link
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open mailto
      window.location.href = mailtoUrl;
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden transition-colors border-t border-slate-200 dark:border-slate-800/60">
      {/* Background Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-[150px] rounded-full pointer-events-none -z-10 ${
        isDark ? 'bg-gradient-to-tr from-purple-600/10 to-cyan-600/10' : 'bg-gradient-to-tr from-purple-200/30 to-cyan-200/30'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400">Connect</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-base">
            I am actively seeking software development and AI engineering opportunities, internships, and collaborative open-source projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Verified Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 shadow-md hover:-translate-y-0.5 ${
              isDark ? 'bg-[#0e1220] border-slate-800/90 hover:border-purple-500/30' : 'bg-white border-slate-200 hover:border-purple-300 shadow-slate-200/80'
            }`}>
              <div className="flex items-start justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 group/mail"
                >
                  <div className={`p-3 rounded-xl border transition-colors ${
                    isDark ? 'bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover/mail:bg-purple-500/20' : 'bg-purple-50 border-purple-200 text-purple-600 group-hover/mail:bg-purple-100'
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Email Address</span>
                    <span className={`text-sm font-semibold break-all group-hover/mail:underline transition-colors ${
                      isDark ? 'text-white group-hover/mail:text-purple-300' : 'text-slate-900 group-hover/mail:text-purple-700'
                    }`}>
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className={`p-2 rounded-lg border transition-colors shrink-0 ${
                    isDark
                      ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                  }`}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-2 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Copied {PERSONAL_INFO.email} to clipboard!</span>
                </div>
              )}
            </div>

            {/* Location Card */}
            <div className={`p-5 rounded-2xl border transition-colors shadow-md ${
              isDark ? 'bg-[#0e1220] border-slate-800/90' : 'bg-white border-slate-200 shadow-slate-200/80'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl border ${
                  isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-600'
                }`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Primary Location</span>
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {PERSONAL_INFO.location}
                  </span>
                  <span className="text-[11px] text-slate-500 block">Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 shadow-md hover:-translate-y-0.5 flex items-center justify-between gap-3 ${
              isDark ? 'bg-[#0e1220] border-slate-800/90 hover:border-blue-500/30' : 'bg-white border-slate-200 hover:border-blue-300 shadow-slate-200/80'
            }`}>
              <div className="flex items-center gap-3 overflow-hidden">
                <div className={`p-3 rounded-xl border shrink-0 ${
                  isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                }`}>
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Professional Network</span>
                  <span className={`text-sm font-semibold truncate block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Monika C R on LinkedIn
                  </span>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all shrink-0 ${
                  isDark
                    ? 'bg-blue-950/40 hover:bg-blue-900/60 text-blue-300 border-blue-500/40'
                    : 'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200 shadow-sm'
                }`}
              >
                <span>Connect</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* GitHub Card */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 shadow-md hover:-translate-y-0.5 flex items-center justify-between gap-3 ${
              isDark ? 'bg-[#0e1220] border-slate-800/90 hover:border-purple-500/30' : 'bg-white border-slate-200 hover:border-purple-300 shadow-slate-200/80'
            }`}>
              <div className="flex items-center gap-3 overflow-hidden">
                <div className={`p-3 rounded-xl border shrink-0 ${
                  isDark ? 'bg-slate-800 border-slate-700 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-600'
                }`}>
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Code Repositories</span>
                  <span className={`text-sm font-semibold truncate block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    github.com/Monikaaraj
                  </span>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all shrink-0 ${
                  isDark
                    ? 'bg-purple-950/40 hover:bg-purple-900/60 text-purple-300 border-purple-500/40'
                    : 'bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200 shadow-sm'
                }`}
              >
                <span>Follow</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border shadow-xl transition-colors ${
              isDark
                ? 'bg-gradient-to-b from-[#0f1322] to-[#0a0d18] border-slate-800/90'
                : 'bg-white border-slate-200 shadow-slate-200/70'
            }`}>
              <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill in the details below to dispatch an inquiry or start a collaboration discussion. Delivered directly to Monika's inbox.
              </p>

              {submitted ? (
                <div className={`p-6 rounded-xl border text-center space-y-3 ${
                  isDark ? 'bg-emerald-950/30 border-emerald-500/30' : 'bg-emerald-50 border-emerald-200'
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto ${
                    isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-100 text-emerald-600'
                  }`}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Message Dispatched!</h4>
                  <p className={`text-xs max-w-md mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Thank you, <strong className={isDark ? 'text-white' : 'text-slate-900'}>{formData.name}</strong>. Your default email client has been launched with your message prepared for <strong className="text-cyan-500">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline pt-2 font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Aditi Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.name 
                            ? 'border-rose-500' 
                            : isDark 
                              ? 'bg-slate-900/90 border-slate-800 text-white focus:border-cyan-500/50' 
                              : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. aditi@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.email 
                            ? 'border-rose-500' 
                            : isDark 
                              ? 'bg-slate-900/90 border-slate-800 text-white focus:border-cyan-500/50' 
                              : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Software Developer Internship / Project Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.subject 
                          ? 'border-rose-500' 
                          : isDark 
                            ? 'bg-slate-900/90 border-slate-800 text-white focus:border-cyan-500/50' 
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500'
                      }`}
                    />
                    {errors.subject && <p className="text-[11px] text-rose-500 mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Discuss an internship role, project collaboration, or interview request..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.message 
                          ? 'border-rose-500' 
                          : isDark 
                            ? 'bg-slate-900/90 border-slate-800 text-white focus:border-cyan-500/50' 
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/25 hover:shadow-cyan-500/25 hover:scale-[1.01] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Launching Email Client...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send to {PERSONAL_INFO.email}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
