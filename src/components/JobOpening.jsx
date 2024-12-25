'use client'
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import AnimatedHeading from "@/components/shared/AnimatedHeading";
import toast from "react-hot-toast";
import client from "../../lib/sanity";

// {
//     "_type": "jobOpenings",
//     "jobSkills": [
//     "html",
//     "css",
//     "javascript",
//     "python"
// ],
//     "jobLastDate": "2024-12-31T06:40:00.000Z",
//     "jobLocation": "Greater Noida",
//     "jobSalary": "4.5LPA",
//     "jobPostedOn": "2024-12-25T06:29:09.606Z",
//     "jobTitle": "Software Developer",
//     "_rev": "lQ6Icb680GkeUSiegyyVzk",
//     "_createdAt": "2024-12-25T06:34:18Z",
//     "jobType": "Software Developer",
//     "_id": "226b3d67-ac20-4800-862a-c138d31bc380",
//     "_updatedAt": "2024-12-25T07:34:34Z",
//     "jobExperience": "2",
//     "jobDescription": "Develop robust APIs and services, integrate third-party services, and ensure the security and scalability of applications.",
//     "jobQualification": "Technical Degree"
// }

const JobOpenings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentJob, setCurrentJob] = useState(null);
    const [currentStep, setCurrentStep] = useState(1); // Step 1: Job Details, Step 2: Application Form
    const [jobOpenings, setAllJobOpenings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalData, setModalData] = useState({ name: "", email: "", phone: "", resume: "", coverLetter: "" });



    const fetchJobs = async () => {
        try {

            setLoading(true)
            const query = ` *[_type == "jobOpenings"]`
            const data = await client.fetch(query);
            let all_jobs = [];
            data.map((job) => {
                let jobData = {
                    id: job?._id,
                    title: job?.jobTitle,
                    location: job?.jobLocation,
                    description: job?.jobDescription
                }

                all_jobs.push(jobData);
            })
            setAllJobOpenings(all_jobs);
            console.log(data);

        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchJobs();
    }, [])

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

    const handleModalDataSubmission = async (e) => {
        try {
            e.preventDefault();
            console.log("inside..")
            if (modalData.name === "" || modalData.email === "" || modalData.phone === "" || modalData.resume === null) {
                console.log("another inside..")
                toast.error("Please fill all the required fields");
                return;
            }
            const data = {
                _type: "jobOpeningResponse",
                applicantName: modalData.name,
                applicantEmail: modalData.email,
                applicantPhone: modalData.phone,
                coverLetter: modalData.coverLetter,
                resume: modalData.resume,
                jobOpening: {
                    _type: "reference",
                    _ref: currentJob.id,
                },
            }
            // const res = await client.create(data);
            toast.promise(client.create(data), {
                loading: "Submitting your application...",
                success: "Application submitted successfully",
                error: "Failed to submit application. Try again later"
            });
        } catch (err) {
            console.log(err);
            toast.error("Error submitting application. Try again later");
        }
    }

    return (
        <section className="py-16" id="job-openings">
            <div className=" mx-auto px-4 sm:px-6">
                <AnimatedHeading topBarTitle={"Career"} title={"Open role in our spaces"}
                    polyType={"blue-polygon"} />
                <div className="py-16">
                    {jobOpenings ? jobOpenings.map((job, index) => (
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
                    )) :
                        loading ? <div className="flex justify-center items-center h-32">
                            <p className="text-gray-500">Loading...</p>
                        </div> :
                            <div className="flex justify-center items-center h-32 text-[24px]">
                                <p className="text-gray-500">No job openings at the moment</p>
                            </div>
                    }
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
                                <form onSubmit={handleModalDataSubmission}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">*Name</label>
                                        <input
                                            type="text"
                                            name={"name"}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                            placeholder="Enter your full name"
                                            required={true}
                                            value={modalData.name}
                                            onChange={(e) => setModalData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">*Email</label>
                                        <input
                                            type="email"
                                            name={"email"}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                            placeholder="Enter your email"
                                            required={true}
                                            value={modalData.email}
                                            onChange={(e) => setModalData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">*Phone</label>
                                        <input
                                            type="text"
                                            name={"phone"}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                            placeholder="Enter your phone number"
                                            required={true}
                                            value={modalData.phone}
                                            onChange={(e) => setModalData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">*Resume</label>
                                        <input
                                            type="file"
                                            name={"resume"}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                            placeholder="Upload Your resume"
                                            required={true}
                                            value={modalData.resume}
                                            onChange={(e) => setModalData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Cover Letter</label>
                                        <textarea
                                            name={"coverLetter"}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                            rows="4"
                                            placeholder="Tell us why you'd be a great fit for this role"
                                            value={modalData.coverLetter}
                                            onChange={(e) => setModalData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
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
