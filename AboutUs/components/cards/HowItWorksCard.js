import React from "react";

export const HowItWorksCard = ({
  image,
  classes = "",
  title,
  descriptions,
}) => {
  return (
    <div className="">
      <div className={`flex gap-24 2xl:gap-36 items-center ${classes} `}>
        <div className="w-1/2">
          <img src={image} className="" />
        </div>
        <div className="w-1/2 z-20">
          <p className="text-white text-2xl font-semibold  pb-6">{title}</p>
          <ul className="flex flex-col gap-4 pl-4 w-[80%] list-disc">
            {descriptions.map((features, i) => (
              <li className="text-white" key={i}>
                {features}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
