import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from "../../../Components/utils/Banner/Banner";
import Ourstorysection from "../../../Components/About/OurStorySection/Ourstorysection";
import Ourvaluesection from "../../../Components/About/OurvalueSection/Ourvaluesection";
import AboutLogo from "../../../Components/About/aboutLogo/aboutLogo";
import Ourculture from "../../../Components/About/OurCulture";
import ServAvail from "../../../Components/About/ServiceSection";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      const sectionId = location.hash.slice(1); // Remove '#' from the hash
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    scrollToSection(); // Initial scroll when component mounts

    // Scroll again when location changes (e.g., hash changes)
    const unlisten = () => {
      scrollToSection();
    };
    return () => unlisten();
  }, [location]);

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
      <Ourculture  />
      <ServAvail />
    </>
  );
};

export default About;
