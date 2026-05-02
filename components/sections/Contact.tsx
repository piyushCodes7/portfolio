"use client";
import { useState } from "react";
import { Reveal, SectionLabel, SectionTitle } from "../ui/Reveal";
import { EMAIL } from "@/data/portfolio";

type FormState = "idle" | "loading" | "success" | "error";

// Animated terminal dots
const TerminalDot = ({ color }: { color: string }) => (
  <span className={`w-2 h-2 rounded-full ${color} animate-pulse`} />
);

// Contact link with hover glow
const ContactLink = ({
  icon,
  label,
  value,
  href,
  color = "cyan",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  color?: "cyan" | "purple" | "green";
}) => {
  const colorClasses = {
    cyan: "border-accent-cyan/30 group-hover:border-accent-cyan group-hover:shadow-[0_0_25px_rgba(0,245,196,0.25)]",
    purple: "border-accent-purple/30 group-hover:border-accent-purple group-hover:shadow-[0_0_25px_rgba(124,58,237,0.25)]",
    green: "border-green-400/30 group-hover:border-green-400 group-hover:shadow-[0_0_25px_rgba(74,222,128,0.25)]",
  };

  const iconBgClasses = {
    cyan: "bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30 group-hover:bg-accent-cyan/30",
    purple: "bg-accent-purple/20 text-accent-purple border border-accent-purple/30 group-hover:bg-accent-purple/30",
    green: "bg-green-400/20 text-green-400 border border-green-400/30 group-hover:bg-green-400/30",
  };

  const content = (
    <>
      {/* Animated gradient border */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
      </div>

      <div className="relative flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${iconBgClasses[color]}`}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[0.65rem] text-faint/80 tracking-[0.15em] uppercase">
              {label}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <span className="font-mono text-base font-bold text-white group-hover:text-accent-cyan transition-colors block tracking-wide">
            {value}
          </span>
        </div>
        {/* Arrow on hover - only show if href exists */}
        {href && (
          <svg
            className="w-4 h-4 text-faint opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        )}
      </div>
    </>
  );

  const cardClass = `group relative block bg-[#0d0d18] border-2 p-4 rounded-lg transition-all duration-300 hover:-translate-y-1 z-10 ${colorClasses[color]}`;

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cardClass}
      >
        {content}
      </a>
    );
  }

  return <div className={cardClass}>{content}</div>;
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const inputBaseClass =
    "w-full bg-transparent border-b border-white/10 px-0 py-4 text-sm text-white placeholder:text-faint/50 font-body focus:outline-none transition-all duration-300";

  const inputFocusClass = "border-accent-cyan/60 shadow-[0_1px_0_0_rgba(0,245,196,0.3)]";

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0a0a15] to-[#050508]" />
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[150px] animate-pulse" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent-cyan/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <Reveal>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <TerminalDot color="bg-accent-cyan" />
              <TerminalDot color="bg-accent-purple" />
              <TerminalDot color="bg-green-400" />
            </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left — Contact Cards */}
          <Reveal className="lg:col-span-1">
            <div className="space-y-4">
              {/* Quick Contact Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-mono text-xs text-faint tracking-[0.2em] uppercase">
                  Quick Contact
                </h3>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                  <span className="w-1.5 h-1.5 bg-accent-purple rounded-full" />
                </div>
              </div>

              {/* Contact Links */}
              <ContactLink
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
                label="Email"
                value={EMAIL}
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Hello%20from%20portfolio`}
                color="cyan"
              />

              <ContactLink
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
                label="Phone"
                value="+91-9317113457"
                href="tel:+919317113457"
                color="purple"
              />

              <ContactLink
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
                label="Location"
                value="Bilaspur, HP, India"
                href="https://www.google.com/maps/dir/?api=1&destination=31.363178,76.622631&travelmode=driving"
                color="green"
              />

              {/* Social Links Section */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <h3 className="font-mono text-xs text-faint tracking-[0.2em] uppercase mb-4">
                  Social Links
                </h3>
                <div className="flex gap-3">
                  {[
                    {
                      name: "LinkedIn",
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ),
                      href: "https://linkedin.com/in/piyushCodes7",
                    },
                    {
                      name: "GitHub",
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      ),
                      href: "https://github.com/piyushCodes7",
                    },
                    {
                      name: "Resume",
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      ),
                      href: "/resume.pdf",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-12 h-12 rounded-xl bg-surface/50 border border-white/10 flex items-center justify-center text-faint hover:text-accent-cyan hover:border-accent-cyan/30 hover:bg-accent-cyan/5 transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — Terminal-style Form */}
          <Reveal delay={200} className="lg:col-span-1">
            <div className="relative">
              {/* Terminal Header — Linux Style */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a2e] border border-white/10 border-b-0 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-mono text-[0.7rem] text-white/70">piyush@dev:~</span>
                </div>
                <span className="font-mono text-[0.65rem] text-faint/50">contact_form.sh</span>
              </div>

              {/* Terminal Body */}
              <form
                onSubmit={handleSubmit}
                className="bg-surface/30 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-b-lg space-y-1"
              >
                {/* Terminal prompt style fields */}
                {[
                  { key: "name", label: "name", type: "text", placeholder: "your name" },
                  { key: "email", label: "email", type: "email", placeholder: "your@email.com" },
                  { key: "subject", label: "subject", type: "text", placeholder: "what's this about?" },
                ].map((field) => (
                  <div key={field.key} className="group">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[0.75rem] text-accent-cyan shrink-0">
                        <span className="text-accent-purple">➜</span> ~
                      </span>
                      <span className="font-mono text-[0.75rem] text-faint shrink-0">{field.label}:</span>
                      <input
                        type={field.type}
                        required
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        onFocus={() => setFocusedField(field.key)}
                        onBlur={() => setFocusedField(null)}
                        placeholder={field.placeholder}
                        className={`${inputBaseClass} ${focusedField === field.key ? inputFocusClass : ""}`}
                      />
                    </div>
                  </div>
                ))}

                {/* Message field */}
                <div className="group pt-4">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[0.75rem] text-accent-cyan shrink-0 pt-4">
                      <span className="text-accent-purple">➜</span> ~
                    </span>
                    <span className="font-mono text-[0.75rem] text-faint shrink-0 pt-4">message:</span>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="tell me about your project..."
                      className={`${inputBaseClass} resize-none ${focusedField === "message" ? inputFocusClass : ""}`}
                    />
                  </div>
                </div>

                {/* Status messages */}
                {state === "success" && (
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="font-mono text-sm text-green-400">
                        ✓ Message sent successfully!
                      </span>
                    </div>
                    <span className="font-mono text-xs text-faint mt-1 block">
                      I&apos;ll get back to you soon.
                    </span>
                  </div>
                )}

                {state === "error" && (
                  <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="font-mono text-sm text-red-400">✗ Error: {errorMsg}</span>
                    </div>
                  </div>
                )}

                {/* Submit button */}
                <div className="flex items-center gap-3 pt-8">
                  <span className="font-mono text-[0.75rem] text-accent-cyan shrink-0">
                    <span className="text-accent-purple">➜</span> ~
                  </span>
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="group relative font-mono text-sm font-bold px-8 py-4 rounded-lg border-2 border-accent-cyan bg-accent-cyan text-[#050508] hover:bg-transparent hover:text-accent-cyan hover:shadow-[0_0_30px_rgba(0,245,196,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      {state === "loading" ? (
                        <>
                          <div className="flex gap-1">
                            {[0, 1, 2].map((i) => (
                              <div
                                key={i}
                                className="w-2 h-2 bg-current rounded-full animate-bounce"
                                style={{ animationDelay: `${i * 0.15}s` }}
                              />
                            ))}
                          </div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <span className="uppercase tracking-wider">Send Message</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
