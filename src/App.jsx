import React, { useEffect, useState } from "react";
import "./App.css";

import { FaQuestion } from "react-icons/fa";
import { MdWorkspaces } from "react-icons/md";

import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Table from "./components/table/Table";

import Legend from "./components/legend/Legend";
import languageData from "./locale/index";

import { Context } from "./hooks/context";

function App() {
  const [context, setContext] = useState({
    lang: "en",
    mode: "day",
  });
  const [language, setLanguage] = useState();

  useEffect(() => {
    if (!context) {
      setLanguage(languageData.langEN);
    } else {
      if (context.lang === "en") setLanguage(languageData.langEN);
      if (context.lang === "es") setLanguage(languageData.langES);
    }
  }, [context]);

  return (
    <Context.Provider value={[context, setContext]}>
      <div
        className={
          context && context.mode === "day" ? "global" : "global-night"
        }
      >
        {language ? (
          <>
            <Header />
            <div className="main">
              <div className="info">
                <h2 className="a-title">
                  <FaQuestion style={{ color: "darkred" }} />
                  {language.subtitle1}
                </h2>
                <p className="a-paragraph">{language.content11}</p>
                <p className="a-paragraph">{language.content12}</p>
                <h2 className="a-title">
                  <MdWorkspaces style={{ color: "darkgreen" }} />
                  {language.subtitle2}
                </h2>
                <p className="a-paragraph">{language.content21}</p>
                <p className="a-paragraph">{language.content22}</p>
              </div>
            </div>
            <Legend />
            <Table />
            <Footer />
          </>
        ) : (
          <>Loading</>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
