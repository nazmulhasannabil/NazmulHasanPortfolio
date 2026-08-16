import Social from "@/components/Social";
import React from "react";

const Resume = () => {
  return (
    <section className="min-h-screen py-12">
      <div className="site-container space-y-10">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-teal-400">Nazmul Hasan</h1>
          <p className="mt-1 text-lg text-white">Software Engineer</p>
          <p className="mt-2 text-gray-300">
            Phone: 01881649665 | Email: nazmulhasannabil4@gmail.com | Dhaka, Bangladesh
          </p>
          <div className="flex justify-center mt-4">
            <Social />
          </div>
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-400 mb-2">Summary</h2>
          <p className="text-white leading-relaxed">
            Software Engineer at BYDS with a BSc in Computer Science &amp; Engineering.
            I build and maintain production web and mobile products end to end —
            React/Next.js on the web, Flutter on mobile — and I am actively growing
            into AI-assisted development: shipping faster with modern tooling and
            keeping codebases maintainable for long-term product work.
          </p>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-400 mb-2">Experience</h2>
          <div className="text-white space-y-3">
            <div>
              <p className="font-semibold">
                Software Engineer — BYDS{" "}
                <span className="font-normal text-gray-400">January 2026 – Present</span>
              </p>
              <p className="text-sm text-teal-400/80 mb-2">Website: www.byds.ai</p>
              <ul className="list-disc list-inside space-y-1 text-gray-200">
                <li>
                  Contribute to and maintain 3+ live client products, owning features
                  from implementation through ongoing support and iteration.
                </li>
                <li>
                  Build responsive web applications (React / Next.js) and cross-platform
                  mobile apps (Flutter) aligned with real workflows, reliability, and UX clarity.
                </li>
                <li>
                  Collaborate with design and product on delivery: scoping, implementation,
                  deployment, and post-launch maintenance.
                </li>
                <li>
                  Work in an AI &amp; automation-oriented environment integrating AI-assisted
                  coding tools and patterns into everyday engineering workflows.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-400 mb-2">Technical Skills</h2>
          <ul className="list-disc list-inside space-y-1 text-white">
            <li><strong>Mobile:</strong> Flutter, Dart</li>
            <li>
              <strong>Frontend:</strong> JavaScript, TypeScript, React, Next.js, Redux,
              React Query, Tailwind, Ant Design, Material UI, HTML5, CSS3
            </li>
            <li>
              <strong>Backend &amp; Data:</strong> Node.js, Express, Spring Boot, REST APIs,
              Socket.io, MongoDB, MySQL, Firebase, PostgreSQL, Prisma
            </li>
            <li>
              <strong>AI-ready practices:</strong> AI-assisted coding &amp; debugging
              (Cursor / Copilot), prompt-driven feature scaffolding, interest in LLM APIs /
              RAG / automation workflows
            </li>
            <li>
              <strong>Tools:</strong> Git / GitHub, VS Code, Jira, Trello, Vercel, Netlify
            </li>
            <li><strong>Languages:</strong> English, Bengali</li>
          </ul>
        </div>

        {/* Selected Projects */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-400 mb-2">Selected Projects</h2>
          <div className="space-y-4 text-white">
            <p className="font-semibold text-teal-400/90">Production / Client Work (BYDS)</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Bilwax</strong> — Ongoing · Mobile car wash booking platform
                <br />
                <span className="text-gray-300">
                  Flutter app for on-demand booking, service packages, auth, and real-time
                  order management. Stack: Flutter, Dart, Spring Boot, REST APIs, Firebase.
                </span>
              </li>
              <li>
                <strong>Choto Bill</strong> — Ongoing · Nutrition intelligence app
                <br />
                <span className="text-gray-300">
                  Flutter app for food tracking and nutrition insights with production user
                  flows and API integration. Stack: Flutter, Dart, REST APIs.
                </span>
              </li>
              <li>
                <strong>GradMate</strong> — Ongoing · AI-powered graduate school guidance
                <br />
                <span className="text-gray-300">
                  Maintain and extend web features for gradmate.ai. Stack: React, Next.js,
                  TypeScript, REST APIs.
                </span>
              </li>
            </ul>
            <p className="font-semibold text-teal-400/90 pt-2">Earlier Projects</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Job Portal</strong> — React, Tailwind, DaisyUI, MongoDB, Firebase
              </li>
              <li>
                <strong>Sip &amp; Savor</strong> — React, Tailwind, MongoDB, Firebase
              </li>
              <li>
                <strong>Somokounik</strong> — Civil engineering firm website (React, Tailwind,
                DaisyUI, Email.js) — live client site
              </li>
              <li>
                <strong>Portfolio</strong> — Next.js, TailwindCSS
                (nazmul-hasan-portfolio.vercel.app)
              </li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-400 mb-2">Education</h2>
          <ul className="list-disc list-inside space-y-1 text-white">
            <li>
              BSc in Computer Science and Engineering — Dhaka University Technology Unit,
              MEC · Session 2019–20 · Graduated June 2025
            </li>
            <li>Higher Secondary Certificate — Dhaka College, Dhaka (2019)</li>
            <li>Secondary — Government Laboratory High School (2017)</li>
          </ul>
        </div>

        {/* Leadership & Extra */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-400 mb-2">Leadership &amp; Extra</h2>
          <ul className="list-disc list-inside space-y-1 text-white">
            <li>Former President — MEC Photography Club</li>
            <li>Organizing Secretary — MEC Computer Club</li>
            <li>Founder — Paperman (handmade notebook business)</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Resume;
