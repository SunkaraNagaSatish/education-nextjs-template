"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ScrollAnimation = ({ children, type = "fade", delay = 0, className = "" }) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const variants = {
        fade: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94] // Smooth easeOutQuad
                }
            }
        },
        slideLeft: {
            hidden: { opacity: 0, x: -30 },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.6,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94] // Smooth easeOutQuad - no spring
                }
            }
        },
        slideRight: {
            hidden: { opacity: 0, x: 30 },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.6,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94] // Smooth easeOutQuad - no spring
                }
            }
        },
        slideUp: {
            hidden: { opacity: 0, y: 30 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94] // Smooth easeOutQuad - no spring
                }
            }
        },
        scaleIn: {
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.5,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94] // Smooth easeOutQuad
                }
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[type]}
            className={className}
            style={{ willChange: 'transform, opacity' }} // GPU acceleration for 144fps
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;
