const Services = () => {
  return (
    <section
      id={"services"}
      className="snap-start h-[80vh] flex items-center px-8 md:px-32 bg-A"
    >
      <div className="grid md:grid-cols-3 gap-2 text-white">
        <span className="third-text">Our Services</span>
        <div className="col-span-2 flex flex-col md:gap-6 gap-2">
          <h1 className="first-text max-w-lg">
            From ticketing and flights to hotels, adventures, attractions, and
            transportation. We provide everything you need for a seamless and
            unforgettable journey.
          </h1>
          <ul>
            <li className="flex items-center gap-[20%] border-b-[0.5px] border-t-[0.5px] py-2">
              <span className="fourth-text">01</span>
              <h2 className="second-text">Tour Packages</h2>
            </li>
            <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
              <span className="fourth-text">02</span>
              <h2 className="second-text">Flight Ticket</h2>
            </li>
            <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
              <span className="fourth-text">03</span>
              <h2 className="second-text">Accommodation</h2>
            </li>
            <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
              <span className="fourth-text">04</span>
              <h2 className="second-text">Transportation</h2>
            </li>
            <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
              <span className="fourth-text">05</span>
              <h2 className="second-text">Experiences & Attractions</h2>
            </li>
            <li className="flex items-center gap-[20%] border-b-[0.5px] py-2">
              <span className="fourth-text">06</span>
              <h2 className="second-text">Travel Insurance</h2>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
