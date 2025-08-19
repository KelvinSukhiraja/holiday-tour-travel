import FormPage from "@/components/FormPage";
import HeroSection from "@/components/Hero";

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
            src: "/src/assets/TRAVEL-FAIR/1.jpg",
            alt: "Beautiful travel destination",
          }}
        />
      </section>
      <section>
        <FormPage
          bgImage="/src/assets/TRAVEL-FAIR/2.jpg"
          title="Travel Fair Form"
          subtitle="Complete the form to discover curated destinations and packages."
          formType="Travel"
        />
      </section>
    </>
  );
};

export default TravelFair;
