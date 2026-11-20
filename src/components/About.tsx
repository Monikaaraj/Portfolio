import React from 'react';
import { Sparkles, Brain, Cpu, ShieldCheck, Rocket, GraduationCap, MapPin, Target } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const pillars = [
    {
      icon: Brain,
      title: "Intelligent Systems & ML",
      description: "Developing predictive analytics, computer vision, and federated learning pipelines with PyTorch/Scikit-learn concepts."
    },
    {
      icon: ShieldCheck,
      title: "Decentralized & Privacy-First",
      description: "Exploring consent-driven architectures with Polygon smart contracts, IPFS storage, and privacy-preserving model training."
    },
    {
      icon: Cpu,
      title: "Robotics & Assistive Tech",
      description: "Prototyping physical assistive solutions integrating ESP32, OpenCV vision, haptic feedback, and sensor telemetry."
    },
    {
      icon: Rocket,
      title: "Continuous Experimentation",
      description: "Constantly testing new frameworks, competing in hackathons, and refining clean software engineering standards."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-slate-200 dark:border-slate-800/60">
      {/* Background Glow */}
      <div className={`absolute top-1/2 right-0 w-96 h-96 blur-[120px] rounded-full pointer-events-none -z-10 ${
        isDark ? 'bg-purple-900/10' : 'bg-purple-200/30'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get to Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">Monika C R</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl text-base">
            Bridging theoretical computer science with tangible real-world prototypes.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Natural Bio & Perspective */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#0f1322] dark:to-[#0a0d18] border border-slate-200 dark:border-slate-800/90 shadow-xl shadow-slate-200/50 dark:shadow-black/30 transition-colors">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                <Target className="w-6 h-6 text-cyan-500" />
                <span>My Perspective & Drive</span>
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                <p>
                  I am a Computer Science Engineering undergraduate specializing in <strong className="text-slate-900 dark:text-white font-semibold">Artificial Intelligence and Machine Learning</strong>, passionate about building intelligent systems and practical technology solutions that solve real-world problems.
                </p>
                <p>
                  I enjoy exploring the intersection of <span className="text-cyan-600 dark:text-cyan-300 font-medium">AI, machine learning, blockchain, software development, and emerging technologies</span>. From developing predictive analytics applications to privacy-preserving healthcare platforms and assistive robotic systems, I love transforming ideas into functional solutions.
                </p>
                <p>
                  I am continuously learning, experimenting, and improving my technical skills while looking for opportunities to contribute to meaningful software and AI-driven projects.
                </p>
              </div>

              {/* Quick Profile Factoids */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-50 dark:bg-slate-800/80 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-transparent">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">Department & College</span>
                    <span className="font-medium text-slate-900 dark:text-white">CSE (AI & ML) • JSSATE Bengaluru</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-50 dark:bg-slate-800/80 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-transparent">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">Current Location</span>
                    <span className="font-medium text-slate-900 dark:text-white">Bengaluru, Karnataka, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Technical Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-purple-500/40 transition-all shadow-sm group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-all shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
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
