import Button from "../components/Button";
import { ImHtmlFive } from "react-icons/im";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="text-center">
      <h2 className="text-4xl text-[#1E1E1E] font-extrabold pb-8 lg:text-5xl">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-2 lg:gap-5 lg:pb-16">
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] hover:scale-105 duration-300 opacity-40 hover:opacity-100 ">
          <ImHtmlFive
            size={
              window.innerWidth <= 768
                ? 35
                : window.innerWidth <= 1024
                ? 48
                : 58
            }
          />
          <p className="text-sm font-medium lg:text-lg">HTML</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] hover:scale-105 duration-300 opacity-40 hover:opacity-100 ">
          <SiCss3
            size={
              window.innerWidth <= 768
                ? 35
                : window.innerWidth <= 1024
                ? 48
                : 58
            }
          />
          <p className="text-sm font-medium lg:text-lg">CSS</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] hover:scale-105 duration-300 opacity-40 hover:opacity-100 ">
          <SiJavascript
            size={
              window.innerWidth <= 768
                ? 35
                : window.innerWidth <= 1024
                ? 48
                : 58
            }
          />
          <p className="text-sm font-medium lg:text-lg">JavaScript</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] hover:scale-105 duration-300 opacity-40 hover:opacity-100 ">
          <SiReact
            size={
              window.innerWidth <= 768
                ? 35
                : window.innerWidth <= 1024
                ? 48
                : 58
            }
          />
          <p className="text-sm font-medium lg:text-lg">React</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] hover:scale-105 duration-300 opacity-40 hover:opacity-100 ">
          <FaNodeJs
            size={
              window.innerWidth <= 768
                ? 35
                : window.innerWidth <= 1024
                ? 48
                : 58
            }
          />
          <p className="text-sm font-medium lg:text-lg">Node.js</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] hover:scale-105 duration-300 opacity-40 hover:opacity-100 ">
          <SiExpress
            size={
              window.innerWidth <= 768
                ? 35
                : window.innerWidth <= 1024
                ? 48
                : 58
            }
          />
          <p className="text-sm font-medium lg:text-lg">Express.js</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] hover:scale-105 duration-300 opacity-40 hover:opacity-100 ">
          <SiPostgresql
            size={
              window.innerWidth <= 768
                ? 35
                : window.innerWidth <= 1024
                ? 48
                : 58
            }
          />
          <p className="text-sm font-medium lg:text-lg">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] hover:scale-105 duration-300 opacity-40 hover:opacity-100 ">
          <SiTailwindcss
            size={
              window.innerWidth <= 768
                ? 35
                : window.innerWidth <= 1024
                ? 48
                : 58
            }
          />
          <p className="text-sm font-medium lg:text-lg">
            TailwindCss
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] hover:scale-105 duration-300 opacity-40 hover:opacity-100 ">
          <SiGithub
            size={
              window.innerWidth <= 768
                ? 35
                : window.innerWidth <= 1024
                ? 48
                : 58
            }
          />
          <p className="text-sm font-medium lg:text-lg">Github</p>
        </div>
      </div>
      <Button title="Contact Me" />
    </section>
  );
};

export default Skills;
