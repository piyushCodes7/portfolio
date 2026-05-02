"use client";
import { useState } from "react";
import { Reveal, SectionLabel, SectionTitle } from "../ui/Reveal";
import { EMAIL } from "@/data/portfolio";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setState("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send");
      setState("error");
    }
  };

  const inputClass =
    "w-full bg-surface border border-white/8 px-4 py-3 text-sm text-white placeholder:text-faint font-body focus:outline-none focus:border-accent-cyan/50 focus:bg-surface-secondary transition-all duration-200";

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#080812] to-[#050508]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-purple/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-14">
            <SectionLabel>06. Contact</SectionLabel>
            <SectionTitle>
              Let&apos;s{" "}
              <span className="text-gradient-cyan">build something</span>
            </SectionTitle>
            <p className="text-muted mt-4 text-[0.95rem] max-w-xl leading-relaxed">
              Have an idea, opportunity, or just want to say hi? My inbox is always open.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <Reveal>
            <div className="space-y-6">
              <div className="bg-surface border border-white/7 p-6 clip-corner-sm">
                <div className="font-mono text-[0.65rem] text-faint tracking-widest uppercase mb-3">Email</div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-accent-cyan font-mono text-sm hover:underline"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="bg-surface border border-white/7 p-6 clip-corner-sm">
                <div className="font-mono text-[0.65rem] text-faint tracking-widest uppercase mb-3">Phone</div>
                <a
                  href="tel:+919317113457"
                  className="text-accent-cyan font-mono text-sm hover:underline"
                >
                  +91-9317113457
                </a>
              </div>
              <div className="bg-surface border border-white/7 p-6 clip-corner-sm">
                <div className="font-mono text-[0.65rem] text-faint tracking-widest uppercase mb-3">Location</div>
                <span className="text-muted font-mono text-sm">Bilaspur, Himachal Pradesh</span>
              </div>
              <div className="bg-surface border border-white/7 p-6 clip-corner-sm">
                <div className="font-mono text-[0.65rem] text-faint tracking-widest uppercase mb-3">LinkedIn</div>
                <a
                  href="https://linkedin.com/in/piyushCodes7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan font-mono text-sm hover:underline"
                >
                  linkedin.com/in/piyushCodes7
                </a>
              </div>
              <div className="bg-surface border border-white/7 p-6 clip-corner-sm">
                <div className="font-mono text-[0.65rem] text-faint tracking-widest uppercase mb-3">GitHub</div>
                <a
                  href="https://github.com/piyushCodes7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-cyan font-mono text-sm hover:underline"
                >
                  github.com/piyushCodes7
                </a>
              </div>

              {/* Resume */}
              <div className="bg-surface border border-accent-cyan/20 p-6 clip-corner-sm">
                <div className="font-mono text-[0.65rem] text-accent-cyan tracking-widest uppercase mb-3">Resume</div>
                <p className="text-muted text-sm mb-4">Download my full resume in PDF format.</p>
                <div className="flex gap-3">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-widest uppercase px-4 py-2 border border-accent-cyan/40 text-accent-cyan clip-corner-sm hover:bg-accent-cyan/10 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-widest uppercase px-4 py-2 bg-accent-cyan text-[#050508] font-bold clip-corner-sm hover:shadow-glow-cyan hover:-translate-y-0.5 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={200}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[0.65rem] text-faint tracking-widest uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Piyush Sharma"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block font-mono text-[0.65rem] text-faint tracking-widest uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="hello@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block font-mono text-[0.65rem] text-faint tracking-widest uppercase mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Let's collaborate!"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block font-mono text-[0.65rem] text-faint tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or idea..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {state === "success" && (
                <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/25 text-green-400 font-mono text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {state === "error" && (
                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/25 text-red-400 font-mono text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={state === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 font-mono text-[0.78rem] tracking-widest uppercase py-3.5 bg-accent-cyan text-[#050508] font-bold clip-corner-sm hover:shadow-glow-cyan hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
              >
                {state === "loading" ? (
                  <>
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 bg-[#050508] rounded-full loading-dot"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
