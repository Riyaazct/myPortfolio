// Import necessary dependencies
import PropTypes from "prop-types";

// Define a functional component called ProjectCard that takes in various props
const ProjectCard = ({
  title,
  image,
  projectType,
  path,
  technologies,
}) => {
  return (
    <div className="my-auto ">
      {/* Start of Project Card */}
      <div className="w-full flex flex-col items-center md:border-2 md:rounded-md border-gray-950 bg-[#2E3B4E] shadow-sm shadow-[#1E1E1E] lg:hover:shadow-md lg:hover:scale-[1.01] lg:hover:duration-300 lg:hover:transition-transform py-6 ">
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
          className="lg:min-h-[290px] lg:max-w-[500px] object-fill my-7 max-h-72 lg:rounded-md"
        />
        <h2 className="text-2xl text-[#FFFFFF] font-semibold  ">
          Project Type: {projectType}
        </h2>
        <ul className="flex max-w-[90%] gap-2 text-[#ffffff] font-semibold text-sm mt-4 border bg-slate-500 p-2 flex-wrap rounded-md mb-4">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="mx-2 text-[#FFD700] font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>

        <a
          href={path}
          target="_blank"
          rel="noreferrer"
          className="py-1 px-3 border-2 border-[#1F4A23] bg-[#FFD700] rounded-md text-[#1f4a23] font-semibold shadow-[#1E1E1E] text-xs shadow-md md:py-2 lg:py-3 lg:text-sm lg:px-5 hover:bg-[#FFFFFF]"
        >
          Project details
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
  technologies: PropTypes.array.isRequired, // Technologies should be an array
  projectType: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  // description: PropTypes.object.isRequired, // Description should be an object (you might want to use PropTypes.string if it's a string)
  // liveLink: PropTypes.string.isRequired, // Live link URL should be a required string
  // githubLink: PropTypes.string.isRequired, // GitHub link URL should be a required string
};

// Export the ProjectCard component as the default export of this module
export default ProjectCard;
