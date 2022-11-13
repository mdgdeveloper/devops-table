import { Tag } from "@chakra-ui/react";
import React from "react";
import { getColor } from "../../utils/getColor";
import { getLicense } from "../../utils/getLicense";
import { getType } from "../../utils/getType";
import "./elementInfo.css";

const ElementInfo = ({ element }) => {
  const color = getColor(element.type);
  const LICENSE = {
    fr: "purple",
    fm: "teal",
    en: "pink",
    os: "linkedin",
  };

  return (
    <>
      <div></div>
      <div className="ei-info">
        <div className="ei-logoMain">
          <img className="ei-logo" src={`/logos/${element.logo}`} alt="logo" />
        </div>
        <div className="ei-infoDetail">
          <div className="ei-title">{element.name}</div>
          <div className="ei-tag">
            <Tag size="sm" style={{ backgroundColor: color, color: "white" }}>
              {getType(element.type)}
            </Tag>
          </div>
          <div className="ei-tag">
            <Tag size="sm" colorScheme={LICENSE[element.license]}>
              {getLicense(element.license)}
            </Tag>
          </div>
          {element.courses && (
            <div className="ei-elementCourses">
              <h2 className="ei-elementCoursesHead">Courses available:</h2>
              <ul>
                {element.courses.map((course) => (
                  <li>
                    <a href={course.link} target="_blank">
                      {course.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {element.certifications && (
            <div className="ei-elementCourses">
              <h2 className="ei-elementCoursesHead">Certifications:</h2>
              <ul>
                <li>Uno</li>
                <li>Uno</li>
                <li>Uno</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ElementInfo;
