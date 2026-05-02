"use client";
import { Reveal, SectionLabel, SectionTitle } from "../ui/Reveal";
import { profiles } from "@/data/portfolio";

export default function Profiles() {
  return (
    <section id="profiles" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#080812] to-[#050508]" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[150px]" />
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-accent-purple/4 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-14">
            <SectionLabel>05. Profiles</SectionLabel>
            <SectionTitle>
              Find me{" "}
              <span className="text-gradient-cyan">across the web</span>
            </SectionTitle>
            <p className="text-muted mt-4 text-[0.95rem] max-w-xl leading-relaxed">
              Click any card to visit my profile on that platform.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {profiles.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden rounded-xl border border-white/7 hover:border-white/20 hover:-translate-y-2 hover:shadow-card transition-all duration-300"
                style={{ background: p.bg }}
              >
                {/* Top bar */}
                <div
                  className="h-0.5 w-full"
                  style={{ background: p.accent }}
                />

                <div className="p-6">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: p.color }}
                    dangerouslySetInnerHTML={{ __html: p.icon }}
                  />

                  {/* Name */}
                  <div
                    className="font-display font-bold text-base mb-0.5"
                    style={{ color: p.color }}
                  >
                    {p.name}
                  </div>

                  {/* Handle */}
                  <div
                    className="font-mono text-[0.65rem] tracking-wide mb-2 opacity-70"
                    style={{ color: p.color }}
                  >
                    @{p.handle}
                  </div>

                  {/* Description */}
                  <div
                    className="font-mono text-[0.62rem] tracking-widest uppercase opacity-50"
                    style={{ color: p.color }}
                  >
                    {p.description}
                  </div>
                </div>

                {/* Hover arrow */}
                <div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: p.accent }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                {/* Glow overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ background: p.accent }}
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
