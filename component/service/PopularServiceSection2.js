"use client";
import React from "react";
import ServiceSlider from "../slider/ServiceSlider";
import ScrollAnimation from "../utils/ScrollAnimation";

const PopularServiceSection2 = () => {
  return (
    <div className="tf__popular_services mt_100 pt_95 pb_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto">
            <ScrollAnimation type="slideLeft">
              <div className="tf__heading_area mb_40">
                <h2>What We Offer</h2>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <ServiceSlider />
      </div>
    </div>
  );
};

export default PopularServiceSection2;
