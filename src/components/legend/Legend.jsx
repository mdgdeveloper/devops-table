import { Button } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import {
  licensesEN,
  licensesES,
  typesEN,
  typesES,
} from "../../data/elementList";
import { Context } from "../../hooks/context";
import { langEN, langES } from "../../locale";
import { getColor } from "../../utils/getColor";
import "./legend.css";

const Legend = ({
  licenseFilter,
  setLicenseFilter,
  typeFilter,
  setTypeFilter,
  myStack,
  setMyStack,
}) => {
  const [context, setContext] = useContext(Context);
  const [licenses, setLicenses] = useState(licensesEN);
  const [types, setTypes] = useState(typesEN);
  const [language, setLanguage] = useState(langEN);

  useEffect(() => {
    if (context.lang === "en") {
      setLicenses(licensesEN);
      setTypes(typesEN);
    }
    if (context.lang === "es") {
      setLicenses(licensesES);
      setTypes(typesES);
      setLanguage(langES);
    }
  }, [context]);

  const handleLicenseChange = (license) => {
    setLicenseFilter(license);
  };

  const handleTypeChange = (type) => {
    setTypeFilter(type);
  };

  const removeFilter = (option) => {
    if (option === "type") setTypeFilter(null);
    if (option === "license") setLicenseFilter(null);
  };

  const handleMystack = () => {
    const current = myStack;
    setMyStack(!current);
  };

  return (
    <div className="lg-wrapper">
      <div className="lg-filters">
        {/* <Button colorScheme="blue" onClick={handleMystack}>
          {myStack ? "Remove Stack" : "My Stack"}
        </Button> */}
        {licenseFilter && (
          <Button colorScheme="blue" onClick={() => removeFilter("license")}>
            {language.license}
          </Button>
        )}
        {typeFilter && (
          <Button colorScheme="blue" onClick={() => removeFilter("type")}>
            {language.type}
          </Button>
        )}
      </div>
      <div className="lg-main">
        <div className="lg-table">
          <div className="lg-license">
            <>
              {licenses !== null &&
                Object.keys(licenses).map((key, value) => (
                  <div
                    className={
                      licenseFilter && licenseFilter === key
                        ? "lg-license-item lg-license-item-selected"
                        : "lg-license-item"
                    }
                    onClick={() => handleLicenseChange(key)}
                  >
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
                  <div
                    className={
                      typeFilter && typeFilter === key
                        ? "lg-type-item lg-type-item-selected"
                        : "lg-type-item"
                    }
                    onClick={() => handleTypeChange(key)}
                  >
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
    </div>
  );
};

export default Legend;
