import React, { useContext, useEffect, useState } from "react";
import { BsMastodon } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { Context } from "../../hooks/context";
import { langEN, langES } from "../../locale";
import "./footer.css";
const Footer = () => {
  const [context, setContext] = useContext(Context);
  const [text, setText] = useState(langEN);

  useEffect(() => {
    if (context.lang === "es") setText(langES);
    if (context.lang === "en") setText(langEN);
  }, [context]);

  return (
    <div className="f-global">
      <div className="f-double">
        <div className="f-flex">
          <div className="f-left">
            <div className="f-logo">
              <img src="/logo.png" alt="devOps Table Logo" />
              <div className="f-logo-title">devOps</div>
            </div>
            <div className="f-logo-text">{text.logo}</div>
          </div>
          <div className="f-center">
            <div className="f-title">{text.contact}</div>
            <div className="f-center-mail">
              <a href="mailto:contact@mdgdev.xyz">contact@mdgdev.xyz</a>
            </div>
            <div className="f-center-info">Valencia. Spain. Europe.</div>
          </div>
          <div className="f-right">
            <div className="f-title">{text.follow}</div>
            <div className="f-right-text">{text.followTest}</div>
            <div className="f-right-social">
              <div className="f-social-item">
                <a href="https://twitter.com/sergiomadrigal">
                  <FaTwitterSquare />
                </a>
              </div>
              <div className="f-social-item">
                <a href="https://mastodon.social/@mdgdev">
                  <BsMastodon />
                </a>
              </div>
              <div className="f-social-item">
                <a href="https://mdgdev.xyz">
                  <SiHashnode />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f-footer">
        <div className="f-copy"></div>
      </div>
    </div>
  );
};

export default Footer;
