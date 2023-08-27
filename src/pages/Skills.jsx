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
    <>
      <h2 className="text-4xl text-[#1E1E1E] font-extrabold mt-32 mb-8">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] ">
          <ImHtmlFive size={35} />
          <p className="text-sm font-medium">HTML</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] ">
          <SiCss3 size={35} />
          <p className="text-sm font-medium">CSS</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] ">
          <SiJavascript size={35} />
          <p className="text-sm font-medium">JavaScript</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] ">
          <SiReact size={35} />
          <p className="text-sm font-medium">React</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] ">
          <FaNodeJs size={35} />
          <p className="text-sm font-medium">Node.js</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] ">
          <SiExpress size={35} />
          <p className="text-sm font-medium">Express.js</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] ">
          <SiPostgresql size={35} />
          <p className="text-sm font-medium">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] ">
          <SiTailwindcss size={35} />
          <p className="text-sm font-medium">TailwindCss</p>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] ">
          <SiGithub size={35} />
          <p className="text-sm font-medium">Github</p>
        </div>
      </div>
      <Button />
    </>
  );
};

export default Skills;
