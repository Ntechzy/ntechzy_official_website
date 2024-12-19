import {motion} from "motion/react";


const AnimatedHeading = ({title , subTitle}) => {

    return (
         <div className={"flex flex-col items-center gap-5"}>
        <p className={"green-polygon flex items-center gap-2 font-[600]"}>Our Team</p>
        <div className={"flex flex-col gap-1"}>
            <motion.p className={"text-[48px] font-[600]  text-center translate-y-8 opacity-[0.5] "} whileInView={{
                transform: 'translateY(-1rem)',
                opacity: 1,
                transition: 'all 5s',

            }}>
                {title}
            </motion.p>
            <motion.p className={"text-[48px] font-[600]  text-center translate-y-8 opacity-[0.5] "} whileInView={{
                transform: 'translateY(-1rem)',
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