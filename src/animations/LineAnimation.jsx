'use client';
import { useState, useEffect } from 'react';

const LineAnimation = ({text}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [words, setWords] = useState([]);

    // Define the colors
    const initialColor = "text-gray-500";
    const finalColor = "text-white";

    // Handle the scroll event to track scroll position
    const handleScroll = () => {
        setScrollPosition(window.scrollY); // Update the scroll position
    };

    // Effect to track scroll and update words
    useEffect(() => {
        // const text = "As pioneers at the forefront of the industry, we're crafting innovative solutions that redefine the standard. Move faster, build smarter, scale more, code less.";

        // Split the text into an array of words
        setWords(text.split(" "));
        
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Calculate the scroll progress
    const scrollProgress = scrollPosition / (document.documentElement.scrollHeight - window.innerHeight);

    return (
        <div className="flex justify-center">
            <p className="text-center font-[600] text-[20px] w-[50%] md:text-[40px]">
                {words.map((word, index) => {
                    // Calculate how far along the scroll is, and apply color change
                    const wordProgress = Math.min(Math.max(scrollProgress - index * 0.05, 0), 1);
                    const wordColor = wordProgress > 0.5 ? finalColor : initialColor; // Transition when scroll exceeds 50%

                    return (
                        <span key={index} className={`transition-colors duration-300 ${wordColor}`}>
                            {word}{" "}
                        </span>
                    );
                })}
            </p>
        </div>
    );
};

export default LineAnimation;
