'use client'
 
import Link from "next/link"
import Navbar from "../navbar/Navbar" 
import { IoSparklesSharp } from "react-icons/io5";

export default function HeroSection() {
    return (
        <div className="h-auto w-full flex flex-col gap-6 bg-primary rounded-3xl my-12 p-10">
            <Navbar />
            <div className="w-full bg-black text-white rounded-3xl p-6">
                {/* First Hero Section */}
                <section className="relative h-auto w-full overflow-hidden px-4 py-12 md:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative z-10 flex flex-col items-start gap-8">
                            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                                We foster rapid expansion through digital innovation
                            </h1>
                            <p className="max-w-2xl text-lg text-gray-400">
                                We revolutionize industries with dynamic digital solutions, tailored to meet contemporary demands and drive impactful transformations for businesses of all sectors.
                            </p>
                            <div className="flex items-center gap-6">

                                <Link href={'#'} className="w-fit px-8 py-2 rounded-lg bg-white hover:bg-secondary flex items-center gap-x-2 justify-center text-primary hover:text-white">
                                    Get Started
                                </Link>
                                <div className="flex items-center gap-2">
                                    <IoSparklesSharp className="h-5 w-5 text-blue-500" />
                                    <span className="text-sm">12 business reaching today</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div >

            {/* Second Hero Section */}
            <section className="w-full rounded-3xl" >
                <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:px-8">
                    {/* Left side - Laptop Image */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                                src="/laptop.avif"
                                alt="Laptop with glowing screen"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent" />
                        </div>
                    </div>

                    {/* Right side - Stats */}
                    <div className="h-full flex flex-col px-6 gap-6 justify-center bg-black rounded-lg">
                        <h2 className="text-4xl font-bold md:text-5xl">
                            Embrace the future with our new way
                        </h2>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">16</span>
                                    <span className="text-3xl font-bold text-blue-500">+</span>
                                </div>
                                <p className="text-gray-400">Years of Experiences</p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">12,000</span>
                                    <span className="text-3xl font-bold text-blue-500">+</span>
                                </div>
                                <p className="text-gray-400">Projects completed from all over the world</p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold">196</span>
                                    <span className="text-3xl font-bold text-blue-500">+</span>
                                </div>
                                <p className="text-gray-400">Awards achieved from different sites</p>
                            </div>
                        </div>

                        <Link href={'#'} className="w-fit px-8 py-2 border-2 rounded-lg hover:bg-secondary flex items-center gap-x-2 justify-center text-white">
                            About Us
                        </Link>
                    </div>
                </div>
            </section >
        </div >
    )
}

