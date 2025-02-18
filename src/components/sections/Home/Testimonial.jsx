import React from "react";
import { Carousel } from "antd";
import './css/testimonial.css';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, TechCorp",
    review:
      "NexusTech provided us with incredible web solutions. Their team is highly skilled and professional.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CTO, Innovate Inc.",
    review:
      "The mobile app developed by NexusTech exceeded our expectations. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Mark Wilson",
    title: "Product Manager, Cloudify",
    review:
      "Their cloud solutions streamlined our operations and improved efficiency dramatically.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Sophia Taylor",
    title: "Entrepreneur",
    review:
      "The team at NexusTech is phenomenal. Their cybersecurity solutions gave us peace of mind.",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];

// Inline styles for the content
const contentStyle = {
  margin: 0,
  padding: "20px",
  height: "240px",
  color: "#fff",
  textAlign: "center",
  background: "transparent",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Testimonial = () => (
  <div className="font-roboto dark:bg-gray-900">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white font-poppins">
      What Our Clients Say
    </h2>

    {/* Carousel */}
    <Carousel
      autoplay
      autoplaySpeed={3000}
      effect="fade"
      arrows
      dotPosition="left"
      infinite={false}
      className="dark:[&_.ant-carousel-dot]:bg-gray-700 dark:[&_.ant-carousel-dot-active]:bg-white"
    >
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="py-8 md:py-2">
          <div style={contentStyle}>
            {/* Avatar */}
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4 shadow-md dark:border-gray-600"
            />
            {/* Review */}
            <p className="text-lg italic text-gray-400 dark:text-gray-300">
              {testimonial.review}
            </p>
            {/* Name */}
            <h3 className="mt-4 text-lg font-bold text-gray-600 dark:text-white font-rubik">
              {testimonial.name}
            </h3>
            {/* Title */}
            <p className="text-sm italic text-gray-400 dark:text-gray-500">
              {testimonial.title}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default Testimonial;