import ChooseUs from "@/components/ChooseUs";
import { Footer } from "@/components/footer/footer";
import HeroSection from "@/components/hero/Hero";
import Services from "@/components/Services";
import SmoothScroll from "@/components/shared/SmoothScroll";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import SoothingScroll from "@/components/shared/SoothingScroll";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (

    <div>
      {/* <SmoothScroll> */}
      <HeroSection />
      <Services />
      <ChooseUs />
      <Team />
      <Testimonials />
      <FAQ />
      <Footer />
      {/*<SmoothScroll/>*/}
    </div>

  );
}
