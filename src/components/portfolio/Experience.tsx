import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    period: "2022 — Present",
    title: "Software Developer",
    org: "The Baap Company",
    points: [
      "Designed and shipped scalable RESTful APIs using FastAPI and Node.js for production backend systems.",
      "Built and optimized database-driven applications on PostgreSQL & MySQL with normalized schemas.",
      "Implemented data processing pipelines with Python and Pandas, reducing manual effort.",
      "Integrated React frontends with backend services across inventory and data-management products.",
    ],
  },
  {
    icon: Briefcase,
    period: "Aug 2022 — 2025",
    title: "Software Engineering Intern",
    org: "The Baap Company",
    points: [
      "Contributed to internal tools, task scheduling services and distributed system experiments.",
      "Collaborated on Kafka-based messaging prototypes and WhatsApp API integrations.",
    ],
  },
  {
    icon: GraduationCap,
    period: "2022 — Present",
    title: "Bachelor of Computer Applications (BCA)",
    org: "University of Mysore",
    points: ["Information Technology — focus on systems, databases, and software engineering."],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-cyan text-sm">// 03</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            <span className="gradient-text">Journey</span>.log
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-matrix to-transparent" />

          {items.map((it, i) => {
            const Icon = it.icon;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: left ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`relative mb-12 sm:w-1/2 pl-12 sm:pl-0 ${
                  left ? "sm:pr-10 sm:mr-auto sm:text-right" : "sm:pl-10 sm:ml-auto"
                }`}
              >
                <div
                  className={`absolute top-1 w-8 h-8 rounded-full glass-strong grid place-items-center text-cyan glow-cyan ${
                    left ? "left-0 sm:left-auto sm:-right-4" : "left-0 sm:-left-4"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="glass rounded-2xl p-6 hover-lift">
                  <p className="font-mono text-xs text-matrix">{it.period}</p>
                  <h3 className="text-xl font-semibold mt-1">{it.title}</h3>
                  <p className="text-cyan text-sm font-mono">{it.org}</p>
                  <ul
                    className={`mt-4 space-y-2 text-sm text-muted-foreground ${
                      left ? "sm:text-right" : ""
                    }`}
                  >
                    {it.points.map((p, j) => (
                      <li key={j}>— {p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
