import About from "@/components/About";
import Hero from "@/components/Hero";
import SkillComponent from "@/components/SkillsComponent";
import Projects from "./projects/page";

export default function Home() {
  return (
    <section className="h-full">

      <Hero />
      <About />
      <Projects />
      <SkillComponent />
    </section>
  );
}
