import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#1F4A23] p-6 text-center text-[#CCCCCC]">
      <span>© {currentYear} Copyright: </span>
      <a
        className="font-semibold text-[#CCCCCC] hover:text-[#FFD700]"
        href="/"
        aria-label="our website link to take you back to the home page"
      >
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Riyaaz's Code Craft
      </a>
    </div>
  );
};

export default Copyright;
