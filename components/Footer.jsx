// components/Footer.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import Social from './Social';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Section - Centered */}
        <div className="flex flex-col items-center text-center space-y-6">
          <h3 className="text-2xl font-bold text-white">Nazmul Hasan</h3>
          <Social />
        </div>

        {/* Bottom Bar - Centered */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex justify-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Nazmul Hasan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;