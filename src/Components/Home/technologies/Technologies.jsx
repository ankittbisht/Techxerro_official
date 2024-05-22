import React from "react";
import "./Technologies.scss";
import { images } from "../../../assets/images";
// import PrimaryButton from "../../utils/PrimaryButton/PrimaryButton";

export default function Technologies(props) {
  return (
    <>
    <div className="technologies" data-aos={props.aos} data-aos-delay="100" data-aos-duration="1200">
      <div className="row my-5 w-100">
        <h4 className="title" data-aos="fade-down">
          The Master Jack of All Expertises
        </h4>
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
            Web Technology
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
            Mobile Technology
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
            Graphic & UI/UX Design
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active tech-container"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="tech hvr-grow">
            <img src={images.webTech1} alt="" />
            <p>PHP</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech2} alt="" />
            <p>.Net</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech3} alt="" />
            <p>Laravel</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech4} alt="" />
            <p>Node.Js</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech5} alt="" />
            <p>Angular</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech6} alt="" />
            <p>React.Js</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech7} alt="" />
            <p>Python</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech8} alt="" />
            <p>HTML 5</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech9} alt="" />
            <p>VueJS</p>
          </div>
        </div>
        <div
          className="tab-pane fade tech-container"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="tech hvr-grow">
            <img src={images.webTech1} alt="" />
            <p>PHP</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech2} alt="" />
            <p>.Net</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech3} alt="" />
            <p>Laravel</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech4} alt="" />
            <p>Node.Js</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech5} alt="" />
            <p>Angular</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech6} alt="" />
            <p>React.Js</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech7} alt="" />
            <p>Python</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech8} alt="" />
            <p>HTML 5</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech9} alt="" />
            <p>VueJS</p>
          </div>
        </div>
        <div
          className="tab-pane fade tech-container"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="tech hvr-grow">
            <img src={images.webTech1} alt="" />
            <p>PHP</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech2} alt="" />
            <p>.Net</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech3} alt="" />
            <p>Laravel</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech4} alt="" />
            <p>Node.Js</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech5} alt="" />
            <p>Angular</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech6} alt="" />
            <p>React.Js</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech7} alt="" />
            <p>Python</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech8} alt="" />
            <p>HTML 5</p>
          </div>
          <div className="tech hvr-grow">
            <img src={images.webTech9} alt="" />
            <p>VueJS</p>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        {/* <PrimaryButton
          btnText="Explore"
          isRightArrow={true}
          variant="whiteFill"
        /> */}
        <button style={{background:'transparent', border:'none', color:'#fff'}}>
          Explore
          <svg width="52" height="43" viewBox="0 0 52 43" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"10px"}}>
          <circle cx="31" cy="21.5" r="20.5" stroke="white"/>
          <path d="M32.3536 22.8536C32.5488 22.6583 32.5488 22.3417 32.3536 22.1464L29.1716 18.9645C28.9763 18.7692 28.6597 18.7692 28.4645 18.9645C28.2692 19.1597 28.2692 19.4763 28.4645 19.6716L31.2929 22.5L28.4645 25.3284C28.2692 25.5237 28.2692 25.8403 28.4645 26.0355C28.6597 26.2308 28.9763 26.2308 29.1716 26.0355L32.3536 22.8536ZM0 23H32V22H0V23Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
    {/* <div className="blackbg"></div> */}
    </>
  );
}
