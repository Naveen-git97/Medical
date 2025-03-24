import React from "react";

const BrandIntro = () => {
  return (
    <div className="bg-balck text-white" id="about">
      <div className="container mx-auto px-5 flex items-center gap-20 py-32">
        <div>
          <p className="text-[40px] font-semibold leading-[56px]">
            Fast, reliable and trustworthy document reproduction services,
            tailored for your specific needs.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-lg font-normal">
            Our services include paperless record-keeping & document management.
            We value transparency and communication, which is why we are
            committed to keeping you informed throughout the process.
          </p>
          <div className="flex gap-11">
            <div>
              <p className="text-3xl font-bold">100+</p>
              <p className="text-lg font-semibold">Happy Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold">250+</p>
              <p className="text-lg font-semibold">Requests</p>
            </div>
            <div>
              <p className="text-3xl font-bold">300+</p>
              <p className="text-lg font-semibold">Accounts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIntro;
