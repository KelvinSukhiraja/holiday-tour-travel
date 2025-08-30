type CardProps = {
  image: string;
  title: string;
  description: string;
};

const Card = ({ image, title, description }: CardProps) => {
  return (
    <div className="w-60 flex flex-col gap-3 overflow-hidden scrollbar-hide items-center">
      <div className="w-full h-72">
        <img
          src={image}
          alt={title}
          className="object-cover object-center rounded-[30%] h-full w-full"
        />
      </div>

      <div className="flex flex-col max-w-52 text-center ">
        <h3 className="second-text">{title}</h3>
        <p className="fourth-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
