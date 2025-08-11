import ScrollSection from "../ScrollSection";
import Contact from "./Contact";
import Hero from "./Hero";
import Intro from "./Intro";

const Homepage = () => {
  return (
    <>
      <div
        className="h-[800vh]"
        // className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth "
      >
        <Hero />
        <Intro />
        <ScrollSection />
      </div>

      <div>
        <Contact />
      </div>
    </>
  );
};

export default Homepage;
