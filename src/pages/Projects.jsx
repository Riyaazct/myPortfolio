// Import the ProjectCard component and projectData from respective files
import ProjectCard from "../components/ProjectCard";
import projectData from "../utils/projectData";

// Define a functional component called Projects
const Projects = () => {
  return (
    <section id="projects" className="my-40 text-center">
      {/* Section header */}
      <div className="h-[130px] w-full bg-[#FFFFFF] flex justify-center items-center pt-5">
        <h2 className="text-4xl text-[#1E1E1E] font-extrabold pb-8 lg:text-5xl">
          Projects
        </h2>
      </div>

      {/* Project Container */}
      <div className="grid grid-cols-1 gap-4 md:p-5 md:max-w-[75%] mx-auto lg:grid-cols-2 lg:max-w-[1350px] overflow-y-scroll h-screen">
        {/* Map through projectData and create ProjectCard components */}
        {projectData.map(
          (
            { title, image, technologies, projectType, path },
            key
          ) => (
            <ProjectCard
              key={key}
              title={title}
              image={image}
              technologies={technologies}
              projectType={projectType}
              path={path}
            />
          )
        )}
        {/* End of Project Card mapping */}
      </div>
      {/* End of Project Container */}
    </section>
  );
};

export default Projects;
