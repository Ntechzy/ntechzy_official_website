import React from 'react'
import AnimatedStretchedHeading from '../shared/AnimatedStretchedHeading'
import ProjectTabs from './ProjectTabs'

const Projects = () => {
    return (
        <div className='bg-[#111317] p-[15px] md:p-[48px] mx-[15px] md:mx-0 my-4 rounded-[24px]'>
            <div>
                <p className={`green-polygon flex items-center gap-2 font-[500] text-[16px] md:text-base `}>
                    What we have done
                </p>
                <h1 className='text-[64px] font-[600] leading-tight'>
                    Our Projects
                </h1>
            </div>

            <div>
                <ProjectTabs />
            </div>
        </div>
    )
}

export default Projects