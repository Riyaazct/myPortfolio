import { useState, useEffect } from "react";
import { Spin, Spin as Hamburger } from "hamburger-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [originalOverflow, setOriginalOverflow] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if ((window, innerWidth >= 768)) {
        setIsOpen(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setOriginalOverflow(document.body.style.overflow);

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const toggleMenu = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);

      if (!isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = originalOverflow;
      }
    }
  };

  return (
    <div className="w-full text-[#ffffff] font-bold absolute top-0 left-0 right-0">
      <ul
        className={
          isOpen
            ? "ease-in duration-500 fixed left-0 top-0 flex flex-col justify-center items-center w-full h-screen bg-[#2E3B4E] z-50"
            : "absolute top-0 h-screen left-[100%] ease-in duration-500 flex flex-col w-full md:h-min md:static md:flex-row justify-center items-center "
        }
        onClick={toggleMenu}
      >
        <a href="#projects">
          <li className="px-8 py-4 text-xl text-white lg:text-3xl hover:opacity-80">
            Projects
          </li>
        </a>
        <a href="#about">
          <li className="px-8 py-4 text-xl text-white lg:text-3xl hover:opacity-80">
            About
          </li>
        </a>
        <a href="#contact">
          <li className="px-8 py-4 text-xl text-white lg:text-3xl hover:opacity-80">
            Contact
          </li>{" "}
        </a>
      </ul>
      <div className="absolute z-50 overflow-hidden top-3 right-3 md:hidden">
        <Spin
          rounded
          toggled={isOpen}
          toggle={toggleMenu}
          distance="sm"
          duration={0.9}
        />
      </div>
    </div>
  );
};

export default Nav;
