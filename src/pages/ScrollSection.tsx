import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sections } from "@/lib/utils";
import InspirationHero from "@/components/InspirationHero";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ExploreScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const lastSectionRef = useRef(sections[0].id);

  // Preload images
  useEffect(() => {
    sections.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  // Set up ScrollTriggers for each individual section
  // This useEffect now runs only once on mount
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            if (lastSectionRef.current !== sections[index].id) {
              setCurrentSection(sections[index]);
              setScrollDirection("down");
              lastSectionRef.current = sections[index].id;
            }
          },
          onLeaveBack: () => {
            if (
              index > 0 &&
              lastSectionRef.current !== sections[index - 1].id
            ) {
              setCurrentSection(sections[index - 1]);
              setScrollDirection("up");
              lastSectionRef.current = sections[index - 1].id;
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animate image transitions with GSAP
  // This useEffect will run every time currentSection.id changes, and only then.
  useEffect(() => {
    const images = containerRef.current?.querySelectorAll(".section-image");
    if (!images) return;

    images.forEach((img) => {
      const isActive =
        img.getAttribute("data-section-id") === currentSection.id;
      gsap.to(img, {
        opacity: isActive ? 1 : 0,
        duration: 0.7,
        ease: "power2.out",
      });
    });
  }, [currentSection.id]);

  return (
    <div
      ref={containerRef}
      className="relative h-[500vh] snap-y snap-mandatory"
    >
      {/* Sticky background & hero */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {sections.map((s) => (
          <img
            key={s.id}
            data-section-id={s.id}
            src={s.image}
            alt={s.name}
            className="section-image absolute top-0 left-0 w-full h-full object-cover opacity-0"
          />
        ))}
        <InspirationHero
          currentSection={currentSection}
          numbering={true}
          scrollDirection={scrollDirection}
        />
      </div>

      {/* Invisible snapping sections (drives scroll snapping) */}
      {sections.map((s, index) => (
        <div
          key={s.id}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          className="h-screen snap-start"
        />
      ))}
    </div>
  );
};

export default ExploreScroll;
