import React from "react";
import icoApp from "../assets/images/ico-app.svg";
import icoWeb from "../assets/images/ico-web.svg";
import icoCMS from "../assets/images/ico-cms.svg";
import icoUIUX from "../assets/images/ico-uiux.svg";
import imgWTS from "../assets/images/WTS-0@2x.jpg";
import imgRTT from "../assets/images/RTT-0@2x.jpg";
import imgPAO from "../assets/images/PAO-0@2x.jpg";
import imgYM from "../assets/images/YM-0@2x.jpg";
import imgTAP from "../assets/images/TAP-0@2x.jpg";
import imgFURAMA from "../assets/images/FURAMA-0@2x.jpg";
import imgHBO from "../assets/images/HBO-0@2x.jpg";
import imgFWD from "../assets/images/FWD-0@2x.jpg";
import imgKIWI from "../assets/images/KIWI-0@2x.jpg";

const Work = () => {
  const workCategory = [
    "All",
    "Food & Beverage",
    "Media",
    "Transport & Logistics",
    "Banking & Finance",
    "Lifestyle",
    "Co-incubation",
    "Healthcare",
    "Retail & Entertainment",
    "Telco",
    "Others",
    "Start-ups",
  ];

  const workFilters = [
    {
      name: "KIWI Auto Marketplace",
      category: "Others, Start-ups",
      platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
      img: imgKIWI,
      url: "/work-detail"
    },
    {
      name: "Woodlands Transport",
      category: "Transport & Logistics",
      platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
      img: imgWTS,
    },
    {
      name: "HBO Go",
      category: "Retail & Entertainment",
      platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
      img: imgHBO,
    },
    {
      name: "Ready to Travel (SATS)",
      category: "Lifestyle, Retail & Entertainment, Start-ups",
      platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
      img: imgRTT,
    },
    {
      name: "OCBC Pay Anyone",
      category: "Transport & Logistics",
      platforms: [icoApp, icoCMS],
      img: imgPAO,
    },
    {
      name: "Yoga Movement",
      category: "Lifestyle",
      platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
      img: imgYM,
    },
    {
      name: "TAP Ride Hailing",
      category: "Transport & Logistics",
      platforms: [icoApp],
      img: imgTAP,
    },
    {
      name: "Furama Hotels",
      category: "Lifestyle",
      platforms: [icoApp, icoCMS],
      img: imgFURAMA,
    },
    {
      name: "FWD Insurance",
      category: "Lifestyle",
      platforms: [icoApp, icoCMS, icoUIUX],
      img: imgFWD,
    },
  ];

  return (
    <section className="work">
      <section className="work-hero">
        <p className="font-hero">Here’s 5% of</p>
        <p className="font-hero">our published work.</p>
        <p className="font-hero color-primary">See 100% of our power.</p>
      </section>
      <section className="work-board">
        <section className="work-category row">
          {workCategory.map((value, index) => (
            <div className="work-category-item col-4" key={index}>
              <p>{value}</p>
            </div>
          ))}
        </section>
        <section className="work-legend">
          <p className="work-legend-header">Legend</p>
          <div className="work-legend-item-wrapper col-6 row">
            <div className="work-legend-item col-5">
              <img src={icoApp} alt="" width="18" height="18" />
              App
            </div>
            <div className="work-legend-item col-5">
              <img src={icoWeb} alt="" width="18" height="18" />
              Web
            </div>
            <div className="work-legend-item col-5">
              <img src={icoCMS} alt="" width="18" height="18" />
              CMS
            </div>
            <div className="work-legend-item col-5">
              <img src={icoUIUX} alt="" width="18" height="18" />
              UIUX
            </div>
          </div>
        </section>
      </section>
      <section className="work-filter">
        <section className="work-filter-item-wrapper">
          {workFilters.map((workFilter, index) => (
            <a className="work-filter-item" key={index} href={workFilter.url}>
              <img src={workFilter.img} alt="" />
              <div className="info-wrapper">
                <p className="info-work-category">{workFilter.category}</p>
                <p className="info-work-name">{workFilter.name}</p>
                <div className="info-work-platform-wrapper">
                  {workFilter.platforms.map((platform, index) => (
                    <div
                      key={index}
                      className="info-work-platform"
                      style={{ backgroundImage: `url(${platform})` }}
                    ></div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Work;
