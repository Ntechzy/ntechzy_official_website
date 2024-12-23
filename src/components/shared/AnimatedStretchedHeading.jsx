'use client'
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedStretchedHeading = ({ titles = [], topBarTitle, cls = "blue-polygon " }) => {
    console.log(titles);

    return (
        <div className={"flex flex-col items-start gap-10 md:gap-2"}>
            {/* Top bar title */}
           {topBarTitle && <p className={`${cls} flex items-center gap-2 font-[600] text-xs md:text-base ml-2 md:ml-4`}>
                {topBarTitle}
            </p>
}
            {/* Main titles */}
            <div className={"flex flex-col gap-1 items-start"}>
                {titles.map((title, titleIndex) => (
                    <div className={"text-[20px] md:text-[48px] text-center"} key={titleIndex}>
                        {title.split(" ").map((word, wordIndex) => (
                            <span key={wordIndex} className="inline-block ml-2 md:ml-4">
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.div
                                        key={letterIndex}
                                        className={"font-[600] inline-block"}
                                        initial={{ transform: "translateX(50px)", opacity: 0 }}
                                        whileInView={{
                                            transform: "translateX(0)",
                                            opacity: 1,
                                        }}
                                        transition={{
                                            initial: { transform: "translateX(50)", opacity: 0 },
                                            animate: { transform: "translateX(0)", opacity: 0, duration: 1 },
                                            delay: letterIndex * .02,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        {letter}
                                    </motion.div>
                                ))}
                                {" "}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedStretchedHeading;
