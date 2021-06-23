import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  logo,
  SocialFb,
  SocialTwitter,
  SocialInstagram,
  SocialLinkedIn,
  imgArrow,
} from "../images";

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [mainMenuOff, setMainMenuOff] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMainMenuOff(location.pathname === "/work-detail");
  }, [location.pathname])

  return (
    <header>
      <div className="header px-4 h-40 d-flex justify-content-between align-items-center">
        {mainMenuOff ? (
          <div>
            <Link to="/" className="back-btn">
              <img
                src={imgArrow}
                alt=""
                width="16"
                height="18"
                className="arrow-back"
              />
              <span className="back-txt">Back to Work</span>
            </Link>
          </div>
        ) : (
          <img src={logo} alt="codigo" width="145" height="19" />
        )}
        <div className="menu-hamburger">
          <div className={`menu-bg-circle ${menuClicked ? "expand" : ""}`}>
            <div className="inner"></div>
          </div>
          <div
            className="menu-btn"
            onClick={() => setMenuClicked(!menuClicked)}
          >
            <i className="bi bi-list"></i>
          </div>
        </div>
        <div className={`menu-item-wrapper ${menuClicked ? "" : "xs-none"}`}>
          <ul>
            {mainMenuOff ? (
              ""
            ) : (
              <>
                <li className="menu-item">
                  <Link to="/">Work</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">Solutions</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">Services</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">About us</Link>
                </li>
                <li className="menu-item">
                  <Link to="#">Blog</Link>
                </li>
              </>
            )}
            <li className="menu-item" id="rq">
              <Link to="#">Request a quote</Link>
            </li>
            <li className="menu-item" id="lc">
              <Link to="#">Let's chat</Link>
            </li>
          </ul>
          <div className="menu-social-wrapper">
            <SocialFb fill="white" width="24" height="18" className="img" />
            <SocialTwitter
              fill="white"
              width="24"
              height="18"
              className="img"
            />
            <SocialInstagram
              fill="white"
              width="24"
              height="18"
              className="img"
            />
            <SocialLinkedIn
              fill="white"
              width="24"
              height="18"
              className="img"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
