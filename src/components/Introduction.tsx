import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const introRef = useRef(null);

  useGSAP(
    () => {
      // Create a timeline for the introduction animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%", // Animation starts when the top of the section is 80% from the top of the viewport
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
        defaults: {
          ease: "power2.out",
          opacity: 0,
        },
      });

      // Animate the "Introduction" label
      tl.from("#intro-label", { y: 20, duration: 1 });

      // Animate the main heading
      tl.from("#intro-heading", { y: 20, duration: 1 }, "<0.2");

      // Animate the paragraph
      tl.from("#intro-paragraph", { y: 20, duration: 1 }, "<0.2");
    },
    { scope: introRef }
  );

  return (
    <section
      id={"introduction"}
      ref={introRef}
      className="snap-start h-[60vh] md:h-[80vh] flex items-center px-8 md:px-32"
    >
      <div className="grid md:grid-cols-4 gap-2 text-A w-full">
        <p id="intro-label" className="third-text">
          Introduction
        </p>
        <div className="col-span-3 flex flex-col md:gap-6 gap-2">
          <h1 id="intro-heading" className="first-text max-w-lg md:max-w-2xl">
            HOLIDAY Tour and Travel is a company that specializes in planning,
            organizing, and managing travel and holiday experiences for
            individuals, groups, and corporations.
          </h1>
          <p id="intro-paragraph" className="fourth-text max-w-xs md:max-w-md">
            With a strong focus on delivering well-coordinated travel packages
            that include accommodation, transportation, tour activities, and
            other related services, HOLIDAY aims to provide clients with a
            seamless and enjoyable vacation experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
