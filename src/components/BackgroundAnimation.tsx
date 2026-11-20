import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const BackgroundAnimation: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Mouse spotlight coordinates
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle simulation settings
    const particleCount = Math.min(Math.floor((width * height) / 18000), 65);
    const connectionDistance = 140;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      glowColor: string;
    }

    const darkColors = [
      { fill: 'rgba(168, 85, 247, 0.8)', glow: 'rgba(168, 85, 247, 0.4)' }, // purple
      { fill: 'rgba(56, 189, 248, 0.8)', glow: 'rgba(56, 189, 248, 0.4)' }, // cyan
      { fill: 'rgba(99, 102, 241, 0.8)', glow: 'rgba(99, 102, 241, 0.4)' }, // indigo
      { fill: 'rgba(52, 211, 153, 0.7)', glow: 'rgba(52, 211, 153, 0.3)' }, // emerald
    ];

    const lightColors = [
      { fill: 'rgba(124, 58, 237, 0.5)', glow: 'rgba(124, 58, 237, 0.2)' },
      { fill: 'rgba(14, 165, 233, 0.5)', glow: 'rgba(14, 165, 233, 0.2)' },
      { fill: 'rgba(79, 70, 229, 0.5)', glow: 'rgba(79, 70, 229, 0.2)' },
    ];

    const colors = isDark ? darkColors : lightColors;

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const c = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: Math.random() * 2 + 1.2,
        color: c.fill,
        glowColor: c.glow,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const onPointerMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * (isDark ? 0.22 : 0.12);
            ctx.strokeStyle = isDark
              ? `rgba(147, 112, 219, ${alpha})`
              : `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw & update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off canvas edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Gentle interactive mouse attraction/repulsion
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < 120 && distToMouse > 0) {
          const force = (120 - distToMouse) / 120;
          p.x -= (dx / distToMouse) * force * 0.8;
          p.y -= (dy / distToMouse) * force * 0.8;
        }

        // Connect particle to mouse cursor if close
        if (distToMouse < 130) {
          const alpha = (1 - distToMouse / 130) * (isDark ? 0.35 : 0.2);
          ctx.strokeStyle = isDark
            ? `rgba(56, 189, 248, ${alpha})`
            : `rgba(14, 165, 233, ${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        // Draw particle circle with soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = isDark ? 8 : 4;
        ctx.shadowColor = p.glowColor;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onPointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Dynamic Interactive Cursor Spotlight Glow */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-500 ease-out -translate-x-1/2 -translate-y-1/2 blur-[120px]"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: isDark
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(56, 189, 248, 0.08) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(56, 189, 248, 0.1) 45%, transparent 70%)',
          opacity: mousePos.x > 0 ? 1 : 0,
        }}
      />

      {/* 2. Floating Ambient Aurora Orbs with Slow Organic Keyframe Drifts */}
      <div className={`absolute top-[-10%] left-[-5%] w-[650px] h-[650px] rounded-full blur-[140px] pointer-events-none animate-pulse duration-[12000ms] ${
        isDark ? 'bg-gradient-to-tr from-purple-700/20 to-indigo-600/15' : 'bg-gradient-to-tr from-purple-200/40 to-indigo-200/30'
      }`} />
      
      <div className={`absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none animate-pulse duration-[15000ms] ${
        isDark ? 'bg-gradient-to-bl from-cyan-600/15 to-blue-700/15' : 'bg-gradient-to-bl from-cyan-200/40 to-blue-200/30'
      }`} />

      <div className={`absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none animate-pulse duration-[18000ms] ${
        isDark ? 'bg-gradient-to-tr from-purple-900/15 via-blue-900/10 to-transparent' : 'bg-gradient-to-tr from-purple-100/50 via-sky-100/40 to-transparent'
      }`} />

      {/* 3. Subtle Digital Grid Lattice */}
      <div className={`absolute inset-0 bg-[size:40px_40px] pointer-events-none ${
        isDark
          ? 'bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]'
          : 'bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]'
      }`} />

      {/* 4. Canvas Neural Network / Constellation Mesh */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};
