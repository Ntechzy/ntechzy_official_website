'use client';
import { useState, useEffect, useRef } from 'react';
import DirectionAwareButton from '../shared/Button';

const AboutSection2 = () => {
    const [paragraphs, setParagraphs] = useState([]);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    const initialColor = "text-gray-500";
    const finalColor = "text-white";

    useEffect(() => {
        const text = [
            "At Ntechzy, we are on a mission to revolutionize education and digital innovation, offering solutions that empower individuals and businesses alike. Our journey began with a vision to bridge gaps, foster growth, and enable access to transformative opportunities. With a strong foothold in education, technology, and marketing, we aim to create impactful changes that resonate across industries.",
            "Our EdTech ventures focus on empowering students, particularly from middle-class backgrounds, by providing them with quality education and resources to turn their dreams into reality. Simultaneously, our digital marketing and technology services cater to businesses seeking innovative solutions in branding, social media, web development, and new business growth.",
            "With a passion for innovation and excellence, Ntechzy is more than just a company—it's a platform for transformation, empowering students, entrepreneurs, and professionals to achieve their goals and thrive in a competitive world."
        ];

        setParagraphs(text);

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
        <div ref={sectionRef} className="md:w-[80%] m-auto md:mt-[160px]">
            
            <div>
                {paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="md:text-[20px] mb-4">
                        {paragraph.split(",").map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className={`transition-colors duration-300 ${
                                    isInView ? finalColor : initialColor
                                }`}
                            >
                                {word}{" "}
                            </span>
                        ))}
                    </p>
                ))}
            </div>
            <div>
                <DirectionAwareButton
                    title={'Discover more'}
                    color={"bg-transparent"}
                    hov_color={"bg-secondary"}
                    border="border-[1px] mt-5 border-white font-semibold"
                />
            </div>
        </div>
    );
};

export default AboutSection2;
