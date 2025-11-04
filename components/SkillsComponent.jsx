"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SkillComponent() {
  const skills = [
    { icon: "/Skills-logo/html.png", title: "HTML", description: "Markup language for web pages.", level: "Advance" },
    { icon: "/Skills-logo/css.png", title: "CSS", description: "Style sheet language for HTML.", level: "Advance" },
    { icon: "/Skills-logo/bootstrap.png", title: "Bootstrap", description: "CSS framework for responsive web design.", level: "Intermediate" },
    { icon: "/Skills-logo/tailwind.png", title: "Tailwind CSS", description: "Highly customizable CSS framework.", level: "Advance" },
    { icon: "/Skills-logo/javascript.png", title: "JavaScript", description: "Programming language for the web.", level: "Advance" },
    { icon: "/Skills-logo/react.png", title: "React", description: "JavaScript library for building UIs.", level: "Advance" },
    { icon: "/Skills-logo/nextjs.png", title: "Next.js", description: "React framework for production apps.", level: "Intermediate" },
    { icon: "/Skills-logo/node.png", title: "Node.js", description: "JavaScript runtime environment.", level: "Intermediate" },
    { icon: "/Skills-logo/express.png", title: "Express.js", description: "Fast Node.js web framework.", level: "Intermediate" },
    { icon: "/Skills-logo/mongodb.png", title: "MongoDB", description: "NoSQL database for modern apps.", level: "Intermediate" },
    { icon: "/Skills-logo/redux.png", title: "Redux", description: "A JS library for maintain global state management", level: "Intermediate" },
    { icon: "/Skills-logo/firebase.png", title: "Firebase", description: "Backend services for web and mobile apps.", level: "Intermediate" },
  ];

  // Motion Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1, // stagger delay for children
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-teal-400">Skills</h1>
          <p className="text-gray-300 mt-2">Here are some technologies that I use</p>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-teal-400 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              variants={card}
            >
              <div className="w-32 h-32 flex items-center justify-center mb-4">
                <Image src={skill.icon} alt={skill.title} width={100} height={100} />
              </div>
              <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              <p className="text-gray-400 text-sm mt-2 hidden md:block">{skill.description}</p>
              <p className="mt-3 text-xs md:text-sm font-medium text-teal-400">
                <span className="hidden md:block">Level:</span> {skill.level}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
