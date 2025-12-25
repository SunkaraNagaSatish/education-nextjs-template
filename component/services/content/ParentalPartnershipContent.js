import React from "react";

const ParentalPartnershipContent = () => (
  <>
    <div className="container content-wrapper">
      <div className="hero-section">
        <div className="hero-icon parental-icon">
          <i className="fas fa-handshake"></i>
        </div>
        <h1 className="main-title">Parental Partnership</h1>
        <p className="main-subtitle">Collaborative Approach to Student Success</p>
        <p className="hero-desc">Working Together for Your Child's Future</p>
      </div>

      <div className="content-grid">
        <div className="content-card highlight-card parental-highlight">
          <h2 className="card-title">Building Trust Through Transparency</h2>
          <p className="card-text">
            We deeply honor and value the trust that parents place in us when they entrust their children's education, future, and wellbeing to Vidisha Junior College. Transparent, open, consistent, and meaningful communication is a fundamental cornerstone of our educational philosophy and operational approach. We recognize that parents are not just stakeholders but active partners in the educational journey, and their involvement, support, and collaboration significantly enhance student success, motivation, and overall development.
          </p>
          <p className="card-text">
            Our parental partnership model is built on mutual respect, shared goals, regular communication, and collaborative problem solving. We believe that when students, teachers, and parents work together as a unified team with open dialogue, shared expectations, and coordinated efforts, success becomes not just possible but inevitable. This three way partnership creates a supportive ecosystem where students receive consistent messages, coordinated guidance, and comprehensive support from all directions, maximizing their potential for academic achievement and personal growth.
          </p>
        </div>

        <div className="content-card">
          <div className="card-icon blue-gradient">
            <i className="fas fa-file-alt"></i>
          </div>
          <h3 className="card-subtitle">Regular Progress Reports and Performance Updates</h3>
          <p className="card-text">
            Detailed comprehensive reports on academic performance, test scores, subject wise strengths, specific areas for improvement, attendance records, and overall development are shared regularly with parents through multiple channels. Monthly progress reports provide quantitative data including marks, ranks, percentages, and comparative analysis along with qualitative feedback on effort levels, participation, behavior, and attitude. These reports give parents clear visibility into their child's academic standing, progress trends, and performance patterns enabling informed discussions and timely interventions.
          </p>
          <p className="card-text">
            Beyond formal reports, parents receive immediate updates about significant events including exceptional performances worth celebrating, concerning patterns requiring attention, behavioral issues needing discussion, and opportunities for additional support. We use digital platforms, phone calls, messages, and emails to ensure parents stay continuously informed rather than discovering issues only during scheduled meetings. This proactive communication approach prevents small problems from becoming major concerns and allows collaborative early intervention when students face challenges or need extra help.
          </p>
        </div>

        <div className="content-card">
          <div className="card-icon green-gradient">
            <i className="fas fa-door-open"></i>
          </div>
          <h3 className="card-subtitle">Open Access to Teachers for Discussions</h3>
          <p className="card-text">
            Parents have direct convenient access to teachers and faculty members for one on one discussions about their child's progress, specific concerns, academic challenges, or any matters requiring clarification or guidance. Teachers maintain open door policies welcoming parent interactions, questions, suggestions, and collaborative discussions. Parents can schedule meetings, make phone calls, send emails, or visit campus to speak directly with subject teachers, class coordinators, or academic counselors who know their child well and can provide specific detailed insights.
          </p>
          <p className="card-text">
            These personal interactions allow parents to understand teaching approaches, clarify doubts about curriculum or assessments, discuss their child's unique learning needs, share relevant background information, and collaborate on strategies for improvement. Teachers appreciate parental input, value their perspectives, and work together to develop customized approaches that address individual student needs. This open communication builds trust, ensures alignment between home and school expectations, and creates a supportive network around each student enhancing their chances of success through coordinated efforts.
          </p>
        </div>

        <div className="content-card">
          <div className="card-icon purple-gradient">
            <i className="fas fa-calendar-check"></i>
          </div>
          <h3 className="card-subtitle">Monthly Parent Teacher Meetings</h3>
          <p className="card-text">
            Structured monthly meetings provide dedicated time and space where parents and teachers come together to discuss student progress comprehensively, address emerging challenges proactively, celebrate achievements meaningfully, and plan strategies for continued improvement collaboratively. These meetings go beyond simple report card discussions to include detailed conversations about learning patterns, study habits, social interactions, emotional wellbeing, and future planning. Teachers share observations from classroom interactions, test performances, and daily activities that parents might not see at home.
          </p>
          <p className="card-text">
            Parents contribute valuable insights about their child's behavior at home, study routines, stress levels, interests, and concerns that help teachers understand the complete picture and adjust their approaches accordingly. Together, parents and teachers identify specific goals, create action plans with clear responsibilities, set realistic timelines, and agree on monitoring mechanisms. Follow up in subsequent meetings tracks progress on agreed plans, adjusts strategies based on results, and maintains continuity in support efforts ensuring sustained improvement rather than temporary fixes.
          </p>
        </div>

        <div className="content-card">
          <div className="card-icon orange-gradient">
            <i className="fas fa-bell"></i>
          </div>
          <h3 className="card-subtitle">Attendance and Academic Monitoring Alerts</h3>
          <p className="card-text">
            Timely notifications about attendance patterns, assignment submissions, test performances, behavioral observations, and any concerns requiring parental attention or intervention are sent promptly through automated systems and personal communications. Parents receive immediate alerts if their child is absent without prior information, misses multiple classes, shows declining attendance patterns, or exhibits irregular presence. Similarly, notifications about missed assignments, incomplete homework, poor test scores, or sudden performance drops trigger quick parental awareness enabling timely discussions and corrective actions.
          </p>
          <p className="card-text">
            This monitoring system serves as an early warning mechanism preventing small issues from escalating into serious problems. Parents can address attendance irregularities immediately, understand reasons for missed work, provide necessary support for academic struggles, and intervene in behavioral concerns before they become habitual patterns. The system also sends positive alerts celebrating improvements, consistent attendance, excellent performances, and commendable efforts ensuring parents receive balanced information and can reinforce positive behaviors through recognition and encouragement at home.
          </p>
        </div>

        <div className="content-card">
          <div className="card-icon teal-gradient">
            <i className="fas fa-users"></i>
          </div>
          <h3 className="card-subtitle">Direct Involvement in Educational Journey</h3>
          <p className="card-text">
            Parents are considered active partners and valued participants in their child's education with opportunities to contribute meaningfully, participate actively, and engage constructively in various aspects of college life and student development. We invite parents to campus events, orientation programs, workshops on parenting teenagers, seminars on competitive exam preparation, and celebrations of student achievements. These interactions help parents understand our educational approach, meet other parents facing similar challenges, learn effective support strategies, and feel connected to the college community.
          </p>
          <p className="card-text">
            We encourage parents to share their expertise, professional experiences, and life lessons with students through guest lectures, career guidance sessions, and mentorship programs. Parent feedback on policies, programs, and services is actively sought and seriously considered in decision making processes. This inclusive approach makes parents feel valued, respected, and integral to the educational ecosystem rather than external observers. When parents are genuinely involved and invested, students receive consistent support, clear expectations, and coordinated guidance from all sides creating optimal conditions for success.
          </p>
        </div>
      </div>

      <div className="cta-section parental-cta">
        <h2 className="cta-title">Partner With Us for Your Child's Success</h2>
        <p className="cta-text">Join the Vidisha Junior College family where parents, teachers, and students work together as a team. Experience the difference that genuine partnership makes in educational outcomes.</p>
        <a href="/contact" className="cta-button parental-button">Connect With Us</a>
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

      .parental-icon {
        background: linear-gradient(135deg, #00BCD4, #0097A7) !important;
        box-shadow: 0 15px 40px rgba(0, 188, 212, 0.3) !important;
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
        color: #00BCD4;
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

      .parental-highlight {
        background: linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%) !important;
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

      .parental-cta {
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

      .parental-button {
        color: #00BCD4 !important;
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

export default ParentalPartnershipContent;
