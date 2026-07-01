"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Playfair_Display } from "next/font/google";
import { FiMenu, FiX } from "react-icons/fi";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const categoryLinks = [
  { label: "STREET", href: "/hobby?cat=Street", cat: "Street" },
  { label: "NATURE", href: "/hobby?cat=Nature", cat: "Nature" },
  { label: "BIRD", href: "/hobby?cat=Bird", cat: "Bird" },
];

function HeaderInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeCat = searchParams.get("cat");
  const isAbout = pathname === "/hobby/about";
  const isGallery = pathname === "/hobby";
  const [open, setOpen] = useState(false);

  const linkClass = (active) =>
    `text-[11px] xl:text-xs font-medium tracking-[0.2em] uppercase transition-colors ${
      active ? "text-black" : "text-neutral-500 hover:text-black"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="relative flex items-center justify-between px-5 sm:px-8 lg:px-12 h-16 lg:h-[72px]">
        <div className="hidden lg:block w-[200px]" aria-hidden="true" />

        <Link
          href="/hobby"
          className={`absolute left-1/2 -translate-x-1/2 ${playfair.className} text-base sm:text-lg lg:text-[1.35rem] font-bold tracking-[0.12em] text-black uppercase whitespace-nowrap`}
        >
          Nazmul Hasan
        </Link>

        <nav className="hidden lg:flex items-center justify-end gap-5 xl:gap-7 w-[200px] xl:w-auto flex-1 lg:flex-none">
          {categoryLinks.map((link) => (
            <Link
              key={link.cat}
              href={link.href}
              className={linkClass(isGallery && activeCat === link.cat)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/hobby/about" className={linkClass(isAbout)}>
            About
          </Link>
          <Link href="/" className={linkClass(false)}>
            Home
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-black"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-white px-5 py-4 flex flex-col gap-3">
          {categoryLinks.map((link) => (
            <Link
              key={link.cat}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-left text-xs font-medium tracking-[0.2em] uppercase ${
                isGallery && activeCat === link.cat ? "text-black" : "text-neutral-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/hobby/about"
            onClick={() => setOpen(false)}
            className={`text-xs font-medium tracking-[0.2em] uppercase ${
              isAbout ? "text-black" : "text-neutral-500"
            }`}
          >
            About
          </Link>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500"
          >
            Home
          </Link>
        </nav>
      )}
    </header>
  );
}

export default function Header() {
  return (
    <Suspense fallback={<header className="h-16 lg:h-[72px] bg-white" />}>
      <HeaderInner />
    </Suspense>
  );
}
