"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const education = [
  {
    icon: FaGraduationCap,
    degree: "BSc in Computer Science & Engineering",
    institution: "Dhaka University Technology Unit, MEC",
    period: "2019 – 2025",
    details:
      "Graduated with a strong foundation in algorithms, data structures, software engineering, and web technologies. Session 2019–20.",
    focus: ["Software Engineering", "Web Development", "Data Structures"],
  },
  {
    icon: FaSchool,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka College, Dhaka",
    period: "2017 – 2019",
    details:
      "Science group with focus on mathematics and physics — the starting point of my journey into technology.",
    focus: ["Science Group", "Mathematics"],
  },
];

const Education = () => {
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
            Academic background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.degree}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-400/30 transition-colors duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/5 rounded-full blur-2xl group-hover:bg-teal-400/10 transition-all duration-300" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-teal-400/10 border border-teal-400/30 flex items-center justify-center">
                      <Icon className="text-teal-400 text-lg" />
                    </div>
                    <span className="text-sm text-teal-400 font-medium">{edu.period}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                  <p className="text-sm text-teal-400/80 mb-3">{edu.institution}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{edu.details}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.focus.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-0.5 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
