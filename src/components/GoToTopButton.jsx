// Import necessary dependencies from React and other libraries
import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

// Define a functional component called GoToTopButton
const GoToTopButton = () => {
  // Initialize a state variable 'isVisible' using the useState hook
  const [isVisible, setIsVisible] = useState();

  // Define a function 'handleScroll' to check if the user has scrolled down more than 300 pixels
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // If scrolled more than 300 pixels, set 'isVisible' to true
    } else {
      setIsVisible(false); // If not, set 'isVisible' to false
    }
  };

  // Use the useEffect hook to add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts (cleanup)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define a function 'scrollToTop' to scroll the window to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Apply a smooth scrolling behavior
    });
  };

  // Render a button to go to the top of the page when 'isVisible' is true
  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-[#1F4A23] text-white p-3 rounded-full shadow-lg hover:bg-green-900 transition duration-300"
          onClick={scrollToTop}
        >
          <HiArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

// Export the GoToTopButton component as the default export of this module
export default GoToTopButton;
