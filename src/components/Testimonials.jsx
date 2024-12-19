import AnimatedHeading from "@/components/shared/AnimatedHeading";
import AnimatedStretchedHeading from "@/components/shared/AnimatedStretchedHeading";


const Testimonials = () => {

    return (
        <div>
            <div className={"bg-white rounded-lg text-black p-10 h-[637px]"}>
                {/*left*/}
                <div className={"flex flex-col h-full justify-between"}>
                    <AnimatedStretchedHeading topBarTitle={"Testimonial"} titles={["Let actions" , "talking instead"]}  />
                    <div className={"p-5 border border-[#BBC1CE] rounded-2xl flex gap-2 w-fit"}>
                        {/*image*/}
                        <div className={"w-10 h-10 rounded-full bg-gray-200"}>

                        </div>
                        {/*rating*/}
                        <div>
                            <div className={"flex gap-2"}>
                                <p className={"font-bold"}>4.9/5</p>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <p className={"text-gray-500"}>Based on 24 reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Testimonials;