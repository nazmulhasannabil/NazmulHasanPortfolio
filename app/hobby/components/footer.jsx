import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { socialLinks } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-10 lg:py-12">
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-6">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-neutral-700 hover:text-black transition-colors"
            >
              {label === "Facebook" ? <FaFacebookF size={18} /> : <FaInstagram size={18} />}
            </a>
          ))}
        </div>
        <p className="text-[11px] tracking-[0.15em] uppercase text-neutral-400">
          © {currentYear} Nazmul Hasan
        </p>
      </div>
    </footer>
  );
}
