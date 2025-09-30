import HeroSection from "@/components/Hero";
import Contact from "./Contact";
import Introduction from "../../components/Introduction";
import backgroundMp4 from "@/assets/HOME/background.mp4";
import ImageStackScroll from "../ScrollSection";

const Homepage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Welcome to Holiday Tour and Travel"
        subtitle="We plan and manage travel experiences for individuals, groups, and companies."
        subtext="Discover breathtaking destinations and the charm of every season."
        ctaText="Start Exploring"
        ctaHref="#introduction"
        background={{
          type: "video",
          sources: [{ src: backgroundMp4, type: "video/mp4" }],
        }}
      />

      {/* Introduction Section */}
      <section id="introduction">
        <Introduction />
      </section>

      {/* Inspiration Section - Image Stack Scroll */}
      <ImageStackScroll />

      {/* Contact Section */}
      <Contact />
      {/* Footer Section */}
    </>
  );
};

export default Homepage;
