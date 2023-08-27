const Button = ({ title }) => {
  return (
    <button className="mt-6 py-1 px-6 border-2 border-[#1F4A23] bg-[#FFD700] rounded-md text-[#1f4a23] font-semibold shadow-[#1E1E1E] shadow-md">
      {title}
    </button>
  );
};

export default Button;
