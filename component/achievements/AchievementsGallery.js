'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function AchievementsGallery() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(1);

    const achievements = [
        {
            id: 1,
            type: 'image',
            image: '/images/achievements/achievement-1.jpg',
            title: 'JEE Mains 2025 Excellence',
            description: 'Our students have demonstrated exceptional performance in JEE Mains 2025, achieving All India Rank 184 with an outstanding percentile of 99.86. This remarkable achievement reflects the dedication of our students and the quality of education provided at Vidisha Junior College. Our comprehensive coaching program, experienced faculty, and rigorous practice sessions have enabled students to excel in one of the most competitive examinations in India.'
        },
        {
            id: 2,
            type: 'image',
            image: '/images/achievements/achievement-3.jpg',
            title: 'IIT, NIT, IIIT Selections 2023-2025',
            description: 'We take immense pride in our students who have secured admissions in premier engineering institutes including IITs, NITs, and IIITs across the nation. Over the past three years, our students have consistently achieved top ranks and secured seats in their desired branches. This success is a testament to our focused approach towards competitive exam preparation and the unwavering commitment of our faculty members.'
        },
        {
            id: 3,
            type: 'image',
            image: '/images/achievements/achievement-4.jpg',
            title: 'Congratulations Madhu Sudhan Reddy',
            description: 'Madhu Sudhan Reddy has brought laurels to our institution by securing the 2nd position in the state for Intermediate Public Examinations while simultaneously excelling in JEE. This dual achievement showcases the perfect balance between board exam preparation and competitive exam coaching that we maintain at Vidisha. His success story inspires countless students to pursue excellence in both academic streams.'
        },
        {
            id: 4,
            type: 'image',
            image: '/images/achievements/achievement-7.jpg',
            title: 'World Class Facilities',
            description: 'Vidisha Junior College is equipped with state of the art infrastructure including digitalized smart classrooms, advanced laboratory facilities, and a team of highly qualified educators. Our modern teaching methodologies incorporate the latest technology to ensure students receive the best possible learning experience. The combination of traditional teaching values and contemporary educational tools creates an ideal environment for academic excellence.'
        },
        {
            id: 5,
            type: 'image',
            image: '/images/achievements/achievement-8.jpg',
            title: 'Outstanding Academic Performance',
            description: 'Students across both MPC and BiPC streams have consistently delivered exceptional results in their Intermediate examinations. Our comprehensive curriculum, regular assessments, and personalized attention to each student ensure that they achieve their full potential. The holistic approach to education at Vidisha encompasses not just academic excellence but also the overall development of students.'
        },
        {
            id: 6,
            type: 'image',
            image: '/images/achievements/achievement-9.jpg',
            title: 'Excellence in Competitive Exams',
            description: 'Our students have proven their mettle in highly competitive examinations like JEE and NEET, securing top ranks year after year. The specialized coaching programs, regular mock tests, and doubt clearing sessions conducted by our expert faculty have been instrumental in achieving these outstanding results. We provide comprehensive study material and maintain a rigorous practice schedule to ensure students are well prepared for these challenging examinations.'
        },
        {
            id: 7,
            type: 'image',
            image: '/images/achievements/achievement-12.jpg',
            title: 'Intermediate MPC Toppers',
            description: 'The MPC stream students at Vidisha have set new benchmarks by scoring an impressive 991 out of 1000 marks in the Intermediate examinations. This extraordinary achievement is the result of dedicated teaching, comprehensive coverage of the syllabus, and continuous evaluation through regular tests. Our faculty members work tirelessly to ensure that students grasp every concept thoroughly and develop strong problem solving skills.'
        },
        {
            id: 8,
            type: 'image',
            image: '/images/achievements/achievement-13.jpg',
            title: 'Intermediate BiPC Toppers',
            description: 'BiPC stream students have excelled with remarkable scores of 979 out of 1000 marks, demonstrating their mastery over Biology, Physics, and Chemistry. Our specialized teaching approach for medical aspirants combines theoretical knowledge with practical applications, ensuring students are well prepared for both board examinations and competitive tests like NEET. The success of our BiPC students reflects the quality of education and guidance provided at Vidisha.'
        },
        {
            id: 9,
            type: 'image',
            image: '/images/achievements/achievement-14.jpg',
            title: 'MPC Stream Excellence',
            description: 'The MPC stream at Vidisha Junior College has maintained a consistent track record of high performance across all batches. Our students not only excel in their board examinations but also perform exceptionally well in competitive exams. The rigorous training in Mathematics, Physics, and Chemistry, combined with regular practice sessions and personalized mentoring, ensures that every student achieves their academic goals and secures admission in top engineering colleges.'
        },
        {
            id: 10,
            type: 'image',
            image: '/images/achievements/achievement-15.jpg',
            title: 'BiPC Stream Excellence',
            description: 'Our BiPC stream has produced numerous medical aspirants who have successfully cleared NEET and secured admissions in prestigious medical colleges. The comprehensive curriculum, experienced biology faculty, and well equipped laboratories provide students with an excellent foundation in medical sciences. Regular assessments and personalized attention ensure that each student receives the support they need to excel in their chosen field.'
        },
        {
            id: 11,
            type: 'image',
            image: '/images/achievements/achievement-16.jpg',
            title: 'Advanced Laboratory Facilities',
            description: 'Vidisha Junior College boasts state of the art science laboratories equipped with modern apparatus and safety equipment. These facilities enable students to perform experiments and gain practical knowledge that complements their theoretical learning. Our laboratory sessions are carefully designed to enhance understanding of scientific concepts and develop critical thinking skills. Students receive hands on training under the supervision of experienced lab instructors.'
        },
        {
            id: 12,
            type: 'image',
            image: '/images/achievements/achievement-17.jpg',
            title: 'Modern Classroom Environment',
            description: 'Our spacious and well equipped classrooms provide an ideal learning environment for students. Each classroom is designed to facilitate interactive learning with comfortable seating arrangements, proper lighting, and ventilation. The integration of smart boards and digital learning tools makes classes more engaging and effective. Our classrooms are maintained to the highest standards to ensure students can focus on their studies without any distractions.'
        },
        {
            id: 14,
            type: 'image',
            image: '/images/achievements/achievement-20.jpg',
            title: 'Personalized Mentoring Sessions',
            description: 'At Vidisha, we believe in providing individual attention to each student through regular one on one mentoring sessions. Our faculty members take time to understand the strengths and weaknesses of every student and provide customized guidance accordingly. These personalized sessions help students overcome their challenges, build confidence, and develop effective study strategies. The mentor student relationship extends beyond academics to include career counseling and emotional support.'
        },
        {
            id: 15,
            type: 'image',
            image: '/images/achievements/achievement-22.jpg',
            title: 'IIT Selections Showcase',
            description: 'We proudly celebrate our students who have secured admissions in various IITs and NITs across India. Their success stories serve as inspiration for current students and demonstrate the effectiveness of our teaching methodology. Each selection is a result of years of hard work, dedication, and the comprehensive support system provided by Vidisha. We maintain a legacy of producing successful engineers who go on to make significant contributions in their respective fields.'
        },
        {
            id: 16,
            type: 'image',
            image: '/images/achievements/achievement-23.jpg',
            title: 'Interactive Teaching Methodology',
            description: 'Our expert faculty members employ innovative and interactive teaching methods to make learning engaging and effective. Classes are designed to encourage student participation, critical thinking, and collaborative learning. The use of multimedia presentations, real world examples, and interactive problem solving sessions ensures that students develop a deep understanding of concepts. Our teaching approach focuses on building strong fundamentals while also preparing students for competitive examinations.'
        },
        {
            id: 17,
            type: 'video',
            video: '/videos/achievements/video-1.mp4',
            title: 'Campus Tour Video',
            description: 'Take a virtual tour of Vidisha Junior College and explore our world class infrastructure, modern facilities, and vibrant campus life. This comprehensive video showcases our digitalized classrooms, advanced laboratories, library, sports facilities, and other amenities that make Vidisha an ideal place for pursuing intermediate education. Witness the environment where students learn, grow, and prepare for their future careers.'
        },
        {
            id: 18,
            type: 'video',
            video: '/videos/achievements/video-2.mp4',
            title: 'About Vidisha Junior College',
            description: 'Discover the vision, mission, and values that drive Vidisha Junior College to excellence. This video provides insights into our educational philosophy, teaching methodologies, and the comprehensive support system we offer to students. Learn about our experienced faculty, innovative teaching techniques, and the success stories of our alumni who have achieved remarkable feats in their academic and professional careers.'
        }
    ];

    const handleImageClick = (achievement) => {
        setSelectedItem(achievement);
        setZoomLevel(1);
    };

    const handleZoomIn = () => {
        setZoomLevel(prev => Math.min(prev + 0.5, 3));
    };

    const handleZoomOut = () => {
        setZoomLevel(prev => Math.max(prev - 0.5, 1));
    };

    const handleModalClose = () => {
        setSelectedItem(null);
        setZoomLevel(1);
    };

    return (
        <>
            <section className="achievements-gallery-section">
                {/* Decorative Shapes Set 1 - Top */}
                <div className="decorative-shape diamond-dots" style={{ top: '5%', left: '5%' }}>
                    <img src="/images/dot_shapes.png" alt="dots" className="img-fluid" />
                </div>
                <div className="decorative-shape curly-arrow" style={{ top: '8%', right: '5%' }}>
                    <img src="/images/arrow_shapes.png" alt="arrow" className="img-fluid" />
                </div>

                {/* Decorative Shapes Set 2 - Middle Section */}
                <div className="decorative-shape open-book" style={{ top: '35%', left: '3%' }}>
                    <img src="/images/book_shapes.png" alt="book" className="img-fluid" />
                </div>
                <div className="decorative-shape red-pen" style={{ top: '40%', right: '4%' }}>
                    <img src="/images/pen_shapes.png" alt="pen" className="img-fluid" />
                </div>
                <div className="decorative-shape diamond-dots" style={{ top: '50%', right: '6%' }}>
                    <img src="/images/dot_shapes.png" alt="dots" className="img-fluid" />
                </div>

                {/* Decorative Shapes Set 3 - Lower Section */}
                <div className="decorative-shape curly-arrow" style={{ top: '65%', right: '4%' }}>
                    <img src="/images/arrow_shapes.png" alt="arrow" className="img-fluid" />
                </div>
                <div className="decorative-shape open-book" style={{ top: '75%', right: '3%' }}>
                    <img src="/images/book_shapes.png" alt="book" className="img-fluid" />
                </div>

                {/* Decorative Shapes Set 4 - Bottom */}
                <div className="decorative-shape red-pen" style={{ bottom: '10%', left: '5%' }}>
                    <img src="/images/pen_shapes.png" alt="pen" className="img-fluid" />
                </div>
                <div className="decorative-shape diamond-dots" style={{ bottom: '15%', right: '5%' }}>
                    <img src="/images/dot_shapes.png" alt="dots" className="img-fluid" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tf__heading_area mb_15">
                                <h2>Achievements Gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="achievements-list">
                        {achievements.map((achievement, index) => (
                            <div
                                key={achievement.id}
                                className={`achievement-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
                            >
                                <div className="achievement-image-container" onClick={() => handleImageClick(achievement)}>
                                    {achievement.type === 'image' ? (
                                        <Image
                                            src={achievement.image}
                                            alt={achievement.title}
                                            width={600}
                                            height={400}
                                            className="achievement-img"
                                        />
                                    ) : (
                                        <div className="achievement-video-wrapper">
                                            <video
                                                src={achievement.video}
                                                className="achievement-img"
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <div className="video-play-overlay">
                                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                                                    <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.95)" />
                                                    <path d="M32 26L56 40L32 54V26Z" fill="#007bff" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="achievement-description">
                                    <h3>{achievement.title}</h3>
                                    <p>{achievement.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal for full image/video view with zoom */}
            {selectedItem && (
                <div className="achievement-modal" onClick={handleModalClose}>
                    <div className="modal-backdrop"></div>
                    <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleModalClose}>
                            &times;
                        </button>
                        {selectedItem.type === 'image' && (
                            <div className="zoom-controls">
                                <button onClick={handleZoomOut} disabled={zoomLevel <= 1}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                        <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </button>
                                <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
                                <button onClick={handleZoomIn} disabled={zoomLevel >= 3}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                        <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" />
                                        <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </button>
                            </div>
                        )}
                        <div className="modal-media-container">
                            {selectedItem.type === 'image' ? (
                                <div className="zoomable-image-wrapper">
                                    <Image
                                        src={selectedItem.image}
                                        alt={selectedItem.title}
                                        width={1600}
                                        height={1200}
                                        className="modal-image"
                                        style={{ transform: `scale(${zoomLevel})` }}
                                    />
                                </div>
                            ) : (
                                <video
                                    src={selectedItem.video}
                                    controls
                                    autoPlay
                                    className="modal-video"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
