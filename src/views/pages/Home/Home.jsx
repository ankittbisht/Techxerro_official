import React from "react";
import HeroSection from "../../../Components/Home/Hero-section";
import ServicesSection from "../../../Components/Home/Services-section";
import AboutSection from "../../../Components/Home/About-section";
import Quotes from "../../../Components/Home/Quotes/quotes";
import Workflow from "../../../Components/Home/workflow/Workflow";
import Technologies from "../../../Components/Home/technologies/Technologies";
import Stats from "../../../Components/Home/Stats/stats";
import Testimonial from "../../../Components/Home/Testimonial/Testimonial";
import CurvedCarousel from "../../../Components/Home/CurvedCarousel/CurvedCarousel";
import Blog from "../../../Components/Home/Blog/Blog";

import quotebgimg from "../../../assets/Home/quote1.png";
import quotebgimg2 from "../../../assets/Home/quote2.png";
import Mobilescroll from "../../../Components/Home/Services-section/Mobilescroll";
import Marqueelogo from "../../../Components/Home/MarqueeLogo";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Marqueelogo/>
      <AboutSection />
      <Quotes
        quote="Your one-stop brand empowerment hub, leveling the playing field with tailored strategies and a commitment to your success."
        background={quotebgimg}
      />
      <ServicesSection />
      <Workflow />
      <Technologies />
      {/* <div className="blackbg"></div> */}
      <CurvedCarousel />
      <Stats />
      <Quotes
        quote="Empowering businesses of any size to become formidable brands through comprehensive branding, marketing, and consulting solutions."
        background={quotebgimg2}
      />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
