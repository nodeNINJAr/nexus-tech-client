import React from "react";
import { Collapse } from "antd";

const FAQSection = () => {
  const itemsLeft = [
    {
      key: "1",
      label: "What services does NexusTech provide?",
      children: <p>We specialize in web development, mobile app development, cloud solutions, cybersecurity, and custom software development.</p>,
    },
    {
      key: "2",
      label: "How does the development process work?",
      children: <p>We follow a structured approach: consultation, planning, development, testing, and deployment.</p>,
    },
    {
      key: "3",
      label: "What industries do you serve?",
      children: <p>We work with businesses in fintech, healthcare, e-commerce, education, and more.</p>,
    },
    {
      key: "4",
      label: "How long does it take to complete a project?",
      children: <p>Project timelines vary depending on scope and complexity. Small projects take 4-6 weeks, while larger systems may take 3-6 months.</p>,
    },
    {
      key: "5",
      label: "How can I get a quote?",
      children: <p>Simply contact us through our website, and we’ll discuss your project requirements to provide a custom quote.</p>,
    },
  ];

  const itemsRight = [
    {
      key: "6",
      label: "Do you provide post-launch support?",
      children: <p>Yes! We offer maintenance and support services to ensure your project remains secure and up-to-date.</p>,
    },
    {
      key: "7",
      label: "Can you work with startups and small businesses?",
      children: <p>Absolutely! We tailor our services to fit businesses of all sizes, from startups to enterprises.</p>,
    },
    {
      key: "8",
      label: "Which technologies do you use?",
      children: <p>We use React, Next.js, Node.js, MongoDB, PostgreSQL, AWS, Docker, and other modern technologies.</p>,
    },
    {
      key: "9",
      label: "Do you sign NDAs for confidential projects?",
      children: <p>Yes, we can sign an NDA to ensure your project's confidentiality.</p>,
    },
    {
      key: "10",
      label: "How can I start a project with NexusTech?",
      children: <p>Simply reach out via our Contact Us page, and our team will guide you through the next steps.</p>,
    },
  ];

  return (
    <div className="faq-section mx-auto pb-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-poppins">Frequently Asked Questions</h2>
      {/* Flexbox Layout for Two Columns */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <Collapse accordion items={itemsLeft} className="font-rubik text-lg text-gray-900 font-normal" />
        </div>
        
        {/* Right Column */}
        <div className="w-full md:w-1/2">
          <Collapse accordion items={itemsRight} className="font-rubik text-lg text-gray-900 font-normal" />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
