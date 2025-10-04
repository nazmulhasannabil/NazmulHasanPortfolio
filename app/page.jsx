import About from "@/components/About";
import Photo from "@/components/Photo";
import SkillComponent from "@/components/SkillsComponent";
import Social from "@/components/Social";
import { FaFileDownload } from "react-icons/fa";

export default function Home() {
  return (
    <section className="h-full">
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
              <button className="flex items-center gap-2 text-teal-400 border-2 border-teal-400 hover:bg-teal-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-sm hover:shadow-md">
                <span>Download CV</span>
                <FaFileDownload />
              </button>
              <Social />
            </div>
          </div>

          {/* photo */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
      <About />
      <SkillComponent />
    </section>
  );
}
