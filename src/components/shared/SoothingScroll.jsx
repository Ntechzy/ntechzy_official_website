"use client";

import { useEffect } from "react";

const SoothingScroll = ({ children }) => {
    useEffect(() => {
        let scrollY = window.scrollY;
        let ticking = false;
        let isScrolling = false;
        let smoothScrollTimeout = null;

        // A function to apply the smooth scroll behavior
        const smoothScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Smooth scroll logic
                    window.scrollTo({
                        top: scrollY,
                        behavior: "smooth" // Smooth scroll on each scroll position update
                    });
                    ticking = false;
                });
                ticking = true;
            }
        };

        const handleScroll = () => {
            console.log("Scrolling...");
            scrollY = window.scrollY; // Get current scroll position
            if (!isScrolling) {
                isScrolling = true;

                // Reset the timeout when the user scrolls
                clearTimeout(smoothScrollTimeout);

                // Trigger smooth scrolling
                smoothScroll();

                // Set a timeout for continuing the scroll animation for 1 second
                smoothScrollTimeout = setTimeout(() => {
                    isScrolling = false;
                    smoothScroll(); // Continue the smooth scroll for 1 second after stop
                }, 2000); // 1-second delay after scroll stops
            }
        };

        // Listen to the scroll event
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Cleanup the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(smoothScrollTimeout); // Clear the timeout if the component is unmounted
        };
    }, []);

    return (
        <div style={{ height: "100vh" }}>
            {children}
        </div>
    );
};

export default SoothingScroll;
