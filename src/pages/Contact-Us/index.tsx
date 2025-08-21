import Footer from "@/components/Footer";
import FormPage from "@/components/FormPage";
import HeroSection from "@/components/Hero";

const ContactUs = () => {
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
            src: "/src/assets/CONTACT-US/1.jpg",
            alt: "Beautiful travel destination",
          }}
        />
      </section>
      <section>
        <FormPage
          bgImage="/src/assets/CONTACT-US/2.jpg"
          title="Travel Fair Form"
          subtitle="Complete the form to discover curated destinations and packages."
          formType="Contact"
        />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default ContactUs;
