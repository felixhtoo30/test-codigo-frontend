import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  logo,
  SocialFb,
  SocialTwitter,
  SocialInstagram,
  SocialLinkedIn,
} from "./Images";

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
          <li className="menu-item"><Link to="/">Solutions</Link></li>
          <li className="menu-item"><Link to="/">Services</Link></li>
          <li className="menu-item"><Link to="/">About us</Link></li>
          <li className="menu-item"><Link to="/">Blog</Link></li>
          <li className="menu-item" id="rq"><Link to="/">Request a quote</Link></li>
          <li className="menu-item" id="lc"><Link to="/">Let's chat</Link></li>
        </ul>
        <div className="menu-social-wrapper">
          <SocialFb fill="white" width="24" height="18" className="img" />
          <SocialTwitter fill="white" width="24" height="18" className="img" />
          <SocialInstagram fill="white" width="24" height="18" className="img" />
          <SocialLinkedIn fill="white" width="24" height="18" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
