'use client'
import AnimatedHeading from "@/components/shared/AnimatedHeading";
import {FaMinus} from "react-icons/fa6";
import {useAnimate} from "motion/react";
import {useEffect, useState} from "react";

const FAQCard = ()=>{
    const [scope , animate] = useAnimate();
    const [showDropdown, setShowDropdown] = useState(false);
    const getCurrentRotation = ()=>{
        const currentRotation = scope.current?.style.transform
            ? parseFloat(scope.current.style.transform.replace('rotate(', '').replace('deg)', ''))
            : 0;
        console.log(currentRotation);
        return currentRotation;
    }
    const handleClick = () => {

        const newRotation = getCurrentRotation() === 90 ? 0 : 90;
        animate(scope.current, { rotate: newRotation, duration: .2, ease: "easeInOut" });

        setShowDropdown(!showDropdown);
    };

    useEffect(()=>{
        animate(scope.current,{ rotate:90 , duration: .2, ease: "easeInOut" });
    },[])

    return (
        <div className={"flex justify-center"}>
            <div
                className={` relative  rounded-[24px] inline-flex bg-clip-content ${showDropdown ? "bg-[#141414]" : "bg-[#1F2025]"} cursor-pointer flex-col transition-all duration-1000`}
                onClick={handleClick}>
                {/*backgrond image*/}
                <div
                    className={" rounded-[inherit] absolute inset-0 before:absolute before:rounded-[inherit] before:bg-[#1F2025] before:inset-0 before:bg-clip-content before:border before:border-transparent z-[-1]"}
                    style={{backgroundImage: "linear-gradient(357deg, rgba( 117, 117, 117, 0.40) 0%, rgba( 255, 255, 255, 0.00) 70%)"}}></div>
                {/*content*/}
                <div className={`flex flex-col py-[40px] px-[24px]  rounded-[24px]`}>

                    <div className={"flex justify-between items-center"}>
                        <div className={"flex gap-10 text-[24px]"}>
                            <p className={"text-secondary"}>01</p>
                            <p className={"font-semibold"}>How experienced is your team?</p>
                        </div>
                        <div>
                            <div className={"w-fit relative text-[#9DA5B4]"}>
                                <FaMinus className={"size-6"}/>
                                <FaMinus className={`size-6 absolute top-0  transition-all duration-300 `} ref={scope}/>
                            </div>
                        </div>
                    </div>
                    {/*description*/}
                    <div
                        className={`overflow-hidden transition-all duration-1000 ease-in-out ${showDropdown ? " max-h-[1000px]" : "max-h-0"}`}
                        style={{transitionProperty: 'max-height'}}
                    >
                        <p className="pl-[60px] pt-5">
                            We differentiate ourselves through our commitment to innovation, personalized solutions, and
                            client
                            satisfaction.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

const FAQ = () => {


    return (
        <div className={" mt-[160px]"}>
            {/*Heading*/}
            <AnimatedHeading topBarTitle={"FAQs"} title={"Count on our seasoned IT professionals"}
                             subTitle={"to provide insightful answers"} polyType={"blue-polygon"}/>
            {/*accordian container*/}
            <div className={"flex flex-col gap-10 p-10"}>
                <FAQCard/>
                <FAQCard/>
                <FAQCard/>
                <FAQCard/>
            </div>
        </div>
    )
}

export default FAQ;