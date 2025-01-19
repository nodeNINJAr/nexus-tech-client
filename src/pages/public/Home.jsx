import React from "react";
import OurServices from "../../components/sections/Home/OurServices";
import Testimonial from "../../components/sections/Home/Testimonial";
import BannerSlider from "../../components/sections/Home/BannerSlider";
import KeyFeatures from "../../components/sections/Home/KeyFeatures";
import CTASection from "../../components/sections/Home/CTASection";

const Home = () => {
  return (
    <div className=" min-h-screen">
      {/* banner slider */}
      <BannerSlider />
      {/* services */}
      <OurServices />
      {/* testominial */}
      <Testimonial />
      {/*  */}
      <KeyFeatures/>
      {/*  */}
      <CTASection/>
    </div>
  );
};

export default Home;
