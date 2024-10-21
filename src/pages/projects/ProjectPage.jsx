/* eslint-disable react/prop-types */

import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

const ProjectPage = ({
  title,
  image,
  description,
  technologies,
  otherTechnologies,
  liveLink,
  githubLink,
}) => {
  return (
    <section className="bg-[#2e3b4e] h-full p-10 flex text-[#FFFFFF] ">
      {/* CONTAINER */}
      <div className="flex flex-col items-center w-full h-[90%] m-auto max-w-7xl ">
        {/* TITLE */}
        <h1 className="mb-8 text-4xl font-semibold">{title}</h1>

        {/* IMAGE */}
        <img
          src={image}
          alt=""
          className="h-auto m-auto rounded-md"
        />

        {/* DESCRIPTION */}
        <p className="my-5 text-sm md:text-lg xl:text-2xl ">
          {description}
        </p>

        {/* TECHNOLOGIES */}
        <div className="flex w-full mt-8 md:gap-5 lg:justify-around ">
          <div className="mx-12 md:mx-16">
            <h3 className="font-semibold md:text-2xl">
              Technologies Used:
            </h3>
            <ul className="my-5 list-disc">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="px-2 font-semibold md:text-2xl"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* OTHER TECHNOLOGIES */}

          <div className="mx-12 md:mx-16">
            <h3 className="font-semibold md:text-2xl">
              Other Technologies Used:
            </h3>
            <ul className="my-5 list-disc">
              {otherTechnologies.map((tech, index) => (
                <li
                  key={index}
                  className="px-2 font-semibold md:text-2xl"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Display links to the live project and GitHub repository */}
        <div className="flex mt-5 text-white gap-14">
          <a href={liveLink} target="_blank" rel="noreferrer">
            <div className="flex flex-col items-center mt-3">
              <SlLink
                size={window.innerWidth <= 768 ? 22 : 40}
                color="#FFD700"
              />
              <p className="pt-2 text-sm md:text-lg">Live Link</p>
            </div>
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer">
            {githubLink ? (
              <div className="flex flex-col items-center mt-3">
                <SiGithub
                  size={window.innerWidth <= 768 ? 22 : 40}
                  color="#FFD700"
                />
                <p className="pt-2 text-sm md:text-lg">View code</p>
              </div>
            ) : null}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
