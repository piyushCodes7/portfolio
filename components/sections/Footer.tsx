export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#050508] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-[0.7rem] text-faint tracking-widest">
          <span className="text-accent-cyan">piyushCodes7</span> — Piyush Sharma
        </div>
        <div className="font-mono text-[0.65rem] text-faint tracking-widest">
          Built with Next.js · Tailwind · ❤️
        </div>
        <div className="font-mono text-[0.65rem] text-faint tracking-widest">
          © {new Date().getFullYear()} Piyush Sharma
        </div>
      </div>
    </footer>
  );
}
