import Card from "@/components/Card";
import { Separator } from "@/components/ui/separator";
import { sections } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTransition } from "@/context/TransitionContext";
import { useRef } from "react";

const Inspiration = () => {
  const { startTransition } = useTransition(); // Use our transition context

  const handleCardClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    index: number,
    to: string
  ) => {
    event.preventDefault(); // Prevent immediate navigation
    const imageElement = cardImageRefs.current[index];
    if (imageElement) {
      startTransition(imageElement, to); // Trigger our custom animation
    }
  };

  // Create an array of refs, one for each card image
  const cardImageRefs = useRef<Array<HTMLImageElement | null>>([]);
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut", opacity: 0 },
    });

    tl.from("#separator", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 0.7,
      opacity: 1,
    })
      .from("#header", {
        opacity: 0,
        duration: 0.5,
        // y: 10,
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
  });

  return (
    <>
      <section
        className="h-screen flex flex-col justify-center gap-5 items-center w-full bg-white-a text-A"
        id="inspiration"
      >
        <div className="px-8 md:px-32 w-full flex flex-col gap-5 mt-16">
          <div className="grid md:grid-cols-3 gap-2 text-A w-full" id="header">
            <p className="third-text">Inspiration</p>
            <h1 className="first-text max-w-xl col-span-2 ">
              Let the world inspire your next unforgettable journey.
            </h1>
          </div>
          <Separator className="bg-A " id="separator" />
        </div>
        <div
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
                  ref={(el) => (cardImageRefs.current[index] = el)}
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
