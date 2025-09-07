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
  scrollDirection: "up" | "down";
};

const InspirationHero = ({
  style,
  currentSection,
  numbering,
  scrollDirection,
}: InspirationHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power1.out" },
      });

      // Determine the animation direction
      const yDirection = scrollDirection === "down" ? 50 : -50;

      tl.fromTo(
        ".third-text",
        { opacity: 0, yPercent: yDirection },
        { opacity: 1, yPercent: 0, duration: 0.7 }
      )
        .fromTo(
          "h1",
          { opacity: 0, yPercent: yDirection },
          { opacity: 1, yPercent: 0, duration: 0.7 },
          "<0.1"
        )
        .fromTo(
          "p.fourth-text",
          { opacity: 0, yPercent: yDirection },
          { opacity: 1, yPercent: 0, duration: 0.7 },
          "<0.1"
        )
        .fromTo(
          ".numbering",
          { opacity: 0 },
          { opacity: 1, duration: 0.7 },
          "<0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [currentSection.id, scrollDirection]);

  return (
    <div ref={containerRef} className="h-screen w-full">
      <section
        style={style}
        className="h-screen flex items-center px-8 md:px-32 relative"
      >
        <div className="grid md:grid-cols-3 gap-2 text-white z-10">
          <p className="third-text">Inspiration</p>
          <div className="col-span-2 flex flex-col md:gap-6 gap-2">
            <h1 className="first-text">{currentSection.title}</h1>
            <p className="fourth-text max-w-md">{currentSection.description}</p>
          </div>
          {numbering && (
            <div className="absolute bottom-10 right-20 fourth-text numbering">
              {sections.findIndex((s) => s.id === currentSection.id) + 1}/
              {sections.length}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default InspirationHero;
