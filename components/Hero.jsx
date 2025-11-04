"use client";
import React from "react";
import { motion } from "framer-motion";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { FaFileDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="mx-auto h-full lg:py-24 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center h-full justify-evenly">
        
        {/* text section */}
        <motion.div
          className="text-center lg:text-left mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Software Developer
          </motion.h1>

          <motion.h1
            className="text-3xl mt-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Hello I'm <br />
            <span className="text-teal-400">Nazmul Hasan</span>
          </motion.h1>

          <motion.p
            className="mt-6 min-w-[420px] text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Full-stack developer expert in React, Next.js & Node.js
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col lg:flex-row items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-teal-400 border-2 border-teal-400 hover:bg-teal-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-sm hover:shadow-md"
            >
              <span>Download CV</span>
              <FaFileDownload />
            </motion.button>

            <Social />
          </motion.div>
        </motion.div>

        {/* photo section */}
        <motion.div
          className="px-4 py-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
        >
          <Photo />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
