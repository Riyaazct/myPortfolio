// Import necessary dependencies from React and other libraries
import { useState, useEffect } from "react";
import { Spin } from "hamburger-react";

// Define a functional component called Nav
const Nav = () => {
  // Initialize state variables 'isOpen' and 'originalOverflow' using the useState hook
  const [isOpen, setIsOpen] = useState(false);
  const [originalOverflow, setOriginalOverflow] = useState("");

  // Use the useEffect hook to handle window resizing and close the menu when the window width is >= 768 pixels
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close the menu
      }
    };
    handleResize();

    // Add a resize event listener to the window and remove it when the component unmounts
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Use the useEffect hook to save the original 'overflow' style of the body element
  useEffect(() => {
    setOriginalOverflow(document.body.style.overflow);

    // Restore the original 'overflow' style when the component unmounts (cleanup)
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Define a function 'toggleMenu' to toggle the mobile menu and control body overflow
  const toggleMenu = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen); // Toggle 'isOpen' state

      // Set or reset the body's 'overflow' style to prevent scrolling when the menu is open
      if (!isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = originalOverflow;
      }
    }
  };

  // Render the navigation menu and hamburger icon
  return (
    <div className="w-full text-[#ffffff] font-bold absolute top-0 ">
      {/* Render the navigation menu */}
      <ul
        className={
          isOpen
            ? "ease-in duration-300 fixed left-0 top-0 flex flex-col justify-center items-center w-full h-screen bg-[#2E3B4E] z-50"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 w-full md:h-min md:static md:flex-row justify-center items-center flex flex-col "
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

      {/* Render the hamburger icon for mobile */}
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

// Export the Nav component as the default export of this module
export default Nav;
