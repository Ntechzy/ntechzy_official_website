'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../../../lib/sanity';
import Link from 'next/link';

const PostList = ({ data }) => {
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

                        alt=""
                    />
                </div>

                <motion.div
                    className="hidden md:block absolute top-0 left-0 w-full h-full"
                    initial={{ opacity: 0, height: 0 }}
                    animate={isHovered ? { opacity: 1, height: '100%', zIndex: '10' } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    onAnimationComplete={() => {
                        if (!isHovered) {
                            setImageAnimationComplete(true);
                        }
                    }}
                >
                    <img
                        className="h-full w-full object-cover bg-no-repeat"
                        src={urlFor(data.mainImage)}
                        alt=""
                    />
                    <div className='z-[999] flex justify-center items-center absolute top-0 w-full h-full'>
                        <Link className='text-black font-[800] hover:text-white hover:transition ease-in delay-100 text-[14px] p-2 rounded-md bg-white hover:bg-secondary' href={`/blogs/${data.slug}`} >Continue Reading </Link>
                    </div>
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
                            {data.title}
                        </h2>
                        <p className="mt-[15px] text-[16px] leading-[1.5]">
                            {data.short_description}
                        </p>
                    </div>

                    <div className="md:w-[15%] flex md:justify-end mt-4 font-bold">
                        <div className='green-polygon mr-2'>

                        </div>
                        {data.publishedAt}</div>
                </div>
            </div>
        </div>
    );
};

export default PostList;
