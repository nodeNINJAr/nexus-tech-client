import React from "react";

const OurValues = () => {
  const values = [
    {
      title: "Innovation",
      description:
        "We thrive on innovation, continually developing new technologies and solutions to stay ahead of the curve.",
      icon: "🚀",
    },
    {
      title: "Customer Centricity",
      description:
        "Our clients are at the heart of everything we do. We listen, collaborate, and deliver solutions that drive results.",
      icon: "🤝",
    },
    {
      title: "Integrity",
      description:
        "We believe in transparency and honesty in all our dealings. Our clients trust us because we deliver on our promises.",
      icon: "✔️",
    },
    {
      title: "Excellence",
      description:
        "We are committed to the highest standards of quality, ensuring that every project exceeds expectations.",
      icon: "🏆",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
