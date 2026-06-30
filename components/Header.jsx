"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "./ui/button";

const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Hobby", path: "/hobby" },
    { name: "Contact", path: "/contact" },
];

const Header = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const closeMenu = () => setOpen(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") closeMenu();
        };
        if (open) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    return (
        <header className="sticky top-4 z-50 mb-2">
            <div className="site-container">
                <div className={`header-bar flex justify-between items-center px-4 sm:px-6 py-3 ${scrolled ? "header-bar-scrolled" : ""}`}>
                    <Link href="/">
                        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                            Nazmul <span className="text-teal-400">Hasan</span>
                        </h1>
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        <nav className="flex items-center gap-8">
                            {links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.path}
                                    className={`${link.path === pathname
                                            ? "text-teal-400 border-b-2 border-teal-400"
                                            : "text-gray-100"
                                        } hover:text-teal-400 transition-all text-sm font-medium`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <Link href="/resume">
                            <Button className="flex items-center gap-2 text-teal-400 border-2 border-teal-400 bg-gray-900/50 hover:bg-teal-400 hover:text-gray-900 px-5 py-2 rounded-xl transition-all duration-300 font-medium text-sm">
                                Resume
                            </Button>
                        </Link>
                    </div>

                    <button
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                        className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                    >
                        {open ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer — rendered above header */}
            {open && (
                <div
                    className="fixed inset-0 z-[100] lg:hidden"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation menu"
                >
                    {/* Backdrop — click anywhere outside to close */}
                    <button
                        type="button"
                        onClick={closeMenu}
                        className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-sm cursor-default"
                        aria-label="Close menu"
                    />

                    {/* Drawer panel */}
                    <nav
                        className="absolute top-0 right-0 z-10 h-full w-[78%] max-w-sm bg-gray-950 border-l border-white/10 shadow-2xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Drawer header with close button */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <h2 className="text-xl font-semibold text-white">
                                Nazmul <span className="text-teal-400">Hasan</span>
                            </h2>
                            <button
                                type="button"
                                onClick={closeMenu}
                                aria-label="Close menu"
                                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-teal-400 hover:text-gray-900 transition-colors"
                            >
                                <FiX size={22} />
                            </button>
                        </div>

                        <ul className="flex flex-col gap-1 p-4 text-lg font-medium flex-1">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.path}
                                        onClick={closeMenu}
                                        className={`block px-4 py-3 rounded-xl transition-colors ${
                                            link.path === pathname
                                                ? "text-teal-400 bg-teal-400/10"
                                                : "text-gray-200 hover:bg-white/5 hover:text-teal-400"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/resume"
                                    onClick={closeMenu}
                                    className={`block px-4 py-3 rounded-xl transition-colors ${
                                        pathname === "/resume"
                                            ? "text-teal-400 bg-teal-400/10"
                                            : "text-gray-200 hover:bg-white/5 hover:text-teal-400"
                                    }`}
                                >
                                    Resume
                                </Link>
                            </li>
                        </ul>

                        <p className="p-6 pt-0 text-xs text-gray-500 leading-relaxed">
                            &ldquo;Be the change you wish to see in the world.&rdquo;
                        </p>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
