import React, { useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [myName, setMyName] = useState(true);
  const scrollTo = (string) => {
    const section = document.querySelector(string);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="navBarComponent">
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
