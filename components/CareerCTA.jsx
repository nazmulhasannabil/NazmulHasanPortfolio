"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

const CareerCTA = () => {
  return (
    <section className="py-16">
      <motion.div
        className="site-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative overflow-hidden rounded-3xl border border-teal-400/20 bg-gradient-to-br from-teal-400/10 via-gray-900/80 to-cyan-400/5 p-8 sm:p-12 text-center">
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl mx-auto">
            <motion.span
              className="inline-block text-sm uppercase tracking-widest text-teal-400/80 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Let&apos;s connect
            </motion.span>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to build something{" "}
              <span className="gradient-text">great together?</span>
            </h2>

            <p className="text-gray-300 mb-8 leading-relaxed">
              I&apos;m open to full-time roles, freelance projects, and
              collaborations. Whether you need a full-stack developer or a
              frontend specialist — let&apos;s talk.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(45,212,191,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-teal-400 text-gray-900 font-semibold px-8 py-3 rounded-xl hover:bg-teal-300 transition-colors"
                >
                  Get In Touch
                  <FaArrowRight className="text-sm" />
                </motion.button>
              </Link>

              <a href="mailto:nazmulhasannabil4@gmail.com">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 border-2 border-teal-400/50 text-teal-400 px-8 py-3 rounded-xl hover:bg-teal-400/10 transition-colors"
                >
                  <FaEnvelope />
                  nazmulhasannabil4@gmail.com
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CareerCTA;
