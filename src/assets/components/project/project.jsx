import React from "react";
import "./project.css";
import ProjectCarousel from "../projectCarousel/projectCarousel";

function project({ project }) {
  return (
    <div className="project">
      <div className="row">
        <div className="text col-4">
          <h4>{project.name}</h4>
          <h6>{project.description}</h6>
        </div>
        <div className="project-img col-8">
          <ProjectCarousel project={project.img} />
        </div>
      </div>
    </div>
  );
}

export default project;
