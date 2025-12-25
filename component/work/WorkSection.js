"use client";
import React from "react";
import WorkSlider from "../slider/WorkSlider";
import ScrollAnimation from "../utils/ScrollAnimation";

const WorkSection = () => {
  return (
    <section className="tf__work pt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto">
            <ScrollAnimation type="slideRight">
              <div className="tf__heading_area mb_35 md_margin">
                <h2>Our Academic Approach</h2>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <WorkSlider />
      </div>
    </section>
  );
};

export default WorkSection;
