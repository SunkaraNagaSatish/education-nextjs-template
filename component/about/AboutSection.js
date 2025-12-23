"use client";
import Link from "next/link";
import React, { useState } from "react";

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Dual Excellence",
      content: "Intermediate board preparation integrated with competitive exam coaching (IIT-JEE & NEET)"
    },
    {
      title: "Expert Mentorship",
      content: "Highly experienced faculty who understand both board patterns and competitive exam requirements"
    },
    {
      title: "Modern Infrastructure",
      content: "Air-conditioned smart classrooms, digital learning systems, and fully-equipped science laboratories"
    },
    {
      title: "Holistic Development",
      content: "Focus on academics, discipline, character building, and life skills"
    },
    {
      title: "Complete Support",
      content: "Academic monitoring, progress reviews, doubt-clearing sessions, and personalized study plans"
    },
    {
      title: "Residential & Day Scholar Options",
      content: "Hostel facilities with home-like food and transportation for day scholars"
    }
  ];

  return (
    <section className="tf__about mt_250 xs_mt_195">
      <div className="container">
        <div className="tf__about_top wow fadeInUp">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="tf__about_top_img">
                <img
                  src="images/about_top_img.jpg"
                  alt="about"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tf__about_top_text">
                <div className="tf__about_top_text_center">
                  <a href="#" className="common_btn" style={{ marginBottom: '20px', display: 'inline-block' }}>
                    Explore Courses <i className="fa fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                  </a>
                  <p>
                    Choose your path to success with our specialized streams: MPC (Mathematics, Physics, Chemistry) integrated with IIT-JEE coaching, or BiPC (Biology, Physics, Chemistry) combined with NEET preparation for aspiring medical professionals.
                  </p>
                </div>
                <a href="#" className="common_btn">
                  Book Campus Visit
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInLeft">
            <div className="tf__about_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>About Vidisha</h5>
                <h2 style={{ fontSize: '120%' }}>A Foundation for Dreams, A Pathway to Success</h2>
              </div><br></br>
              <p style={{ maxWidth: '90%', lineHeight: '1.8', textAlign: 'justify' }}>
                Vidisha Junior College stands as Vijayawada's dedicated institution committed to shaping the next generation of engineers, doctors, and leaders. Founded in 2023 with a powerful vision to ensure every household has an engineer and a doctor.
              </p>
              <div className="vidisha-accordion">
                {accordionData.map((item, index) => (
                  <div
                    key={index}
                    className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                  >
                    <div
                      className="accordion-header"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h4>{item.title}</h4>
                      <span className="accordion-icon">
                        {activeIndex === index ? '−' : '+'}
                      </span>
                    </div>
                    <div className="accordion-content">
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="common_btn">
                about more
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-sm-9 col-md-8 col-lg-6 wow fadeInRight">
            <div className="tf__about_img">
              <img
                src="images/about_img.png"
                alt="about"
                className="img-fluid w-100"
              />
              <div className="text">
                <i className="far fa-check-circle"></i>
                <h3>183k+</h3>
                <p>Complete Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
