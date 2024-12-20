import HeroSection from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import ChooseUs from "@/components/ChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Team />
      <Testimonials />
      <ChooseUs />
    </div>
  );
}
