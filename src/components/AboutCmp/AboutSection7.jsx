"use client";
import React from "react";
import AnimatedStretchedHeading from "../shared/AnimatedStretchedHeading";
import { ImQuotesLeft } from "react-icons/im";
import { useInView, motion } from "framer-motion";

const AboutSection7 = () => {
  const itemVariants = {
    hidden: { transform: "translateX(100%)" },
    show: { transform: "translateX(0)" },
  };
  return (
    <div className="mt-[160px] md:pr-[62px] md:pl-[52px] overflow-x-hidden flex md:flex-row flex-col-reverse gap-20 w-full">
      <div className="md:w-[645px] -mt-6">
        <div className="">
          <AnimatedStretchedHeading
            titles={[
              "Embark on a journey with the rich",
              "tapestry of culture",
            ]}
            topBarTitle={"Our Culture"}
            cls={"green-polygon"}
            clss="md:!text-[36px] !text-[18px]"
          />
        </div>

        <div className="text-[#9da5b4] text-[18px] leading-[28px] pt-7 md:pl-4 px-6">
          As you delve into our world, you'll uncover a mosaic of traditions,
          values, and experiences that shape our unique identity. From the way
          we collaborate and communicate to the celebrations we share, every
          aspect of our culture reflects our commitment
        </div>
        <div className=" text-[#ffffff] text-[18px] md:w-[653px] w-[290px] m-auto leading-[28px] rounded-2xl mt-7 ml-4 bg-[#0c5af5] pl-4">
          <div className="px-[15px] py-[20px]">
            <svg width="0" height="0">
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#BBD1FE", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#0558FF", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
            </svg>
            <ImQuotesLeft
              className="w-[48px] h-[48px]  "
              style={{
                fill: "url(#gradient1)", // Apply gradient as fill
              }}
            />
            <div className="mt-[20px] md:mb-[15px] md:text-[24px] text-[18px] font-semibold ">
              Together, we're not just building a company; we're creating a
              legacy that reflects the very best of who we are and what we stand
              for."
            </div>
            <div className="flex justify-end items-end">
              <div className="flex flex-col text-[14px]  ">
                <div className="text-end pr-2">Tom Ford</div>
                <div className="text-end p-1 ">Tom Ford Co - Founder & CEO</div>
              </div>
              <div className="rounded-full w-[48px] h-[48px]">
                <img
                  src="https://demo.7iquid.com/tecko/wp-content/uploads/elementor/thumbs/testimonial_img_01-qxa2vvyx400zbj9ehx1qp4esuodyaeju8yhpdn1t60.avif"
                  alt=""
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        className="transition-all duration-500 ease-in-out overflow-x-hidden ml-2 md:mt-[50px]  px-[15px]"
      >
        <img
          src="https://demo.7iquid.com/tecko/wp-content/uploads/elementor/thumbs/aboutusImage01-qxa2vwwwhnpr4rvn69w98zsznifx49m7pxs5nfuiuu.avif"
          alt="Image"
          className="rounded-3xl"
        />
      </motion.div>
    </div>
  );
};

export default AboutSection7;
