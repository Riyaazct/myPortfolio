/* eslint-disable react/prop-types */

import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

const ProjectPage = ({
  title,
  image,
  description,
  technologies,
  liveLink,
  githubLink,
}) => {
  return (
    <section className="bg-[#2e3b4e] h-full p-10 flex text-[#FFFFFF]">
      <div className="flex flex-col items-center w-full h-[90%] m-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-semibold">{title}</h1>
        <img
          src={image}
          alt=""
          className="h-auto m-auto max-w-[700px] rounded-md"
        />
        <p className="my-5 text-lg max-w-[700px]">{description}</p>
        <ul className="flex my-5 ">
          {technologies.map((tech, index) => (
            <li key={index} className="px-2 text-2xl font-semibold">
              {tech}
            </li>
          ))}
        </ul>
        {/* Display links to the live project and GitHub repository */}
        <div className="flex gap-6 mt-5 text-white">
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
    </section>
  );
};

export default ProjectPage;
