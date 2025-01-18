import AnimatedStretchedHeading from "@/components/shared/AnimatedStretchedHeading";
import AnimatedBall from "@/components/AnimatedBall";
import LeadForm from "@/components/shared/LeadForm";
import DirectionAwareButton from "@/components/shared/Button";


const Contact = () => {
    const contactDetails = {
        contactCard: [
            {
                title: "Wanna join our teams?",
                content: "info@ntechzy.in"
            },
            {
                title: "Call us on",
                content: "+91 8189098663"
            },

        ]
    }

    return (
        <div className={"pt-10 md:pt-20 p-2"}>
            {/*banner */}
            <div className={"p-10 bg-primary rounded-[24px] flex flex-col md:flex-row gap-10 w-full"}>
                <div className={"flex flex-col items-start gap-10 flex-1 order-2 md:order-1"}>
                    <AnimatedStretchedHeading titles={["Let's talk!"]} topBarTitle={"Contact"} cls={"green-polygon"} />
                    <div className={"p-4 flex flex-col md:flex-row gap-10 w-full  justify-between"}>
                        {contactDetails.contactCard.map((item, i) => (
                            <div key={i}>
                                <p className={"text-[14px] md:text-[16px] text-[#7E8695] font-[500]"}>{item.title}</p>
                                <p className={"text-[16px] md:text-[24px] text-[#D9DCE3] font-[600]"}>{item.content}</p>
                            </div>
                        ))}
                    </div>
                    <div className={"p-4 flex flex-col gap-4"}>
                        <p className={"text-[16px] text-[#7E8695] font-[500]"}>New Business or questions?</p>
                        <div className={"flex gap-4"}>
                            {/*avatar*/}
                            <div className={"w-8 h-8 md:w-16 md:h-16 bg-gray-200 rounded-full"}></div>
                            {/*profile info*/}
                            <div>
                                <p className={"text-[16px] md:text-[24px] font-[600]"}>Shivam Diwedi</p>
                                <p className={"text-[14px] md:text-[20px] text-[#7E8695] font-[400]"}>cto@ntechzy.in</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"flex-1 flex justify-center md:justify-end order-1 md:order-2"}>
                    <AnimatedBall />
                </div>
            </div>
            {/*form*/}
            <div className={"px-5 md:px-10 py-12 md:py-24 flex flex-col md:flex-row gap-10"}>
                <div className={"flex flex-col gap-5 flex-1"}>
                    <AnimatedStretchedHeading titles={["Your gateway to seamless", "communication"]} topBarTitle={"Contact Us"} />
                    <p className={"text-[16px] font-[400] leading-[1.55em] text-[#7E8695] p-4"}>
                        We’d love to hear from you! Whether you have questions, need technical assistance, or want to discuss a partnership, our team is here to assist you. Please use the contact details or form below to get in touch with us, and we’ll respond promptly.
                    </p>
                </div>
                <div className={"flex-1"}>
                    <LeadForm />
                </div>
            </div>
            {/*our space*/}
            <div className={"flex gap-10 p-2"}>
                <div className={"bg-white rounded-[24px] p-10 w-full flex flex-col md:flex-row gap-10"}>
                    <div className={"text-black flex flex-col items-start gap-5 flex-1"}>
                        <AnimatedStretchedHeading titles={["Where you can", "find us?"]} topBarTitle={"Our Space"} />
                        <p className={"text-[#474E5C] text-[16px] font-[500] leading-[1.5em] p-4"}>
                            Our location offers a convenient and
                            welcoming space for visitors and clients
                            alike have to say
                        </p>
                        <DirectionAwareButton title={"See our location"} color={"bg-secondary"} />
                    </div>
                    <div className={"flex-1"}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.4566032495277!2d80.29845457536477!3d26.473239478838707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c390bc50eb861%3A0xcb92eaeb9f752362!2sNTECHZY%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1736332525423!5m2!1sen!2sin"
                            className={"w-[100%] h-[450px]"} style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Contact;