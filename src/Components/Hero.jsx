import React from 'react'
import profileImage from "../assets/image4.png";
const Hero = () => {
  return  <section className="min-h-screen flex items-center bg-black text-white px-8 md:px-20 pt-16 md:pt-0">
      
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">

        {/* Left Side - Text */}
        <div className="max-w-3xl">
          <p className="text-purple-500 text-sm mb-4">
            Hi, my name is
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Sandeep Singh Rathore.
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-6">
            I build modern web & mobile apps.
          </h2>

          <p className="text-gray-400 max-w-xl leading-relaxed mb-8">
            I am a full-stack developer specializing in building modern,
            responsive and user-focused digital experiences using React,
            React Native, and Node.js.
          </p>

          <a
            href="#projects"
            className="inline-block px-6 py-3 border border-purple-500 text-purple-500
                       hover:bg-purple-500 hover:text-black transition duration-300 rounded-md"
          >
            View My Work
          </a>
        </div>

        {/* Right Side - Image */}
       <div className="w-80 md:w-[450px]">
  <img
    src={profileImage}
    alt="Sandeep"
    className="w-full h-auto object-contain rounded-xl shadow-xl"
  />
</div>

      </div>
    </section>
}

export default Hero