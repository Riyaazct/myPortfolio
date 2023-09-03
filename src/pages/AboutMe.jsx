import { FaCode, FaLightbulb, FaPuzzlePiece } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="bg-[#2E3B4E] w-full h-screen">
      {/*  */}

      {/* Title */}
      <div className="h-[8.062rem] bg-[#1F4A23] text-white text-center flex flex-col justify-center border-b-2 border-b-[#1E1E1E]">
        <h2 className="text-2xl font-semibold">Get to Know Me</h2>
        <p className="text-xs">
          Exploring the world of web development through passion and
          persistance
        </p>
      </div>

      <div className="flex flex-col gap-5 px-7 mt-14 md:flex-row">
        {/* Card container */}

        <div className="bg-[#1F4A23] text-left px-2 py-6 mx-auto rounded-md shadow-md drop-shadow-xl shadow-black">
          {/* Card 1 */}

          <h4 className="text-xl text-[#1E1E1E] font-bold pb-2 ml-10">
            Skills and Background
          </h4>
          <div className="flex items-center justify-start p-2 text-sm text-white">
            <FaCode color="#FFFFFF" size={25} />
            <p className="ml-2">
              JavaScript, React, Node.js, PostgreSQL
            </p>
          </div>
          <div className="flex items-center justify-start p-2 text-sm text-white">
            <FaLightbulb color="#FFFFFF" size={25} />
            <p className="ml-2">
              Passionate about technology since early high school
              years.
            </p>
          </div>
          <div className="flex items-center justify-start p-2 text-sm text-white">
            <FaPuzzlePiece color="#FFFFFF" size={25} />
            <p className="ml-2">
              Natural aptitude for solving tech puzzles
            </p>
          </div>

          {/* End of card 1 */}
        </div>

        <div className="bg-[#1F4A23] text-left px-2 pb-6 pt-2 rounded-md shadow-md drop-shadow-xl shadow-black">
          {/* Card 2 */}

          <h4 className="text-xl text-[#1E1E1E] font-bold pt-3 pb-2 ml-10">
            Journey and Discovery
          </h4>

          <div className="flex items-center text-sm text-white">
            <p className="max-w-lg p-2 text-left">
              From a curious student to a passionate web developer, my
              journey has been fueled by the wonders of technology.
              Early encounters with computers ignited a flame that
              eventually led me to the world of coding.
            </p>
          </div>

          {/* End of card 2 */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
