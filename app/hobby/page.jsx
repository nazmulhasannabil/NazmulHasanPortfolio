"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Gallery from "./components/gallery";
import Lightbox from "./components/lightbox";
import { photoCategories, photos } from "./data";

const VALID_CATS = photoCategories.filter((c) => c !== "All");

function GalleryPage() {
  const searchParams = useSearchParams();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const catParam = searchParams.get("cat");
  const activeCategory =
    catParam && VALID_CATS.includes(catParam) ? catParam : "All";

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
    <>
      <Gallery activeCategory={activeCategory} onSelect={setSelectedPhoto} />

      <AnimatePresence>
        {selectedPhoto && (
          <Lightbox
            photo={selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
            onPrev={goPrev}
            onNext={goNext}
            hasPrev={currentIndex > 0}
            hasNext={currentIndex < filtered.length - 1}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default function HobbyPage() {
  return (
    <Suspense fallback={null}>
      <GalleryPage />
    </Suspense>
  );
}
