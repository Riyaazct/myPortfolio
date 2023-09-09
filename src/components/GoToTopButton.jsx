import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState();

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

export default GoToTopButton;
