import {
  FaCode,
  FaLightbulb,
  FaPuzzlePiece,
  FaUsers,
} from "react-icons/fa";
import { LiaToolsSolid } from "react-icons/lia";

const AboutMe = () => {
  return (
    <section className="bg-[#2E3B4E] w-full pb-10 ">
      {/*  */}

      {/* Title */}
      <div className="h-[8.062rem] bg-[#1F4A23] text-white text-center flex flex-col justify-center border-b-2 border-b-[#1E1E1E] lg:p-20 ">
        <h2 className="text-2xl font-semibold lg:text-3xl lg:p-2 xl:text-4xl xl:p-4">
          Get to Know Me
        </h2>
        <p className="text-xs lg:text-lg xl:text-xl">
          Exploring the world of web development through passion and
          persistance
        </p>
      </div>

      <div className="flex flex-col gap-5 px-7 mt-14 md:flex-row xl:max-w-[90%] lg:mx-auto lg:gap-10 lg:pt-14 lg:justify-center">
        {/* Card container */}

        <div className="lg:hover:bg-[#1F4A23] text-left px-2 py-6 rounded-md shadow-md drop-shadow-xl shadow-black">
          {/* Card 1 */}

          <h4 className="text-xl text-[#1E1E1E] font-bold pb-2 ml-2 lg:text-2xl xl:text-3xl">
            Skills and Background
          </h4>
          <div className="flex items-center justify-start p-2 text-[0.98rem] xl:text-lg text-white">
            <FaCode color="#FFFFFF" size={25} />
            <p className="ml-2 ">
              JavaScript, React, Node.js, PostgreSQL
            </p>
          </div>
          <div className="flex items-center justify-start p-2 text-[0.98rem] xl:text-lg text-white">
            <FaLightbulb color="#FFFFFF" size={25} />
            <p className="ml-2 ">
              Passionate about technology since early high school
              years.
            </p>
          </div>
          <div className="flex items-center justify-start px-2 pb-2 pt-1 text-[0.98rem] xl:text-lg text-white">
            <FaPuzzlePiece color="#FFFFFF" size={25} />
            <p className="mt-1 ml-2 ">
              Natural aptitude for solving tech puzzles
            </p>
          </div>

          {/* End of card 1 */}
        </div>

        <div className="lg:hover:bg-[#1F4A23] text-left px-3 pb-6 pt-2 rounded-md shadow-md drop-shadow-xl shadow-black">
          {/* Card 2 */}

          <h4 className="text-xl text-[#1E1E1E] font-bold pt-3 pb-2 ml-2 lg:text-2xl xl:text-3xl">
            Journey and Discovery
          </h4>

          <div className="flex items-center text-sm text-white">
            <p className="max-w-lg p-2 text-[0.98rem] xl:text-lg text-left ">
              From a curious student to a passionate web developer, my
              journey has been fueled by the wonders of technology.
              Early encounters with computers ignited a flame that
              eventually led me to the world of coding.
            </p>
          </div>

          {/* End of card 2 */}
        </div>
      </div>
      <div className="max-w-[1200px] lg:mx-auto">
        {/* Bootcamp experience  */}
        <div className="max-w-[90%] mx-auto text-left mt-16 p-4">
          <h3 className=" text-[#1E1E1E] text-2xl font-semibold py-2 lg:text-center lg:pb-7 lg:text-3xl">
            Bootcamp Experience
          </h3>
          <p className="text-white text-[1.1rem] xl:text-lg">
            Diving into an intensive 12-month bootcamp was a turning
            point. From mastering JavaScript to building interactive
            React applications, every challenge and triumph has shaped
            my skill set and determination.
          </p>
        </div>
        {/* End of bootcamp experience */}

        {/* Personal qualities and values */}
        <div className="max-w-[90%] mx-auto text-left mt-8 p-4">
          <h3 className=" text-[#1E1E1E] text-2xl font-semibold py-2 lg:text-center lg:pb-7 lg:text-3xl">
            Personal qualities and values
          </h3>
          <div className="flex items-center py-1 text-white">
            <LiaToolsSolid size={25} />
            <p className="text-white text-[1.1rem] ml-2 xl:text-lg">
              Tenacious problem solver, no challenge is too great
            </p>
          </div>
          <div className="flex items-center py-1 text-white">
            <FaUsers size={25} />
            <p className="text-white text-[1.1rem] ml-2 xl:text-lg">
              Collaborative and adaptable team player
            </p>
          </div>
          <div className="flex items-center py-1 text-white">
            <FaPuzzlePiece size={25} />
            <p className="text-white text-[1.1rem] ml-2 xl:text-lg pt-1">
              Natural aptitude for solving tech puzzles
            </p>
          </div>
        </div>
        {/* End of Personal qualities and values */}

        {/* Aspirations and Conclusion  */}
        <div className="max-w-[90%] mx-auto text-left mt-8 p-4">
          <h3 className=" text-[#1E1E1E] text-2xl font-semibold py-2 lg:text-center lg:pb-7 lg:text-3xl">
            Aspirations and Conclusion
          </h3>
          <p className="text-white text-[1.1rem] xl:text-lg">
            My journey in web development is just beginning. With
            authenticity, integrity, and a relentless drive to excel,
            I'm excited to contribute to projects that make an impact.
            Let's connect and create something amazing together!
          </p>
        </div>
        {/* End of Aspirations and Conclusion */}
      </div>
    </section>
  );
};

export default AboutMe;
