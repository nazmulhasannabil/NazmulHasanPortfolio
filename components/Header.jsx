"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "./ui/button";

const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
];

const Header = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="md:py-4 py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-xl lg:text-4xl font-semibold">
                        Nazmul <span className="text-teal-400">Hasan</span>
                    </h1>
                </Link>

                {/* Desktop Nav + Hire Me */}
                <div className="hidden xl:flex items-center gap-8">
                    <nav className="flex items-center gap-8">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.path}
                                className={`${link.path === pathname
                                        ? "text-teal-400 border-b-2 border-teal-400"
                                        : ""
                                    } hover:text-teal-400 transition-all`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <Link href="/resume">
                        <Button className="bg-teal-400 text-white">Resume</Button>
                    </Link>
                </div>

                {/* Mobile Nav Toggle - stays inside header */}
                <button
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                    className="lg:hidden p-2 rounded-md bg-gray-900 text-white"
                >
                    {open ? <FiX size={28} className="text-white" /> : <FiMenu size={28} className="text-white" />}
                </button>

            </div>

            {/* Mobile Drawer */}
            {open && (
                <div className="fixed inset-0 z-40 flex" role="dialog" aria-modal="true">
                    {/* left translucent area covers 40% */}
                    <button
                        onClick={() => setOpen(false)}
                        className="w-[40%] h-full bg-black/30 lg:hidden"
                        aria-hidden="true"
                    />

                    {/* Drawer Panel */}
                    <nav className="w-[60%] max-w-xs h-full bg-gray-900 text-white shadow-xl p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out">
                        {/* Logo inside drawer */}
                        <div className="flex items-center justify-start">
                            <h1 className="text-xl font-semibold">
                                Nazmul <span className="text-teal-400">Hasan</span>
                            </h1>
                        </div>

                        {/* Menu Items */}
                        <ul className="flex flex-col gap-4 mt-2 text-lg font-medium">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.path}
                                        onClick={() => setOpen(false)}
                                        className={`block px-2 py-2 rounded ${link.path === pathname
                                                ? "text-teal-400"
                                                : "hover:bg-gray-800"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-auto py-2 px-1 text-sm">“Be the change you wish to see in the world.”</p>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
