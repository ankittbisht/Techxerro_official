import React, { useRef } from "react";
import "./CurvedCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "../../../assets/images";
import web1 from "../../../assets/Service/Web1.png";
import web2 from "../../../assets/Service/Web2.png";
import web3 from "../../../assets/Service/Web3.png";
import web4 from "../../../assets/Service/Web4.png";
import web5 from "../../../assets/Service/work2.png";

import SM1 from "../../../assets/Service/SM1.png";
import SM2 from "../../../assets/Service/SM2.png";
import SM3 from "../../../assets/Service/SM3.png";
import SM4 from "../../../assets/Service/SM4.png";
import SM5 from "../../../assets/Service/SM5.png";

import mrk1 from "../../../assets/Service/Marketing1.png";
import mrk2 from "../../../assets/Service/Marketing2.png";
import mrk3 from "../../../assets/Service/Marketing3.png";
import mrk4 from "../../../assets/Service/Marketing4.png";
import mrk5 from "../../../assets/Service/Marketing5.png";

import mob1 from "../../../assets/Service/Mob1.png";
import mob2 from "../../../assets/Service/Mob2.png";
import mob3 from "../../../assets/Service/Mob3.png";
import mob4 from "../../../assets/Service/Mob4.png";
import mob5 from "../../../assets/Service/Mob5.png";

