import React from "react";
import { Card, Button } from "antd";
import ServiceCard from "../../shared/card/ServiceCard";
const services = [
    {
      id: 1,
      icon: <i className="fas fa-code text-4xl text-blue-600"></i>,
      title: "Web Development",
      description: "Build scalable and responsive web applications tailored to your needs.",
    },
    {
      id: 2,
      icon: <i className="fas fa-mobile-alt text-4xl text-green-600"></i>,
      title: "Mobile App Development",
      description: "Create user-friendly mobile applications for iOS and Android platforms.",
    },
    {
      id: 3,
      icon: <i className="fas fa-cloud text-4xl text-purple-600"></i>,
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing to scale your business efficiently.",
    },
    {
      id: 4,
      icon: <i className="fas fa-shield-alt text-4xl text-red-600"></i>,
      title: "Cybersecurity",
      description: "Protect your business with state-of-the-art cybersecurity solutions.",
    },
  ];

//   
const OurServices = () => {
  return (
    <div className="py-16 px-4 font-roboto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-poppins">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
        {services.map((service) => (
           <ServiceCard key={service?.id} service={service}/>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
