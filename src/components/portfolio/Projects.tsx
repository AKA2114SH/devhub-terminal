import { motion } from "framer-motion";
import { Github, ExternalLink, Boxes, ListChecks, Server, MessageSquare } from "lucide-react";

const projects = [
  {
    icon: Boxes,
    title: "Inventory & Billing System",
    desc: "FastAPI + PostgreSQL backend for product, sales and inventory management with normalized schema and full CRUD.",
    tags: ["FastAPI", "PostgreSQL", "Python"],
    code: "https://github.com/aka2114sh",
    demo: "#",
  },
  {
    icon: ListChecks,
    title: "Full-Stack To-Do App",
    desc: "Task management platform built with React, Node.js and PostgreSQL — create, update, delete and track status.",
    tags: ["React", "Node.js", "PostgreSQL"],
    code: "https://github.com/aka2114sh",
    demo: "https://aka2114sh.github.io/portfolio-website/",
  },
  {
    icon: Server,
    title: "REST API Services",
    desc: "Multiple FastAPI services with auth, validation, structured responses and a focus on performance & clean architecture.",
    tags: ["FastAPI", "Auth", "Pydantic"],
    code: "https://github.com/aka2114sh",
    demo: "#",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp API Integration",
    desc: "Messaging integration prototype using Kafka clusters for distributed event processing and reliable delivery.",
    tags: ["Kafka", "Python", "Distributed"],
    code: "https://github.com/aka2114sh",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-cyan text-sm">// 04</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Selected <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-7 hover-lift group relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-cyan blur-3xl opacity-10 group-hover:opacity-25 transition-opacity" />
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl glass-strong grid place-items-center text-cyan">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mt-5 group-hover:text-cyan transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-secondary/60 text-xs font-mono text-matrix"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-strong text-sm font-medium hover:text-cyan hover:scale-105 transition-all"
                  >
                    <Github className="w-4 h-4" /> View Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-matrix text-accent-foreground text-sm font-medium hover:scale-105 transition-transform"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
