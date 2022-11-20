import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="f-global">
      <div className="f-double">
        <div className="f-flex">
          <div className="f-left">
            <div className="f-logo">logo</div>
            <div className="f-logo-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae, nisi amet qui distinctio aut totam suscipit
              repudiandae, esse voluptatibus praesentium accusantium id a! Nam,
              corporis laboriosam magni iure quisquam cumque?
            </div>
          </div>
          <div className="f-center">
            <div className="f-title">Contact Us</div>
            <div className="f-center-mail">contact@mdgdev.xyz</div>
            <div className="f-center-info">Valencia. Spain. Europe.</div>
          </div>
          <div className="f-right">
            <div className="f-title">Follow Us</div>
            <div className="f-right-text">Yes, you can follow us!</div>
            <div className="f-right-social">
              <div className="f-social-item">Twitter</div>
              <div className="f-social-item">Mastodon</div>
              <div className="f-social-item">Hashnode</div>
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
