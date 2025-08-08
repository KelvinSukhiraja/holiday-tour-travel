const Australia = () => {
  return (
    <section
      id={"australia"}
      className="snap-start h-screen flex items-center px-8 md:px-32 hero-bg"
      style={{
        backgroundImage: "url('/src/assets/INSPIRATION/AUSTRALIA.jpg')",
      }}
    >
      <div className="grid md:grid-cols-3 gap-2 text-white">
        <span className="second-text">Inspiration</span>
        <div className="col-span-2 flex flex-col md:gap-6 gap-2">
          <h1 className="first-text">Explore Australia</h1>
          <p className="third-text max-w-md">
            Australia’s stunning coastlines, unique wildlife, and vibrant cities
            filled with adventure and natural beauty.
          </p>
        </div>
        <div className="absolute bottom-10 right-20 third-text">04/06</div>
      </div>
    </section>
  );
};

export default Australia;
