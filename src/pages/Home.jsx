import Nav from "../components/Nav";
import Skills from "./Skills";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { ImProfile } from "react-icons/im";

const Home = () => {
  return (
    <>
      <Nav />
      <section className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-[rgba(31,74,35,1)] via-[rgba(31,74,35,0.7104)] to-[rgba(31,74,35,0)]">
        <div>
          <h1>
            <span className="text-white text-[32px] font-semibold">
              Hello,
            </span>

            <br />

            <span className="text-[#FFD700] text-[32px] font-semibold">
              My Name Is Riyaaz
            </span>
          </h1>
          <div>
            <p className="text-[#FFD700]">
              Full-Stack Developer{" "}
              <span className="text-white">
                Creating Digital Magic
              </span>
            </p>
          </div>
          <div>
            <p className="text-white">
              Building the Future Web with{" "}
              <span className="text-[#FFD700]">React</span> and
              <span className="text-[#FFD700]"> Node.js</span>
            </p>
          </div>
          <div className="flex gap-3 p-4 mx-auto text-white w-min">
            <SiGithub size={28} />
            <BsLinkedin size={28} />
            <ImProfile size={28} />
          </div>
        </div>
        <Skills />
      </section>
    </>
  );
};

export default Home;
