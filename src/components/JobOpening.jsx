'use client'
import React, { useState } from "react";
import {motion} from "motion/react";
import AnimatedHeading from "@/components/shared/AnimatedHeading";

const JobOpenings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentJob, setCurrentJob] = useState(null);
    const [currentStep, setCurrentStep] = useState(1); // Step 1: Job Details, Step 2: Application Form

    const jobs = [
        {
            title: "Frontend Developer",
            location: "Remote",
            description:
                "We are looking for a skilled Frontend Developer to build responsive and user-friendly web applications.",
        },
        {
            title: "Backend Developer",
            location: "Greater Noida , IN",
            description:
                "Join our team as a Backend Developer and contribute to the development of powerful, scalable server-side applications.",
        },
        {
            title: "Product Manager",
            location: "Greater Noida , IN",
            description:
                "We need a Product Manager to help lead cross-functional teams in creating exceptional products and services.",
        }, {
            title: "Product Manager",
            location: "Greater Noida , IN",
            description:
                "We need a Product Manager to help lead cross-functional teams in creating exceptional products and services.",
        },
    ];

    // Open modal and set the current job
    const handleOpenModal = (job) => {
        setCurrentJob(job);
        setIsModalOpen(true);
        setCurrentStep(1); // Reset to step 1 when opening the modal
    };

    // Close modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentJob(null);
        setCurrentStep(1);
    };

    // Move to the next step (from job details to form)
    const handleNextStep = () => {
        setCurrentStep(2);
    };

    return (
        <section className="py-16" id="job-openings">
            <div className=" mx-auto px-4 sm:px-6">
                <AnimatedHeading topBarTitle={"Career"} title={"Open role in our spaces"}
                                 polyType={"blue-polygon"}/>
                <div className="py-16">
                    {jobs.map((job, index) => (
                        <motion.div
                            className={"flex flex-col md:flex-row items-start  justify-between px-0 py-10 md:p-10 border-y cursor-pointer"}
                            initial={{
                                        display: "hidden",
                                        opacity: 0,
                                        transform: "translateY(4rem)",
                                        transition: "all 1s"
                            }}
                            whileInView={{
                                        opacity: 1,
                                        transition: 'all 1s',
                                        transform: 'translateY(-4rem)',
                            }}
                            key={index}
                            onClick={() => handleOpenModal(job)}
                        >
                            <p className={"text-[16px]  text-[#474E5C] font-bold"}>{job.title}</p>
                            <p className={"text-[16px] font-[500] text-[#474E5C]"}>{job.location}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-[9999]"
                    onClick={handleCloseModal}
                >
                    <div
                        className="bg-white rounded-lg p-6 w-11/12 sm:w-3/4 md:w-1/2"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        {currentStep === 1 ? (
                            // Step 1: Job Details
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                    {currentJob?.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{currentJob?.description}</p>
                                <div className="text-gray-500 mb-4">{currentJob?.location}</div>
                                <button
                                    onClick={handleNextStep}
                                    className="mt-4 inline-block bg-primary text-white py-2 px-4 rounded-md text-center hover:bg-secondary"
                                >
                                    Next
                                </button>
                            </div>
                        ) : (
                            // Step 2: Application Form
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Apply for {currentJob?.title}
                                </h3>
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Name</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Cover Letter</label>
                                        <textarea
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                            rows="4"
                                            placeholder="Tell us why you'd be a great fit for this role"
                                        ></textarea>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-5 justify-between">
                                        <button
                                            onClick={handleCloseModal}
                                            className="inline-block bg-gray-500 text-white py-2 px-4 rounded-md text-sm md:text-base"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="inline-block bg-primary text-white py-2 px-4 rounded-md text-sm md:text-base"
                                        >
                                            Submit Application
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default JobOpenings;
