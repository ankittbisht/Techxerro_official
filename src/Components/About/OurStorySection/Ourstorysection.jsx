import React from "react";
import { images } from "../../../assets/images";
import "./style.scss";

const Ourstorysection = () => {
  return (
    <>
      <section className="our-story-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 col-12" >
              <h4>Some Thing Know About Us</h4>
              <p>An unparalleled elevation of brand presences forged by the enlightened alchemy of narrative mastery, technical virtuosity, and vanguard digital acumen.</p>
              <h6>Pioneering Digital Narratives</h6>
              <p>
              At TechXerro, we transcend mere digital presences to forge pioneering narratives that command attention and inspire audiences. Our mission is rooted in an unwavering commitment to creative brilliance, technical mastery, and strategic ingenuity that propels brands into the vanguard of the digital frontier. Through our rare alchemy of world-class storytelling, groundbreaking solutions, and visionary thinking, we unveil new realms of possibility.
              </p>

              <h6>An Elite Consortium of Digital Virtuosos</h6>
              <p>
              Our multidisciplinary collective represents an unrivaled concentration of elite storytellers, designers, developers, and digital strategists – each a virtuoso united by an uncompromising drive for innovation. This coveted brain trust wields the ability to dissect the most formidable challenges through a prismatic lens of creativity and expertise, unleashing profoundly resonant solutions. We are not creators, but digital renaissance visionaries redefining the extent of what's achievable.
              </p>
            </div>
            <div className="col-xl-7 col-lg-6 col-12 d-flex justify-content-end">
              <img src={images.ourstoryimg} alt="techxerro-about"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Ourstorysection;
