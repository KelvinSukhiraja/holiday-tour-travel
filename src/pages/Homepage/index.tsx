import ScrollSection from "../ScrollSection";
import Hero from "./Hero";
import Intro from "./Intro";

const Homepage = () => {
  return (
    <div
      className="h-[800vh]"
      // className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth "
    >
      <Hero />
      <Intro />
      <ScrollSection />
    </div>
  );
};

export default Homepage;
