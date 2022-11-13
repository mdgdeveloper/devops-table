import React, { useContext, useState } from "react";
import { MdOutlineNightlight } from "react-icons/md";
import { RiSunLine } from "react-icons/ri";
import { Context } from "../../hooks/context";
import "./nightMode.css";

const NightMode = () => {
  const [context, setContext] = useContext(Context);

  const nightMode = () => {
    const newContext = { ...context, mode: "night" };
    setContext(newContext);
  };

  const dayMode = () => {
    const newContext = { ...context, mode: "day" };
    setContext(newContext);
  };

  return (
    <>
      <div
        className={context.mode === "night" ? "nm-main-night" : "nm-main-day"}
      >
        {context && context.mode === "day" && (
          <RiSunLine
            style={{ fontSize: "1.5vw", color: "darkorange" }}
            onClick={nightMode}
          />
        )}
        {context && context.mode === "night" && (
          <MdOutlineNightlight
            style={{ fontSize: "1.5vw", color: "dargray" }}
            onClick={dayMode}
          />
        )}
      </div>
    </>
  );
};

export default NightMode;
