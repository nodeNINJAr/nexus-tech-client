import React from "react";
import OurServices from "../../components/sections/Home/OurServices";
import Testimonial from "../../components/sections/Home/Testimonial";
import BannerSlider from "../../components/sections/Home/BannerSlider";
import KeyFeatures from "../../components/sections/Home/KeyFeatures";
import CTASection from "../../components/sections/Home/CTASection";
import {Helmet} from "react-helmet-async"
import FAQSection from "../../components/sections/Home/FaqSection";
import TechnologyStack from "../../components/sections/Home/TechnologyStack";
import OurProcess from "../../components/sections/Home/OurProcess";
import MeetOurTeam from "../../components/sections/Home/MeetOurTeam";


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
      {/* our process */}
      <OurProcess/>
      {/* tachnology stack */}
      <TechnologyStack/>
      {/* meet out team section */}
      <MeetOurTeam/>
      {/*faq section*/}
       <FAQSection/>
      {/*  */}
      <CTASection/>
    </div>
  );
};

export default Home;
