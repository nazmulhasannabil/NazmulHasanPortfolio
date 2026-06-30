"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const links = [
  { href: "https://github.com/nazmulhasannabil", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/nazmul-hasan-nabil", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://x.com/Nazmul_Hasan09", icon: FaTwitter, label: "Twitter" },
  { href: "mailto:nazmulhasannabil4@gmail.com", icon: FaEnvelope, label: "Email" },
];

const Social = () => {
  return (
    <div className="flex space-x-5">
      {links.map(({ href, icon: Icon, label }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-white transition-colors duration-300"
          aria-label={label}
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon size={24} />
        </motion.a>
      ))}
    </div>
  );
};

export default Social;
