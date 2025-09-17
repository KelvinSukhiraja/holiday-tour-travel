import Card from "@/components/Card";
import { Separator } from "@/components/ui/separator";
import { sections } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTransition } from "@/context/TransitionContext";
import { useRef } from "react"; // NEW: Import useState
import CursorFollower from "@/components/CursorFollower"; // NEW: Import the cursor
import { ArrowLeft, ArrowRight } from "lucide-react";

const Inspiration = () => {
  const { startTransition } = useTransition();

  const handleCardClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    index: number,
    to: string
  ) => {
    event.preventDefault();
    const imageElement = cardImageRefs.current[index];
    if (imageElement) {
      startTransition(imageElement, to);
    }
  };

  const cardImageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const setCardImageRef = (index: number) => (el: HTMLImageElement | null) => {
    cardImageRefs.current[index] = el;
  };

  // NEW: Refs and state for the cursor follower
  const cardSectionRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // --- Your existing timeline animation ---
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut", opacity: 0 },
    });
    // ... (keep all your .from() calls here) ...
    tl.from("#separator", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.7,
      opacity: 1,
    })
      .from("#header", {
        opacity: 0,
        duration: 0.5,
      })
      .from("#card-section", { height: 0 })
      .from(
        "#card-separator",
        {
          scaleY: 0,
          stagger: 0.3,
          transformOrigin: "top top",
        },
        "-=1"
      )
      .from(".card", { opacity: 0, stagger: 0.3 }, "-=0.5");

    // NEW: Cursor follower logic
    const cardSection = cardSectionRef.current;
    if (!cardSection || !cursorRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Animate the cursor follower's position smoothly
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
      });

      // Update the text based on mouse position
      // const rect = cardSection.getBoundingClientRect();
      // const threshold = rect.width * 0.2; // 20% from each edge

      // if (e.clientX < rect.left + threshold) {
      //   setCursorText("Scroll Left");
      // } else if (e.clientX > rect.right - threshold) {
      //   setCursorText("Scroll Right");
      // } else {
      //   setCursorText(""); // No text in the middle
      // }
    };

    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3 });
    };

    // Add event listeners
    cardSection.addEventListener("mousemove", handleMouseMove);
    cardSection.addEventListener("mouseenter", handleMouseEnter);
    cardSection.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function to remove listeners
    return () => {
      cardSection.removeEventListener("mousemove", handleMouseMove);
      cardSection.removeEventListener("mouseenter", handleMouseEnter);
      cardSection.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []); // Empty dependency array ensures this runs once

  return (
    <>
      {/* NEW: Render the cursor component */}
      <CursorFollower ref={cursorRef}>
        {/* Pass the icon and text as children */}
        <ArrowLeft size={16} className="mr-2" />
        Scroll Left to Right
        <ArrowRight size={16} className="mr-2" />
      </CursorFollower>

      <section
        className="h-screen flex flex-col justify-center gap-5 items-center w-full bg-white-a text-A"
        id="inspiration"
      >
        <div className="px-8 md:px-32 w-full flex flex-col gap-5 mt-16">
          {/* ... (rest of your JSX) ... */}
        </div>
        <div
          // NEW: Add the ref to the target section
          ref={cardSectionRef}
          className="flex overflow-x-auto w-full h-fit px-8 md:px-32 items-stretch no-scrollbar"
          id="card-section"
        >
          {sections.map((section, index) => (
            <div className="flex-shrink-0 flex " key={index}>
              {index != 0 && (
                <Separator
                  orientation={"vertical"}
                  className="bg-A mx-3 md:mx-10"
                  id="card-separator"
                />
              )}
              <Link
                to={`/blogs/${section.id}`}
                className="card"
                onClick={(e) =>
                  handleCardClick(e, index, `/blogs/${section.id}`)
                }
              >
                <Card
                  // Assign the ref from our array to the Card component
                  ref={setCardImageRef(index)}
                  image={section.image}
                  title={section.title}
                  description={section.description}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Inspiration;
