import project01 from "../assets/images/project01.png";
import project02 from "../assets/images/project02.png";
import project03 from "../assets/images/project03.png";
import project04 from "../assets/images/project04.png";

const projectData = [
  {
    title: "Edufocus Projects",
    image: project01,
    description: (
      <>
        In our final NGO project, I was part of a collaborative team
        of seven, including four student developers, two tech leads,
        and a scrum master, following agile practices. My
        responsibilities encompassed GitHub hosting, core page
        creation ('About Us' and 'Our Photos'), and contributing to
        the admin page for training material management in the
        database. We employed{" "}
        <span className="text-[#FFD700] font-medium">
          {" "}
          JavaScript, React, Node.js, Express, PostgreSQL, and CSS
        </span>
        , highlighting both our teamwork and technical capabilities.
      </>
    ),
    technologies: [
      "Full Stack",
      "JavaScript",
      "React",
      "Node",
      "Express",
      "PostgreSQL",
      "Github",
      "Agile",
      "",
    ],
    liveLink: "https://starter-kit-g0y0.onrender.com/",
    githubLink: "https://github.com/Riyaazct/no-bugs-edufocus-za",
  },
  {
    title: "Exploring SA",
    image: project02,
    description: (
      <>
        After graduating from a bootcamp, I embarked on a project
        using{" "}
        <span className="text-[#FFD700] font-medium">
          JavaScript, React, and Tailwind CSS
        </span>
        . This{" "}
        <span className="text-[#FFD700] font-medium">front-end</span>{" "}
        website, following a mobile-first approach, optimizes client
        hosting costs. Future plans include adding a backend. I
        integrated a contact form via EmailJS and a WhatsApp widget
        for seamless communication. Implementing SEO in{" "}
        <span className="text-[#FFD700] font-medium">React</span>, I
        strategically used keywords with meta tags. Overcoming hosting
        and DNS challenges, I ensured continuous email functionality.
      </>
    ),
    technologies: [
      "Front End",
      "React",
      "JavaScript",
      "Tailwind",
      "Emailjs",
      "SEO",
    ],
    liveLink: "https://exploringsa.co.za/",
    githubLink: "https://github.com/Riyaazct/exploringsa",
  },
  {
    title: "TV Show Explorer",
    image: project03,
    description: (
      <>
        During my bootcamp, I completed a project focused on
        manipulating the DOM and fetching data from the TVmaze API
        using{" "}
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
    technologies: ["Front End", "HTML", "CSS", "JavaScript"],
    liveLink: "https://cyf-riyaazct-tv.netlify.app/",
    githubLink: "https://github.com/Riyaazct/tv-show-dom-project/",
  },
  {
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
        comprehensive platform, built using{" "}
        <span className="text-[#FFD700] font-medium">
          JavaScript, React, Tailwind and CSS
        </span>{" "}
        to deliver a seamless and visually appealing experience.
      </>
    ),
    technologies: ["Front End", "JavaScript", "Tailwindcss", "CSS"],
    liveLink: "https://cyf-riyaazct-tv.netlify.app/",
    githubLink: "https://github.com/Riyaazct/tv-show-dom-project/",
  },
];

export default projectData;
