import React from "react";
import "./footer.scss";
import { images } from "../../../assets/images";
import { Link } from "react-router-dom";

const Footer =()=> {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12 content-left">
            <div className="title">Schedule a free consultation</div>
            <button className="helpBtn">How Can We Help You?</button>
            <p>
              Share your goals, thoughts, and ideas, and we will explore
              concepts, design, and build great online experiences making
              customers and users love and share your brand.
            </p>
          </div>
          
          <div className="col-1"></div>
          <div className="col-md-3 col-12 content-center">
            <p className="mb-13">
              Contact us
            </p>
            <a
              className="mb-40 hvr-underline-from-left "
              href="tel:+19876543210"
            >
              +91 9990421542,<br/> +1 315 401 7771
            </a>
            <p className="mb-11 mt-48">Find us</p>
            <div className="mb-40">
              A-28, Sector 4, Noida, Uttar Pradesh
            </div>
            <p className="mb-11">Email</p>
            <a
              href="mailto:hello.world@gmail.com"
              className="hvr-underline-from-left "
            >
              solutions@techxerro.com
            </a>
            <p className="mb-11 mt-40">Career</p>
            <div className="mb-40">
              There are no open positions at the moment, but we're always
              looking for talented, friendly, and nice people to join our team.
              You're welcome to send us an email.
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-md-4 col-12 content-right">
            <div className="row">
              <div className="col-6">
                <a className="row hvr-underline-from-left " href="Services">
                  Services
                </a>
                <a className="row hvr-underline-from-left " href="Portfolio">
                  Portfolio
                </a>
                <a className="row hvr-underline-from-left " href="About">
                  About
                </a>
                <a className="row hvr-underline-from-left " href="Blogs">
                  Blog
                </a>
                <a className="row hvr-underline-from-left " href="Contact">
                  Contact
                </a>
              </div>
              <div className="col-6">
                <a className="row hvr-underline-from-left " href="Instagram">
                  <img src={images.instagram} alt="" />
                  Instagram
                </a>
                <a className="row hvr-underline-from-left " href="Facebook">
                  <img src={images.facebook} alt="" />
                  Facebook
                </a>
                <a className="row hvr-underline-from-left " href="LinkedIn">
                  <img src={images.linkedin} alt="" />
                  LinkedIn
                </a>
                <a className="row hvr-underline-from-left " href="Twitter">
                  <img src={images.twitter} alt="" />
                  Twitter
                </a>
              </div>
            </div>
            <div className="row platforms">
              <p>Platforms</p>
              <div>
                <a
                  className="hvr-underline-from-left "
                  href="www.ovatetextile.com"
                >
                  www.ovatetextile.com
                </a>
              </div>
              <div>
                <a className="hvr-underline-from-left " href="www.gemgatz.com">
                  www.gemgatz.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row copyright-text">
            <div className="col-md-6 col-6"> &#169;	2024 TechXerro All Rights Reserved. </div>
            <div className="col-md-6 col-6 d-flex justify-content-end"><a href="/privacy-policy" style={{color:'#fff', textDecoration:'none',padding:'0'}}>Privacy Policy</a></div>
            {/* <div className="col-md-5 mt-4 col-12 text-center">
              Designed By <Link to="/" className="hvr-underline-from-left  p-0">Techxerro</Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default  Footer;