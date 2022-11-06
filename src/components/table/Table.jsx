import React from "react";
import { elementExtra, elementList } from "../../data/elementList";
import Element from "../element/Element";
import Empty from "../empty/Empty";
import "./table.css";

const Table = () => {
  return (
    <div className="tableWrapper">
      <div className="table">
        {elementList.map((element) => {
          if (element.atomNum !== null) {
            {
              return <Element element={element} />;
            }
          } else {
            return <Empty />;
          }
        })}
      </div>
      <div className="table2">
        {elementExtra.map((element) => {
          if (element.atomNum !== null) {
            {
              return <Element element={element} />;
            }
          } else {
            return <Empty />;
          }
        })}
      </div>
    </div>
  );
};

export default Table;
