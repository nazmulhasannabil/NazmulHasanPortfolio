"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PhotographyHero from "@/components/hobby/PhotographyHero";
import PhotoGallery, { PhotoLightbox } from "@/components/hobby/PhotoGallery";
import FilmStrip from "@/components/hobby/FilmStrip";
import { photos } from "@/lib/photographyData";

export default function HobbyPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filtered =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const currentIndex = selectedPhoto
    ? filtered.findIndex((p) => p.id === selectedPhoto.id)
    : -1;

  const goNext = useCallback(() => {
    if (currentIndex < filtered.length - 1) {
      setSelectedPhoto(filtered[currentIndex + 1]);
    }
  }, [currentIndex, filtered]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedPhoto(filtered[currentIndex - 1]);
    }
  }, [currentIndex, filtered]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedPhoto) return;
      if (e.key === "Escape") setSelectedPhoto(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedPhoto, goNext, goPrev]);

  return (
    <main className="min-h-screen pb-16">
      <PhotographyHero />
      <FilmStrip />
      <PhotoGallery
        onSelect={setSelectedPhoto}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Philosophy section */}
      <section className="py-16">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-3xl border border-teal-400/20 bg-gradient-to-br from-teal-400/5 via-gray-900/80 to-cyan-400/5 p-8 sm:p-12 text-center">
            <div className="absolute inset-0 photo-grain opacity-20 pointer-events-none" />
            <blockquote className="relative text-xl sm:text-2xl font-light text-gray-200 leading-relaxed max-w-2xl mx-auto">
              &ldquo;I don&apos;t take photographs — I capture emotions frozen in time.
              Every click is a pause button on a moment that will never repeat.&rdquo;
            </blockquote>
            <p className="relative mt-4 text-teal-400 text-sm font-medium">
              — Nazmul Hasan, Photographer
            </p>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedPhoto && (
          <PhotoLightbox
            photo={selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
            onPrev={goPrev}
            onNext={goNext}
            hasPrev={currentIndex > 0}
            hasNext={currentIndex < filtered.length - 1}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
