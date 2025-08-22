import { motion } from "framer-motion";
import { sections } from "@/lib/utils";

type SectionType = (typeof sections)[number];

type InspirationHeroProps = {
  style?: React.CSSProperties;
  currentSection: SectionType;
};

const InspirationHero = ({ style, currentSection }: InspirationHeroProps) => {
  return (
    <div className="sticky top-0 h-screen w-full">
      <motion.section
        style={style}
        className="snap-start sticky top-0 h-screen flex items-center px-8 md:px-32"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="grid md:grid-cols-3 gap-2 text-white z-10"
        >
          <span className="third-text">Inspiration</span>

          <motion.div
            key={currentSection.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="col-span-2 flex flex-col md:gap-6 gap-2"
          >
            <h1 className="first-text">{currentSection.title}</h1>
            <p className="fourth-text max-w-md">{currentSection.description}</p>
          </motion.div>

          <div className="absolute bottom-10 right-20 fourth-text">
            {sections.findIndex((s) => s.id === currentSection.id) + 1}/
            {sections.length}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default InspirationHero;
