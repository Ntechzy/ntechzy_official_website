import React from 'react'
import AnimatedStretchedHeading from './shared/AnimatedStretchedHeading'
import DirectionAwareButton from './shared/Button'
import Carousel from './shared/Carousel'
import Link from 'next/link'

const Blog = () => {
    return (
        <div className='mt-[160px]'>
            <div className='w-full flex justify-between items-end mb-[90px] '>
                <div>
                    <AnimatedStretchedHeading
                        titles={['What ‘s new?']}
                        topBarTitle={'Our blog'}
                        cls={'green-polygon'}
                    />
                </div>
                <Link href={'/blogs'} className='mb-4'>
                    <DirectionAwareButton title={'See all article'} color={"bg-transprent"} hov_color={"bg-secondary"} border='border-[1px] border-white' />
                </Link>
            </div>

            <div>
                <Carousel />
            </div>
        </div>
    )
}

export default Blog