import React from "react";

const ActivitySection = () => {
  return (
    <section className="tf__activities mt_100 xs_mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__heading_area tf__heading_area_left mb_20">
              <h5>OUR Best ACTIVITIES</h5>
              <h2>Student Support Services</h2>
            </div>
            <div className="tf__activities_text">
              <p>
                Comprehensive support services designed to guide students through their academic journey and ensure holistic development.{" "}
              </p>
              <div className="row">
                <div className="col-xl-6 col-sm-6">
                  <div className="tf__activities_item light_blue">
                    <span>
                      <i className="fa fa-user-graduate"></i>
                    </span>
                    <h3>Academic Counseling</h3>
                    <p className="activity-description">One-on-one guidance for stream selection, study planning, and career pathways in engineering and medical fields.</p>
                  </div>
                  <div className="tf__activities_item green">
                    <span>
                      <i className="fa fa-heart"></i>
                    </span>
                    <h3>Mental Wellness Support</h3>
                    <p className="activity-description">Workshops and sessions focused on stress management, confidence building, and maintaining emotional balance during competitive preparation.</p>
                  </div>
                </div>
                <div className="col-xl-6 col-sm-6 xs_mt_0 mt_30 md_margin">
                  <div className="tf__activities_item orange">
                    <span>
                      <i className="fa fa-users"></i>
                    </span>
                    <h3>Parent Engagement Programs</h3>
                    <p className="activity-description">Regular parent-teacher meetings, progress reviews, and transparent communication to keep families informed and involved.</p>
                  </div>
                  <div className="tf__activities_item blue">
                    <span>
                      <i className="fa fa-trophy"></i>
                    </span>
                    <h3>Competitive Exam Guidance</h3>
                    <p className="activity-description">Expert mentorship on exam strategies, time management, paper patterns, and handling exam pressure effectively.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInRight">
            <div className="tf__activities_img">
              <img
                src="images/activities_img.jpg"
                alt="activities"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
