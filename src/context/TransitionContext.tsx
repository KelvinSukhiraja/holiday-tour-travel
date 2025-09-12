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

    // Create blur overlay
    const blurOverlay = document.createElement("div");
    blurOverlay.style.position = "fixed";
    blurOverlay.style.inset = "0"; // full screen
    blurOverlay.style.backdropFilter = "blur(20px)";
    // blurOverlay.style.webkitBackdropFilter = "blur(20px)"; // Safari
    blurOverlay.style.background = "rgba(0,0,0,0.1)"; // subtle dark overlay (optional)
    blurOverlay.style.opacity = "0";
    blurOverlay.style.pointerEvents = "none";
    blurOverlay.style.zIndex = "9998"; // just below the clone
    document.body.appendChild(blurOverlay);

    const tl = gsap.timeline({
      onComplete: () => {
        // Navigate when animation finishes
        navigate(to);

        // Cleanup
        setTimeout(() => {
          document.body.removeChild(clone);
          document.body.removeChild(blurOverlay);
          element.style.opacity = "1"; // restore original image
          setIsTransitioning(false);
        }, 100);
      },
    });

    // Step 1: move clone + fade in blur together
    tl.to(
      clone,
      {
        top: "50%",
        // left: "50%",
        yPercent: -50,
        // xPercent: 50,
        height: "80vh",
        width: "10vw",
        duration: 0.7,
        ease: "power2.out",
      },
      0
    ) // <- 0 means "start at the same time"

      .to(
        blurOverlay,
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        0
      ) // <- also start at the same time

      // Step 2: expand clone to full screen
      .to(clone, {
        // width: "90vw",
        // height: "90vh",
        left: "50%",
        xPercent: -50,
        // borderRadius: 20,
        duration: 1,
        ease: "power2.inOut",
      })

      .to(clone, {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        // left: 0,
        duration: 1.5,
        ease: "power2.inOut",
      });

    // gsap.to(clone, {
    //   top: "50%",
    //   left: "5%",
    //   yPercent: -50,
    //   height: "80vh",
    //   width: "10vw",
    //   duration: 0.7,
    //   ease: "power2.out",
    // });

    // gsap.to(blurOverlay, {
    //   opacity: 1,
    //   duration: 0.5,
    //   ease: "power2.out",
    // });

    // gsap.to(clone, {
    //   top: 0,
    //   left: 0,
    //   width: "100vw",
    //   height: "100vh",
    //   //   scale: 10,
    //   borderRadius: 0, // Animate border radius to square
    //   duration: 0.7,
    //   ease: "expoScale(0.5,7,power1.out)",
    //   onComplete: () => {
    //     // 3. Navigate after animation
    //     navigate(to);
    //     // Clean up the clone after a short delay to allow the new page to render
    //     setTimeout(() => {
    //       document.body.removeChild(clone);
    //       element.style.opacity = "1"; // Restore original image visibility
    //       setIsTransitioning(false);
    //     }, 100);
    //   },
    // });

    // gsap.to(clone, {
    //   borderRadius: 0,
    // });
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
