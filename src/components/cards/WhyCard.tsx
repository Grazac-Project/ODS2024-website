import React from "react";
import { CloudinaryImage } from "../Image";

interface WhyCard {
  image: string;
  title: string;
  desc: string;
  id: string;
}

const WhyCard = ({ image, title, desc, id }: WhyCard) => {
  return (
    <>
      <div className="flex flex-col px-6 py-8 font-medium bg-white rounded-3xl border border-solid border-neutral-200 max-w-[588px] max-md:px-5">
        <CloudinaryImage
          loading="lazy"
          src={image}
          alt="Feature image"
          width={540}
          height={440}
          className="relative w-full aspect-[1.23]  max-md:max-w-full rounded-tr-[70px] rounded-bl-[70px] object-cover"
        />

        <h3
          className="self-start mt-10 text-3xl leading-10 bg-clip-text"
          style={{
            background: "-webkit-linear-gradient(270deg, #00A651, #FFE840)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {id}
        </h3>
        <h3 className="font-medium text-[35px] text-neutral-900">{title}</h3>
        <p className="mt-6 text-xl leading-6 text-neutral-900 max-md:max-w-full font-nunito">
          {desc}
        </p>
      </div>
    </>
  );
};

export default WhyCard;
