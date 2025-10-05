"use client";
import { useState } from 'react';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

import Link from 'next/link';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import WorkSliderButton from '@/components/WorkSliderButton';

// import thumb1 from '../public/thumb1.png'
// import thumb2 from '../public/thumb2.png'
// import thumb3 from '../public/thumb3.png'
// import thumb4 from '../public/thumb4.png'
// import thumb5 from '../public/thumb5.png'

const projects = [
  {
    num: "01",
    title: "Nazmul Hasan",
    description: "This is my personal portfolio Website.",
    imageUrl: "/thumb1.png",
    liveLink: "#",
    githubLink: "#",
    stack: ["React", "Node.js", "MongoDB"]
  },
  {
    num: "02",
    title: "Somokounik",
    description: "This is a brief description of Project One.",
    imageUrl: "/thumb3.png",
    liveLink: "https://somokounik.com",
    githubLink: "#",
    stack: ["React", "Node.js", "MongoDB"]
  },
  {
    num: "03",
    title: "Dental pavilion",
    description: "This is a brief description of Project One.",
    imageUrl: '/thumb2.png',
    liveLink: "#",
    githubLink: "#",
    stack: ["React", "Node.js", "MongoDB"]
  },
  {
    num: "04",
    title: "Sip and Savor",
    description: "This is a brief description of Project One.",
    imageUrl: '/thumb5.png',
    liveLink: "#",
    githubLink: "#",
    stack: ["React", "Node.js", "MongoDB"]
  },
  {
    num: "05",
    title: "Job Map",
    description: "This is a brief description of Project One.",
    imageUrl: "/thumb4.png",
    liveLink: "#",
    githubLink: "#",
    stack: ["React", "Node.js", "MongoDB"]
  }
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  }

  return (
    <div className='container mx-auto lg:py-24'>
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        <div className="w-full lg:w-[40%] lg:h-[460px] gap-4 flex flex-col justify-center">
          {/* outline */}
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">{project.num}</div>
          <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
          <p className="mb-4">{project.description}</p>
          {/* stacks */}
          <ul>
            {project.stack.map((tech, index) => (
              <li key={index} className="inline-block bg-teal-400 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">{tech}</li>
            ))}
          </ul>
          {/* border */}
          <div className='border border-white/20'></div>
          {/* link buttons */}
          <div className='flex gap-4 mt-4'>
            <Link href={project.liveLink} title="Visit Live Site"><FaExternalLinkAlt className="text-xl hover:text-teal-400 transition" /></Link>
            <Link href={project.githubLink} title="Visit Github"><FaGithub className="text-2xl hover:text-teal-400 transition" /></Link>
          </div>

        </div>
        <div className="w-full lg:w-[60%]">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
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
            {/* Slider Buttons */}
            <WorkSliderButton />
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Projects