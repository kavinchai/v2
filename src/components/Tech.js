import React from "react";
import "../css/Tech.css";

import IMAGES from "../constants";
const Tech = () => {
  return (
    <div className="techComponent">
      <div className="techContainer">
        <div className="techTxt1">technologies</div>
        <div className="techTxt2">tools i've used</div>
        <table className="techTable">
          <tr>
            <th className="techR1C1">
              <img
                src={IMAGES.logoDocker}
                className="techImg techImg1"
                alt="techImg1"
              />
            </th>
            <th className="techR1C2">
              <img
                src={IMAGES.logoSpring}
                className="techImg techImg2"
                alt="techImg2"
              />
            </th>
            <th className="techR1C3">
              <img
                src={IMAGES.logoLiquibase}
                className="techImg techImg3"
                alt="techImg3"
              />
            </th>
            <th className="techR1C4">
              <img
                src={IMAGES.logoPython}
                className="techImg techImg4"
                alt="techImg4"
              />
            </th>
            <th className="techR1C5">
              <img
                src={IMAGES.logoC}
                className="techImg techImg5"
                alt="techImg5"
              />
            </th>
          </tr>
          <tr>
            <th className="techR2C1">
              <img
                src={IMAGES.logoReact}
                className="techImg techImg6"
                alt="techImg6"
              />
            </th>
            <th className="techR2C2">
              <img
                src={IMAGES.logoHtml}
                className="techImg techImg7"
                alt="techImg7"
              />
            </th>
            <th className="techR2C3">
              <img
                src={IMAGES.logoCss}
                className="techImg techImg8"
                alt="techImg8"
              />
            </th>
            <th className="techR2C4">
              <img
                src={IMAGES.logoJs}
                className="techImg techImg9"
                alt="techImg9"
              />
            </th>
            <th className="techR2C5">
              <img
                src={IMAGES.logoArduino}
                className="techImg techImg10"
                alt="techImg10"
              />
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Tech;
