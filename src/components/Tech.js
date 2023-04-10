import React from "react";
import "../css/Tech.css";
import BouncingBall from "./BouncingBall";

import IMAGES from "../constants";
const Tech = () => {
  return (
    <div className="techComponent">
      <div className="techContainer">
        <div className="techTxtHeader">technologies</div>
        <div className="techTxtSubtitle">tools i've used</div>
        <BouncingBall/>
      </div>
    </div>
  );
};

export default Tech;
