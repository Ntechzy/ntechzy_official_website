"use client"
import Slider from "../hero/Slider";
import AnimatedStretchedHeading from "../shared/AnimatedStretchedHeading";


const AboutSection6 = () => {
  return (
   <div className=" md:h-[80vh]  ">
   <div className="absolute md:block hidden ">
   <img src="/aboutbg.png" alt="" />
   </div>
   <div className="flex relative md:w-[50%] w-[90%] md:m-auto md:ml-[500px] md:pt-9 items-center justify-center">
     <AnimatedStretchedHeading
        titles={["Our commitment to earning clients confident worldwide"]}
        topBarTitle={"Our Clients"}
        cls={"green-polygon"}

      />
       </div>
    <div className="md:-mb-[1px] -mb-[100px]">
  <Slider qyt="both" />
    </div>
    </div>
  );
};

export default AboutSection6;
