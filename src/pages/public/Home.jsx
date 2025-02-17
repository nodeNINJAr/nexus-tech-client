import React from "react";
import OurServices from "../../components/sections/Home/OurServices";
import Testimonial from "../../components/sections/Home/Testimonial";
import BannerSlider from "../../components/sections/Home/BannerSlider";
import KeyFeatures from "../../components/sections/Home/KeyFeatures";
import CTASection from "../../components/sections/Home/CTASection";
import {Helmet} from "react-helmet-async"
import FAQSection from "../../components/sections/Home/FaqSection";
import TechnologyStack from "../../components/sections/Home/TechnologyStack";


const Home = () => {
  return (
    <div className=" min-h-screen">
      <Helmet>
        <title>Home || NexusTech</title>
      </Helmet>
      {/* banner slider */}
      <BannerSlider />
      {/* services */}
      <OurServices />
      {/* testominial */}
      <Testimonial />
      {/*  */}
      <KeyFeatures/>
      {/* tachnology stack */}
      <TechnologyStack/>
      {/*faq section*/}
       <FAQSection/>
      {/*  */}
      <CTASection/>
    </div>
  );
};

export default Home;
