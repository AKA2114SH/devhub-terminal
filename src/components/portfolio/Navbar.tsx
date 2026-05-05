import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(960px,92%)]">
      <nav
        className={`glass-strong rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all ${
          scrolled ? "glow-cyan" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-mono font-bold">
          <Terminal className="w-5 h-5 text-cyan" />
          <span className="text-sm sm:text-base">
            <span className="text-matrix">~/</span>akash
            <span className="text-cyan animate-blink">_</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-cyan hover:bg-secondary/60 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-1.5 rounded-md bg-cyan text-primary-foreground font-medium text-sm hover:scale-105 transition-transform"
        >
          Hire me
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-cyan font-mono text-xl"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "×" : "≡"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 font-mono text-sm">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-muted-foreground hover:text-cyan hover:bg-secondary/60"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
