// src/components/Loader.tsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// The onComplete function will remove the loader from the DOM
interface LoaderProps {
  onComplete: () => void;
  animateOut?: boolean;
}

export function Loader({ onComplete, animateOut = false }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);

  // Animate the loader out when this component is told to unmount
  // or when loading is complete. We'll trigger this from the App component.
  useGSAP(
    () => {
      if (!animateOut) return;

      const tl = gsap.timeline({ onComplete });
      tl.to(loaderRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power3.inOut",
      });
    },
    { dependencies: [animateOut] }
  );

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-A text-white"
    >
      <div className="text-center">
        {/* You can put a logo, a spinner, or a loading bar here */}
        <img
          src="/LOGO-WHITE.png"
          alt="Loading Logo"
          className="w-48 animate-pulse"
        />
        {/* <p className="mt-4 text-lg">Loading...</p> */}
      </div>
    </div>
  );
}
