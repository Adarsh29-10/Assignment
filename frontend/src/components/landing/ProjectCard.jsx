const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="w-full h-48 sm:h-56">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 flex flex-col items-start grow">
        <h3 className="text-[#1A73E8] font-bold text-lg mb-1">
          {project.name}
        </h3>

        <p className="text-gray-500 text-sm mb-6">
          {project.description}
        </p>

        <button className="bg-[#F36F21] hover:bg-orange-600 text-white font-bold py-2 px-8 rounded shadow-md transition-colors duration-300 uppercase text-xs tracking-wider mt-auto">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;