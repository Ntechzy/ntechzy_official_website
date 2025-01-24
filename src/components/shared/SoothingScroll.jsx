"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const SmoothScrollFramerMotion = ({ children }) => {
    const controls = useAnimation();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        console.log('SmoothScrollFramerMotion mounted');

        const handleWheel = (event) => {
            console.log('Mouse Wheel Scrolling...');

            const newScrollY = scrollY + event.deltaY;

            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const clampedScrollY = Math.max(0, Math.min(newScrollY, maxScroll));

            setScrollY(clampedScrollY);

            controls.start({
                y: -clampedScrollY,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 30
                }
            });
        };

        window.addEventListener("wheel", handleWheel, { passive: true });

        // Cleanup the event listener
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [scrollY, controls]);

    return (
        <motion.div
            animate={controls}
            initial={{ y: 0,x:24}}
            style={{ height: "100vh"}}
        >
            {children}
        </motion.div>
    );
};

export default SmoothScrollFramerMotion;
