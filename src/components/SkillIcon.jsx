// Import necessary dependencies
import PropTypes from "prop-types";

// Define a functional component called SkillIcon that takes in 'icon' and 'label' props
const SkillIcon = ({ icon, label }) => {
  return (
    <div className="flex flex-col flex-wrap items-center gap-1 p-2 text-[#1F4A23] hover:scale-105 duration-300 opacity-40 hover:opacity-100">
      {/* Display the provided 'icon' element */}
      {icon}
      {/* Display the provided 'label' as a tooltip on hover */}
      <p className="text-xs font-medium sm:block lg:text-lg">
        {label}
      </p>
    </div>
  );
};

// Define propTypes to specify the expected types for each prop
SkillIcon.propTypes = {
  icon: PropTypes.element.isRequired, // 'icon' should be a required React element
  label: PropTypes.string.isRequired, // 'label' should be a required string
};

// Export the SkillIcon component as the default export of this module
export default SkillIcon;
