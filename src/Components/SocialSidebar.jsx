import { FaGithub, FaLinkedin, FaTwitter ,FaInstagram  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">

      <div className="flex flex-col gap-4">

        {/* GitHub */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
         className="group flex items-center bg-black border border-zinc-800 
           translate-x-[-70%] hover:translate-x-0 transition-all duration-300"
        >
          <span className="p-3 text-gray-400 group-hover:text-purple-500 transition">
            <FaGithub size={20} />
          </span>
          <span className="hidden group-hover:block pr-4 text-sm text-purple-500">
            GitHub
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-black border border-zinc-800 
           translate-x-[-70%] hover:translate-x-0 transition-all duration-300"
        >
          <span className="p-3 text-gray-400 group-hover:text-purple-500 transition">
            <FaLinkedin size={20} />
          </span>
          <span className="hidden group-hover:block pr-4 text-sm text-purple-500">
            LinkedIn
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:yourmail@gmail.com"
          className="group flex items-center bg-black border border-zinc-800 
           translate-x-[-70%] hover:translate-x-0 transition-all duration-300"
        >
          <span className="p-3 text-gray-400 group-hover:text-purple-500 transition">
            <MdEmail size={20} />
          </span>
          <span className="hidden group-hover:block pr-4 text-sm text-purple-500">
            Email
          </span>
        </a>
   
        {/* Instagram */}
        <a
  href="https://instagram.com/yourusername"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center bg-black border border-zinc-800 
             translate-x-[-70%] hover:translate-x-0 transition-all duration-300"
>
  <span className="p-3 text-gray-400 group-hover:text-purple-500 transition">
    <FaInstagram size={20} />
  </span>
  <span className="hidden group-hover:block pr-4 text-sm text-purple-500">
    Instagram
  </span>
</a>

        

      </div>
    </div>
  );
}