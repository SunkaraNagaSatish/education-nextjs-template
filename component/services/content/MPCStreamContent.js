import React from "react";

const MPCStreamContent = () => (
    <>
        <div className="container content-wrapper">
            <div className="hero-section">
                <div className="hero-icon">
                    <i className="fas fa-calculator"></i>
                </div>
                <h1 className="main-title">MPC Stream</h1>
                <p className="main-subtitle">Mathematics, Physics, Chemistry</p>
                <p className="hero-desc">Your Gateway to Engineering Excellence</p>
            </div>

            <div className="content-grid">
                <div className="content-card highlight-card">
                    <h2 className="card-title">Program Overview</h2>
                    <p className="card-text">
                        The MPC stream at Vidisha Junior College is meticulously designed for students aspiring to become engineers and pursue careers in technology, innovation, and scientific research. This comprehensive program seamlessly integrates the complete intermediate board syllabus with intensive IIT JEE Mains and Advanced coaching, providing students with a unified and focused learning experience under one roof.
                    </p>
                    <p className="card-text">
                        Our curriculum goes far beyond traditional classroom teaching. We emphasize deep conceptual understanding, analytical thinking, and advanced problem solving skills that are essential for success in both board examinations and highly competitive engineering entrance tests. Every topic is taught with dual focus, ensuring students master concepts for immediate academic success while building foundations for future engineering studies and professional careers.
                    </p>
                </div>

                <div className="content-card">
                    <div className="card-icon blue-gradient">
                        <i className="fas fa-book-open"></i>
                    </div>
                    <h3 className="card-subtitle">Comprehensive Curriculum</h3>
                    <p className="card-text">
                        Our MPC curriculum covers the entire intermediate syllabus in Mathematics, Physics, and Chemistry with exceptional depth and clarity. Mathematics modules include differential and integral calculus, algebra, trigonometry, vectors, three dimensional geometry, and probability, all taught with emphasis on both theoretical understanding and practical application in engineering contexts.
                    </p>
                    <p className="card-text">
                        Physics instruction encompasses comprehensive coverage of mechanics, thermodynamics, electromagnetism, waves and optics, and modern physics with extensive problem solving practice. Chemistry syllabus includes physical chemistry with numerical problems, organic chemistry with detailed reaction mechanisms, and inorganic chemistry with periodic properties and coordination compounds, all perfectly aligned with JEE examination patterns and requirements.
                    </p>
                </div>

                <div className="content-card">
                    <div className="card-icon green-gradient">
                        <i className="fas fa-graduation-cap"></i>
                    </div>
                    <h3 className="card-subtitle">IIT JEE Preparation</h3>
                    <p className="card-text">
                        Students receive focused and intensive training specifically designed for IIT JEE Mains and Advanced examinations. Our coaching methodology includes comprehensive topic wise modules that systematically break down the vast JEE syllabus into manageable and digestible segments, regular intensive practice sessions with carefully selected previous year questions, and full length mock tests that accurately simulate actual exam conditions and difficulty levels.
                    </p>
                    <p className="card-text">
                        We employ time tested and proven strategies for tackling multiple choice questions, complex numerical problems, and challenging assertion reasoning questions. Advanced time management techniques, efficient shortcut methods, and strategic exam approaches are taught systematically and reinforced through practice. Students learn to accurately identify high weightage topics, intelligently prioritize their preparation efforts, and develop the exceptional speed and pinpoint accuracy required to excel in these intensely competitive examinations.
                    </p>
                </div>

                <div className="content-card">
                    <div className="card-icon orange-gradient">
                        <i className="fas fa-flask"></i>
                    </div>
                    <h3 className="card-subtitle">Practical Laboratory Training</h3>
                    <p className="card-text">
                        Our state of the art Physics and Chemistry laboratories, equipped with modern instruments and safety equipment, provide extensive hands on experience with experiments that effectively bring abstract theoretical concepts to vivid life. Students actively perform experiments in mechanics, electricity and magnetism, optics, chemical kinetics, electrochemistry, and qualitative inorganic analysis, systematically developing essential practical skills and cultivating genuine scientific temperament.
                    </p>
                    <p className="card-text">
                        Laboratory sessions are carefully designed to powerfully reinforce classroom learning, build unwavering confidence in handling sophisticated scientific equipment, and develop sharp observation skills and rigorous analytical abilities. Regular comprehensive practical examinations ensure students are thoroughly and confidently prepared for board practical exams while simultaneously understanding the fascinating real world applications of fundamental scientific principles in engineering and technology fields.
                    </p>
                </div>

                <div className="content-card">
                    <div className="card-icon purple-gradient">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <h3 className="card-subtitle">Continuous Assessment and Progress Tracking</h3>
                    <p className="card-text">
                        We maintain a rigorous and comprehensive assessment system featuring weekly subject specific tests, monthly integrated examinations, and quarterly comprehensive evaluations covering the entire syllabus. Each carefully designed test covers both board exam patterns and diverse JEE question types, providing students with valuable exposure to varied problem formats, multiple difficulty levels, and different questioning styles that build versatility and adaptability.
                    </p>
                    <p className="card-text">
                        Detailed and insightful performance analysis conducted after each assessment helps accurately identify individual strengths to leverage and specific weaknesses to address. Students receive highly personalized feedback, precisely targeted study recommendations, and customized intensive doubt clearing sessions tailored to their unique needs. Parents are regularly and transparently updated about comprehensive academic progress, detailed test performances, and specific areas requiring additional focused attention through our efficient and open communication system.
                    </p>
                </div>

                <div className="content-card">
                    <div className="card-icon teal-gradient">
                        <i className="fas fa-users-cog"></i>
                    </div>
                    <h3 className="card-subtitle">Expert Faculty and Mentorship</h3>
                    <p className="card-text">
                        Our distinguished MPC faculty comprises highly qualified and extensively experienced educators with proven track records in both intermediate board teaching and competitive exam coaching. They possess exceptional deep subject knowledge, thoroughly understand the intricate nuances of JEE examination patterns and marking schemes, and skillfully employ innovative and engaging teaching methodologies that make even the most complex and challenging concepts accessible, understandable, and genuinely interesting for students.
                    </p>
                    <p className="card-text">
                        Beyond traditional classroom instruction, our dedicated faculty members serve as caring mentors who provide invaluable personalized guidance, insightful career counseling for engineering streams and specializations, and crucial emotional support throughout the demanding preparation journey. Regular accessible doubt clearing sessions ensure absolutely no student is ever left behind or confused. Teachers remain readily available for meaningful one on one interactions, patiently helping students systematically overcome academic challenges and steadily build genuine confidence in their growing abilities and potential for success.
                    </p>
                </div>
            </div>

            <div className="cta-section">
                <h2 className="cta-title">Ready to Begin Your Engineering Journey?</h2>
                <p className="cta-text">Join Vidisha Junior College MPC stream and transform your engineering dreams into reality with expert guidance, comprehensive preparation, and unwavering support.</p>
                <a href="/contact" className="cta-button">Enroll Now</a>
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
        color: #2196F3;
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

export default MPCStreamContent;
