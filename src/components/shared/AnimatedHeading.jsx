"use client";
import { motion } from "motion/react";

const AnimatedHeading = ({
  topBarTitle,
  title,
  description,
  subTitle,
  polyType = "green-polygon",
}) => {
  return (
    <div className={"flex flex-col items-center gap-10 md:gap-8 "}>
      <p
        className={`${polyType} flex items-center gap-2 font-[600] text-xs md:text-base`}
      >
        {topBarTitle}
      </p>
      <div className={"flex flex-col gap-1"}>
        <motion.p
          className={"text-[20px] md:text-[48px] font-[600]  text-center"}
          initial={{ opacity: 0, transform: "translateY(2rem)" }}
          whileInView={{
            transform: "translateY(-2rem)",
            opacity: 1,
            transition: "all 5s",
          }}
        >
          {title}
        </motion.p>
        {subTitle && (
            <motion.p
            className={"text-[20px] md:text-[48px] font-[600]  text-center  "}
            initial={{ opacity: 0, transform: "translateY(2rem)" }}
            whileInView={{
              transform: "translateY(-2rem)",
              opacity: 1,
              transition: "all 10s",
            }}
          >
            {subTitle}
          </motion.p>
        )}
        {description && (
          <motion.p
            className={"text-[9px] md:text-[18px] md:w-[839px] font-[500] text-[#9da5b4]  text-center  "}
            initial={{ opacity: 0, transform: "translateY(2rem)" }}
            whileInView={{
              transform: "translateY(-2rem)",
              opacity: 1,
              transition: "all 10s",
            }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default AnimatedHeading;
