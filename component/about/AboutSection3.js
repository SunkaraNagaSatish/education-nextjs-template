"use client";
import React, { useState } from "react";

const AboutSection3 = ({ style }) => {
  const [activePopup, setActivePopup] = useState(null);

  const aboutItems = [
    {
      id: 1,
      title: "Strong Academic Foundation",
      detail: "At Vidisha Junior College, we believe that a solid academic foundation is the cornerstone of success. Our comprehensive intermediate education program is meticulously designed to ensure students master every concept with clarity and depth. We focus on building strong fundamentals in Mathematics, Physics, Chemistry, and Biology through systematic teaching methodologies. Our curriculum goes beyond rote learning, emphasizing conceptual understanding, analytical thinking, and problem solving skills. Students receive extensive board exam preparation with regular practice sessions, mock tests, and personalized feedback. Our experienced faculty members employ innovative teaching techniques that make complex topics accessible and engaging. We provide comprehensive study materials, chapter wise notes, and practice worksheets that reinforce classroom learning. Regular assessments help track progress and identify areas needing improvement. Our goal is to ensure every student not only excels in board examinations but also develops a deep understanding that serves as a foundation for competitive exams and higher education. We create an environment where academic excellence is nurtured through dedication, discipline, and continuous support."
    },
    {
      id: 2,
      title: "Competitive Exam Excellence",
      detail: "Vidisha Junior College stands out for its exceptional competitive exam coaching integrated seamlessly with intermediate education. We offer specialized training for IIT JEE and NEET, two of the most challenging entrance examinations in India. Our coaching program is led by highly experienced faculty who have a proven track record of producing top rankers. We employ result oriented teaching strategies that focus on concept clarity, speed, and accuracy. Students receive comprehensive coverage of the entire syllabus with emphasis on high weightage topics and frequently asked questions. Our methodology includes regular practice sessions with previous year question papers, topic wise tests, and full length mock examinations that simulate actual exam conditions. We provide detailed performance analysis after each test, helping students identify strengths and weaknesses. Our doubt clearing sessions ensure no query goes unanswered. We also focus on time management techniques, exam strategies, and stress management to help students perform at their best. Personalized study plans are created for each student based on their learning pace and target goals. Our comprehensive approach ensures students are thoroughly prepared to crack these competitive exams while maintaining excellent performance in board examinations."
    },
    {
      id: 3,
      title: "Values and Character Building",
      detail: "At Vidisha, education extends far beyond academics. We are deeply committed to nurturing well rounded individuals who possess strong moral values, integrity, and character. Our holistic development program focuses on instilling discipline, responsibility, and ethical behavior in every student. We believe that true success comes from a combination of academic excellence and strong character. Through various activities and mentorship programs, we help students develop essential life skills including leadership, teamwork, communication, and critical thinking. Our faculty members serve as role models, guiding students not just in academics but also in personal growth and decision making. We emphasize the importance of honesty, respect, empathy, and social responsibility. Students are encouraged to participate in community service, social initiatives, and extracurricular activities that broaden their perspectives and develop compassion. We create an environment that promotes self confidence, resilience, and a positive attitude towards challenges. Our character building initiatives include personality development sessions, value education classes, and interactive workshops on topics like emotional intelligence, stress management, and goal setting. We aim to develop responsible citizens who will contribute positively to society while achieving their personal and professional goals."
    },
    {
      id: 4,
      title: "Innovative Learning Methods",
      detail: "Vidisha Junior College embraces modern educational technology and innovative teaching methodologies to create an engaging and effective learning experience. Our air conditioned smart classrooms are equipped with state of the art digital learning systems including interactive whiteboards, multimedia projectors, and audio visual aids that make learning dynamic and interesting. We utilize digital tools and educational software that help visualize complex concepts, making them easier to understand and remember. Our teaching approach combines traditional classroom instruction with modern techniques such as flipped classroom models, collaborative learning, and hands on experiments. We provide access to online learning resources, video lectures, and digital study materials that students can access anytime for revision and self study. Our fully equipped science laboratories allow students to perform practical experiments, fostering curiosity and scientific thinking. We conduct interactive sessions that encourage student participation, discussions, and peer learning. Regular quizzes, group activities, and project based learning keep students engaged and motivated. Our faculty members continuously update their teaching methods based on the latest educational research and best practices. We also integrate real world applications and case studies to make learning relevant and practical. This innovative approach ensures that students not only acquire knowledge but also develop critical thinking, creativity, and problem solving abilities essential for success in the modern world."
    }
  ];

  return (
    <div className={`${style} tf__about_2_area`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__about_2_img">
              <div className="tf__about_small">
                <img
                  src="images/about_2_img_2.jpg"
                  alt="about us"
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__about_large">
                <img
                  src="images/about_2_img_1.jpg"
                  alt="about us"
                  className="img-fluid w-100"
                />
              </div>
              <p>
                <span>Est.</span> 2023
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight">
            <div className="tf__about_2_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>About Vidisha</h5>
                <h2>Building Futures Through Excellence, Dedication and Vision</h2>
              </div>
<br/>
              <p className="about-intro">
                <strong>Vidisha Junior College</strong> is a dedicated institution shaping the next generation of engineers, doctors, and responsible citizens. Founded in 2023, we are committed to ensuring every household has an engineer and a doctor.
              </p>

              <div className="about-vision-mission">
                <div className="vision-mission-item">
                  <div
                    className="vm-icon-wrapper"
                    onClick={() => setActivePopup('vision')}
                  >
                    <i className="far fa-check-circle"></i>
                    <span className="vm-label">Our Vision</span>
                  </div>
                </div>

                <div className="vision-mission-item">
                  <div
                    className="vm-icon-wrapper"
                    onClick={() => setActivePopup('mission')}
                  >
                    <i className="far fa-check-circle"></i>
                    <span className="vm-label">Our Mission</span>
                  </div>
                </div>
              </div>

              <div className="about-pillars">
                <h4 className="pillars-heading">Our Responsibilities</h4>
                <div className="pillars-grid">
                  {aboutItems.map((item) => (
                    <div
                      key={item.id}
                      className="pillar-item"
                      onClick={() => setActivePopup(item.id)}
                    >
                      <i className="far fa-check-circle"></i>
                      <span className="pillar-title">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Popups */}
      {activePopup === 'vision' && (
        <div className="fullscreen-modal" onClick={() => setActivePopup(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActivePopup(null)}>
              <i className="fas fa-times"></i>
            </button>
            <h3 className="modal-title">Our Vision</h3>
            <div className="modal-body">
              <p>
                Vidisha Junior College envisions a world where education transcends beyond being merely a pathway to successful careers. We see education as a transformative journey that fundamentally builds character, instills unwavering self belief, and cultivates lifelong excellence in every student who walks through our doors.
              </p>
              <p>
                We are deeply committed to creating a progressive and dynamic learning environment that continuously inspires curiosity, actively fuels ambition, and genuinely empowers students to think independently, explore boldly, and act responsibly in all aspects of their lives.
              </p>
              <p>
                At Vidisha, we firmly believe that true success comes from the courage to challenge boundaries and push beyond comfort zones, the discipline to overcome setbacks and learn from failures, and the compassion to uplift others along the way. Success is not just about individual achievement but about collective growth and contribution to society.
              </p>
              <p>
                Our vision is to nurture confident leaders who possess the skills and mindset to solve complex challenges facing our world, compassionate citizens who actively work to strengthen their communities and make positive impacts, and intellectually curious thinkers who continuously seek growth, discovery, and innovation throughout their lives.
              </p>
              <p>
                By instilling a strong sense of purpose, building resilience in the face of adversity, and fostering a genuine passion for achievement in every learner, we strive to build a society that is not only stronger and smarter but also more inspired, humane, and equipped to face the challenges of tomorrow with confidence and integrity.
              </p>
            </div>
          </div>
        </div>
      )}

      {activePopup === 'mission' && (
        <div className="fullscreen-modal" onClick={() => setActivePopup(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActivePopup(null)}>
              <i className="fas fa-times"></i>
            </button>
            <h3 className="modal-title">Our Mission</h3>
            <div className="modal-body">
              <p>
                Our mission at Vidisha Junior College is to deliver truly transformative education that ignites ambition in young minds and unlocks every student's fullest potential. We are committed to nurturing future engineers, doctors, and leaders who will shape tomorrow's world.
              </p>
              <p>
                <strong>Strong Academic Foundation:</strong> We provide excellence in intermediate education with comprehensive coverage of the entire syllabus. Our focus is on building deep conceptual understanding rather than superficial knowledge. Students receive rigorous board exam preparation through systematic teaching, regular assessments, and continuous feedback.
              </p>
              <p>
                <strong>Competitive Exam Preparation:</strong> We offer integrated coaching for IIT JEE and NEET, ensuring students are thoroughly prepared for these challenging entrance examinations. Our experienced faculty employ proven teaching strategies, conduct regular mock tests, and provide personalized guidance to help each student achieve their target rank.
              </p>
              <p>
                <strong>Values Driven Personal Growth:</strong> Beyond academics, we focus on character development and moral education. We instill values of integrity, discipline, empathy, and social responsibility. Our holistic approach ensures students develop into well rounded individuals with strong ethical foundations.
              </p>
              <p>
                <strong>Innovative Teaching Methods:</strong> We embrace modern educational technology and innovative pedagogical approaches. Our smart classrooms, digital learning tools, and interactive teaching methods make learning engaging and effective. We create disciplined yet stimulating learning environments that encourage curiosity and critical thinking.
              </p>
              <p>
                <strong>Dedicated Mentorship:</strong> Every student receives individualized attention through our comprehensive mentorship program. We provide personalized study plans, regular progress monitoring, doubt clearing sessions, and emotional support. Our faculty members are committed to the success and wellbeing of each student.
              </p>
              <p>
                Through these pillars, we aim to cultivate curiosity, build confidence, develop critical thinking abilities, and instill a lifelong passion for achievement. We strive to ensure that every learner who walks through our doors emerges as a skilled, responsible, and empowered individual ready to excel in higher education and contribute meaningfully to society.
              </p>
            </div>
          </div>
        </div>
      )}

      {aboutItems.map((item) => (
        activePopup === item.id && (
          <div key={item.id} className="fullscreen-modal" onClick={() => setActivePopup(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setActivePopup(null)}>
                <i className="fas fa-times"></i>
              </button>
              <h3 className="modal-title">{item.title}</h3>
              <div className="modal-body">
                <p>{item.detail}</p>
              </div>
            </div>
          </div>
        )
      ))}

      <style jsx>{`
        .about-intro {
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 30px;
          color: #333;
        }

        .about-vision-mission {
          display: flex;
          gap: 30px;
          margin-bottom: 35px;
          flex-wrap: wrap;
        }

        .vision-mission-item {
          flex: 1;
          min-width: 200px;
        }

        .vm-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .vm-icon-wrapper:hover {
          background: #e3f2fd;
          transform: translateY(-2px);
        }

        .vm-icon-wrapper i {
          font-size: 24px;
          color: #2196F3;
        }

        .vm-label {
          font-weight: 700;
          font-size: 16px;
          color: #1a1a1a;
        }

        .about-pillars {
          margin-top: 25px;
        }

        .pillars-heading {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .pillar-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          padding: 12px 15px;
          background: #f8f9fa;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .pillar-item:hover {
          background: #e3f2fd;
          transform: translateX(5px);
        }

        .pillar-item i {
          font-size: 20px;
          color: #2196F3;
          flex-shrink: 0;
        }

        .pillar-title {
          font-weight: 600;
          font-size: 15px;
          color: #1a1a1a;
        }

        /* Full Screen Modal Styles */
        .fullscreen-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal-content {
          background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
          border-radius: 16px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 40px;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: white;
          font-size: 20px;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(90deg);
        }

        .modal-title {
          color: white;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 25px;
          padding-right: 50px;
        }

        .modal-body {
          color: white;
        }

        .modal-body p {
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 20px;
          color: white;
          text-align: justify;
        }

        .modal-body p:last-child {
          margin-bottom: 0;
        }

        .modal-body strong {
          color: #FFD700;
          font-weight: 700;
        }

        /* Scrollbar Styling */
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 768px) {
          .about-vision-mission {
            flex-direction: column;
            gap: 15px;
          }

          .pillars-grid {
            grid-template-columns: 1fr;
          }

          .modal-content {
            padding: 30px 20px;
            max-height: 85vh;
          }

          .modal-title {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .modal-body p {
            font-size: 14px;
          }

          .close-btn {
            width: 35px;
            height: 35px;
            font-size: 18px;
          }

          .pillars-heading {
            font-size: 18px;
          }
        }

        @media (max-width: 576px) {
          .about-intro {
            font-size: 14px;
          }

          .vm-label {
            font-size: 14px;
          }

          .pillar-title {
            font-size: 14px;
          }

          .modal-content {
            padding: 25px 15px;
          }

          .modal-title {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutSection3;
