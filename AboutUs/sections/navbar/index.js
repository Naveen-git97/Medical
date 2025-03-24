import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const ScrollToSection = (section) => {
  document.getElementById(section).scrollIntoView({
    behavior: "smooth",
  });
};

const Navbar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollTo) {
      ScrollToSection(scrollTo);
    }
  }, [scrollTo]);

  const navigateHandler = () => {
    ScrollToSection(scrollTo);
  };
  return (
    <div className="container mx-auto px-5 h-[100px] flex items-center justify-between md:flex-col sm:flex-col  md:pt-5 sm:pt-5 md:px-1 sm:px-1 gap-5 md:w-max-[100%] sm:max-w-[100%]">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <img src="/img/landing-page/newera_logo.png" className="w-40 h-7" />
      </div>
      <div className="flex gap-16 sm:gap-4 md:gap-8 text-lg font-medium text-white">
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/?scrollTo=solutions");
            navigateHandler();
          }}
        >
          Solutions
        </p>
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/aboutUs");
            navigateHandler();
          }}
        >
          About Us
        </p>
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/?scrollTo=clients");
            navigateHandler();
          }}
        >
          Client
        </p>
        <p
          className="cursor-pointer"
          // onClick={() => ScrollToSection("section-contact")}
          onClick={() => {
            navigate("/?scrollTo=contact");
            navigateHandler();
          }}
        >
          Contact Us
        </p>
      </div>
      <div>
        <button
          className="text-base font-semibold text-white outline outline-1 px-12 h-12 rounded-lg"
          onClick={() => navigate("/sign-in")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
