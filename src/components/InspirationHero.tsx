import { useEffect, useRef } from "react";
import gsap from "gsap";
import { sections } from "@/lib/utils";

type SectionType = (typeof sections)[number];

type InspirationHeroProps = {
  currentSection: SectionType;
  numbering?: boolean;
  style?: React.CSSProperties;
};

const InspirationHero = ({
  currentSection,
  numbering,
  style,
}: InspirationHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevSectionRef = useRef<SectionType | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      // Fade out previous section
      if (prevSectionRef.current) {
        timeline.to("#head, #subhead, #number1", {
          opacity: 0,
          y: -20,
          duration: 0.3,
          stagger: 0.05,
        });
      }

      // Fade in current section
      timeline.fromTo(
        "#head, #subhead, #number1",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05 }
      );
    }, containerRef);

    prevSectionRef.current = currentSection;

    return () => ctx.revert();
  }, [currentSection]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full flex items-center px-8 md:px-32 py-10 md:py-16 pointer-events-none "
      style={style}
    >
      <div className="grid md:grid-cols-3 gap-2 text-white z-10 p-5">
        <p className="third-text">Inspiration</p>
        <div className="col-span-2 flex flex-col md:gap-6 gap-2">
          <h1 className="first-text" id="head">
            {currentSection.title}
          </h1>
          <p className="fourth-text max-w-md" id="subhead">
            {currentSection.description}
          </p>
        </div>
        {numbering && (
          <div className="absolute bottom-10 right-20 fourth-text numbering flex">
            <p id="number1">
              {sections.findIndex((s) => s.id === currentSection.id) + 1}
            </p>
            /{sections.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default InspirationHero;
