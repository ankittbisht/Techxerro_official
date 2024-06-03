import React, { useEffect } from "react";
import "./style.scss";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const HeroSection = () => {
  const items = {
    nav: true,
    navText: [
      `<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.4057 17.3036L1.5957 9.49359L9.4057 1.68359" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
        `,
      `<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.02789 1.06359L8.83789 8.87359L1.02789 16.6836" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
    ],
    smartSpeed: 100,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      // breakpoint from 480 up
      480: {
        items: 1,
      },
      // breakpoint from 768 up
      768: {
        items: 1,
      },
      1028: {
        items: 1,
      },
    },
  };

  useEffect(() => {
    let dots = document.querySelectorAll(
      ".Hero-section .hide-on-mobile .owl-items"
    );
    let numberofSlides = dots.length;

    for (let x = 0; x < numberofSlides; x++) {
      console.log(dots[x].className);
      if (dots[x].classList.contains("active")) {
        console.log(x + " is the active slide");
      }
    }
  });

  return (
    <>
      <section className="hero-sec-wrapper">
        <div className="container">
          {/* <OwlCarousel className='owl-theme hide-on-mobile' {...items} items={1} loop margin={40} nav={false} dots={false} autoplaySpeed={5000} autoplayTimeout={3000}> */}

          <div className="row Hero-section align-items-center">
            <div
              className="col-lg-6 col-md-12 pd50 slider-content order-lg-1 order-md-2 order-2"              
            >
              <div>
                <div className="bannerText">
                  <div>
                    <h6 data-aos="fade-left" data-aos-delay="100">
                      Welcome, we're
                    </h6>
                    <h2 data-aos="fade-right" data-aos-delay="200">
                      TechXerro
                    </h2>
                  </div>
                </div>

                <div
                  className="content align-items-center pb-2"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <p>Experience One-Stop Brand Empowerment with TechXerro </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 d-flex justify-content-lg-center justify-content-md-start order-lg-2 order-md-1 order-1">
              <div className="banner-1">
                <img
                  src={require("../../../assets/logobanner.png")}
                  alt="techxerroslogo"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                />
              </div>
            </div>

            <div className="col-12 order-3 d-lg-block d-sm-none d-none">
              <div className="basebox">
                <div  className="d-flex gap-4">
                  <div className="d-flex align-items-center gap-2">
                    <img src={require('../../../assets/searchicon.png')} alt="" />
                    <span>I am here to:</span>
                  </div>
                  <ul className="baseboxoptions d-flex gap-4 align-items-center">
                    <li><a href="/contact" target="_blank">Brand my Business</a></li>
                    <li><a href="/contact" target="_blank">Consultation</a></li>
                  </ul>
                </div>
                <div className="d-flex align-items-center descriptionbox gap-3"> 
                  <span classname="descriptiontext"><a href="#" target="_blank">Find the best solutions for your business</a></span>
                  <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5943 1.38L9.4043 9.19L1.5943 17" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
