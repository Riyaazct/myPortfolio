// import Button from "../components/Button";
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";
import tvShowDomImg from "../assets/images/tvshowdom.png";

const Projects = () => {
  return (
    <section className="my-40 text-center ">
      <div className="h-[130px] w-full bg-[#FFFFFF] flex justify-center items-center pt-5">
        <h2 className="text-3xl text-[#1E1E1E] font-bold ">
          Projects
        </h2>
      </div>
      {/* <!-- Inside the Projects section of portfolio --> */}
      {/* <div className="flex justify-center mt-6">
          <button
            className="bg-[#1F4A23] text-white px-4 py-2 rounded-lg mr-4 transition duration-300 hover:bg-[#337ab7]"
            onClick={() => handleFilter("front-end")}
          >
            Front-End Projects
          </button>
          <button
            className="bg-[#1F4A23] text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-[#337ab7]"
            onClick={() => handleFilter("full-stack")}
          >
            Full-Stack Projects
          </button>
        </div> */}
      {/* Project Container */}
      <div className="grid grid-cols-1 gap-4 md:p-5 mx-auto lg:grid-cols-2 lg:max-w-[1300px]">
        {/* Project Card 1 */}
        <div className="w-full flex flex-col items-center p-1 md:border-2 md:rounded-md border-gray-950 bg-[#2E3B4E] shadow-sm shadow-[#1E1E1E] lg:hover:shadow-md lg:hover:scale-[1.01] lg:hover:duration-700">
          <h3 className="py-4 text-2xl font-semibold text-[#FFFFFF]">
            TV Show Explorer
          </h3>
          <img
            src={tvShowDomImg}
            alt="tv shows project"
            className="max-w-2xl w-[90%] my-7"
          />
          <p className="px-6 sm:px-9 py-2 text-white text-start md:max-w-[740px]">
            During my bootcamp, I completed a project focused on
            manipulating the DOM and fetching data from the TVmaze API
            using{" "}
            <span className="text-[#FFD700] font-mediums">
              HTML, CSS and JavaScript
            </span>
            . The TV Show Explorer allowed users to search and explore
            TV shows, displaying details such as titles, genres,
            ratings, and runtime in a dynamic and user-friendly
            interface. This project showcased my ability to work with
            external APIs and create engaging web applications using
            fundamental web development technologies.
          </p>
          <ul className="flex gap-5 text-[#ffffff] font-semibold text-sm mt-4 border bg-slate-500 p-2 rounded-md">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <div className="flex gap-6 mb-5 text-white">
            <a
              href="https://cyf-riyaazct-tv.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center mt-3">
                <SlLink size={22} color="#FFD700" />
                <p className="pt-2 text-sm">Live Link</p>
              </div>
            </a>
            <a
              href="https://github.com/Riyaazct/tv-show-dom-project"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center mt-3">
                <SiGithub size={22} color="#FFD700" />
                <p className="pt-2 text-sm">View code</p>
              </div>
            </a>
          </div>
        </div>
        {/*end of project card 1 */}

        {/* Project Card 2 */}
        <div className="w-full flex flex-col items-center p-1 md:border-2 md:rounded-md border-gray-950 bg-[#2E3B4E] shadow-sm shadow-[#1E1E1E] lg:hover:shadow-md lg:hover:scale-[1.01] lg:hover:duration-700">
          <h3 className="py-4 text-2xl font-semibold text-[#FFFFFF]">
            TV Show Explorer
          </h3>
          <img
            src={tvShowDomImg}
            alt="tv shows project"
            className="max-w-2xl w-[90%] my-7"
          />
          <p className="px-6 sm:px-9 py-2 text-white text-start md:max-w-[740px]">
            During my bootcamp, I completed a project focused on
            manipulating the DOM and fetching data from the TVmaze API
            using{" "}
            <span className="text-[#FFD700] font-mediums">
              HTML, CSS and JavaScript
            </span>
            . The TV Show Explorer allowed users to search and explore
            TV shows, displaying details such as titles, genres,
            ratings, and runtime in a dynamic and user-friendly
            interface. This project showcased my ability to work with
            external APIs and create engaging web applications using
            fundamental web development technologies.
          </p>
          <ul className="flex gap-5 text-[#ffffff] font-semibold text-sm mt-4 border bg-slate-500 p-2 rounded-md">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <div className="flex gap-6 mb-5 text-white">
            <a
              href="https://cyf-riyaazct-tv.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center mt-3">
                <SlLink size={22} color="#FFD700" />
                <p className="pt-2 text-sm">Live Link</p>
              </div>
            </a>
            <a
              href="https://github.com/Riyaazct/tv-show-dom-project"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center mt-3">
                <SiGithub size={22} color="#FFD700" />
                <p className="pt-2 text-sm">View code</p>
              </div>
            </a>
          </div>
        </div>
        {/*end of project card 2 */}

        {/* Project Card 3 */}
        <div className="w-full flex flex-col items-center p-1 md:border-2 md:rounded-md border-gray-950 bg-[#2E3B4E] shadow-sm shadow-[#1E1E1E] lg:hover:shadow-md lg:hover:scale-[1.01] lg:hover:duration-700">
          <h3 className="py-4 text-2xl font-semibold text-[#FFFFFF]">
            TV Show Explorer
          </h3>
          <img
            src={tvShowDomImg}
            alt="tv shows project"
            className="max-w-2xl w-[90%] my-7"
          />
          <p className="px-6 sm:px-9 py-2 text-white text-start md:max-w-[740px]">
            During my bootcamp, I completed a project focused on
            manipulating the DOM and fetching data from the TVmaze API
            using{" "}
            <span className="text-[#FFD700] font-mediums">
              HTML, CSS and JavaScript
            </span>
            . The TV Show Explorer allowed users to search and explore
            TV shows, displaying details such as titles, genres,
            ratings, and runtime in a dynamic and user-friendly
            interface. This project showcased my ability to work with
            external APIs and create engaging web applications using
            fundamental web development technologies.
          </p>
          <ul className="flex gap-5 text-[#ffffff] font-semibold text-sm mt-4 border bg-slate-500 p-2 rounded-md">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <div className="flex gap-6 mb-5 text-white">
            <a
              href="https://cyf-riyaazct-tv.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center mt-3">
                <SlLink size={22} color="#FFD700" />
                <p className="pt-2 text-sm">Live Link</p>
              </div>
            </a>
            <a
              href="https://github.com/Riyaazct/tv-show-dom-project"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center mt-3">
                <SiGithub size={22} color="#FFD700" />
                <p className="pt-2 text-sm">View code</p>
              </div>
            </a>
          </div>
        </div>
        {/*end of project card 3 */}

        {/* Project Card 4 */}
        <div className="w-full flex flex-col items-center p-1 md:border-2 md:rounded-md border-gray-950 bg-[#2E3B4E] shadow-sm shadow-[#1E1E1E] lg:hover:shadow-md lg:hover:scale-[1.01] lg:hover:duration-700">
          <h3 className="py-4 text-2xl font-semibold text-[#FFFFFF]">
            TV Show Explorer
          </h3>
          <img
            src={tvShowDomImg}
            alt="tv shows project"
            className="max-w-2xl w-[90%] my-7"
          />
          <p className="px-6 sm:px-9 py-2 text-white text-start md:max-w-[740px]">
            During my bootcamp, I completed a project focused on
            manipulating the DOM and fetching data from the TVmaze API
            using{" "}
            <span className="text-[#FFD700] font-mediums">
              HTML, CSS and JavaScript
            </span>
            . The TV Show Explorer allowed users to search and explore
            TV shows, displaying details such as titles, genres,
            ratings, and runtime in a dynamic and user-friendly
            interface. This project showcased my ability to work with
            external APIs and create engaging web applications using
            fundamental web development technologies.
          </p>
          <ul className="flex gap-5 text-[#ffffff] font-semibold text-sm mt-4 border bg-slate-500 p-2 rounded-md">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <div className="flex gap-6 mb-5 text-white">
            <a
              href="https://cyf-riyaazct-tv.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center mt-3">
                <SlLink size={22} color="#FFD700" />
                <p className="pt-2 text-sm">Live Link</p>
              </div>
            </a>
            <a
              href="https://github.com/Riyaazct/tv-show-dom-project"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col items-center mt-3">
                <SiGithub size={22} color="#FFD700" />
                <p className="pt-2 text-sm">View code</p>
              </div>
            </a>
          </div>
        </div>
        {/*end of project card 4 */}
      </div>{" "}
      {/* end of Project Container */}
    </section>
  );
};

export default Projects;
