// components/HeroSection.tsx
import { MotionWrapper } from "@/components/MotionWrapper";
import { Separator } from "@/components/ui/separator";
import {
  fadeVariants,
  slideRightVariants,
  slideUpVariants,
} from "@/lib/animation";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

const MotionSeparator = motion(Separator);

interface VideoSource {
  src: string;
  type: string;
}

interface HeroSectionProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  subtext?: string | React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
  background?:
    | { type: "video"; sources: VideoSource[] }
    | { type: "image"; src: string; alt?: string };
  backgroundClassName?: string;
  className?: string;
}

export default function HeroSection({
  title,
  subtitle,
  subtext,
  ctaText = "Start Exploring",
  ctaHref = "#",
  background,
  backgroundClassName = "absolute top-0 left-0 w-full h-full object-cover brightness-75",
  className = "",
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className={`snap-start h-screen flex flex-col justify-center md:px-32 px-8 text-white relative overflow-hidden ${className}`}
    >
      {/* Background */}
      {background?.type === "video" && (
        <video
          className={backgroundClassName}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          {background.sources.map((source, idx) => (
            <source key={idx} src={source.src} type={source.type} />
          ))}
        </video>
      )}
      {background?.type === "image" && (
        <img
          className={backgroundClassName}
          src={background.src}
          alt={background.alt || "Background"}
        />
      )}

      {/* Content */}
      <div className="flex flex-col z-10">
        <div className="relative flex flex-col md:flex-row md:items-end gap-2 py-5">
          <MotionWrapper
            variants={slideUpVariants}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 5,
            }}
          >
            <h1 className="first-text md:max-w-52">{title}</h1>
          </MotionWrapper>

          {subtitle && (
            <MotionWrapper
              variants={slideRightVariants}
              transition={{ type: "spring" }}
            >
              <p className="fourth-text max-w-2xs">{subtitle}</p>
            </MotionWrapper>
          )}
        </div>

        <MotionSeparator
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ originX: 0 }}
        />

        {subtext && (
          <span className="fourth-text max-w-3xs text-end self-end py-5">
            <MotionWrapper variants={fadeVariants}>{subtext}</MotionWrapper>
          </span>
        )}

        {ctaText && (
          <div className="absolute bottom-10 self-end">
            <a
              href={ctaHref}
              className="flex items-center group the-transition the-hover"
            >
              <span className="fourth-text">
                <MotionWrapper variants={fadeVariants}>{ctaText}</MotionWrapper>
              </span>
              <ArrowDownRight className="stroke-1 group-hover:rotate-45 the-transition" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
