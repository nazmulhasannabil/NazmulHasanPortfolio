"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiGit,
} from "react-icons/si";

export default function SkillComponent() {
  const skills = [
    { icon: "/Skills-logo/html.png", title: "HTML", description: "Semantic markup for accessible web pages.", level: "Advanced" },
    { icon: "/Skills-logo/css.png", title: "CSS", description: "Modern layouts, animations & responsive design.", level: "Advanced" },
    { icon: "/Skills-logo/tailwind.png", title: "Tailwind CSS", description: "Utility-first styling at speed.", level: "Advanced" },
    { icon: "/Skills-logo/javascript.png", title: "JavaScript", description: "ES6+ for dynamic web experiences.", level: "Advanced" },
    { iconComponent: SiTypescript, title: "TypeScript", description: "Type-safe JavaScript for scalable apps.", level: "Learning" },
    { icon: "/Skills-logo/react.png", title: "React", description: "Component-driven UI development.", level: "Advanced" },
    { icon: "/Skills-logo/nextjs.png", title: "Next.js", description: "Full-stack React framework for production.", level: "Advanced" },
    { icon: "/Skills-logo/node.png", title: "Node.js", description: "Server-side JavaScript runtime.", level: "Advanced" },
    { icon: "/Skills-logo/express.png", title: "Express.js", description: "Minimal Node.js web framework.", level: "Advanced" },
    { icon: "/Skills-logo/mongodb.png", title: "MongoDB", description: "NoSQL database for flexible data.", level: "Advanced" },
    { iconComponent: SiPostgresql, title: "PostgreSQL", description: "Relational database for robust backends.", level: "Intermediate" },
    { iconComponent: SiPrisma, title: "Prisma", description: "Next-gen ORM for type-safe database access.", level: "Intermediate" },
    { icon: "/Skills-logo/redux.png", title: "Redux", description: "Predictable global state management.", level: "Intermediate" },
    { icon: "/Skills-logo/firebase.png", title: "Firebase", description: "Auth, hosting & real-time services.", level: "Intermediate" },
    { iconComponent: SiGit, title: "Git & GitHub", description: "Version control & collaborative workflows.", level: "Advanced" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-16">
      <div className="site-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm uppercase tracking-widest text-teal-400/80">What I work with</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            Technologies I use to build modern, performant web applications
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.iconComponent;
            return (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center hover:border-teal-400/50 transition-colors duration-300 overflow-hidden"
                variants={card}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-teal-400/0 group-hover:from-teal-400/5 group-hover:to-cyan-400/5 transition-all duration-300" />
                <div className="relative w-20 h-20 flex items-center justify-center mb-3">
                  {Icon ? (
                    <Icon className="w-16 h-16 text-teal-400" />
                  ) : (
                    <Image src={skill.icon} alt={skill.title} width={80} height={80} className="object-contain" />
                  )}
                </div>
                <h3 className="relative text-base sm:text-lg font-semibold text-white">{skill.title}</h3>
                <p className="relative text-gray-400 text-xs mt-1 hidden md:block">{skill.description}</p>
                <span
                  className={`relative mt-3 text-xs font-medium px-2 py-0.5 rounded-full ${
                    skill.level === "Learning"
                      ? "bg-amber-400/10 text-amber-400 border border-amber-400/30"
                      : "bg-teal-400/10 text-teal-400 border border-teal-400/30"
                  }`}
                >
                  {skill.level}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
