const Introduction = () => {
  return (
    <section
      id={"introduction"}
      className="snap-start h-[60vh] md:h-[80vh] flex items-center px-8 md:px-32"
    >
      <div className="grid md:grid-cols-3 gap-2 text-A">
        <span className="third-text">Introduction</span>
        <div className="col-span-2 flex flex-col md:gap-6 gap-2">
          <h1 className="first-text  max-w-lg">
            HOLIDAY Tour and Travel is a company that specializes in planning,
            organizing, and managing travel and holiday experiences for
            individuals, groups, and corporations.
          </h1>
          <p className="fourth-text max-w-xs">
            With a strong focus on delivering well coordinated travel packages
            that include accommodation, transportation, tour activities, and
            other related services, HOLIDAY aims to provide clients with a
            seamless and enjoyable vacation experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
