import React, { useEffect, useState } from "react";
import "./Workflow.scss";
import { images } from "../../../assets/images";

export default function Workflow(props) {
  let rectangle;
  let circle;
  const [browserSize, setbrowserSize] = useState(
    document.documentElement.clientWidth
  );
  const [activeEl, setActiveEl] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      setbrowserSize(document.documentElement.clientWidth);
    };
    // font-size: 18px;
    // height: 35px;
    // padding-top: 4px;
    const handleScroll = () => {
      if (!rectangle) rectangle = document.getElementById("rectangle");

      let topStartingValue = 0;
      let topEndingValue = 77;
      let circleTopStartingValue = 4;
      let circleTopEndingValue = 83;

      // if (document.documentElement.clientWidth < 700) {
      //   topStartingValue = 298;
      //   topEndingValue = 35;
      // }

      if (rectangle) {
        //if we are at the very top of the page scrolled less than 2645 then
        //we want the logo to be shown below hence setting the properties to show logo below.
        if (document.documentElement.scrollTop < 2645) {
          rectangle.style.top = topStartingValue + "%";
        } else if (
          document.documentElement.scrollTop >= 2645 &&
          document.documentElement.scrollTop <= 3000
        ) {
          var top =
            topStartingValue +
            (document.documentElement.scrollTop - 2645) *
              (topEndingValue / 355);
          rectangle.style.top = top + "%";
          if (top < 9) {
            setActiveEl(1);
          } else if (top >= 9 && top <= 34) {
            setActiveEl(2);
          } else if (top >= 34 && top <= 63) {
            setActiveEl(3);
          } else if (top >= 63 && top <= 77) {
            setActiveEl(4);
          }
        } else {
          //if we have scrolled more than 3000 then
          //we are setting the properties so that logo is at the top inside the header
          rectangle.style.top = topEndingValue + "%";
        }
      }
    };
    handleScroll(null);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="workflow box pb-5"
      data-aos={props.aos}
      data-aos-delay="100"
      data-aos-duration="1200"
    >
      <div className="group">
        <div className="overlap-group">
          <div className="meteor-section pointer-events-none">
            <span className="meteor meteor-animation meteor-1"></span>
            <span className="meteor meteor-animation meteor-11"></span>
            <span className="meteor meteor-animation meteor-2"></span>
            <span className="meteor meteor-animation meteor-10"></span>
            <span className="meteor meteor-animation meteor-3"></span>
            <span className="meteor meteor-animation meteor-9"></span>
            <span className="meteor meteor-animation meteor-4"></span>
            <span className="meteor meteor-animation meteor-8"></span>
            <span className="meteor meteor-animation meteor-5"></span>
            <span className="meteor meteor-animation meteor-7"></span>
            <span className="meteor meteor-animation meteor-6"></span>
            <img className="grid" src={images.horizontalLines} alt="" />
            <img src={images.VerticalLines} alt="" />
          </div>
          <img className="lines" alt="Group" src={images.gridLines} />

          <img className="ellipse" alt="Ellipse" src={images.WorkflowCircle} />
          <div className="text-wrapper">
            <h3 data-aos="fade-up">
              Our customized workflow              
            </h3>
          </div>
          <div className="content-container container-fluid p-0">
            <div className="rectangle" id="rectangle" />
            <div className="container pt-4">
              {/* <img
                className="workflowLine"
                alt="Vector"
                src={images.workflowLine}
              /> */}
              {/* <img
                className="workflowArrow"
                alt="Vector"
                src={images.workflowArrow}
                id="circle"
              /> */}
              <div className="row">
                <div className="col-5 d-flex justify-content-center">
                  <div className="text concept">
                    <div className="number">01</div>Concept
                  </div>
                </div>
                <div className="col-1 vl-dot-container">
                  <div className="vl vl-top">
                    <div
                      className={"dot " + (activeEl === 1 ? "active" : "")}
                    ></div>
                  </div>
                </div>
                <div className="col-5">
                  <p className="ms-5">
                    Blandit feugiat volutpat scelerisque lacinia varius justo
                    felis turpis. Vitae accumsan tempor orci pellentesque lorem.
                    Tempus at odio libero cras eget est vestibulum vel nisi.
                  </p>
                </div>
              </div>
              <div className="row ">
                <div className="col-5 mt-5 d-flex justify-content-center">
                  <div className="text budget">
                    <div className="number">02</div>&nbsp;Budget&nbsp;
                  </div>
                </div>
                <div className="col-1 vl-dot-container">
                  <div className="vl">
                    <div className={"dot " + (activeEl === 2 ? "active" : "")}></div>
                  </div>
                </div>
                <div className="col-5 mt-5">
                  <p className="ms-5">
                    Blandit feugiat volutpat scelerisque lacinia varius justo
                    felis turpis. Vitae accumsan tempor orci pellentesque lorem.
                    Tempus at odio libero cras eget est vestibulum vel nisi.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-5 mt-5">
                  <p className="ms-5">
                    Blandit feugiat volutpat scelerisque lacinia varius justo
                    felis turpis. Vitae accumsan tempor orci pellentesque lorem.
                    Tempus at odio libero cras eget est vestibulum vel nisi.
                  </p>
                </div>
                <div className="col-1 vl-dot-container">
                  <div className="vl">
                    <div className={"dot " + (activeEl === 3 ? "active" : "")}></div>
                  </div>
                </div>
                <div className="col-5  mt-5 d-flex justify-content-center">
                  <div className="text development">
                    <div className="number">03</div>Development
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-5 mt-5">
                  <p className="ms-5">
                    Blandit feugiat volutpat scelerisque lacinia varius justo
                    felis turpis. Vitae accumsan tempor orci pellentesque lorem.
                    Tempus at odio libero cras eget est vestibulum vel nisi.
                  </p>
                </div>
                <div className="col-1 vl-dot-container">
                  <div className="vl vl-bottom">
                    <div className={"dot " + (activeEl === 4 ? "active" : "")}></div>
                  </div>
                </div>
                <div className="col-5 mt-5 d-flex justify-content-center">
                  <div className="text result">
                    <div className="number">04</div>Result&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="ellipse-8" />
          <div className="ellipse-9" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
