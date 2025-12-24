"use client";
import React, { useEffect, useState } from "react";

const ScrollToTopButton = ({ style }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolling = window.scrollY;
          setIsVisible(scrolling > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div
          className={`tf__scroll_btn ${style}`}
          role="button"
          onClick={scrollToTop}
        >
          {" "}
          go to top{" "}
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
