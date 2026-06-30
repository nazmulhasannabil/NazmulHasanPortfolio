"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Photo = ({ motionValues }) => {
  const { x, y, rotateX, rotateY, glowX, glowY } = motionValues;

  return (
    <div
      className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[380px] mx-auto pointer-events-none"
      style={{ perspective: "1000px" }}
    >
      {/* Border accent follows mouse */}
      <motion.div
        className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 opacity-70"
        style={{ x: glowX, y: glowY }}
      />

      {/* Photo tilts & shifts with mouse */}
      <motion.div
        className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-teal-500/20"
        style={{
          x,
          y,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src="/NazmulHasan.png"
          alt="Nazmul Hasan"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 640px) 280px, 320px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
      </motion.div>

      {/* Status badge */}
      <motion.div
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full bg-gray-900/90 backdrop-blur-md border border-teal-400/40 text-xs sm:text-sm text-teal-400 font-medium shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
        Open to opportunities
      </motion.div>
    </div>
  );
};

export default Photo;
