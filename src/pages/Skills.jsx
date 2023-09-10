// Import necessary components and icons
import Button from "../components/Button";
import { ImHtmlFive } from "react-icons/im";
import SkillIcon from "../components/SkillIcon";
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
import { DiNodejs } from "react-icons/di";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define a functional component called Skills
const Skills = () => {
  // Configure settings for the Slider component
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    touchMove: true,
    cssEase: "linear",
  };

  return (
    <section className="text-center">
      {/* Skills section header */}
      <h2 className="text-4xl text-[#1E1E1E] font-extrabold pb-8 lg:text-5xl">
        Skills
      </h2>
      <div className="pb-10 lg:pb-16">
        {/* Slider component for displaying skill icons */}
        <Slider
          className="max-w-full mx-auto text-xs lg:max-w-7xl sm:max-w-[90%]"
          {...settings}
        >
          {/* SkillIcon components for individual skills */}
          <SkillIcon
            icon={
              <ImHtmlFive
                size={
                  window.innerWidth <= 768
                    ? 35
                    : window.innerWidth <= 1024
                    ? 48
                    : 58
                }
              />
            }
            label={"HTML"}
          />
          <SkillIcon
            icon={
              <SiCss3
                size={
                  window.innerWidth <= 768
                    ? 35
                    : window.innerWidth <= 1024
                    ? 48
                    : 58
                }
              />
            }
            label={"CSS"}
          />
          <SkillIcon
            icon={
              <SiJavascript
                size={
                  window.innerWidth <= 768
                    ? 35
                    : window.innerWidth <= 1024
                    ? 48
                    : 58
                }
              />
            }
            label={"JavaScript"}
          />
          <SkillIcon
            icon={
              <SiReact
                size={
                  window.innerWidth <= 768
                    ? 35
                    : window.innerWidth <= 1024
                    ? 48
                    : 58
                }
              />
            }
            label={"React.js"}
          />
          <SkillIcon
            icon={
              <DiNodejs
                size={
                  window.innerWidth <= 768
                    ? 35
                    : window.innerWidth <= 1024
                    ? 48
                    : 58
                }
              />
            }
            label={"Node.js"}
          />
          <SkillIcon
            icon={
              <FaNodeJs
                size={
                  window.innerWidth <= 768
                    ? 35
                    : window.innerWidth <= 1024
                    ? 48
                    : 58
                }
              />
            }
            label={"Express.js"}
          />
          <SkillIcon
            icon={
              <SiPostgresql
                size={
                  window.innerWidth <= 768
                    ? 35
                    : window.innerWidth <= 1024
                    ? 48
                    : 58
                }
              />
            }
            label={"PostgreSQL"}
          />
          <SkillIcon
            icon={
              <SiTailwindcss
                size={
                  window.innerWidth <= 768
                    ? 35
                    : window.innerWidth <= 1024
                    ? 48
                    : 58
                }
              />
            }
            label={"Tailwind CSS"}
          />
          <SkillIcon
            icon={
              <SiGithub
                size={
                  window.innerWidth <= 768
                    ? 35
                    : window.innerWidth <= 1024
                    ? 48
                    : 58
                }
              />
            }
            label={"Github"}
          />
        </Slider>
        {/* End of Slider component */}
      </div>
      {/* Button for Contact Me */}
      <Button title="Contact Me" linkTo="#contact" />
    </section>
  );
};

export default Skills;
