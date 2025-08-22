import InspirationHero from "@/components/InspirationHero";
import { sections } from "@/lib/utils";

const Asia = () => {
  const currentSection = sections[0];

  return (
    <>
      <section className="h-screen">
        <InspirationHero currentSection={currentSection} />
      </section>
    </>
  );
};

export default Asia;
