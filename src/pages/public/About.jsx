import React from "react";
import CompanyOverview from "../../components/sections/About/CompanyOverview";
import OurValues from "../../components/sections/About/OurValues";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us || NexusTech</title>
      </Helmet>
      {/* company overview */}
      <CompanyOverview />
      {/* our values */}
      <OurValues />
    </div>
  );
};

export default About;
