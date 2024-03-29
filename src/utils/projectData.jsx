/* eslint-disable react/no-unescaped-entities */
import project01 from "../assets/images/project01.png";
import project02 from "../assets/images/project02.png";
import project03 from "../assets/images/project03.png";
import project04 from "../assets/images/project04.png";
import project05 from "../assets/images/project05.png";

const projectData = [
  {
    path: "/project01",
    title: "EduFocus Projects",
    image: project01,
    description: (
      <>
        In our final NGO project, I was part of a collaborative team
        of seven, including four student developers, two tech leads,
        and a scrum master, following agile practices. My
        responsibilities encompassed GitHub hosting, core page
        creation ('About Us' and 'Our Photos'), and contributing to
        the admin page for training material management in the
        database. We employed JavaScript, React, Node.js, Express,
        PostgreSQL, and CSS , highlighting both our teamwork and
        technical capabilities.
        <br />
        <br />
        <span className="text-[#FFD700] font-medium">
          NB! Please allow 1 minute for the server to boot up when
          viewing the live link.
        </span>
      </>
    ),
    projectType: "Full-Stack",
    technologies: [
      "JavaScript",
      "React",
      "Node",
      "Express",
      "PostgreSQL",
      "CSS",
    ],
    otherTechnologies: [
      "Github",
      "Github Projects",
      "Agile",
      "React Router",
    ],
    liveLink: "https://starter-kit-g0y0.onrender.com/",
    githubLink: "https://github.com/Riyaazct/no-bugs-edufocus-za",
  },
  {
    path: "/project02",
    title: "Exploring SA",
    image: project02,
    description: (
      <>
        <p>
          Exploring SA Transport and Tours is a comprehensive web
          platform designed for a premier tours and transportation
          business operating in South Africa. Built with React.js for
          frontend interactivity, it facilitates easy exploration of
          diverse travel services, including charter services, airport
          transfers, and corporate transportation. The platform
          ensures a seamless user experience, incorporating features
          like contact forms, dynamic content, and responsive design.
          By leveraging SEO techniques and tailored content, it
          enhances visibility and engagement, empowering users to plan
          unforgettable journeys with ease.
        </p>
      </>
    ),
    projectType: "Front-end",
    technologies: ["Front End", "React", "JavaScript", "Tailwind"],
    otherTechnologies: ["Emailjs", "SEO"],
    liveLink: "https://exploringsa.co.za/",
    githubLink: "https://github.com/Riyaazct/exploringsa",
  },
  {
    path: "/project03",
    title: "TV Show Explorer",
    image: project03,
    description: (
      <>
        During the software development course, I completed a project
        focused on manipulating the DOM and fetching data from the
        TVmaze API using{" "}
        <span className="text-[#FFD700] font-medium">
          HTML, CSS and JavaScript
        </span>
        . The TV Show Explorer allowed users to search and explore TV
        shows, displaying details such as titles, genres, ratings, and
        runtime in a dynamic and user-friendly interface. This project
        showcased my ability to work with external APIs and create
        engaging web applications using fundamental web development
        technologies.
      </>
    ),
    projectType: "JavaScript DOM",
    technologies: ["Front End", "HTML", "CSS", "JavaScript"],
    otherTechnologies: ["JavaScript DOM"],
    liveLink: "https://cyf-riyaazct-tv.netlify.app/",
    githubLink: "https://github.com/Riyaazct/tv-show-dom-project/",
  },
  {
    path: "/project04",
    title: "My Portfolio",
    image: project04,
    description: (
      <>
        In my portfolio project, I've integrated a range of features
        to elevate user engagement and functionality. You'll discover
        interactive project cards that provide detailed insights into
        my work. The design is fully responsive, ensuring a smooth
        browsing experience across various devices. Navigate
        effortlessly with the user-friendly menu and a contact form,
        allowing visitors to reach out and connect with me directly.
        Explore my skills, projects, and get in touch through this
        comprehensive platform, built using JavaScript, React,
        Tailwind and CSS to deliver a seamless and visually appealing
        experience.
      </>
    ),
    projectType: "Front-end",
    technologies: ["React.js", "JavaScript", "Tailwindcss", "CSS"],
    otherTechnologies: [
      "React-Router",
      "Emailjs",
      "React Slick",
      "React-tooltip",
      "Slick Carousel",
    ],
    liveLink: "https://riyaazscodecraft.co.za/",
    githubLink: "https://github.com/Riyaazct/myPortfolio",
  },
  {
    path: "/project05",
    title: "Online Quotation Generator",
    image: project05,
    description: (
      <>
        Currently working on this Fullstack React, NodeJs and
        PostgreSQL project.
        <br />
        My intention is to create an online platform that solves an
        issue where manufacturers of steel structures for home
        security spend countless hours working on quotations. I'd like
        to minimize this by creating a webapp, that will serve not
        only as a means to minimizing time spent in doing quotations,
        but also a database of clients, suppliers and materials all in
        one. The business owner should also be able to send quotations
        directly from the webapp in pdf format and manage stock
        inventory and more... <br />
        Thus far I have completed the authentication and authorization
        aspect of it using Jwt/Refresh Tokens.
        <br />A lot of planning is needed for the rest of the project
        so I'm spending time in figma for a basic design and also
        learning Redux because It seems it would be a great fit for a
        project with a scope such as this.
        <br />
        <br />
        <strong>Login Details for testing:</strong> <br />
        Email: test@gmail.com <br />
        password: 12345678
        <br />
        <br />
        <strong>
          NB! Password requirement purposely left as unsecure(for now)
        </strong>
      </>
    ),
    projectType: "Full-Stack",
    technologies: [
      "React",
      "JavaScript",
      "NodeJs",
      "PostgreSQL",
      "Bootstrap 4",
      "CSS",
    ],
    otherTechnologies: [
      "Formik",
      "Yup",
      "React Router",
      "axios",
      "JSON WebToken",
    ],
    liveLink: "https://all-in-one-quotation-generator.vercel.app/",
    githubLink: "",
  },
  {
    path: "/project06",
    title: "Todo List Application",
    image: project05,
    description: (
      <>
        <p>
          The Todo List Application is a{" "}
          <span className="text-[#FFD700] font-medium">
            full-stack web
          </span>{" "}
          application built using{" "}
          <span className="text-[#FFD700] font-medium">React.js</span>{" "}
          for the frontend and{" "}
          <span className="text-[#FFD700] font-medium">
            Node.js with Express.js
          </span>{" "}
          for the backend. It allows users to manage their tasks
          efficiently by providing features such as task creation,
          editing, deletion, categorization, and marking tasks as
          completed. The application utilizes JWT authentication for
          user login and registration, ensuring secure access to user
          data. Additionally, it integrates with Google OAuth for
          seamless authentication and offers refresh token
          functionality to maintain user sessions. With its intuitive
          user interface and robust functionality, the Todo List
          Application simplifies task management and enhances
          productivity.
        </p>
        <p>
          <strong>Key Features:</strong> Task creation, editing, and
          deletion Categorization of tasks Marking tasks as completed
          User authentication with JWT and Google OAuth Refresh token
          functionality for maintaining user sessions Intuitive and
          responsive user interface
        </p>
        <p>
          Technologies Used: Frontend: React.js, React Router, Redux
          Backend: Node.js, Express.js Database: PostgreSQL
          Authentication: JWT, Google OAuth Additional Libraries:
          Axios, bcrypt, JWT GitHub Repository: Link to GitHub
          Repository
        </p>
      </>
    ),
    projectType: "Full-Stack",
    technologies: [
      "React",
      "JavaScript",
      "NodeJs",
      "PostgreSQL",
      "Redux-Toolkit",
      "Tailwind",
    ],
    otherTechnologies: [
      "React Router",
      "Express.js",
      "Axios",
      "JSON Webtoken",
      "Formik",
      "Yup",
    ],
    liveLink: "https://todo-list-react-two-black.vercel.app/",
    githubLink: "https://github.com/Riyaazct/todos",
  },
];

export default projectData;
