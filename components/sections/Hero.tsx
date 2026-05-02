"use client";
import { useEffect, useRef, useState } from "react";

const terminalLines = [
  { type: "cmd", text: "$ whoami" },
  { type: "out", text: "piyush_sharma" },
  { type: "cmd", text: "$ cat role.txt" },
  { type: "out", text: "Backend Developer | AI Explorer" },
  { type: "cmd", text: "$ ls ./interests/" },
  { type: "highlight", text: "AI/  Cybersecurity/  Systems/  OS/" },
  { type: "cmd", text: "$ python build_ecosystem.py" },
  { type: "success", text: "✓ Vision loaded: personal ecosystem" },
  { type: "success", text: "✓ Mission: building the future" },
  { type: "cmd", text: "$ _" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;
    const delay = visibleLines === 0 ? 600 : visibleLines === 1 ? 300 : 400;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [visibleLines]);

  const lineColor: Record<string, string> = {
    cmd: "text-accent-cyan",
    out: "text-muted",
    highlight: "text-amber-400",
    success: "text-green-400",
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Animated mesh gradient background - ULTRA ENHANCED */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#0a0a1a] to-[#080812]" />
        {/* Primary cyan glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-cyan/25 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
        {/* Secondary purple glow */}
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-purple/30 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
        {/* Center cyan glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/15 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }} />
        {/* Extra amber accent glow */}
        <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
        {/* Green accent glow */}
        <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] bg-green-500/15 rounded-full blur-[70px] animate-pulse" style={{ animationDuration: '9s', animationDelay: '4s' }} />
        {/* Moving gradient orbs */}
        <div className="absolute w-[250px] h-[250px] bg-gradient-to-r from-accent-cyan/40 to-accent-purple/40 rounded-full blur-[50px] animate-orbit" />
        <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-amber-500/30 to-accent-cyan/30 rounded-full blur-[40px] animate-orbit-reverse" style={{ animationDuration: '25s' }} />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,245,196,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,196,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)'
        }} />
      </div>

      {/* Floating particles - MASSIVELY ENHANCED with 50 particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => {
          const colors = ['bg-accent-cyan/50', 'bg-accent-purple/50', 'bg-amber-400/40', 'bg-green-400/40', 'bg-pink-500/30'];
          const color = colors[i % colors.length];
          const shapes = ['rounded-full', 'rotate-45', 'rounded-sm'];
          const shape = shapes[i % shapes.length];
          const sizes = ['w-1 h-1', 'w-1.5 h-1.5', 'w-2 h-2', 'w-1 h-2', 'w-2 h-1'];
          const size = sizes[i % sizes.length];
          return (
            <div
              key={i}
              className={`absolute ${size} ${shape} ${color}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${8 + Math.random() * 12}s linear infinite`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          );
        })}
      </div>

      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[
          { text: "const ai = new Intelligence();", top: "15%", left: "5%", color: "text-accent-cyan" },
          { text: "await model.train(data);", top: "25%", right: "8%", color: "text-accent-purple" },
          { text: "hackathon.won = true;", top: "70%", left: "8%", color: "text-amber-400" },
          { text: "pip install future", top: "80%", right: "5%", color: "text-green-400" },
          { text: "git push origin main", top: "40%", left: "3%", color: "text-accent-cyan" },
          { text: "import { Success } from 'life';", top: "60%", right: "10%", color: "text-pink-400" },
        ].map((snippet, i) => (
          <div
            key={i}
            className={`absolute font-mono text-[0.65rem] ${snippet.color} whitespace-nowrap`}
            style={{
              top: snippet.top,
              left: snippet.left,
              right: snippet.right,
              animation: `float-code ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${i * 2}s`,
            }}
          >
            {snippet.text}
          </div>
        ))}
      </div>

      {/* Floating binary digits */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute font-mono text-xs text-accent-cyan/40 whitespace-nowrap"
            style={{
              left: `${5 + (i * 6)}%`,
              top: `-5%`,
              animation: `rain-binary ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        ))}
      </div>

      {/* Connection lines - ENHANCED */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5c4" stopOpacity="0" />
            <stop offset="50%" stopColor="#00f5c4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#lineGrad1)" strokeWidth="1.5" className="animate-pulse" style={{ animationDuration: '4s' }} />
        <line x1="90%" y1="10%" x2="10%" y2="90%" stroke="url(#lineGrad1)" strokeWidth="1.5" className="animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="url(#lineGrad2)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </svg>

      {/* Animated geometric shapes - ENHANCED */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Spinning squares */}
        <div className="absolute top-[15%] left-[10%] w-20 h-20 border border-accent-cyan/30 rotate-45 animate-spin" style={{ animationDuration: '20s', animationTimingFunction: 'linear' }} />
        <div className="absolute top-[35%] right-[12%] w-14 h-14 border border-accent-cyan/20 rotate-12 animate-spin" style={{ animationDuration: '15s', animationTimingFunction: 'linear', animationDirection: 'reverse' }} />
        {/* Bouncing circles */}
        <div className="absolute top-[70%] right-[15%] w-16 h-16 border border-accent-purple/30 rounded-full animate-bounce" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[25%] left-[20%] w-10 h-10 border border-green-400/30 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        {/* Pulsing shapes */}
        <div className="absolute bottom-[20%] left-[20%] w-12 h-12 border border-amber-400/30 rotate-12 animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-[40%] right-[25%] w-8 h-8 border border-pink-500/20 rotate-45 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        {/* Floating triangles using clip-path */}
        <div className="absolute top-[45%] left-[5%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-accent-cyan/20 animate-float" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[30%] right-[8%] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-accent-purple/20 animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — text */}
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent-cyan" />
            <span className="font-mono text-[0.7rem] text-accent-cyan tracking-[0.2em] uppercase">
              Available for opportunities
            </span>
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          </div>

          <h1 className="font-display font-extrabold leading-[1.0] tracking-tight mb-4">
            <span
              className="block text-5xl md:text-6xl lg:text-7xl text-white"
              style={{ transitionDelay: "100ms" }}
            >
              Piyush
            </span>
            <span
              className="block text-5xl md:text-6xl lg:text-7xl"
              style={{
                WebkitTextStroke: "1.5px #00f5c4",
                color: "transparent",
                transitionDelay: "200ms",
              }}
            >
              Sharma
            </span>
          </h1>

          <div className="font-mono text-base text-accent-purple mb-6 flex items-center gap-1">
            <span>Backend Developer</span>
            <span
              className="inline-block w-[2px] h-4 bg-accent-purple animate-blink ml-1"
              aria-hidden
            />
          </div>

          <p className="text-muted leading-relaxed max-w-md mb-8 text-[0.95rem]">
            Student developer building{" "}
            <span className="text-accent-cyan">intelligent systems</span> at the
            intersection of AI and cybersecurity. On a mission to craft a{" "}
            <span className="text-accent-purple">personal digital ecosystem</span>.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-mono text-[0.78rem] tracking-widest uppercase px-6 py-3 bg-accent-cyan text-[#050508] font-bold clip-corner-sm hover:shadow-glow-cyan hover:-translate-y-0.5 transition-all duration-200"
            >
              View Projects
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-[0.78rem] tracking-widest uppercase px-6 py-3 border border-white/15 text-white clip-corner-sm hover:border-accent-purple/60 hover:text-accent-purple hover:shadow-glow-purple hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Me
            </a>
          </div>

          {/* Stats row - ENHANCED with colors */}
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/5">
            {[
              { num: "10+", label: "Projects", color: "text-accent-cyan" },
              { num: "200+", label: "Problems Solved", color: "text-accent-purple" },
              { num: "6+", label: "Hackathons", color: "text-amber-400" },
            ].map((s) => (
              <div key={s.label}>
                <div className={`font-display text-2xl font-bold ${s.color}`}>{s.num}</div>
                <div className="font-mono text-[0.65rem] text-faint tracking-widest uppercase mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — terminal */}
        <div
          className="relative transition-all duration-1000 ease-out"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(40px)",
            transitionDelay: "300ms",
          }}
        >
          {/* Orbital rings */}
          <div className="absolute inset-[-50px] pointer-events-none">
            <div className="orbit-ring" style={{ width: "110%", height: "110%" }} />
            <div className="orbit-ring orbit-ring-2" style={{ width: "130%", height: "130%" }}>
              <div className="orbit-dot" />
            </div>
            <div className="orbit-ring orbit-ring-3" style={{ width: "150%", height: "150%" }}>
              <div
                className="orbit-dot"
                style={{ background: "#7c3aed", boxShadow: "0 0 10px #7c3aed" }}
              />
            </div>
          </div>

          {/* Terminal card */}
          <div className="animate-float relative bg-surface border border-white/10 rounded-xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(0,245,196,0.08)]">
            <div className="scanline" />
            {/* Titlebar */}
            <div className="flex items-center gap-2 px-5 py-3.5 bg-surface-secondary border-b border-white/5">
              <svg className="w-4 h-4 text-faint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
              </svg>
              <span className="font-mono text-[0.65rem] text-faint">
                piyush@portfolio ~ bash
              </span>
            </div>
            {/* Body */}
            <div className="p-6 min-h-[240px]">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <div
                  key={i}
                  className={`font-mono text-[0.82rem] mb-1.5 type-line ${lineColor[line.type] || "text-muted"}`}
                  style={{ animationDelay: "0ms" }}
                >
                  {line.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
