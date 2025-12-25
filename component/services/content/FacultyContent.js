import React from "react";

const FacultyContent = () => (
  <>
    <div className="container content-wrapper">
      <div className="hero-section">
        <div className="hero-icon faculty-icon">
          <i className="fas fa-chalkboard-teacher"></i>
        </div>
        <h1 className="main-title">Our Faculty</h1>
        <p className="main-subtitle">Experienced Educators, Dedicated Mentors</p>
        <p className="hero-desc">The Heart of Vidisha Junior College</p>
      </div>

      <div className="content-grid">
        <div className="content-card highlight-card faculty-highlight">
          <h2 className="card-title">Excellence in Teaching</h2>
          <p className="card-text">
            At the heart of Vidisha Junior College is a team of highly qualified, extensively experienced, and genuinely passionate educators who form the backbone of our academic excellence and student success. Our teachers are not just subject matter experts with deep knowledge and mastery of their disciplines, they are dedicated mentors who invest significant time, effort, genuine care, and personal attention into each student's academic progress, personal development, and future success.
          </p>
          <p className="card-text">
            Our faculty members bring years of proven teaching experience, thorough understanding of intermediate board syllabi, comprehensive knowledge of competitive exam patterns for IIT JEE and NEET, and innovative pedagogical approaches that make complex concepts accessible and interesting. They continuously update their knowledge, attend professional development programs, study latest educational research, and refine their teaching methods to provide students with the most effective, engaging, and result oriented education possible.
          </p>
        </div>

        <div className="content-card">
          <div className="card-icon blue-gradient">
            <i className="fas fa-user-graduate"></i>
          </div>
          <h3 className="card-subtitle">Highly Qualified Educators</h3>
          <p className="card-text">
            Our faculty comprises postgraduates and specialists in Mathematics, Physics, Chemistry, and Biology with exceptional academic credentials, advanced degrees, and specialized training in their respective fields. Many hold Masters degrees, some possess doctoral qualifications, and several have additional certifications in competitive exam coaching methodologies. This strong academic foundation ensures they possess not just surface level knowledge but deep comprehensive understanding of subjects that enables them to explain concepts from multiple perspectives and answer even the most challenging student questions.
          </p>
          <p className="card-text">
            Beyond academic qualifications, our teachers bring practical teaching experience ranging from five to twenty plus years in intermediate education and competitive exam coaching. They have successfully guided thousands of students to excel in board examinations, crack IIT JEE and NEET, secure top ranks, and gain admissions to prestigious engineering and medical colleges. This proven track record demonstrates their effectiveness, expertise, and commitment to student success through results that speak louder than credentials alone.
          </p>
        </div>

        <div className="content-card">
          <div className="card-icon green-gradient">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3 className="card-subtitle">Innovative Teaching Methods</h3>
          <p className="card-text">
            Our faculty employs diverse innovative teaching methodologies that go far beyond traditional lecture based instruction. They use interactive demonstrations, real world applications, visual aids, digital presentations, animated explanations, problem solving workshops, group discussions, peer learning activities, and hands on experiments to make learning engaging, memorable, and effective. Concepts are taught through multiple approaches ensuring students with different learning styles all grasp ideas thoroughly and develop genuine understanding rather than mere rote memorization.
          </p>
          <p className="card-text">
            Teachers integrate technology effectively using smart boards, educational software, online resources, video demonstrations, and digital simulations to enhance explanations and visualize abstract concepts. They employ active learning techniques encouraging student participation, questions, discussions, and collaborative problem solving. Regular formative assessments, quick quizzes, and instant feedback help identify gaps immediately allowing timely intervention. This dynamic approach keeps students engaged, builds deeper understanding, and develops critical thinking skills essential for competitive exams and higher education.
          </p>
        </div>

        <div className="content-card">
          <div className="card-icon purple-gradient">
            <i className="fas fa-hands-helping"></i>
          </div>
          <h3 className="card-subtitle">Personalized Attention and Support</h3>
          <p className="card-text">
            Understanding that every learner is unique with different strengths, weaknesses, learning paces, and needs, our faculty works consistently to provide individualized attention and customized support. They identify each student's specific strengths to leverage and particular weaknesses to address through careful observation, regular assessments, and one on one interactions. Personalized study plans, targeted practice materials, and customized revision strategies are developed based on individual student profiles ensuring everyone receives exactly the support they need to excel.
          </p>
          <p className="card-text">
            Teachers conduct regular doubt clearing sessions where students can ask questions freely without hesitation or embarrassment. They remain accessible beyond classroom hours for additional help, clarifications, and guidance. Faculty members track individual student progress closely, celebrate improvements, address setbacks promptly, and provide continuous encouragement and motivation. This personal touch makes students feel valued, supported, and confident, creating a nurturing environment where everyone can reach their fullest potential regardless of their starting point or initial challenges.
          </p>
        </div>

        <div className="content-card">
          <div className="card-icon orange-gradient">
            <i className="fas fa-bullseye"></i>
          </div>
          <h3 className="card-subtitle">Competitive Exam Expertise</h3>
          <p className="card-text">
            Our faculty possesses specialized expertise in preparing students for highly competitive entrance examinations like IIT JEE and NEET. They thoroughly understand exam patterns, question types, difficulty levels, marking schemes, time constraints, and strategic approaches required for success. Teachers provide focused training on high weightage topics, frequently asked questions, tricky concepts, and common pitfalls. They teach time management techniques, elimination strategies, accuracy improvement methods, and smart guessing approaches that give students competitive advantages.
          </p>
          <p className="card-text">
            Faculty members regularly analyze previous year question papers, study emerging trends, track pattern changes, and update teaching strategies accordingly. They conduct mock tests simulating actual exam conditions, provide detailed performance analysis, and offer strategic guidance for improvement. Their experience coaching successful rankers gives them insights into what works, what doesn't, and how to optimize preparation for maximum results. This specialized competitive exam expertise significantly enhances student chances of cracking these challenging tests and securing admissions to top institutions.
          </p>
        </div>

        <div className="content-card">
          <div className="card-icon teal-gradient">
            <i className="fas fa-heart"></i>
          </div>
          <h3 className="card-subtitle">Mentorship Beyond Academics</h3>
          <p className="card-text">
            Our faculty members serve as caring mentors who guide students not just academically but also personally, emotionally, and professionally. They provide career counseling helping students make informed decisions about stream selection, college choices, and future paths. Teachers offer emotional support during stressful periods, motivational guidance when confidence wavers, and practical advice for managing academic pressure. They help students develop essential life skills including time management, stress handling, goal setting, and resilience building.
          </p>
          <p className="card-text">
            Faculty members build genuine relationships with students based on trust, respect, and mutual understanding. They celebrate student successes, empathize with struggles, and remain committed to each learner's overall wellbeing and long term success. This holistic mentorship approach ensures students develop not just as academically excellent individuals but as well rounded, confident, responsible, and emotionally mature young adults ready to face challenges and succeed in higher education, professional careers, and life beyond examinations.
          </p>
        </div>
      </div>

      <div className="cta-section faculty-cta">
        <h2 className="cta-title">Meet Our Exceptional Faculty</h2>
        <p className="cta-text">Experience the difference that dedicated, experienced, and caring teachers make. Visit Vidisha Junior College and interact with our faculty to understand our teaching approach.</p>
        <a href="/contact" className="cta-button faculty-button">Schedule Meeting</a>
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

      .faculty-icon {
        background: linear-gradient(135deg, #9C27B0, #7B1FA2) !important;
        box-shadow: 0 15px 40px rgba(156, 39, 176, 0.3) !important;
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
        color: #9C27B0;
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

      .content-card:last-of-type:nth-child(odd) {
        grid-column: 1 / -1;
      }

      .content-card:nth-child(6) {
        grid-column: 1 / -1;
      }

      .highlight-card {
        grid-column: 1 / -1;
        background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
      }

      .faculty-highlight {
        background: linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%) !important;
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

      .faculty-cta {
        background: linear-gradient(135deg, #2196F3, #1976D2) !important;
      }

      .cta-title {
        font-size: 36px;
        font-weight: 800;
        margin-bottom: 20px;
        color: white;
      }

      .cta-text {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 30px;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.7;
        color: white;
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

      .faculty-button {
        color: #9C27B0 !important;
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

export default FacultyContent;
