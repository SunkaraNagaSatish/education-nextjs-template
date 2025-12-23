import React from "react";

const CategorySection = () => {
  return (
    <section className="tf__categories mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-md-10 col-lg-10 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_15">
              <h5>Empowering Tomorrow's Engineers & Doctors</h5>
              <h2>Vidisha Junior College - Where Academic Excellence Meets Competitive Success. Premier Intermediate Education with Integrated IIT-JEE & NEET Coaching in Vijayawada.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category light_blue">
              <div className="tf__single_category_icon">
                <i className="fa fa-desktop"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Air-Conditioned Smart Classrooms</h3>
                <p>State-of-the-art learning environment with digital teaching systems for enhanced understanding</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category blue">
              <div className="tf__single_category_icon">
                <i className="fa fa-users"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Experienced Faculty</h3>
                <p>Highly qualified and passionate teachers dedicated to student success in both boards and competitive exams</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category green">
              <div className="tf__single_category_icon">
                <i className="fa fa-flask"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Advanced Laboratories</h3>
                <p>Well-equipped Physics, Chemistry, and Biology labs for hands-on practical learning</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category gray">
              <div className="tf__single_category_icon">
                <i className="fa fa-home"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Hostel Facilities</h3>
                <p>Separate hostel accommodation for boys and girls with nutritious, home-like food</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category orange">
              <div className="tf__single_category_icon">
                <i className="fa fa-bus"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Transportation Available</h3>
                <p>Safe and reliable transport facility for day-scholar students across Vijayawada</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp">
            <div className="tf__single_category red">
              <div className="tf__single_category_icon">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="tf__single_category_text">
                <h3>Integrated Coaching</h3>
                <p>Board preparation combined with IIT-JEE Mains, Advanced, and NEET coaching under one roof</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
