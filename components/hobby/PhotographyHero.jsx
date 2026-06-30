"use client";

import { motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";
import { Aperture } from "lucide-react";
import { hobbyStats } from "@/lib/photographyData";

const PhotographyHero = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Film grain overlay */}
      <div className="pointer-events-none absolute inset-0 photo-grain opacity-30" />

      <div className="site-container relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-teal-400/80 mb-4">
              <FaCamera className="text-teal-400" />
              Beyond the code
            </span>

            <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 border-l-4 border-l-teal-400 max-w-lg">
              <p className="text-teal-400 font-semibold text-lg mb-1">Hobby</p>
              <p className="text-gray-400 text-sm italic leading-relaxed">
                an activity that you do for pleasure when you are not working
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Capturing moments through the{" "}
              <span className="gradient-text">lens</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Photography is my creative escape — framing light, emotion, and
              stories. Former President of the MEC Photography Club, I love
              exploring portraits, street scenes, and the raw beauty of Bangladesh.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {hobbyStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <p className="text-xl font-bold text-teal-400">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Viewfinder frame */}
          <motion.div
            className="relative mx-auto w-full max-w-md aspect-[4/5]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="viewfinder-corners absolute inset-0 z-10 pointer-events-none" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-teal-500/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1452588677426-936a948b75a0?w=600&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/20" />

              {/* Camera HUD overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between text-[10px] font-mono text-teal-400/80">
                <span>REC ●</span>
                <span>ISO 400</span>
                <span>f/2.8</span>
                <span>1/250</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-white">
                  <Aperture className="text-teal-400 w-4 h-4" />
                  <span className="text-sm font-medium">Through My Viewfinder</span>
                </div>
                <p className="text-xs text-gray-400 mt-1 font-mono">
                  Every frame tells a story waiting to be seen
                </p>
              </div>
            </div>

            {/* Shutter flash on load */}
            <motion.div
              className="absolute inset-0 bg-white rounded-2xl pointer-events-none"
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhotographyHero;
