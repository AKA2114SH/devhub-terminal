import { motion } from "framer-motion";
import { Code2, Database, Server, Wrench, Cpu, GitBranch } from "lucide-react";

const groups = [
  {
    title: "Backend",
    icon: Server,
    accent: "cyan",
    items: ["Python", "FastAPI", "Node.js", "Express", "Django", "REST APIs"],
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "DevOps",
    icon: Cpu,
    accent: "matrix",
    items: ["Docker", "Kubernetes", "CI/CD", "Linux"],
    span: "md:col-span-2",
  },
  {
    title: "Database",
    icon: Database,
    accent: "cyan",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Kafka"],
    span: "md:col-span-2",
  },
  {
    title: "Languages",
    icon: Code2,
    accent: "matrix",
    items: ["Python", "JavaScript", "Java", "C"],
    span: "",
  },
  {
    title: "Frontend",
    icon: GitBranch,
    accent: "cyan",
    items: ["React", "HTML/CSS", "Bootstrap"],
    span: "",
  },
  {
    title: "Tools",
    icon: Wrench,
    accent: "matrix",
    items: ["Git", "GitHub", "Postman", "VS Code"],
    span: "md:col-span-2",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-cyan text-sm">// 02</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            The toolkit I rely on to ship reliable backend systems and automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-4">
          {groups.map((g, i) => {
            const Icon = g.icon;
            const isCyan = g.accent === "cyan";
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`glass rounded-2xl p-6 hover-lift relative overflow-hidden group ${g.span}`}
              >
                <div
                  className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity ${
                    isCyan ? "bg-cyan" : "bg-matrix"
                  }`}
                />
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg grid place-items-center glass ${
                      isCyan ? "text-cyan" : "text-matrix"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-mono font-semibold text-lg">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="px-2.5 py-1 rounded-md bg-secondary/60 text-xs font-mono text-muted-foreground"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
