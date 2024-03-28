/* eslint-disable react/prop-types */
const ProjectPage = ({ title, image, description, technologies }) => {
  return (
    <section className="bg-[#2e3b4e] h-full p-10 flex text-[#FFFFFF]">
      <div className="flex flex-col items-center w-full h-[90%] m-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-semibold">{title}</h1>
        <img
          src={image}
          alt=""
          className="h-auto m-auto max-w-[700px] rounded-md"
        />
        <p className="my-5 text-lg max-w-[700px]">{description}</p>
        <ul className="flex my-5 ">
          {technologies.map((tech, index) => (
            <li key={index} className="px-2 text-2xl font-semibold">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectPage;
