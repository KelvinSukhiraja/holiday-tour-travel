import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type MotionWrapperProps = {
  variants: Variants;
  initial?: string;
  animate?: string;
  exit?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  transition?: any; // add transition prop
};

export function MotionWrapper({
  variants,
  initial = "hidden",
  animate = "visible",
  exit,
  children,
  className = "",
  style = {},
  transition,
}: MotionWrapperProps) {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      className={className}
      style={style}
      transition={transition} // use transition prop here
    >
      {children}
    </motion.div>
  );
}
