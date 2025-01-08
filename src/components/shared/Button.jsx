'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

const DirectionAwareButton = ({ title, color, hov_color, border = 'transprent' }) => {
    const [rippleStyle, setRippleStyle] = useState({
        x: 0,
        y: 0,
        size: 0,
        direction: { left: 0, top: 0 },
        isActive: false,
    });

    const handleMouseEnter = (e) => { 
        const button = e.currentTarget;

        if (button) {   
            const { clientX, clientY } = e;
            const { top, left, width, height } = button.getBoundingClientRect();

            const rippleX = clientX - left;
            const rippleY = clientY - top;

            let rippleSize = Math.max(width, height) * 5;

            if (rippleX < width / 4 || rippleX > (width * 3) / 4) {
                rippleSize = Math.max(width, height) * 2;
            } else if (rippleY < height / 4 || rippleY > (height * 3) / 4) {
                rippleSize = Math.max(width, height) * 2;
            }

            const direction = {
                left: rippleX < width / 2 ? 0 : 1,
                top: rippleY < height / 2 ? 0 : 1,
            };

            setRippleStyle({
                x: rippleX,
                y: rippleY,
                size: rippleSize,
                direction,
                isActive: true,
            });
        }
    };

    const handleMouseLeave = () => {
        setRippleStyle((prev) => ({
            ...prev,
            isActive: false,
        }));
    };

    return (
        <button
            className={`relative w-[166px] h-[46px] rounded-lg mx-0  overflow-hidden ${color} ${border} text-white`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className="relative z-10">{title}</span>

            {rippleStyle.isActive && (
                <motion.span
                    className={`absolute top-0 left-0 ${hov_color} rounded-full`}
                    initial={{
                        width: 0,
                        height: 0,
                        x: rippleStyle.x,
                        y: rippleStyle.y,
                    }}
                    animate={{
                        width: rippleStyle.size,
                        height: rippleStyle.size,
                        x: rippleStyle.x - rippleStyle.size / 2,
                        y: rippleStyle.y - rippleStyle.size / 2,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 50,
                        duration: 5,
                    }}
                    style={{
                        transformOrigin: `${rippleStyle.direction.left === 0 ? 'left' : 'right'} ${rippleStyle.direction.top === 0 ? 'top' : 'bottom'}`,
                    }}
                />
            )}

            {!rippleStyle.isActive && (
                <motion.span
                    className={`absolute top-0 left-0 ${hov_color}  rounded-full`}
                    initial={{
                        width: rippleStyle.size,
                        height: rippleStyle.size,
                        x: rippleStyle.x - rippleStyle.size / 2,
                        y: rippleStyle.y - rippleStyle.size / 2,
                    }}
                    animate={{
                        width: 0,
                        height: 0,
                        x: rippleStyle.x,
                        y: rippleStyle.y,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 25,
                        duration: 0.6,
                    }}
                    style={{
                        transformOrigin: `${rippleStyle.direction.left === 0 ? 'left' : 'right'} ${rippleStyle.direction.top === 0 ? 'top' : 'bottom'}`,
                    }}
                />
            )}
        </button>
    );
};

export default DirectionAwareButton;
