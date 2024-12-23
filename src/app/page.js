import Blog from "@/components/Blog";
import ChooseUs from "@/components/ChooseUs";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/hero/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (

    <div className={"p-2"}>
      <HeroSection />
      <Services />
      <ChooseUs />
      <div className="md:block hidden">
        <Blog />
      </div>
      <Team />
      <Testimonials />
      <FAQ />

    </div>

  );
}
