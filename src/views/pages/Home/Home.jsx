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

import quotebgimg from "../../../assets/quote1bg.png";
import quotebgimg2 from "../../../assets/quote2bg.png";

const Home = () =>{
    return(
        <>
            <HeroSection/>
            <AboutSection/>
            <Quotes quote="Your one-stop brand empowerment hub, leveling the playing field with tailored strategies and a commitment to your success." background={quotebgimg}/>
            <ServicesSection/>
            <Workflow/>
            <div className="blackbg"></div>
            <Quotes quote="Empowering businesses of any size to become formidable brands through comprehensive branding, marketing, and consulting solutions." background={quotebgimg2}/>            
            <div className="blackbg"></div>
            <Technologies />
            <Stats />
            <Testimonial />
            <CurvedCarousel />
            <Blog />
        </>
    )
}

export default Home;