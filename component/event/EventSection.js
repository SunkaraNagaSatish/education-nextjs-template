"use client";
import React from "react";
import EventSlider from "../slider/EventSlider";
const EventSection = ({ section, startIndex, endIndex }) => {
  return (
    <section className={section}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_40" style={{ position: 'relative' }}>
              <img
                src="images/book_shapes.png"
                alt="book"
                className="event-book-decoration"
                style={{
                  position: 'absolute',
                  left: '-150px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  animation: 'bookAnimation 3s ease-in-out infinite alternate'
                }}
              />
              <h5>Important Dates & Updates</h5>
              <h2>Stay Informed About Key Events & Opportunities</h2>
            </div>
          </div>
        </div>
        <EventSlider startIndex={startIndex} endIndex={endIndex} />
      </div>
    </section>
  );
};

export default EventSection;
