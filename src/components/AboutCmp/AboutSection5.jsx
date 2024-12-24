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
      <div className="flex flex-row justify-between py-[72px] md:mt-[160px]">
        <div>
          <AnimatedStretchedHeading
            titles={["Our value that can given to you"]}
            topBarTitle={"Our Value"}
            cls={"green-polygon"}
          />
        </div>
        <div className="w-[210px] h-[119px] md:block hidden">
            <img src="/c1.png" alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 p-5 gap-4 md:mt-[90px]  ">
      {data.map((item,i)=>{
        return(
            <div key={i} className="px-[24px] py-[20px] border-[#333333] border-[1px]  rounded-2xl bg-custom-gradient2">
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
