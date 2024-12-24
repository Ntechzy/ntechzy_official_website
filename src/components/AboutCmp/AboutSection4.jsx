import Counter from "@/animations/Counter";
import React from "react";

const AboutSection4 = () => {
    const data = [
        {
          id: 1,
          value1: 16,
          value2: "+",
          title: "Years of Experience",
          subTitle:
            "We bring a wealth of experience honed through years of hands-on involvement, continuous learning, and adaptation to evolving trends and challenges",
        },
        {
          id: 2,
          value1: 12,
          value2: "K",
          title: "Projects Completed",
          subTitle:
            "From bustling metropolitan cities to remote rural communities, our commitment to excellence and innovation has driven us to deliver exceptional results",
        },
        {
          id: 3,
          value1: 287,
          value2: "+",
          title: "Awards Achieved",
          subTitle:
            "These accolades stand as a testament to our unwavering commitment to excellence, innovation",
        },
        {
          id: 4,
          value1: 65,
          value2: "%",
          title: "Returned Clients",
          subTitle:
            "This statistic speaks volumes about the trust and satisfaction our clients have in our services",
        },
      ];
      
  return (
  
    <div className=" mt-40 p-5 grid md:grid-cols-4 grid-cols-1 gap-9 ">
        {data.map((item,i)=>{
            return(
                <div key={i}>
      <div className="flex md:w-[300px] ">
        <div className="md:text-[64px] text-[25px]"><Counter value={item.value1} /></div>
        <div className="md:text-[48px] text-[25px] text-secondary">{item.value2}</div>
      </div>
      <div className="md:text-[24px] text-[16px] border-b border-gray-700 pb-2">
      {item.title}
      </div>

      <div className="text-[14px] pt-4 text-[#7e8695]">
      {item.subTitle}
      </div>
      </div>
            )
        })}
    </div>
    
    );
};

export default AboutSection4;
