import React, { useRef } from "react";
import "./CurvedCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { images } from "../../../assets/images";

export default function CurvedCarousel(props) {
  const swiperRef = useRef(); 
  return (
    <div className="curved-wrapper" style={{position:'relative',padding :'100px 0',background:'#0f1011'}}>
      <div className="row mx-auto">
        <h2 className="title" style={{textAlign:'center'}}>
          Our Work          
        </h2>
        <p className="text-center">
          See how we create 360° Value and help clients become the next and best
          versions of themselves.
        </p>
      </div>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="CurvedSwiper"
        loop={true}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
      }}
      >
        <SwiperSlide className="container3">
          <div className="container">
            <div className="row">
              <img src={images.work3} alt="" />
            </div>
            <div className="row">
              <div className="content animate__animated animate__fadeInUp">
                <h5>Social media design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                  ipsum aenean imperdiet
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="container4">
          <div className="container">
            <div className="row">
              <img src={images.work4} alt="" />
            </div>
            <div className="row">
              <div className="content animate__animated animate__fadeInUp">
                <h5>Social media design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                  ipsum aenean imperdiet
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="container5">
          <div className="container">
            <div className="row">
              <img src={images.work5} alt="" />
            </div>
            <div className="row">
              <div className="content animate__animated animate__fadeInUp">
                <h5>Social media design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                  ipsum aenean imperdiet
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="container2">
          <div className="container">
            <div className="row">
              <img src={images.work2} alt="" />
            </div>
            <div className="row">
              <div className="content animate__animated animate__fadeInUp">
                <h5>Social media design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                  ipsum aenean imperdiet
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="container1">
          <div className="container">
            <div className="row">
              <img src={images.work1} alt="" />
            </div>
            <div className="row">
              <div className="content animate__animated animate__fadeInUp">
                <h5>Social media design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                  ipsum aenean imperdiet
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="container3">
          <div className="container">
            <div className="row">
              <img src={images.work3} alt="" />
            </div>
            <div className="row">
              <div className="content animate__animated animate__fadeInUp">
                <h5>Social media design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                  ipsum aenean imperdiet
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="container4">
          <div className="container">
            <div className="row">
              <img src={images.work4} alt="" />
            </div>
            <div className="row">
              <div className="content animate__animated animate__fadeInUp">
                <h5>Social media design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                  ipsum aenean imperdiet
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="container5">
          <div className="container">
            <div className="row">
              <img src={images.work5} alt="" />
            </div>
            <div className="row">
              <div className="content animate__animated animate__fadeInUp">
                <h5>Social media design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                  ipsum aenean imperdiet
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="container2">
          <div className="container">
            <div className="row">
              <img src={images.work2} alt="" />
            </div>
            <div className="row">
              <div className="content animate__animated animate__fadeInUp">
                <h5>Social media design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                  ipsum aenean imperdiet
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="container1">
          <div className="container">
            <div className="row">
              <img src={images.work1} alt="" />
            </div>
            <div className="row">
              <div className="content animate__animated animate__fadeInUp">
                <h5>Social media design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                  ipsum aenean imperdiet
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="custom-nav">
          <button className="btn-prev" onClick={() => swiperRef.current?.slidePrev()}>
          <svg width="34" height="7" viewBox="0 0 34 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.9121 5.70898H5.80976M5.80976 5.70898H0.742123C2.73846 5.09473 6.91543 3.22124 7.65254 0.641348C7.19184 2.33056 6.17832 5.70898 5.80976 5.70898Z" stroke="white"/>
          </svg>


          </button>
          <button className="btn-next" onClick={() => swiperRef.current?.slideNext()}>
            <svg width="34" height="7" viewBox="0 0 34 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.664062 5.70898H28.7664M28.7664 5.70898H33.834C31.8377 5.09473 27.6607 3.22124 26.9236 0.641348C27.3843 2.33056 28.3979 5.70898 28.7664 5.70898Z" stroke="white"/>
            </svg>

          </button>
      </div>
      </Swiper>
    </div>
  );
}
