import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { sections } from "@/lib/utils";

const ExploreScroll = () => {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState(sections[0]);

  // Use a transform to map scroll progress to a section index
  // This will give a value of 0 when scrolled to the first section, and 1 for the second.
  const sectionIndex = useTransform(
    scrollYProgress,
    [0.25, 1],
    [0, sections.length - 1]
  );

  useEffect(() => {
    // We need to listen to changes in sectionIndex to update the current section's content.
    // The .onChange() method of a MotionValue is perfect for this.
    const unsubscribe = sectionIndex.onChange((latest) => {
      const index = Math.round(latest);
      setCurrentSection(sections[index]);
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, [sectionIndex]);

  const style = {
    backgroundImage: `url(${currentSection.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 1s ease-in-out", // Smooth transition
  };

  return (
    <div className="sticky top-0 h-screen w-full ">
      <motion.section
        className="snap-start sticky top-0 h-screen flex items-center px-8 md:px-32 hero-bg"
        style={style}
      >
        {/* We use a motion.div for the background to fade it smoothly */}
        <motion.div className="absolute inset-0 " />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-2 text-white z-10"
        >
          <span className="second-text">Inspiration</span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            key={currentSection.id}
            className="col-span-2 flex flex-col md:gap-6 gap-2"
          >
            <h1 className="first-text">{currentSection.text}</h1>
            <p className="third-text max-w-md">{currentSection.description}</p>
          </motion.div>
          <div className="absolute bottom-10 right-20 third-text">
            {sections.findIndex((s) => s.id === currentSection.id) + 1}/
            {sections.length}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ExploreScroll;
