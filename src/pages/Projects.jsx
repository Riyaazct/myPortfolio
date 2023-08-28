import Button from "../components/Button";
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";
const Projects = () => {
  return (
    <section className="py-40 text-center">
      <div className="h-[130px] w-full bg-[#D9D9D9] flex justify-center items-center pt-4">
        <h2 className="text-3xl text-[#1E1E1E] font-extrabold ">
          Projects
        </h2>
      </div>
      <div className="flex flex-col items-center p-4">
        <img
          src="/images/tvshowdom.png"
          alt="tv shows project"
          className="max-w-2xl w-[90%]"
        />
        <h3 className="py-4 text-2xl font-semibold text-[#1E1E1E]">
          TV Show Dom Project
        </h3>
        <p className="px-6 py-2 text-start text-[#1E1E1E]">
          During my bootcamp, I completed a project focused on
          manipulating the DOM and fetching data from the TVmaze API
          using vanilla JavaScript and CSS. The TV Show Explorer
          allowed users to search and explore TV shows, displaying
          details such as titles, genres, ratings, and cast members in
          a dynamic and user-friendly interface. This project
          showcased my ability to work with external APIs and create
          engaging web applications using fundamental web development
          technologies.
        </p>
        <ul className="flex gap-3 text-[#1F4A23] font-semibold">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <div className="flex gap-3">
          <div className="flex flex-col items-center">
            <SlLink />
            <p className="text-sm">Live Link</p>
          </div>
          <div className="flex flex-col items-center">
            <SiGithub />
            <p className="text-sm">Live Link</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
