import PropTypes from "prop-types";

const Button = ({ title, linkTo }) => {
  return (
    <button className="py-1 px-3 border-2 border-[#1F4A23] bg-[#FFD700] rounded-md text-[#1f4a23] font-semibold shadow-[#1E1E1E] text-xs shadow-md md:py-2 lg:py-3 lg:text-sm lg:px-5 hover:bg-transparent">
      <a href={linkTo}>{title}</a>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default Button;
