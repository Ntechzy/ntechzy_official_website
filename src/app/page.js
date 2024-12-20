import ChooseUs from "@/components/ChooseUs";
import HeroSection from "@/components/hero/Hero";
import Services from "@/components/Services";
import SmoothScroll from "@/components/shared/SmoothScroll";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (

    <div>
      {/* <SmoothScroll> */}
      <HeroSection />
      <Services />
      <ChooseUs />
      <Team />
      <Testimonials />
      {/* </SmoothScroll> */}
    </div>

  );
}
