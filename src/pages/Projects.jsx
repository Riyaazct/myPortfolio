import React from "react";
import Button from "../components/Button";

const Projects = () => {
  return (
    <section className="py-40 text-center">
      <h2>Project Categories</h2>
      <div className="flex justify-center gap-2">
        <div>
          <Button title="Full-Stack Projects"></Button>
        </div>
        <div>
          <Button title="Front-End Projects"></Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
