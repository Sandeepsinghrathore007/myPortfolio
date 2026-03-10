export default function ProjectCard({ title, description, tech, image, github, demo ,state}) {
  return (
    <div className="bg-black rounded-lg overflow-hidden border border-zinc-800 hover:border-purple-500 transition duration-300 hover:-translate-y-2">
      
      {/* Image */}
      
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-300"
        />
      </div>

      {/* Content */}

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">
          {title}
        </h3>

        <h5 className="text-sm text-gray-400 font-semibold mb-3">
          {state}
        </h5>

        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>

        <p className="text-purple-500 text-sm mb-4">
          {tech}
        </p>

        <div className="flex gap-4 text-sm">
          <a href={github} target="_blank" className="hover:text-purple-500 transition">
            GitHub
          </a>
          <a href={demo} target="_blank" className="hover:text-purple-500 transition">
            Live Demo
          </a>
        </div>
      </div>

    </div>
  );
}