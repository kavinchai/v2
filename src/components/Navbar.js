import React, { useState } from "react";
import "../css/Navbar.css";
import {scrollTo} from "../helper";

const Navbar = ({mode}) => {
  const [myName, setMyName] = useState(true);

  return (
    <div className={mode === "darkMode" ? "navBarComponent navBarComponentDm" : "navBarComponent navBarComponentLm"}>
      <div className="navBarContainer">
        <div
          className="firstName navName"
          onClick={() => setMyName((prev) => !prev)}
        >
          {myName === true ? "kavin" : "กวิน"}
        </div>
        <div
          className="lastName navName"
          onClick={() => setMyName((prev) => !prev)}
        >
          {myName === true ? "chai" : "ฉาย"}
        </div>
        <div className="navMenu">
          <button
            className="navBtn"
            onClick={() => scrollTo(".aboutComponent")}
          >
            about
          </button>
          <button className="navBtn" onClick={() => scrollTo(".expComponent")}>
            experience
          </button>
          <button
            className="navBtn"
            onClick={() => scrollTo(".projectComponent")}
          >
            projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
