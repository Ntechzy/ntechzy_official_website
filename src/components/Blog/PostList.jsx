'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PostList = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageAnimationComplete, setImageAnimationComplete] = useState(false);

    return (
        <div className="border-t-2 border-t-[#2B303B]">
            <div
                className="relative h-full overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setImageAnimationComplete(false);
                }}
            >

                <div className="md:hidden flex">
                    <img
                        className="h-full w-full object-cover bg-no-repeat"
                        src="https://demo.7iquid.com/tecko/wp-content/uploads/elementor/thumbs/Driving-Innovation-Exploring-the-World-of-Autonomous-Vehicles-1-qxa2vvzboia8zbmysfk7kucd6hipwj6a37szp3wwwo.webp"
                        alt=""
                    />
                </div>

                <motion.div
                    className="hidden md:block absolute top-0 left-0 w-full h-full"
                    initial={{ opacity: 0, height: 0 }}
                    animate={isHovered ? { opacity: 1, height: '100%' } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    onAnimationComplete={() => {
                        if (!isHovered) {
                            setImageAnimationComplete(true);
                        }
                    }}
                >
                    <img
                        className="h-full w-full object-cover bg-no-repeat"
                        src="https://demo.7iquid.com/tecko/wp-content/uploads/elementor/thumbs/Driving-Innovation-Exploring-the-World-of-Autonomous-Vehicles-1-qxa2vvzboia8zbmysfk7kucd6hipwj6a37szp3wwwo.webp"
                        alt=""
                    />
                </motion.div>

                <div
                    className={`flex md:flex-row flex-col  py-[50px] z-[999] justify-between transition-opacity duration-500 ${isHovered && !imageAnimationComplete ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    <div className="md:w-[15%] flex font-[500] text-[#7e8695] text-[16px]">
                        Posted by Admin
                    </div>

                    <div className="md:w-[70%] text-[21px] md:text-[32px]">
                        <h2 className="font-[600]">
                            Immersive Experiences: The Power of VR in Entertainment
                        </h2>
                        <p className="mt-[15px] text-[16px] leading-[1.5]">
                            Each product originates from a combination of many materials and labor.
                            During manufacturing, direct materials often make up a large portion of
                            the overall cost structure. Identifying and managing it not only affects
                        </p>
                    </div>

                    <div className="md:w-[15%] flex md:justify-end mt-4 font-bold">
                        <div className='green-polygon mr-2'>

                        </div>
                        April 26, 2024</div>
                </div>
            </div>
        </div>
    );
};

export default PostList;
