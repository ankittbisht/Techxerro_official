import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { images } from "../../../assets/images";
import "./Blog.scss";
import { blogData } from "./data";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Blog(props) {
  const openCity = (evt, cityName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };

  const option = {
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  };

  return (
    <div className="blog-container ">
      <div className="container">
        <div className="row title">
          <div className="col-12">
            <span>Our blogs</span>
            <h2 className="text-start">News & Insight from our experts</h2>
            <form action="">
              <label>
                <input type="email" placeholder="Enter Your Email" />
                <input type="submit" value="Get Started" />
              </label>
            </form>
          </div>
          {/* <div className="col-7">
            <p className="all-blog">
              All Blogs <LazyLoadImage src={images.BlogArrow} alt="" />
            </p>
          </div> */}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab">
              <button
                className="tablinks active"
                onClick={(e) => openCity(e, "Viewall")}
              >
                View All
              </button>
              <button
                className="tablinks"
                onClick={(e) => openCity(e, "design")}
              >
                Design
              </button>
              <button
                className="tablinks"
                onClick={(e) => openCity(e, "development")}
              >
                Development
              </button>
              <button
                className="tablinks"
                onClick={(e) => openCity(e, "marketing")}
              >
                Marketing
              </button>
            </div>

            <div
              id="Viewall"
              className="tabcontent "
              style={{ display: "block" }}
            >
              <OwlCarousel
                className="owl-theme"
                {...option}
                loop
                margin={40}
                dots={true}
                autoplaySpeed={500}
                autoplayTimeout={3000}
              >
                {blogData.map((data) => {
                  return (
                    <div className="container">
                      <div className="row imgcont">
                        <LazyLoadImage effect="blur" src={data.img} alt="" />
                        <div className="describe">
                          <div className="d-flex align-items-center justify-content-space-between">
                            <p className="col-6 author">
                              {data.author}
                              <br />
                              {data.date}
                            </p>
                            <p className="col-6 date d-flex justify-content-end">
                              {data.category}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="content">
                          <p className="content-title">{data.title}</p>
                          <p>{data.para}</p>
                          <button className="blogbtn d-flex gap-2 align-items-center">
                            <a href="/blogs">
                              Read more
                              <svg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="11.5"
                                  cy="11.5"
                                  r="11.5"
                                  fill="#EC1A1A"
                                />
                                <path
                                  d="M16.7813 6.71671C16.7813 6.44057 16.5575 6.21671 16.2813 6.21671L11.7813 6.21671C11.5052 6.21671 11.2813 6.44057 11.2813 6.71671C11.2813 6.99285 11.5052 7.21671 11.7813 7.21671L15.7813 7.21671L15.7813 11.2167C15.7813 11.4929 16.0052 11.7167 16.2813 11.7167C16.5575 11.7167 16.7813 11.4929 16.7813 11.2167L16.7813 6.71671ZM6.41215 17.293L16.6349 7.07026L15.9278 6.36316L5.70504 16.5859L6.41215 17.293Z"
                                  fill="white"
                                />
                              </svg>
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>

            <div id="design" className="tabcontent">
              <OwlCarousel
                className="owl-them"
                {...option}
                loop
                margin={40}
                nav={false}
                dots={true}
                autoplaySpeed={5000}
                autoplayTimeout={3000}
              >
                {blogData
                  .filter((data) => data.category.toLowerCase() === "design")
                  .map((data) => {
                    return (
                      <div className="container">
                        <div className="row imgcont">
                          <LazyLoadImage effect="blur" src={data.img} alt="" />
                          <div className="describe">
                            <div className="d-flex align-items-center justify-content-space-between">
                              <p className="col-6 author">
                                {data.author}
                                <br />
                                {data.date}
                              </p>
                              <p className="col-6 date d-flex justify-content-end">
                                {data.category}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="content">
                            <p className="content-title">{data.title}</p>
                            <p>{data.para}</p>
                            <button className="blogbtn d-flex gap-2 align-items-center">
                              <a href="/blogs">
                                Read more
                                <svg
                                  width="23"
                                  height="23"
                                  viewBox="0 0 23 23"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="11.5"
                                    cy="11.5"
                                    r="11.5"
                                    fill="#EC1A1A"
                                  />
                                  <path
                                    d="M16.7813 6.71671C16.7813 6.44057 16.5575 6.21671 16.2813 6.21671L11.7813 6.21671C11.5052 6.21671 11.2813 6.44057 11.2813 6.71671C11.2813 6.99285 11.5052 7.21671 11.7813 7.21671L15.7813 7.21671L15.7813 11.2167C15.7813 11.4929 16.0052 11.7167 16.2813 11.7167C16.5575 11.7167 16.7813 11.4929 16.7813 11.2167L16.7813 6.71671ZM6.41215 17.293L16.6349 7.07026L15.9278 6.36316L5.70504 16.5859L6.41215 17.293Z"
                                    fill="white"
                                  />
                                </svg>
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </OwlCarousel>
            </div>

            <div id="development" className="tabcontent">
              <OwlCarousel
                className="owl-theme"
                {...option}
                loop
                margin={40}
                nav={false}
                dots={true}
                autoplaySpeed={5000}
                autoplayTimeout={3000}
              >
                {" "}
                {blogData
                  .filter(
                    (data) => data.category.toLowerCase() === "development"
                  )
                  .map((data) => {
                    return (
                      <div className="container">
                        <div className="row imgcont">
                          <LazyLoadImage effect="blur" src={data.img} alt="" />
                          <div className="describe">
                            <div className="d-flex align-items-center justify-content-space-between">
                              <p className="col-6 author">
                                {data.author}
                                <br />
                                {data.date}
                              </p>
                              <p className="col-6 date d-flex justify-content-end">
                                {data.category}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="content">
                            <p className="content-title">{data.title}</p>
                            <p>{data.para}</p>
                            <button className="blogbtn d-flex gap-2 align-items-center">
                              <a href="/blogs">
                                Read more
                                <svg
                                  width="23"
                                  height="23"
                                  viewBox="0 0 23 23"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="11.5"
                                    cy="11.5"
                                    r="11.5"
                                    fill="#EC1A1A"
                                  />
                                  <path
                                    d="M16.7813 6.71671C16.7813 6.44057 16.5575 6.21671 16.2813 6.21671L11.7813 6.21671C11.5052 6.21671 11.2813 6.44057 11.2813 6.71671C11.2813 6.99285 11.5052 7.21671 11.7813 7.21671L15.7813 7.21671L15.7813 11.2167C15.7813 11.4929 16.0052 11.7167 16.2813 11.7167C16.5575 11.7167 16.7813 11.4929 16.7813 11.2167L16.7813 6.71671ZM6.41215 17.293L16.6349 7.07026L15.9278 6.36316L5.70504 16.5859L6.41215 17.293Z"
                                    fill="white"
                                  />
                                </svg>
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </OwlCarousel>
            </div>

            <div id="marketing" className="tabcontent">
              <OwlCarousel
                className="owl-theme"
                {...option}
                loop
                margin={40}
                nav={false}
                dots={true}
                autoplaySpeed={5000}
                autoplayTimeout={3000}
              >
                {blogData
                  .filter((data) => data.category.toLowerCase() === "marketing")
                  .map((data) => {
                    return (
                      <div className="container">
                        <div className="row imgcont">
                          <LazyLoadImage effect="blur" src={data.img} alt="" />
                          <div className="describe">
                            <div className="d-flex align-items-center justify-content-space-between">
                              <p className="col-6 author">
                                {data.author}
                                <br />
                                {data.date}
                              </p>
                              <p className="col-6 date d-flex justify-content-end">
                                {data.category}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="content">
                            <p className="content-title">{data.title}</p>
                            <p>{data.para}</p>
                            <button className="blogbtn d-flex gap-2 align-items-center">
                              <a href="/blogs">
                                Read more
                                <svg
                                  width="23"
                                  height="23"
                                  viewBox="0 0 23 23"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="11.5"
                                    cy="11.5"
                                    r="11.5"
                                    fill="#EC1A1A"
                                  />
                                  <path
                                    d="M16.7813 6.71671C16.7813 6.44057 16.5575 6.21671 16.2813 6.21671L11.7813 6.21671C11.5052 6.21671 11.2813 6.44057 11.2813 6.71671C11.2813 6.99285 11.5052 7.21671 11.7813 7.21671L15.7813 7.21671L15.7813 11.2167C15.7813 11.4929 16.0052 11.7167 16.2813 11.7167C16.5575 11.7167 16.7813 11.4929 16.7813 11.2167L16.7813 6.71671ZM6.41215 17.293L16.6349 7.07026L15.9278 6.36316L5.70504 16.5859L6.41215 17.293Z"
                                    fill="white"
                                  />
                                </svg>
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
