import React from 'react'
import { motion } from 'framer-motion'
import { FaCode } from "react-icons/fa6";
import { SiSecurityscorecard } from "react-icons/si";
import { LuSparkle } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";

const footerSlide = [
    { title: "AI-Driven Solution", icon: <FaCode size={40} /> },
    { title: "High Security", icon: <SiSecurityscorecard size={40} /> },
    { title: "Leading Code", icon: <LuSparkle size={40} /> },
    { title: "AI-Driven Solution", icon: <MdOutlineSecurity size={40} /> },
]

const FooterSlider = () => {
    const width = (100 / footerSlide.length)
    console.log(width);

    const duplicateSlides = [...footerSlide, ...footerSlide]
    return (
        <div className="relative h-full overflow-hidden pb-12 w-full">
            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicateSlides.map((slide, index) => (
                    <div key={index} className={`flex-shrink-0 w-[60%] md:w-[25%]`}  >
                        <div className="flex items-center gap-2 justify-center h-full">
                            {/* {slide.icon} */}
                            {slide.icon}
                            <h1 className='text-xl md:text-3xl text-nowrap font-bold'>{slide.title}</h1>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default FooterSlider
