'use client';
import { useState, useEffect } from 'react';
import DirectionAwareButton from './shared/Button';

const AboutSection2 = () => {
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
        const text = "As pioneers at the forefront of the industry, we're crafting innovative solutions that redefine the standard. Move faster, build smarter, scale more, code less.";

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
        <div className='w-[50%] m-auto mt-[160px] '>
            <div className="">
                <p className="text-start text-[20px] w-[636px] md:text-[40px] ">
                    {words.map((word, index) => {
                        // Adjust the trigger for color change (change 0.005 to a smaller value to trigger it earlier)
                        const wordProgress = Math.min(Math.max(scrollProgress - index * 0.005, 0), 1); // Earlier trigger here
                        const wordColor = wordProgress > 0.5 ? finalColor : initialColor; // Transition when scroll exceeds 50%

                        return (
                            <span key={index} className={`transition-colors duration-300 ${wordColor}`}>
                                {word}{" "}
                            </span>
                        );
                    })}
                </p>
            </div>
            <div>
                <DirectionAwareButton 
                    title={'Discover more'} 
                    color={"bg-transparent"} 
                    hov_color={"bg-secondary"} 
                    border='border-[1px] mt-5  border-white font-semibold' 
                />
            </div>
        </div>
    );
};

export default AboutSection2;
