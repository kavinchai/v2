import React, { useState } from "react";
import "../css/About.css";
import imag from "../imgs/kavinImag.png";
import { RiGithubFill } from "react-icons/ri";
import { FiLinkedin } from "react-icons/fi";
import { RiYoutubeFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

const About = () => {
  const [myName, setMyName] = useState(true);

  const handleClick = () => {
    navigator.clipboard.writeText("kavinchai00@gmail.com");
  };
  
  return (
    <div className="aboutComponent">
      <div className="aboutContainer">
        <div className="aboutTxtSection">
          <div className={myName === true ? "aboutTxtHeader aboutTxtEng" : "aboutTxtHeader aboutTxtTh"}
          onClick={() => setMyName((prev) => !prev)}
          >
            {myName === true ? "Kavin Chaisawangwong" : "กวิน ฉายสว่างวงศ์"}
          </div>
          <div className="aboutTxtBody">            
            <p>
              I recently graduated from Virginia Tech with a B.S. in Computer Engineering and a B.A. in Economics. 
              I'm currently a software engineer at {" "} 
              <a
                href="https://www.wellsfargo.com/"
                target="_blank"
                className="aboutLink"
                rel="noreferrer"
              >
                Wells Fargo
              </a>
              . My interests include{" "}
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
                rel="noopener noreferrer"
              >
                NASA Additive Manufacturing Application
              </a>
              , a{" "}
              <a
                href="https://github.com/kavinchai/pokedex_frontend"
                target="_blank"
                className="aboutLink"
                rel="noopener noreferrer"              
                >
                front-end
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/kavinchai/pokedex_backend"
                target="_blank"
                className="aboutLink"
                rel="noopener noreferrer"              
                >
                back-end
              </a>{" "}
              pokédex, and this personal website!
            </p>
          </div>
          <div className="socialSection">
            <div className="socialSubsection">
            <a 
              href="https://github.com/kavinchai" 
              target="_blank" 
              rel="noopener noreferrer"              
              className="socialBlock"
            >
              <RiGithubFill className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/kavinchai"
              target="_blank"
              rel="noopener noreferrer"              
              className="socialBlock"
            >
              <FiLinkedin className="icon" />
            </a>
            <a
              href="https://www.youtube.com/@kavinchaisawangwong5537"
              target="_blank"
              rel="noopener noreferrer"              
              className="socialBlock"
            >
              <RiYoutubeFill className="icon" />
            </a>
            <button
              onClick={handleClick}
              className="socialBlock popBtn"
            >
              <MdOutlineEmail className="icon" />
            </button>
            </div>
          </div>
        </div>
        <img src={imag} className="aboutImg" alt="kavinImg" />
      </div>
    </div>
  );
};

export default About;
