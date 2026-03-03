import React from 'react'
import Logo from './Logo';

const Navbar = () => {
   return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black text-white">
      
      {/* Logo Section */}
      <Logo />

      {/* Right Side Links */}
      <ul className="flex gap-6 text-lg">
        <li >
<a href="#about" className="hover:text-purple-500 cursor-pointer">
    About </a>

        </li>
        <li>
            <a href="#projects" className="hover:text-purple-500 cursor-pointer">
    Projects </a>
        </li>
        <li >
            <a href="#contacts" className="hover:text-purple-500 cursor-pointer">
    Contacts </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar