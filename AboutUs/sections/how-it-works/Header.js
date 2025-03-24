import { Container } from "components/shared";
import React from "react";

const HIGHLIGHTS = [
  {
    id: 1,
    image: "/img/landing-page/how-it-works-icon-1.png",
    description:
      "Eliminate high traffic of copy services in and out of your office and protect the privacy of your records!",
  },
  {
    id: 2,
    image: "/img/landing-page/how-it-works-icon-2.png",
    description:
      "Free your staff from dealing with multiple service companies seeking medical records!",
  },
  {
    id: 3,
    image: "/img/landing-page/how-it-works-icon-3.png",
    description:
      "Let us coordinate the timely production of subpoena & medical records request and comply with the law!",
  },
  {
    id: 4,
    image: "/img/landing-page/how-it-works-icon-4.png",
    description:
      "Become paperless when we scan the files requested by other services!",
  },
  {
    id: 5,
    image: "/img/landing-page/how-it-works-icon-5.png",
    description:
      "Use your staffs' time for the treatment of patients - let us handle the rest!",
  },
];

export const HowItWorksHeader = () => {
  return (
    <div className="relative px-5 pt-8 2xl:pt-14" id="solutions">
      <Container>
        <div className="py-10 ">
          <div className="flex gap-20 2xl:gap-0">
            <div className="w-1/2 z-10">
              <div className="flex flex-col gap-11">
                <p className="text-white font-semibold text-6xl pr-52 leading-[84px]">
                  Here's how we work
                </p>
                <img
                  src="/img/landing-page/how-it-works.png"
                  className="w-[86%] 2xl:w-[65%] h-full"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-[45px] z-10">
              {HIGHLIGHTS.map((each) => (
                <div className="flex items-center gap-4" key={each.id}>
                  <img src={each.image} className="w-[85px] h-[77px]" />
                  <p className="text-white text-lg w-[80%]">
                    {each.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <img
        src="/img/landing-page/contact-us-left-bg-effect.png"
        className="absolute -left-20 -top-1/2  select-none"
        alt="left-effect"
      />
      <img
        src="/img/landing-page/how-it-works-right-bg-effect-red.png"
        className="absolute -right-20 -bottom-1/3 select-none "
        alt="left-effect"
      />
    </div>
  );
};
