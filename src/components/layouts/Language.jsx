import React, { useContext } from "react";
import { Context } from "../../hooks/context";
import "./language.css";

const Language = () => {
  const [context, setContext] = useContext(Context);
  const getStyle = (lang) => {
    if (lang === context.lang) return "lag-selected";
    else return "lag-notSelected";
  };

  const handleClick = (language) => {
    const currentContext = { ...context, lang: language };
    setContext(currentContext);
  };

  return (
    <div className="lag-main">
      <div className="lag-flag" onClick={() => handleClick("es")}>
        <img src="flags/es.svg" alt="ES" className={getStyle("es")} />
      </div>
      <div className="lag-flag" onClick={() => handleClick("en")}>
        <img src="flags/en.svg" alt="EN" className={getStyle("en")} />
      </div>
    </div>
  );
};

export default Language;
