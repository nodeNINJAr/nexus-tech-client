import React from "react";
import { CheckCircleOutlined, CloudOutlined, CodeOutlined } from "@ant-design/icons";

const KeyFeatures = () => {
  const features = [
    {
      icon: (
        <CloudOutlined
          style={{ fontSize: "2rem" }}
          className="text-[#1890ff] dark:text-blue-400"
        />
      ),
      title: "Cloud Solutions",
      description:
        "Seamless cloud migration and management services tailored for businesses of all sizes.",
    },
    {
      icon: (
        <CodeOutlined
          style={{ fontSize: "2rem" }}
          className="text-[#52c41a] dark:text-green-400"
        />
      ),
      title: "Custom Software Development",
      description:
        "Bespoke software solutions to address unique business challenges.",
    },
    {
      icon: (
        <CheckCircleOutlined
          style={{ fontSize: "2rem" }}
          className="text-[#faad14] dark:text-yellow-400"
        />
      ),
      title: "Cybersecurity",
      description:
        "Comprehensive cybersecurity strategies to protect your data and operations.",
    },
  ];

  return (
    <section className="pt-16 bg-gray-100 font-roboto dark:bg-gray-900">
      <div className="px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white font-poppins">
          Why Choose NexusTech?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:border-gray-700 dark:shadow-none"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;