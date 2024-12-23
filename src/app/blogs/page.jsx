import FeaturedBlog from '@/components/Blog/FeaturedBlog'
import PostList from '@/components/Blog/PostList'
import React from 'react'

const page = () => {
    return (
        <div className='bg-black p-[15px] md:p-[48px] mx-[15px] md:mx-0 my-4 rounded-[24px]'>
            <div>
                <p className={`green-polygon flex items-center gap-2 font-[500] text-[16px] md:text-base `}>
                    Discover Insights, Tips, Trends
                </p>
                <h1 className='text-[64px] font-[600] leading-tight'>
                    Our blogs
                </h1>
            </div>

            <FeaturedBlog />
            <PostList /> 
        </div>
    )
}

export default page