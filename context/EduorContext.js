"use client";
import { blogData, courseDataArray, eventData, teamData } from "@/data/Data";
import { createContext, useContext, useEffect, useState, useCallback } from "react";

const EduorContext = createContext();

export const EduorProvider = ({ children }) => {
  // Sticky Header Section on Scroll
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY >= 50) {
            setIsHeaderFixed(true);
          } else {
            setIsHeaderFixed(false);
          }
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

  // Video Modal
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClose = () => setShowVideo(false);
  const handleVideoShow = () => setShowVideo(true);

  // Sidebar
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const handleMobileNavOpen = () => {
    setIsMobileNavOpen(true);
  };
  const handleMobileNavClose = () => {
    setIsMobileNavOpen(false);
  };
  //   Blog Section
  const blogPerPage = 6;

  const [currentBlogPage, setCurrentBlogPage] = useState(1);

  const startBlogIndex = (currentBlogPage - 1) * blogPerPage;
  const endBlogIndex = startBlogIndex + blogPerPage;
  const currentBlogItems = blogData.slice(startBlogIndex, endBlogIndex);

  const totalBlogPages = Math.ceil(blogData.length / blogPerPage);

  const handleBlogPageChange = useCallback((newPage) => {
    setCurrentBlogPage(newPage);
    window.scrollTo({ top: 200, behavior: 'instant' });
  }, []);

  //   Course Section
  const coursePerPage = 6;

  const [currentCoursePage, setCurrentCoursePage] = useState(1);

  const startCourseIndex = (currentCoursePage - 1) * coursePerPage;
  const endCourseIndex = startCourseIndex + coursePerPage;
  const currentCourseItems = courseDataArray.slice(
    startCourseIndex,
    endCourseIndex
  );

  const totalCoursePages = Math.ceil(courseDataArray.length / coursePerPage);

  const handleCoursePageChange = useCallback((newPage) => {
    setCurrentCoursePage(newPage);
    window.scrollTo({ top: 200, behavior: 'instant' });
  }, []);

  //   Event Section
  const eventPerPage = 6;

  const [currentEventPage, setCurrentEventPage] = useState(1);

  const startEventIndex = (currentEventPage - 1) * eventPerPage;
  const endEventIndex = startEventIndex + eventPerPage;
  const currentEventItems = eventData.slice(startEventIndex, endEventIndex);

  const totalEventPages = Math.ceil(eventData.length / eventPerPage);

  const handleEventPageChange = useCallback((newPage) => {
    setCurrentEventPage(newPage);
    window.scrollTo({ top: 200, behavior: 'instant' });
  }, []);

  //   Team Section
  const teamPerPage = 6;

  const [currentTeamPage, setCurrentTeamPage] = useState(1);

  const startTeamIndex = (currentTeamPage - 1) * teamPerPage;
  const endTeamIndex = startTeamIndex + teamPerPage;
  const currentTeamItems = teamData.slice(startTeamIndex, endTeamIndex);

  const totalTeamPages = Math.ceil(teamData.length / teamPerPage);

  const handleTeamPageChange = useCallback((newPage) => {
    setCurrentTeamPage(newPage);
    window.scrollTo({ top: 200, behavior: 'instant' });
  }, []);

  // Email validation Regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <EduorContext.Provider
      value={{
        isHeaderFixed,
        showVideo,
        handleVideoClose,
        handleVideoShow,
        currentBlogItems,
        currentBlogPage,
        handleBlogPageChange,
        totalBlogPages,
        currentCourseItems,
        currentCoursePage,
        handleCoursePageChange,
        totalCoursePages,
        currentEventItems,
        currentEventPage,
        handleEventPageChange,
        totalEventPages,
        currentTeamItems,
        currentTeamPage,
        handleTeamPageChange,
        totalTeamPages,
        isValidEmail,
        isMobileNavOpen,
        handleMobileNavOpen,
        handleMobileNavClose,
        setIsMobileNavOpen,
      }}
    >
      {children}
    </EduorContext.Provider>
  );
};

export const useEduorContext = () => {
  const context = useContext(EduorContext);
  if (!context) {
    throw new Error("useEduorContext must be used within an EduorProvider");
  }
  return context;
};
