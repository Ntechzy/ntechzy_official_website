"use client";
import React from "react";
import DirectionAwareButton from "../shared/Button";
import { motion } from "framer-motion";
const AboutSection3 = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-start gap-10 md:mt-[160px] p-5 ">
      <div className="rounded-3xl">
        <img
          src="/about_us_image_02.avif"
          alt="loading..."
          className="rounded-3xl"
        />
      </div>
      <div>
        <div>
          <motion.h1
            className="md:text-[32px] text-[20px] font-[600] mb-1"
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            initial={{ opacity: 0, x: 50 }}
          >
            Who We Are
          </motion.h1>
          <p className="md:w-[480px] md:text-[18px] text-[14px] md:leading-[28px] text-start text-[#9da5b4]  ">
            <b>Ntechzy</b> is a powerhouse of innovation and impact, committed to
            excellence in EdTech, digital marketing, and technology solutions.
            Our approach is rooted in providing personalized, effective, and
            scalable services that make a real difference. Whether it’s helping
            students reach their full potential or enabling businesses to thrive
            in the digital landscape, we are here to drive meaningful change.
            <br />
            
            Together, we’re building a legacy—transforming lives, empowering
            dreams, and creating opportunities for all. Join us as we embark on
            this journey to shape a brighter future.
          </p>
        </div>
        <div className="mt-10 ">
          <DirectionAwareButton
            title={"Contact Us"}
            color={"bg-transprent"}
            hov_color={"bg-secondary"}
            border="border-[1px] border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
