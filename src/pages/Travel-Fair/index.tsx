import FormPage from "@/components/FormPage";
import HeroSection from "@/components/Hero";
import TravelFair1 from "@/assets/TRAVEL-FAIR/1.jpg";
import TravelFair2 from "@/assets/TRAVEL-FAIR/2.jpg";
import Footer from "@/components/Footer";

const TravelFair = () => {
  return (
    <>
      <section className="min-h-screen">
        <HeroSection
          title="Travel Fair Form"
          subtitle="Your next adventure starts here,
just fill in a few details."
          subtext="Don’t miss out on limited-time offers and special packages."
          ctaText="Get Started"
          ctaHref="#form"
          background={{
            type: "image",
            src: TravelFair1,
            alt: "Beautiful travel destination",
          }}
        />
      </section>
      <section>
        <FormPage
          bgImage={TravelFair2}
          title="Travel Fair Form"
          subtitle="Complete the form to discover curated destinations and packages."
          formType="Travel"
        />
      </section>
      {/* Footer Section - Clients */}
    </>
  );
};

export default TravelFair;
