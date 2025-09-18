import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function useCursorFollower(containerRef: React.RefObject<HTMLElement>) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container || !cursorRef.current) return;

      // Set initial state
      gsap.set(cursorRef.current, { scale: 0, opacity: 0 });

      const handleMouseMove = (e: MouseEvent) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 1.5,
          ease: "power2.out",
        });
      };

      const handleMouseEnter = () => {
        gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
      };

      const handleMouseLeave = () => {
        gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3 });
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef } // Scope the GSAP context to the container
  );

  return cursorRef; // Return the ref for the cursor element
}
