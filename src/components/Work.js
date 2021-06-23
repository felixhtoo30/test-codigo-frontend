import React, { useRef, useState, useEffect } from "react";
import { workCategories, workLegends, workFilters } from "../data";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [workFilterList, setWorkFilterList] = useState(workFilters);
  const workFilterRef = useRef();
  const [showSidebarFloat, setShowSidebarFloat] = useState(false);
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

  const handleScroll = () => {
    setShowSidebarFloat(window.pageYOffset > workFilterRef.current.offsetTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  });

  const WorkFilterDisplayElement = (workFilter) => {
    return (
      <a
        className={`work-filter-item ${workFilter.isShow ? "" : "off"}`}
        href={workFilter.url}
      >
        <h1>{console.log(workFilter.isShow)}</h1>
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
    const [expandSidebar, setExpandSidebar] = useState(false);
    return (
      <section
        className={`work-board-sidebar 
          ${expandSidebar ? "expand" : ""} 
          ${showSidebarFloat ? "" : "off"}
        `}
      >
        <section className={`work-board-sidebar-list`}>
          <section className={`work-category`}>
            {Object.entries(workCategories).map(([ctgId, category]) => (
              <div
                className={`work-category-item ${
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
              {workLegends.map((workLegend, index) => (
                <div className="work-legend-item" key={index}>
                  <img src={workLegend.img} alt="" width="18" height="18" />
                  {workLegend.name}
                </div>
              ))}
            </div>
          </section>
        </section>
        <div
          className="work-board-float-btn"
          onClick={() => setExpandSidebar(!expandSidebar)}
        >
          {expandSidebar ? <i className="bi bi-x-lg"></i> : <span>Filter</span>}
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
        <section className={`work-category row`}>
          {Object.entries(workCategories).map(([ctgId, category]) => (
            <div
              className={`work-category-item col-4 
              ${activeCategory === ctgId ? "active" : ""}`}
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
            {workLegends.map((workLegend, index) => (
              <div className="work-legend-item" key={index}>
                <img src={workLegend.img} alt="" width="18" height="18" />
                {workLegend.name}
              </div>
            ))}
          </div>
        </section>
      </section>
      <section className="work-filter" ref={workFilterRef}>
        {workFilterList.every(isResultNone) ? (
          <p className="font-sm my-5 text-center">
            There is no specific project related with the tag name(
            {activeCategory})! Do you want to show all the projects instead?
          </p>
        ) : (
          <section className="work-filter-item-wrapper my-5">
            {workFilterList.map((workFilter, index) => (
              <WorkFilterDisplayElement {...workFilter} key={index} />
            ))}
          </section>
        )}
      </section>
      <WorkBoardSidebarElement />
    </section>
  );
};

export default Work;
