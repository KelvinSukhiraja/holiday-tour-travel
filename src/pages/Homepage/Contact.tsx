import ContactForm from "@/components/ContactForm";
import contactJpg from "@/assets/CONTACT-US/2.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "#contact-img",
        { yPercent: -30 },
        {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      const tl = gsap.timeline({
        defaults: {
          opacity: 0,
          ease: "power2.out",
          duration: 1.3,
        },
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
      });

      tl.from("#contact-header h1, #contact-header p", {
        y: 20,
        stagger: 0.2,
      });

      tl.from(
        "#contact-form > *",
        {
          y: 20,
          stagger: 0.1,
        },
        "<0.3"
      );
    },
    { scope: contactRef, revertOnUpdate: true }
  );

  return (
    <section
      ref={contactRef}
      id="contact"
      className="md:h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-clip"
    >
      {/* Left side image */}
      <div className="relative overflow-hidden h-[50vh] md:h-screen">
        <img
          src={contactJpg}
          alt="Contact Us"
          id="contact-img"
          className="absolute inset-0 w-full h-[140%] object-cover object-bottom"
          loading="lazy"
        />
      </div>

      {/* Right side content */}
      <div className="px-6 sm:px-12 md:px-16 lg:px-32 py-10 flex flex-col justify-center items-center w-full gap-6 bg-white-a text-A">
        <div
          className="flex flex-col gap-4 text-center md:text-left"
          id="contact-header"
        >
          <h1 className="first-text">Reach Out to Explore</h1>
          <p className="fourth-text">
            From tranquil getaways to thrilling adventures, we're here to help
            craft a journey made just for you. Reach out and let’s start
            planning your next unforgettable escape.
          </p>
        </div>
        <div className="w-full max-w-md" id="contact-form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
