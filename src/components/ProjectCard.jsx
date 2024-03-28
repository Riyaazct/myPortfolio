/* eslint-disable react/prop-types */
// Import necessary dependencies
import PropTypes from "prop-types";

// Define a functional component called ProjectCard that takes in various props
const ProjectCard = ({ title, image, projectType, path }) => {
  return (
    <div className="my-auto ">
      {/* Start of Project Card */}
      <div className="w-full flex flex-col items-center md:border-2 md:rounded-md border-gray-950 bg-[#2E3B4E] shadow-sm shadow-[#1E1E1E] lg:hover:shadow-md lg:hover:scale-[1.01] lg:hover:duration-500 lg:hover:transition-transform lg:p-8 p-6 ">
        {/* Display the project title */}
        <h3 className="pt-4 text-2xl lg:text-3xl font-semibold text-[#FFFFFF]">
          {title}
        </h3>
        {/* Display the project image */}
        <img
          width="1000px"
          height="600px"
          src={image}
          alt={title}
          title={title}
          loading="lazy"
          className="min-h-[350px] object-fill my-7 max-h-72 lg:rounded-md"
        />
        <h2 className="text-2xl text-[#FFFFFF] font-semibold mb-7 ">
          Project Type: {projectType}
        </h2>
        <a
          href={path}
          target="_blank"
          rel="noreferrer"
          className="p-3 border border-black bg-[#ffd900ea] hover:bg-[#FFD700] rounded-md"
        >
          View Project details
        </a>
        {/* Display the project description */}
        {/* <p className="px-6 sm:px-9 py-2 text-white text-start md:max-w-[740px] hover:cursor-pointer">
          {description}
        </p> */}
        {/* Display the list of technologies used */}
        {/* <ul className="flex max-w-[90%] gap-2 md:gap-4 text-[#ffffff] font-semibold text-sm mt-4 border bg-slate-500 p-2 flex-wrap rounded-md md:max-w-[90%]">
          {technologies.map((tech, key) => (
            <li key={key}>{tech}</li>
          ))}
        </ul> */}
      </div>
      {/* End of Project Card */}
    </div>
  );
};

// Define propTypes to specify the expected types for each prop
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired, // Title should be a required string
  image: PropTypes.string.isRequired, // Image URL should be a required string
  description: PropTypes.object.isRequired, // Description should be an object (you might want to use PropTypes.string if it's a string)
  technologies: PropTypes.array.isRequired, // Technologies should be an array
  liveLink: PropTypes.string.isRequired, // Live link URL should be a required string
  githubLink: PropTypes.string.isRequired, // GitHub link URL should be a required string
};

// Export the ProjectCard component as the default export of this module
export default ProjectCard;
