"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating toggle button - fixed top right */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-5 right-5 z-[9999] p-2 rounded-md bg-gray-900 text-white "
      >
        {open ? <FiX size={30} /> : <FiMenu size={30} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex"
          role="dialog"
          aria-modal="true"
        >
          {/* left translucent area covers 40% and closes menu when clicked */}
          <button
            onClick={() => setOpen(false)}
            className="w-[40%] h-full bg-black/30 lg:hidden"
            aria-hidden="true"
          />

          {/* sliding panel - right 60% */}
          <nav
            className="w-[60%] max-w-xs h-full bg-gray-900 text-white shadow-xl p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out"
          >
            {/* Logo */}
            <div className="flex items-center justify-start">
              <h1 className="text-xl font-semibold">
                Nazmul <span className="text-teal-400">Hasan</span>
              </h1>
            </div>

            {/* Menu items */}
            <ul className="flex flex-col gap-4 mt-2 text-lg font-medium">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-gray-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-gray-100"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-gray-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
