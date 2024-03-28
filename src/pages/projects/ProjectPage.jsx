/* eslint-disable react/prop-types */
const ProjectPage = ({ title, image, description, technologies }) => {
  return (
    <div className="">
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>{description}</p>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectPage;
