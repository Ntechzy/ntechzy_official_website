"use client";
import React from "react";
import DirectionAwareButton from "../shared/Button";
import { motion } from "framer-motion";
const Nikhilsir = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-start gap-10 md:mt-[60px] p-5 ">
      
      <div>
        <div>
          <motion.h1
            className="md:text-[32px] text-[20px] font-[600] mb-1"
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            initial={{ opacity: 0, x: 50 }}
          >
           About Our Founder & CEO: Mr. Nikhil Sachan

          </motion.h1>
          <p className="md:w-[650px] md:text-[18px] text-[14px] md:leading-[28px] text-start text-[#9da5b4]  ">
          <b>Mr. Nikhil Sachan</b>, Founder and CEO of <b>Ntechzy</b>, and Managing Director of <b>Careerkick Services</b> , is a trailblazing entrepreneur with a vision to create a <b>₹1000 crore EdTech empire</b>  dedicated to uplifting middle-class students across India. His mission is to build a transformative educational platform that delivers quality education and the tools necessary for students to achieve their aspirations, breaking barriers and fostering success.

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
      <div className="rounded-3xl">
        <img
          src="/about_us_image_02.avif"
          alt="loading..."
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Nikhilsir;
