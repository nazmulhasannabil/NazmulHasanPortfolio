"use client";
import React, { useRef } from "react";
import { motion, useSpring } from "framer-motion";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { FaFileDownload } from "react-icons/fa";
import Link from "next/link";

const recentStack = [
  "Next.js 15",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Framer Motion",
];

const spring = { damping: 25, stiffness: 180 };
const glowSpring = { damping: 30, stiffness: 120 };

const Hero = () => {
  const heroRef = useRef(null);

  const x = useSpring(0, spring);
  const y = useSpring(0, spring);
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const glowX = useSpring(0, glowSpring);
  const glowY = useSpring(0, glowSpring);

  const motionValues = { x, y, rotateX, rotateY, glowX, glowY };

  const handleMouseMove = (e) => {
    const el = heroRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) - rect.width / 2) / (rect.width / 2);
    const normY = ((e.clientY - rect.top) - rect.height / 2) / (rect.height / 2);

    x.set(normX * 14);
    y.set(normY * 14);
    rotateX.set(-normY * 10);
    rotateY.set(normX * 10);
    glowX.set(normX * 18);
    glowY.set(normY * 18);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(0);
    glowY.set(0);
  };

  return (
    <div
      ref={heroRef}
      className="site-container relative min-h-[520px] lg:min-h-[600px] h-full lg:py-16 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center h-full justify-evenly gap-10 lg:gap-6">
        {/* text section */}
        <motion.div
          className="text-center lg:text-left mt-6 max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-400 text-sm mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Full-Stack Developer
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hello, I&apos;m{" "}
            <span className="gradient-text">Nazmul Hasan</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            BSc CSE graduate building scalable full-stack apps with{" "}
            <span className="text-white font-medium">React, Next.js & Node.js</span>.
            Recently diving deep into{" "}
            <span className="text-teal-400">TypeScript, PostgreSQL & Prisma</span>.
          </motion.p>

          {/* Scrolling tech tags */}
          <motion.div
            className="mt-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="flex gap-3 animate-marquee whitespace-nowrap">
              {[...recentStack, ...recentStack].map((tech, i) => (
                <span
                  key={i}
                  className="inline-block px-3 py-1 text-xs sm:text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <Link href="/Nazmul_Hasan_Resume_(Frontend).pdf" target="_blank" download>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(45,212,191,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-teal-400 border-2 border-teal-400 hover:bg-teal-400 hover:text-gray-900 px-6 py-3 rounded-xl transition-all duration-300 font-medium"
              >
                <span>Download CV</span>
                <FaFileDownload />
              </motion.button>
            </Link>

            <Social />
          </motion.div>
        </motion.div>

        {/* photo section */}
        <motion.div
          className="px-4 py-4"
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <Photo motionValues={motionValues} />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
