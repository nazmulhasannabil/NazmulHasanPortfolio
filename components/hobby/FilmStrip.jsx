"use client";

import Image from "next/image";
import { photos } from "@/lib/photographyData";

const FilmStrip = () => {
  const strip = [...photos, ...photos];

  return (
    <section className="py-12 overflow-hidden">
      <div className="site-container mb-6">
        <span className="text-sm uppercase tracking-widest text-teal-400/80">
          Film roll
        </span>
        <h2 className="text-2xl font-bold mt-1 text-white">
          Raw <span className="gradient-text">Negatives</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

        <div className="film-strip-track flex gap-3 animate-marquee w-max px-4">
          {strip.map((photo, i) => (
            <div
              key={`${photo.id}-${i}`}
              className="relative shrink-0 w-48 h-32 sm:w-64 sm:h-40 rounded-lg overflow-hidden border-2 border-white/10 film-frame"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                sizes="256px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-black/60 px-2 py-1">
                <p className="text-[10px] text-teal-400 font-mono truncate">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmStrip;
