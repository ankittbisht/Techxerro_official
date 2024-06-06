import React from "react";
import "./style.scss";

const Ourculture = () => {
  return (
    <section className="ourculture" id="corporate-values">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12 text-center title">
            <h3 data-aos="fade-right">Our culture</h3>
            <p data-aos="fade-left">
              At TechXerro, our culture is built on innovation, collaboration,
              and a relentless commitment to client success. We foster
              creativity, <br />
              embrace diversity, and empower our team to deliver exceptional
              brand empowerment solutions.
            </p>
          </div>
        </div>
        <div className="row culture-img">
          <div className="col-4">
            <img src={require("../../../assets/cultureimg1.png")} alt="" />
            <h4>Lorem ipsum dolor sit amet consectetur. Facilisis</h4>
            <p>
              Blandit feugiat volutpat scelerisque lacinia varius justo felis
              turpis. Vitae accumsan tempor orci pellentesque lorem.{" "}
            </p>
          </div>
          <div className="col-4 pt-5">
            <img src={require("../../../assets/cultureimg2.png")} alt="" />
            <h4>Lorem ipsum dolor sit amet consectetur. Facilisis</h4>
            <p>
              Blandit feugiat volutpat scelerisque lacinia varius justo felis
              turpis. Vitae accumsan tempor orci pellentesque lorem.{" "}
            </p>
          </div>
          <div className="col-4" style={{ paddingTop: "6rem" }}>
            <img src={require("../../../assets/cultureimg3.png")} alt="" />
            <h4>Lorem ipsum dolor sit amet consectetur. Facilisis</h4>
            <p>
              Blandit feugiat volutpat scelerisque lacinia varius justo felis
              turpis. Vitae accumsan tempor orci pellentesque lorem.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourculture;
