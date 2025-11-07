import BackedBy from "@/components/BackedBy";
import Hero from "@/components/Hero";
import LastSection from "@/components/LastSection";
import Podcasts from "@/components/Podcasts";
import Press from "@/components/Press";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col py-15 gap-10">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <BackedBy />
      <Press />
      <Podcasts />
      <Image
        src={"/assets/images/stars6.png"}
        width={30}
        height={30}
        alt="stars"
        className="m-auto w-15"
      />
      <LastSection />
    </div>
  );
}
