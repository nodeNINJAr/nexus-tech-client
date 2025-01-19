
import React from "react";
import {Link} from "react-router-dom"

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white font-roboto">
      <div className="px-4 text-center bg-black bg-opacity-50 py-16 ">
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
