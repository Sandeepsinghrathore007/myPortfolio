import { FaReact, FaNodeJs } from "react-icons/fa6";
import { SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";
import { SiFirebase, SiMysql } from "react-icons/si";


export default function About() {
  return (
    <section id="about" className="bg-zinc-950 text-white py-24 px-8 md:px-20">

      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-purple-500">01.</span> About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-16">

          {/* Left Side - Description */}
          <div className="md:w-2/3 text-gray-400 space-y-6 leading-relaxed">

            <p>
              Hello! I’m Sandeep, a BCA student passionate about building
              modern web and mobile applications. I enjoy creating clean,
              user-friendly interfaces and solving real-world problems.
            </p>

            <p>
              Currently, I am focusing on improving my skills in React,
              React Native, and backend development using Node.js and MongoDB.
            </p>

            <p>
              My goal is to become a strong full-stack developer and build
              impactful digital products.
            </p>

          </div>

          {/* Right Side - Skills List */}
          <div className="md:w-1/3">

            <h3 className="text-white font-semibold mb-4">
              Technologies I work with:
            </h3>

           <ul className="grid grid-cols-2 gap-4 text-gray-400 text-sm">

  <li className="flex items-center gap-2">
    <SiJavascript className="text-purple-500 text-lg" />
    JavaScript
  </li>

  <li className="flex items-center gap-2">
    <FaReact className="text-purple-500 text-lg" />
    React
  </li>

  <li className="flex items-center gap-2">
    <FaReact className="text-purple-500 text-lg" />
    React Native
  </li>

  <li className="flex items-center gap-2">
    <SiTailwindcss className="text-purple-500 text-lg" />
    Tailwind CSS
  </li>

  <li className="flex items-center gap-2">
    <FaNodeJs className="text-purple-500 text-lg" />
    Node.js
  </li>

  <li className="flex items-center gap-2">
    <SiMongodb className="text-purple-500 text-lg" />
    MongoDB
  </li>
  <li className="flex items-center gap-2">
  <SiFirebase className="text-purple-500 text-lg" />
  Firebase
</li>

<li className="flex items-center gap-2">
  <SiMysql className="text-purple-500 text-lg" />
  SQL
</li>

</ul>

          </div>

        </div>

      </div>
    </section>
  );
}