import PropTypes from "prop-types";

const Button = ({ title }) => {
  return (
    <button className="py-1 px-3 border-2 border-[#1F4A23] bg-[#FFD700] rounded-md text-[#1f4a23] font-semibold shadow-[#1E1E1E] text-xs shadow-md">
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
