import HeroSection from "@/components/Hero";
import ContactUs1 from "@/assets/CONTACT-US/1.jpg";
import Contact from "../Homepage/Contact";

const ContactUs = () => {
  return (
    <>
      <section className="h-screen">
        <HeroSection
          title="Travel Fair Form"
          subtitle="Your next adventure starts here, just fill in a few details."
          subtext="Don’t miss out on limited-time offers and special packages."
          ctaText="Get Started"
          ctaHref="#contact"
          background={{
            type: "image",
            src: ContactUs1,
            alt: "Beautiful travel destination",
          }}
        />
      </section>
      <section>
        <Contact />
      </section>
      <section></section>
    </>
  );
};

export default ContactUs;
