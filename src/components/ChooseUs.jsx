'use client'
import GooeyEffect from "@/components/GooeyEffect";
import { motion } from 'framer-motion';
import { LuSparkle } from "react-icons/lu";
import AnimatedStretchedHeading from './shared/AnimatedStretchedHeading';
import DirectionAwareButton from './shared/Button';

const ChooseUs = () => {
    const listContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const listItem = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    };

    const aboutUsPoints = [
        "Bespoke tech solutions",
        "High-performing marketing strategies",
        "Creative campaigns that make a lasting impact"
    ]

    return (
        <div className='bg-white text-black mt-[120px] h-full rounded-[24px] py-[30px] px-[15px] md:p-[48px] flex justify-between m-auto'>
            <div className='w-[50%] hidden md:block'>
                <GooeyEffect />
            </div>
            <div className='w-full md:w-[50%] leading-tight'>
                <h1 className='font-[600] text-[48px] pr-0 md:pr-[57px] pb-3'>
                    <AnimatedStretchedHeading
                        titles={['Boost your business', 'to high level']}
                        topBarTitle={'About Us'}
                        cls={'yellow-polygon'}
                    />
                </h1>


                <motion.ul
                    className='my-[20px] flex flex-col  gap-[25px] text-[14px]  tracking-wide md:leading-[0] leading-6  md:text-[16px] font-bold md:font-[600] ml-2 md:ml-4'
                    variants={listContainer}
                    initial="hidden"
                    whileInView="visible"
                >
                    {aboutUsPoints.map((point, index) => (
                        <motion.li key={index} variants={listItem} className='flex items-center gap-2'>
                            <LuSparkle className="h-5 w-5 text-blue-500" />
                            <span>
                                {point}
                            </span>
                        </motion.li>
                    ))}
                </motion.ul>
                <div className="md:mx-[22px]">
                    <DirectionAwareButton title={'See our workflow'} color={"bg-secondary"} hov_color={"bg-black"} />

                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
