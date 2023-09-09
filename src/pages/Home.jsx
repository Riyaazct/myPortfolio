import { useEffect, useState } from "react";

import Nav from "../components/Nav";
import Button from "../components/Button";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { PiFileHtmlBold } from "react-icons/pi";
import { BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";

const Home = () => {
  const [iconSize, setIconSize] = useState(28);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIconSize(30);
      } else if (window.innerWidth < 1024) {
        setIconSize(35);
      } else {
        setIconSize(45);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Nav />
      <section className=" flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-[rgba(31,74,35,1)] via-[rgba(31,74,35,0.7104)] to-[rgba(31,74,35,0)]">
        <div>
          <h1>
            <span className="text-6xl font-semibold text-white lg:text-7xl xl:text-8xl">
              Hello,
            </span>

            <br />

            <span className="text-[#FFD700] text-4xl font-semibold lg:text-5xl xl:text-6xl">
              My Name Is Riyaaz
            </span>
          </h1>
          <div>
            <p className="text-[#FFD700] text-lg lg:text-xl xl:text-2xl pt-2">
              Full-Stack Developer{" "}
              <span className="text-white">
                Creating Digital Magic
              </span>
            </p>
          </div>
          <div>
            <p className="text-lg text-white lg:text-xl xl:text-2xl">
              Building the Future Web with{" "}
              <span className="text-[#FFD700]">React</span> and
              <span className="text-[#FFD700]"> Node.js</span>
            </p>
          </div>
          <div className="flex gap-6 p-4 mx-auto text-white xl:gap-9 md:gap-7 w-min lg:my-4">
            <SiGithub size={iconSize} />
            <BsLinkedin size={iconSize} />
            <ImProfile size={iconSize} />
          </div>
          <div className="text-center">
            <Button title="View Projects" />
          </div>
        </div>
        <div className="absolute hidden lg:block left-9 top-10">
          <IoLogoJavascript
            size={160}
            className="opacity-10 "
            color="#1F4A23"
          />
        </div>
        <div className="absolute hidden lg:block right-9 bottom-28 ">
          <PiFileHtmlBold
            size={130}
            className="opacity-5 "
            color="#1F4A23"
          />
        </div>
        <div className="absolute hidden lg:block right-56 top-44 ">
          <BiLogoTailwindCss
            size={160}
            className="opacity-10 "
            color="#1F4A23"
          />
        </div>
        <div className="hidden lg:block absolute left-[5%] bottom-36 ">
          <BiLogoReact
            size={160}
            className="opacity-5 "
            color="#1F4A23"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
