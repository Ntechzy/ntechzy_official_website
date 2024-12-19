import Image from "next/image";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Team/>
        <Testimonials/>
        <Services/>
    </div>
  );
}
