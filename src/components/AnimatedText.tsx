// @ts-nocheck


import { containerVariants, wordVariants } from "@/lib/animation";
import { motion } from "framer-motion";

const AnimatedText = ({ text }: {text: string}) => {
  const words = text.split(" "); // split into words

  return (
    <motion.h1
      className="first-text md:max-w-52"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;
