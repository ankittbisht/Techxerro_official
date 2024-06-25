import React from "react";
import "./style.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Quotes = (props) => {
  return (
    <>
      <section
        className="quote-section"
        // style={{ backgroundImage: `url('${props.background}')` }}
      >
        <picture>
          <source type="image/webp" />
          <LazyLoadImage effect="blur" src={props.background} alt="Office meeting" width="100%" />
        </picture>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <svg
                id="border"
                width="933"
                height="242"
                viewBox="0 0 933 242"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 39V2.5H930.5V239.5H2.5V104.5"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="5"
                />
              </svg>

              <div className="quote-wrapper" data-aos="fade-up">
                <svg
                  width="53"
                  height="43"
                  viewBox="0 0 53 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 0L20.5 8C11.3 10.4 10 17 10.5 20H20.5V43H0V20C0 9.2 11.6667 2.16667 17.5 0Z"
                    fill="white"
                  />
                  <path
                    d="M49.5 0L52.5 8C43.3 10.4 42 17 42.5 20H52.5V43H32V20C32 9.2 43.6667 2.16667 49.5 0Z"
                    fill="white"
                  />
                </svg>
                <h3>{props.quote}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quotes;
