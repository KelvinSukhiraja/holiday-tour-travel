import { AccordionSection } from "@/components/AccordionSection";

const Clients = () => {
  return (
    <section className="h-screen grid md:grid-cols-2 relative">
      <picture className="hidden md:flex">
        <source srcSet={"/src/assets/ABOUT-US/2.jpg"} type="image/webp" />
        <source srcSet={"/src/assets/ABOUT-US/2.jpg"} type="image/jpeg" />
        <img
          src={"/src/assets/ABOUT-US/2.jpg"}
          alt="Contact Us"
          className="w-full h-screen object-cover object-center"
          loading="lazy"
        />
      </picture>
      <div className="px-8 md:px-32 flex flex-col justify-center items-center w-full gap-5 bg-white-a text-A">
        <div className="flex flex-col gap-3">
          <h1 className="first-text">Corporate Clients</h1>
          <p className="fourth-text">
            We specialize in organizing seamless and impactful MICE events
            tailored to your goals, from corporate meetings and incentive trips
            to large-scale conferences and exhibitions.
          </p>
        </div>
        <AccordionSection />
      </div>
    </section>
  );
};

export default Clients;
