// components/HeroSection.tsx
import { Separator } from "@/components/ui/separator";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDownRight } from "lucide-react";

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
    | { type: "video"; sources: VideoSource[]; poster?: string }
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
  // const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut", opacity: 0 },
    });

    tl.from("#separator", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1,
      opacity: 1,
    })
      .from("#header h1, #header p", {
        opacity: 0,
        duration: 0.5,
        yPercent: 30,
        stagger: 0.3,
      })
      .from("#subtext", {
        opacity: 0,
        duration: 0.5,
        yPercent: -30,
      })
      .from("#ctaText", {
        opacity: 0,
        duration: 0.7,
        yPercent: -30,
        xPercent: -30,
      });
  });

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
          poster={background.poster}
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
      <div className="flex flex-col z-10" id="content">
        <div className="relative grid md:grid-cols-4 gap-2 py-5" id="header">
          <div className="w-full ">
            <h1 className="first-text md:max-w-52 ">{title}</h1>
          </div>
          <div className="col-span-3 self-end w-full">
            {subtitle && <p className="fourth-text max-w-2xs">{subtitle}</p>}
          </div>
        </div>

        <Separator id="separator" />

        {subtext && (
          <p
            id="subtext"
            className="fourth-text max-w-3xs text-end self-end py-5"
          >
            {subtext}
          </p>
        )}

        {ctaText && (
          <div className="absolute bottom-10 self-end" id="ctaText">
            <a
              href={ctaHref}
              className="flex items-center group the-transition the-hover"
            >
              <p className="fourth-text">{ctaText}</p>
              <ArrowDownRight className="stroke-1 group-hover:rotate-45 the-transition" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
