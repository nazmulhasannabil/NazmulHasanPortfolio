"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const learningItems = [
  { name: "TypeScript", progress: 75 },
  { name: "PostgreSQL & Prisma", progress: 70 },
  { name: "System Design", progress: 45 },
  { name: "Testing (Jest/Vitest)", progress: 50 },
  { name: "Docker & DevOps", progress: 35 },
];

const CurrentlyLearning = () => {
  const [animated, setAnimated] = useState(false);

  return (
    <section className="py-16">
      <div className="site-container">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm uppercase tracking-widest text-teal-400/80">
            Always growing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Currently <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Technologies I&apos;m actively sharpening to stay ahead in full-stack development.
          </p>
        </motion.div>

        <motion.div
          className="space-y-5 p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setAnimated(true)}
        >
          {learningItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">{item.name}</span>
                <span className="text-xs text-teal-400">{item.progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"
                  initial={{ width: 0 }}
                  animate={{ width: animated ? `${item.progress}%` : 0 }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
