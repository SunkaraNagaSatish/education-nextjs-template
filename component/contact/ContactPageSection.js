"use client";
import React from "react";
import ContactForm from "../form/ContactForm";
import "./contact-page.css";
import "../../public/css/contact-form.css";

const ContactPageSection = () => {
  return (
    <section className="tf__contact_page mt_190 xs_mt_95">
      <div className="container">
        {/* Main Heading */}
        <div className="row">
          <div className="col-12 wow fadeInUp">
            <div className="tf__heading_area text-center mb_50">
              <h2>Get in Touch</h2>
              <p className="contact-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>
          </div>
        </div>

        {/* Contact Form and Phone/Email Side by Side */}
        <div className="row">
          {/* Contact Form - Left Side */}
          <div className="col-lg-7 col-md-12 wow fadeInUp">
            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>

          {/* Phone and Email Only - Right Side */}
          <div className="col-lg-5 col-md-12 wow fadeInUp">
            <div className="contact-info-wrapper">
              {/* Phone Section */}
              <div className="contact-info-item">
                <div className="info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info-content">
                  <h3 className="info-title">Call Us</h3>
                  <div className="info-details">
                    <p className="info-category">For Day Scholars:</p>
                    <a href="tel:+919121147747" className="info-link">9121147747</a>
                    <a href="tel:+916366527168" className="info-link">6366527168</a>
                    <p className="info-category">For Hostel:</p>
                    <a href="tel:+919885812847" className="info-link">9885812847</a>
                    <a href="tel:+918639313920" className="info-link">8639313920</a>
                  </div>
                </div>
              </div>

              {/* Email Section */}
              <div className="contact-info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h3 className="info-title">Email Us</h3>
                  <div className="info-details">
                    <a href="mailto:Chairman@vidishaedusociety.com" className="info-link email-link">
                      Chairman@vidishaedusociety.com
                    </a>
                    <a href="mailto:Management@vidishaedusociety.com" className="info-link email-link">
                      Management@vidishaedusociety.com
                    </a>
                    <a href="mailto:Accounts@vidishaedusociety.com" className="info-link email-link">
                      Accounts@vidishaedusociety.com
                    </a>
                    <a href="mailto:Enquiry@vidishaedusociety.com" className="info-link email-link">
                      Enquiry@vidishaedusociety.com
                    </a>
                    <a href="mailto:Vijayawada@vidishaedusociety.com" className="info-link email-link">
                      Vijayawada@vidishaedusociety.com
                    </a>
                    <a href="mailto:Visakhapatnam@vidishaedusociety.com" className="info-link email-link">
                      Visakhapatnam@vidishaedusociety.com
                    </a>
                    <a href="mailto:Hyderabad@vidishaedusociety.com" className="info-link email-link">
                      Hyderabad@vidishaedusociety.com
                    </a>
                    <a href="mailto:Guntur@vidishaedusociety.com" className="info-link email-link">
                      Guntur@vidishaedusociety.com
                    </a>
                    <a href="mailto:Kakinada@vidishaedusociety.com" className="info-link email-link">
                      Kakinada@vidishaedusociety.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visit Us - All Addresses in Horizontal Grid Below */}
        <div className="row mt_60">
          <div className="col-12 wow fadeInUp">
            <div className="addresses-section">
              <div className="addresses-heading">
                <div className="addresses-heading-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Visit Us</h3>
              </div>

              <div className="addresses-grid">
                {/* Main Branch */}
                <div className="address-card">
                  <div className="address-card-header">
                    <i className="fas fa-building"></i>
                    <h4>Main Branch</h4>
                  </div>
                  <p className="address-card-text">
                    Chaganti Mercantile, Near Nirmala Convent Signal, Benz Circle, Vijayawada, Andhra Pradesh 520010
                  </p>
                </div>

                {/* Novotel Branch */}
                <div className="address-card">
                  <div className="address-card-header">
                    <i className="fas fa-map-pin"></i>
                    <h4>Novotel Branch</h4>
                  </div>
                  <p className="address-card-text">
                    54-14/8-68, Srinagar Colony SBI Road, near Novotel Hotel, Bharathi Nagar, Vijayawada, Andhra Pradesh 520008
                  </p>
                </div>

                {/* Bharathi Nagar Branch */}
                <div className="address-card">
                  <div className="address-card-header">
                    <i className="fas fa-map-pin"></i>
                    <h4>Bharathi Nagar Branch</h4>
                  </div>
                  <p className="address-card-text">
                    VMC Revenue, 54-1-7/2D, High Tension Line Road, Bharathi Nagar, Ward 2, Vijayawada, Andhra Pradesh 520008
                  </p>
                </div>

                {/* Edupugallu Branch */}
                <div className="address-card">
                  <div className="address-card-header">
                    <i className="fas fa-map-pin"></i>
                    <h4>Edupugallu Branch</h4>
                  </div>
                  <p className="address-card-text">
                    Vijayawada Rd, beside Anjaneya Towers, Edupugallu Vijayawada, Andhra Pradesh 521151
                  </p>
                </div>

                {/* Visakhapatnam */}
                <div className="address-card">
                  <div className="address-card-header">
                    <i className="fas fa-map-pin"></i>
                    <h4>Visakhapatnam</h4>
                  </div>
                  <p className="address-card-text">
                    Rednam Gardens, 10-12-1/b, Jail Road Junction opp: Central Park, Ramnagar, Visakhapatnam, Andhra Pradesh 530002
                  </p>
                  <a href="tel:+919346270306" className="address-card-phone">
                    <i className="fas fa-phone"></i> 9346270306
                  </a>
                </div>

                {/* Hyderabad */}
                <div className="address-card">
                  <div className="address-card-header">
                    <i className="fas fa-map-pin"></i>
                    <h4>Hyderabad</h4>
                  </div>
                  <p className="address-card-text">
                    1st Floor, ATC, ATC - Anil Trading Co., Bolaram Rd, Lal Bahadur Colony, Tirumalagiri, Secunderabad, Telangana 500015
                  </p>
                  <a href="tel:+916366527167" className="address-card-phone">
                    <i className="fas fa-phone"></i> 6366527167
                  </a>
                </div>

                {/* Guntur */}
                <div className="address-card">
                  <div className="address-card-header">
                    <i className="fas fa-map-pin"></i>
                    <h4>Guntur</h4>
                  </div>
                  <p className="address-card-text">
                    YS Plaza, beside Gorantla Venkateswara Swami Temple, Gorantla, Guntur, Andhra Pradesh 522034
                  </p>
                  <a href="tel:+916305086386" className="address-card-phone">
                    <i className="fas fa-phone"></i> 6305086386
                  </a>
                </div>

                {/* Kakinada */}
                <div className="address-card">
                  <div className="address-card-header">
                    <i className="fas fa-map-pin"></i>
                    <h4>Kakinada</h4>
                  </div>
                  <p className="address-card-text">
                    D.no.2-4-24, LRKS Plaza, Behind Anand theatre Opp: abhaya blood bank, Kakinada, Andhra Pradesh 533003
                  </p>
                  <a href="tel:+916304531313" className="address-card-phone">
                    <i className="fas fa-phone"></i> 6304531313
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="row">
          <div className="col-xl-12 wow fadeInUp">
            <div className="tf__contact_map mt_80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.234!2d80.656067!3d16.499725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482fffff%3A0x939b0e5d6f8e8b8e!2sChaganti%20Mercantile%2C%20Benz%20Circle%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1735015344000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageSection;
