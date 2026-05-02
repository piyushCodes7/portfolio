"use client";
import { Reveal, SectionLabel, SectionTitle } from "../ui/Reveal";
import { GITHUB_USERNAME } from "@/data/portfolio";

interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string[];
  tags: string[];
  github: string;
  event?: string;
  color: "cyan" | "purple" | "amber";
}

const featuredProjects: Project[] = [
  {
    id: 1,
    name: "ASHA-VANI",
    tagline: "Offline AI Health Copilot for Rural India",
    description: [
      "Fine-tuned a 3B-parameter Small Language Model (Qwen2.5) via the Oumi framework for Hinglish medical triage, enabling ASHA workers to receive expert-level AI guidance with 100% offline operation.",
      "Instantly activated by the wake word 'ASHA'.",
      "Engineered FastAPI voice pipeline + React frontend achieving <500ms end-to-end latency on edge devices.",
    ],
    tags: ["Python", "Qwen2.5-3B", "Oumi Fine-Tuning", "FastAPI", "React", "Edge Deployment"],
    github: "https://github.com/GovindJindal/ASHA-VANI",
    event: "Eclipse 6.0, Thapar University",
    color: "cyan",
  },
  {
    id: 2,
    name: "BODHI",
    tagline: "AI-Powered Fintech & Investment Platform",
    description: [
      "Built a full-stack fintech app featuring group expense tracking, micro-investment clubs with democratic trade voting, and a proactive Gemini 1.5 Flash AI financial assistant.",
      "Engineered a polished UI/UX with modernized navigation flow and professional, minimalist design.",
      "Integrated Sarvam AI for multilingual support and Razorpay for live trade execution; deployed on AWS.",
    ],
    tags: ["React Native", "TypeScript", "FastAPI", "AWS", "Gemini 1.5 Flash", "Sarvam AI", "Razorpay"],
    github: "https://github.com/GovindJindal/BODHI",
    event: "FINVASIA Hackathon, Chitkara University",
    color: "purple",
  },
  {
    id: 3,
    name: "Sign Setu",
    tagline: "Indian Sign Language Accessibility Platform",
    description: [
      "Developed a multi-modal ISL conversion platform processing text, audio, and video into ISL gloss notation, bridging the communication gap for India's deaf/hard-of-hearing community.",
      "Leveraged spaCy + NLTK for NLP pre-processing and AssemblyAI + OpenRouter LLM pipeline.",
      "Integrated Google Translate to support regional Indian languages.",
    ],
    tags: ["Next.js 15", "React 19", "Django", "spaCy", "NLTK", "AssemblyAI", "Three.js", "Tailwind CSS 4"],
    github: "https://github.com/GovindJindal/Sign-Setu",
    event: "Hack Helix, Thapar University",
    color: "amber",
  },
  {
    id: 4,
    name: "Logic Flow",
    tagline: "Virtual Digital Electronics & Architecture Lab",
    description: [
      "Built a fully browser-based simulator for Digital Electronics & Computer Architecture, providing university-level virtual lab access to students without physical equipment.",
      "Can be adopted at Chitkara University.",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/GovindJindal/LogicFlow",
    event: "Frontend Project, Chitkara University",
    color: "cyan",
  },
];

const colorMap = {
  cyan: {
    border: "hover:border-accent-cyan/40",
    shadow: "hover:shadow-glow-cyan",
    badge: "bg-accent-cyan/10 border-accent-cyan/25 text-accent-cyan",
  },
  purple: {
    border: "hover:border-accent-purple/40",
    shadow: "hover:shadow-glow-purple",
    badge: "bg-accent-purple/10 border-accent-purple/25 text-accent-purple",
  },
  amber: {
    border: "hover:border-amber-400/30",
    shadow: "hover:shadow-glow-amber",
    badge: "bg-amber-400/10 border-amber-400/25 text-amber-400",
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const c = colorMap[project.color];

  return (
    <Reveal delay={index * 100}>
      <div className={`group relative bg-surface border border-white/7 clip-corner-md border-sweep hover:border-white/15 hover:-translate-y-1 hover:shadow-card transition-all duration-300 p-6 h-full flex flex-col ${c.border} ${c.shadow} overflow-hidden`}>
        {/* Glow effect on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none ${c.badge.replace('text-', 'bg-').replace('/10', '/20')}`} />
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="font-mono text-[0.62rem] text-faint tracking-widest">
            {String(index + 1).padStart(2, "0")}
          </div>
          {project.event && (
            <span className={`font-mono text-[0.6rem] px-2 py-1 border rounded ${c.badge}`}>
              {project.event}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="font-display font-bold text-xl mb-1 text-white group-hover:text-accent-cyan transition-colors">
          {project.name}
        </h3>
        <p className="text-accent-cyan/80 text-sm mb-3 italic">{project.tagline}</p>

        {/* Description */}
        <ul className="text-muted text-[0.85rem] leading-relaxed mb-4 flex-1 space-y-2">
          {project.description.map((desc, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-accent-cyan mt-1.5">›</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.6rem] px-2 py-0.5 bg-white/5 border border-white/10 text-faint"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className={`font-mono text-[0.65rem] ${project.color === "cyan" ? "text-accent-cyan" : project.color === "purple" ? "text-accent-purple" : "text-amber-400"}`}>
            {project.color === "cyan" ? "● Health AI" : project.color === "purple" ? "● Fintech" : "● Accessibility"}
          </span>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.65rem] text-faint hover:text-accent-cyan transition-colors flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#080812] to-[#050508]" />
      <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[150px]" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-accent-purple/4 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-14">
            <SectionLabel>02. Projects</SectionLabel>
            <SectionTitle>
              Things I&apos;ve{" "}
              <span className="text-gradient-purple">built & shipped</span>
            </SectionTitle>
            <p className="text-muted mt-4 text-[0.95rem] max-w-xl leading-relaxed">
              Featured projects from hackathons and competitions — showcasing AI, fintech, and accessibility solutions.
            </p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 font-mono text-[0.7rem] text-accent-cyan tracking-widest uppercase hover:gap-3 transition-all"
            >
              All repos on GitHub
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