export default function CurvedCarousel(props) {
  const imgStyle = {
    transform: "translate(-50%, -50%)",
    position: "absolute",
    top: "70%",
    left: "50%",
  };

  const items = [
    {
      id: 1,
      tabid: "home1",
      tablabel: "home1-tab",
      imgs: [mob1, mob2, mob3, mob4, mob5],
      bg: ["#624ED1", " #CAE9FE", "#C7C7C7", "#D8CFEE", "#7200E3"],
    },
    {
      id: 2,
      tabid: "Branding",
      tablabel: "Branding-tab",
      imgs: [web1, web3, web2, web4, web5],
      bg: ["#01A95B", "#ECE7D7", "#40403F", "#FEF8D9", "#ECE7D7"],
    },
    {
      id: 3,
      tabid: "SocialMedia",
      tablabel: "SocialMedia-tab",
      imgs: [SM1, SM2, SM3, SM4, SM5],
      bg: ["#BBA9B9", "#2C2C2C", "#01A95B", "#4E5050", "#C9C9C9"],
    },
    {
      id: 4,
      tabid: "Marketing",
      tablabel: "Marketing-tab",
      imgs: [mrk1, mrk2, mrk3, mrk4, mrk5],
      bg: ["#09247B", "#B31E22", "#01A95B", "#EAF5EB", "#158942"],
    },
  ];
  const swiperRefs = useRef(items.map(() => React.createRef()));

  const ulRef = useRef(null);
  const handleMenuClick = (e) => {
    e.preventDefault();
    const dataPosition = e.target.dataset.position;

    e.target.parentElement.parentElement.classList.add(`pos${dataPosition}`);

    document.querySelector(".menbar").style.width = e.target.offsetWidth + "px";
    if (dataPosition === "0") {
      document.querySelector(".menbar").style.left = "0";
    } else if (dataPosition === "100") {
      document.querySelector(".menbar").style.left = "145px";
    } else if (dataPosition === "200") {
      document.querySelector(".menbar").style.left = "280px";
    } else if (dataPosition === "300") {
      document.querySelector(".menbar").style.left = "420px";
    } else if (dataPosition === "400") {
      document.querySelector(".menbar").style.left = "560px";
    }
  };

  return (
    <div className="curved-wrapper">
      <div className="container">
        <h2 className="title">
          Our <span style={{ color: "#FF0000" }}> Work</span>
        </h2>
        <p className="intro">
          Crafting 360° Value: Empowering Clients' Evolution
        </p>

        <ul className="nav nav-tabs" id="myTab" role="tablist" ref={ulRef}>
          <li
            className="nav-item"
            role="presentation"
            onClick={(e) => handleMenuClick(e)}
          >
            <button
              className="nav-link active"
              id="home1-tab"
              data-bs-toggle="tab"
              data-bs-target="#home1"
              type="button"
              role="tab"
              aria-controls="home1"
              aria-selected="true"
              data-position="0"
            >
              Website
            </button>
          </li>
          <li
            className="nav-item"
            role="presentation"
            onClick={(e) => handleMenuClick(e)}
          >
            <button
              className="nav-link"
              id="Branding-tab"
              data-bs-toggle="tab"
              data-bs-target="#Branding"
              type="button"
              role="tab"
              aria-controls="Branding"
              aria-selected="false"
              data-position="100"
            >
              Branding
            </button>
          </li>
          <li
            className="nav-item"
            role="presentation"
            onClick={(e) => handleMenuClick(e)}
          >
            <button
              className="nav-link"
              id="SocialMedia-tab"
              data-bs-toggle="tab"
              data-bs-target="#SocialMedia"
              type="button"
              role="tab"
              aria-controls="SocialMedia"
              aria-selected="false"
              data-position="200"
            >
              Social Media
            </button>
          </li>
          <li
            className="nav-item"
            role="presentation"
            onClick={(e) => handleMenuClick(e)}
          >
            <button
              className="nav-link"
              id="Marketing-tab"
              data-bs-toggle="tab"
              data-bs-target="#Marketing"
              type="button"
              role="tab"
              aria-controls="Marketing"
              aria-selected="false"
              data-position="300"
            >
              Marketing
            </button>
          </li>
        </ul>
      </div>

      <div className="tab-content" id="myTabContent">
        {items.map((obj, index) => {
          return (
            <div
              className={
                obj.id === 1
                  ? "tab-pane fade show active tech-container"
                  : "tab-pane fade tech-container"
              }
              id={obj.tabid}
              role="tabpanel"
              aria-labelledby={obj.tablabel}
              key={obj.id}
            >
              <Swiper
                initialSlide={4}
                loop={true}
                slidesPerView={"auto"}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="CurvedSwiper"
                // rewind={true}
                centeredSlides={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                speed={800}
                onBeforeInit={(swiper) => {
                  swiperRefs.current[index].current = swiper;
                }}
              >
                <SwiperSlide className="container3">
                  <div className="container">
                    <div
                      className="row"
                      style={{
                        backgroundColor: obj.bg[0],
                        height: "410px",
                        position: "relative",
                      }}
                    >
                      <img style={imgStyle} src={obj.imgs[0]} alt="" />
                    </div>
                    <div className="row">
                      <div className="content animate__animated animate__fadeInUp">
                        <h5>Social media design</h5>
                        <p>
                          Crafting engaging visuals, driving brand recognition
                          and engagement.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="container4">
                  <div className="container">
                    <div
                      className="row"
                      style={{
                        height: "410px",
                        position: "relative",
                        backgroundColor: obj.bg[1],
                      }}
                    >
                      <img style={imgStyle} src={obj.imgs[1]} alt="" />
                    </div>
                    <div className="row">
                      <div className="content animate__animated animate__fadeInUp">
                        <h5>Logo design</h5>
                        <p>
                          Creating memorable brand identities, capturing
                          essence.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="container2">
                  <div className="container">
                    <div
                      className="row"
                      style={{
                        height: "410px",
                        position: "relative",
                        backgroundColor: obj.bg[3],
                      }}
                    >
                      <img style={imgStyle} src={obj.imgs[3]} alt="" />
                    </div>
                    <div className="row">
                      <div className="content animate__animated animate__fadeInUp">
                        <h5>Social media design</h5>
                        <p>
                          Crafting engaging visuals, driving brand recognition
                          and engagement strategically.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="container5">
                  <div className="container">
                    <div
                      className="row"
                      style={{
                        height: "410px",
                        position: "relative",
                        backgroundColor: obj.bg[2],
                      }}
                    >
                      <img style={imgStyle} src={obj.imgs[2]} alt="" />
                    </div>
                    <div className="row">
                      <div className="content animate__animated animate__fadeInUp">
                        <h5>Graphic Designing</h5>
                        <p>
                          Crafting visuals, bringing brands to life creatively
                          with precision.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="container2">
                  <div className="container">
                    <div
                      className="row"
                      style={{
                        height: "410px",
                        position: "relative",
                        backgroundColor: obj.bg[3],
                      }}
                    >
                      <img style={imgStyle} src={obj.imgs[3]} alt="" />
                    </div>
                    <div className="row">
                      <div className="content animate__animated animate__fadeInUp">
                        <h5>Social media design</h5>
                        <p>
                          Crafting engaging visuals, driving brand recognition
                          and engagement strategically.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="container1">
                  <div className="container">
                    <div
                      className="row"
                      style={{
                        height: "410px",
                        position: "relative",
                        backgroundColor: obj.bg[4],
                      }}
                    >
                      <img style={imgStyle} src={obj.imgs[4]} alt="" />
                    </div>
                    <div className="row">
                      <div className="content animate__animated animate__fadeInUp">
                        <h5>UI/UX design</h5>
                        <p>
                          Crafting seamless experiences, enhancing user
                          interactions effectively and creatively.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="container2">
                  <div className="container">
                    <div
                      className="row"
                      style={{
                        height: "410px",
                        position: "relative",
                        backgroundColor: obj.bg[3],
                      }}
                    >
                      <img style={imgStyle} src={obj.imgs[3]} alt="" />
                    </div>
                    <div className="row">
                      <div className="content animate__animated animate__fadeInUp">
                        <h5>Social media design</h5>
                        <p>
                          Crafting engaging visuals, driving brand recognition
                          and engagement strategically.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <div className="custom-nav">
                  <button
                    className="btn-prev"
                    onClick={() =>
                      swiperRefs.current[index].current.slidePrev()
                    }
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
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    className="btn-next"
                    onClick={() =>
                      swiperRefs.current[index].current.slideNext()
                    }
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
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </Swiper>
            </div>
          );
        })}
      </div>
    </div>
  );
}
