import React from "react";
import "../css/Project.css";
import ProjectCard from "./ProjectCard";
import projectsJson from "../content/projects.json";

const Project = ({mode}) => {
  return (
    <div className={mode === "darkMode" ? "projectComponent projectComponentDm" : "projectComponent projectComponentLm"}>
      <div className="projectContainer">
        <div className="projectHeader">
          <div className={mode === "darkMode" ? "projTxt1 projTxt1Dm" : "projTxt1 projTxt1Lm"}>projects</div>
          <div className={mode === "darkMode" ? "projTxt2 projTxt2Dm" : "projTxt2 projTxt2Lm"}>things i've made</div>
        </div>
        <div className="projectBody">
          {projectsJson.data.map((projInfo, index) => (
            <ProjectCard key={index} proj={projInfo} mode={mode}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
