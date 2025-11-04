"use client";
import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import aboutLottie from "../public/lottie/Login.json";

const About = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 overflow-hidden">
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
          className="w-full h-full"
        />
      </motion.div>

      {/* Right: Text Section */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-teal-400 text-center mb-6 md:mb-24">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-200 text-center md:text-left">
          Passionate web designer and MERN Stack developer. I create clean,
          user-friendly websites that deliver real value. Quick learner,
          detail-oriented, and a team player ready to contribute to impactful projects.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
