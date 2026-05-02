"use client";
import { Reveal, SectionLabel, SectionTitle } from "../ui/Reveal";
import { skills } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  Languages: "cyan",
  Frameworks: "purple",
  "AI / ML": "amber",
  Tools: "cyan",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-purple/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-14">
            <SectionLabel>03. Skills</SectionLabel>
            <SectionTitle>
              My{" "}
              <span className="text-gradient-cyan">technical arsenal</span>
            </SectionTitle>
            <p className="text-muted mt-4 text-[0.95rem] max-w-xl leading-relaxed">
              Tools and technologies I work with to build robust, intelligent systems.
            </p>
          </div>
        </Reveal>

        <div className="space-y-10">
          {Object.entries(skills).map(([category, items], catIdx) => {
            const color = categoryColors[category] || "cyan";
            return (
              <Reveal key={category} delay={catIdx * 100}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-faint">
                      {category}
                    </span>
                    <div className="h-px flex-1 max-w-xs bg-white/5" />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                      <Reveal key={skill.name} delay={catIdx * 80 + i * 40}>
                        <div
                          className={`
                            group relative flex items-center gap-2.5 px-4 py-2.5
                            bg-surface border border-white/7
                            hover:-translate-y-1 transition-all duration-200
                            ${color === "cyan" ? "hover:border-accent-cyan/40 hover:shadow-glow-cyan" : ""}
                            ${color === "purple" ? "hover:border-accent-purple/40 hover:shadow-glow-purple" : ""}
                            ${color === "amber" ? "hover:border-amber-400/40 hover:shadow-glow-amber" : ""}
                          `}
                        >
                          <span className="text-base">{skill.icon}</span>
                          <span className="text-sm text-muted group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <div
                            className={`
                              absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                              ${color === "cyan" ? "bg-gradient-to-br from-accent-cyan/5 to-transparent" : ""}
                              ${color === "purple" ? "bg-gradient-to-br from-accent-purple/5 to-transparent" : ""}
                              ${color === "amber" ? "bg-gradient-to-br from-amber-400/5 to-transparent" : ""}
                            `}
                          />
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Proficiency visual */}
        <Reveal delay={400}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: "Backend Development",
                level: 88,
                color: "#00f5c4",
                desc: "Python, FastAPI, Flask, Node.js",
              },
              {
                label: "AI / Machine Learning",
                level: 75,
                color: "#7c3aed",
                desc: "TensorFlow, Neural Networks, Data Science",
              },
              {
                label: "Frontend Development",
                level: 70,
                color: "#f59e0b",
                desc: "React, HTML/CSS, JavaScript",
              },
            ].map((bar) => (
              <div
                key={bar.label}
                className="bg-surface border border-white/7 p-5 clip-corner-sm"
              >
                <div className="font-display font-semibold text-sm mb-1 text-white">
                  {bar.label}
                </div>
                <div className="font-mono text-[0.65rem] text-faint mb-3">{bar.desc}</div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${bar.level}%`,
                      background: `linear-gradient(90deg, ${bar.color}, ${bar.color}88)`,
                    }}
                  />
                </div>
                <div className="font-mono text-[0.6rem] mt-1.5" style={{ color: bar.color }}>
                  {bar.level}%
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
