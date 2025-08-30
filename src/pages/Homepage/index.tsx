import HeroSection from "@/components/Hero";
import ScrollSection from "../ScrollSection";
import Contact from "./Contact";
import Introduction from "../../components/Introduction";
// import backgroundWebm from "@/assets/HOME/background.webm";
import backgroundMp4 from "@/assets/HOME/background.mp4";


const Homepage = () => {
  return (
    <>
      <section
        className="h-fit"
        // className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth "
      >
        <HeroSection
          title="Welcome to Holiday Tour and Travel"
          subtitle="We plan and manage travel experiences for individuals, groups, and companies."
          subtext="Discover breathtaking destinations and the charm of every season."
          ctaText="Start Exploring"
          ctaHref="#introduction"
          background={{
            type: "video",
            sources: [
              // { src: backgroundWebm, type: "video/webm" },
              { src: backgroundMp4, type: "video/mp4" },
            ],
          }}
        />

        {/* Second Section - Intro*/}
        <Introduction />

        {/* Third Section - Inspiration*/}
        <ScrollSection />
      </section>

      {/* Second Section - Contact */}
      <section>
        <Contact />
      </section>
    </>
  );
};

export default Homepage;
