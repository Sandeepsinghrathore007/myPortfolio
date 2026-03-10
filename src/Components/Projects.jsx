import ProjectCard from "./ProjectCard";
import PortflioImg from "../assets/PR1.png"
import LearnLedgerImg from "../assets/learnledger.jpg";

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-950 text-white py-24 px-8 md:px-20">
      
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          <span className="text-purple-500">03.</span> Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">

  
          

 {/* Project Card 1 */}

          <ProjectCard
            title="Portfolio Website"
            description="Modern responsive portfolio built with React and Tailwind."
            tech="React • Tailwind • Vite"
            image={PortflioImg}
            github="https://github.com/Sandeepsinghrathore007/myPortfolio"
            demo="#"
           
          />
          

 {/* Project Card 2 */}

          <ProjectCard
            title="LearnLedger"
            description="A personal study management and knowledge organization platform designed to help students structure their learning, track study progress, and maintain long-term study notes in a clean and organized system."
            tech="React • Tailwind • Vite • Firebase"
            image={LearnLedgerImg}
            github="https://github.com/Sandeepsinghrathore007/Learnledger"
            demo="https://sandeepsinghrathore007.github.io/Learnledger/"
             
          />


            </div>

          </div>

        

     
    </section>
  );
}
