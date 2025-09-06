import { sections } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type SectionType = (typeof sections)[number];

type InspirationHeroProps = {
  style?: React.CSSProperties;
  currentSection: SectionType;
  numbering?: boolean;
};

const InspirationHero = ({
  style,
  currentSection,
  numbering,
}: InspirationHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", // when top of section hits 70% viewport
          toggleActions: "play none none reset",
          // play on enter, reset when leaving (can adjust)
        },
        defaults: { ease: "power1.inOut", opacity: 0 },
      });

      tl.from("h1, p", {
        yPercent: 30,
        duration: 0.7,
        stagger: 0.1,
      }).from(".numbering", {
        opacity: 0,
        duration: 0.7,
        yPercent: -30,
        xPercent: -30,
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full">
      <section
        style={style}
        className="h-screen flex items-center px-8 md:px-32 relative"
      >
        <div className="grid md:grid-cols-3 gap-2 text-white z-10">
          <p className="third-text">Inspiration</p>
          <div
            key={currentSection.id}
            className="col-span-2 flex flex-col md:gap-6 gap-2"
          >
            <h1 className="first-text">{currentSection.title}</h1>
            <p className="fourth-text max-w-md">{currentSection.description}</p>
          </div>
          {numbering ? (
            <div className="absolute bottom-10 right-20 fourth-text numbering">
              {sections.findIndex((s) => s.id === currentSection.id) + 1}/
              {sections.length}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default InspirationHero;
