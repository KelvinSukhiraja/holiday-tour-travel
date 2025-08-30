import Footer from "@/components/Footer";
import FormPage from "@/components/FormPage";
import HeroSection from "@/components/Hero";
import ContactUs1 from "@/assets/CONTACT-US/1.jpg"
import ContactUs2 from "@/assets/CONTACT-US/2.jpg"

const ContactUs = () => {
  return (
    <>
      <section className="min-h-screen">
        <HeroSection
          title="Travel Fair Form"
          subtitle="Your next adventure starts here, just fill in a few details."
          subtext="Don’t miss out on limited-time offers and special packages."
          ctaText="Get Started"
          ctaHref="#form"
          background={{
            type: "image",
            src: ContactUs1,
            alt: "Beautiful travel destination",
          }}
        />
      </section>
      <section>
        <FormPage
          bgImage={ContactUs2}
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
