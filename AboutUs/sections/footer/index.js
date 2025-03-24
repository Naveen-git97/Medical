import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#5F5D5D2B]">
      <div className="container mx-auto px-5">
        <div className="py-10 text-2xl font-semibold text-white flex justify-center gap-16">
          <div className="flex gap-4">
            <img src="/img/landing-page/mail_icon.png" className="w-8 h-8" />
            <p>info@neweraservices.net</p>
          </div>
          <div className="flex gap-4">
            <img src="/img/landing-page/phone_icon.png" className="w-8 h-8" />
            <p>+1 213 471 2471</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container mx-auto px-5">
        <div className="flex justify-between py-11">
          <img
            src="/img/landing-page/newera_logo_img.png"
            className="w-20 h-11 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="text-xl font-normal text-white text-center">
            <p>DBA Skyline Legal Services, 21515 Hawthorne Blvd Suite 200, Torrance, CA 90503</p>
            <p>info@neweraservices.net | +1 213 471 2471</p>
          </div>
          <img
            src="/img/landing-page/linkedin_icon.png"
            className="w-11 h-11"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
