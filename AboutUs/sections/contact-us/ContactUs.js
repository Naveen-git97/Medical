import React from "react";
import { Testimonials } from "./Testimonials";
import { ContactForm } from "./ContactForm";
import { Container } from "components/shared";

export const ContactUs = () => {
  return (
    <div className="relative" id="contact">
      <Container>
        <div className="flex justify-evenly gap-20 pt-20 pb-24 px-5 ">
          <Testimonials />
          <ContactForm />
          <img
            src="/img/landing-page/contact-us-left-bg-effect.png"
            className="absolute left-0 -top-1/3 -z-10 select-none"
            alt="left-effect"
          />
          <img
            src="/img/landing-page/contact-us-right-bg-effect.png"
            className="absolute right-0 -bottom-52 -z-10 select-none"
            alt="right-effect"
          />
        </div>
      </Container>
    </div>
  );
};
