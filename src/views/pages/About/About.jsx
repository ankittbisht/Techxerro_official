import React from "react";
import Banner from "../../../Components/utils/Banner/Banner";
import Ourstorysection from "../../../Components/About/OurStorySection/Ourstorysection";
import Ourvaluesection from "../../../Components/About/OurvalueSection/Ourvaluesection";
import AboutLogo from "../../../Components/About/aboutLogo/aboutLogo";
import Ourculture from "../../../Components/About/OurCulture";
import ServAvail from "../../../Components/About/ServiceSection";

const About = () => {
  return (
    <>
      <Banner
        title={[`Unleashing Potential,`, <br />, `Delivering Excellence`]}
        subtitle="Who we are"
        para="TechXerro: Your catalyst for digital dominance. Elevate your brand's online identity with our seamless blend of creativity and data-driven strategies."
      />
      <Ourstorysection />
      <Ourvaluesection />
      <AboutLogo />
      <Ourculture />
      <ServAvail />
    </>
  );
};

export default About;
