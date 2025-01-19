
import React from "react";
import {Link} from "react-router-dom"

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-roboto">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 font-poppins">Ready to Transform Your Business?</h2>
        <p className="text-lg mb-8">
          Partner with NexusTech for innovative tech solutions that drive growth
          and success. Let's shape the future together.
        </p>
        <Link
          to={"/contact-us"}
          className="font-rubik inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100"
        >
          Contact Us Now
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
