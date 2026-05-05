import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-cyan text-sm">// 05</p>
            <h2 className="text-4xl sm:text-5xl font-bold mt-2">
              Let's <span className="gradient-text">connect</span>
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Have a backend system to ship, infrastructure to automate, or just want to talk
              tech? My inbox is always open.
            </p>

            <div className="mt-8 space-y-3 font-mono text-sm">
              <a
                href="mailto:akashkhatale2114@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-cyan transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan" /> akashkhatale2114@gmail.com
              </a>
              <p className="flex items-center gap-3 text-muted-foreground">
                <span className="w-4 h-4 grid place-items-center text-matrix">📍</span>
                Sangamner, Maharashtra, India
              </p>
            </div>

            <div className="flex items-center gap-3 mt-8">
              {[
                { icon: Github, href: "https://github.com/aka2114sh", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/akash-khatale-2a306a261", label: "LinkedIn" },
                { icon: Mail, href: "mailto:akashkhatale2114@gmail.com", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl glass grid place-items-center hover:text-cyan hover:scale-110 hover:glow-cyan transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Portfolio inquiry from ${fd.get("name")}`);
              const body = encodeURIComponent(`${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`);
              window.location.href = `mailto:akashkhatale2114@gmail.com?subject=${subject}&body=${body}`;
              setSent(true);
            }}
            className="glass rounded-2xl p-6 sm:p-8 space-y-4"
          >
            <div>
              <label className="font-mono text-xs text-cyan">name</label>
              <input
                required
                name="name"
                className="mt-1 w-full bg-secondary/40 border border-border rounded-lg px-4 py-2.5 outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-cyan">email</label>
              <input
                required
                type="email"
                name="email"
                className="mt-1 w-full bg-secondary/40 border border-border rounded-lg px-4 py-2.5 outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-cyan">message</label>
              <textarea
                required
                name="message"
                rows={5}
                className="mt-1 w-full bg-secondary/40 border border-border rounded-lg px-4 py-2.5 outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan text-primary-foreground font-semibold hover:scale-105 transition-transform glow-cyan"
            >
              <Send className="w-4 h-4" /> {sent ? "Sent — thanks!" : "Send message"}
            </button>
          </motion.form>
        </div>

        <footer className="mt-24 pt-8 border-t border-border/40 text-center text-xs font-mono text-muted-foreground">
          <span className="text-matrix">$</span> echo "© {new Date().getFullYear()} Akash Khatale — built with React, Tailwind & ☕"
        </footer>
      </div>
    </section>
  );
}
