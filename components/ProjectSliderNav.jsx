"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const ProjectSliderNav = ({ swiper, activeIndex, total }) => {
  return (
    <div className="flex items-center gap-4 mt-6">
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => swiper?.slidePrev()}
        aria-label="Previous project"
        className="group w-12 h-12 rounded-xl border border-teal-400/30 bg-white/5 backdrop-blur-sm flex items-center justify-center text-teal-400 hover:bg-teal-400 hover:text-gray-900 hover:border-teal-400 transition-all duration-300"
      >
        <ChevronLeft size={22} strokeWidth={2.5} />
      </motion.button>

      <div className="flex flex-col items-center min-w-[72px]">
        <span className="text-xs uppercase tracking-widest text-gray-500">Project</span>
        <span className="text-lg font-bold text-teal-400">
          {String(activeIndex + 1).padStart(2, "0")}
          <span className="text-gray-500 font-normal mx-1">/</span>
          {String(total).padStart(2, "0")}
        </span>
      </div>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => swiper?.slideNext()}
        aria-label="Next project"
        className="group w-12 h-12 rounded-xl border border-teal-400/30 bg-white/5 backdrop-blur-sm flex items-center justify-center text-teal-400 hover:bg-teal-400 hover:text-gray-900 hover:border-teal-400 transition-all duration-300"
      >
        <ChevronRight size={22} strokeWidth={2.5} />
      </motion.button>
    </div>
  );
};

export default ProjectSliderNav;
