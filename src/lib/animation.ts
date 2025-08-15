export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
  animate: { once: true },
};

export const slideUpVariants = {
  hidden: { y: "50%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

export const slideRightVariants = {
  hidden: { x: "50%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

export const scaleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
};

export const hoverScale = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

export const scaleToFull = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  exit: { scaleX: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

// animations.js
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // delay between each child
    },
  },
};

export const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 10 },
  },
};
