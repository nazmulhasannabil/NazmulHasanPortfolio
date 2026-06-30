"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";
import { photos, photoCategories } from "@/lib/photographyData";

const PhotoGallery = ({ onSelect, activeCategory, setActiveCategory }) => {
  const filtered =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16">
      <div className="site-container">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm uppercase tracking-widest text-teal-400/80">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Selected <span className="gradient-text">Frames</span>
          </h2>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {photoCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "text-gray-900"
                  : "text-gray-300 hover:text-teal-400 border border-white/10 hover:border-teal-400/30"
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="photoCategory"
                  className="absolute inset-0 bg-teal-400 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Bento grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((photo, index) => (
              <motion.button
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                onClick={() => onSelect(photo)}
                className={`group relative overflow-hidden rounded-xl border border-white/10 cursor-pointer ${photo.span}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Viewfinder on hover */}
                <div className="viewfinder-corners-sm absolute inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">{photo.title}</p>
                  <p className="text-teal-400 text-xs flex items-center gap-1 mt-0.5">
                    <FaMapMarkerAlt size={10} />
                    {photo.location}
                  </p>
                </div>

                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-[10px] text-teal-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  {photo.id}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export const PhotoLightbox = ({ photo, onClose, onPrev, onNext, hasPrev, hasNext }) => {
  if (!photo) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-teal-400 hover:text-gray-900 transition-colors"
        aria-label="Close"
      >
        <FaTimes />
      </button>

      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 z-10 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-teal-400 hover:text-gray-900 transition-colors"
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 z-10 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-teal-400 hover:text-gray-900 transition-colors"
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      )}

      <motion.div
        className="relative max-w-5xl w-full grid md:grid-cols-5 gap-6 items-center"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:col-span-3 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
          <Image src={photo.src} alt={photo.title} fill className="object-cover" sizes="80vw" priority />
          <div className="viewfinder-corners absolute inset-4 pointer-events-none opacity-50" />
        </div>

        <div className="md:col-span-2 space-y-4">
          <span className="text-teal-400 font-mono text-sm">{photo.id}</span>
          <h3 className="text-3xl font-bold text-white">{photo.title}</h3>
          <p className="text-gray-400 flex items-center gap-2">
            <FaMapMarkerAlt className="text-teal-400" />
            {photo.location}
          </p>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 font-mono text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Category</span>
              <span className="text-teal-400">{photo.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Camera</span>
              <span className="text-white">{photo.camera}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Lens</span>
              <span className="text-white">{photo.lens}</span>
            </div>
          </div>

          <p className="text-gray-500 text-sm italic">
            &ldquo;Photography is the story I fail to put into words.&rdquo;
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhotoGallery;
