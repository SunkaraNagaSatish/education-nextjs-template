"use client";
import Link from "next/link";
import React from "react";

const AllCourseSection = () => {
  return (
    <section className="tf__courses_page mt_190 xs_mt_95">
      <div className="container">
        {/* Page Headline */}
        <div className="row wow fadeInUp">
          <div className="col-xl-8 col-lg-10 m-auto">
            <div className="tf__heading_area mb_15 text-center">
              <h2>Courses Designed for Excellence</h2>
              <p>Integrated Intermediate Education with IIT-JEE & NEET Coaching</p>
            </div>
          </div>
        </div>

        {/* MPC STREAM Section */}
        <div className="row mt_50">
          <div className="col-12">
            <div className="tf__heading_area mb_30">
              <h3>MPC STREAM (Mathematics, Physics, Chemistry)</h3>
              <h5>For Students Aspiring to Become Engineers</h5>
              <p>Our MPC program is specifically designed for students targeting admissions into premier engineering colleges through IIT-JEE Mains and Advanced exams, while also excelling in intermediate board examinations.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h4 className="mb_30">Courses Offered:</h4>
          </div>
        </div>

        {/* MPC Courses Grid */}
        <div className="row">
          {/* Course 1 */}
          <div className="col-md-6 mb_40">
            <div className="tf__single_courses">
              <div className="tf__single_courses_text">
                <h4 className="title">1. Intermediate 1st Year with JEE Mains Coaching</h4>
                <h6 className="mt_20 mb_15">What You'll Learn:</h6>
                <ul className="course-details-list">
                  <li>Complete Intermediate 1st Year syllabus (Mathematics, Physics, Chemistry)</li>
                  <li>Focused preparation for JEE Mains exam pattern</li>
                  <li>Conceptual clarity and problem-solving techniques</li>
                  <li>Regular tests and assessments</li>
                </ul>
                <p className="mt_20"><strong>Ideal For:</strong> Students beginning intermediate education with engineering aspirations</p>
                <p><strong>Duration:</strong> 1 Academic Year</p>
                <div className="mt_20">
                  <Link href="/contact" className="common_btn">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="col-md-6 mb_40">
            <div className="tf__single_courses">
              <div className="tf__single_courses_text">
                <h4 className="title">2. Intermediate 1st Year with JEE Mains & Advanced Coaching</h4>
                <h6 className="mt_20 mb_15">What You'll Learn:</h6>
                <ul className="course-details-list">
                  <li>Complete Intermediate 1st Year syllabus</li>
                  <li>Comprehensive preparation for both JEE Mains and JEE Advanced</li>
                  <li>Advanced problem-solving and analytical thinking</li>
                  <li>Special modules for Olympiad-level questions</li>
                  <li>In-depth coverage of all topics</li>
                </ul>
                <p className="mt_20"><strong>Ideal For:</strong> High-achieving students targeting IITs and top NITs</p>
                <p><strong>Duration:</strong> 1 Academic Year</p>
                <div className="mt_20">
                  <Link href="/contact" className="common_btn">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Course 3 */}
          <div className="col-md-6 mb_40">
            <div className="tf__single_courses">
              <div className="tf__single_courses_text">
                <h4 className="title">3. Intermediate 2nd Year with JEE Mains Coaching</h4>
                <h6 className="mt_20 mb_15">What You'll Learn:</h6>
                <ul className="course-details-list">
                  <li>Complete Intermediate 2nd Year syllabus</li>
                  <li>Intensive JEE Mains preparation</li>
                  <li>Revision of 1st Year concepts</li>
                  <li>Full-length mock tests and time management strategies</li>
                  <li>Final exam preparation</li>
                </ul>
                <p className="mt_20"><strong>Ideal For:</strong> 2nd Year students preparing for final board exams and JEE Mains</p>
                <p><strong>Duration:</strong> 1 Academic Year</p>
                <div className="mt_20">
                  <Link href="/contact" className="common_btn">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Course 4 */}
          <div className="col-md-6 mb_40">
            <div className="tf__single_courses">
              <div className="tf__single_courses_text">
                <h4 className="title">4. Intermediate 2nd Year with JEE Mains & Advanced Coaching</h4>
                <h6 className="mt_20 mb_15">What You'll Learn:</h6>
                <ul className="course-details-list">
                  <li>Complete Intermediate 2nd Year syllabus</li>
                  <li>Comprehensive preparation for JEE Mains and JEE Advanced</li>
                  <li>Advanced-level problem-solving</li>
                  <li>Comprehensive revision and doubt-clearing</li>
                  <li>Complete exam readiness</li>
                </ul>
                <p className="mt_20"><strong>Ideal For:</strong> Ambitious students targeting top IITs and premier engineering institutions</p>
                <p><strong>Duration:</strong> 1 Academic Year</p>
                <div className="mt_20">
                  <Link href="/contact" className="common_btn">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BiPC STREAM Section */}
        <div className="row mt_80">
          <div className="col-12">
            <div className="tf__heading_area mb_30">
              <h3>BiPC STREAM (Biology, Physics, Chemistry)</h3>
              <h5>For Students Aspiring to Become Doctors</h5>
              <p>Our BiPC program is tailored for students targeting admissions into top medical colleges through NEET (National Eligibility cum Entrance Test), while also ensuring excellent performance in intermediate board examinations.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h4 className="mb_30">Courses Offered:</h4>
          </div>
        </div>

        {/* BiPC Courses Grid */}
        <div className="row">
          {/* Course 5 */}
          <div className="col-md-6 mb_40">
            <div className="tf__single_courses">
              <div className="tf__single_courses_text">
                <h4 className="title">5. Intermediate 1st Year with NEET Coaching</h4>
                <h6 className="mt_20 mb_15">What You'll Learn:</h6>
                <ul className="course-details-list">
                  <li>Complete Intermediate 1st Year syllabus (Biology, Physics, Chemistry)</li>
                  <li>NEET exam pattern and syllabus coverage</li>
                  <li>Conceptual understanding of medical entrance topics</li>
                  <li>Biology depth and application-based learning</li>
                  <li>Regular practice tests</li>
                </ul>
                <p className="mt_20"><strong>Ideal For:</strong> Students beginning intermediate education with medical aspirations</p>
                <p><strong>Duration:</strong> 1 Academic Year</p>
                <div className="mt_20">
                  <Link href="/contact" className="common_btn">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Course 6 */}
          <div className="col-md-6 mb_40">
            <div className="tf__single_courses">
              <div className="tf__single_courses_text">
                <h4 className="title">6. Intermediate 2nd Year with NEET Coaching</h4>
                <h6 className="mt_20 mb_15">What You'll Learn:</h6>
                <ul className="course-details-list">
                  <li>Complete Intermediate 2nd Year syllabus</li>
                  <li>Intensive NEET preparation with full syllabus coverage</li>
                  <li>Revision of 1st Year Biology, Physics, Chemistry</li>
                  <li>NEET-specific problem-solving and shortcuts</li>
                  <li>Full-length mock tests in NEET pattern</li>
                  <li>Final exam readiness</li>
                </ul>
                <p className="mt_20"><strong>Ideal For:</strong> 2nd Year students preparing for board exams and NEET</p>
                <p><strong>Duration:</strong> 1 Academic Year</p>
                <div className="mt_20">
                  <Link href="/contact" className="common_btn">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AllCourseSection;
