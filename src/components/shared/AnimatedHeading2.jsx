'use client'
import { motion } from "framer-motion";

const AnimatedHeading2 = ({ topBarTitle, title, subTitle, polyType = "green-polygon", imageSrc = null }) => {
    return (
        <div className={"flex flex-col items-center gap-10 md:gap-8 "}>
            <p className={`${polyType} flex items-center gap-2 font-[600] text-xs md:text-base`}>
                {topBarTitle}
            </p>
            <div className={"flex flex-col gap-1"}>
                <motion.p
                    className={"text-[20px] md:text-[48px] font-[600] text-center overflow-hidden"}
                    initial={{ opacity: 0, transform: "scaleY(0)" }}  // Start with the bottom part hidden
                    whileInView={{
                        opacity: 1,
                        transform: 'scaleY(1)',  // Grow from the bottom up
                        transition: { duration: .3, ease: "easeOut" },
                    }}
                    style={{ transformOrigin: "bottom" }}  // Set the transform origin to the bottom of the text
                >
                    {title}
                </motion.p>
                <motion.p
                    className={"text-[20px] md:text-[48px] font-[600] text-center overflow-hidden"}
                    initial={{ opacity: 0, transform: "scaleY(0)" }}  // Start with the bottom part hidden
                    whileInView={{
                        opacity: 1,
                        transform: 'scaleY(1)',  // Grow from the bottom up
                        transition: { duration: .3, ease: "easeOut" },
                    }}
                    style={{ transformOrigin: "bottom" }}  // Set the transform origin to the bottom of the text
                >
                    {subTitle}
                </motion.p>
            </div>

            {/* Conditionally render the image if imageSrc is passed */}
            {imageSrc && (
                <div className="mt-4">
                    <img src={imageSrc} alt="Optional visual" className="md:max-w-full w-[90%] m-auto rounded-2xl h-auto" />
                </div>
            )}
        </div>
    );
};

export default AnimatedHeading2;
