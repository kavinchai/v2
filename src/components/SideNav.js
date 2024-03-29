import React from "react";
import "../css/SideNav.css";
import { RiGithubLine } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";

const SideNav = () => {

  return (
    <div className="sideNavComponent">
      <div className="sideNavContainer">
        <a href="https://github.com/kavinchai" target="_blank" rel="noreferrer">
          <RiGithubLine className="iconType1 icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/kavinchai"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin className="iconType2 icon" />
        </a>
        <label class="switch">
          <input type="checkbox"/>
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default SideNav;
