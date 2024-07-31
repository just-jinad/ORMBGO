import React from "react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
}

export function AboutCard({ title, description, subTitle }: AboutCardProp) {
  return (
    <div className="shadow-none bg-gray-900 rounded-2xl p-5 h-auto flex flex-col justify-center items-center">
      <h6 className="mb-2 md:mb-4 text-center text-sm md:text-base lg:text-lg text-white">
        {subTitle}
      </h6>
      <h4 className="text-center text-lg md:text-xl lg:text-2xl text-white">
        {title}
      </h4>
      <p className="mt-2 mb-4 md:mb-6 lg:mb-10 text-sm md:text-base lg:text-lg w-full lg:w-8/12 text-center font-normal text-white">
        {description}
      </p>
      <button className="bg-white text-gray-900 px-4 py-2 rounded text-xs md:text-sm lg:text-base">
        View Details
      </button>
    </div>
  );
}

export default AboutCard;
