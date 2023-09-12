import project01 from "../assets/images/project01.png";
import project02 from "../assets/images/project02.png";
import project03 from "../assets/images/project03.png";

const projectData = [
  {
    title: "Edufocus Projects",
    image: project01,
    description: (
      <>
        In our final project for an NGO, a 7-member team, including 4
        full-stack student developers, 2 volunteer tech leads, and
        scrum master, worked collaboratively following{" "}
        <span className="text-[#FFD700] font-medium">agile</span>{" "}
        principles. I managed GitHub hosting, resolving numerous merge
        conflicts as we navigated{" "}
        <span className="text-[#FFD700] font-medium">GitHub</span>. I
        was responsible for creating essential pages like 'About Us'
        and 'Our Photos.' These pages facilitated efficient data
        storage and image retrieval from the database. I also
        contributed to the admin page for training material management
        in the database. We utilized{" "}
        <span className="text-[#FFD700] font-medium">
          JavaScript, React, Node.js, Express, PostgreSQL, and Vanilla
          CSS
        </span>{" "}
        to deliver a successful project, showcasing our teamwork and
        technical skills.
      </>
    ),
    technologies: [
      "Full Stack",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
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
      "React.js",
      "JavaScript",
      "Tailwindcss",
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
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://cyf-riyaazct-tv.netlify.app/",
    githubLink: "https://github.com/Riyaazct/tv-show-dom-project/",
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
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://cyf-riyaazct-tv.netlify.app/",
    githubLink: "https://github.com/Riyaazct/tv-show-dom-project/",
  },
];

export default projectData;
