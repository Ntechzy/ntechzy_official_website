
import React from 'react'

const FeaturedBlog = ({ data }) => {

    return (
        <div className=' w-full  overflow-hidden my-7 md:mb-[80px]'>

            <div className='h-auto bg-white rounded-xl  overflow-hidden md:h-[100vh]  w-full'>
                <img className='h-full w-full object-cover' src="https://demo.7iquid.com/tecko/wp-content/uploads/elementor/thumbs/Driving-Innovation-Exploring-the-World-of-Autonomous-Vehicles-1-qxa2vvzboia8zbmysfk7kucd6hipwj6a37szp3wwwo.webp" alt="" />
            </div>
            <h3 className="text-[12px] md:text-[16px] text-secondary uppercase mt-[25px] font-semibold  leading-[1.33]">
                {"Technology" | data.categories}
            </h3>
            <h2 className="text-[24px] md:text-[40px] font-semibold mt-[25px] leading-[1.33] hover:text-secondary transition-all ease-in-out duration-500 ">
                {data.title}
            </h2>
            <p className='mt-[25px]  text-[#7e8695] text-[16px] leading-[1.5] font-bold'>
                {data.short_description}
            </p>
            <div className='pt-[20px] mt-[20px] border-t-2 border-t-[#2B303B]'>
                <p className={`green-polygon flex items-center gap-2 font-[600] text-xs md:text-base `}>
                    {new Date(Date.now)}
                </p>
            </div>
        </div>
    )
}

export default FeaturedBlog