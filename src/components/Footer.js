import React from "react";
import {
  imgArrow,
  SocialFb,
  SocialTwitter,
  SocialInstagram,
  SocialLinkedIn,
} from "../images";

const Footer = () => {
  const footerTrusts = [
    {
      head: "Build",
      tagline: "Help you build something",
    },
    {
      head: "Co-incubate",
      tagline: "Co-incubate an idea together",
    },
    {
      head: "Customise",
      tagline: "Customise a solution for your business",
    },
    {
      head: "Organise",
      tagline: "Organise learning sessions with us",
    },
  ];
  return (
    <footer>
      <p className="footer-header">Let's have a chat</p>
      <section className="footer-trust">
        {footerTrusts.map((trust, index) => (
          <div className="footer-trust-item" key={index}>
            <div className="footer-trust-item-text">
              <p className="footer-trust-item-head font-lg">
                {trust.head}
                <img
                  src={imgArrow}
                  alt=""
                  width="16"
                  height="18"
                  className="arrow"
                />
              </p>
              <p className="footer-trust-item-tagline font-sm font-normal">
                {trust.tagline}
              </p>
            </div>
          </div>
        ))}
      </section>
      <section className="footer-social">
        <SocialFb fill="black" width="24" height="18" className="img" />
        <SocialTwitter fill="black" width="24" height="18" className="img" />
        <SocialInstagram fill="black" width="24" height="18" className="img" />
        <SocialLinkedIn fill="black" width="24" height="18" className="img" />
      </section>
      <section className="footer-copyright font-sm font-normal text-center mt-2">
        Copyright © Codigo - Mobile App Developer Singapore
      </section>
      <section className="footer-address font-sm font-normal text-center pb-5">
        +65 6455 9790 • 26 Sin Ming Lane, Midview City #07-115 Singapore 573971
      </section>
    </footer>
  );
};

export default Footer;
