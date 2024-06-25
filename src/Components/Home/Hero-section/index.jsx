import React, { useEffect } from "react";
import "./style.scss"; 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HeroSection = () => {
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
          <div className="row Hero-section align-items-center">
            <div className="col-lg-6 col-md-12 pd50 slider-content order-lg-1 order-md-2 order-2">
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
                <LazyLoadImage
                  src={require("../../../assets/logobanner.png")}
                  alt="techxerroslogo"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                  effect="blur"
                />
              </div>
            </div>

            <div className="col-12 order-3 d-lg-block d-sm-none d-none">
              <div className="basebox">
                <div className="d-flex gap-4">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={require("../../../assets/searchicon.png")}
                      alt=""
                    />
                    <span>I am here to:</span>
                  </div>
                  <ul className="baseboxoptions d-flex gap-4 align-items-center">
                    <li>
                      <a href="/contact" target="_blank">
                        Brand my Business
                      </a>
                    </li>
                    <li>
                      <a href="/contact" target="_blank">
                        Consultation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-flex align-items-center descriptionbox gap-3">
                  <span classname="descriptiontext">
                    <a href="#" target="_blank">
                      Find the best solutions for your business
                    </a>
                  </span>
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5943 1.38L9.4043 9.19L1.5943 17"
                      stroke="#666666"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
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
