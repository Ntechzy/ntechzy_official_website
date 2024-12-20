'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

const MergingEdges = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div
            className="flex flex-col items-center justify-center h-full gap-8 relative overflow-hidden bg-red-500"
            onMouseMove={handleMouseMove}
        >
            {/* Top Div */}
            <motion.div
                className="w-64 h-24 bg-gray-800 text-white flex items-center justify-center relative "
                onHoverStart={() => setHovering(true)}
                onHoverEnd={() => setHovering(false)}
                animate={{
                    x: hovering ? (mousePosition.x - window.innerWidth / 2) / 2 : 0,
                    y: hovering ? (mousePosition.y - window.innerHeight / 2) / 2 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
            >
                <p>Hover Me</p>
            </motion.div>

            {/* Bottom Div */}
            <motion.div
                className=" w-64 h-24 bfe bg-blue-800 text-white flex items-center justify-center absolute bottom-[15rem] left-[45rem]"
                animate={{
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
            >
                <p>Merge Me</p>
            </motion.div>
        </div>
    );
};

export default MergingEdges;
