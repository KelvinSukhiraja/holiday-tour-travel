import { Separator } from "@/components/ui/separator";
import { ArrowDownRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="snap-start h-screen flex flex-col justify-center md:px-32 px-8 text-white"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/src/assets/HOME/background.webm" type="video/webm" />
        <source src="/src/assets/HOME/background.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col md:flex-row md:items-end gap-2 py-5">
        <h1 className="first-text md:max-w-52">
          Welcome to Holiday Tour and Travel
        </h1>
        <span className="third-text max-w-xs">
          We plan and manage travel experiences for individuals, groups, and
          companies.
        </span>
      </div>
      <Separator />
      <span className="third-text max-w-3xs text-end self-end py-5">
        Discover breathtaking destinations and the charm of every season.
      </span>
      <div className="absolute bottom-10 self-end">
        <a
          href={"#intro"}
          className="flex items-center group the-transition the-hover"
        >
          <span className="third-text">Start Exploring</span>
          <ArrowDownRight className="stroke-1 group-focus:rotate-45 group-hover:rotate-45 the-transition" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
