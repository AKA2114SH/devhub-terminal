import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const ROLES = ["Backend Engineer", "Infrastructure Specialist", "Automation Expert"];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = del ? 50 : 100;
    const t = setTimeout(() => {
      const next = del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      setText(next);
      if (!del && next === word) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((p) => p + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

export function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 animate-grid pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass font-mono text-xs text-matrix mb-6">
            <span className="w-2 h-2 rounded-full bg-matrix animate-pulse" />
            available for opportunities
          </div>

          <p className="font-mono text-cyan text-sm sm:text-base mb-4">
            $ whoami
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="gradient-text">Akash Khatale</span>
          </h1>

          <div className="mt-6 font-mono text-xl sm:text-2xl md:text-3xl text-muted-foreground h-10">
            <span className="text-matrix">&gt;</span> {role}
            <span className="text-cyan animate-blink">▍</span>
          </div>

          <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Backend-focused software developer building scalable APIs, distributed systems, and
            automated infrastructure with Python, FastAPI, Docker & Kubernetes.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan text-primary-foreground font-semibold hover:scale-105 transition-transform glow-cyan"
            >
              View Projects <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass font-semibold hover:scale-105 hover:text-matrix transition-all"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-3 ml-2">
              {[
                { icon: Github, href: "https://github.com/aka2114sh" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/akash-khatale-2a306a261" },
                { icon: Mail, href: "mailto:akashkhatale2114@gmail.com" },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg glass grid place-items-center hover:text-cyan hover:scale-110 transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
