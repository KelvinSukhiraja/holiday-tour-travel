import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sections } from "@/lib/utils";
import InspirationHero from "@/components/InspirationHero";

const ExploreScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(sections[0]);

  // Preload images
  useEffect(() => {
    sections.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  // Setup GSAP ScrollTrigger
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const totalSections = sections.length;

    // Create ScrollTrigger for section changes
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: false,
      onUpdate: (self) => {
        const progress = self.progress;
        const sectionIndex = Math.round(progress * (totalSections - 1));
        const clampedIndex = Math.max(
          0,
          Math.min(sectionIndex, totalSections - 1)
        );

        if (
          sections[clampedIndex] &&
          sections[clampedIndex].id !== currentSection.id
        ) {
          setCurrentSection(sections[clampedIndex]);
        }
      },
    });

    // Cleanup function
    return () => {
      scrollTriggerInstance.kill();
    };
  }, [currentSection.id]);

  // Animate image transitions with GSAP
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
      className="relative h-[700vh] snap-y snap-mandatory"
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
        {/* The key prop is added here to trigger a re-mount on section change */}
        <InspirationHero
          key={currentSection.id}
          currentSection={currentSection}
          numbering={true}
        />
      </div>

      {/* Invisible snapping sections (drives scroll snapping) */}
      {sections.map((s) => (
        <div key={s.id} className="h-screen snap-start" />
      ))}
    </div>
  );
};

export default ExploreScroll;
