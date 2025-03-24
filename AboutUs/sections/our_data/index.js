import React from "react";

const HIGHLIGHTS = [
  {
    id: 1,
    image: "/img/landing-page/how-it-works-icon-1.png",
    title: "Enhanced Privacy",
    description:
      "Eliminate high traffic of copy services in and out of your office and protect the privacy of your records! Ensure compliance with privacy laws and safeguard sensitive information.high traffic of copy services in and out of your office and protect the privacy of your records! Ensure compliance with privacy",
  },
  {
    id: 2,
    image: "/img/landing-page/how-it-works-icon-2.png",
    title: "Streamlined Operations",
    description:
      "Free your staff from dealing with multiple service companies seeking medical records! Focus on critical tasks while we manage the coordination seamlessly.service companies seeking medical records! Focus on critical tasks while we manage the coordination seamlessly.",
  },
  {
    id: 3,
    image: "/img/landing-page/how-it-works-icon-3.png",
    title: "Legal Compliance",
    description:
      "Let us coordinate the timely production of subpoenas and medical record requests to ensure compliance with all legal obligations and deadlines.coordinate the timely production of subpoenas and medical record requests to ensure compliance with all legal.",
  },
  {
    id: 4,
    image: "/img/landing-page/how-it-works-icon-4.png",
    title: "Paperless Solutions",
    description:
      "Transition to a paperless workflow as we scan and digitize files requested by other services, reducing clutter and boosting efficiency.to a paperless workflow as we scan and digitize files requested by other services, reducing clutter and boosting.",
  },
  {
    id: 5,
    image: "/img/landing-page/how-it-works-icon-5.png",
    title: "Patient-Centric Focus",
    description:
      "Use your staff's time to focus on patient care while we handle administrative burdens and record management tasks efficiently.your staff's time to focus on patient care while we handle administrative burdens and record management tasks.",
  },
];

export const HowDataWorks = () => {
  return (
    <div className="relative px-5 pt-8 2xl:pt-14 pb-10 bg-white" id="solutions">
      <div className="py-10 flex flex-col gap-20 p-5">
        {/* Highlights Section */}
        {HIGHLIGHTS.map((each, index) => (
          <div
            key={each.id}
            className={`flex items-center gap-8 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Icon Section */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <img
                src={each.image}
                className="w-[120px] h-[120px] mb-4"
                alt={`Icon ${each.id}`}
              />
              <h2 className="text-xl font-bold text-black" style={{color: 'black'}}>{each.title}</h2>
            </div>

            {/* Description Section */}
            <div className={`w-[75%] text-lg text-gray-700 leading-relaxed ${
                index % 2 === 0 ? "text-left" : "text-right"
              }`}>
              <p className="text-lg text-gray-700 leading-relaxed ">
                {each.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
