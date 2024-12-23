'use client'
import AnimatedHeading from "@/components/shared/AnimatedHeading";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';
import {GoArrowUpRight} from "react-icons/go";
import Link from "next/link";

const ProfileCard = ()=>{

    return (
        <div
            className={"group"}
        >
            <div className={"w-64 h-64 bg-gray-300 rounded-lg relative overflow-hidden"}>
                {/* Social Icons Container */}
                <motion.div
                    className={"overflow-hidden flex gap-4 bg-opacity-50 absolute right-5 bottom-5"}
                    initial={{translateX: "100%"}}
                    whileHover={{
                        transition: {staggerChildren: 0.4},
                        transform: 'translateX(0)',
                    }}
                >
                    {/* LinkedIn */}
                    <motion.div
                        className={"p-4 bg-secondary text-white rounded-full "}
                    >
                        <FaLinkedin className={"size-5"}/>
                    </motion.div>
                    {/* Twitter */}
                    <motion.div
                        className={"p-4 bg-secondary text-white rounded-full "}
                    >
                        <FaXTwitter className={"size-5"}/>
                    </motion.div>
                </motion.div>
            </div>
            <h3 className={"text-[20px] font-semibold leading-[1.4] text-start mt-5"}>John Doe</h3>
            <p className={"text-start text-[#7E8695] text-[14px] font-[400] leading-[1.42] tracking-[-0.14px]"}>CEO</p>
        </div>
    )
}

const OpenRoleCard = ()=>{

    return (
        <motion.div className={"flex  justify-between p-10 border-y"} initial={{ display: "hidden", opacity: 0, transform: "translateY(4rem)", transition: "all 1s" }}
                    whileInView={{
                        opacity: 1,
                        transition: 'all 1s',
                        transform: 'translateY(-4rem)',
                    }}>
            <p className={"text-[16px]  text-[#474E5C] font-bold"}>Software Engineer</p>
            <p className={"text-[16px] font-[500] text-[#474E5C]"}>Greater Noida , India</p>
        </motion.div>
    )

}

const Team = () => {
    const containerVariants = {
        hover: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0},
    };

    return (
        <div>
            {/* Meet our team section */}
            <div className={"py-20"}>
                <AnimatedHeading
                    topBarTitle={"Meet our team"}
                    title={"A new generation of digital"}
                    subTitle={"transformation"}
                />
                <div className={"grid grid-cols-4 gap-y-4"}>
                    {/* Profile */}
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <div className={"bg-secondary p-10 rounded-[24px] h-[400px] flex flex-col justify-between"}>
                        <p className={"text-[48px] font-semibold leading-[1.25] tracking-[-0.96px]"}>
                            This Could be you!
                        </p>
                        <div className={"flex justify-between items-center"}>
                            <Link href={"/contact"} className={"bg-white p-4 text-black rounded-[12px] font-semibold px-[24px] py-[16px]"}>Get Started</Link>
                            <GoArrowUpRight className={"size-10"}/>
                        </div>
                    </div>
                </div>
            </div>
            {/*career*/}
            <div>
                <div className={"bg-white rounded-[24px] text-black p-10"}>
                    <AnimatedHeading topBarTitle={"Career"} title={"Open role in our spaces"} polyType={"blue-polygon"} />
                    <div className={"p-10"}>
                        <OpenRoleCard/>
                        <OpenRoleCard/>
                        <OpenRoleCard/>
                        <OpenRoleCard/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
