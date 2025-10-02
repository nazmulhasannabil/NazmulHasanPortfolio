"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Projects",
        path: "/projects"
    },
    {
        name: "Contact",
        path: "/contact"
    },
    {
        name: "Resume",
        path: "/resume"
    }
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return <nav className="flex items-center gap-8 ">
        {links.map((link, index) => {
            return (
                <Link key={index} href={link.path} className={`${link.path===pathname && "text-teal-400 border-b-2 border-teal-400"}hover:text-teal-400 transition-all`}>{link.name}</Link>
            );
        })}
    </nav>

}

export default Nav