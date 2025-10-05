import Social from "@/components/Social";
import React from "react";

const Resume = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-teal-400">Nazmul Hasan</h1>
          <p className="mt-2">Phone: 01881649665 | Email: nazmulhasannabil4@gmail.com</p>
          <Social className="flex items-center justify-center" />
        </div>

        {/* Objective */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-400 mb-2">Objective</h2>
          <p className="text-white leading-relaxed">
            I am a recent Computer Science graduate (BSc in CSE, June 2025) with a strong interest in becoming a Frontend Developer. I seek an opportunity to apply my foundational skills in HTML, CSS, JavaScript, React, and Next.js. Eager to contribute to real-world projects, learn from experienced developers, and grow into a professional frontend engineer with strong UI/UX design skills through hands-on experience and collaboration.
          </p>
        </div>

        {/* Technical Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-400 mb-2">Technical Skills</h2>
          <ul className="list-disc list-inside space-y-1 text-white">
            <li><strong>Programming Languages:</strong> Javascript, Python(basic), C, C++, HTML5, CSS3, SCSS</li>
            <li><strong>Frameworks & Libraries:</strong> ReactJs, NextJS, Redux, ExpressJs, Bootstrap5, TailwindCSS, Ant Design, MaterialUI, React query, socket.io</li>
            <li><strong>Database:</strong> noSQL(MongoDb), SQL(MySQL)</li>
            <li><strong>Tools & Services:</strong> Visual Studio Code, Firebase, Netlify, Vercel, Git/GitHub, Jira, Trello</li>
            <li><strong>Technologies:</strong> NodeJs, RestAPI, web-socket</li>
            <li><strong>Interpersonal Skills:</strong> Problem-Solving, Teamwork & Collaboration, Adaptability</li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-400 mb-2">Projects</h2>
          <ul className="list-disc list-inside space-y-1 text-white">
            <li><strong>Somokounik</strong> – Civil Engineering Firm Website<br/> Tech: ReactJS, TailwindCSS, DaisyUI, Vite</li>
            <li><strong>Dental Pavilion</strong>-Dental Clinic Website<br/> Tech: HTML, JavaScript, Bootstrap, DaisyUI, Email.js</li>
            <li><strong>Sip & Savor</strong><br/> Tech: ReactJS, TailwindCSS, DaisyUI, Vite</li>
            <li><strong>Job Portal</strong><br/> Tech: ReactJS, TailwindCSS, DaisyUI, Vite</li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-400 mb-2">Education</h2>
          <ul className="list-disc list-inside space-y-1 text-white">
            <li>Dhaka University Technology Unit, MEC – BSc in Computer Science and Engineering (Session:19-20)</li>
            <li>Dhaka College, Dhaka – Higher Secondary Certificate (2019)</li>
          </ul>
        </div>

        {/* Extra Curricular */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-400 mb-2">Extra Curricular Activities</h2>
          <ul className="list-disc list-inside space-y-1 text-white">
            <li>Former President – MEC Photography Club</li>
            <li>Organizing Secretary – MEC Computer Club</li>
            <li>Founder & Owner – Paperman (Handmade Notebook Business)</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Resume;
