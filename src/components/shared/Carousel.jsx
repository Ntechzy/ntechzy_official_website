'use client';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { SlideData } from '@/data/slideData';
import client, {urlFor}  from '@/lib/sanity';
import Link from 'next/link';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const query = `
            *[_type=="post"] | order(_createdAt desc)[0...3] {
              "currentSlug": slug.current,
              title, 
              mainImage,
              short_description,
              categories,
              publishedAt
            }`;

            try {
                const fetchedData = await client.fetch(query);
                setData(fetchedData); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);


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
                            <img src={urlFor(slide.mainImage).url()} alt="" className="h-[276px] w-full object-cover group-hover:scale-[1.05] ease-linear transition duration-500" />
                            <div className='absolute z-[999] group-hover:inset-0 group-hover:transition-all group-hover:ease-linear group-hover:duration-700  h-full flex items-center justify-center'>

                                <Link href={`/blogs/${slide.currentSlug}`}
                                    className=" cursor-pointer bg-secondary -rotate-[40deg] hover:bg-white hover:text-black hover:transition hover:duration-200 hover:ease-in-out  p-4  rounded-full shadow-md hover:shadow-lg text-white "
                                >
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-[12px] text-secondary uppercase mt-[25px] font-semibold  leading-[1.33]">{slide.categories || "Technology"}</h3>
                            <h2 className="text-[24px] font-semibold mt-[25px] leading-[1.33] hover:text-secondary transition-all ease-in-out duration-500 ">
                                {slide.title}
                            </h2>
                            <p className='mt-[25px]  leading-[1.33]'>
                                {slide.short_description.slice(0, 71)}  [...]
                            </p>
                            <div className='pt-[20px] mt-[20px] border-t-2 border-t-[#2B303B]'>
                                <p className={`green-polygon flex items-center gap-2 font-[600] text-xs md:text-base `}>
                                    {slide.publishedAt}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-5 mt-[30px] justify-center">
                <button
                    onClick={prevSlide}
                    disabled={data.length < 4}
                    className="p-4 cursor-pointer bg-gradient-to-l from-[#ffffff3e] to-[#ffffff00] rounded-full shadow-md hover:shadow-lg text-white "
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={nextSlide}
                    disabled={data.length < 4}
                    className="p-4 cursor-pointer bg-gradient-to-l from-[#ffffff3e] to-[#ffffff00] rounded-full shadow-md hover:shadow-lg text-white "
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
