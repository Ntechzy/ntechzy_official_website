'use client'
import {motion} from "motion/react";



const AnimatedHeading = ({topBarTitle , title , subTitle,polyType="green-polygon"}) => {

    return (
         <div className={"flex flex-col items-center gap-10 md:gap-8 "}>
        <p className={`${polyType} flex items-center gap-2 font-[600] text-xs md:text-base`}>{topBarTitle}</p>
        <div className={"flex flex-col gap-1"}>
            <motion.p
                className={"text-[20px] md:text-[48px] font-[600]  text-center"}
                initial={{opacity: 0 , transform: "translateY(2rem)"}}
                whileInView={{
                transform: 'translateY(-2rem)',
                opacity: 1,
                transition: 'all 5s',

            }}>
                {title}
            </motion.p>
            <motion.p
                className={"text-[20px] md:text-[48px] font-[600]  text-center  "}
                initial={{opacity: 0 , transform: "translateY(2rem)"}}
                whileInView={{
                transform: 'translateY(-2rem)',
                opacity: 1,
                transition: 'all 10s',


            }}>
                {subTitle}
            </motion.p>
        </div>

    </div>
    )
};

export default AnimatedHeading;