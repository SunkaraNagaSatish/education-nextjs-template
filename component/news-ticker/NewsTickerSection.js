"use client";
import React from "react";

const NewsTickerSection = () => {
    const newsItems = [
        "All India Rank 184 with an outstanding percentile of 99.86",
        "The MPC stream students at Vidisha have set new benchmarks by scoring an impressive 991 out of 1000 marks in the Intermediate examinations",
        "BiPC stream students have excelled with remarkable scores of 979 out of 1000 marks",
        "One of the most prestigious junior college in Vijayawada",
        "Transport and Hostel Facilities Available!"
    ];

    return (
        <div className="news-ticker-wrapper">
            <div className="news-ticker">
                <div className="news-ticker-content">
                    {newsItems.map((item, index) => (
                        <span key={index} className="news-ticker-item">
                            {item}
                            <span className="news-ticker-dot">•</span>
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {newsItems.map((item, index) => (
                        <span key={`duplicate-${index}`} className="news-ticker-item">
                            {item}
                            <span className="news-ticker-dot">•</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsTickerSection;
