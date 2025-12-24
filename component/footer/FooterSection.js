import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="tf__footer mt_100">
      <div className="tf__footer_overlay pt_75">
        <div className="container">
          <div className="row justify-content-between">
            {/* Column 1: About Vidisha */}
            <div className="col-xl col-lg-6 col-md-6 col-sm-12">
              <div className="tf__footer_logo_area">
                {/* <h3>About Vidisha</h3> */}
                <Link className="footer_logo" href="/">
                  <img
                    src="/images/footer_logo.png"
                    alt="Vidisha Junior College"
                    className="img-fluid w-100"
                  />
                </Link>
                <p className="mt-3">
                  Empowering tomorrow's engineers and doctors through excellence in intermediate education and integrated competitive exam coaching.
                </p>
                <p className="footer-info">
                  <strong>Founded:</strong> 2023<br />
                  <strong>Location:</strong> Vijayawada, Andhra Pradesh
                </p>
                <p className="footer-tagline">
                  <em>"Every house should have an engineer or a doctor"</em>
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-xl col-lg-6 col-md-6 col-sm-12">
              <div className="tf__footer_content xs_mt_50">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/courses">Courses</Link>
                  </li>
                  <li>
                    <Link href="/contact">Admissions</Link>
                  </li>
                  <li>
                    <Link href="/about">Facilities</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/about">Campus Tour</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Our Courses */}
            <div className="col-xl col-lg-6 col-md-6 col-sm-12">
              <div className="tf__footer_content xs_mt_50">
                <h3>Our Courses</h3>
                <p className="course-category"><strong>MPC Stream:</strong></p>
                <ul>
                  <li>
                    <Link href="/courses">1st Year with JEE Mains</Link>
                  </li>
                  <li>
                    <Link href="/courses">1st Year with JEE Mains & Advanced</Link>
                  </li>
                  <li>
                    <Link href="/courses">2nd Year with JEE Mains</Link>
                  </li>
                  <li>
                    <Link href="/courses">2nd Year with JEE Mains & Advanced</Link>
                  </li>
                </ul>
                <p className="course-category mt-3"><strong>BiPC Stream:</strong></p>
                <ul>
                  <li>
                    <Link href="/courses">1st Year with NEET</Link>
                  </li>
                  <li>
                    <Link href="/courses">2nd Year with NEET</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: Contact Info */}
            <div className="col-xl col-lg-6 col-md-6 col-sm-12">
              <div className="tf__footer_content xs_mt_50">
                <h3>Contact Info</h3>
                {/* <p className="contact-item">
                  <strong>Address:</strong><br />
                  Chaganti Mercantile, Near Nirmala Convent Signal, Benz Circle, <br />
                  Vijayawada, Andhra Pradesh 520010
                </p> */}
                <p className="contact-item">
                  <strong>Phone:</strong><br />
                  9121147747 | 6366527168
                </p>
                <p className="contact-item">
                  <strong>Email:</strong><br />
                  [Email Address]
                </p>
                <p className="contact-item">
                  <strong>Business Hours:</strong><br />
                  Mon-Sat: 9 AM - 6 PM
                </p>
              </div>
            </div>

            {/* Column 5: Important Links */}
            <div className="col-xl col-lg-6 col-md-6 col-sm-12">
              <div className="tf__footer_content xs_mt_50">
                <h3>Important Links</h3>
                <ul>
                  <li>
                    <Link href="/about">Hostel Facilities</Link>
                  </li>
                  <li>
                    <Link href="/about">Transportation</Link>
                  </li>
                  <li>
                    <Link href="/courses">Fee Structure</Link>
                  </li>
                  <li>
                    <Link href="/team">Faculty</Link>
                  </li>
                  <li>
                    <Link href="/achievements">Results & Achievements</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="row">
            <div className="col-12">
              <div className="tf__copyright">
                <p>© 2025 Vidisha Junior College. All Rights Reserved.</p>
                <ul className="d-flex flex-wrap align-items-center">
                  <li>
                    <a href="#" aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="YouTube">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
