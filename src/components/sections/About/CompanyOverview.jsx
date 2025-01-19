import React from "react";
import teamImage from "../../../assets/image/meeting.png"

const CompanyOverview = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          About NexusTech
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Empowering Businesses with Innovative Technology
            </h3>
            <p className="text-gray-600 mb-6">
              NexusTech is a leading provider of technology solutions, committed to helping businesses leverage
              cutting-edge tools and strategies to thrive in a digital-first world. We specialize in custom software
              development, cloud services, and cybersecurity, delivering tailored solutions that ensure scalability,
              security, and efficiency.
            </p>
            <p className="text-gray-600">
              At NexusTech, we believe in building long-lasting relationships with our clients and providing
              ongoing support to help them grow and succeed in their digital transformation journey.
            </p>
          </div>
          <div>
            <img
              src={teamImage}
              alt="NexusTech Team"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
