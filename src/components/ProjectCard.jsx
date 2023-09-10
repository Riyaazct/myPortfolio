import PropTypes from "prop-types";

import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

const ProjectCard = ({
  title,
  image,
  description,
  technologies,
  liveLink,
  githubLink,
}) => {
  return (
    <div>
      {/* Project Card */}
      <div className="w-full flex flex-col items-center p-1 md:border-2 md:rounded-md border-gray-950 bg-[#2E3B4E] shadow-sm shadow-[#1E1E1E]  lg:hover:shadow-md lg:hover:scale-[1.01] lg:hover:duration-700">
        <h3 className="py-4 text-2xl font-semibold text-[#FFFFFF]">
          {title}
        </h3>
        <img
          src={image}
          alt={title}
          className="max-w-2xl w-[90%] my-7 max-h-72"
        />
        <p className="px-6 sm:px-9 py-2 text-white text-start md:max-w-[740px]">
          {description}
        </p>
        <ul className="flex gap-5 text-[#ffffff] font-semibold text-sm mt-4 border bg-slate-500 p-2 rounded-md">
          {technologies.map((tech, key) => (
            <li key={key}>{tech}</li>
          ))}
        </ul>
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
      {/*end of project card */}
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  technologies: PropTypes.array.isRequired,
  liveLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default ProjectCard;
