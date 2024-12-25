import React from 'react'
import { motion } from 'framer-motion'

const slides = [
    { icon: '/logo/1.png' },
    { icon: '/logo/2.png' },
    { icon: '/logo/3.png' },
    { icon: '/logo/4.png' },
    { icon: '/logo/5.png' },
    { icon: '/logo/6.png' },
    { icon: '/logo/7.png' },
    { icon: '/logo/8.png' },
    { icon: '/logo/9.png' },
    { icon: '/logo/10.png' },
    { icon: '/logo/11.png' },
    { icon: '/logo/12.png' },
    { icon: '/logo/13.png' },
    { icon: '/logo/14.png' },
    { icon: '/logo/15.png' },
    { icon: '/logo/16.png' },
]

const Slider = ({ qyt = "single" }) => {
    const duplicateSlides = [...slides, ...slides]

    return (
        <div className="relative h-full overflow-hidden py-12 w-full flex flex-col gap-10">

            <motion.div
                className="flex gap-8"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 25,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicateSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / (slides.length / 3)}%` }}>
                        <div className="flex bg-white items-center justify-center h-full ">
                            {/* {slide.icon} */}
                            <img className='' src={slide.icon} alt="" />
                        </div>
                    </div>
                ))}
            </motion.div>

            {
                qyt == "both" &&
                <motion.div
                    className="flex gap-8"
                    animate={{
                        x: ["-100%", "0"],
                        transition: {
                            ease: 'linear',
                            duration: 25,
                            repeat: Infinity,
                        }
                    }}
                >
                    {duplicateSlides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0" style={{ width: `${100 / (slides.length / 3)}%` }}>
                            <div className="flex bg-white items-center justify-center h-full ">
                                {/* {slide.icon} */}
                                <img className='' src={slide.icon} alt="" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            }
        </div >
    )
}

export default Slider
