import React from "react";
import profileImage from "../assets/image4.png";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-black text-white px-8 md:px-20 pt-16 md:pt-0">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
        {/* Left Side - Text */}
        <div className="max-w-3xl">
          <p className="text-purple-500 text-sm mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <TypeAnimation
              sequence={["Sandeep Singh Rathore.", 4000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-6">
            I build modern web & mobile apps.
          </h2>

          <p className="text-gray-400 max-w-xl leading-relaxed mb-8">
            I am a full-stack developer specializing in building modern,
            responsive and user-focused digital experiences using React, React
            Native, and Node.js.
          </p>

          {/* Buttons */}

          <div className="flex gap-3 ">
            <a
              href="#projects"
              className="inline-block px-5 py-3 border border-purple-500 text-purple-500
               hover:bg-purple-500 hover:text-black transition duration-300 rounded-md"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full max-w-[520px] flex-shrink-0 flex justify-center">
          {/* Image Container */}
          <div
            className="relative w-full overflow-hidden 
  rounded-[58%_42%_33%_67%/60%_45%_55%_40%]"
          >
            <img
              src={profileImage}
              alt="Sandeep"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
