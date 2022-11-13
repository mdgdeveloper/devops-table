import React, { useContext } from "react";
import "./header.css";
import Language from "./Language";
import NightMode from "./NightMode";

const Header = () => {
  // const [theme, setTheme] = useContext();
  // console.log("theme", theme);
  return (
    <div className="h-main">
      <div className="h-left"></div>
      <div className="h-center">
        <div className="h-logo"></div>
        <div className="h-image">
          <img src="/logo.png" alt="logo" className="h-mainLogo" />
        </div>
        <div className="h-title">
          <div className="h-main-title">devOps</div>
          <div className="h-sub-title">periodic table</div>
        </div>
      </div>
      <div className="h-right">
        <div className="h-mode">
          <NightMode />
        </div>
        <div className="h-lang">
          <Language />
        </div>
      </div>
    </div>
  );
};

export default Header;
