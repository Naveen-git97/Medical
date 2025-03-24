import { Container } from "components/shared";
import React from "react";
import { HowItWorksHeader } from "./Header";
import { HowItWorksInfo } from "./HowItWorksInfo";
import { Testimonials } from "../contact-us/Testimonials";

export const HowItWorks = () => {
  return (
    <div className="overflow-hidden bg-[#0E131B]">
      <HowItWorksHeader />
      <HowItWorksInfo />
    </div>
  );
};
