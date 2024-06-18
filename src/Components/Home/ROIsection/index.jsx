import React from "react";
import "./style.scss";

import Bg1 from "../../../assets/ROI/Bg1.png";
import Bg2 from "../../../assets/ROI/Bg2.png";
import Bg3 from "../../../assets/ROI/bg3.png";
import Bg4 from "../../../assets/ROI/Bg4.png";

import Logo1 from "../../../assets/ROI/Logo1.png";
import Logo2 from "../../../assets/ROI/Logo2.png";
import Logo3 from "../../../assets/ROI/Logo3.png";
import Logo4 from "../../../assets/ROI/Logo4.png";

import Thumbnail1 from "../../../assets/ROI/Bg1.png";
import Thumbnail2 from "../../../assets/ROI/Thumbnail2.png";
import Thumbnail3 from "../../../assets/ROI/Thumbnail3.png";
import Thumbnail4 from "../../../assets/ROI/Thumbnail4.png";

const ROIsection = () => {
  const ROIData = [
    {
      id: 1,
      bgimg: Bg1,
      logo: Logo1,
      thumbnail: Thumbnail1,
      title: "Busy Beans",
      para: "Busy Beans is a chain of coffee shops that also offers hot beverages, cold beverages, sundaes, and food.",
      work: "Social Media Marketing",
    },
    {
      id: 2,
      bgimg: Bg2,
      logo: Logo2,
      thumbnail: Thumbnail2,
      title: "Flash Muscles",
      para: "Flash Muscles is a casual wear lifestyle brand, fit for the fashion conscious woman of today.",
      work: "Social Media Marketing",
    },
    {
      id: 3,
      bgimg: Bg3,
      logo: Logo3,
      thumbnail: Thumbnail3,
      title: "Golds Gym",
      para: "Gold's Gym is one of the most iconic and renowned fitness centers in the world,legacy over five decades.",
      work: "Social Media Marketing",
    },
    {
      id: 4,
      bgimg: Bg4,
      logo: Logo4,
      thumbnail: Thumbnail4,
      title: "VFF Clothing Brand",
      para: "Gold's Gym is one of the most iconic and renowned fitness centers in the world, legacy over five decades.",
      work: "Social Media Marketing",
    },
    {
      id: 1,
      bgimg: Bg1,
      logo: Logo1,
      thumbnail: Thumbnail1,
      title: "Busy Beans",
      para: "Busy Beans is a chain of coffee shops that also offers hot beverages, cold beverages, sundaes, and food.",
      work: "Social Media Marketing",
    },
    {
      id: 2,
      bgimg: Bg2,
      logo: Logo2,
      thumbnail: Thumbnail2,
      title: "Flash Muscles",
      para: "Flash Muscles is a casual wear lifestyle brand, fit for the fashion conscious woman of today.",
      work: "Social Media Marketing",
    },
  ];

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
            {ROIData.map((data) => {
              return (
                <div
                key={data.id}
                  className="Roislides"
                  style={{
                    backgroundImage: `url(${data.bgimg})`,
                  }}
                >
                  <div className="content" style={{ overflow: "hidden" }}>
                    <img src={data.thumbnail} alt="" className="thumbnail" />
                    <div className="thumbnailct">
                      <div className="company">{data.title}</div>
                      <div className="companylogo">
                        <img src={data.logo} alt="" />
                      </div>
                      <h4>{data.para}</h4>
                      <h5 className="work">{data.work}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
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
