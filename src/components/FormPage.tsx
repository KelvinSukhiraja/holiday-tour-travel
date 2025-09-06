import ContactForm from "@/components/ContactForm";
import TravelForm from "./TravelForm";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type formPageProp = {
  bgImage: string;
  title: string;
  subtitle: string;
  formType: string;
};

const FormPage = ({ bgImage, title, subtitle, formType }: formPageProp) => {
  const travelFormRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "#travel-form-img",
        { yPercent: -30 },
        {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: travelFormRef.current,
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
          trigger: travelFormRef.current,
          start: "top 80%",
        },
      });

      tl.from("#travel-form-header h1, #travel-form-header p", {
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

      tl.from(
        "#travel-form > *",
        {
          x: 10,
          y: 20,
          stagger: 0.1,
        },
        "<0.3"
      );
    },
    { scope: travelFormRef, revertOnUpdate: true }
  );
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 h-full"
      ref={travelFormRef}
      id="form"
    >
      {/* Left side with the image */}
      <div className="relative overflow-hidden w-full h-full">
        <picture>
          <source srcSet={bgImage} type="image/webp" />
          <source srcSet={bgImage} type="image/jpeg" />
          <img
            src={bgImage}
            alt="Contact Us"
            id="travel-form-img"
            className="absolute inset-0 w-full h-[140%] object-cover object-bottom"
            loading="lazy"
          />
        </picture>
      </div>

      {/* Right side with the form */}
      <div className="px-8 md:px-20 py-10 flex flex-col justify-center items-center w-full gap-5 bg-white-a text-A overflow-y-auto">
        <div
          className="flex flex-col gap-3 text-center"
          id="travel-form-header"
        >
          <h1 className="first-text">{title}</h1>
          <p className="fourth-text">{subtitle}</p>
        </div>
        <div id="travel-form">
          {formType === "Contact" ? <ContactForm /> : <TravelForm />}
        </div>
      </div>
    </section>
  );
};

export default FormPage;
