import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { sections } from "@/lib/utils";
import InspirationHero from "@/components/InspirationHero";

const ExploreScroll = () => {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState(sections[0]);
  const [isChanging, setIsChanging] = useState(false);

  // Map scroll progress to section index
  const sectionIndex = useTransform(
    scrollYProgress,
    [0.25, 1],
    [0, sections.length - 1]
  );

  // Preload images
  useEffect(() => {
    sections.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  // Update section with blur effect
  useEffect(() => {
    const unsubscribe = sectionIndex.onChange((latest) => {
      const index = Math.round(latest);
      if (sections[index].id !== currentSection.id) {
        setIsChanging(true);
        setTimeout(() => {
          setCurrentSection(sections[index]);
          setIsChanging(false);
        }, 150); // blur duration before change
      }
    });
    return () => unsubscribe();
  }, [sectionIndex, currentSection]);

  const style = {
    backgroundImage: `url(${currentSection.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: isChanging ? "blur(8px)" : "blur(0px)",
    transition: "filter 0.4s ease-in-out, background-image 0.3s ease-in-out",
  };

  return (
    // <div className="sticky top-0 h-screen w-full">
    //   <motion.section
    //     className="snap-start sticky top-0 h-screen flex items-center px-8 md:px-32"
    //     style={style}
    //   >
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 2 }}
    //       className="grid md:grid-cols-3 gap-2 text-white z-10"
    //     >
    //       <span className="third-text">Inspiration</span>
    //       <motion.div
    //         key={currentSection.id}
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, ease: "easeInOut" }}
    //         className="col-span-2 flex flex-col md:gap-6 gap-2"
    //       >
    //         <h1 className="first-text">{currentSection.title}</h1>
    //         <p className="fourth-text max-w-md">{currentSection.description}</p>
    //       </motion.div>
    //       <div className="absolute bottom-10 right-20 fourth-text">
    //         {sections.findIndex((s) => s.id === currentSection.id) + 1}/
    //         {sections.length}
    //       </div>
    //     </motion.div>
    //   </motion.section>
    // </div>
    <InspirationHero style={style} currentSection={currentSection} />
  );
};

export default ExploreScroll;
