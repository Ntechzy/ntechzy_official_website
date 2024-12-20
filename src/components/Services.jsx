"use client";
import servicedata from "./servicedata";
import AnimatedHeading from "./shared/AnimatedHeading";
import { IoArrowForward } from "react-icons/io5";

const Services = () => {
  const handleClick = () => {
    console.log("clicked")
  }
  return (
    <div className="mt-[160px]">
      <AnimatedHeading
        title={"Services Unleash your potential with our tailored"}
        subTitle={"solutions for your every tech needs"}
        topBarTitle={"Services"}
      />
      <div className="grid md:grid-cols-3 grid-cols-1 m-auto justify-center place-items-center py-[32px] px-[24px]">
        {servicedata.map((item, i) => {
          return (
            <div key={i} className="group overflow-hidden">


              <div className="half-border w-[400px] rounded-2xl overflow-hidden m-2 ">

                <div className="relative  before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-custom-gradient before:opacity-0 before:group-hover:opacity-[0.2] before:transition-opacity before:duration-500 before:ease-in-out before:pointer-events-none ">

                  <div className="relative w-full h-full bg-cover  before:opacity-[0] before:absolute before:content-['_']  before:w-full before:h-full before:bg-[url('/fancy-box-bg.png')]  before:group-hover:opacity-[0.5] before:transition-opacity before:duration-500 before:ease-in-out before:-z-1 before:pointer-events-none">


                    <div className=" rounded-xl py-[24px] px-[32px] ">
                      <div className="w-[48px] h-[48px] mb-[30px] ">
                        <img src={item.icon} alt="" />
                      </div>
                      <div className="text-[24px] mb-[15px]">{item.title}</div>
                      <div className="flex flex-row items-end">
                        <div className="text-[16px] text-[#7b8391] leading-[1.5] font-[400px]">{item.description}</div>
                        <div onClick={handleClick} className=" cursor-pointer p-[0.8rem]  ml-9 bg-black rounded-full text-center m-auto">
                          <IoArrowForward className="w-[16px] h-[16px]   text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
