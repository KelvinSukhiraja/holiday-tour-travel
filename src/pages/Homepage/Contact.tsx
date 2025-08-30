import ContactForm from "@/components/ContactForm";
import contactJpg from "@/assets/CONTACT-US/2.jpg";
// import contactWebp from "@/assets/CONTACT-US/2.webp";

const Contact = () => {
  return (
    <section className="h-screen grid grid-cols-2 relative">
      <picture>
        {/* <source srcSet={contactWebp} type="image/webp" /> */}
        <source srcSet={contactJpg} type="image/jpeg" />
        <img
          src={contactJpg}
          alt="Contact Us"
          className="w-full h-screen object-cover object-bottom"
          loading="lazy"
        />
      </picture>
      <div className="px-8 md:px-32 flex flex-col justify-center items-center w-full gap-5 bg-white-a text-A">
        <div className="flex flex-col gap-3">
          <h1 className="first-text">Reach Out to Explore</h1>
          <p className="fourth-text">
            From tranquil getaways to thrilling adventures, we're here to help
            craft a journey made just for you. Reach out and let’s start
            planning your next unforgettable escape.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
