"use client"

import { useEffect } from "react";

const SoothingScroll = ({children}) => {

    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault(); // Prevent native scroll behavior

            const direction = event.deltaY; // Detect scrolling direction
            const start = window.scrollY; // Get current scroll position
            const duration = 50; // Scroll duration in ms
            const startTime = performance.now();

            const animateScroll = (currentTime) => {
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);

                // Ease-in-out formula for smooth scroll animation
                const easeInOutQuad = (t) => {
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                };

                const distance = direction * easeInOutQuad(progress); // Calculate scroll distance based on the direction
                window.scrollTo(0, start + distance);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animateScroll); // Continue animation until the duration is complete
                }
            };

            requestAnimationFrame(animateScroll); // Start smooth scroll animation
        };

        // Attach wheel event listener
        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            // Cleanup on unmount
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};

export default SoothingScroll;
