import React from "react";

export const Testimonials = () => {
  return (
    <div className="w-[40%]">
      <div className="flex flex-col gap-5">
        <p className="font-semibold text-5xl text-white pr-10 leading-[60.95px]">
          What our clients say about us
        </p>
        <p className="font-[#A6A6A6] pr-10 text-lg font-medium">
          It's no wonder they love us - our services provide easier, more
          effective business management that significantly improves their bottom
          line!
        </p>
      </div>
      <div className="pt-10">
        <img
          src="/img/landing-page/testimonial_quote_icon.png"
          className="w-[45px] h-[38px]"
        />
        <div className="pt-5 pr-5">
          <p className="font-[#A6A6A6] text-lg font-medium">
            “New Era’s expertise in obtaining medical records has helped me
            build stronger cases for my clients, and I am grateful for their
            attention to detail and thoroughness. They communicate with me every
            step of the way and are always available to answer any questions I
            have. I cannot recommend this company enough!"
          </p>
          <p className="text-lg font-medium text-[#A6A6A6] pt-5">
            _Aria Zinanrio
          </p>
          <div>
            <img
              src="/img/landing-page/testimonial-author.png"
              className="h-[66px] w-[66px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
