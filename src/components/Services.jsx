"use client";
import servicedata from "./servicedata";
import AnimatedHeading from "./shared/AnimatedHeading";
import { IoArrowForward } from "react-icons/io5";

const Services = () => {
  return (
    <div>
      <AnimatedHeading
        title={"Services Unleash your potential with our tailored"}
        subTitle={"solutions for your every tech needs"}
        topBarTitle={"Services"}
      />
      <div className="grid md:grid-cols-3 grid-cols-1 m-auto justify-center place-items-center">
        {servicedata.map((item, i) => (
          <div key={i} className="service-card-wraper">
            <div className="service-card w-[400px] border-2 py-[24px] px-[32px] rounded-2xl m-2 ">
              <div>
                <div className="w-[48px] h-[48px] ">
                  <img src={item.icon} alt="" />
                </div>
                <div className="text-[24px]">{item.title}</div>
                <div className="flex flex-row items-end">
                  <div className="text-[16px]">{item.description}</div>
                  <div className="p-2 ml-9 w-[36px] h-[36px] bg-gradient-to-r from-primary via-slate-[#7e8695] to-[#7e8695] rounded-full text-center m-auto">
                    <IoArrowForward className="w-[16px] h-[16px] text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
