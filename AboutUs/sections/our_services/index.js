import React from "react";

const OurServices = () => {
  const services = [
    {
      title: "Web Development",
      icon: "💻",
      content:
        "We offer custom web development services that help businesses build their online presence and reach a larger audience.",
      buttonText: "Read More...",
    },
    {
      title: "Web Design",
      icon: "🖥️",
      content:
        "Our team of experts creates unique and visually appealing web designs that help businesses stand out online.",
      buttonText: "Read More...",
    },
    {
      title: "Mobile Apps",
      icon: "📱",
      content:
        "Our team of mobile app developers creates custom apps for businesses to help them reach customers, increase engagement, and improve efficiency.",
      buttonText: "Read More...",
    },
    {
      title: "SEO Optimization",
      icon: "📈",
      content:
        "We offer SEO services to improve your website's visibility and search engine ranking.",
      buttonText: "Read More...",
    },
    {
      title: "Cloud Services",
      icon: "☁️",
      content:
        "We help businesses migrate to the cloud and implement scalable cloud solutions.",
      buttonText: "Read More...",
    },
    {
      title: "E-Commerce Solutions",
      icon: "🛒",
      content:
        "Our team specializes in creating e-commerce platforms tailored to your needs.",
      buttonText: "Read More...",
    },
    {
      title: "Web Development",
      icon: "💻",
      content:
        "We offer custom web development services that help businesses build their online presence and reach a larger audience.",
      buttonText: "Read More...",
    },
    {
      title: "Web Design",
      icon: "🖥️",
      content:
        "Our team of experts creates unique and visually appealing web designs that help businesses stand out online.",
      buttonText: "Read More...",
    },
    {
      title: "Mobile Apps",
      icon: "📱",
      content:
        "Our team of mobile app developers creates custom apps for businesses to help them reach customers, increase engagement, and improve efficiency.",
      buttonText: "Read More...",
    },
  ];

  return (
    <div className="bg-white text-black py-20">
      <div className="container mx-auto grid grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-lg shadow-md text-center flex flex-col items-center"
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h3 className="text-2xl mb-4" style={{color: "rgb(12 12 13)"}}>{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.content}</p>
            <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
