import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.scss";

const ROIsection = () => {
  const handlePrevclick = () => {
    const slider = document.querySelector(".ROIslider");
    let slides = document.querySelectorAll(".Roislides");
    slider.prepend(slides[slides.length - 1]);
  };

  const handleNextclick = () => {
    const slider = document.querySelector(".ROIslider");
    let slides = document.querySelectorAll(".Roislides");
    slider.appendChild(slides[0]);
  };

  return (
    <>
      <div className="slidercontainer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                ROI We have genrated for Our <br />
                Partners
              </h2>
            </div>
          </div>
          <div className="ROIslider">
            <div
              className="Roislides"
              style={{
                backgroundImage:
                  "url('https://www.techopedia.com/wp-content/uploads/2023/02/tech-career-outlook-1.jpg')",
              }}
            >
              <div className="content">
                <img
                  src="https://www.techopedia.com/wp-content/uploads/2023/02/tech-career-outlook-1.jpg"
                  alt=""
                  className="thumbnail"
                />
                <div className="thumbnailct">
                  <div className="company">Pegasus Drone</div>
                  <div className="companylogo">
                    <img
                      src={require("../../../assets/Home/Logo/colorlogo/pegasusbiglogo.png")}
                      alt=""
                    />
                  </div>
                  <h4>Top 5 most ROI generated App Marketing Project</h4>
                </div>
              </div>
            </div>
            <div
              className="Roislides"
              style={{
                backgroundImage:
                  "url('https://cdn.get.tech/images/showcase/1x-tech.png')",
              }}
            >
              <div className="content">
                <img
                  src="https://cdn.get.tech/images/showcase/1x-tech.png"
                  alt=""
                  className="thumbnail"
                />
                <div className="thumbnailct">
                  <div className="company">Viti Collection</div>
                  <div className="companylogo">
                    <img
                      src={require("../../../assets/Home/Logo/colorlogo/pegasusbiglogo.png")}
                      alt=""
                    />
                  </div>
                  <h4>
                    Insights from the Most Successful App Marketing Ventures
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="Roislides"
              style={{
                backgroundImage:
                  "url('https://burst.shopifycdn.com/photos/tech-meeting-flatlay.jpg?width=1000&format=pjpg&exif=0&iptc=0')",
              }}
            >
              <div className="content">
                <img
                  src="https://burst.shopifycdn.com/photos/tech-meeting-flatlay.jpg?width=1000&format=pjpg&exif=0&iptc=0"
                  alt=""
                  className="thumbnail"
                />
                <div className="thumbnailct">
                  <div className="company">Varnin Design</div>
                  <div className="companylogo">
                    <img
                      src={require("../../../assets/Home/Logo/colorlogo/pegasusbiglogo.png")}
                      alt=""
                    />
                  </div>
                  <h4>Examining the Most Lucrative App Marketing Projects</h4>
                </div>
              </div>
            </div>
            <div
              className="Roislides"
              style={{
                backgroundImage:
                  "url('https://www.crowe.com/-/media/crowe/llp/sc10-media/insights/articles/2023/content-2000x1125/contentmktmt2300002bfy23-markets-technology-awareness--whats-next-for-tech--thought-leadershipas3639.jpg?rev=025a044aa9394515a261e9c6242045cb')",
              }}
            >
              <div className="content">
                <img
                  src="https://www.crowe.com/-/media/crowe/llp/sc10-media/insights/articles/2023/content-2000x1125/contentmktmt2300002bfy23-markets-technology-awareness--whats-next-for-tech--thought-leadershipas3639.jpg?rev=025a044aa9394515a261e9c6242045cb"
                  alt=""
                  className="thumbnail"
                />
                <div className="thumbnailct">
                  <div className="company">Techqilla</div>
                  <div className="companylogo">
                    <img
                      src={require("../../../assets/Home/Logo/colorlogo/pegasusbiglogo.png")}
                      alt=""
                    />
                  </div>
                  <h4> App Marketing Campaigns That Set the Bar High</h4>
                </div>
              </div>
            </div>
            <div
              className="Roislides"
              style={{
                backgroundImage:
                  "url('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg')",
              }}
            >
              <div className="content">
                <img
                  src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
                  alt=""
                  className="thumbnail"
                />
                <div className="thumbnailct">
                  <div className="company">TechXerro</div>
                  <div className="companylogo">
                    <img
                      src={require("../../../assets/Home/Logo/colorlogo/pegasusbiglogo.png")}
                      alt=""
                    />
                  </div>
                  <h4>
                    Beyond Expectations: The 5 Most Rewarding App Marketing
                    Ventures
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="Roislides"
              style={{
                backgroundImage:
                  "url('https://www.theforage.com/blog/wp-content/uploads/2022/09/tech-companies.jpg')",
              }}
            >
              <div className="content">
                <img
                  src="https://www.theforage.com/blog/wp-content/uploads/2022/09/tech-companies.jpg"
                  alt=""
                  className="thumbnail"
                />
                <div className="thumbnailct">
                  <div className="company">Pegasus Drone</div>
                  <div className="companylogo">
                    <img
                      src={require("../../../assets/Home/Logo/colorlogo/pegasusbiglogo.png")}
                      alt=""
                    />
                  </div>
                  <h4>Top 5 most ROI generated App Marketing Project</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="arrowbtn d-flex gap-4">
            <button className="btn-prev" onClick={() => handlePrevclick()}>
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
            <button className="btn-next" onClick={() => handleNextclick()}>
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
        </div>
      </div>
    </>
  );
};
export default ROIsection;
