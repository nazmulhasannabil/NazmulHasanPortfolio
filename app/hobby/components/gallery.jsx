"use client";

import Image from "next/image";
import { photos } from "../data";

export default function Gallery({ activeCategory, onSelect }) {
  const filtered =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {filtered.map((photo) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => onSelect(photo)}
            className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 focus:outline-none"
            aria-label={`View ${photo.title}`}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
