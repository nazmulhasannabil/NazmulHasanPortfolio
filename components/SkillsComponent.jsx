import Image from "next/image";

export default function SkillComponent() {
  const skills = [
    {
      icon: "/Skills-logo/html.png",
      title: "HTML",
      description: "Markup language for web pages.",
      level: "Advance",
    },
    {
      icon: "/Skills-logo/css.png",
      title: "CSS",
      description: "Style sheet language for HTML.",
      level: "Advance",
    },
    {
      icon: "/Skills-logo/bootstrap.png",
      title: "Bootstrap",
      description: "CSS framework for responsive web design.",
      level: "Intermediate",
    },
    {
      icon: "/Skills-logo/tailwind.png",
      title: "Tailwind CSS",
      description: "Highly customizable CSS framework.",
      level: "Advance",
    },
    {
      icon: "/Skills-logo/javascript.png",
      title: "JavaScript",
      description: "Programming language for the web.",
      level: "Advance",
    },
    {
      icon: "/Skills-logo/react.png",
      title: "React",
      description: "JavaScript library for building UIs.",
      level: "Advance",
    },
    {
      icon: "/Skills-logo/nextjs.png",
      title: "Next.js",
      description: "React framework for production apps.",
      level: "Intermediate",
    },
    {
      icon: "/Skills-logo/node.png",
      title: "Node.js",
      description: "JavaScript runtime environment.",
      level: "Intermediate",
    },
    {
      icon: "/Skills-logo/express.png",
      title: "Express.js",
      description: "Fast Node.js web framework.",
      level: "Intermediate",
    },
    {
      icon: "/Skills-logo/mongodb.png",
      title: "MongoDB",
      description: "NoSQL database for modern apps.",
      level: "Intermediate",
    },
    {
      icon: "/Skills-logo/redux.png",
      title: "Redux",
      description: "A JS library for maintain global state management",
      level: "Intermediate",
    },
    {
      icon: "/Skills-logo/firebase.png",
      title: "Firebase",
      description: "Backend services for web and mobile apps.",
      level: "Intermediate",
    },
  ];

  return (
    <section className=" py-16">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-teal-400">Skills</h1>
          <p className="text-gray-300 mt-2">
            Here are some technologies that I use
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
             className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"

            >
              <div className="w-32 h-32 flex items-center justify-center mb-4 ">
                <Image
                  src={skill.icon}
                  alt={skill.title}
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{skill.description}</p>
              <p className="mt-3 text-sm font-medium text-teal-400">
                Level: {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
