import React from 'react';

interface IllustrationProps {
  type: 'trustmed' | 'stocksight' | 'agriculture' | 'humanoid' | 'petfeeder' | 'arbelt';
  className?: string;
}

export const ProjectIllustration: React.FC<IllustrationProps> = ({ type, className = "w-full h-48 sm:h-56" }) => {
  switch (type) {
    case 'trustmed':
      return (
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0d1326] via-[#111827] to-[#151c33] flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 transition-colors ${className}`}>
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          <svg className="w-full h-full p-4" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Glow filters */}
            <defs>
              <filter id="purple-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8b5cf6" />
                <stop offset="100%" stop-color="#3b82f6" />
              </linearGradient>
            </defs>

            {/* Blockchain Network Nodes */}
            <circle cx="80" cy="60" r="14" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2" />
            <text x="80" y="64" fill="#a78bfa" fontSize="9" fontWeight="600" textAnchor="middle">IPFS</text>

            <circle cx="320" cy="60" r="14" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />
            <text x="320" y="64" fill="#38bdf8" fontSize="9" fontWeight="600" textAnchor="middle">CID</text>

            <circle cx="70" cy="160" r="14" fill="#1e1b4b" stroke="#a855f7" strokeWidth="2" />
            <text x="70" y="164" fill="#c084fc" fontSize="8" fontWeight="600" textAnchor="middle">FL-Client</text>

            <circle cx="330" cy="160" r="14" fill="#022c22" stroke="#10b981" strokeWidth="2" />
            <text x="330" y="164" fill="#34d399" fontSize="8" fontWeight="600" textAnchor="middle">FedAvg</text>

            {/* Connecting cryptographic paths */}
            <line x1="94" y1="65" x2="160" y2="95" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            <line x1="306" y1="65" x2="240" y2="95" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            <line x1="84" y1="155" x2="160" y2="125" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            <line x1="316" y1="155" x2="240" y2="125" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

            {/* Central Medical Shield & Blockchain Lock */}
            <g transform="translate(160, 45)">
              <path d="M40 5 L75 20 V65 C75 95 40 115 40 115 C40 115 5 95 5 65 V20 Z" fill="#13192e" stroke="url(#shieldGrad)" strokeWidth="3" filter="url(#purple-glow)" />
              {/* Medical Cross */}
              <rect x="34" y="35" width="12" height="34" rx="2" fill="#38bdf8" opacity="0.9" />
              <rect x="23" y="46" width="34" height="12" rx="2" fill="#38bdf8" opacity="0.9" />
              {/* Inner Keyhole / Security Dot */}
              <circle cx="40" cy="52" r="3.5" fill="#ffffff" />
            </g>

            {/* Polygon Hex badge */}
            <g transform="translate(175, 175)">
              <rect x="-10" y="0" width="100" height="26" rx="13" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1.5" />
              <circle cx="4" cy="13" r="5" fill="#8b5cf6" />
              <text x="44" y="17" fill="#e0e7ff" fontSize="10" fontWeight="600" textAnchor="middle">Polygon Consent</text>
            </g>
          </svg>
        </div>
      );

    case 'stocksight':
      return (
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0c1322] via-[#0f172a] to-[#121c38] flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors ${className}`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          <svg className="w-full h-full p-4" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="stockArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#06b6d4" stopOpacity="0.3" />
                <stop offset="100%" stop-color="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* AAPL Ticker Tag */}
            <rect x="25" y="20" width="85" height="24" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
            <text x="67" y="36" fill="#38bdf8" fontSize="11" fontWeight="700" textAnchor="middle">AAPL • ML</text>

            <rect x="120" y="20" width="105" height="24" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
            <text x="172" y="36" fill="#34d399" fontSize="10" fontWeight="600" textAnchor="middle">Random Forest</text>

            {/* Technical Indicators: SMA 20 & RSI */}
            <text x="360" y="36" fill="#94a3b8" fontSize="10" textAnchor="end">SMA 20 | RSI 14 | MACD</text>

            {/* Candlestick bars */}
            {/* Candle 1 */}
            <line x1="50" y1="120" x2="50" y2="160" stroke="#ef4444" strokeWidth="1.5" />
            <rect x="44" y="130" width="12" height="22" rx="1" fill="#ef4444" />
            {/* Candle 2 */}
            <line x1="85" y1="110" x2="85" y2="155" stroke="#10b981" strokeWidth="1.5" />
            <rect x="79" y="120" width="12" height="24" rx="1" fill="#10b981" />
            {/* Candle 3 */}
            <line x1="120" y1="95" x2="120" y2="145" stroke="#10b981" strokeWidth="1.5" />
            <rect x="114" y="105" width="12" height="26" rx="1" fill="#10b981" />
            {/* Candle 4 */}
            <line x1="155" y1="100" x2="155" y2="150" stroke="#ef4444" strokeWidth="1.5" />
            <rect x="149" y="112" width="12" height="20" rx="1" fill="#ef4444" />
            {/* Candle 5 */}
            <line x1="190" y1="80" x2="190" y2="135" stroke="#10b981" strokeWidth="1.5" />
            <rect x="184" y="88" width="12" height="32" rx="1" fill="#10b981" />

            {/* Shaded ML Momentum Area */}
            <path d="M 190 120 Q 240 85 290 95 T 370 55 L 370 180 L 190 180 Z" fill="url(#stockArea)" />
            {/* Predicted Trend Line (SMA/Predictive) */}
            <path d="M 45 140 Q 120 115 190 102 T 280 82 T 370 55" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" fill="none" />
            
            {/* Prediction Point with Pulsing Ring */}
            <circle cx="370" cy="55" r="7" fill="#38bdf8" />
            <circle cx="370" cy="55" r="14" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
            
            {/* Tableau / PowerBI export tag */}
            <g transform="translate(180, 175)">
              <rect x="0" y="0" width="185" height="24" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="1" />
              <text x="92" y="16" fill="#cbd5e1" fontSize="9.5" fontWeight="500" textAnchor="middle">80/20 Split • BI Export Ready</text>
            </g>
          </svg>
        </div>
      );

    case 'agriculture':
      return (
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0c1f17] via-[#0f241d] to-[#122a1f] flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#10b98115_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          <svg className="w-full h-full p-4" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 3rd Prize Visual Ribbon */}
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="120" height="24" rx="12" fill="#854d0e" stroke="#eab308" strokeWidth="1.5" />
              <circle cx="14" cy="12" r="6" fill="#facc15" />
              <text x="68" y="16" fill="#fef08a" fontSize="10" fontWeight="700" textAnchor="middle">★ 3rd PRIZE</text>
            </g>

            {/* Vernacular Language Badges floating */}
            <g transform="translate(240, 20)">
              <rect x="0" y="0" width="140" height="24" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
              <text x="70" y="16" fill="#6ee7b7" fontSize="9.5" fontWeight="600" textAnchor="middle">ಕನ್ನಡ • தமிழ் • हिंदी • Eng</text>
            </g>

            {/* Central Sprout & Growth Stem */}
            <path d="M 200 170 V 95" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
            {/* Leaves */}
            <path d="M 200 135 C 170 125 160 100 180 85 C 200 95 200 120 200 135 Z" fill="#34d399" />
            <path d="M 200 120 C 230 110 240 85 220 70 C 200 80 200 105 200 120 Z" fill="#10b981" />

            {/* Voice Audio Soundwaves (Multilingual Voice Interaction) */}
            <g transform="translate(80, 110)">
              <circle cx="30" cy="30" r="18" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
              <path d="M 23 25 V 35 M 27 20 V 40 M 31 16 V 44 M 35 22 V 38 M 39 27 V 33" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" />
              {/* Expanding Voice Waves */}
              <path d="M 54 18 A 20 20 0 0 1 54 42" stroke="#34d399" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
              <path d="M 60 12 A 28 28 0 0 1 60 48" stroke="#34d399" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
            </g>

            {/* Agronomic Data Pills: Water & Fertilizer */}
            <g transform="translate(270, 95)">
              <rect x="0" y="0" width="105" height="26" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
              <text x="52" y="17" fill="#bae6fd" fontSize="9.5" textAnchor="middle">💧 Water & Sun Calc</text>
            </g>
            <g transform="translate(270, 130)">
              <rect x="0" y="0" width="105" height="26" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
              <text x="52" y="17" fill="#fde68a" fontSize="9.5" textAnchor="middle">📊 Fertilizer & PDF</text>
            </g>

            {/* Ground / Roots */}
            <path d="M 120 175 Q 200 170 280 175" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'humanoid':
      return (
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-[#121324] via-[#16172e] to-[#1e1b38] flex items-center justify-center border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#6366f115_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          <svg className="w-full h-full p-4" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Robot Head Outline */}
            <rect x="155" y="45" width="90" height="85" rx="20" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2.5" />
            {/* Neck & Shoulders */}
            <rect x="185" y="130" width="30" height="18" fill="#312e81" stroke="#6366f1" strokeWidth="1.5" />
            <path d="M 130 185 C 130 155 180 148 200 148 C 220 148 270 155 270 185" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />
            
            {/* Glowing Optical Visor with Face Recognition Box */}
            <rect x="170" y="65" width="60" height="22" rx="11" fill="#030712" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Vision eyes / scan line */}
            <circle cx="185" cy="76" r="4.5" fill="#06b6d4" />
            <circle cx="215" cy="76" r="4.5" fill="#06b6d4" />
            <line x1="175" y1="76" x2="225" y2="76" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />

            {/* Articulation Servo Waving Hand */}
            <g transform="translate(85, 75)">
              <circle cx="20" cy="20" r="14" fill="#312e81" stroke="#a78bfa" strokeWidth="1.5" />
              {/* Hand waving lines */}
              <path d="M 20 12 V 28 M 12 20 H 28" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 6 10 C 2 15 2 25 6 30" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <text x="20" y="45" fill="#c084fc" fontSize="9" fontWeight="600" textAnchor="middle">Waving & Gesture</text>
            </g>

            {/* YOLO Computer Vision Box */}
            <g transform="translate(285, 75)">
              <rect x="0" y="0" width="85" height="42" rx="6" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="42" y="16" fill="#fb7185" fontSize="8.5" fontWeight="600" textAnchor="middle">[ Person 98% ]</text>
              <text x="42" y="32" fill="#94a3b8" fontSize="8" textAnchor="middle">YOLO + OpenCV</text>
            </g>

            {/* ESP32 / Arduino Controller Tag */}
            <g transform="translate(130, 185)">
              <rect x="0" y="0" width="140" height="22" rx="6" fill="#020617" stroke="#4f46e5" strokeWidth="1" />
              <text x="70" y="15" fill="#a5b4fc" fontSize="9.5" fontWeight="600" textAnchor="middle">ESP32-CAM • Arduino</text>
            </g>
          </svg>
        </div>
      );

    case 'petfeeder':
      return (
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-[#111928] via-[#141e30] to-[#1a253c] flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/40 transition-colors ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b15_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          <svg className="w-full h-full p-4" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Feeder Silo / Hopper */}
            <path d="M 160 50 L 240 50 L 225 130 L 175 130 Z" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            {/* Food Level Gradient inside */}
            <path d="M 170 85 L 230 85 L 222 125 L 178 125 Z" fill="#b45309" opacity="0.75" />
            {/* Top Lid */}
            <rect x="150" y="42" width="100" height="12" rx="6" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />

            {/* Level Sensor Beams */}
            <line x1="168" y1="85" x2="232" y2="85" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="168" cy="85" r="3" fill="#38bdf8" />
            <circle cx="232" cy="85" r="3" fill="#38bdf8" />

            {/* Dispenser Chute and Bowl */}
            <rect x="188" y="130" width="24" height="20" fill="#334155" />
            {/* Dispensing kibbles */}
            <circle cx="196" cy="142" r="2.5" fill="#fbbf24" />
            <circle cx="204" cy="146" r="2.5" fill="#fbbf24" />

            {/* Pet Bowl */}
            <ellipse cx="200" cy="168" rx="40" ry="14" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
            <ellipse cx="200" cy="166" rx="28" ry="8" fill="#d97706" />

            {/* IoT Telemetry / Mobile Notification Card */}
            <g transform="translate(35, 70)">
              <rect x="0" y="0" width="105" height="55" rx="8" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="12" y="20" fill="#60a5fa" fontSize="9" fontWeight="700">IoT Telemetry</text>
              <text x="12" y="34" fill="#e2e8f0" fontSize="8.5">Level: 78% [OK]</text>
              <text x="12" y="47" fill="#34d399" fontSize="8">Auto-Alert: Active</text>
            </g>

            {/* Status Indicator */}
            <g transform="translate(265, 80)">
              <rect x="0" y="0" width="105" height="42" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
              <circle cx="16" cy="21" r="5" fill="#10b981" />
              <text x="30" y="24" fill="#6ee7b7" fontSize="9" fontWeight="600">Smart Dispense</text>
            </g>
          </svg>
        </div>
      );

    case 'arbelt':
      return (
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-[#12182b] via-[#17203b] to-[#1d2747] flex items-center justify-center border border-sky-500/20 group-hover:border-sky-500/40 transition-colors ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf815_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          <svg className="w-full h-full p-4" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SPRINTATHON'25 Tag */}
            <g transform="translate(25, 20)">
              <rect x="0" y="0" width="145" height="24" rx="12" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="14" cy="12" r="5" fill="#38bdf8" />
              <text x="80" y="16" fill="#e0f2fe" fontSize="9.5" fontWeight="700" textAnchor="middle">SPRINTATHON'25</text>
            </g>

            {/* Wearable Belt Curve */}
            <path d="M 60 135 C 130 90 270 90 340 135" stroke="#475569" strokeWidth="16" strokeLinecap="round" fill="none" />
            <path d="M 60 135 C 130 90 270 90 340 135" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" fill="none" />

            {/* Haptic Vibration Nodes on the Belt */}
            {/* Left Node */}
            <circle cx="115" cy="115" r="9" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="115" cy="115" r="4" fill="#38bdf8" />
            {/* Center Node (Main Controller / ESP32) */}
            <circle cx="200" cy="103" r="14" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2.5" />
            <circle cx="200" cy="103" r="6" fill="#a855f7" />
            {/* Right Node */}
            <circle cx="285" cy="115" r="9" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="285" cy="115" r="4" fill="#38bdf8" />

            {/* Vibration Feedback Pulse Waves */}
            <path d="M 190 75 C 195 65 205 65 210 75" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 183 67 C 193 52 207 52 217 67" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="2 2" strokeLinecap="round" fill="none" />

            {/* CameraX & ML Kit Vision Cone */}
            <path d="M 200 115 L 140 190 L 260 190 Z" fill="#0284c7" opacity="0.15" />
            <line x1="200" y1="115" x2="140" y2="190" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="200" y1="115" x2="260" y2="190" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Obstacle Detected Box */}
            <g transform="translate(160, 160)">
              <rect x="0" y="0" width="80" height="24" rx="4" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
              <text x="40" y="16" fill="#fca5a5" fontSize="8.5" fontWeight="600" textAnchor="middle">Obstacle: 1.2m</text>
            </g>

            {/* Android & Kotlin Badge */}
            <g transform="translate(245, 20)">
              <rect x="0" y="0" width="130" height="24" rx="6" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="1" />
              <text x="65" y="16" fill="#c4b5fd" fontSize="9" fontWeight="600" textAnchor="middle">Android • ML Kit • BLE</text>
            </g>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
