import React, { useRef } from "react";
import "./CurvedCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "../../../assets/images";

export default function CurvedCarousel(props) {
  const swiperRef = useRef();
  return (
    <div className="curved-wrapper">
      <div className="row mx-auto">
        <h2 className="title" style={{ textAlign: "center" }}>
          Our Work
        </h2>
        <p className="text-center">
          See how we create 360° Value and help clients become the next and best
          versions of themselves.
        </p>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="CurvedSwiper"
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={800}
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
                  Crafting engaging visuals, driving brand recognition and
                  engagement.
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
                <h5>Logo design</h5>
                <p>Creating memorable brand identities, capturing essence.</p>
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
                <h5>Graphic Designing</h5>
                <p>
                  Crafting visuals, bringing brands to life creatively with
                  precision.
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
                  Crafting engaging visuals, driving brand recognition and
                  engagement strategically.
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
                <h5>UI/UX design</h5>
                <p>
                  Crafting seamless experiences, enhancing user interactions
                  effectively and creatively.
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
                <h5>Creative design</h5>
                <p>
                  Innovating visually, translating ideas into captivating
                  experiences effectively.
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
                <h5>Brand design</h5>
                <p>
                  Shaping identities, conveying essence through memorable
                  visuals effectively.
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
                <h5>Professional Work</h5>
                <p>
                  Delivering quality results, exceeding expectations
                  consistently with expertise.
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
                <h5>Website design</h5>
                <p>
                  Crafting user-friendly interfaces, delivering memorable
                  digital experiences effectively.
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
                <h5>Product Packaging</h5>
                <p>
                  Creating eye-catching visuals, elevating brand recognition and
                  appeal seamlessly.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="custom-nav">
          <button
            className="btn-prev"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg
              width="29"
              height="37"
              viewBox="0 0 29 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4057 13.38L8.5957 21.19L16.4057 29"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            className="btn-next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg
              width="29"
              height="37"
              viewBox="0 0 29 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5943 13.38L20.4043 21.19L12.5943 29"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
}
