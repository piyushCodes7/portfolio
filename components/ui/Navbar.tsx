"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
];

const resumeLink = { label: "Resume", href: "/resume.pdf", external: true };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#050508]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-sm text-accent-cyan tracking-widest hover:opacity-80 transition-opacity"
        >
          piyushCodes7
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-mono text-[0.7rem] tracking-[0.15em] uppercase transition-colors relative group ${
                  active === link.href.slice(1)
                    ? "text-accent-cyan"
                    : "text-muted hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent-cyan transition-all duration-300 ${
                    active === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
          <li>
            <a
              href={resumeLink.href}
              download
              className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-accent-cyan hover:text-white transition-colors relative group"
            >
              {resumeLink.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        </ul>

        {/* Resume CTA Button */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-widest uppercase px-4 py-2 border border-accent-cyan/40 text-accent-cyan clip-corner-sm hover:bg-accent-cyan/10 transition-all duration-200"
        >
          <span>Download</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden flex flex-col gap-[6px] w-7 ${mobileOpen ? "nav-mobile-open" : ""}`}
          aria-label="Toggle menu"
        >
          <span className="hamburger-top block w-full h-[2px] bg-accent-cyan origin-center" />
          <span className="hamburger-mid block w-full h-[2px] bg-accent-cyan" />
          <span className="hamburger-bot block w-full h-[2px] bg-accent-cyan origin-center" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 border-t border-white/5" : "max-h-0"
        } bg-[#0a0a10]/95 backdrop-blur-xl`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm tracking-widest uppercase text-muted hover:text-accent-cyan transition-colors block py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="font-mono text-sm tracking-widest uppercase text-accent-cyan border border-accent-cyan/40 px-4 py-2 clip-corner-sm inline-block mt-2"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}