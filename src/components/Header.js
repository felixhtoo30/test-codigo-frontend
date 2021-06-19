import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-codigo-red.svg";
import socialFb from "../assets/images/social-facebook-white.svg";
import socialTwitter from "../assets/images/social-twitter-white.svg";
import socialInstagram from "../assets/images/social-instagram-white.svg";
import socialLinkedIn from "../assets/images/social-linkedIn-white.svg";

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <div className="header px-4 h-40 d-flex justify-content-between align-items-center">
      <img src={logo} alt="codigo" width="145" height="19" />
      <div className="menu-hamburger">
        <div className={`menu-bg-circle ${menuClicked ? "expand" : ""}`}>
          <div className="inner"></div>
        </div>
        <div className="menu-btn" onClick={() => setMenuClicked(!menuClicked)}>
          <i className="bi bi-list"></i>
        </div>
      </div>
      <div className={`menu-item-wrapper ${menuClicked ? "" : "xs-none"}`}>
        <ul>
          <li className="menu-item"><Link to="/">Work</Link></li>
          <li className="menu-item">Solutions</li>
          <li className="menu-item">Services</li>
          <li className="menu-item">About us</li>
          <li className="menu-item">Blog</li>
          <li className="menu-item" id="rq">Request a quote</li>
          <li className="menu-item" id="lc">Let's chat</li>
        </ul>
        <div className="menu-social-wrapper">
          <img src={socialFb} alt="" width="24" height="18" />
          <img src={socialTwitter} alt="" width="24" height="18" />
          <img src={socialInstagram} alt="" width="24" height="18" />
          <img src={socialLinkedIn} alt="" width="24" height="18" />
        </div>
      </div>
    </div>
  );
};

export default Header;
