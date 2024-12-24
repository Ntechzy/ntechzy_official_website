'use client'
import AnimatedHeading from "@/components/shared/AnimatedHeading";
import { motion } from 'motion/react';
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const TeamCard = () => {

    return (
        <motion.div
            initial={{ display: "hidden", opacity: 0, transform: "translateY(4rem)", transition: "all 1s" }}
            whileInView={{
                    opacity: 1,
                transition: 'all 1s',
                transform: 'translateY(-4rem)',
            }}
            className={"relative group  rounded-2xl ease-in-out transition-all duration-2000 flex flex-col justify-between items-center p-10 bg-[#16171B]  h-[340px]"}>
            <div className={"absolute  w-[95%] h-[95%] top-[50%] translate-y-[-50%] left-[50%] opacity-0 translate-x-[-50%] group-hover:w-full group-hover:h-full group-hover:opacity-100 transition-all duration-300 rounded-2xl  border border-secondary invisible group-hover:visible pointer-events-none"}></div>
            <div className={"flex flex-col items-center gap-3"}>
                {/*profile*/}
                <div className={"w-20 h-20 bg-gray-200 rounded-full"}></div>
                {/*name*/}
                <p className={"text-[20px] font-[600] leading-[1.4]"}>Tom Ford</p>
                {/*designation*/}
                <p className={"text-[#7E8695] font-[400] text-[14px] leading-[1.42] tracking-[-0.14px]"}>Co - Founder &
                    CEO</p>
            </div>
            <div className={"flex gap-4"}>
                <div className={"rounded-full p-2 bg-black text-[#7e8695] cursor-pointer border border-[#474E5C hover:bg-secondary hover:text-white transition-all duration-300"}>
                    <FaLinkedinIn className={"  size-5 "} />
                </div>
                <div className={"rounded-full p-2 bg-black text-[#7e8695] cursor-pointer border border-[#474E5C hover:bg-secondary hover:text-white transition-all duration-300"}>
                    <FaXTwitter className={"  size-5 "} />
                </div>
            </div>
        </motion.div>
    )
}

const Team = () => {

    return (
        <div className={"flex flex-col gap-16 p-1 mt-[160px]"}>
            {/*heading*/}
            <AnimatedHeading topBarTitle={"Our Team"} title={"We bring a wealth of skills from a wide"}
                subTitle={"range of backgrounds"} />
            {/*cards*/}
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-14 gap-x-14  items-stretch p-5"}>
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>

        </div>
    )

}

export default Team;