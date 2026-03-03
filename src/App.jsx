import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import SocialSidebar from './Components/SocialSidebar'
const App = () => {
  return <>
  <SocialSidebar/>
   <Navbar/>
   <Hero/>
   <About/>
   <Skills/>
   <Projects/>
  </>
}

export default App