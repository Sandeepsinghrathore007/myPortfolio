import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function SocialSidebar() {
  const links = [
    {
      href: "https://github.com/Sandeepsinghrathore007",
      icon: <FaGithub size={20} />,
      label: "GitHub",
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/sandeep-singh-rathore-143958313/",
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      external: true,
    },
    {
      href: "mailto:sandeepsinghrathorerajpoot@gmail.com",
      icon: <MdEmail size={20} />,
      label: "Email",
      external: false,
    },
    {
      href: "https://www.instagram.com/sandeepsingh.rathore.2026/",
      icon: <FaInstagram size={20} />,
      label: "Instagram",
      external: true,
    },
  ];

  return (
    <>
      {/* Mobile & Tablet: right side, icons only */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 md:hidden">
        {links.map(({ href, icon, label, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={label}
            className="flex items-center justify-center w-10 h-10 bg-black border border-zinc-800 text-gray-400 hover:text-purple-500 transition-colors duration-200"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Desktop: left side, slide-in with label on hover */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {links.map(({ href, icon, label, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={label}
            className="group flex items-center bg-black border border-zinc-800 overflow-hidden
                       -translate-x-[calc(100%-44px)] hover:translate-x-0
                       transition-transform duration-300 ease-out will-change-transform"
          >
            {/* Label — visible only on hover, shown before icon so icon stays flush left on collapsed */}
            <span className="pl-4 pr-2 text-sm text-purple-500 whitespace-nowrap
                             opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto
                             transition-all duration-300 ease-out overflow-hidden">
              {label}
            </span>
            {/* Icon — always visible, anchored to right edge */}
            <span className="p-3 text-gray-400 group-hover:text-purple-500 transition-colors flex-shrink-0">
              {icon}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}