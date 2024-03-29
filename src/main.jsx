import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import projectData from "./utils/projectData.jsx";
import ProjectPage from "./pages/projects/ProjectPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<App />} />
        {projectData.map(
          (
            {
              path,
              title,
              image,
              description,
              technologies,
              otherTechnologies,
              liveLink,
              githubLink,
            },
            index
          ) => (
            <Route
              key={index}
              exact
              path={path}
              element={
                <ProjectPage
                  title={title}
                  image={image}
                  description={description}
                  technologies={technologies}
                  githubLink={githubLink}
                  liveLink={liveLink}
                  otherTechnologies={otherTechnologies}
                />
              }
            />
          )
        )}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
