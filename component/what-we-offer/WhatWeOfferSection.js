"use client";
import React from "react";

const WhatWeOfferSection = () => {
  return (
    <section className="what-we-offer-section">
      <div className="background-overlay"></div>

      <div className="container">
        {/* What We Offer - Streams */}
        <div className="content-block">
          <h2 className="section-title">What We Offer</h2>

          <div className="stream-cards">
            <div className="stream-card mpc-card">
              <div className="card-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3 className="card-title">MPC Stream</h3>
              <h4 className="card-subtitle">Mathematics, Physics, Chemistry</h4>
              <p className="card-description">
                Designed specifically for students aspiring to become engineers and pursue careers in technology and innovation, our MPC program seamlessly integrates the complete intermediate board syllabus with comprehensive IIT JEE Mains and Advanced coaching under one roof.
              </p>
              <p className="card-description">
                Students receive highly focused and intensive training in advanced problem solving techniques, deep conceptual clarity across all three subjects, and proven exam strategies that have helped countless students crack the toughest engineering entrance examinations in India.
              </p>
              <p className="card-description">
                Our curriculum is meticulously designed to build strong mathematical foundations, develop analytical thinking in physics, and master chemical concepts through systematic teaching, regular practice sessions, and continuous assessments that track progress and identify areas for improvement.
              </p>
            </div>

            <div className="stream-card bipc-card">
              <div className="card-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3 className="card-title">BiPC Stream</h3>
              <h4 className="card-subtitle">Biology, Physics, Chemistry</h4>
              <p className="card-description">
                Tailored exclusively for future doctors, medical professionals, and life science researchers, our BiPC program expertly combines comprehensive board preparation with rigorous NEET coaching, ensuring students are thoroughly prepared for both their intermediate examinations and medical entrance tests.
              </p>
              <p className="card-description">
                The curriculum places special emphasis on medical entrance exam patterns, in-depth biology coverage spanning botany and zoology, application based learning that connects theoretical knowledge to real world medical scenarios, and extensive practice with previous year NEET questions.
              </p>
              <p className="card-description">
                Our teaching methodology focuses on building strong conceptual foundations in human physiology, plant biology, organic chemistry, and physics principles relevant to medical sciences, while also developing the speed and accuracy required to excel in competitive medical entrance examinations.
              </p>
            </div>
          </div>

          <div className="integrated-approach">
            <div className="approach-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3 className="approach-title">Integrated Approach</h3>
            <p className="approach-description">
              Unlike traditional colleges where students must juggle between regular college classes and separate coaching centers, Vidisha Junior College offers both comprehensive board preparation and intensive competitive exam coaching under one roof, creating a unified and streamlined learning experience.
            </p>
            <p className="approach-description">
              This integrated approach eliminates the stress of traveling between multiple locations, prevents schedule conflicts, ensures consistent teaching quality, and allows for better time management. Students benefit from a cohesive curriculum where board topics and competitive exam preparation complement each other seamlessly.
            </p>
            <p className="approach-description">
              Our faculty coordinates closely to ensure that concepts taught for board exams are simultaneously deepened for competitive exam requirements, creating a focused, efficient, and highly effective learning environment that maximizes student success in both domains.
            </p>
          </div>
        </div>

        {/* Infrastructure */}
        <div className="content-block infrastructure-block">
          <h2 className="section-title">Our Infrastructure</h2>

          <div className="infrastructure-grid">
            <div className="infra-item">
              <div className="infra-icon blue-icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3 className="infra-title">Air Conditioned Smart Classrooms</h3>
              <p className="infra-description">
                Modern, temperature controlled classrooms equipped with cutting edge digital teaching systems, interactive whiteboards, high quality projectors, and audio visual aids make complex concepts significantly easier to understand, visualize, and retain for long term learning.
              </p>
              <p className="infra-description">
                The comfortable learning environment ensures students can focus completely on their studies without distractions from heat or discomfort, while smart technology enables teachers to present information in engaging, interactive formats that enhance comprehension and memory retention.
              </p>
            </div>

            <div className="infra-item">
              <div className="infra-icon green-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3 className="infra-title">Advanced Science Laboratories</h3>
              <p className="infra-description">
                State of the art Physics, Chemistry, and Biology laboratories equipped with modern instruments, safety equipment, and comprehensive experimental setups allow students hands on exposure to scientific experiments, fostering genuine curiosity, practical understanding, and scientific temperament.
              </p>
              <p className="infra-description">
                Students perform experiments that bring textbook concepts to life, develop laboratory skills essential for higher education, and gain confidence in handling scientific equipment. Our well maintained labs meet all safety standards and provide an authentic research environment for young learners.
              </p>
            </div>

            <div className="infra-item">
              <div className="infra-icon purple-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3 className="infra-title">Comprehensive Library</h3>
              <p className="infra-description">
                A well stocked library featuring an extensive collection of reference books, study materials, previous years question papers, competitive exam guides, subject encyclopedias, and digital resources for both board examinations and competitive entrance tests like IIT JEE and NEET.
              </p>
              <p className="infra-description">
                The quiet, conducive reading environment provides students with a perfect space for self study, research, and deep learning. Regular updates ensure the latest publications and study materials are always available to support student learning and exam preparation.
              </p>
            </div>

            <div className="infra-item">
              <div className="infra-icon orange-icon">
                <i className="fas fa-bed"></i>
              </div>
              <h3 className="infra-title">Hostel Facilities</h3>
              <p className="infra-description">
                Separate, secure, and well maintained hostels for boys and girls provide a safe and comfortable home away from home environment. Nutritious meals are prepared with care and attention to health, ensuring students receive balanced diets that support their physical and mental development during crucial academic years.
              </p>
              <p className="infra-description">
                Our residential facilities include comfortable accommodation, 24/7 security, dedicated wardens, study rooms, recreational areas, and medical support. The hostel environment promotes discipline, time management, peer learning, and independence while ensuring complete safety and wellbeing of every resident student.
              </p>
            </div>

            <div className="infra-item">
              <div className="infra-icon teal-icon">
                <i className="fas fa-bus"></i>
              </div>
              <h3 className="infra-title">Transportation</h3>
              <p className="infra-description">
                Safe, reliable, and punctual transportation services covering major routes across Vijayawada and surrounding areas for day scholar students. Our fleet of well maintained buses with trained drivers and attendants ensures students commute comfortably and reach college on time every day.
              </p>
              <p className="infra-description">
                Parents can have complete peace of mind knowing their children are traveling safely. GPS tracking, regular maintenance, and strict safety protocols make our transportation service dependable and secure for all students who choose to commute from home.
              </p>
            </div>
          </div>
        </div>

        {/* Faculty */}
        <div className="content-block faculty-block">
          <h2 className="section-title">Our Faculty</h2>

          <div className="faculty-intro">
            <p className="faculty-description">
              At the heart of Vidisha Junior College is a team of highly qualified, extensively experienced, and genuinely passionate educators who form the backbone of our academic excellence. Our teachers are not just subject matter experts with deep knowledge, they are dedicated mentors who invest significant time, effort, and genuine care into each student's academic progress and personal development.
            </p>
          </div>

          <div className="faculty-qualities">
            <h3 className="qualities-title">They understand that every learner is unique and work consistently to:</h3>

            <div className="qualities-grid">
              <div className="quality-item">
                <i className="fas fa-search"></i>
                <p>Identify individual strengths and address specific doubts with personalized attention</p>
              </div>
              <div className="quality-item">
                <i className="fas fa-hands-helping"></i>
                <p>Provide customized academic support tailored to each student's learning pace and style</p>
              </div>
              <div className="quality-item">
                <i className="fas fa-comments"></i>
                <p>Conduct regular doubt clearing sessions ensuring no question goes unanswered</p>
              </div>
              <div className="quality-item">
                <i className="fas fa-bullseye"></i>
                <p>Offer strategic guidance for competitive exams with proven techniques and shortcuts</p>
              </div>
              <div className="quality-item">
                <i className="fas fa-chart-line"></i>
                <p>Build confidence and motivation through encouragement and positive reinforcement</p>
              </div>
              <div className="quality-item">
                <i className="fas fa-lightbulb"></i>
                <p>Inspire curiosity and critical thinking beyond textbook learning</p>
              </div>
            </div>
          </div>

          <div className="faculty-commitment">
            <p className="commitment-text">
              Whether through engaging classroom teaching, personalized one on one mentoring sessions, comprehensive revision modules, or after hours support, our faculty ensures that students receive the thorough, comprehensive guidance they truly deserve. Their dedication goes beyond duty, it is a genuine commitment to shaping futures and building dreams.
            </p>
          </div>
        </div>

        {/* Holistic Development */}
        <div className="content-block holistic-block">
          <h2 className="section-title">Holistic Development</h2>

          <div className="holistic-intro">
            <p className="holistic-description">
              We firmly believe that strong academics flourish best in a strong, supportive, and nurturing environment. Beyond textbooks, examinations, and academic achievements, Vidisha Junior College focuses comprehensively on developing well rounded individuals equipped with essential life skills and values.
            </p>
          </div>

          <div className="holistic-areas">
            <div className="holistic-card">
              <div className="holistic-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h4>Discipline and Time Management</h4>
              <p>Teaching students to manage their time effectively, maintain discipline in studies and life, and develop habits that lead to consistent success and productivity.</p>
            </div>

            <div className="holistic-card">
              <div className="holistic-icon">
                <i className="fas fa-microphone"></i>
              </div>
              <h4>Communication Skills and Confidence Building</h4>
              <p>Developing effective communication abilities, public speaking skills, and self confidence through presentations, group discussions, and interactive activities.</p>
            </div>

            <div className="holistic-card">
              <div className="holistic-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h4>Critical Thinking and Problem Solving</h4>
              <p>Encouraging analytical thinking, logical reasoning, creative problem solving, and the ability to approach challenges from multiple perspectives.</p>
            </div>

            <div className="holistic-card">
              <div className="holistic-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h4>Emotional Balance and Stress Management</h4>
              <p>Providing guidance on managing academic pressure, maintaining emotional wellbeing, handling stress positively, and developing resilience in the face of challenges.</p>
            </div>

            <div className="holistic-card">
              <div className="holistic-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Leadership Qualities and Teamwork</h4>
              <p>Fostering leadership skills, collaborative abilities, team spirit, and the capacity to work effectively with others towards common goals.</p>
            </div>
          </div>

          <div className="holistic-methods">
            <p className="methods-text">
              Through carefully designed workshops, enlightening seminars, value based educational sessions, skill building activities, personality development programs, and mentorship initiatives, we prepare students not just for examinations but for life itself. Our goal is to develop individuals who are academically excellent, emotionally intelligent, socially responsible, and ready to make meaningful contributions to society.
            </p>
          </div>
        </div>

        {/* Parental Partnership */}
        <div className="content-block parental-block">
          <h2 className="section-title">Parental Partnership</h2>

          <div className="parental-intro">
            <p className="parental-description">
              We deeply honor and value the trust that parents place in us when they entrust their children's education and future to Vidisha Junior College. Transparent, open, and consistent communication is a fundamental cornerstone of our educational philosophy and approach.
            </p>
          </div>

          <div className="parental-benefits">
            <h3 className="benefits-title">Parents receive:</h3>

            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="benefit-content">
                  <h4>Regular Progress Reports and Performance Updates</h4>
                  <p>Detailed reports on academic performance, test scores, strengths, areas for improvement, and overall development shared regularly with parents.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-door-open"></i>
                </div>
                <div className="benefit-content">
                  <h4>Open Access to Teachers for Discussions</h4>
                  <p>Parents have direct access to teachers and faculty members for one on one discussions about their child's progress, concerns, or any academic matters.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <div className="benefit-content">
                  <h4>Monthly Parent Teacher Meetings</h4>
                  <p>Structured monthly meetings where parents and teachers collaborate to discuss student progress, address challenges, and plan strategies for improvement.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-bell"></i>
                </div>
                <div className="benefit-content">
                  <h4>Attendance and Academic Monitoring Alerts</h4>
                  <p>Timely notifications about attendance, assignment submissions, test performances, and any concerns that require parental attention or intervention.</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="benefit-content">
                  <h4>Direct Involvement in Educational Journey</h4>
                  <p>Parents are considered active partners in their child's education, with opportunities to participate in school activities and contribute to their child's learning process.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="parental-conclusion">
            <p className="conclusion-text">
              When students, teachers, and parents work together as a unified team with shared goals and open communication, success becomes not just possible but inevitable. This collaborative approach ensures every child receives the support, guidance, and encouragement they need to reach their fullest potential.
            </p>
          </div>
        </div>

        {/* Chairman's Message */}
        <div className="content-block message-block chairman-block">
          <div className="message-header">
            <div className="message-icon">
              <i className="fas fa-user-tie"></i>
            </div>
            <h2 className="section-title">Chairman's Message</h2>
          </div>

          <div className="message-content">
            <p className="message-text">
              It gives me immense pride and a deep sense of purpose to present Vidisha Junior College as a beacon of learning, ambition, and excellence for the youth of Vijayawada and beyond.
            </p>
            <p className="message-text">
              When I established this institution in 2023, my dream was simple yet powerful: to ensure that every household in our community has both an engineer and a doctor, shaping a future where knowledge leads progress and every family has the power to transform society.
            </p>
            <p className="message-text">
              At Vidisha Junior College, we believe education is not limited to textbooks or examinations. It is about building strong character, nurturing curiosity, and inspiring students to dream bigger than their circumstances. Through our MPC and BiPC programs integrated with competitive training for IIT JEE and NEET, we are determined to guide students to achieve their highest goals with confidence and competence.
            </p>
            <p className="message-text">
              Our dedicated faculty, advanced learning systems, and disciplined environment work together to empower students to unlock their true potential. We stand committed to helping each learner grow into a leader with intelligence, empathy, resilience, and responsibility.
            </p>
            <p className="message-text">
              To every parent who entrusts us with their child's future and to every student who chooses Vidisha Junior College, I promise that we will walk with you every step of the way. Together, we will build a generation that leads with knowledge and serves with humanity.
            </p>
            <div className="message-signature">
              <p className="signature-name">Kommineni Venkatesh</p>
              <p className="signature-title">Chairman, Vidisha Junior College</p>
            </div>
          </div>
        </div>

        {/* Principal's Message */}
        <div className="content-block message-block principal-block">
          <div className="message-header">
            <div className="message-icon">
              <i className="fas fa-user-graduate"></i>
            </div>
            <h2 className="section-title">Principal's Message</h2>
          </div>

          <div className="message-content">
            <p className="message-text">
              At Vidisha Junior College, we believe that the right learning environment can transform a student's journey from ordinary to extraordinary.
            </p>
            <p className="message-text">
              Our campus is designed to provide students with a balanced and focused academic experience, supported by state of the art facilities such as air conditioned classrooms, smart digital learning systems, and technology driven teaching methods that make complex concepts easier to understand and apply.
            </p>
            <p className="message-text">
              Our highly qualified and passionate faculty members work tirelessly to guide students, not only toward academic excellence but also toward building confidence, discipline, and a strong sense of purpose. We maintain an atmosphere where doubts are addressed, strengths are encouraged, and every student receives the attention they deserve.
            </p>
            <p className="message-text">
              The college management and board stand as a strong pillar of support, ensuring that resources, mentorship, and guidance are always accessible to our learners. Their vision and encouragement drive us to constantly enhance our methods and provide an educational experience that meets the highest standards.
            </p>
            <p className="message-text">
              I am proud to lead a campus where every day brings new opportunities for growth and achievement. With commitment, innovation, and teamwork, Vidisha Junior College continues to empower students to succeed in competitive fields and build meaningful futures.
            </p>
            <p className="message-text">
              We welcome every learner to join us in this journey of excellence, ambition, and success.
            </p>
            <div className="message-signature">
              <p className="signature-name">Principal</p>
              <p className="signature-title">Vidisha Junior College</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .what-we-offer-section {
          position: relative;
          padding: 120px 0 80px 0;
          min-height: 100vh;
          background-image: url('/images/what-we-offer-bg.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
        }

        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.95);
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .content-block {
          margin-bottom: 80px;
          animation: fadeInUp 0.8s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-title {
          font-size: 42px;
          font-weight: 800;
          color: #1a1a1a;
          text-align: center;
          margin-bottom: 50px;
          position: relative;
          padding-bottom: 20px;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #2196F3, #1976D2);
          border-radius: 2px;
        }

        /* Stream Cards */
        .stream-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-bottom: 50px;
        }

        .stream-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          border: 3px solid transparent;
          border-bottom: none !important;
        }

        .stream-card::after,
        .stream-card::before {
          display: none !important;
        }

        .stream-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .mpc-card {
          border-color: #2196F3;
        }

        .mpc-card:hover {
          background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
        }

        .bipc-card {
          border-color: #4CAF50;
        }

        .bipc-card:hover {
          background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
        }

        .card-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #2196F3, #1976D2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          box-shadow: 0 8px 20px rgba(33, 150, 243, 0.3);
        }

        .bipc-card .card-icon {
          background: linear-gradient(135deg, #4CAF50, #388E3C);
          box-shadow: 0 8px 20px rgba(76, 175, 80, 0.3);
        }

        .card-icon i {
          font-size: 36px;
          color: white;
        }

        .card-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
          position: relative;
        }

        .card-title::after {
          display: none !important;
        }

        .card-subtitle {
          font-size: 18px;
          font-weight: 600;
          color: #666;
          margin-bottom: 20px;
        }

        .card-description {
          font-size: 16px;
          line-height: 1.8;
          color: #444;
          margin-bottom: 15px;
          text-align: justify;
        }

        /* Integrated Approach */
        .integrated-approach {
          background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
          padding: 50px;
          border-radius: 20px;
          color: white;
          text-align: center;
          box-shadow: 0 10px 40px rgba(255, 152, 0, 0.3);
        }

        .approach-icon {
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
        }

        .approach-icon i {
          font-size: 50px;
          color: white;
        }

        .approach-title {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 25px;
        }

        .approach-description {
          font-size: 17px;
          line-height: 1.9;
          margin-bottom: 20px;
          text-align: justify;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Infrastructure */
        .infrastructure-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .infra-item {
          background: white;
          padding: 35px;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .infra-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
        }

        .infra-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .blue-icon {
          background: linear-gradient(135deg, #2196F3, #1976D2);
        }

        .green-icon {
          background: linear-gradient(135deg, #4CAF50, #388E3C);
        }

        .purple-icon {
          background: linear-gradient(135deg, #9C27B0, #7B1FA2);
        }

        .orange-icon {
          background: linear-gradient(135deg, #FF9800, #F57C00);
        }

        .teal-icon {
          background: linear-gradient(135deg, #00BCD4, #0097A7);
        }

        .infra-icon i {
          font-size: 32px;
          color: white;
        }

        .infra-title {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
        }

        .infra-description {
          font-size: 15px;
          line-height: 1.8;
          color: #555;
          margin-bottom: 12px;
          text-align: justify;
        }

        /* Faculty */
        .faculty-intro {
          background: linear-gradient(135deg, #673AB7 0%, #512DA8 100%);
          padding: 40px;
          border-radius: 16px;
          margin-bottom: 40px;
          color: white;
        }

        .faculty-description {
          font-size: 17px;
          line-height: 1.9;
          text-align: justify;
          margin: 0;
        }

        .qualities-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 30px;
          text-align: center;
        }

        .qualities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          margin-bottom: 40px;
        }

        .quality-item {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: flex-start;
          gap: 15px;
          transition: all 0.3s ease;
        }

        .quality-item:hover {
          transform: translateX(10px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .quality-item i {
          font-size: 24px;
          color: #673AB7;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .quality-item p {
          font-size: 15px;
          line-height: 1.7;
          color: #444;
          margin: 0;
        }

        .faculty-commitment {
          background: #F3E5F5;
          padding: 35px;
          border-radius: 16px;
          border-left: 5px solid #673AB7;
        }

        .commitment-text {
          font-size: 16px;
          line-height: 1.9;
          color: #333;
          text-align: justify;
          margin: 0;
        }

        /* Holistic Development */
        .holistic-intro {
          background: linear-gradient(135deg, #FF5722 0%, #E64A19 100%);
          padding: 40px;
          border-radius: 16px;
          margin-bottom: 40px;
          color: white;
        }

        .holistic-description {
          font-size: 17px;
          line-height: 1.9;
          text-align: justify;
          margin: 0;
        }

        .holistic-areas {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          margin-bottom: 40px;
        }

        .holistic-card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .holistic-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .holistic-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #FF5722, #E64A19);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .holistic-icon i {
          font-size: 28px;
          color: white;
        }

        .holistic-card h4 {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 15px;
        }

        .holistic-card p {
          font-size: 15px;
          line-height: 1.8;
          color: #555;
          margin: 0;
        }

        .holistic-methods {
          background: #FBE9E7;
          padding: 35px;
          border-radius: 16px;
          border-left: 5px solid #FF5722;
        }

        .methods-text {
          font-size: 16px;
          line-height: 1.9;
          color: #333;
          text-align: justify;
          margin: 0;
        }

        /* Parental Partnership */
        .parental-intro {
          background: linear-gradient(135deg, #00BCD4 0%, #0097A7 100%);
          padding: 40px;
          border-radius: 16px;
          margin-bottom: 40px;
          color: white;
        }

        .parental-description {
          font-size: 17px;
          line-height: 1.9;
          text-align: justify;
          margin: 0;
        }

        .benefits-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 30px;
          text-align: center;
        }

        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 25px;
          margin-bottom: 40px;
        }

        .benefit-item {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          display: flex;
          gap: 25px;
          align-items: flex-start;
          transition: all 0.3s ease;
        }

        .benefit-item:hover {
          transform: translateX(15px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }

        .benefit-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #00BCD4, #0097A7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .benefit-icon i {
          font-size: 26px;
          color: white;
        }

        .benefit-content h4 {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
        }

        .benefit-content p {
          font-size: 15px;
          line-height: 1.8;
          color: #555;
          margin: 0;
        }

        .parental-conclusion {
          background: #E0F7FA;
          padding: 35px;
          border-radius: 16px;
          border-left: 5px solid #00BCD4;
        }

        .conclusion-text {
          font-size: 16px;
          line-height: 1.9;
          color: #333;
          text-align: justify;
          margin: 0;
        }

        /* Messages */
        .message-block {
          background: white;
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
        }

        .chairman-block {
          border-top: 5px solid #1976D2;
        }

        .principal-block {
          border-top: 5px solid #388E3C;
        }

        .message-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .message-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #1976D2, #1565C0);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .principal-block .message-icon {
          background: linear-gradient(135deg, #388E3C, #2E7D32);
        }

        .message-icon i {
          font-size: 40px;
          color: white;
        }

        .message-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .message-text {
          font-size: 17px;
          line-height: 1.9;
          color: #333;
          margin-bottom: 25px;
          text-align: justify;
        }

        .message-signature {
          margin-top: 40px;
          padding-top: 30px;
          border-top: 2px solid #e0e0e0;
          text-align: right;
        }

        .signature-name {
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 5px;
        }

        .signature-title {
          font-size: 16px;
          color: #666;
          font-style: italic;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .stream-cards,
          .infrastructure-grid,
          .qualities-grid,
          .holistic-areas {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 32px;
          }

          .what-we-offer-section {
            padding: 60px 0;
          }

          .content-block {
            margin-bottom: 60px;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 28px;
          }

          .stream-card,
          .message-block {
            padding: 30px 20px;
          }

          .integrated-approach {
            padding: 35px 25px;
          }

          .card-title {
            font-size: 24px;
          }

          .approach-title {
            font-size: 26px;
          }

          .benefit-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .message-signature {
            text-align: center;
          }
        }

        @media (max-width: 576px) {
          .what-we-offer-section {
            padding: 40px 0;
            background-attachment: scroll;
          }

          .section-title {
            font-size: 24px;
          }

          .card-title {
            font-size: 20px;
          }

          .card-description,
          .approach-description,
          .faculty-description,
          .holistic-description,
          .parental-description,
          .message-text {
            font-size: 15px;
          }

          .stream-card,
          .infra-item,
          .message-block {
            padding: 25px 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeOfferSection;
