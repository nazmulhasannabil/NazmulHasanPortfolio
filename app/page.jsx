import About from "@/components/About";
import Hero from "@/components/Hero";
import SkillComponent from "@/components/SkillsComponent";
<<<<<<< HEAD
import Projects from "./projects/page";
=======
import Social from "@/components/Social";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";
>>>>>>> 99d61e324f7a2b1e41a3153f2d6c9fbb38fa3b64

export default function Home() {
  return (
    <section className="h-full">
<<<<<<< HEAD
      <Hero />
=======
      <div className="mx-auto h-full lg:py-32">
        <div className="flex flex-col lg:flex-row items-center h-full justify-evenly">
          {/* text */}
          <div className="text-center lg:text-left mt-6">
            <h1 className="text-lg">Software Developer</h1>
            <h1 className="text-3xl">Hello I'm <br /><span className="text-teal-400">Nazmul Hasan</span></h1>
            <p className="mt-6 min-w-[400px] text-white">Full-stack developer expert in React, Next.js & Node.js
              {/* Scalable solutions with clean, maintainable code */}
            </p>

            <div className="mt-6 flex flex-col lg:flex-row items-center gap-6">
              <Link href="/Nazmul_Hasan_Resume_(Frontend).pdf" target="_blank" download>
                <button className="flex items-center gap-2 text-teal-400 border-2 border-teal-400 hover:bg-teal-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-sm hover:shadow-md">
                  <span>Download CV</span>
                  <FaFileDownload />
                </button>
              </Link>
              <Social />
            </div>
          </div>

          {/* photo */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
>>>>>>> 99d61e324f7a2b1e41a3153f2d6c9fbb38fa3b64
      <About />
      <Projects />
      <SkillComponent />
    </section>
  );
}
