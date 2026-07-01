"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Libre_Baskerville } from "next/font/google";
import { aboutIntro, aboutImages, awards, socialLinks } from "../data";

const sectionTitle = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
});

export default function AboutContent() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <>
      <section className="px-6 sm:px-10 lg:px-16 xl:px-24 pt-14 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
          <h1
            className={`${sectionTitle.className} text-2xl sm:text-3xl lg:text-[2rem] leading-snug`}
          >
            About Nazmul Hasan
          </h1>
          <p className="text-sm sm:text-[15px] leading-[1.85] text-neutral-700 max-w-xl lg:ml-auto">
            {aboutIntro}
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {aboutImages.map((image) => (
          <div key={image.src} className="relative aspect-[5/6] sm:aspect-[4/5] bg-neutral-100">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </section>

      <section className="px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className={`${sectionTitle.className} text-xl sm:text-2xl mb-6`}>
              Awards &amp; Accolades
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-neutral-700">
              {awards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:gap-16">
            {socialLinks.map((social) => (
              <div key={social.label}>
                <h2 className={`${sectionTitle.className} text-xl sm:text-2xl mb-3`}>
                  {social.label}
                </h2>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-700 hover:text-black transition-colors break-all"
                >
                  {social.display}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16 lg:py-20 text-center">
        <p className="text-sm text-neutral-600 mb-6">
          Get notified with new projects, frames and stories.
        </p>
        {submitted ? (
          <p className="text-sm text-neutral-800">Thanks — you&apos;re on the list.</p>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-0 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="flex-1 px-4 py-3 text-sm bg-neutral-100 text-black placeholder:text-neutral-400 focus:outline-none focus:bg-neutral-200"
            />
            <button
              type="submit"
              className="px-6 py-3 text-[11px] font-medium tracking-[0.2em] uppercase bg-black text-white hover:bg-neutral-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </section>
    </>
  );
}
