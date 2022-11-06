import { useEffect, useState } from "react";
import "./App.css";

import { FaQuestion } from "react-icons/fa";
import { MdWorkspaces } from "react-icons/md";

import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Table from "./components/table/Table";

import Legend from "./components/legend/Legend";
import languageData from "./locale/index";

function App({ locale = "en" }) {
  const [language, setLanguage] = useState();

  useEffect(() => {
    if (locale === "en") setLanguage(languageData.langEN);
  }, []);

  return (
    <div className="global">
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
  );
}

export default App;
