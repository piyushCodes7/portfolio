"use client";
import { Reveal, SectionLabel, SectionTitle } from "../ui/Reveal";

const education = {
  university: "Chitkara University",
  degree: "B.E. Computer Science Engineering",
  specialization: "AI & ML",
  period: "Aug 2025 – May 2029",
  cgpa: "9.6 / 10.0",
};

const interests = [
  "Artificial Intelligence", "Cybersecurity", "Backend Systems",
  "Competitive Programming", "Open Source", "ML Research",
  "Network Security", "System Design",
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080812] via-[#0a0a18] to-[#050508]" />
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] bg-accent-purple/4 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <Reveal>
            <SectionLabel>01. About Me</SectionLabel>
            <SectionTitle>
              Crafting systems,{" "}
              <span className="text-gradient-cyan">not just code</span>
            </SectionTitle>

            {/* Education */}
            <div className="mb-8 p-4 bg-surface-secondary/50 border border-white/5 rounded-lg">
              <div className="font-mono text-[0.65rem] text-accent-cyan tracking-widest uppercase mb-2">Education</div>
              <div className="font-display font-bold text-white">{education.university}</div>
              <div className="text-muted text-sm">{education.degree} <span className="text-accent-purple">({education.specialization})</span></div>
              <div className="flex items-center gap-3 mt-2 text-[0.8rem]">
                <span className="text-faint">{education.period}</span>
                <span className="text-faint">|</span>
                <span className="text-accent-cyan font-medium">CGPA: {education.cgpa}</span>
              </div>
            </div>

            <div className="space-y-4 text-muted leading-relaxed text-[0.95rem]">
              <p>
                I&apos;m <span className="text-white font-medium">Piyush Sharma</span>, a passionate
                student developer on a relentless mission to understand and build intelligent
                systems. My journey started with curiosity about how computers{" "}
                <span className="text-accent-cyan">think and communicate</span>.
              </p>
              <p>
                I specialize in <span className="text-white font-medium">backend development</span>{" "}
                — building APIs, pipelines, and AI-powered systems that actually work in the real
                world. I love sitting at the intersection of{" "}
                <span className="text-accent-purple">AI and cybersecurity</span>.
              </p>
              <p>
                My long-term goal is ambitious:{" "}
                <span className="text-white font-medium">build a personal digital ecosystem</span>{" "}
                — a suite of intelligent tools, agents, and services that seamlessly interoperate
                and evolve. Think of it as a one-person tech company fueled by code and curiosity.
              </p>
            </div>

            <div className="mt-8">
              <div className="font-mono text-[0.65rem] text-faint tracking-widest uppercase mb-3">
                Interests
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span
                    key={i}
                    className="font-mono text-[0.7rem] px-3 py-1.5 border border-white/8 text-muted hover:border-accent-purple/50 hover:text-accent-purple hover:bg-accent-purple/5 transition-all duration-200"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — stats */}
          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "10+", label: "Projects Built", icon: "🚀", color: "cyan" },
                { num: "50+", label: "Problems Solved", icon: "🧠", color: "purple" },
                { num: "6+", label: "Hackathons", icon: "🏆", color: "amber" },
                { num: "5+", label: "Tech Stacks", icon: "⚡", color: "cyan" },
              ].map((s, i) => (
                <Reveal key={s.label} delay={i * 100}>
                  <div
                    className={`bg-surface border border-white/7 p-6 clip-corner-sm hover:border-white/15 hover:-translate-y-1 transition-all duration-300 group ${
                      s.color === "cyan"
                        ? "hover:border-accent-cyan/30 hover:shadow-glow-cyan"
                        : s.color === "purple"
                        ? "hover:border-accent-purple/30 hover:shadow-glow-purple"
                        : "hover:border-amber-400/30 hover:shadow-glow-amber"
                    }`}
                  >
                    <div className="text-2xl mb-3">{s.icon}</div>
                    <div
                      className={`font-display text-3xl font-bold mb-1 ${
                        s.color === "cyan"
                          ? "text-accent-cyan"
                          : s.color === "purple"
                          ? "text-accent-purple"
                          : "text-amber-400"
                      }`}
                    >
                      {s.num}
                    </div>
                    <div className="font-mono text-[0.65rem] text-faint tracking-widest uppercase">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Code snippet card */}
            <Reveal delay={400}>
              <div className="mt-4 bg-surface border border-white/7 rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-secondary border-b border-white/5">
                  <svg className="w-3.5 h-3.5 text-faint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h5M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
                  </svg>
                  <span className="font-mono text-[0.6rem] text-faint">piyush.json</span>
                </div>
                <pre className="font-mono text-[0.75rem] p-4 leading-6 overflow-x-auto">
                  <span className="text-white/40">{"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-accent-purple">&quot;name&quot;</span>
                  <span className="text-white/40">: </span>
                  <span className="text-green-400">&quot;Piyush Sharma&quot;</span>
                  {",\n  "}
                  <span className="text-accent-purple">&quot;role&quot;</span>
                  <span className="text-white/40">: </span>
                  <span className="text-green-400">&quot;Backend Developer&quot;</span>
                  {",\n  "}
                  <span className="text-accent-purple">&quot;focus&quot;</span>
                  <span className="text-white/40">: [</span>
                  <span className="text-amber-400">&quot;AI&quot;</span>
                  <span className="text-white/40">, </span>
                  <span className="text-amber-400">&quot;Cybersecurity&quot;</span>
                  <span className="text-white/40">],</span>
                  {"\n  "}
                  <span className="text-accent-purple">&quot;goal&quot;</span>
                  <span className="text-white/40">: </span>
                  <span className="text-green-400">&quot;personal ecosystem&quot;</span>
                  {",\n  "}
                  <span className="text-accent-purple">&quot;status&quot;</span>
                  <span className="text-white/40">: </span>
                  <span className="text-accent-cyan">&quot;building...&quot;</span>
                  {"\n"}
                  <span className="text-white/40">{"}"}</span>
                </pre>
              </div>
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
