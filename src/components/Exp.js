import React, { useEffect, useState } from "react";
import "../css/Exp.css";
import jobsJson from "../content/jobs.json";
import ExpDesc from "./ExpDesc";

const Exp = ({mode}) => {
  const [dispNum, setDispNum] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(jobsJson.data[dispNum - 1]);
  }, [dispNum]);

  return (
    <div className={mode === "darkMode" ? "expComponent expComponentDm" : "expComponent expComponentLm"}>
      <div className="expContainer">
        <div className={mode === "darkMode" ? "expHeaderTxt1 expHeaderTxt1Dm" : "expHeaderTxt1 expHeaderTxt1Lm"}>experience</div>
        <div className={mode === "darkMode" ? "expHeaderTxt2 expHeaderTxt2Dm" : "expHeaderTxt2 expHeaderTxt2Lm"}>places i've worked</div>
        <div className="expBody">
          <div className="expNavContainer">
            {jobsJson.data.map((expInfo, index) => (
              <button
                key={`${index} ${dispNum}`}
                className={
                  dispNum === index + 1
                    ? mode === "darkMode" ? "expNavBtnDm expNavBtnActiveDm" : "expNavBtnLm expNavBtnActiveLm"
                    : mode === "darkMode" ? "expNavBtnDm" : "expNavBtnLm"
                }
                onClick={() => {
                  setDispNum(index + 1);
                }}
              >
                {expInfo.company}
              </button>
            ))}
          </div>
          <ExpDesc data={data} mode={mode}/>
        </div>
      </div>
    </div>
  );
};

export default Exp;
