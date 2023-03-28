import React, { useState } from "react";
import "../css/About.css";
import imag from "../imgs/kavinCropped.png";

const About = () => {
  const [myName, setMyName] = useState(true);

  return (
    <div className="aboutComponent">
      <div className="aboutContainer">
        <div className="aboutText">
          <div className="aboutText1">about me</div>
          <div className="aboutText2"></div>
          <div className="aboutText3">
            <p>
              Hi! My name is{" "}
              <mark
                className="highlight nameMark"
                onClick={() => setMyName((prev) => !prev)}
              >
                {myName === true ? "Kavin Chaisawangwong" : "กวิน ฉายสว่างวงศ์"}
              </mark>
              . I am a senior at Virginia Tech majoring in computer engineering
              and economics. My interests include{" "}
              <mark className="highlight">embedded systems</mark>,{" "}
              <mark className="highlight">web development</mark>, and{" "}
              <mark className="highlight">digital interfacing</mark>.
            </p>
            <p>
              I enjoy experimenting with new technologies and exploring ways to
              practically integrate them into my life. My most recent projects
              include the{" "}
              <a
                href="https://github.com/kavinchai/NASA_AM_App"
                target="_blank"
                className="aboutLink"
                rel="noreferrer"
              >
                NASA Additive Manufacturing Application
              </a>
              , a{" "}
              <a
                href="https://github.com/kavinchai/pokedex_frontend"
                target="_blank"
                className="aboutLink"
                rel="noreferrer"
              >
                front-end
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/kavinchai/pokedex_backend"
                target="_blank"
                className="aboutLink"
                rel="noreferrer"
              >
                back-end
              </a>{" "}
              pokédex, and this personal website!
            </p>
          </div>
        </div>
        <div className="aboutImgContainer">
          <img src={imag} className="aboutImg" alt="kavinImg" />
        </div>
      </div>
    </div>
  );
};

export default About;
