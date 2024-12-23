"use client"
import AnimatedHeading from "@/components/shared/AnimatedHeading";
import AnimatedStretchedHeading from "@/components/shared/AnimatedStretchedHeading";
import { motion } from "motion/react"
import { useState } from 'react'

const TestimonialsCard = ({ direction = "top", isCardHovered }) => {
    console.log(direction, "is card hovered", isCardHovered)
    const animationVariants = {
        initial: {
            y: direction === "top" ? "0%" : "-100%",
        },
        hovered: {
            y: 0,
        },
        // Animation in motion (not hovered)
        animate: {
            y: direction === "top" ? ["0%", "-100%"] : ["-100%", "0%"],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
            },
        },
    };
    return (
        <motion.div
            className={"md:w-[400px] w-full h-auto md:h-[400px] md:gap-0 gap-10 shrink-0 max-h-[450px] bg-[#D9DCE3] rounded-[20px] p-5 md:py-[32px] md:px-[40px] flex flex-col justify-between  hover:bg-secondary hover:text-white"}
            variants={animationVariants}
            initial="initial"
            animate={isCardHovered ? "hovered" : "animate"}
        >
            <div>
                <p>Tecko's remarkable of their efforts have truly distinguished us from the competition. We wholeheartedly give them a perfect 10/10 for their work."
                </p>
            </div>
            {/*profile*/}
            <div className={"flex justify-between"}>
                <div>
                    <p className="text-[12px] md:text-[14px] font-bold text-gray-500">CEO & Founder , Layers</p>
                    <p className={"uppercase"}>DUY TRAN</p>
                </div>
                <div className={"w-10 h-10 bg-gray-200 rounded-full"}>

                </div>
            </div>
        </motion.div>
    )
}


const Testimonials = () => {
    const [isLeftCardHovered, setIsLeftCardHovered] = useState(false);
    const [isRightCardHovered, setIsRightCardHovered] = useState(false);
    return (
        <div>
            <div className={"bg-white rounded-lg text-black gap-8 md:gap-0 h-[637px] mt-[160px] flex flex-col md:flex-row overflow-hidden"}>
                {/*left*/}
                <div className={"flex flex-col h-full justify-between flex-1 p-4 gap-8 md:gap-0 md:p-10"}>
                    <AnimatedStretchedHeading topBarTitle={"Testimonial"} titles={["Let actions", "talking instead"]} />
                    <div className={"md:p-5 p-2 border border-[#BBC1CE] rounded-2xl flex gap-2 w-full md:w-fit"}>
                        {/*image*/}
                        <div className={"w-10 h-10 rounded-full bg-gray-200"}>

                        </div>
                        {/*rating*/}
                        <div>
                            <div className={"flex md:gap-2"}>
                                <p className={"font-bold"}>4.9/5</p>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <p className={"text-gray-500"}>Based on 24 reviews</p>
                        </div>
                    </div>
                </div>
                {/*right*/}
                <div className={"flex-1 flex flex-col md:flex-row gap-4 px-3 md:px-10"}>
                    <motion.div
                        className={"flex flex-col overflow-hidden gap-4"}
                        onMouseEnter={() => setIsLeftCardHovered(true)}
                        onMouseLeave={() => setIsLeftCardHovered(false)}
                        whileHover={{
                            y: 0
                        }}
                    >
                        <TestimonialsCard isCardHovered={isLeftCardHovered} />
                        <TestimonialsCard isCardHovered={isLeftCardHovered} />
                        <TestimonialsCard isCardHovered={isLeftCardHovered} />
                        <TestimonialsCard isCardHovered={isLeftCardHovered} />
                    </motion.div>
                    <div className={"flex flex-col overflow-hidden gap-4"} onMouseEnter={() => setIsRightCardHovered(true)} onMouseLeave={() => setIsRightCardHovered(false)}>
                        <TestimonialsCard isCardHovered={isRightCardHovered} direction={"bottom"} />
                        <TestimonialsCard isCardHovered={isRightCardHovered} direction={"bottom"} />
                        <TestimonialsCard isCardHovered={isRightCardHovered} direction={"bottom"} />
                        <TestimonialsCard isCardHovered={isRightCardHovered} direction={"bottom"} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Testimonials;