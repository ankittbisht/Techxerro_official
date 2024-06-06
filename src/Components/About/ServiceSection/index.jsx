import React from "react";
import "./style.scss";

const ServAvail = () => {
  return (
    <section className="serviceavail" id="service-avail">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center title">
            <h3>Our services are available for</h3>
            <p>
              Our services cater to startups, small businesses, mid-sized
              enterprises, and large enterprises, providing tailored brand
               <br />
              empowerment solutions for every stage of growth.
            </p>
          </div>
        </div>
        <div className="row serv-card-wrapper">
          <div className="col-3">
            <div
              className="business-card"
              data-aos="flip-up"
              data-aos-delay="100"
              data-aos-anchor-placement="bottom-bottom"
            >
              <img src={require("../../../assets/busicon1.png")} alt="" />
              <p>
                <b>Startups</b>
              </p>
              <p>
                TechXerro helps startups with brand identity, market analysis,
                digital marketing, and product launch support to ensure
                competitive market success.
              </p>
            </div>
          </div>
          <div className="col-3">
            <div
              className="business-card"
              data-aos="flip-up"
              data-aos-delay="200"
              data-aos-anchor-placement="bottom-bottom"
            >
              <img src={require("../../../assets/busicon2.png")} alt="" />
              <p>
                <b>Small Business</b>
              </p>
              <p>
                We assist small businesses in brand revitalization, customer
                engagement, website development, and local SEO to boost growth
                and online visibility.
              </p>
            </div>
          </div>
          <div className="col-3">
            <div
              className="business-card"
              data-aos="flip-up"
              data-aos-delay="300"
              data-aos-anchor-placement="bottom-bottom"
            >
              <img src={require("../../../assets/busicon3.png")} alt="" />
              <p>
                <b>Mid Enterprises</b>
              </p>
              <p>
                TechXerro drives growth for mid-sized enterprises through brand
                expansion, integrated marketing, and advanced analytics to
                extend market reach and efficiency.
              </p>
            </div>
          </div>
          <div className="col-3">
            <div
              className="business-card"
              data-aos="flip-up"
              data-aos-delay="400"
              data-aos-anchor-placement="bottom-bottom"
            >
              <img src={require("../../../assets/busicon4.png")} alt="" />
              <p>
                <b>Enterprises</b>
              </p>
              <p>
                We enable enterprises to dominate markets with strategic brand
                management, digital transformation, and comprehensive insights
                for sustained industry leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServAvail;
