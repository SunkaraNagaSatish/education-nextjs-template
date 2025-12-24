import React from "react";

const InfrastructureContent = () => (
    <>
        <div className="container content-wrapper">
            <div className="hero-section">
                <div className="hero-icon infra-icon">
                    <i className="fas fa-building"></i>
                </div>
                <h1 className="main-title">Our Infrastructure</h1>
                <p className="main-subtitle">State of the Art Facilities</p>
                <p className="hero-desc">Creating the Perfect Environment for Academic Excellence</p>
            </div>

            <div className="content-grid">
                <div className="content-card highlight-card infra-highlight">
                    <h2 className="card-title">World Class Learning Environment</h2>
                    <p className="card-text">
                        At Vidisha Junior College, we firmly believe that exceptional education requires an exceptional environment. Our campus infrastructure is thoughtfully designed and meticulously maintained to provide students with the best possible facilities for focused learning, practical training, comfortable living, and holistic development. Every aspect of our infrastructure reflects our commitment to creating an atmosphere where students can concentrate fully on their academic goals without any distractions or discomfort.
                    </p>
                    <p className="card-text">
                        From modern air conditioned smart classrooms equipped with cutting edge technology to advanced science laboratories with sophisticated equipment, from comprehensive libraries stocked with extensive resources to comfortable hostel facilities providing a home away from home, we have invested significantly in building infrastructure that supports and enhances the learning experience. Our facilities are regularly upgraded, properly maintained, and designed keeping student needs, safety, and comfort as top priorities.
                    </p>
                </div>

                <div className="content-card">
                    <div className="card-icon blue-gradient">
                        <i className="fas fa-chalkboard-teacher"></i>
                    </div>
                    <h3 className="card-subtitle">Air Conditioned Smart Classrooms</h3>
                    <p className="card-text">
                        Our modern temperature controlled classrooms are equipped with state of the art digital teaching systems including interactive whiteboards, high definition projectors, quality sound systems, and multimedia capabilities that transform traditional teaching into engaging interactive experiences. The comfortable climate controlled environment ensures students can focus completely on learning without distractions from heat, humidity, or discomfort, maintaining optimal concentration levels throughout long study sessions and intensive coaching classes.
                    </p>
                    <p className="card-text">
                        Smart classroom technology enables teachers to present complex concepts through visual demonstrations, animated explanations, three dimensional models, and interactive simulations that make abstract ideas concrete and memorable. Digital boards allow real time problem solving, instant corrections, and dynamic presentations. Students benefit from enhanced engagement, better understanding, improved retention, and more effective learning compared to traditional chalk and board methods, preparing them for technology integrated education in higher studies.
                    </p>
                </div>

                <div className="content-card">
                    <div className="card-icon green-gradient">
                        <i className="fas fa-flask"></i>
                    </div>
                    <h3 className="card-subtitle">Advanced Science Laboratories</h3>
                    <p className="card-text">
                        Our fully equipped Physics, Chemistry, and Biology laboratories feature modern instruments, sophisticated equipment, comprehensive experimental setups, and complete safety measures that provide students with authentic hands on scientific experience. Physics lab includes apparatus for mechanics experiments, electricity and magnetism demonstrations, optics investigations, and modern physics observations. Chemistry lab is equipped for organic synthesis, inorganic analysis, physical chemistry experiments, and quantitative analysis with proper ventilation and safety equipment.
                    </p>
                    <p className="card-text">
                        Biology laboratory houses advanced microscopes, preserved specimens, anatomical models, dissection tools, slide preparation equipment, and resources for botany and zoology practicals. Students perform experiments that bring textbook theories to life, develop practical skills essential for board exams and competitive tests, build confidence in handling scientific equipment, and cultivate genuine scientific temperament through observation, experimentation, and analysis. Regular lab sessions ensure thorough preparation for practical examinations while fostering curiosity and investigative thinking.
                    </p>
                </div>

                <div className="content-card">
                    <div className="card-icon purple-gradient">
                        <i className="fas fa-book"></i>
                    </div>
                    <h3 className="card-subtitle">Comprehensive Library</h3>
                    <p className="card-text">
                        Our well stocked library features an extensive collection of reference books, textbooks, competitive exam guides, previous years question papers, subject encyclopedias, scientific journals, and digital resources covering both intermediate board syllabus and entrance exam preparation for IIT JEE and NEET. The library is regularly updated with latest publications, new editions, current study materials, and relevant resources ensuring students always have access to the most recent and comprehensive information for their academic needs.
                    </p>
                    <p className="card-text">
                        The quiet, well lit, and conducive reading environment provides students with a perfect dedicated space for self study, research, deep learning, and focused preparation away from distractions. Comfortable seating, proper lighting, organized sections, and a peaceful atmosphere encourage students to spend productive hours in reading, revision, and independent study. Library staff assist students in finding resources, recommend relevant books, and maintain an orderly system that makes accessing information easy and efficient for all learners.
                    </p>
                </div>

                <div className="content-card">
                    <div className="card-icon orange-gradient">
                        <i className="fas fa-bed"></i>
                    </div>
                    <h3 className="card-subtitle">Hostel Facilities</h3>
                    <p className="card-text">
                        We provide separate, secure, and well maintained hostel facilities for boys and girls, offering a safe and comfortable home away from home environment for residential students. Accommodation includes clean spacious rooms, comfortable beds, adequate storage, proper ventilation, and all basic amenities. Nutritious meals are prepared with care and attention to health, hygiene, and balanced nutrition, ensuring students receive wholesome food that supports their physical development, mental alertness, and overall wellbeing during crucial academic years.
                    </p>
                    <p className="card-text">
                        Our residential facilities include round the clock security with trained guards, dedicated experienced wardens who supervise and support students, common study rooms for group learning and discussions, recreational areas for relaxation and activities, medical support for health emergencies, and regular maintenance ensuring cleanliness and functionality. The hostel environment promotes discipline, time management, peer learning, independence, and personal responsibility while ensuring complete safety, security, and wellbeing of every resident student under our care.
                    </p>
                </div>

                <div className="content-card">
                    <div className="card-icon teal-gradient">
                        <i className="fas fa-bus"></i>
                    </div>
                    <h3 className="card-subtitle">Transportation Services</h3>
                    <p className="card-text">
                        Safe, reliable, and punctual transportation services cover major routes across Vijayawada and surrounding areas for day scholar students who commute from home. Our fleet of well maintained buses with trained experienced drivers and responsible attendants ensures students travel comfortably and reach college on time every day. Buses follow fixed routes and schedules, pick up and drop students at designated points, and maintain strict safety protocols throughout the journey.
                    </p>
                    <p className="card-text">
                        Parents can have complete peace of mind knowing their children are traveling safely in monitored vehicles with responsible staff. GPS tracking systems allow real time location monitoring, regular vehicle maintenance ensures mechanical reliability and safety, strict adherence to traffic rules and speed limits ensures secure travel, and emergency contact systems provide quick communication channels. Our transportation service is dependable, secure, comfortable, and designed to eliminate commute related stress for both students and parents.
                    </p>
                </div>
            </div>

            <div className="cta-section infra-cta">
                <h2 className="cta-title">Experience Our World Class Infrastructure</h2>
                <p className="cta-text">Visit Vidisha Junior College campus to see our exceptional facilities firsthand. Book a campus tour and discover the perfect environment for your academic success.</p>
                <a href="/contact" className="cta-button infra-button">Schedule Campus Visit</a>
            </div>
        </div>

        <style jsx>{`
      .container {
        position: relative;
        z-index: 2;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .content-wrapper {
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

      .hero-section {
        text-align: center;
        margin-bottom: 60px;
      }

      .hero-icon {
        width: 120px;
        height: 120px;
        background: linear-gradient(135deg, #2196F3, #1976D2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 30px;
        box-shadow: 0 15px 40px rgba(33, 150, 243, 0.3);
      }

      .infra-icon {
        background: linear-gradient(135deg, #FF9800, #F57C00) !important;
        box-shadow: 0 15px 40px rgba(255, 152, 0, 0.3) !important;
      }

      .hero-icon i {
        font-size: 60px;
        color: white;
      }

      .main-title {
        font-size: 48px;
        font-weight: 800;
        color: #1a1a1a;
        margin-bottom: 10px;
      }

      .main-subtitle {
        font-size: 24px;
        font-weight: 600;
        color: #FF9800;
        margin-bottom: 10px;
      }

      .hero-desc {
        font-size: 18px;
        color: #666;
        max-width: 700px;
        margin: 0 auto;
      }

      .content-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        margin-bottom: 60px;
      }

      .content-card {
        background: white;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
      }

      .content-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
      }

      .highlight-card {
        grid-column: 1 / -1;
        background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
        border-left: 5px solid #2196F3;
      }

      .infra-highlight {
        background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%) !important;
        border-left-color: #FF9800 !important;
      }

      .card-icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
      }

      .card-icon i {
        font-size: 32px;
        color: white;
      }

      .blue-gradient {
        background: linear-gradient(135deg, #2196F3, #1976D2);
      }

      .green-gradient {
        background: linear-gradient(135deg, #4CAF50, #388E3C);
      }

      .orange-gradient {
        background: linear-gradient(135deg, #FF9800, #F57C00);
      }

      .purple-gradient {
        background: linear-gradient(135deg, #9C27B0, #7B1FA2);
      }

      .teal-gradient {
        background: linear-gradient(135deg, #00BCD4, #0097A7);
      }

      .card-title {
        font-size: 32px;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 20px;
      }

      .card-subtitle {
        font-size: 24px;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 20px;
      }

      .card-text {
        font-size: 16px;
        line-height: 1.8;
        color: #444;
        margin-bottom: 15px;
        text-align: justify;
      }

      .cta-section {
        background: linear-gradient(135deg, #2196F3, #1976D2);
        padding: 60px;
        border-radius: 20px;
        text-align: center;
        color: white;
      }

      .infra-cta {
        background: linear-gradient(135deg, #FF9800, #F57C00) !important;
      }

      .cta-title {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 20px;
      }

      .cta-text {
        font-size: 18px;
        margin-bottom: 30px;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.7;
      }

      .cta-button {
        display: inline-block;
        padding: 15px 40px;
        background: white;
        color: #2196F3;
        font-size: 18px;
        font-weight: 700;
        border-radius: 50px;
        text-decoration: none;
        transition: all 0.3s ease;
      }

      .infra-button {
        color: #FF9800 !important;
      }

      .cta-button:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      }

      @media (max-width: 992px) {
        .content-grid {
          grid-template-columns: 1fr;
        }

        .main-title {
          font-size: 36px;
        }

        .hero-icon {
          width: 100px;
          height: 100px;
        }

        .hero-icon i {
          font-size: 50px;
        }
      }

      @media (max-width: 768px) {
        .main-title {
          font-size: 28px;
        }

        .main-subtitle {
          font-size: 18px;
        }

        .hero-desc {
          font-size: 16px;
        }

        .content-card {
          padding: 30px 20px;
        }

        .cta-section {
          padding: 40px 20px;
        }

        .cta-title {
          font-size: 28px;
        }

        .cta-text {
          font-size: 16px;
        }
      }
    `}</style>
    </>
);

export default InfrastructureContent;
