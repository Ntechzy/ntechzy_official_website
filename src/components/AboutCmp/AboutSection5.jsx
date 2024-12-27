import React from "react";

import AnimatedStretchedHeading from "../shared/AnimatedStretchedHeading";

const AboutSection5 = () => {
    const data=[
        {
            title:"Innovation",
            desc:"Constantly pushing the boundaries of technology to develop solutions that solve complex problems"
        },
        {
            title:"Collaboration",
            desc:"Fostering a culture of teamwork, knowledge-sharing, and open communication to leverage diverse perspectives"
        },
        {
            title:"User-Centricity",
            desc:"Placing the needs and experiences of users at the forefront of product development, ensuring intuitive interfaces"
        }
    ]
  return (
    <div>
      <div className="flex flex-row justify-between -mt-16  md:mt-[160px] flex-wrap">
       <div className="flex justify-between w-full">
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
       </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:p-5 px-5 gap-4 md:mt-[40px] mb-24 w-full  ">
      {data.map((item,i)=>{
        return(
            <div  className="px-[24px] py-[20px] border-[#333333] border-[1px]  rounded-2xl bg-custom-gradient2" key={i}>
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
