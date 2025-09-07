import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

// Define the shape of the context data
interface TransitionContextType {
  isTransitioning: boolean;
  startTransition: (element: HTMLImageElement, to: string) => void;
}

// Create the context
const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
);

// Create the provider component
export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  // const transitionImageRef = useRef<HTMLImageElement | null>(null);

  const startTransition = (element: HTMLImageElement, to: string) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // 1. Get initial position
    const startRect = element.getBoundingClientRect();

    // 2. Create and style the clone
    const clone = element.cloneNode(true) as HTMLImageElement;
    clone.style.position = "fixed";
    clone.style.top = `${startRect.top}px`;
    clone.style.left = `${startRect.left}px`;
    clone.style.width = `${startRect.width}px`;
    clone.style.height = `${startRect.height}px`;
    clone.style.objectFit = "cover";
    clone.style.margin = "0";
    clone.style.zIndex = "9999";
    clone.style.borderRadius = getComputedStyle(element).borderRadius; // Copy border radius
    document.body.appendChild(clone);

    // Hide original image
    element.style.opacity = "0";

    // Animate the clone to fill the screen (or to a target position)
    gsap.to(clone, {
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      //   scale: 10,
      borderRadius: 0, // Animate border radius to square
      duration: 1,
      ease: "power.inOut",
      onComplete: () => {
        // 3. Navigate after animation
        navigate(to);
        // Clean up the clone after a short delay to allow the new page to render
        setTimeout(() => {
          document.body.removeChild(clone);
          element.style.opacity = "1"; // Restore original image visibility
          setIsTransitioning(false);
        }, 100);
      },
    });
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

// Custom hook for easy access
export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
};
