import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const introRef = useRef(null);

  useGSAP(
    () => {
      // Create a timeline for the introduction animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%", // Animation starts when the top of the section is 80% from the top of the viewport
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
        defaults: {
          ease: "power2.out",
          opacity: 0,
        },
      });

      // Animate the "Introduction" label
      tl.from("#intro-label", { y: 20, duration: 1 });

      // Animate the main heading
      tl.from("#intro-heading", { y: 20, duration: 1 }, "<0.2");

      // Animate the paragraph
      tl.from("#intro-paragraph", { y: 20, duration: 1 }, "<0.2");
    },
    { scope: introRef }
  );

  return (
    <section
      id={"introduction"}
      ref={introRef}
      className="snap-start h-[60vh] md:h-[90vh] flex items-center px-8 md:px-32 bg-A text-white"
    >
      <div className="grid md:grid-cols-4 gap-2 w-full">
        <p id="intro-label" className="third-text">
          Our Services
        </p>
        <div className="col-span-3 flex flex-col md:gap-6 gap-2">
          <h1 id="intro-heading" className="first-text max-w-lg md:max-w-2xl">
            From ticketing and flights to hotels, adventures, attractions, and
            transportation. We provide everything you need for a seamless and
            unforgettable journey.
          </h1>
          <p id="intro-paragraph" className="fourth-text max-w-lg md:max-w-2xl">
            <ul>
              <li className="flex items-center gap-[20%] border-b-[0.5px] border-t-[0.5px] py-2">
                <span className="fourth-text">01</span>
                <h2 className="second-text">Tour Packages</h2>
              </li>
              <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
                <span className="fourth-text">02</span>
                <h2 className="second-text">Flight Ticket</h2>
              </li>
              <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
                <span className="fourth-text">03</span>
                <h2 className="second-text">Accommodation</h2>
              </li>
              <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
                <span className="fourth-text">04</span>
                <h2 className="second-text">Transportation</h2>
              </li>
              <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
                <span className="fourth-text">05</span>
                <h2 className="second-text">Experiences & Attractions</h2>
              </li>
              <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
                <span className="fourth-text">06</span>
                <h2 className="second-text">Travel Insurance</h2>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

// const Services = () => {
//   return (
//     <section
//       id={"services"}
//       className="snap-start h-[80vh] flex items-center px-8 md:px-32 bg-A"
//     >
//       <div className="grid md:grid-cols-3 gap-2 text-white">
//         <span className="third-text">Our Services</span>
//         <div className="col-span-2 flex flex-col md:gap-6 gap-2">
//           <h1 className="first-text max-w-lg">
//             From ticketing and flights to hotels, adventures, attractions, and
//             transportation. We provide everything you need for a seamless and
//             unforgettable journey.
//           </h1>
// <ul>
//   <li className="flex items-center gap-[20%] border-b-[0.5px] border-t-[0.5px] py-2">
//     <span className="fourth-text">01</span>
//     <h2 className="second-text">Tour Packages</h2>
//   </li>
//   <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
//     <span className="fourth-text">02</span>
//     <h2 className="second-text">Flight Ticket</h2>
//   </li>
//   <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
//     <span className="fourth-text">03</span>
//     <h2 className="second-text">Accommodation</h2>
//   </li>
//   <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
//     <span className="fourth-text">04</span>
//     <h2 className="second-text">Transportation</h2>
//   </li>
//   <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
//     <span className="fourth-text">05</span>
//     <h2 className="second-text">Experiences & Attractions</h2>
//   </li>
//   <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
//     <span className="fourth-text">06</span>
//     <h2 className="second-text">Travel Insurance</h2>
//   </li>
// </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
