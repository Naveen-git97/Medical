import { Container } from "components/shared";
import { HowItWorksCard } from "landingPage/components/cards/HowItWorksCard";
import React from "react";

export const HowItWorksInfo = () => {
  return (
    <div className="relative px-5">
      <Container>
        <div className="pt-16">
          <p className="text-white font-semibold text-[40px] w-4/5">
            New Era promotes paperless record-keeping and advocates for
            sustainable solutions through innovation and energy-efficient
            technology. Together, we can make a difference.
          </p>
          <div className="pt-10 pb-14 flex flex-col gap-10">
            <HowItWorksCard
              title={"Custodian of records / In-house copy service"}
              image={"/img/landing-page/record-custodian-thumbnail.png"}
              descriptions={[
                "We offer complete management of medical record subpoenas and authorization requests for various entities, including law firms, insurance companies, medical facilities, patients, and more.",
                "We handle all communication related to the subpoena and medical records request process from start to finish, including all parties involved.",
              ]}
            />
            <HowItWorksCard
              title={"Records management"}
              image={"/img/landing-page/record-management-thumbnail.png"}
              descriptions={[
                "We offer in-house management of medical records departments.",
                "Our services include organizing paper files and charts into electronic format, as well as high-volume scanning with OCR to make records searchable.",
                "We provide secure electronic storage and forwarding services via proprietary software, with the ability to view records anywhere. Our technology is HIPAA compliant, and we also offer certified file shredding and destruction services.",
              ]}
              classes="flex-row-reverse"
            />
            <HowItWorksCard
              title={"Radiological services"}
              image={"/img/landing-page/radiological-services.png"}
              descriptions={[
                "We specialize in the duplication of X-ray and MRI films, both onsite and offsite.",
                "Our services also include scanning of X-ray and MRI films to CD or DVD format, and printing from CD/DVD to hard copy.",
                "We offer high-volume archiving of X-ray and MRI films in digital format for easy access and storage.",
              ]}
            />
          </div>
        </div>
      </Container>
      <img
        src="/img/landing-page/contact-us-left-bg-effect.png"
        className="absolute -left-20 top-[60%] -translate-y-1/2 select-none"
        alt="left-center-effect"
      />
      <img
        src="/img/landing-page/how-it-works-right-bg-effect-green.png"
        className="absolute -right-10 -bottom-52  select-none "
        alt="left-center-effect"
      />
      <img
        src="/img/landing-page/how-it-works-right-bg-effect-blue.png"
        className="absolute -right-10 -top-0  select-none"
        alt="left-center-effect"
      />
    </div>
  );
};
