"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Lightbox({ photo, onClose, onPrev, onNext, hasPrev, hasNext }) {
  if (!photo) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-10 p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Close"
      >
        <FaTimes size={22} />
      </button>

      <button
        type="button"
        onClick={onPrev}
        disabled={!hasPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-2 text-white/80 hover:text-white transition-colors disabled:opacity-25 disabled:pointer-events-none"
        aria-label="Previous image"
      >
        <FaChevronLeft size={28} />
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={!hasNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-2 text-white/80 hover:text-white transition-colors disabled:opacity-25 disabled:pointer-events-none"
        aria-label="Next image"
      >
        <FaChevronRight size={28} />
      </button>

      <motion.div
        className="relative aspect-[3/4] w-[min(calc(100vw-6rem),calc(85vh*0.75))]"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
