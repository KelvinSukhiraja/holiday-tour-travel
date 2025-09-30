import HeroSection from "@/components/Hero";
import Services from "./Services";
import Clients from "./Clients";
import Introduction from "../../components/Introduction";
import AboutBg1 from "@/assets/ABOUT-US/1.jpg";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <>
      <section className="min-h-screen">
        <HeroSection
          title="About Holiday Tour and Travel"
          subtitle="HOLIDAY aims to provide clients with a seamless and enjoyable vacation experience."
          subtext="We specializes in creating travel experiences for individuals, groups, and businesses."
          ctaText="Start Exploring"
          ctaHref="#introduction"
          background={{
            type: "image",
            src: AboutBg1,
            alt: "Beautiful travel destination",
          }}
        />
      </section>
      {/* Second Section - Intro & Services */}
      <section className="flex flex-col">
        <Introduction />
        <Services />
      </section>
      {/* Third Section - Clients */}
      <Clients />
      {/* Footer Section - Clients */}
    </>
  );
};

export default AboutUs;
