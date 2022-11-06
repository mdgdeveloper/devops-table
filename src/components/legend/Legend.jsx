import React from "react";
import { licenses, types } from "../../data/elementList";
import { getColor } from "../../utils/getColor";
import "./legend.css";

const Legend = () => {
  return (
    <div className="lg-main">
      <div className="lg-table">
        <div className="lg-license">
          <>
            {licenses !== null &&
              Object.keys(licenses).map((key, value) => (
                <div className="lg-license-item">
                  <div className="lg-license-item-logo">{key}</div>
                  <div className="lg-license-item-text">{licenses[key]}</div>
                </div>
              ))}
          </>
        </div>
        <div className="lg-types">
          {types !== null &&
            Object.keys(types).map((key) => {
              const color = getColor(key);
              return (
                <div className="lg-type-item">
                  <div
                    className="lg-type-item-color"
                    style={{
                      backgroundColor: color,
                    }}
                  ></div>
                  <div className="lg-type-item-text">{types[key]}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Legend;
