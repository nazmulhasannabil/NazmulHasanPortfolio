"use client";
import { useState } from 'react';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { motion, AnimatePresence } from 'framer-motion';

import Link from 'next/link';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ProjectSliderNav from '@/components/ProjectSliderNav';

// import thumb1 from '../public/thumb1.png'
// import thumb2 from '../public/thumb2.png'
// import thumb3 from '../public/thumb3.png'
// import thumb4 from '../public/thumb4.png'
// import thumb5 from '../public/thumb5.png'

const projects = [
  {
    num: "01",
    title: "Inventory Management System",

    description: "An inventory management system that streamlines product tracking, stock management, and real-time inventory monitoring with automated alerts and reporting features.",
    imageUrl: "/thumb6.png",
    liveLink: "https://inventory-management-smoky-three.vercel.app",
    githubLink: "https://github.com/nazmulhasannabil/inventory-management.git",
    stack: ["Next.js", "Tailwind", "NeonDB", "Express", "PostgreSQL", "Prisma", "Stack-frame"]
  },
  {
    num: "02",
    title: "Nazmul Hasan",
    description: "Always learning, always improving.",
    imageUrl: "/thumb1.png",
    liveLink: "https://nazmul-hasan-portfolio.vercel.app",
    githubLink: "https://github.com/nazmulhasannabil/NazmulHasanPortfolio.git",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Lottie-React",
      "Radix UI",
      "Swiper",
      "React Icons"
    ]
  },
  {
    num: "03",
    title: "Sip and Savor",

    description: "A full-stack coffee shop application that allows users to browse products, showcase coffee collections, and manage inventory with CRUD operations.",
    imageUrl: '/thumb5.png',
    liveLink: "https://coffeeemporium.netlify.app",
    githubLink: "https://github.com/nazmulhasannabil/Coffee_Shop_Client.git",
    stack: ["React", "Node.js", "Tailwind", " MongoDB", "Express", "Firebase"]
  },
  {
    num: "04",
    title: "Job Map",

    description: "A job portal platform that enables users to post job listings and search for employment opportunities with advanced filtering and application tracking.",
    imageUrl: "/thumb4.png",
    liveLink: "https://mapjob.netlify.app",
    githubLink: "https://github.com/nazmulhasannabil/Job_Portal_client.git",
    stack: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Firebase"]
  },
  {
    num: "05",
    title: "Somokounik",
    description: "Developed for a civil engineering firm to showcase their services, projects, and expertise.",
    imageUrl: "/thumb3.png",
    liveLink: "https://somokounik.netlify.app",
    githubLink: "https://github.com/nazmulhasannabil/Somokounik-v4.git",
    stack: ["React", "Node", "Tailwind"]
  },
  {
    num: "06",
    title: "Dental pavilion",

    description: "A modern dental clinic website showcasing services, appointment booking, and patient care information.",
    imageUrl: '/thumb2.png',
    liveLink: "https://dentalpavilionbd.netlify.app",
    githubLink: "https://github.com/nazmulhasannabil/Dental-pavilion-template.git",
    stack: ["HTML 5", "Tailwind", "JavaScript"]
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setProject(projects[swiper.activeIndex]);
  }

  return (
    <div className='site-container lg:py-24'>
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm uppercase tracking-widest text-teal-400/80">Featured work</span>
        <h2 className="text-4xl font-bold mt-2">
          My <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        <div className="w-full lg:w-[40%] lg:h-[460px] gap-4 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.num}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-8xl font-extrabold text-outline">
                {project.num}
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-4 mt-2">{project.title}</h2>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <ul>
                {project.stack.map((tech, index) => (
                  <li key={index} className="inline-block bg-teal-400/10 border border-teal-400/30 text-teal-400 hover:bg-teal-400 hover:text-gray-900 cursor-default px-3 py-1 rounded-full text-sm mr-2 mb-2 transition-colors duration-200">{tech}</li>
                ))}
              </ul>
              <div className='border border-white/10 my-4'></div>
              <div className='flex gap-4'>
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" title="Visit Live Site">
                  <motion.span whileHover={{ scale: 1.2 }} className="inline-block">
                    <FaExternalLinkAlt className="text-xl hover:text-teal-400 transition" />
                  </motion.span>
                </Link>
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" title="Visit Github">
                  <motion.span whileHover={{ scale: 1.2 }} className="inline-block">
                    <FaGithub className="text-2xl hover:text-teal-400 transition" />
                  </motion.span>
                </Link>
              </div>

              <ProjectSliderNav
                swiper={swiperInstance}
                activeIndex={activeIndex}
                total={projects.length}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div
          className="w-full lg:w-[60%]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[250px] lg:h-[450px] relative bg-gray-800 flex items-center justify-center'>
                    {/* overlay */}
                    <div className='absolute w-full h-full top-0 bottom-0 bg-black/10 z-10'></div>
                    {/* images */}
                    <div className='w-full h-full relative'>
                      <Image
                        src={project.imageUrl}
                        className='object-cover'
                        fill
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
