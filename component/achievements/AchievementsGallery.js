'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function AchievementsGallery() {
    const [selectedItem, setSelectedItem] = useState(null);

    const achievements = [
        {
            id: 1,
            type: 'image',
            image: '/images/achievements/achievement-1.jpg',
            title: 'JEE Mains 2025 Excellence',
            description: 'Outstanding results with All India Rank 184 and 99.86%'
        },
        {
            id: 2,
            type: 'image',
            image: '/images/achievements/achievement-2.jpg',
            title: 'Vidisha Junior College 2026',
            description: 'Success Starts Here - Unacademy Centre'
        },
        {
            id: 3,
            type: 'image',
            image: '/images/achievements/achievement-3.jpg',
            title: 'IIT, NIT, IIIT Selections 2023-2025',
            description: 'Proud achievers in top engineering institutes'
        },
        {
            id: 4,
            type: 'image',
            image: '/images/achievements/achievement-4.jpg',
            title: 'Congratulations Madhu Sudhan Reddy',
            description: 'State 2nd Top Marks in IPE and JEE Excellence'
        },
        {
            id: 5,
            type: 'image',
            image: '/images/achievements/achievement-5.jpg',
            title: 'Chairman Message - Kommineni Venkatesh',
            description: 'Vision: Success Starts Here at Vidisha Junior College'
        },
        {
            id: 6,
            type: 'image',
            image: '/images/achievements/achievement-6.jpg',
            title: 'Vidisha Junior College 2026',
            description: 'Academic Calendar and Important Dates'
        },
        {
            id: 7,
            type: 'image',
            image: '/images/achievements/achievement-7.jpg',
            title: 'World Class Facilities',
            description: 'Top Educators, Digitalized Classrooms, and More'
        },
        {
            id: 8,
            type: 'image',
            image: '/images/achievements/achievement-8.jpg',
            title: 'Outstanding Academic Performance',
            description: 'Exceptional Results in MPC and BiPC Streams'
        },
        {
            id: 9,
            type: 'image',
            image: '/images/achievements/achievement-9.jpg',
            title: 'Excellence in Competitive Exams',
            description: 'Top Performers in JEE and NEET Examinations'
        },
        {
            id: 10,
            type: 'image',
            image: '/images/achievements/achievement-10.jpg',
            title: 'Our Campus Locations',
            description: 'Multiple Branches Across the Region'
        },
        {
            id: 11,
            type: 'image',
            image: '/images/achievements/achievement-11.jpg',
            title: 'Unacademy Centre Campus',
            description: 'State of the Art Infrastructure'
        },
        {
            id: 12,
            type: 'image',
            image: '/images/achievements/achievement-12.jpg',
            title: 'Intermediate MPC Toppers',
            description: 'Outstanding Performance with 991/1000 Marks'
        },
        {
            id: 13,
            type: 'image',
            image: '/images/achievements/achievement-13.jpg',
            title: 'Intermediate BiPC Toppers',
            description: 'Exceptional Results with 979/1000 Marks'
        },
        {
            id: 14,
            type: 'image',
            image: '/images/achievements/achievement-14.jpg',
            title: 'MPC Stream Excellence',
            description: 'Consistent High Performance Across All Students'
        },
        {
            id: 15,
            type: 'image',
            image: '/images/achievements/achievement-15.jpg',
            title: 'BiPC Stream Excellence',
            description: 'Remarkable Academic Achievements'
        },
        {
            id: 16,
            type: 'image',
            image: '/images/achievements/achievement-16.jpg',
            title: 'Advanced Laboratory Facilities',
            description: 'State of the Art Science Labs for Practical Learning'
        },
        {
            id: 17,
            type: 'image',
            image: '/images/achievements/achievement-17.jpg',
            title: 'Modern Classroom Environment',
            description: 'Spacious and Well Equipped Learning Spaces'
        },
        {
            id: 18,
            type: 'image',
            image: '/images/achievements/achievement-18.jpg',
            title: 'Hostel Accommodation',
            description: 'Comfortable and Safe Residential Facilities'
        },
        {
            id: 19,
            type: 'image',
            image: '/images/achievements/achievement-19.jpg',
            title: 'Unacademy Centre Building',
            description: 'Premium Infrastructure for IIT JEE and NEET Preparation'
        },
        {
            id: 20,
            type: 'image',
            image: '/images/achievements/achievement-20.jpg',
            title: 'Personalized Mentoring Sessions',
            description: 'One on One Guidance for Student Success'
        },
        {
            id: 21,
            type: 'image',
            image: '/images/achievements/achievement-21.jpg',
            title: 'Vidisha Educational Society Campus',
            description: 'Unacademy Centre in Vijayawada'
        },
        {
            id: 22,
            type: 'image',
            image: '/images/achievements/achievement-22.jpg',
            title: 'IIT Selections Showcase',
            description: 'Proud Students Selected in Top IITs and NITs'
        },
        {
            id: 23,
            type: 'image',
            image: '/images/achievements/achievement-23.jpg',
            title: 'Interactive Teaching Methodology',
            description: 'Engaging Classroom Sessions with Expert Faculty'
        },
       {
    id: 24,
    type: 'video',
    video: '/videos/achievements/video-1.mp4',
    title: 'Campus Tour Video',
    description: 'About Vidisha'
},
{
  id: 25,
    type: 'video',
    video: '/videos/achievements/video-2.mp4',
    title: 'Campus Tour Video',
    description: 'About Vidisha'
}
    ];

    return (
        <>
            <section className="achievements-gallery-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tf__heading_area mb_15">
                                <h2>Achievements Gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="achievements-gallery-grid">
                        {achievements.map((achievement) => (
                            <div
                                key={achievement.id}
                                className="achievement-card"
                                onClick={() => setSelectedItem(achievement)}
                            >
                                <div className="achievement-image-wrapper">
                                    {achievement.type === 'image' ? (
                                        <Image
                                            src={achievement.image}
                                            alt={achievement.title}
                                            width={600}
                                            height={800}
                                            className="achievement-image"
                                        />
                                    ) : (
                                        <div className="achievement-video-thumbnail">
                                            {achievement.thumbnail ? (
                                                <Image
                                                    src={achievement.thumbnail}
                                                    alt={achievement.title}
                                                    width={600}
                                                    height={800}
                                                    className="achievement-image"
                                                />
                                            ) : (
                                                <video
                                                    src={achievement.video}
                                                    className="achievement-image"
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            )}
                                            <div className="video-play-icon">
                                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                                    <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.9)" />
                                                    <path d="M24 20L42 30L24 40V20Z" fill="#007bff" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                    <div className="achievement-overlay">
                                        <div className="achievement-info">
                                            <h3>{achievement.title}</h3>
                                            <p>{achievement.description}</p>
                                            <span className="view-btn">
                                                {achievement.type === 'video' ? 'Watch Video' : 'View Details'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal for full image/video view */}
            {selectedItem && (
                <div className="achievement-modal" onClick={() => setSelectedItem(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedItem(null)}>
                            &times;
                        </button>
                        {selectedItem.type === 'image' ? (
                            <Image
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                width={1200}
                                height={1600}
                                className="modal-image"
                            />
                        ) : (
                            <video
                                src={selectedItem.video}
                                controls
                                autoPlay
                                className="modal-video"
                                style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
                            >
                                Your browser does not support the video tag.
                            </video>
                        )}
                        <div className="modal-info">
                            <h3>{selectedItem.title}</h3>
                            <p>{selectedItem.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
