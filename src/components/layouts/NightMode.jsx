import React, { useState } from "react";
import { RiSunLine } from "react-icons/ri";
import "./nightMode.css";

const NightMode = ({ mode = "night" }) => {
  const [currentMode, setCurrentMode] = useState(mode);
  return (
    <>
      <div className="nm-main">
        <RiSunLine style={{ fontSize: "1.5vw", color: "darkorange" }} />
      </div>
    </>
  );
};

export default NightMode;
