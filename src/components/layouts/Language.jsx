import React from "react";
import "./language.css";

const Language = ({ current = "en" }) => {
  const getStyle = (lang) => {
    if (lang === current)
      return {
        opacity: 1,
      };
    else
      return {
        opacity: 0.2,
      };
  };

  return (
    <div className="lag-main">
      <div className="lag-flag">
        <img src="flags/es.svg" alt="ES" style={getStyle("es")} />
      </div>
      <div className="lag-flag">
        <img src="flags/en.svg" alt="EN" style={getStyle("en")} />
      </div>
    </div>
  );
};

export default Language;
