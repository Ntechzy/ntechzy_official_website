import React from "react";

import AnimatedStretchedHeading from "../shared/AnimatedStretchedHeading";

const AboutSection5 = () => {
    const data=[
        {
            title:"A Visionary Leader",
            desc:"As a dynamic entrepreneur, mentor, influencer, and career coach, Mr. Sachan established Careerkick Services in 2017 to provide career counseling and consulting services for 10+2 students aspiring to excel in engineering, medical, law, and management fields. His passion for education stems from personal experiences, including his sister's challenges in securing college admission despite excelling in competitive exams due to her rural background. This inspired him to address systemic disparities and champion equal opportunities for students from all walks of life."
        },
        {
            title:"A Multifaceted Innovator",
            desc:"Beyond his commitment to education, Mr. Sachan drives Ntechzy as a leading force in digital marketing, social media management, web development, college branding, political campaigning, and business development. His initiatives extend to providing engineering students with internship opportunities that enhance their practical skills and industry readiness."

        },
        {
            title:"The Journey of Empowerment",
            desc:"With his unwavering dedication, Mr. Sachan is redefining what it means to be a leader in the education and technology sectors. He embodies a relentless pursuit of inclusivity, growth, and transformation, guiding countless students and professionals toward fulfilling careers and brighter futures."
        }
    ]
  return (
    <div>
      <div className="flex flex-row justify-between mt-16 md:mt-0 px-10  flex-wrap">
       {/* <div className="flex justify-between w-full">
       <div className="w-full mb-9">
          <AnimatedStretchedHeading
            titles={["Our value that can given","to you"]}
            topBarTitle={"Our Value"}
            cls={"green-polygon"}
            clss="md:!text-[36px] !text-[18px]"
          />
        </div>
        <div className="w-[210px] h-[119px] md:block hidden">
            <img src="/c1.png" alt="Loading..." />
        </div>
       </div> */}
      </div>
      <div className="grid md:grid-rows-3 grid-cols-1 md:p-5 px-5 gap-4 md:mt-[40px] mb-24 w-full  ">
      {data.map((item,i)=>{
        return(
            <div  className="px-[24px] py-[20px] border-[#333333] border-[1px] rounded-2xl bg-custom-gradient2" key={i}>
            <h1 className="mb-2 text-[24px] font-[700] ">{item.title}</h1>
            <p className="text-mixed">{item.desc}</p>
        </div>
        )
      })}
       
      </div>
    </div>
  );
};

export default AboutSection5;
