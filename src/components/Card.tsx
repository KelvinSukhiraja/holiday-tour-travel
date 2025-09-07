import React from "react";

type CardProps = {
  image: string;
  title: string;
  description: string;
  className?: string;
};

const Card = React.forwardRef<HTMLImageElement, CardProps>(
  ({ image, title, description, className }, ref) => {
    return (
      <div
        className={`w-60 flex flex-col gap-3 overflow-hidden scrollbar-hide items-center ${
          className ?? ""
        }`}
      >
        <div className="w-full h-72">
          <img
            ref={ref}
            src={image}
            alt={title}
            className="object-cover object-center h-full w-full rounded-[104px]"
          />
        </div>

        <div className="flex flex-col max-w-52 text-center">
          <h3 className="second-text">{title}</h3>
          <p className="fourth-text">{description}</p>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";
export default Card;
