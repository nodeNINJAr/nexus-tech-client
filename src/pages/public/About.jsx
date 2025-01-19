import React from "react";
import CompanyOverview from "../../components/sections/About/CompanyOverview";
import OurValues from "../../components/sections/About/OurValues";

const About = () => {
  return (
    <div>
      {/* company overview */}
      <CompanyOverview />
      {/* our values */}
      <OurValues />
    </div>
  );
};

export default About;
