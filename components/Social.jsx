import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Social = () => {
  return (
    <div className="flex space-x-6">
                <a
                  href="https://github.com/nazmulhasannabil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-teal-400 transition-colors duration-300 "
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nazmul-hasan-nabil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-teal-400 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://x.com/Nazmul_Hasan09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-teal-400 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="mailto:nazmulhasannabil4@gmail.com"
                  className="hover:text-white text-teal-400 transition-colors duration-300"
                  aria-label="Email"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
  )
}

export default Social