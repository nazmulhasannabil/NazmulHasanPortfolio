"use client";
import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import aboutLottie from "../public/lottie/Login.json";

const highlights = [
  { label: "Projects Built", value: "6+" },
  { label: "Stack Focus", value: "MERN + Next" },
  { label: "Graduated", value: "CSE '25" },
];

const About = () => {
  return (
    <section className="py-16">
      <div className="site-container flex flex-col-reverse md:flex-row items-center justify-between gap-8 overflow-hidden">
      {/* Left: Lottie Animation */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Lottie
          animationData={aboutLottie}
          loop={true}
          className="w-full h-full max-w-md mx-auto"
        />
      </motion.div>

      {/* Right: Text Section */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <motion.span
            className="text-sm uppercase tracking-widest text-teal-400/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get to know me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-gray-300 text-center md:text-left">
          I&apos;m a passionate full-stack developer who loves turning ideas into
          polished, production-ready web applications. From MERN stack apps to
          modern Next.js platforms with PostgreSQL and Prisma — I focus on clean
          code, smooth UX, and real-world impact.
        </p>

        <p className="text-base leading-relaxed text-gray-400 text-center md:text-left">
          Quick learner, detail-oriented, and always exploring new tools. Lately
          I&apos;ve been sharpening my skills in TypeScript, serverless databases,
          and animation-driven UI with Framer Motion.
        </p>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-3 gap-4 pt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              className="text-center md:text-left p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "rgba(45,212,191,0.4)" }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-xl sm:text-2xl font-bold text-teal-400">{item.value}</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default About;
