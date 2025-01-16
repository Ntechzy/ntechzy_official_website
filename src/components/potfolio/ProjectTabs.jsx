'use client'
import { useEffect, useState } from 'react'
import { all, app, custom, marketing, media, tabs, web } from '@/data/Project'
import React, { use } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import Link from 'next/link'

const ProjectTabs = () => {
    const [activeTab, setActiveTab] = useState('all')
    const [data, setData] = useState(all)

    useEffect(() => {
        switch (activeTab) {
            case 'all':
                setData(all)
                break;
            case 'web':
                setData(web)
                break;
            case 'app':
                setData(app)
                break;
            case 'marketing':
                setData(marketing)
                break;
            case 'media':
                setData(media)
                break;
            case 'custom':
                setData(custom)
                break;
            default:
                setData(all)
                break;
        }
    }, [activeTab])

    return (
        <div className=''>
            <div className='flex flex-wrap font-[500] text-[18px] md:text-[24px] gap-[30px] my-10 cursor-pointer'>

                {
                    tabs.map((obj, i) => (
                        <div key={i} className={`${obj.value === activeTab ? 'text-secondary relative before:absolute cursor-pointer before:bottom-0 before:h-[2px] before:w-full before:bg-secondary' : 'text-[#7b8392] '}`} onClick={() => setActiveTab(obj.value)}>
                            {obj.name}
                        </div>
                    ))
                }
            </div>

            <div className='flex gap-4 flex-wrap overflow-hidden '>
                {
                    data.length > 0 ? data.map((obj, i) => (
                        <div
                            key={i}
                            className="md:w-[calc(33%-10px)] sm:w-[calc(50%-10px)] w-full group flex flex-col   flex-shrink-0"
                        >
                            <div className="relative rounded-2xl md:w-[414px]  object-contain h-[275px]   overflow-hidden">
                                <img src={obj.image} alt="" className="w-full h-full object-cover group-hover:scale-[1.05] ease-linear transition duration-500" />
                                <div className='absolute z-[999] group-hover:inset-0 group-hover:transition-all group-hover:ease-linear group-hover:duration-700 group-hover:animate-scale w-full h-full flex items-center justify-center'>

                                    <Link
                                        href={obj.link}
                                        className=" cursor-pointer bg-secondary -rotate-[40deg] hover:bg-white hover:text-black hover:transition hover:duration-200 hover:ease-in-out  p-4  rounded-full shadow-md hover:shadow-lg text-white "
                                    >
                                        <FaArrowRight />
                                    </Link >
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-[16px]  uppercase mt-[25px] font-semibold hover:text-secondary leading-[1.33]">{obj.name}</h3>
                                {obj.description && < h2 className="text-[12px] sm:text-[16px] font-semibold mt-[8px] leading-[1.33] text-gray-500 transition-all ease-in-out duration-500 ">
                                    {obj.description}
                                </h2>}
                            </div>
                        </div>
                    )) :
                        "Will Soon Update"
                }
            </div>
        </div >
    )
}

export default ProjectTabs