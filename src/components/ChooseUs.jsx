'use client'
import { motion } from 'framer-motion';
import { LuSparkle } from "react-icons/lu";
import MergingEdges from './MergingEdges';
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

    return (
        <div className='bg-white text-black mt-[160px] h-full rounded-[24px] p-[48px] flex justify-between m-auto'>
            <div className='w-[50%] '>
                <MergingEdges />
            </div>
            <div className='w-[50%] leading-tight'>
                <h1 className='font-[600] text-[48px] pr-[57px] pb-3'>
                    <AnimatedStretchedHeading
                        titles={['Boost your business', 'to high level']}
                        topBarTitle={'Why choose us'}
                        cls={'yellow-polygon'}
                    />
                </h1>


                <motion.ul
                    className='my-[20px] flex flex-col gap-[25px] text-[16px] font-[600] ml-2 md:ml-4'
                    variants={listContainer}
                    initial="hidden"
                    whileInView="visible"
                >
                    <motion.li variants={listItem} className='flex items-center gap-2'>
                        <LuSparkle className="h-5 w-5 text-blue-500" />
                        <span>
                            Latest IT Solutions & Integration With Blockchain
                        </span>
                    </motion.li>
                    <motion.li variants={listItem} className='flex items-center gap-2'>
                        <LuSparkle className="h-5 w-5 text-blue-500 " />
                        <span>
                            Over 100+ Payment Gateway Support
                        </span>
                    </motion.li>
                    <motion.li variants={listItem} className='flex items-center gap-2'>
                        <LuSparkle className="h-5 w-5 text-blue-500 " />
                        <span>
                            AI machine & Deep Learning
                        </span>
                    </motion.li>
                    <motion.li variants={listItem} className='flex items-center gap-2'>
                        <LuSparkle className="h-5 w-5 text-blue-500 " />
                        <span>
                            Dedicated Support 24/7
                        </span>
                    </motion.li>
                </motion.ul>
                <DirectionAwareButton />
            </div>
        </div>
    );
};

export default ChooseUs;
