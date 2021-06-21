import React, { useState } from "react";
import {
  icoApp,
  icoWeb,
  icoCMS,
  icoUIUX,
  imgWTS,
  imgRTT,
  imgPAO,
  imgYM,
  imgTAP,
  imgFURAMA,
  imgHBO,
  imgFWD,
  imgKIWI,
} from "./Images";

const Work = () => {
  // test with category id ----->
  const workCategories = {
    all: "All",
    food: "Food & Beverage",
    media: "Media",
    transport: "Transport & Logistics",
    banking: "Banking & Finance",
    lifestyle: "Lifestyle",
    incube: "Co-incubation",
    health: "Healthcare",
    retail: "Retail & Entertainment",
    telco: "Telco",
    others: "Others",
    startup: "Start-ups",
  };

  const workFilters = [
    {
      name: "KIWI Auto Marketplace",
      category: "Others, Start-ups",
      ctgIds: ["others", "startup"],
      platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
      img: imgKIWI,
      url: "/work-detail",
      isShow: true,
    },
    {
      name: "Woodlands Transport",
      category: "Transport & Logistics",
      ctgIds: ["transport"],
      platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
      img: imgWTS,
      isShow: true,
    },
    {
      name: "HBO Go",
      category: "Retail & Entertainment",
      ctgIds: ["retail"],
      platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
      img: imgHBO,
      isShow: true,
    },
    {
      name: "Ready to Travel (SATS)",
      category: "Lifestyle, Retail & Entertainment, Start-ups",
      ctgIds: ["lifestyle", "retail", "startup"],
      platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
      img: imgRTT,
      isShow: true,
    },
    {
      name: "OCBC Pay Anyone",
      category: "Transport & Logistics",
      ctgIds: ["transport"],
      platforms: [icoApp, icoCMS],
      img: imgPAO,
      isShow: true,
    },
    {
      name: "Yoga Movement",
      category: "Lifestyle",
      ctgIds: ["lifestyle"],
      platforms: [icoApp, icoWeb, icoCMS, icoUIUX],
      img: imgYM,
      isShow: true,
    },
    {
      name: "TAP Ride Hailing",
      category: "Transport & Logistics",
      ctgIds: ["transport"],
      platforms: [icoApp],
      img: imgTAP,
      isShow: true,
    },
    {
      name: "Furama Hotels",
      category: "Lifestyle",
      ctgIds: ["lifestyle"],
      platforms: [icoApp, icoCMS],
      img: imgFURAMA,
      isShow: true,
    },
    {
      name: "FWD Insurance",
      category: "Lifestyle",
      ctgIds: ["lifestyle"],
      platforms: [icoApp, icoCMS, icoUIUX],
      img: imgFWD,
      isShow: true,
    },
  ];
  const [activeCategory, setActiveCategory] = useState("all");
  const [workFilterList, setWorkFilterList] = useState(workFilters);
  const isResultNone = (object) => object.isShow === false;

  const handleWorkFilters = (ctgId) => {
    setActiveCategory(ctgId);
    setWorkFilterList(
      workFilters.map((workFilter) => {
        if (ctgId === "all") {
          workFilter.isShow = true;
        } else {
          workFilter.isShow = workFilter.ctgIds.includes(ctgId) ? true : false;
        }
        return workFilter;
      })
    );
  };

  const WorkFilterDisplayElement = (workFilter) => {
    return (
      <a className="work-filter-item" href={workFilter.url}>
        <img src={workFilter.img} alt="" />
        <div className="info-wrapper">
          <p className="info-work-category">{workFilter.category}</p>
          <p className="info-work-name font-xl">{workFilter.name}</p>
          <div className="info-work-platform-wrapper">
            {workFilter.platforms.map((platform, index) => (
              <div
                key={index}
                className="info-work-platform font-xl"
                style={{ backgroundImage: `url(${platform})` }}
              ></div>
            ))}
          </div>
        </div>
      </a>
    );
  };

  const WorkBoardSidebarElement = () => {
    return (
      <section className="work-board-modal">
        <div className="work-board-sidebar"></div>
        <div className="work-board-float-btn">
          <span>Filter</span>
        </div>
      </section>
    );
  };

  return (
    <section className="work">
      <section className="work-hero">
        <p className="font-4xl">Here’s 5% of</p>
        <p className="font-4xl">our published work.</p>
        <p className="font-4xl color-primary">See 100% of our power.</p>
      </section>
      <section className="work-board">
        <section className="work-category row">
          {Object.entries(workCategories).map(([ctgId, category]) => (
            <div
              className={`work-category-item col-4 ${
                activeCategory === ctgId ? "active" : ""
              }`}
              key={ctgId}
              id={ctgId}
              onClick={() => handleWorkFilters(ctgId)}
            >
              <p className="work-category-text font-md font-normal">
                {category}
              </p>
            </div>
          ))}
        </section>
        <section className="work-legend">
          <p className="work-legend-header">Legend</p>
          <div className="work-legend-item-wrapper font-xs font-normal">
            <div className="work-legend-item">
              <img src={icoApp} alt="" width="18" height="18" />
              App
            </div>
            <div className="work-legend-item">
              <img src={icoWeb} alt="" width="18" height="18" />
              Web
            </div>
            <div className="work-legend-item">
              <img src={icoCMS} alt="" width="18" height="18" />
              CMS
            </div>
            <div className="work-legend-item">
              <img src={icoUIUX} alt="" width="18" height="18" />
              UIUX
            </div>
          </div>
        </section>
      </section>
      <section className="work-filter">
        {workFilterList.every(isResultNone) ? (
          <p className="font-sm my-5 text-center">
            There is no specific project related with the tag name(
            {activeCategory})! Do you want to show all the projects instead?
          </p>
        ) : (
          <section className="work-filter-item-wrapper my-5">
            {workFilterList.map((workFilter, index) =>
              workFilter.isShow ? (
                <WorkFilterDisplayElement {...workFilter} key={index} />
              ) : (
                ""
              )
            )}
          </section>
        )}
      </section>
      <WorkBoardSidebarElement  />
    </section>
  );
};

export default Work;
