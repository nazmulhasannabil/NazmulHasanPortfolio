"use client";
import { motion, useTransform, useVelocity } from "framer-motion";

const FlyingRobot = ({ robotX, robotY }) => {
  const velocityX = useVelocity(robotX);
  const velocityY = useVelocity(robotY);
  const rotate = useTransform(velocityX, [-600, 600], [-18, 18]);
  const tilt = useTransform(velocityY, [-600, 600], [8, -8]);

  return (
    <motion.div
      className="fixed z-40 pointer-events-none"
      style={{
        left: robotX,
        top: robotY,
        translateX: "-50%",
        translateY: "-50%",
        rotate,
        rotateX: tilt,
      }}
    >
      {/* Thruster glow */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-6 h-8 rounded-full bg-cyan-400/40 blur-md"
        animate={{ scaleY: [0.8, 1.2, 0.8], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 80 80"
        className="w-14 h-14 sm:w-20 sm:h-20 drop-shadow-[0_0_12px_rgba(45,212,191,0.6)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Antenna */}
        <line x1="40" y1="8" x2="40" y2="18" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="6" r="3" fill="#22d3ee" className="animate-pulse" />

        {/* Head */}
        <rect x="22" y="18" width="36" height="28" rx="10" fill="#1e293b" stroke="#2dd4bf" strokeWidth="2" />

        {/* Eyes */}
        <circle cx="32" cy="30" r="5" fill="#0f172a" stroke="#2dd4bf" strokeWidth="1.5" />
        <circle cx="48" cy="30" r="5" fill="#0f172a" stroke="#2dd4bf" strokeWidth="1.5" />
        <circle cx="33" cy="29" r="2" fill="#22d3ee" />
        <circle cx="49" cy="29" r="2" fill="#22d3ee" />

        {/* Smile panel */}
        <rect x="30" y="38" width="20" height="4" rx="2" fill="#2dd4bf" opacity="0.6" />

        {/* Body */}
        <rect x="26" y="48" width="28" height="18" rx="6" fill="#1e293b" stroke="#2dd4bf" strokeWidth="2" />

        {/* AI badge */}
        <text x="40" y="60" textAnchor="middle" fill="#2dd4bf" fontSize="8" fontWeight="bold" fontFamily="monospace">
          AI
        </text>

        {/* Arms */}
        <rect x="14" y="50" width="10" height="6" rx="3" fill="#334155" stroke="#2dd4bf" strokeWidth="1.5" />
        <rect x="56" y="50" width="10" height="6" rx="3" fill="#334155" stroke="#2dd4bf" strokeWidth="1.5" />

        {/* Jet wings */}
        <path d="M18 66 L30 58 L30 66 Z" fill="#2dd4bf" opacity="0.5" />
        <path d="M62 66 L50 58 L50 66 Z" fill="#2dd4bf" opacity="0.5" />
      </svg>
    </motion.div>
  );
};

export default FlyingRobot;
