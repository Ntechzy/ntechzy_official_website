'use client';
import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
    useViewportScroll,
    useTransform,
    useSpring,
    motion
} from "framer-motion";

const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);
    const [pageHeight, setPageHeight] = useState(0);

    const resizePageHeight = useCallback(() => {
        if (scrollRef.current) {
            const height = scrollRef.current.scrollHeight; // Use scrollHeight
            console.log("Calculated page height:", height);
            setPageHeight(height);
        }
    }, []);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(() => resizePageHeight());
        if (scrollRef.current) {
            resizeObserver.observe(scrollRef.current);
        }
        return () => resizeObserver.disconnect();
    }, [resizePageHeight]);

    const { scrollY } = useViewportScroll();
    const transform = useTransform(
        scrollY,
        [0, pageHeight - window.innerHeight], // Adjust for viewport height
        [0, -(pageHeight - window.innerHeight)]
    );

    const physics = { damping: 15, mass: 0.5, stiffness: 80 };
    const spring = useSpring(transform, physics);

    return (
        <>
            <motion.div
                ref={scrollRef}
                style={{ y: spring }}
                className="scroll-container"
                initial={{ height: '0' }}
                animate={{ height: 'auto' }}
            >
                {children}
            </motion.div>
        </>
    );
};

export default SmoothScroll;
