import { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { prominent } from "color.js";
import {
  imgWDKIWI01,
  imgWDKIWI02,
  imgWDKIWI03,
  imgWDKIWI04,
  imgWDKIWI05,
  imgKIWI,
  ImgArrow,
} from "./Images";

const WorkDetailName = () => (
  <div className="work-detail-name font-3xl">KIWI Auto Marketplace</div>
);

const WorkDetailContent = () => (
  <div className="work-detail-content">
    Myanmar newest 2nd hand car buying, bidding and selling marketplace! You can
    even add an insurance plan when you buy a car and have the platform settle
    all the mundane paperwork while you sit back and collect your car when it’s
    ready.
  </div>
);

const WorkDetailFeature = () => (
  <div className="work-detail-feature-wrapper row">
    <div className="work-detail-feature-head col-5">Key Features</div>
    <div className="work-detail-feature-content col-7">
      Car Inspection with 204 Check Points <br /> Real-time Auction Bidding
    </div>
  </div>
);

const WorkDetailImage = () => {
  const [imgColor, setImgColor] = useState("");
  useEffect(() => {
    const fetchColor = async () => {
      const color = await prominent(imgKIWI, { amount: 1, format: "hex" });
      setImgColor(color);
    };
    fetchColor();
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "ease-in-out",
    arrows: false,
  };

  return (
    <div className="work-detail-image-wrapper">
      <div className="bg-circle" style={{ backgroundColor: imgColor }} />
      <Slider className="work-detail-slider custom-slick" {...sliderSettings}>
        <img src={imgWDKIWI01} alt="" />
        <img src={imgWDKIWI02} alt="" />
        <img src={imgWDKIWI03} alt="" />
        <img src={imgWDKIWI04} alt="" />
        <img src={imgWDKIWI05} alt="" />
      </Slider>
    </div>
  );
};

const SmScreenWorkDetail = () => {
  return (
    <section className="work-detail">
      <section className="work-detail-wrapper">
        <WorkDetailName />
        <WorkDetailImage />
        <WorkDetailContent />
        <WorkDetailFeature />
      </section>
    </section>
  );
};

const LgScreenWorkDetail = () => {
  const workDetailRef = useRef();
  const [showWorkArrows, setShowWorkArrows] = useState(true);

  const handleScroll = () => {
      setShowWorkArrows(window.pageYOffset < workDetailRef.current.offsetHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <section className="work-detail" ref={workDetailRef}>
      <section className="work-detail-wrapper row justify-content-evenly">
        <div className="work-detail-left col-5">
          <WorkDetailName />
          <WorkDetailContent />
          <WorkDetailFeature />
        </div>
        <div className="work-detail-right col-6">
          <WorkDetailImage />
        </div>
      </section>
      {(
        <>
          <div className={`work-prev work-arrow-btn ${ showWorkArrows ? 'on' : 'off'}`}>
            <ImgArrow width="16" height="18" />
          </div>
          <div className={`work-next work-arrow-btn ${ showWorkArrows ? 'on' : 'off'}`}>
            <ImgArrow alt="" width="16" height="18" />
          </div>
        </>
      ) }
    </section>
  );
};

const WorkDetail = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleScreenSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenSize);
    return () => window.removeEventListener("resize", handleScreenSize);
  }, []);

  return screenWidth >= 992 ? <LgScreenWorkDetail /> : <SmScreenWorkDetail />;
};

export default WorkDetail;
