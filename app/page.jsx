import About from "@/components/About";
import Hero from "@/components/Hero";
import SkillComponent from "@/components/SkillsComponent";
import WhatIDo from "@/components/WhatIDo";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import CareerCTA from "@/components/CareerCTA";
import Projects from "@/app/projects/page";

export default function Home() {
  return (
    <section className="h-full">
      <Hero />
      <About />
      <WhatIDo />
      <Experience />
      <Education />
      <Projects />
      <SkillComponent />
      <CurrentlyLearning />
      <CareerCTA />
    </section>
  );
}
