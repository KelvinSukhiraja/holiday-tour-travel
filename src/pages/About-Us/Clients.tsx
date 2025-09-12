import { AccordionSection } from "@/components/AccordionSection";
import AboutBg2 from "@/assets/ABOUT-US/2.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Clients = () => {
  const clientRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "#client-img",
        { yPercent: -30 },
        {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: clientRef.current,
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
          trigger: clientRef.current,
          start: "top 80%",
        },
      });

      tl.from("#client-header h1, #client-header p", {
        y: 20,
        stagger: 0.2,
      });

      tl.from(
        "#accordion > *",
        {
          y: 20,
          stagger: 0.1,
        },
        "<0.3"
      );
    },
    { scope: clientRef, revertOnUpdate: true }
  );
  return (
    <section
      className="md:h-screen grid md:grid-cols-2 relative"
      ref={clientRef}
    >
      <div className="relative overflow-hidden h-[50vh] md:h-screen">
        <img
          src={AboutBg2}
          alt="Contact Us"
          id="client-img"
          className="absolute inset-0 w-full h-[140%] object-cover object-center md:object-bottom"
          loading="lazy"
        />
      </div>

      <div className="px-8 md:px-32 py-10 flex flex-col justify-center items-center w-full gap-5 bg-white-a text-A">
        <div className="flex flex-col gap-3" id="client-header">
          <h1 className="first-text">Corporate Clients</h1>
          <p className="fourth-text">
            We specialize in organizing seamless and impactful MICE events
            tailored to your goals, from corporate meetings and incentive trips
            to large-scale conferences and exhibitions.
          </p>
        </div>
        <div id="accordion" className="w-full">
          <AccordionSection />
        </div>
      </div>
    </section>
  );
};

export default Clients;
