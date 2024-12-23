import React from 'react'
import { motion } from 'framer-motion'

const slides = [
    { icon: '/slide1.png' },
    { icon: '/slide2.png' },
    { icon: '/slide3.png' },
    { icon: '/slide4.jpg' },
    { icon: '/slide5.png' },
    { icon: '/slide6.png' },
    { icon: '/slide7.webp' },
    { icon: '/slide8.png' },
    { icon: '/slide9.png' },
]

const Slider = () => {
    const duplicateSlides = [...slides, ...slides]

    return (
        <div className="relative h-full overflow-hidden py-12 w-full">
            <motion.div
                className="flex gap-8"
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
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex items-center justify-center h-full">
                            {/* {slide.icon} */}
                            <img src={slide.icon} alt="" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Slider
