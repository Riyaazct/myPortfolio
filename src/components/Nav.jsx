import { useState, useEffect } from "react";
import { Spin, Spin as Hamburger } from "hamburger-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="w-full text-[#ffffff] font-bold absolute top-0 left-0 right-0">
      <ul
        className={
          isOpen
            ? "ease-in duration-500 fixed left-0 top-0 flex flex-col justify-center items-center w-full h-screen bg-[#1F4A23]"
            : "absolute top-0 h-screen left-[100%] ease-in duration-500 flex flex-col w-full md:h-min md:static md:flex-row justify-center items-center"
        }
      >
        <li className="p-4 text-3xl ">About</li>
        <li className="p-4 text-3xl ">Projects</li>
        <li className="p-4 text-3xl ">Contact</li>
      </ul>
      <div className="absolute top-3 right-3 md:hidden ">
        <Spin
          rounded
          toggled={isOpen}
          toggle={setIsOpen}
          distance="sm"
          duration={0.9}
        />
      </div>
    </div>
  );
};

export default Nav;
