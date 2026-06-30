"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaCamera, FaLaptopCode, FaStore } from "react-icons/fa";

const experiences = [
  {
    icon: FaLaptopCode,
    role: "Full-Stack Developer",
    org: "Self-Directed / Freelance",
    period: "2023 – Present",
    description:
      "Building production web applications — inventory systems, job portals, e-commerce platforms, and client websites using MERN stack and Next.js.",
    highlights: ["6+ deployed projects", "Next.js & PostgreSQL", "Client deliverables"],
  },
  {
    icon: FaStore,
    role: "Founder & Owner",
    org: "Paperman — Handmade Notebook Business",
    period: "2021 – 2023",
    description:
      "Started and ran a handmade notebook brand — handling product design, marketing, sales, and customer relationships.",
    highlights: ["Entrepreneurship", "Brand building", "Customer management"],
  },
  {
    icon: FaCamera,
    role: "Former President",
    org: "MEC Photography Club",
    period: "2022 – 2023",
    description:
      "Led club operations, organized photography events and workshops, and managed a team of enthusiastic student photographers.",
    highlights: ["Leadership", "Event planning", "Team management"],
  },
  {
    icon: FaBriefcase,
    role: "Organizing Secretary",
    org: "MEC Computer Club",
    period: "2021 – 2022",
    description:
      "Coordinated tech events, coding workshops, and hackathon-style activities to grow the campus developer community.",
    highlights: ["Event coordination", "Tech community", "Workshop hosting"],
  },
];

const Experience = () => {
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
            My journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            Beyond code — leadership roles and real-world experience that shaped
            how I work and collaborate.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-400/60 via-teal-400/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.role + exp.org}
                  className="relative pl-12 sm:pl-14"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 border-2 border-teal-400/50 flex items-center justify-center z-10">
                    <Icon className="text-teal-400 text-sm sm:text-base" />
                  </div>

                  <motion.div
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-400/30 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                      <span className="text-xs sm:text-sm text-teal-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-teal-400/80 mb-2">{exp.org}</p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
