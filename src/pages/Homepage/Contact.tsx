import ContactForm from "@/components/ContactForm";
import contactJpg from "@/assets/CONTACT-US/2.jpg";

const Contact = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative">
      {/* Left side image */}
      <picture>
        <source srcSet={contactJpg} type="image/jpeg" />
        <img
          src={contactJpg}
          alt="Contact Us"
          className="w-full h-[300px] md:h-screen object-cover object-bottom"
          loading="lazy"
        />
      </picture>

      {/* Right side content */}
      <div className="px-6 sm:px-12 md:px-16 lg:px-32 py-10 flex flex-col justify-center items-center w-full gap-6 bg-white-a text-A">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h1 className="first-text text-2xl sm:text-3xl md:text-4xl">
            Reach Out to Explore
          </h1>
          <p className="fourth-text text-sm sm:text-base md:text-lg">
            From tranquil getaways to thrilling adventures, we're here to help
            craft a journey made just for you. Reach out and let’s start
            planning your next unforgettable escape.
          </p>
        </div>
        <div className="w-full max-w-md">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
