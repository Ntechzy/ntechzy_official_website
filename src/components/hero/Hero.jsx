'use client'

import Counter from "@/animations/Counter";
import { TextFade } from "@/animations/TextFade";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoSparklesSharp } from "react-icons/io5";
import DirectionAwareButton from "../shared/Button";
import Slider from "./Slider";
import Navbar from "../navbar/Navbar";

export default function HeroSection() {

    return (
        <div className="h-auto w-full flex flex-col gap-8 bg-primary rounded-3xl p-4 md:p-10">
            {/* <Navbar/> */}
            <div className="w-full bg-black text-white rounded-3xl p-6">
                {/* First Hero Section */}
                <section className="relative h-auto w-full overflow-hidden px-4 py-12 md:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative z-10 flex flex-col items-start gap-8">
                            <div>
                                {"Empowering Growth with Cutting-Edge Tech and Bold Marketing".split(" ").map((el, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.25,
                                            delay: i / 10,
                                        }}
                                        className="max-w-4xl text-[30px] tracking-tighter leading-tight font-bold md:tracking-tight sm:text-6xl md:text-8xl"
                                    >
                                        {el}{" "}
                                    </motion.span>
                                ))}
                            </div>
                            <TextFade
                                direction="up"
                                className="pt-0 pb-5 flex-col flex justify-center space-y-0"
                            >
                                <p className="max-w-2xl text-lg text-gray-400">
                                From designing future-ready digital solutions to 
                                </p>
                                <p className="max-w-2xl text-lg text-gray-400">
                                crafting marketing strategies that deliver results,
                                </p>
                                <p className="max-w-2xl text-lg text-gray-400">
                                we’re here to revolutionize the way you grow.
                                </p>
                            </TextFade>

                            <div className="flex md:flex-row flex-col w-full md:items-center  justify-between ">
                                <div className="flex md:flex-row flex-col  md:items-center gap-6">
                                    <DirectionAwareButton title={'Enquire Now'} color={"bg-black"} hov_color={"bg-secondary"} border="border-2 " />
                                    <div className="flex md:items-center gap-2">
                                        <IoSparklesSharp className="h-5 w-5 text-blue-500" />
                                        <span className="text-sm font-bold ">12 business reaching today</span>
                                    </div>
                                </div>

                                <div className="md:w-[50%] w-full flex items-end justify-end ">
                                    <img src="/hexagon.png" alt="" className="md:w-auto  h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div >

            {/* Second Hero Section */}
            <section className="h-auto w-full rounded-3xl" >
                <div className="mx-auto grid w-full gap-8 grid-cols-1 md:grid-cols-2">
                    {/* Left side - Laptop Image */}
                    <div className="relative h-full">
                        <div className="relative h-full overflow-hidden rounded-lg">
                            <motion.img
                                whileHover={{ scale: 2 }}
                                transition={{ duration: 2 }}
                                src="/laptop.avif"
                                alt="Laptop with glowing screen"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent" />
                        </div>
                    </div>

                    {/* Right side - Stats */}
                    <div className="h-full flex flex-col px-[15px] md:px-[40px] py-[30px] gap-6 justify-center bg-black rounded-lg">
                        <h2 className="text-[20px] md:pr-0 pr-[19px] font-bold md:text-5xl">
                            {"Embrace the future with our new way".split(" ").map((el, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.25,
                                        delay: i / 10,
                                    }}
                                >
                                    {el}{" "}
                                </motion.span>
                            ))}
                        </h2>

                        <div className="space-y-6 ">
                            <div className="md:space-y-2">
                                <div className="flex md:items-center items-baseline gap-1">
                                    <Counter value={16} />
                                    <span className="text-[20px] md:text-[48px] font-bold text-blue-500">+</span>
                                </div>
                                <p className="text-gray-400">Years of Experiences</p>
                            </div>

                            <div className="md:space-y-2">
                                <div className="flex items-baseline gap-1">
                                    <Counter value={12000} />
                                    <span className="text-[20px] md:text-[48px] font-bold text-blue-500">+</span>
                                </div>
                                <p className="text-gray-400">Projects completed from all over the world</p>
                            </div>

                            <div className="md:space-y-2">
                                <div className="flex items-baseline gap-1">
                                    <Counter value={196} />
                                    <span className="text-[20px] md:text-[48px] font-bold text-blue-500">+</span>
                                </div>
                                <p className="text-gray-400">Awards achieved from different sites</p>
                            </div>
                        </div>
                        {/* < div className="w-fit px-8 py-2 border-2 rounded-lg hover: flex items-center gap-x-2 justify-center text-white"> */}
                        <DirectionAwareButton title={'About us'} color={"bg-transprent"} border={"border-2 border-white"} hov_color={"bg-secondary"} />
                        {/* </div> */}
                    </div>
                </div>
            </section >

            <Slider />
        </div >
    )
}

