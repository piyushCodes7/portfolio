"use client";
import { Reveal, SectionLabel, SectionTitle } from "../ui/Reveal";
import { achievements, certifications } from "@/data/portfolio";

const colorMap: Record<string, { border: string; shadow: string; badge: string; text: string }> = {
  cyan: {
    border: "hover:border-accent-cyan/40",
    shadow: "hover:shadow-glow-cyan",
    badge: "bg-accent-cyan/10 border-accent-cyan/25",
    text: "text-accent-cyan",
  },
  purple: {
    border: "hover:border-accent-purple/40",
    shadow: "hover:shadow-glow-purple",
    badge: "bg-accent-purple/10 border-accent-purple/25",
    text: "text-accent-purple",
  },
  amber: {
    border: "hover:border-amber-400/30",
    shadow: "hover:shadow-glow-amber",
    badge: "bg-amber-400/10 border-amber-400/25",
    text: "text-amber-400",
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#080812] to-[#050508]" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-amber-500/4 rounded-full blur-[120px]" />
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-accent-cyan/3 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-14">
            <SectionLabel>04. Achievements</SectionLabel>
            <SectionTitle>
              Milestones &{" "}
              <span className="text-gradient-purple">recognition</span>
            </SectionTitle>
            <p className="text-muted mt-4 text-[0.95rem] max-w-xl leading-relaxed">
              Hackathons, competitions, certifications, and moments that pushed me further.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {achievements.map((a, i) => {
            const c = colorMap[a.color] || colorMap.cyan;
            return (
              <Reveal key={a.title} delay={i * 80}>
                <div
                  className={`group relative bg-surface border border-white/7 clip-corner-tr p-6 transition-all duration-300 hover:-translate-y-1 ${c.border} ${c.shadow}`}
                >
                  <div
                    className={`w-11 h-11 border rounded-lg flex items-center justify-center text-xl mb-4 ${c.badge}`}
                  >
                    {a.icon}
                  </div>
                  <div className={`font-mono text-[0.62rem] tracking-[0.15em] uppercase mb-1.5 ${c.text}`}>
                    {a.type}
                  </div>
                  <h3 className="font-display font-bold text-base mb-1.5 text-white group-hover:text-white transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-faint text-[0.82rem] leading-relaxed">{a.detail}</p>
                  <div className="absolute top-5 right-5 font-mono text-[0.62rem] text-faint">
                    {a.year}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Certifications */}
        <Reveal delay={400}>
          <div className="mt-16">
            <h3 className="font-display font-bold text-xl mb-6 text-white">
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-surface border border-white/7 hover:border-accent-cyan/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-accent-purple/10 border border-accent-purple/25 rounded text-lg">
                    📜
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-[0.65rem] text-accent-purple tracking-widest uppercase">
                      {cert.provider}
                    </div>
                    <div className="text-white text-sm">{cert.title}</div>
                  </div>
                  <div className="font-mono text-[0.65rem] text-faint">{cert.year}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
