import React from "react";
import "../css/Tech.css";
import Orb from "./Orb";

const Tech = () => {
  return (
    <div className="techComponent">
      <div className="techContainer">
        <div className="techTxtHeader">technologies</div>
        <div className="techTxtSubtitle">tools i've used</div>
        <div className="space">
          <Orb
            initialPos={{ x: 100, y: 200 }}
          />
          <Orb
            initialPos={{ x: 300, y: 200 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Tech;