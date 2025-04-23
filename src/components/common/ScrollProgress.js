import React, { useState, useEffect } from "react";

const ScrollProgress = () => {
    const [visible, setVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrolled = (scrollTop / scrollHeight) * 100;

            setScrollProgress(scrolled);

            if (scrollTop > 800) {
                setVisible(true);
            } else if (scrollTop <= 100) {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

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

    const circumference = 307.919; // Circumference of the SVG circle
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <div
            className={`circle-container ${visible ? "active" : ""}`}
            onClick={scrollToTop}
        >
            <svg
                className="circle-progress svg-content"
                width="100%"
                height="100%"
                viewBox="-1 -1 102 102"
            >
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                        strokeDasharray: `${circumference}`,
                        strokeDashoffset: `${strokeDashoffset}`,
                        transition: "stroke-dashoffset 50ms linear",
                    }}
                />
            </svg>
        </div>
    );
};

export default ScrollProgress;
