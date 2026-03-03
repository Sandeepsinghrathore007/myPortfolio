import ProjectCard from "./ProjectCard";


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
            title="Todo App"
            description="A full-stack task manager with authentication and real-time updates."
            tech="React • Node • MongoDB"
            image="/project1.jpg"
            github="#"
            demo="#"
          />

          <ProjectCard
            title="Portfolio Website"
            description="Modern responsive portfolio built with React and Tailwind."
            tech="React • Tailwind • Vite"
            image="/project2.jpg"
            github="#"
            demo="#"
          />


            </div>

          </div>

        

     
    </section>
  );
}