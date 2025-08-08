const Asia = () => {
  return (
    <section
      id={"asia"}
      className="snap-start h-screen flex items-center px-8 md:px-32 hero-bg"
      style={{ backgroundImage: "url('/src/assets/INSPIRATION/ASIA.jpg')" }}
    >
      <div className="grid md:grid-cols-3 gap-2 text-white">
        <span className="second-text">Inspiration</span>
        <div className="col-span-2 flex flex-col md:gap-6 gap-2">
          <h1 className="first-text">Explore Asia</h1>
          <p className="third-text max-w-md">
            Explore the rich cultures, diverse landscapes, and unforgettable
            experiences that Asia has to offer, from bustling cities to serene
            natural wonders.
          </p>
        </div>
        <div className="absolute bottom-10 right-20 third-text">01/06</div>
      </div>
    </section>
  );
};

export default Asia;

// <section
//   id={"Asia"}
//   className="h-screen flex items-center px-8 md:px-32"
// >
//   <div className="grid md:grid-cols-3 gap-2 text-A">
//     <span className="second-text">Inspiration</span>
//     <div className="col-span-2 flex flex-col md:gap-6 gap-2">
//       <h1 className="text-xl md:first-text  max-w-lg">
//         Explore Asia
//       </h1>
//       <p className="third-text max-w-xs">
//         Explore the rich cultures, diverse landscapes, and unforgettable
//         experiences that Asia has to offer, from bustling cities to serene
//         natural wonders.
//       </p>
//     </div>
// <div className="absolute bottom-10 right-20 third-text">01/06</div>
//   </div>
// </section>

{
  /* <section
  id={"intro"}
  className="h-screen bg- flex items-center px-32 bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/src/assets/INSPIRATION/ASIA.jpg')" }}
>
  <div className="grid grid-cols-3 text-white">
    <span className="second-text">Inspiration</span>
    <div className="col-span-2 flex flex-col gap-8">
      <h1 className="first-text">Explore Asia</h1>
      <p className="third-text max-w-md">
        Explore the rich cultures, diverse landscapes, and unforgettable
        experiences that Asia has to offer, from bustling cities to serene
        natural wonders.
      </p>
    </div>
    <div className="absolute bottom-10 right-20 third-text">01/06</div>
  </div>
</section> */
}
