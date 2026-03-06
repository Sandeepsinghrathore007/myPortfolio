import { FaReact, FaNodeJs } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { FaPython , } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss, SiFirebase, SiMysql } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { SiN8N } from "react-icons/si";
import { TbAutomation } from "react-icons/tb";
import { FaFileWord } from "react-icons/fa";


export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-24 px-8 md:px-20">
      
      <div className="max-w-6xl mx-auto ">

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          <span className="text-purple-500">02.</span> Skills
        </h2>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-10 ">

          {/* Frontend */}
          <div className="bg-zinc-950 p-8 rounded-lg border border-zinc-800 hover:border-purple-500 transition duration-300 hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-6 text-purple-500">
              Frontend
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <SiJavascript className="text-purple-500" /> JavaScript
              </li>
              <li className="flex items-center gap-3">
                <FaReact className="text-purple-500" /> React
              </li>
              <li className="flex items-center gap-3">
                <FaReact className="text-purple-500" /> React Native
              </li>
             
              <li className="flex items-center gap-3">
                <SiTailwindcss className="text-purple-500" /> Tailwind CSS
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-zinc-950 p-8 rounded-lg border border-zinc-800 hover:border-purple-500 transition duration-300 hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-6 text-purple-500">
              Backend
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <FaNodeJs className="text-purple-500" /> Node.js
              </li>
              <li className="flex items-center gap-3">
                <SiFirebase className="text-purple-500" /> Firebase
              </li>
            </ul>
          </div>

          {/* Database */}
          <div className="bg-zinc-950 p-8 rounded-lg border border-zinc-800 hover:border-purple-500 transition duration-300 hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-6 text-purple-500">
              Database
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <SiMongodb className="text-purple-500" /> MongoDB
              </li>
              <li className="flex items-center gap-3">
                <SiMysql className="text-purple-500" /> SQL
              </li>
            </ul>
          </div>

          {/* Programming Languages */}

          <div className="bg-zinc-950 p-8 rounded-lg border border-zinc-800 hover:border-purple-500 transition duration-300 hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-6 text-purple-500">
              Programming languages
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <FaPython className="text-purple-500" /> Python
              </li>
              <li className="flex items-center gap-3">
                 <SiJavascript className="text-purple-500" /> JavaScript
              </li>
              <li className="flex items-center gap-3">
                <SiCplusplus className="text-purple-500" /> C++
              </li>
              <li className="flex items-center gap-3">
                <FaJava className="text-purple-500" /> Java
              </li>

            </ul>
          </div>

           {/* Programming Languages */}
          
          <div className="bg-zinc-950 p-8 rounded-lg border border-zinc-800 hover:border-purple-500 transition duration-300 hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-6 text-purple-500">
              Tools
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <VscVscode className="text-purple-500" /> Vs Code
              </li>
              <li className="flex items-center gap-3">
                 <FaGitAlt className="text-purple-500" /> Git
              </li>
             
              <li className="flex items-center gap-3">
                <SiN8N className="text-purple-500" /> N8N
              </li>
              <li className="flex items-center gap-3">
                <TbAutomation className="text-purple-500" />Microsoft Power Automate
              </li>
              <li className="flex items-center gap-3">
                <FaFileWord className="text-purple-500" />Microsoft Office
              </li>

            </ul>
          </div>


        </div>

      </div>
    </section>
  );
}