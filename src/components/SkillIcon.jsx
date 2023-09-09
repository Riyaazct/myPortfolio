// import React from "react";
import PropTypes from "prop-types";

const SkillIcon = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-1 p-2 text-[#1F4A23] hover:scale-105 duration-300 opacity-40 hover:opacity-100">
      {icon}
      <p className="hidden text-xs font-medium sm:block lg:text-lg">
        {label}
      </p>
    </div>
  );
};

SkillIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};

export default SkillIcon;
