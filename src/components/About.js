import React, { useState } from "react";
import "../css/About.css";
import imag from "../imgs/kavinCropped.png";

const About = ({mode}) => {
  const [myName, setMyName] = useState(true);

  return (
    <div className={mode === "darkMode" ? "aboutComponent aboutDm" : "aboutComponent aboutLm"}>
      <div className="aboutContainer">
        <div className="aboutText">
          <div className={mode === "darkMode" ? "aboutTxt1 aboutTxtDm" : "aboutTxt1 aboutTxtLm"}>about me</div>
          <div className={mode === "darkMode" ? "aboutTxt2Dm" : "aboutTxt2Lm"}>
            <p>
              Hi! My name is{" "}
              <mark
                className=
                {mode === "darkMode" ? "highlightDm nameMark" : "highlightLm nameMark"}
                onClick={() => setMyName((prev) => !prev)}
              >
                {myName === true ? "Kavin Chaisawangwong" : "กวิน ฉายสว่างวงศ์"}
              </mark>
              . I recently graduated from Virginia Tech with a B.S. in Computer Engineering and a B.A. in Economics. 
              I'm currently a software engineer at {" "} 
              <a
                href="https://www.wellsfargo.com/"
                target="_blank"
                className={mode === "darkMode" ? "aboutLink aboutLinkDm" : "aboutLink aboutLinkLm"}
                rel="noreferrer"
              >
                Wells Fargo
              </a>
              . My interests include{" "}
              <mark className={mode === "darkMode" ? "highlightDm" : "highlightLm"}>embedded systems</mark>,{" "}
              <mark className={mode === "darkMode" ? "highlightDm" : "highlightLm"}>web development</mark>, and{" "}
              <mark className={mode === "darkMode" ? "highlightDm" : "highlightLm"}>digital interfacing</mark>.
            </p>
            <p>
              I enjoy experimenting with new technologies and exploring ways to
              practically integrate them into my life. My most recent projects
              include the{" "}
              <a
                href="https://github.com/kavinchai/NASA_AM_App"
                target="_blank"
                className={mode === "darkMode" ? "aboutLink aboutLinkDm" : "aboutLink aboutLinkLm"}
                rel="noreferrer"
              >
                NASA Additive Manufacturing Application
              </a>
              , a{" "}
              <a
                href="https://github.com/kavinchai/pokedex_frontend"
                target="_blank"
                className={mode === "darkMode" ? "aboutLink aboutLinkDm" : "aboutLink aboutLinkLm"}
                rel="noreferrer"
              >
                front-end
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/kavinchai/pokedex_backend"
                target="_blank"
                className={mode === "darkMode" ? "aboutLink aboutLinkDm" : "aboutLink aboutLinkLm"}
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
