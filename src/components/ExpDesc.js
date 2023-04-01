import React from "react";
import "../css/ExpDesc.css";

const ExpDesc = ({
  data: { title, company, location, duration, url, text },
  mode
}) => {
  return (
    <div className={mode === "darkMode" ? "expDescComponent expDescComponentDm" : "expDescComponent expDescComponentLm"}>
      <div className="expDescHeader">
        <div className="expDescHeaderSec1">
          <div className={mode === "darkMode" ? "expDescTitle expDescTitleDm" : "expDescTitle expDescTitleLm"}>{title}</div>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={mode === "darkMode" ? "expDescCompany expDescCompanyDm" : "expDescCompany expDescCompanyLm"}
          >{`${company}`}</a>
        </div>
        <div className={mode === "darkMode" ? "expDescHeaderSec2 expDescHeaderSec2Dm" : "expDescHeaderSec2 expDescHeaderSec2Lm"}>
          <div className="expDescDuration">{duration}</div>
          <div className="expDescLocation">{location}</div>
        </div>
      </div>
      <div className="expDescBody">
        <ul className="expDescUnorderedList">
          {text?.map((key) => (
            <li key={key} className={mode === "darkMode" ? "expDescList expDescListDm" : "expDescList expDescListLm"}>
              {key}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpDesc;
