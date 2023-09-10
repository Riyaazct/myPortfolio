import ProjectCard from "../components/ProjectCard";
import projectData from "../utils/projectData";

const Projects = () => {
  return (
    <section id="projects" className="my-40 text-center ">
      <div className="h-[130px] w-full bg-[#FFFFFF] flex justify-center items-center pt-5">
        <h2 className="text-4xl text-[#1E1E1E] font-extrabold pb-8 lg:text-5xl">
          Projects
        </h2>
      </div>

      {/* Project Container */}
      <div className="grid grid-cols-1 gap-4 md:p-5 mx-auto lg:grid-cols-2 lg:max-w-[1300px]">
        {""}

        {/* Project Card */}
        {projectData.map(
          (
            {
              title,
              image,
              description,
              technologies,
              liveLink,
              githubLink,
            },
            key
          ) => (
            <ProjectCard
              key={key}
              title={title}
              image={image}
              description={description}
              technologies={technologies}
              liveLink={liveLink}
              githubLink={githubLink}
            />
          )
        )}
        {/*end of project card */}

        {/* end of Project Container */}
      </div>
    </section>
  );
};

export default Projects;
