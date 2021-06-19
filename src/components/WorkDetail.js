import React from "react";

const WorkDetail = () => {
  return (
    <section className="work-detail">
      <section className="work-detail-wrapper row">
        <div className="work-detail-left col-5">
          <div className="work-detail-name">KIWI Auto Marketplace</div>
          <div className="work-detail-content">
            Myanmar newest 2nd hand car buying, bidding and selling marketplace!
            You can even add an insurance plan when you buy a car and have the
            platform settle all the mundane paperwork while you sit back and
            collect your car when it’s ready.
          </div>
          <div className="work-detail-feature-wrapper row">
            <div className="work-detail-feature-head col-5">Key Features</div>
            <div className="work-detail-feature-content col-7">
              Car Inspection with 204 Check Points <br/> Real-time Auction Bidding
            </div>
          </div>
        </div>
        <div className="work-detail-right col-6"></div>
      </section>
    </section>
  );
};

export default WorkDetail;
