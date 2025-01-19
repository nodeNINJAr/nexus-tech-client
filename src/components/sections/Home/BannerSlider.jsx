import React from "react";
import { Button, Carousel } from "antd";

// Data for the hero slider
const heroSlides = [
  {
    id: 1,
    image:
      "https://via.placeholder.com/1200x600/ff7f7f/333333?text=Global+Impact",
    title: "Global Impact",
    subtitle: "Serving clients in over 50 countries worldwide.",
    description:
      "We have expanded our reach to over 50 countries, delivering innovative solutions that empower businesses globally.",
  },
  {
    id: 2,
    image:
      "https://via.placeholder.com/1200x600/7f7fff/333333?text=Customer+Satisfaction",
    title: "99% Customer Satisfaction",
    subtitle: "Trusted by 10,000+ satisfied clients.",
    description:
      "Our customer-first approach has earned us a 99% satisfaction rate across our diverse client base.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/1200x600/7fff7f/333333?text=Innovation",
    title: "Leading in Innovation",
    subtitle: "Pioneering cutting-edge tech solutions.",
    description:
      "We stay ahead of the curve with our cutting-edge technologies, ensuring top-notch solutions for our clients.",
  },
  {
    id: 4,
    image:
      "https://via.placeholder.com/1200x600/7f7f7f/333333?text=Achievements",
    title: "Award-Winning Team",
    subtitle: "Recognized by industry leaders.",
    description:
      "Our team has been recognized for excellence and innovation with numerous awards in the tech industry.",
  },
];

const BannerSlider = () => {
  return (
    <div className="relative w-full font-rubik">
      {/* Hero Slider */}
      <Carousel autoplay effect="fade">
        {heroSlides.map((slide) => (
          <div key={slide.id} className="relative">
            {/* Background Image */}
            <div className="w-full h-[450px] object-cover bg-gradient-to-r from-[#00c6ff] to-[#0072ff]"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start text-white px-4 sm:px-8 md:px-16 lg:px-24">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-poppins">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl font-medium mb-4">
                {slide.subtitle}
              </p>
              <p className="text-sm md:text-base lg:text-lg max-w-2xl mb-6">
                {slide.description}
              </p>
              <Button color="primary" variant="outlined">
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerSlider;
