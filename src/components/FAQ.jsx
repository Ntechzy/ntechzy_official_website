'use client'
import AnimatedHeading from "@/components/shared/AnimatedHeading";
import { FaMinus } from "react-icons/fa6";
import { useAnimate } from "motion/react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { faq } from "@/data/faqs";

const FAQCard = ({ item }) => {
    const [scope, animate] = useAnimate();
    const [showDropdown, setShowDropdown] = useState(false);
    const getCurrentRotation = () => {
        const currentRotation = scope.current?.style.transform
            ? parseFloat(scope.current.style.transform.replace('rotate(', '').replace('deg)', ''))
            : 0;
        console.log(currentRotation);
        return currentRotation;
    }
    const handleClick = () => {

        const newRotation = getCurrentRotation() === 90 ? 0 : 90;
        animate(scope.current, { rotate: newRotation, duration: .2, ease: "easeInOut" });

        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        animate(scope.current, { rotate: 90, duration: .2, ease: "easeInOut" });
    }, [])

    return (
        <motion.div
            className={` relative  rounded-[24px] inline-flex bg-clip-content ${showDropdown ? "bg-[#141414]" : "bg-[#1F2025]"} cursor-pointer flex-col transition-all duration-1000 w-full md:w-[90%] mx-auto p-1`}
            whileInView={{
                opacity: 1,
                transition: 'all 1s',
                transform: 'translateY(-4rem)',
            }}
            onClick={handleClick}>
            {/*background image*/}
            <div
                className={" rounded-[inherit] absolute inset-0 before:absolute before:rounded-[inherit] before:bg-[#1F2025] before:inset-0 before:bg-clip-content before:border before:border-transparent z-[-1]"}
                style={{ backgroundImage: "linear-gradient(357deg, rgba( 117, 117, 117, 0.40) 0%, rgba( 255, 255, 255, 0.00) 70%)" }}></div>
            {/*content*/}
            <div className={`flex flex-col px-[15px] py-[15px] md:py-[40px] md:px-[24px]  rounded-[24px] bg-inherit`}>

                <div className={"flex justify-between items-center"}>
                    <div className={"flex gap-2 md:gap-10 text-[16px] md:text-[24px]"}>
                        <p className={"text-secondary"}>{item.id}</p>
                        <p className={"font-semibold"}>{item.question}</p>
                    </div>
                    <div>
                        <div className={"w-fit relative text-[#9DA5B4]"}>
                            <FaMinus className={"size-3 md:size-6 shrink-0"} />
                            <FaMinus className={`size-3 md:size-6 absolute top-0  transition-all duration-300  shrink-0`} ref={scope} />
                        </div>
                    </div>
                </div>
                {/*description*/}
                <div
                    className={`overflow-hidden transition-all duration-1000 ease-in-out ${showDropdown ? " max-h-[1000px]" : "max-h-0"}`}
                    style={{ transitionProperty: 'max-height' }}
                >
                    <p className="pl-5 md:pl-[60px] pt-5 text-[14px] font-[400] leading-[1.42] tracking-[-0.14px] md:text-base">
                    {item.answer}
                    </p>
                </div>
            </div>
        </motion.div>

    )
}

const FAQ = () => {


    return (
        <div className={" mt-[160px] flex flex-col items-center gap-20"}>
            {/*Heading*/}
            <AnimatedHeading topBarTitle={"FAQs"} title={"Count on our seasoned IT professionals"}
                subTitle={"to provide insightful answers"} polyType={"blue-polygon"} />
            {/*accordian container*/}
            <div className={"flex flex-col gap-10 p-2 md:p-10"}>
                {
                    faq.map((item, index) => (
                        <FAQCard key={index} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default FAQ;