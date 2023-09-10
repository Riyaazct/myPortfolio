// Import necessary dependencies and components
import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";
import EmailIcon from "../components/EmailIcon";
import { BsLinkedin } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { PiFileHtmlBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";
import cv from "../assets/Riyaaz-Singh.pdf";

// Define a functional component called Home
const Home = () => {
  // Define state to manage the size of icons
  const [iconSize, setIconSize] = useState(28);

  // Use useEffect to update icon size based on window width
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

  // Render the home section with content and icons
  return (
    <>
      <Nav />
      <section className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-[rgba(31,74,35,1)] via-[rgba(31,74,35,0.7104)] to-[rgba(31,74,35,0)]">
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
            <p className="text-[#FFD700] text-lg lg:text-xl xl:text-2xl pt-2 lg:pl-1">
              Full-Stack Developer{" "}
              <span className="text-white">
                Creating Digital Magic
              </span>
            </p>
          </div>
          <div>
            <p className="text-lg text-white lg:text-xl xl:text-2xl lg:pl-1">
              Building the Future Web with{" "}
              <span className="text-[#FFD700]">React</span> and{" "}
              <span className="text-[#FFD700]">Node.js</span>
            </p>
          </div>
          <div className="flex gap-6 p-4 mx-auto text-white xl:gap-9 md:gap-7 w-min lg:my-4">
            {/* Links to GitHub, LinkedIn, Resume, and EmailIcon */}
            <a
              className="hover:opacity-80"
              href="https://github.com/Riyaazct"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <span title="Click to view Github profile">
                <FaGithub size={iconSize} />{" "}
              </span>
            </a>
            <a
              className="hover:opacity-80"
              href="https://www.linkedin.com/in/riyaaz-singh/"
              target="_blank"
              rel="noreferrer"
            >
              <span title="Click to view LinkedIn Profile">
                <BsLinkedin size={iconSize} />{" "}
              </span>
            </a>
            <a
              className="hover:opacity-80"
              href={cv}
              target="_blank"
              rel="noreferrer"
            >
              <span title="Click to view Resume">
                <ImProfile size={iconSize} />{" "}
              </span>
            </a>
            <EmailIcon
              iconSize={iconSize}
              email="riyaaz@riyaazscodecraft.co.za"
            />
          </div>
          <div className="text-center">
            <Button title="View Projects" linkTo="#projects" />
          </div>
        </div>
        {/* Absolute positioned icons */}
        <div className="absolute hidden lg:block left-9 top-10">
          <IoLogoJavascript
            size={160}
            className="opacity-10 hover:opacity-[0.15] "
            color="#1F4A23"
          />
        </div>
        <div className="absolute hidden lg:block right-9 bottom-28 ">
          <PiFileHtmlBold
            size={130}
            className="opacity-5 hover:opacity-[0.07]"
            color="#1F4A23"
          />
        </div>
        <div className="absolute hidden lg:block right-56 top-44 ">
          <BiLogoTailwindCss
            size={160}
            className="opacity-[0.06] hover:opacity-[0.13]"
            color="#1F4A23"
          />
        </div>
        <div className="hidden lg:block absolute left-[5%] bottom-36 ">
          <BiLogoReact
            size={160}
            className="opacity-5 hover:opacity-[0.07]"
            color="#1F4A23"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
