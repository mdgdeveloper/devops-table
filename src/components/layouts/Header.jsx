import React from "react";
import "./header.css";
import NightMode from "./NightMode";

const Header = () => {
  return (
    <div className="h-main">
      <div className="h-left"></div>
      <div className="h-center">
        <img src="/mainLogo2.png" alt="logo" className="h-mainLogo" />
      </div>
      <div className="h-right">
        <div className="h-mode">
          <NightMode />
        </div>
        <div className="h-lang">Language</div>
      </div>
    </div>
  );
};

export default Header;
