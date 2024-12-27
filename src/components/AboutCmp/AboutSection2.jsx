'use client';
import { useState, useEffect, useRef } from 'react';
import DirectionAwareButton from '../shared/Button';

const AboutSection2 = () => {
    const [words, setWords] = useState([]);
    const [isInView, setIsInView] = useState(false); 
    const sectionRef = useRef(null); 

   
    const initialColor = "text-gray-500";
    const finalColor = "text-white";

    
    useEffect(() => {
        const text = "As pioneers at the forefront of the industry, we're crafting innovative solutions that redefine the standard. Move faster, build smarter, scale more, code less.";

     
        setWords(text.split(" "));

       
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting && entry.intersectionRatio > 0.2);
            },
            { threshold: 0.9 } 
        );

       
        const element = sectionRef.current;
        if (element) {
            observer.observe(element);
        }

      
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="md:w-[50%] p-5 m-auto md:mt-[160px] mt-7"
        >
            <div>
                <p className="text-start md:w-[636px] md:text-[40px]">
                    {words.map((word, index) => {
                       
                        const wordColor = isInView ? finalColor : initialColor;

                        return (
                            <span
                                key={index}
                                className={`transition-colors duration-300 ${wordColor}`}
                            >
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
                    border='border-[1px] mt-5 border-white font-semibold'
                />
            </div>
        </div>
    );
};

export default AboutSection2;
