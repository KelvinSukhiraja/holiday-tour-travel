import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sections } from "@/lib/utils";
import InspirationHero from "@/components/InspirationHero";

gsap.registerPlugin(ScrollTrigger);

export default function ImageStackScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]); // Ref for the overlays
  const [currentSection, setCurrentSection] = useState(sections[0]);

  useGSAP(
    () => {
      const screenHeight = window.innerHeight;

      // Set initial state for all overlays to be transparent
      gsap.set(overlayRefs.current, { opacity: 0 });

      imageRefs.current.forEach((img, i) => {
        if (!img) return;

        // --- Image Animations ---
        if (i > 0) {
          const prevImg = imageRefs.current[i - 1];

          // Create a timeline to sync the animations
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: `${(i - 1) * screenHeight}px top`,
              end: `${i * screenHeight}px top`,
              scrub: true,
            },
          });

          // 1. New image coming IN
          tl.fromTo(
            img,
            { y: "100%", width: "90%", xPercent: 5 },
            { y: "0%", width: "100%", xPercent: 0, ease: "power1.inOut" }
          );

          // 2. Previous image going OUT (scaling down)
          // The "<" position parameter makes it start at the same time as the previous animation
          if (prevImg) {
            tl.to(
              prevImg,
              { width: "90%", xPercent: 5, ease: "power1.inOut" },
              "<"
            );
          }
        }

        // --- Darkening Effect for Previous Image ---
        if (i > 0) {
          const prevOverlay = overlayRefs.current[i - 1];
          if (prevOverlay) {
            gsap.to(prevOverlay, {
              opacity: 0.7,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: `${(i - 1) * screenHeight + screenHeight / 10}px top`,
                end: `${i * screenHeight}px top`,
                scrub: true,
              },
            });
          }
        }

        // --- State Update Triggers for Text ---
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: `${i * screenHeight - screenHeight * 0.4}px top`,
          onEnter: () => setCurrentSection(sections[i]),
        });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: `${i * screenHeight - screenHeight * 0.6}px top`,
          end: `${i * screenHeight}px top`,
          onEnterBack: () => setCurrentSection(sections[i]),
        });
      });
    },
    { scope: containerRef, revertOnUpdate: true }
  );
  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black"
      style={{ height: `${sections.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: index + 1 }}
          >
            <img
              src={section.image}
              alt={section.title || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Add a darkening overlay div inside each image container */}
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 bg-black pointer-events-none"
            ></div>
          </div>
        ))}

        <div className="absolute inset-0 z-50 pointer-events-none">
          <InspirationHero currentSection={currentSection} numbering />
        </div>
      </div>
    </div>
  );
}
