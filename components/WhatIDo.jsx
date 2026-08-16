"use client";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobileAlt, FaRocket } from "react-icons/fa";

const services = [
  {
    icon: FaCode,
    title: "Frontend Development",
    description:
      "Responsive, interactive UIs with React, Next.js, TypeScript, and Tailwind — built for performance and clear UX.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Development",
    description:
      "Cross-platform Flutter apps with real workflows — booking, auth, data handling, and REST API integration.",
    tags: ["Flutter", "Dart", "Firebase", "REST"],
  },
  {
    icon: FaServer,
    title: "Backend & APIs",
    description:
      "RESTful APIs and data layers with Node.js, Express, Spring Boot, MongoDB, PostgreSQL, Prisma, and Firebase.",
    tags: ["Node.js", "Spring Boot", "MongoDB", "Prisma"],
  },
  {
    icon: FaRocket,
    title: "Product Delivery",
    description:
      "End-to-end features from scoping to deployment — collaborating with design and product, plus AI-assisted workflows.",
    tags: ["Deployment", "AI tooling", "Iteration"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const WhatIDo = () => {
  return (
    <section className="py-16">
      <div className="site-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm uppercase tracking-widest text-teal-400/80">
            What I offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            From web and mobile delivery to AI-assisted engineering — here&apos;s how
            I bring value to products and teams.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-5 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={card}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-400/40 transition-colors duration-300 overflow-hidden"
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/5 group-hover:to-cyan-400/5 transition-all duration-300" />
                <div className="relative flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-teal-400/10 border border-teal-400/30 flex items-center justify-center">
                    <Icon className="text-teal-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;
