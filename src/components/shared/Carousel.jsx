'use client';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { SlideData } from '@/data/slideData';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [data, setData] = useState(SlideData);

    const nextSlide = () => {
        if (currentSlide < data.length - 4) {
            setCurrentSlide(currentSlide + 1);
        } else {
            const newData = data.slice(3);
            setData((prevData) => [...prevData, ...newData]);
            setCurrentSlide(currentSlide + 1);
        }
    };



    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            const newData = data.slice(3);
            setData((prevData) => [...newData, ...prevData]);
            setCurrentSlide(SlideData.length - 1);
        }
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="relative flex w-full gap-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(currentSlide / 3) * 100}%)` }}
            >
                {data.map((slide, index) => (
                    <div
                        key={index}
                        className="w-[32%] group flex flex-col overflow-hidden flex-shrink-0"
                    >
                        <div className="relative rounded-2xl overflow-hidden">
                            <img src={slide.image} alt="" className="w-full object-cover group-hover:scale-[1.05] ease-linear transition duration-500" />
                            <div className='absolute z-[999] group-hover:inset-0 group-hover:transition-all group-hover:ease-linear group-hover:duration-700 group-hover:animate-scale w-full h-full flex items-center justify-center'>

                                <button
                                    onClick={prevSlide}
                                    className=" cursor-pointer bg-secondary -rotate-[40deg] hover:bg-white hover:text-black hover:transition hover:duration-200 hover:ease-in-out  p-4  rounded-full shadow-md hover:shadow-lg text-white "
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-[12px] text-secondary uppercase mt-[25px] font-semibold  leading-[1.33]">{slide.title}</h3>
                            <h2 className="text-[24px] font-semibold mt-[25px] leading-[1.33] hover:text-secondary transition-all ease-in-out duration-500 ">
                                Driving Innovation: Exploring the World of Autonomous Vehicles
                            </h2>
                            <p className='mt-[25px]  leading-[1.33]'>
                                Discover the Latest Innovations and Opportunities Shaping the Future of[…]
                            </p>
                            <div className='pt-[20px] mt-[20px] border-t-2 border-t-[#2B303B]'>
                                <p className={`green-polygon flex items-center gap-2 font-[600] text-xs md:text-base `}>
                                    April 26, 2024
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-5 mt-[30px] justify-center">
                <button
                    onClick={prevSlide}
                    className="p-4 cursor-pointer bg-gradient-to-l from-[#ffffff3e] to-[#ffffff00] rounded-full shadow-md hover:shadow-lg text-white "
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-4 cursor-pointer bg-gradient-to-l from-[#ffffff3e] to-[#ffffff00] rounded-full shadow-md hover:shadow-lg text-white "
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
