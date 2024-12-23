"use client"
import {GoArrowUpRight} from "react-icons/go";
import {useState} from "react";


const AnimatedBall = ()=>{
    const [ballPosition, setBallPosition] = useState({x:0,y:0});
    const handleHover = (e) => {
        const ballRect = e.target.getBoundingClientRect();
        const x = e.clientX - ballRect.left;
        const y = e.clientY ;

        setBallPosition({ x, y });
    };

    return (
        <div className={" flex justify-center items-center cursor-pointer relative w-fit"}>
            {/*blue ball*/}
            <div className={"w-[200px] h-[200] md:w-[400px] md:h-[400px] bg-secondary rounded-full flex justify-center items-center relative group hover:text-black transition-all duration-1000 overflow-hidden"}>
                <p className={"text-[24px] md:text-[48px] font-[400] z-[10]"}>
                    Start a project
                </p>

                {/*overlay*/}
                <div className={"z-[9] absolute inset-0 rounded-full bg-white invisible w-0 h-0 group-hover:visible group-hover:w-[200%] group-hover:h-[200%] transition-all duration-500"} style={{
                    top: ballPosition.y,
                    left: ballPosition.x,
                    transformOrigin: "center",
                    transform: "translate(-50%, -50%)",
                }}
                onMouseMove={handleHover}
                     onMouseLeave={handleHover}
                ></div>
            </div>
            {/*arrow*/}
            <div className={"text-black bg-white p-4 md:p-5 rounded-[24px] absolute bottom-0 left-0 cursor-auto"}>
                <GoArrowUpRight className={"size-4 md:size-10"}/>
            </div>
        </div>
    )
}

export default AnimatedBall;