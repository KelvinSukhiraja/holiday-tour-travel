import Card from "@/components/Card";
import { Separator } from "@/components/ui/separator";
import { sections } from "@/lib/utils";
import { motion } from "framer-motion";

const Inspiration = () => {
  const MotionSeparator = motion(Separator);

  return (
    <>
      <section className="h-screen flex flex-col justify-center gap-5 items-center w-full bg-white-a text-A">
        <div className="px-8 md:px-32 w-full flex flex-col gap-5 mt-16">
          <div className="grid md:grid-cols-3 gap-2 text-A w-full">
            <span className="third-text">Inspiration</span>
            <h1 className="first-text max-w-xl col-span-2 ">
              Let the world inspire your next unforgettable journey.
            </h1>
          </div>
          <MotionSeparator
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ originX: 0, background: "#2F5C95" }}
          />
        </div>
        <div className="flex overflow-x-auto w-full h-fit px-8 md:px-32">
          {sections.map((section, index) => (
            <div className="flex-shrink-0 flex " key={index}>
              {index != 0 && (
                <Separator
                  orientation={"vertical"}
                  className="bg-A mx-3 md:mx-10"
                />
              )}
              <Card
                image={section.image}
                title={section.title}
                description={section.description}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Inspiration;
