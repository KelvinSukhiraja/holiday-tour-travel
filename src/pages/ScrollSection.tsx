import { useState, useEffect } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { sections } from "@/lib/utils";
import InspirationHero from "@/components/InspirationHero";

const ExploreScroll = () => {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState(sections[0]);

  // Map scroll progress into section index
  const sectionIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, sections.length - 1]
  );

  // Preload images
  useEffect(() => {
    sections.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  // Update section on scroll
  useMotionValueEvent(sectionIndex, "change", (latest) => {
    const index = Math.round(latest);
    if (sections[index] && sections[index].id !== currentSection.id) {
      setCurrentSection(sections[index]);
    }
  });

  return (
    <div className="relative h-[500vh]">
      {/* Background crossfade */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {sections.map((s) => (
          <img
            key={s.id}
            src={s.image}
            alt={s.name}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              s.id === currentSection.id ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Hero overlay */}
        <InspirationHero currentSection={currentSection} />
      </div>
    </div>
  );
};

export default ExploreScroll;
