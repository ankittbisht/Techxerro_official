import React from "react";
import "./Technologies.scss";
import { images } from "../../../assets/images";
import VerticalSlider from "./Iconslides";
// import PrimaryButton from "../../utils/PrimaryButton/PrimaryButton";

export default function Technologies(props) {
  return (
    <>
    <div className="technologies" data-aos={props.aos} data-aos-delay="100" data-aos-duration="1200">
      <div className="container">
      <div className="row my-5 w-100">
        <div className="col-sm-6 col-12">
          <h2 className="title" data-aos="fade-down">
            Powering every industry<br/>Powering all disruptors.
          </h2>
        </div>
        <div className="col-sm-6 col-12">
            <VerticalSlider/>
        </div>    
      </div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            E-commerce
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Construction
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Hospitality
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="automotive-tab"
            data-bs-toggle="tab"
            data-bs-target="#automotive"
            type="button"
            role="tab"
            aria-controls="automotive"
            aria-selected="false"
          >
            Automotive
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="Sports-tab"
            data-bs-toggle="tab"
            data-bs-target="#Sports"
            type="button"
            role="tab"
            aria-controls="Sports"
            aria-selected="false"
          >
            Sports
          </button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">

        {/*  {E-Commerce} */}
        <div
          className="tab-pane fade show active tech-container"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="industrywrapper">
            <div className="content">
              <h3>Powering every industry<br/>
              <span>Powering all disruptors.</span></h3>
              <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. </p>
              <div class="logos d-flex">
                <img src={require('../../../assets/techs/logo/logo (1).png')} alt="Logo 1"/>
                <img src={require('../../../assets/techs/logo/logo (2).png')} alt="Logo 2"/>
                <img src={require('../../../assets/techs/logo/logo (3).png')} alt="Logo 3"/>
                <img src={require('../../../assets/techs/logo/logo (4).png')} alt="Logo 4"/>
              </div>
              <button>Get Started</button>
            </div>
          </div>
        </div>

        
        {/* Construction Tab */}
        <div
          className="tab-pane fade tech-container"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          
          <div className="industrywrapper">
            <div className="content">
              <h3>Powering every industry<br/>
              <span>Powering all disruptors.</span></h3>
              <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. </p>
              <div class="logos d-flex">
                <img src={require('../../../assets/techs/logo/logo (1).png')} alt="Logo 1"/>
                <img src={require('../../../assets/techs/logo/logo (2).png')} alt="Logo 2"/>
                <img src={require('../../../assets/techs/logo/logo (3).png')} alt="Logo 3"/>
                <img src={require('../../../assets/techs/logo/logo (4).png')} alt="Logo 4"/>
              </div>
              <button>Get Started</button>
            </div>
          </div>
        </div>

        {/* Hospitality Tab */}
        <div
          className="tab-pane fade tech-container"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          
          <div className="industrywrapper">
            <div className="content">
              <h3>Powering every industry<br/>
              <span>Powering all disruptors.</span></h3>
              <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. </p>
              <div class="logos d-flex">
                <img src={require('../../../assets/techs/logo/logo (1).png')} alt="Logo 1"/>
                <img src={require('../../../assets/techs/logo/logo (2).png')} alt="Logo 2"/>
                <img src={require('../../../assets/techs/logo/logo (3).png')} alt="Logo 3"/>
                <img src={require('../../../assets/techs/logo/logo (4).png')} alt="Logo 4"/>
              </div>
              <button>Get Started</button>
            </div>
          </div>
        </div>
        
        {/* Automotive Tab */}
        <div
          className="tab-pane fade tech-container"
          id="automotive"
          role="tabpanel"
          aria-labelledby="automotive-tab"
        >       
        <div className="industrywrapper">
          <div className="content">
            <h3>Powering every industry<br/>
            <span>Powering all disruptors.</span></h3>
            <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. </p>
            <div class="logos d-flex">
              <img src={require('../../../assets/techs/logo/logo (1).png')} alt="Logo 1"/>
              <img src={require('../../../assets/techs/logo/logo (2).png')} alt="Logo 2"/>
              <img src={require('../../../assets/techs/logo/logo (3).png')} alt="Logo 3"/>
              <img src={require('../../../assets/techs/logo/logo (4).png')} alt="Logo 4"/>
            </div>
            <button>Get Started</button>
          </div>
        </div>   
        </div>

        {/* Sports Tab */}
        <div
          className="tab-pane fade tech-container"
          id="Sports"
          role="tabpanel"
          aria-labelledby="Sports-tab"
        >       
        <div className="industrywrapper">
          <div className="content">
            <h3>Powering every industry<br/>
            <span>Powering all disruptors.</span></h3>
            <p>Blandit feugiat volutpat scelerisque lacinia varius justo felis turpis. Vitae accumsan tempor orci pellentesque lorem. </p>
            <div class="logos d-flex">
              <img src={require('../../../assets/techs/logo/logo (1).png')} alt="Logo 1"/>
              <img src={require('../../../assets/techs/logo/logo (2).png')} alt="Logo 2"/>
              <img src={require('../../../assets/techs/logo/logo (3).png')} alt="Logo 3"/>
              <img src={require('../../../assets/techs/logo/logo (4).png')} alt="Logo 4"/>
            </div>
            <button>Get Started</button>
          </div>
        </div>   
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
