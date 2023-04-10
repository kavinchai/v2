import React from "react";
import "../css/ExpDesc.css";

const ExpDesc = ({
  data: { title, company, location, duration, url, text }
}) => {
  return (
    <div className="expDescComponent">
      <div className="expDescHeader">
        <div className="expDescHeaderSec1">
          <div className="expDescTitle">{title}</div>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="expDescCompany"
          >{`${company}`}</a>
        </div>
        <div className="expDescHeaderSec2">
          <div className="expDescDuration">{duration}</div>
          <div className="expDescLocation">{location}</div>
        </div>
      </div>
      <div className="expDescBody">
      <ul className="expDescUnorderedList">
          {text?.map((key) => (
            <li key={key} className="expDescList">
              {key}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpDesc;
