import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function SocialSidebar() {
  return (
    <div className="fixed right-3 md:left-0 md:right-auto top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-5 md:gap-4">
        {/* GitHub */}
        <a
          href="https://github.com/Sandeepsinghrathore007"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-black border border-zinc-800 
           translate-x-0 md:-translate-x-[70%] md:hover:translate-x-0 transition-transform duration-300 ease-out will-change-transform"
        >
          <span className="p-3 text-gray-400 group-hover:text-purple-500 transition">
            <FaGithub size={20} />
          </span>
          <span className="hidden md:group-hover:block pr-4 text-sm text-purple-500">
            GitHub
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sandeep-singh-rathore-143958313/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-black border border-zinc-800 
          translate-x-0 md:-translate-x-[70%] md:hover:translate-x-0 transition-transform duration-300 ease-out will-change-transform"
        >
          <span className="p-3 text-gray-400 group-hover:text-purple-500 transition">
            <FaLinkedin size={20} />
          </span>
          <span className="hidden md:group-hover:block pr-4 text-sm text-purple-500">
            LinkedIn
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:sandeepsinghrathorerajpoot@gmail.com"
          className="group flex items-center bg-black border border-zinc-800 
           translate-x-0 md:-translate-x-[70%] md:hover:translate-x-0 transition-transform duration-300 ease-out will-change-transform"
        >
          <span className="p-3 text-gray-400 group-hover:text-purple-500 transition">
            <MdEmail size={20} />
          </span>
          <span className="hidden md:group-hover:block pr-4 text-sm text-purple-500">
            Email
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/sandeepsingh.rathore.2026/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-black border border-zinc-800 
             translate-x-0 md:-translate-x-[70%] md:hover:translate-x-0 transition-transform duration-300 ease-out will-change-transform"
        >
          <span className="p-3 text-gray-400 group-hover:text-purple-500 transition">
            <FaInstagram size={20} />
          </span>
          <span className="hidden md:group-hover:block pr-4 text-sm text-purple-500">
            Instagram
          </span>
        </a>
      </div>
    </div>
  );
}
