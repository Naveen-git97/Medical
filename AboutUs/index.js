import React from "react";
import BrandIntro from "./sections/brand_intro";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Navbar from "./sections/navbar";
import OurClients from "./sections/our_clients";
import { HowItWorks } from "./sections/how-it-works/HowItWorks";
// import { ContactForm } from "./sections/contact-us/ContactForm";
import { ContactUs } from "./sections/contact-us/ContactUs";
import OurServices from "./sections/our_services";
import { HowDataWorks } from "./sections/our_data";

const AboutUs = () => (
  <div className="bg-[#0E131B]">
    <OurServices/>
    <BrandIntro />
    <HowDataWorks/>
    <HowItWorks />
    <OurClients />
    <ContactUs />
    <Footer />
  </div>
);

export default AboutUs;
