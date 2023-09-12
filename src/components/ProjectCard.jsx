// Import necessary dependencies
import PropTypes from "prop-types";
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

// Define a functional component called ProjectCard that takes in various props
const ProjectCard = ({
  title,
  image,
  description,
  technologies,
  liveLink,
  githubLink,
}) => {
  return (
    <div className="my-auto">
      {/* Start of Project Card */}
      <div className="w-full flex flex-col items-center p-1 md:border-2 md:rounded-md border-gray-950 bg-[#2E3B4E] shadow-sm shadow-[#1E1E1E] lg:hover:shadow-md lg:hover:scale-[1.01] lg:hover:duration-700">
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
          className="max-w-2xl w-[90%] my-7 max-h-72 object-cover object-top"
        />
        {/* Display the project description */}
        <p className="px-6 sm:px-9 py-2 text-white text-start md:max-w-[740px]">
          {description}
        </p>
        {/* Display the list of technologies used */}
        <ul className="flex max-w-[90%] md:max-w-full gap-2 md:gap-4 text-[#ffffff] font-semibold text-sm mt-4 border bg-slate-500 p-2 flex-wrap rounded-md">
          {technologies.map((tech, key) => (
            <li key={key}>{tech}</li>
          ))}
        </ul>
        {/* Display links to the live project and GitHub repository */}
        <div className="flex gap-6 mb-5 text-white">
          <a href={liveLink} target="_blank" rel="noreferrer">
            <div className="flex flex-col items-center mt-3">
              <SlLink size={22} color="#FFD700" />
              <p className="pt-2 text-sm">Live Link</p>
            </div>
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <div className="flex flex-col items-center mt-3">
              <SiGithub size={22} color="#FFD700" />
              <p className="pt-2 text-sm">View code</p>
            </div>
          </a>
        </div>
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
