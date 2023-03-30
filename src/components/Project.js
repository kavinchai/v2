import React from "react";
import "../css/Project.css";
import ProjectCard from "./ProjectCard";
import projectsJson from "../content/projects.json";

const Project = () => {
  return (
    <div className="projectComponent">
      <div className="projectContainer">
        <div className="projectHeader">
          <div className="projText1">projects</div>
          <div className="projText2">things i've made</div>
        </div>
        <div className="projectBody">
          {projectsJson.data.map((projInfo, index) => (
            <ProjectCard key={index} proj={projInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
